import { NextRequest, NextResponse } from "next/server";
import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

function getAdminDb() {
  if (!getApps().length) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      }),
    });
  }
  return getFirestore(getApp());
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, interest, source } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Name and phone are required" },
        { status: 400 }
      );
    }

    const now = new Date().toISOString();
    const lead = {
      name,
      phone,
      interest: interest || "General",
      source: source || "Chatbot",
      status: "New",
      createdAt: now,
    };

    const db = getAdminDb();
    const docRef = await db.collection("leads").add(lead);

    return NextResponse.json({ success: true, id: docRef.id }, { status: 201 });
  } catch (err: any) {
    console.error("Error saving lead:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}