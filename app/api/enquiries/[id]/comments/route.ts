// // app/api/enquiries/[id]/comments/route.ts
// // ── POST   /api/enquiries/[id]/comments        → add a comment
// // ── DELETE /api/enquiries/[id]/comments/[cid]  → remove a comment (in separate file)

// import { NextRequest, NextResponse } from "next/server";
// import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";
// import { getFirestore, FieldValue } from "firebase-admin/firestore";
// import { randomUUID } from "crypto";

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

// // ── POST /api/enquiries/[id]/comments ────────────────────────────────────────
// // Body: { text: string, author?: string }
// export async function POST(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const { id }             = params;
//     const { text, author = "Admin" } = await req.json();

//     if (!text?.trim()) {
//       return NextResponse.json(
//         { success: false, error: "Comment text is required." },
//         { status: 400 }
//       );
//     }

//     const comment = {
//       id:        randomUUID(),
//       text:      text.trim(),
//       author,
//       createdAt: new Date().toISOString(),
//     };

//     const db  = getAdminDb();
//     const ref = db.collection("enquiries").doc(id);

//     await ref.update({
//       comments:  FieldValue.arrayUnion(comment),
//       updatedAt: new Date().toISOString(),
//     });

//     return NextResponse.json({ success: true, comment }, { status: 201 });
//   } catch (err: any) {
//     console.error("[POST /api/enquiries/[id]/comments]", err);
//     return NextResponse.json({ success: false, error: err.message }, { status: 500 });
//   }
// }

// // ── GET /api/enquiries/[id]/comments ─────────────────────────────────────────
// export async function GET(
//   _req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const db  = getAdminDb();
//     const doc = await db.collection("enquiries").doc(params.id).get();

//     if (!doc.exists) {
//       return NextResponse.json({ success: false, error: "Enquiry not found." }, { status: 404 });
//     }

//     const comments = doc.data()?.comments ?? [];
//     return NextResponse.json({ success: true, comments });
//   } catch (err: any) {
//     console.error("[GET /api/enquiries/[id]/comments]", err);
//     return NextResponse.json({ success: false, error: err.message }, { status: 500 });
//   }
// }

// app/api/enquiries/[id]/comments/route.ts

import { NextRequest, NextResponse } from "next/server";
import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { randomUUID } from "crypto";

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

// POST /api/enquiries/[id]/comments
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const { text, author = "Admin" } = await req.json();

    if (!text?.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: "Comment text is required.",
        },
        { status: 400 },
      );
    }

    const comment = {
      id: randomUUID(),
      text: text.trim(),
      author,
      createdAt: new Date().toISOString(),
    };

    const db = getAdminDb();
    const ref = db.collection("enquiries").doc(id);

    await ref.update({
      comments: FieldValue.arrayUnion(comment),
      updatedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        comment,
      },
      { status: 201 },
    );
  } catch (err: any) {
    console.error("[POST /api/enquiries/[id]/comments]", err);

    return NextResponse.json(
      {
        success: false,
        error: err.message,
      },
      { status: 500 },
    );
  }
}

// GET /api/enquiries/[id]/comments
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
          error: "Enquiry not found.",
        },
        { status: 404 },
      );
    }

    const comments = docSnap.data()?.comments ?? [];

    return NextResponse.json({
      success: true,
      comments,
    });
  } catch (err: any) {
    console.error("[GET /api/enquiries/[id]/comments]", err);

    return NextResponse.json(
      {
        success: false,
        error: err.message,
      },
      { status: 500 },
    );
  }
}
