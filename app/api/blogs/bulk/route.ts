import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

// POST /api/blogs/bulk — parse uploaded .docx and create multiple blog posts
// Expects multipart/form-data with a "file" field containing a .docx file
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    if (!file.name.endsWith(".docx")) {
      return NextResponse.json(
        { error: "Only .docx files are supported" },
        { status: 400 },
      );
    }

    // Parse docx using mammoth (server-side)
    // Install: npm install mammoth
    const mammoth = await import("mammoth");
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const { value: htmlContent } = await mammoth.convertToHtml({ buffer });
    const { value: rawText } = await mammoth.extractRawText({ buffer });

    // Split text by BLOG markers (BLOG 1, BLOG 2, etc.)
    const blogChunks = rawText.split(/\n(?=BLOG\s+\d+\b)/i).filter(Boolean);

    if (blogChunks.length === 0) {
      return NextResponse.json(
        {
          error:
            "No BLOG markers found. Each blog must start with 'BLOG 1', 'BLOG 2', etc.",
        },
        { status: 400 },
      );
    }

    // Also split the HTML content in the same way for richer content storage
    const htmlChunks = htmlContent.split(/(?=<[^>]+>BLOG\s+\d+)/i);

    const created: any[] = [];
    const errors: any[] = [];

    for (let i = 0; i < blogChunks.length; i++) {
      const chunk = blogChunks[i].trim();
      try {
        const lines = chunk
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean);

        // First line: "BLOG N" marker — skip it
        const markerLine = lines[0];
        if (!/^BLOG\s+\d+$/i.test(markerLine)) continue;

        // Second line: title
        const title = lines[1];
        if (!title) {
          errors.push({
            marker: markerLine,
            error: "No title found after marker",
          });
          continue;
        }

        // Third line onwards: content
        const contentLines = lines.slice(2);

        // First paragraph after title = excerpt
        const excerpt = contentLines[0] || "";
        const content = contentLines.join("\n");

        // Use HTML chunk if available for richer content
        const htmlChunk = htmlChunks[i + 1] || "";
        const richContent = htmlChunk || content;

        const slug = title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");

        const docRef = await addDoc(collection(db, "blogs"), {
          title: title.trim(),
          slug,
          excerpt: excerpt.trim(),
          content: richContent.trim(),
          category: "Leadership",
          author: "Admin",
          readTime: `${Math.max(1, Math.ceil(content.split(" ").length / 200))} Min Read`,
          image: "",
          status: "published",
          date: new Date().toISOString(),
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now(),
        });

        created.push({ id: docRef.id, title, slug });
      } catch (err: any) {
        errors.push({ chunk: chunk.substring(0, 50), error: err.message });
      }
    }

    return NextResponse.json({
      message: `Successfully imported ${created.length} blog post${created.length !== 1 ? "s" : ""}`,
      created,
      errors,
      total: blogChunks.length,
    });
  } catch (error: any) {
    console.error("[POST /api/blogs/bulk]", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
