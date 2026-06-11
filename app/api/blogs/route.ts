// app/api/blogs/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  Timestamp,
  getCountFromServer,
} from "firebase/firestore";

// GET /api/blogs

export async function GET(req: NextRequest) {
  try {
    console.log("========== BLOG API START ==========");

    const { searchParams } = new URL(req.url);

    const status = searchParams.get("status");
    const category = searchParams.get("category");
    const pageNum = parseInt(searchParams.get("page") || "1", 10);
    const pageSize = parseInt(searchParams.get("limit") || "9", 10);

    console.log("Query Params:", {
      status,
      category,
      pageNum,
      pageSize,
    });

    console.log("Fetching blogs from Firestore...");

    const snap = await getDocs(
      query(collection(db, "blogs"), orderBy("createdAt", "desc")),
    );

    console.log("Total Firestore Docs:", snap.size);

    let allDocs = snap.docs.map((d) => ({
      id: d.id,
      ...(d.data() as any),
      createdAt:
        d.data().createdAt?.toDate?.()?.toISOString() ?? d.data().createdAt,
      updatedAt:
        d.data().updatedAt?.toDate?.()?.toISOString() ?? d.data().updatedAt,
    }));

    console.log("Mapped Docs:", allDocs.length);

    // SHOW ALL BLOG STATUSES
    console.log(
      "Blog Statuses:",
      allDocs.map((b) => ({
        id: b.id,
        title: b.title,
        status: b.status,
      })),
    );

    // STATUS FILTER
    if (status) {
      console.log("Applying Status Filter:", status);

      allDocs = allDocs.filter((b) => {
        const blogStatus = String(b.status || "")
          .trim()
          .toLowerCase();
        const requestedStatus = status.trim().toLowerCase();

        console.log(`Comparing: "${blogStatus}" === "${requestedStatus}"`);

        return blogStatus === requestedStatus;
      });

      console.log("After Status Filter:", allDocs.length);
    }

    // CATEGORY FILTER
    if (category) {
      console.log("Applying Category Filter:", category);

      allDocs = allDocs.filter(
        (b) => String(b.category || "").trim() === category.trim(),
      );

      console.log("After Category Filter:", allDocs.length);
    }

    const total = allDocs.length;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const start = (pageNum - 1) * pageSize;
    const blogs = allDocs.slice(start, start + pageSize);

    console.log("Pagination Info:", {
      total,
      totalPages,
      start,
      returnedBlogs: blogs.length,
    });

    console.log("Returning Blogs:");
    console.log(
      blogs.map((b) => ({
        id: b.id,
        title: b.title,
        status: b.status,
      })),
    );

    console.log("========== BLOG API SUCCESS ==========");

    return NextResponse.json({
      blogs,
      total,
      totalPages,
      page: pageNum,
    });
  } catch (error: any) {
    console.error("========== BLOG API ERROR ==========");
    console.error(error);
    console.error("Message:", error?.message);
    console.error("Stack:", error?.stack);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
// POST /api/blogs — create a new blog post
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      title,
      category,
      author,
      readTime,
      status,
      excerpt,
      content,
      image,
      date,
    } = body;

    if (!title?.trim()) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const now = Timestamp.now();
    const ref = await addDoc(collection(db, "blogs"), {
      title: title.trim(),
      slug,
      category: category || "General",
      author: author || "",
      readTime: readTime || "5 Min Read",
      status: status || "Draft",
      excerpt: excerpt || "",
      content: content || "",
      image: image || "",
      date:
        date ||
        new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
      createdAt: now,
      updatedAt: now,
    });

    return NextResponse.json(
      { id: ref.id, slug, message: "Blog post created" },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("[POST /api/blogs]", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
