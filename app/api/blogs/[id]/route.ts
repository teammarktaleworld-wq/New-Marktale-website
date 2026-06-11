// // app/api/blogs/[id]/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import { db } from "@/lib/firebase";
// import {
//   doc,
//   getDoc,
//   updateDoc,
//   deleteDoc,
//   collection,
//   getDocs,
//   query,
//   where,
//   Timestamp,
// } from "firebase/firestore";

// // GET /api/blogs/[id] — get single blog by Firestore id OR slug
// export async function GET(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     // First try as Firestore document ID
//     const docRef = doc(db, "blogs", params.id);
//     const snap   = await getDoc(docRef);

//     if (snap.exists()) {
//       const data = snap.data() as any;
//       return NextResponse.json({
//         id: snap.id,
//         ...data,
//         createdAt: data.createdAt?.toDate?.()?.toISOString() ?? data.createdAt,
//         updatedAt: data.updatedAt?.toDate?.()?.toISOString() ?? data.updatedAt,
//       });
//     }

//     // Fall back: treat as slug
//     const slugQ  = query(collection(db, "blogs"), where("slug", "==", params.id));
//     const slugSnap = await getDocs(slugQ);

//     if (!slugSnap.empty) {
//       const d    = slugSnap.docs[0];
//       const data = d.data() as any;
//       return NextResponse.json({
//         id: d.id,
//         ...data,
//         createdAt: data.createdAt?.toDate?.()?.toISOString() ?? data.createdAt,
//         updatedAt: data.updatedAt?.toDate?.()?.toISOString() ?? data.updatedAt,
//       });
//     }

//     return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
//   } catch (error: any) {
//     console.error("[GET /api/blogs/[id]]", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// // PATCH /api/blogs/[id] — partial update
// export async function PATCH(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const body = await req.json();
//     const { id: _id, createdAt: _ca, ...updates } = body;

//     if (Object.keys(updates).length === 0) {
//       return NextResponse.json({ error: "No fields to update" }, { status: 400 });
//     }

//     const docRef = doc(db, "blogs", params.id);
//     const snap   = await getDoc(docRef);
//     if (!snap.exists()) {
//       return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
//     }

//     // Regenerate slug if title changed
//     if (updates.title) {
//       updates.slug = updates.title
//         .toLowerCase()
//         .replace(/[^a-z0-9]+/g, "-")
//         .replace(/(^-|-$)/g, "");
//     }

//     await updateDoc(docRef, { ...updates, updatedAt: Timestamp.now() });

//     return NextResponse.json({ message: "Updated", id: params.id });
//   } catch (error: any) {
//     console.error("[PATCH /api/blogs/[id]]", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// // DELETE /api/blogs/[id]
// export async function DELETE(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const docRef = doc(db, "blogs", params.id);
//     const snap   = await getDoc(docRef);
//     if (!snap.exists()) {
//       return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
//     }

//     await deleteDoc(docRef);
//     return NextResponse.json({ message: "Deleted", id: params.id });
//   } catch (error: any) {
//     console.error("[DELETE /api/blogs/[id]]", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// app/api/blogs/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import {
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  collection,
  getDocs,
  query,
  where,
  Timestamp,
} from "firebase/firestore";

// GET /api/blogs/[id] — get single blog by Firestore id OR slug
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    // First try as Firestore document ID
    const docRef = doc(db, "blogs", id);
    const snap = await getDoc(docRef);

    if (snap.exists()) {
      const data = snap.data() as any;

      return NextResponse.json({
        id: snap.id,
        ...data,
        createdAt: data.createdAt?.toDate?.()?.toISOString() ?? data.createdAt,
        updatedAt: data.updatedAt?.toDate?.()?.toISOString() ?? data.updatedAt,
      });
    }

    // Fall back: treat as slug
    const slugQ = query(collection(db, "blogs"), where("slug", "==", id));

    const slugSnap = await getDocs(slugQ);

    if (!slugSnap.empty) {
      const d = slugSnap.docs[0];
      const data = d.data() as any;

      return NextResponse.json({
        id: d.id,
        ...data,
        createdAt: data.createdAt?.toDate?.()?.toISOString() ?? data.createdAt,
        updatedAt: data.updatedAt?.toDate?.()?.toISOString() ?? data.updatedAt,
      });
    }

    return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
  } catch (error: any) {
    console.error("[GET /api/blogs/[id]]", error);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PATCH /api/blogs/[id] — partial update
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await req.json();

    const { id: _id, createdAt: _ca, ...updates } = body;

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { error: "No fields to update" },
        { status: 400 },
      );
    }

    const docRef = doc(db, "blogs", id);
    const snap = await getDoc(docRef);

    if (!snap.exists()) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 },
      );
    }

    // Regenerate slug if title changed
    if (updates.title) {
      updates.slug = updates.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    }

    await updateDoc(docRef, {
      ...updates,
      updatedAt: Timestamp.now(),
    });

    return NextResponse.json({
      message: "Updated",
      id,
    });
  } catch (error: any) {
    console.error("[PATCH /api/blogs/[id]]", error);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE /api/blogs/[id]
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const docRef = doc(db, "blogs", id);
    const snap = await getDoc(docRef);

    if (!snap.exists()) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 },
      );
    }

    await deleteDoc(docRef);

    return NextResponse.json({
      message: "Deleted",
      id,
    });
  } catch (error: any) {
    console.error("[DELETE /api/blogs/[id]]", error);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
