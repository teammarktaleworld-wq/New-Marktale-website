import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function GET() {
  const snap = await getDocs(collection(db, "blogs"));

  const blogs = snap.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  }));

  console.log("ALL BLOGS:", blogs);

  return NextResponse.json(blogs);
}
