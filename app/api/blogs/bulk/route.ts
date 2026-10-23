import { NextRequest, NextResponse } from "next/server";
import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth as getAdminAuth } from "firebase-admin/auth";
import { getFirestore as getAdminFirestore, FieldValue as AdminFieldValue } from "firebase-admin/firestore";
import { db as clientDb } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp as clientServerTimestamp } from "firebase/firestore";
import * as XLSX from "xlsx";
import {
  formatContentToHtml,
  normalizeCategory,
  slugify,
  calculateReadTime,
  ALLOWED_CATEGORIES,
} from "@/lib/blog-excel-utils";

function getAdminApp() {
  const existingApp = getApps().find((app) => app.name === "[DEFAULT]");
  if (existingApp) return existingApp;

  const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!projectId || !clientEmail || !privateKey) {
    return null; // Return null so we can fallback gracefully
  }

  return initializeApp({
    credential: cert({ projectId, clientEmail, privateKey }),
  });
}

interface IncomingBlog {
  title: string;
  slug?: string;
  category?: string;
  excerpt?: string;
  content: string;
  author?: string;
  readTime?: string;
  status?: "Published" | "Draft";
  image?: string;
  date?: string;
}

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let blogsToImport: IncomingBlog[] = [];

    // Check optional admin authorization if Firebase Admin is configured
    const token = req.headers.get("authorization")?.match(/^Bearer\s+(.+)$/i)?.[1];
    const adminApp = getAdminApp();

    if (adminApp && token) {
      try {
        const decoded = await getAdminAuth(adminApp).verifyIdToken(token);
        const adminDb = getAdminFirestore(adminApp);
        const userDoc = await adminDb.collection("users").doc(decoded.uid).get();
        if (userDoc.exists && userDoc.data()?.role !== "admin") {
          return NextResponse.json({ error: "Admin access required" }, { status: 403 });
        }
      } catch (authErr) {
        console.warn("[POST /api/blogs/bulk] Token verify skipped or failed:", authErr);
      }
    }

    if (contentType.includes("application/json")) {
      // 1. JSON payload from interactive client review modal
      const body = await req.json();
      if (!Array.isArray(body.blogs) || body.blogs.length === 0) {
        return NextResponse.json({ error: "No blogs array provided in JSON request" }, { status: 400 });
      }
      blogsToImport = body.blogs;
    } else {
      // 2. Multipart form data (Excel or DOCX file upload)
      const formData = await req.formData();
      const file = formData.get("file") as File | null;
      const defaultAuthor = String(formData.get("author") ?? "").trim();

      if (!file) {
        return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
      }

      const fileName = file.name.toLowerCase();

      if (fileName.endsWith(".xlsx") || fileName.endsWith(".xls") || fileName.endsWith(".csv")) {
        // Parse Excel file server-side
        const buffer = await file.arrayBuffer();
        const workbook = XLSX.read(buffer, { type: "array" });
        const firstSheetName = workbook.SheetNames[0];
        if (!firstSheetName) {
          return NextResponse.json({ error: "Excel file has no sheets" }, { status: 400 });
        }
        const rows: Record<string, any>[] = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheetName], {
          defval: "",
          raw: false,
        });

        for (const row of rows) {
          const title = String(row.Title || row.title || row.Headline || row.articletitle || "").trim();
          const content = String(row.Content || row.content || row.Body || row.article || "").trim();
          if (!title && !content) continue;

          blogsToImport.push({
            title,
            category: String(row.Category || row.category || "").trim(),
            excerpt: String(row.Excerpt || row.excerpt || row.Summary || "").trim(),
            content,
            author: String(row.Author || row.author || defaultAuthor).trim(),
            status: String(row.Status || row.status || "Published").toLowerCase() === "draft" ? "Draft" : "Published",
            image: String(row["Featured Image"] || row.Image || row.image || row.imageurl || "").trim(),
            readTime: String(row["Read Time"] || row.ReadTime || row.readtime || "").trim(),
            date: String(row.Date || row.date || "").trim(),
          });
        }
      } else if (fileName.endsWith(".docx")) {
        // Legacy fallback: parse docx using mammoth
        const mammoth = await import("mammoth");
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const { value: rawText } = await mammoth.extractRawText({ buffer });
        const { value: htmlContent } = await mammoth.convertToHtml({ buffer });

        const blogChunks = rawText.split(/\n(?=BLOG\s+\d+\b)/i).filter(Boolean);
        const htmlChunks = htmlContent.split(/(?=<[^>]+>BLOG\s+\d+)/i);

        for (let i = 0; i < blogChunks.length; i++) {
          const lines = blogChunks[i].trim().split("\n").map((l) => l.trim()).filter(Boolean);
          if (!lines[0] || !/^BLOG\s+\d+$/i.test(lines[0])) continue;

          const title = lines[1] || "";
          const catLine = lines.find((l) => /^Category\s*:/i.test(l));
          const category = catLine ? catLine.replace(/^Category\s*:\s*/i, "").trim() : "Business";
          const contentLines = lines.slice(2).filter((l) => !/^Category\s*:/i.test(l));
          const excerpt = contentLines[0] || "";
          const content = (htmlChunks[i + 1] || contentLines.join("\n\n")).replace(
            /<p\b[^>]*>([\s\S]*?)<\/p>/gi,
            (paragraph, innerText: string) =>
              /^Category\s*:/i.test(innerText.replace(/<[^>]*>/g, "").trim()) ? "" : paragraph
          );

          blogsToImport.push({
            title,
            category,
            excerpt,
            content,
            author: defaultAuthor,
            status: "Published",
          });
        }
      } else {
        return NextResponse.json(
          { error: "Unsupported file type. Please upload an Excel (.xlsx, .xls) or .csv file." },
          { status: 400 }
        );
      }
    }

    if (blogsToImport.length === 0) {
      return NextResponse.json({ error: "No valid blog entries found to import." }, { status: 400 });
    }

    const created: any[] = [];
    const errors: any[] = [];
    const useAdminDb = adminApp ? getAdminFirestore(adminApp) : null;

    for (let i = 0; i < blogsToImport.length; i++) {
      const item = blogsToImport[i];
      try {
        const title = (item.title || "").trim();
        if (!title) {
          errors.push({ index: i + 1, error: "Article title is required" });
          continue;
        }

        const rawContent = (item.content || "").trim();
        if (!rawContent) {
          errors.push({ index: i + 1, title, error: "Article content is required" });
          continue;
        }

        // Clean & format content (handles paragraphs, lists, bolding, headings)
        const formattedHtml = formatContentToHtml(rawContent);

        // Normalize category
        let category = normalizeCategory(item.category);
        if (!category || !ALLOWED_CATEGORIES.includes(category as any)) {
          category = "Business"; // Safe fallback
        }

        // Clean excerpt
        let excerpt = (item.excerpt || "").trim();
        if (!excerpt) {
          const clean = rawContent.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
          excerpt = clean.length > 160 ? `${clean.slice(0, 157)}...` : clean;
        }

        const slug = (item.slug || slugify(title)).trim();
        const author = (item.author || "MarkTale Team").trim();
        const readTime = (item.readTime || calculateReadTime(rawContent)).trim();
        const status = item.status === "Draft" ? "Draft" : "Published";
        const image = (item.image || "").trim();
        const date =
          item.date ||
          new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          });

        const blogData = {
          title,
          slug,
          category,
          excerpt,
          content: formattedHtml,
          author,
          readTime,
          status,
          image,
          date,
        };

        if (useAdminDb) {
          const docRef = await useAdminDb.collection("blogs").add({
            ...blogData,
            createdAt: AdminFieldValue.serverTimestamp(),
            updatedAt: AdminFieldValue.serverTimestamp(),
          });
          created.push({ id: docRef.id, title, slug, category, status });
        } else {
          const docRef = await addDoc(collection(clientDb, "blogs"), {
            ...blogData,
            createdAt: clientServerTimestamp(),
            updatedAt: clientServerTimestamp(),
          });
          created.push({ id: docRef.id, title, slug, category, status });
        }
      } catch (err: any) {
        errors.push({ index: i + 1, title: item.title, error: err.message });
      }
    }

    return NextResponse.json({
      message: `Successfully imported ${created.length} blog post${created.length !== 1 ? "s" : ""}`,
      created,
      errors,
      total: blogsToImport.length,
    });
  } catch (error: any) {
    console.error("[POST /api/blogs/bulk]", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
