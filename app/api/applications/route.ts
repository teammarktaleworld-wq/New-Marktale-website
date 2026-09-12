// app/api/applications/route.ts
// ── GET  /api/applications  → list job applications (optional filters)
// ── POST /api/applications  → create new application (from Careers "Apply Now" modal)

import { NextRequest, NextResponse } from "next/server";
import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

// ─── Firebase Admin ───────────────────────────────────────────────────────────
function getAdminDb() {

  
  if (!getApps().length) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(
          /\\n/g,
          "\n",
        ),
      }),
    });
  }
  return getFirestore(getApp());
}

// ─── Types ────────────────────────────────────────────────────────────────────
export type ApplicationStatus =
  | "New"
  | "Reviewed"
  | "Shortlisted"
  | "Rejected"
  | "Hired";

export interface JobApplication {
  id: string; // Firestore doc id
  name: string;
  email: string;
  phone: string;
  role: string; // job title applied for
  portfolioUrl: string;
  message: string;
  status: ApplicationStatus;
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
}

// ─── Helper: serialize Firestore doc ─────────────────────────────────────────
function serializeDoc(
  id: string,
  data: FirebaseFirestore.DocumentData,
): JobApplication {
  return {
    id,
    name: data.name ?? "",
    email: data.email ?? "",
    phone: data.phone ?? "",
    role: data.role ?? "Not specified",
    portfolioUrl: data.portfolioUrl ?? "",
    message: data.message ?? "",
    status: data.status ?? "New",
    createdAt:
      data.createdAt instanceof Timestamp
        ? data.createdAt.toDate().toISOString()
        : (data.createdAt ?? new Date().toISOString()),
    updatedAt:
      data.updatedAt instanceof Timestamp
        ? data.updatedAt.toDate().toISOString()
        : (data.updatedAt ?? new Date().toISOString()),
  };
}

// ═════════════════════════════════════════════════════════════════════════════
// GET /api/applications
// Query params:
//   status = New | Reviewed | Shortlisted | Rejected | Hired
//   role   = exact job title match
//   limit  = number (default 50)
// ═════════════════════════════════════════════════════════════════════════════
export async function GET(req: NextRequest) {
  try {
    const db = getAdminDb();
    const params = req.nextUrl.searchParams;

    const statusFilter = params.get("status");
    const roleFilter = params.get("role");
    const limitParam = Number(params.get("limit") ?? 50);

    let query: FirebaseFirestore.Query = db
      .collection("applications")
      .orderBy("createdAt", "desc")
      .limit(limitParam);

    if (statusFilter && statusFilter !== "All") {
      query = query.where("status", "==", statusFilter);
    }
    if (roleFilter && roleFilter !== "All") {
      query = query.where("role", "==", roleFilter);
    }

    const snap = await query.get();
    const applications = snap.docs.map((d) => serializeDoc(d.id, d.data()));

    return NextResponse.json({ success: true, applications }, { status: 200 });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Internal server error";
    console.error("[GET /api/applications]", err);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 },
    );
  }
}

// ═════════════════════════════════════════════════════════════════════════════
// POST /api/applications  — create from Careers page "Apply Now" modal
// Body: { name, email, phone, role, portfolioUrl?, message? }
// ═════════════════════════════════════════════════════════════════════════════
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, role, portfolioUrl, message } = body;

    if (!name || !email || !phone || !role) {
      return NextResponse.json(
        { success: false, error: "name, email, phone and role are required." },
        { status: 400 },
      );
    }

    const now = new Date().toISOString();
    const application = {
      name,
      email,
      phone,
      role,
      portfolioUrl: portfolioUrl || "",
      message: message || "",
      status: "New" as ApplicationStatus,
      createdAt: now,
      updatedAt: now,
    };

    const db = getAdminDb();
    const docRef = await db.collection("applications").add(application);

    return NextResponse.json({ success: true, id: docRef.id }, { status: 200 });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Internal server error";
    console.error("[POST /api/applications]", err);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 },
    );
  }
}
