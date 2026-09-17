import { NextRequest, NextResponse } from "next/server";
import {
  initializeApp,
  getApps,
  getApp,
  cert,
} from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

function getAdminDb() {
  if (!getApps().length) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(
          /\\n/g,
          "\n"
        ),
      }),
    });
  }

  return getFirestore(getApp());
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      phone,
      email,
      business,
      requirement,
    } = body;

    // Required fields
    if (!name || !phone || !business) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, phone and business are required.",
        },
        { status: 400 }
      );
    }

    const db = getAdminDb();

    // Data to save
    const contactData = {
      name: String(name).trim(),
      phone: String(phone).trim(),
      email: String(email || "").trim(),
      business: String(business).trim(),
      requirement: String(requirement || "").trim(),

      source: "Landing Page",

      createdAt: new Date().toISOString(),

      status: "new",
    };

    // Separate collection
    const docRef = await db
      .collection("landing page contact")
      .add(contactData);

    return NextResponse.json(
      {
        success: true,
        message: "Contact saved successfully.",
        id: docRef.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Landing Page Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save contact.",
      },
      { status: 500 }
    );
  }
}