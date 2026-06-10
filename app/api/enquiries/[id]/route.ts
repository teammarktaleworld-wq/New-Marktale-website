// // app/api/enquiries/[id]/route.ts
// // ── PATCH  /api/enquiries/[id]  → update status and/or contactStatus

// import { NextRequest, NextResponse } from "next/server";
// import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";
// import { getFirestore } from "firebase-admin/firestore";

// function getAdminDb() {
//   if (!getApps().length) {
//     initializeApp({
//       credential: cert({
//         projectId:   process.env.FIREBASE_ADMIN_PROJECT_ID,
//         clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
//         privateKey:  process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n"),
//       }),
//     });
//   }
//   return getFirestore(getApp());
// }

// // ── PATCH /api/enquiries/[id] ─────────────────────────────────────────────────
// // Body: { status?, contactStatus? }
// export async function PATCH(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const { id } = params;
//     const body   = await req.json();

//     const allowed = ["status", "contactStatus"];
//     const updates: Record<string, any> = { updatedAt: new Date().toISOString() };

//     for (const key of allowed) {
//       if (body[key] !== undefined) updates[key] = body[key];
//     }

//     if (Object.keys(updates).length === 1) {
//       return NextResponse.json(
//         { success: false, error: "No valid fields to update." },
//         { status: 400 }
//       );
//     }

//     const db = getAdminDb();
//     await db.collection("enquiries").doc(id).update(updates);

//     return NextResponse.json({ success: true, id, updates }, { status: 200 });
//   } catch (err: any) {
//     console.error("[PATCH /api/enquiries/[id]]", err);
//     return NextResponse.json({ success: false, error: err.message }, { status: 500 });
//   }
// }

// // ── GET /api/enquiries/[id] ───────────────────────────────────────────────────
// export async function GET(
//   _req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const db  = getAdminDb();
//     const doc = await db.collection("enquiries").doc(params.id).get();

//     if (!doc.exists) {
//       return NextResponse.json({ success: false, error: "Not found." }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, enquiry: { id: doc.id, ...doc.data() } });
//   } catch (err: any) {
//     console.error("[GET /api/enquiries/[id]]", err);
//     return NextResponse.json({ success: false, error: err.message }, { status: 500 });
//   }
// }

// app/api/enquiries/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

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

// PATCH /api/enquiries/[id]
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await req.json();

    const allowed = ["status", "contactStatus"];

    const updates: Record<string, any> = {
      updatedAt: new Date().toISOString(),
    };

    for (const key of allowed) {
      if (body[key] !== undefined) {
        updates[key] = body[key];
      }
    }

    if (Object.keys(updates).length === 1) {
      return NextResponse.json(
        {
          success: false,
          error: "No valid fields to update.",
        },
        { status: 400 },
      );
    }

    const db = getAdminDb();

    await db.collection("enquiries").doc(id).update(updates);

    return NextResponse.json(
      {
        success: true,
        id,
        updates,
      },
      { status: 200 },
    );
  } catch (err: any) {
    console.error("[PATCH /api/enquiries/[id]]", err);

    return NextResponse.json(
      {
        success: false,
        error: err.message,
      },
      { status: 500 },
    );
  }
}

// GET /api/enquiries/[id]
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const db = getAdminDb();
    const docSnap = await db.collection("enquiries").doc(id).get();

    if (!docSnap.exists) {
      return NextResponse.json(
        {
          success: false,
          error: "Not found.",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      enquiry: {
        id: docSnap.id,
        ...docSnap.data(),
      },
    });
  } catch (err: any) {
    console.error("[GET /api/enquiries/[id]]", err);

    return NextResponse.json(
      {
        success: false,
        error: err.message,
      },
      { status: 500 },
    );
  }
}
