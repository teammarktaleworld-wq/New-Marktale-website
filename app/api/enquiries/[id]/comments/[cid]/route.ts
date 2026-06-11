// // app/api/enquiries/[id]/comments/[cid]/route.ts
// // ── DELETE /api/enquiries/[id]/comments/[cid]  → remove a specific comment

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

// // ── DELETE /api/enquiries/[id]/comments/[cid] ────────────────────────────────
// export async function DELETE(
//   _req: NextRequest,
//   { params }: { params: { id: string; cid: string } }
// ) {
//   try {
//     const { id, cid } = params;
//     const db          = getAdminDb();
//     const ref         = db.collection("enquiries").doc(id);
//     const snap        = await ref.get();

//     if (!snap.exists) {
//       return NextResponse.json({ success: false, error: "Enquiry not found." }, { status: 404 });
//     }

//     const existing: any[] = snap.data()?.comments ?? [];
//     const updated  = existing.filter((c) => c.id !== cid);

//     if (updated.length === existing.length) {
//       return NextResponse.json({ success: false, error: "Comment not found." }, { status: 404 });
//     }

//     await ref.update({
//       comments:  updated,
//       updatedAt: new Date().toISOString(),
//     });

//     return NextResponse.json({ success: true, deletedId: cid }, { status: 200 });
//   } catch (err: any) {
//     console.error("[DELETE /api/enquiries/[id]/comments/[cid]]", err);
//     return NextResponse.json({ success: false, error: err.message }, { status: 500 });
//   }
// }

// app/api/enquiries/[id]/comments/[cid]/route.ts
// DELETE /api/enquiries/[id]/comments/[cid]

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

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string; cid: string }> },
) {
  try {
    const { id, cid } = await params;

    const db = getAdminDb();
    const ref = db.collection("enquiries").doc(id);
    const snap = await ref.get();

    if (!snap.exists) {
      return NextResponse.json(
        {
          success: false,
          error: "Enquiry not found.",
        },
        { status: 404 },
      );
    }

    const existing: any[] = snap.data()?.comments ?? [];

    const updated = existing.filter((c) => c.id !== cid);

    if (updated.length === existing.length) {
      return NextResponse.json(
        {
          success: false,
          error: "Comment not found.",
        },
        { status: 404 },
      );
    }

    await ref.update({
      comments: updated,
      updatedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        deletedId: cid,
      },
      { status: 200 },
    );
  } catch (err: any) {
    console.error("[DELETE /api/enquiries/[id]/comments/[cid]]", err);

    return NextResponse.json(
      {
        success: false,
        error: err.message,
      },
      { status: 500 },
    );
  }
}
