// app/api/enquiries/route.ts
// ── GET  /api/enquiries        → list enquiries (with filter params)
// ── POST /api/enquiries        → create new enquiry (from contact form)
// ── PATCH  /api/enquiries/[id] → update status / contactStatus
// ── POST /api/enquiries/[id]/comments → add a comment
// ── DELETE /api/enquiries/[id]/comments/[cid] → delete a comment

import { NextRequest, NextResponse } from "next/server";
import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";
import { getFirestore, FieldValue, Timestamp } from "firebase-admin/firestore";
import nodemailer from "nodemailer";

// ─── Firebase Admin ───────────────────────────────────────────────────────────
function getAdminDb() {
  if (!getApps().length) {
    initializeApp({
      credential: cert({
        projectId:   process.env.FIREBASE_ADMIN_PROJECT_ID,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey:  process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      }),
    });
  }
  return getFirestore(getApp());
}

// ─── Nodemailer ───────────────────────────────────────────────────────────────
function getTransporter() {
  return nodemailer.createTransport({
    host:   process.env.SMTP_HOST,
    port:   Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

// ─── Types ────────────────────────────────────────────────────────────────────
export type EnquiryStatus  = "New" | "Replied" | "Archived";
export type ContactStatus  =
  | "Not Contacted"
  | "Enquired"
  | "Pending"
  | "Follow-up"
  | "Closed";

export interface Comment {
  id:        string;
  text:      string;
  author:    string;
  createdAt: string; // ISO string
}

export interface Enquiry {
  id:            string;  // Firestore doc id
  name:          string;
  phone:         string;
  email:         string;
  service:       string;
  message:       string;
  source:        string;  // "Contact Form" | "Email" | "Social" …
  status:        EnquiryStatus;
  contactStatus: ContactStatus;
  comments:      Comment[];
  createdAt:     string;  // ISO string
  updatedAt:     string;  // ISO string
}

// ─── Helper: serialize Firestore doc ─────────────────────────────────────────
function serializeDoc(id: string, data: FirebaseFirestore.DocumentData): Enquiry {
  return {
    id,
    name:          data.name          ?? "",
    phone:         data.phone         ?? "",
    email:         data.email         ?? "",
    service:       data.service       ?? "Not specified",
    message:       data.message       ?? "",
    source:        data.source        ?? "Contact Form",
    status:        data.status        ?? "New",
    contactStatus: data.contactStatus ?? "Not Contacted",
    comments:      (data.comments     ?? []).map((c: any) => ({
      id:        c.id        ?? "",
      text:      c.text      ?? "",
      author:    c.author    ?? "Admin",
      createdAt: c.createdAt instanceof Timestamp
        ? c.createdAt.toDate().toISOString()
        : (c.createdAt ?? new Date().toISOString()),
    })),
    createdAt: data.createdAt instanceof Timestamp
      ? data.createdAt.toDate().toISOString()
      : (data.createdAt ?? new Date().toISOString()),
    updatedAt: data.updatedAt instanceof Timestamp
      ? data.updatedAt.toDate().toISOString()
      : (data.updatedAt ?? new Date().toISOString()),
  };
}

// ═════════════════════════════════════════════════════════════════════════════
// GET /api/enquiries
// Query params:
//   status         = New | Replied | Archived
//   contactStatus  = Not Contacted | Enquired | Pending | Follow-up | Closed
//   search         = (partial match on name/email/subject — done client-side)
//   limit          = number (default 50)
// ═════════════════════════════════════════════════════════════════════════════
export async function GET(req: NextRequest) {
  try {
    const db     = getAdminDb();
    const params = req.nextUrl.searchParams;

    const statusFilter        = params.get("status");
    const contactStatusFilter = params.get("contactStatus");
    const limitParam          = Number(params.get("limit") ?? 50);

    let query: FirebaseFirestore.Query = db.collection("enquiries")
      .orderBy("createdAt", "desc")
      .limit(limitParam);

    if (statusFilter && statusFilter !== "All") {
      query = query.where("status", "==", statusFilter);
    }
    if (contactStatusFilter && contactStatusFilter !== "All") {
      query = query.where("contactStatus", "==", contactStatusFilter);
    }

    const snap = await query.get();
    const enquiries = snap.docs.map((d) => serializeDoc(d.id, d.data()));

    return NextResponse.json({ success: true, enquiries }, { status: 200 });
  } catch (err: any) {
    console.error("[GET /api/enquiries]", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

// ═════════════════════════════════════════════════════════════════════════════
// POST /api/enquiries   — create from contact form + send emails
// Body: { name, phone, email, service, message, source? }
// ═════════════════════════════════════════════════════════════════════════════
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, service, message, source = "Contact Form" } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { success: false, error: "name, phone and email are required." },
        { status: 400 }
      );
    }

    const now = new Date().toISOString();
    const enquiry = {
      name,
      phone,
      email,
      service:       service || "Not specified",
      message:       message || "",
      source,
      status:        "New"           as EnquiryStatus,
      contactStatus: "Not Contacted" as ContactStatus,
      comments:      [],
      createdAt:     now,
      updatedAt:     now,
    };

    // 1. Save to Firestore
    const db     = getAdminDb();
    const docRef = await db.collection("enquiries").add(enquiry);

    // 2. Email to team
    const transporter = getTransporter();
    await transporter.sendMail({
      from:    `"MarkTale Website" <${process.env.SMTP_USER}>`,
      to:      "teammarktaleworld@gmail.com",
      subject: `New Enquiry from ${name} — ${service}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #e5e5e5;border-radius:8px;overflow:hidden;">
          <div style="background:#111;padding:24px 32px;"><h2 style="color:#fff;margin:0;">New Enquiry — MarkTale World</h2></div>
          <div style="padding:32px;background:#fafafa;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;font-weight:bold;color:#555;width:130px;">Name</td><td>${name}</td></tr>
              <tr><td style="padding:8px 0;font-weight:bold;color:#555;">Phone</td><td>${phone}</td></tr>
              <tr><td style="padding:8px 0;font-weight:bold;color:#555;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding:8px 0;font-weight:bold;color:#555;">Service</td><td>${service}</td></tr>
              <tr><td style="padding:8px 0;font-weight:bold;color:#555;vertical-align:top;">Message</td><td>${message || "—"}</td></tr>
              <tr><td style="padding:8px 0;font-weight:bold;color:#555;">Firestore ID</td><td style="color:#999;font-size:12px;">${docRef.id}</td></tr>
            </table>
          </div>
        </div>
      `,
    });

    // 3. Confirmation email to customer
    await transporter.sendMail({
      from:    `"MarkTale World" <${process.env.SMTP_USER}>`,
      to:      email,
      subject: "We received your enquiry — MarkTale World",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #e5e5e5;border-radius:8px;overflow:hidden;">
          <div style="background:#111;padding:24px 32px;"><h2 style="color:#fff;margin:0;">Thanks for reaching out, ${name}!</h2></div>
          <div style="padding:32px;background:#fafafa;">
            <p style="color:#444;line-height:1.7;">We received your enquiry about <strong>${service}</strong>. Our team will get back to you within <strong>24 hours</strong>.</p>
            <p style="color:#444;line-height:1.7;">You can also WhatsApp us at <a href="https://wa.me/918527664228" style="color:#e31e24;">+91-8527664228</a>.</p>
            <p style="margin-top:32px;color:#999;font-size:13px;">— Team MarkTale World</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, id: docRef.id }, { status: 200 });
  } catch (err: any) {
    console.error("[POST /api/enquiries]", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}