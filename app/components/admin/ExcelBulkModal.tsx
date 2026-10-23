"use client";

import React, { useState, useRef } from "react";
import {
  FileSpreadsheet,
  Download,
  Upload,
  AlertCircle,
  CheckCircle2,
  AlertTriangle,
  Eye,
  Trash2,
  Loader2,
  Sparkles,
  Image as ImageIcon,
  Check,
  X,
  RefreshCw,
  FileText,
} from "lucide-react";
import {
  parseExcelBlogs,
  downloadExcelTemplate,
  downloadBlankExcelTemplate,
  downloadSampleExcelTemplate,
  ALLOWED_CATEGORIES,
  formatContentToHtml,
  calculateReadTime,
  slugify,
  ParsedBlogRow,
} from "@/lib/blog-excel-utils";
import { auth, db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

interface ExcelBulkModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

export default function ExcelBulkModal({ onClose, onSuccess }: ExcelBulkModalProps) {
  const [step, setStep] = useState<"upload" | "review" | "success">("upload");
  const [file, setFile] = useState<File | null>(null);
  const [isParsing, setIsParsing] = useState(false);
  const [parseError, setParseError] = useState<string | null>(null);

  // Parsed rows
  const [rows, setRows] = useState<ParsedBlogRow[]>([]);

  // Batch autofill / default controls
  const [batchAuthor, setBatchAuthor] = useState("");
  const [batchCategory, setBatchCategory] = useState<string>("");
  const [batchStatus, setBatchStatus] = useState<"Published" | "Draft">("Published");

  // Per-row image uploading tracking
  const [uploadingImageRowId, setUploadingImageRowId] = useState<string | null>(null);

  // Content preview modal
  const [previewRow, setPreviewRow] = useState<ParsedBlogRow | null>(null);

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [importProgress, setImportProgress] = useState(0);
  const [importResult, setImportResult] = useState<{
    created: Array<{ title: string; slug: string }>;
    errors: Array<{ title?: string; error: string }>;
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const rowImageInputRef = useRef<HTMLInputElement>(null);
  const [activeRowForImage, setActiveRowForImage] = useState<string | null>(null);

  // ── Drag & Drop Handlers ──────────────────────────────────────────────────
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      await processSelectedFile(droppedFile);
    }
  };

  const handleFileInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      await processSelectedFile(selectedFile);
    }
  };

  // ── Process Excel File ────────────────────────────────────────────────────
  const processSelectedFile = async (f: File) => {
    const name = f.name.toLowerCase();
    if (!name.endsWith(".xlsx") && !name.endsWith(".xls") && !name.endsWith(".csv")) {
      setParseError("Please upload an Excel (.xlsx, .xls) or .csv file.");
      return;
    }

    try {
      setIsParsing(true);
      setParseError(null);
      setFile(f);
      const parsed = await parseExcelBlogs(f);

      if (parsed.length === 0) {
        setParseError("No valid blog entries found in the file.");
        return;
      }

      setRows(parsed);
      setStep("review");
    } catch (err: any) {
      console.error("Excel parse error:", err);
      setParseError(err.message || "Failed to parse the Excel file.");
    } finally {
      setIsParsing(false);
    }
  };

  // ── Batch Autofill Actions ────────────────────────────────────────────────
  const applyBatchAuthor = (mode: "empty" | "all") => {
    if (!batchAuthor.trim()) return;
    setRows((prev) =>
      prev.map((r) => {
        if (mode === "all" || !r.author.trim()) {
          const warnings = r.warnings.filter((w) => !w.toLowerCase().includes("author"));
          return {
            ...r,
            author: batchAuthor.trim(),
            warnings,
            isValid: r.errors.length === 0,
          };
        }
        return r;
      })
    );
  };

  const applyBatchCategory = (mode: "empty" | "all") => {
    if (!batchCategory) return;
    setRows((prev) =>
      prev.map((r) => {
        if (mode === "all" || !r.category) {
          const warnings = r.warnings.filter((w) => !w.toLowerCase().includes("category"));
          return {
            ...r,
            category: batchCategory,
            warnings,
            isValid: r.errors.length === 0,
          };
        }
        return r;
      })
    );
  };

  const applyBatchStatus = () => {
    setRows((prev) =>
      prev.map((r) => ({
        ...r,
        status: batchStatus,
      }))
    );
  };

  // ── Row-Level Mutations ───────────────────────────────────────────────────
  const updateRow = (id: string, updates: Partial<ParsedBlogRow>) => {
    setRows((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r;
        const updated = { ...r, ...updates };

        // Recalculate errors/warnings if title or content changed
        const errors: string[] = [];
        const warnings: string[] = [];

        if (!updated.title.trim()) {
          errors.push("Title is required");
        }
        if (!updated.content.trim()) {
          errors.push("Content is required");
        }
        if (!updated.category) {
          warnings.push("Category missing");
        }
        if (!updated.author.trim()) {
          warnings.push("Author not specified");
        }

        if (updates.title) {
          updated.slug = slugify(updated.title);
        }
        if (updates.content) {
          updated.formattedContent = formatContentToHtml(updated.content);
          updated.readTime = calculateReadTime(updated.content);
        }

        updated.errors = errors;
        updated.warnings = warnings;
        updated.isValid = errors.length === 0;

        return updated;
      })
    );
  };

  const removeRow = (id: string) => {
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  // ── Row Image Upload to Cloudinary ────────────────────────────────────────
  const triggerRowImageUpload = (rowId: string) => {
    setActiveRowForImage(rowId);
    if (rowImageInputRef.current) {
      rowImageInputRef.current.value = "";
      rowImageInputRef.current.click();
    }
  };

  const handleRowImageFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const targetRowId = activeRowForImage;
    if (!file || !targetRowId) return;

    try {
      setUploadingImageRowId(targetRowId);
      const fd = new FormData();
      fd.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: fd,
      });

      if (!res.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await res.json();
      if (data.url) {
        updateRow(targetRowId, { image: data.url });
      }
    } catch (err: any) {
      console.error("Image upload error:", err);
      alert(`Image upload failed: ${err.message}`);
    } finally {
      setUploadingImageRowId(null);
      setActiveRowForImage(null);
    }
  };

  // ── Final Bulk Import Execution ───────────────────────────────────────────
  const handleFinalImport = async () => {
    const validRows = rows.filter((r) => r.isValid && r.title.trim() && r.content.trim());
    if (validRows.length === 0) {
      alert("No valid articles to import. Please resolve the errors in red before importing.");
      return;
    }

    try {
      setIsSubmitting(true);
      setImportProgress(10);

      const user = auth.currentUser;
      const idToken = user ? await user.getIdToken() : null;

      // Clean payload for server
      const payload = validRows.map((r) => ({
        title: r.title.trim(),
        slug: r.slug || slugify(r.title),
        category: r.category || "Business",
        excerpt: r.excerpt.trim(),
        content: r.formattedContent || formatContentToHtml(r.content),
        author: r.author.trim() || batchAuthor.trim() || "MarkTale Team",
        readTime: r.readTime || calculateReadTime(r.content),
        status: r.status,
        image: r.image.trim(),
        date: r.date || new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      }));

      setImportProgress(35);

      // Try server endpoint /api/blogs/bulk with JSON
      const res = await fetch("/api/blogs/bulk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(idToken ? { Authorization: `Bearer ${idToken}` } : {}),
        },
        body: JSON.stringify({ blogs: payload }),
      });

      setImportProgress(75);

      if (res.ok) {
        const data = await res.json();
        setImportResult({
          created: data.created || [],
          errors: data.errors || [],
        });
      } else {
        // Fallback: Client-side direct Firestore batch insertion if server admin auth fails
        console.warn("Server import returned non-OK, performing client-side Firestore import fallback...");
        const created: Array<{ title: string; slug: string }> = [];
        const errors: Array<{ title?: string; error: string }> = [];

        for (const item of payload) {
          try {
            await addDoc(collection(db, "blogs"), {
              ...item,
              createdAt: serverTimestamp(),
              updatedAt: serverTimestamp(),
            });
            created.push({ title: item.title, slug: item.slug });
          } catch (itemErr: any) {
            errors.push({ title: item.title, error: itemErr.message });
          }
        }
        setImportResult({ created, errors });
      }

      setImportProgress(100);
      setStep("success");
      onSuccess();
    } catch (err: any) {
      console.error("Bulk import failed:", err);
      alert(`Import failed: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const validCount = rows.filter((r) => r.isValid).length;
  const issueCount = rows.length - validCount;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={(e) => e.target === e.currentTarget && !isSubmitting && onClose()}
    >
      <div className="bg-[#0A1628] border border-[#1E293B] rounded-2xl w-full max-w-6xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-slate-100">
        {/* Hidden row image file input */}
        <input
          type="file"
          ref={rowImageInputRef}
          accept="image/*"
          className="hidden"
          onChange={handleRowImageFileChange}
        />

        {/* ── Modal Header ── */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1E293B] bg-[#0F1C2E]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <FileSpreadsheet size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                Excel Blog Bulk Import Studio
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  New Format
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Upload .xlsx, .xls, or .csv with rich text formatting, bullet points, headings, and images
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={downloadBlankExcelTemplate}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-800/50 hover:bg-emerald-900/40 hover:text-white transition-all cursor-pointer"
              title="Download empty sample Excel file ready to fill"
            >
              <Download size={13} />
              Download Sample Excel (Empty)
            </button>
            <button
              onClick={downloadSampleExcelTemplate}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-blue-300 bg-blue-950/60 border border-blue-800/50 hover:bg-blue-900/40 hover:text-white transition-all cursor-pointer"
              title="Download sample Excel file with pre-filled examples"
            >
              <FileSpreadsheet size={13} />
              Sample with Examples (.xlsx)
            </button>
            <button
              onClick={onClose}
              disabled={isSubmitting}
              className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* ── Modal Body Content ── */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* STEP 1: UPLOAD SCREEN */}
          {step === "upload" && (
            <div className="max-w-2xl mx-auto py-8 space-y-6">
              {/* Drag & Drop Zone */}
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all ${
                  isDragging
                    ? "border-blue-500 bg-blue-500/10 scale-[1.01]"
                    : "border-[#1E293B] hover:border-blue-500/50 bg-[#0F1C2E]/60 hover:bg-[#0F1C2E]"
                }`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  accept=".xlsx, .xls, .csv"
                  className="hidden"
                  onChange={handleFileInputChange}
                />

                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-4">
                  {isParsing ? (
                    <Loader2 size={30} className="animate-spin text-blue-400" />
                  ) : (
                    <Upload size={30} />
                  )}
                </div>

                <h3 className="text-base font-bold text-white mb-1">
                  {isParsing ? "Analyzing Excel Document..." : "Choose or drag & drop your Excel file"}
                </h3>
                <p className="text-xs text-slate-400 mb-4 max-w-sm mx-auto">
                  Supports Microsoft Excel <strong className="text-slate-300">.xlsx</strong>,{" "}
                  <strong className="text-slate-300">.xls</strong>, or{" "}
                  <strong className="text-slate-300">.csv</strong>
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/20 transition-all">
                  Browse Files
                </div>

                <div className="mt-6 pt-5 border-t border-[#1E293B] flex flex-wrap items-center justify-center gap-3">
                  <span className="text-[11px] text-slate-400 font-medium">Download spreadsheet template:</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      downloadBlankExcelTemplate();
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-4 cursor-pointer"
                  >
                    <Download size={13} /> Download Sample Excel (Empty)
                  </button>
                  <span className="text-slate-600">•</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      downloadSampleExcelTemplate();
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 underline underline-offset-4 cursor-pointer"
                  >
                    <FileSpreadsheet size={13} /> Sample with Examples (.xlsx)
                  </button>
                </div>
              </div>

              {parseError && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-300 text-xs">
                  <AlertCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-red-200 mb-0.5">Parsing Failed</div>
                    {parseError}
                  </div>
                </div>
              )}

              {/* Instructions Card */}
              <div className="rounded-xl border border-[#1E293B] bg-[#0F1C2E]/50 p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                  <Sparkles size={14} className="text-amber-400" />
                  Supported Excel Columns & Formatting Features:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-400">
                  <div className="space-y-1.5">
                    <div className="text-slate-300 font-semibold">• Direct Columns:</div>
                    <p className="text-[11px] leading-relaxed text-slate-400 pl-2">
                      <code className="text-blue-300">Title</code>, <code className="text-blue-300">Category</code>,{" "}
                      <code className="text-blue-300">Content</code>, <code className="text-blue-300">Author</code>,{" "}
                      <code className="text-blue-300">Status</code>, <code className="text-blue-300">Featured Image</code>,{" "}
                      <code className="text-blue-300">Excerpt</code>, <code className="text-blue-300">Date</code>
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-slate-300 font-semibold">• Rich Content Formatting:</div>
                    <p className="text-[11px] leading-relaxed text-slate-400 pl-2">
                      Write multi-line paragraphs using <kbd className="bg-slate-800 px-1 py-0.5 rounded text-[10px]">Alt+Enter</kbd>.
                      Use <code className="text-amber-300">## Headings</code>, <code className="text-amber-300">**bold**</code>,{" "}
                      and <code className="text-amber-300">- bullet points</code>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: REVIEW & ENRICHMENT SCREEN */}
          {step === "review" && (
            <div className="space-y-5">
              {/* Summary & Analysis Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#0F1C2E] border border-[#1E293B]">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-300">Spreadsheet Analysis:</span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                    {rows.length} Total Articles
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 size={12} /> {validCount} Ready
                  </span>
                  {issueCount > 0 && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1">
                      <AlertTriangle size={12} /> {issueCount} Need Review
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setStep("upload");
                      setFile(null);
                      setRows([]);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-[#1E293B] hover:bg-slate-800 transition-colors"
                  >
                    <RefreshCw size={12} /> Pick Another File
                  </button>
                </div>
              </div>

              {/* Batch Autofill Bar (Quickly fill missing authors, categories, status) */}
              <div className="p-4 rounded-xl bg-[#0A1628] border border-[#1E293B] space-y-3">
                <div className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <Sparkles size={14} className="text-blue-400" />
                  Batch Autofill (Quickly apply defaults to rows missing values):
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {/* Default Author */}
                  <div className="flex gap-1.5">
                    <input
                      type="text"
                      placeholder="Default Author Name"
                      value={batchAuthor}
                      onChange={(e) => setBatchAuthor(e.target.value)}
                      className="flex-1 bg-[#0F1C2E] border border-[#1E293B] rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 outline-none focus:border-blue-500"
                    />
                    <button
                      onClick={() => applyBatchAuthor("empty")}
                      disabled={!batchAuthor.trim()}
                      className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white cursor-pointer"
                      title="Apply only to rows missing an author"
                    >
                      Fill Empty
                    </button>
                  </div>

                  {/* Default Category */}
                  <div className="flex gap-1.5">
                    <select
                      value={batchCategory}
                      onChange={(e) => setBatchCategory(e.target.value)}
                      className="flex-1 bg-[#0F1C2E] border border-[#1E293B] rounded-lg px-3 py-1.5 text-xs text-white outline-none focus:border-blue-500 cursor-pointer"
                    >
                      <option value="">Select Default Category</option>
                      {ALLOWED_CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => applyBatchCategory("empty")}
                      disabled={!batchCategory}
                      className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white cursor-pointer"
                      title="Apply only to rows missing a category"
                    >
                      Fill Empty
                    </button>
                  </div>

                  {/* Batch Status */}
                  <div className="flex items-center gap-2">
                    <select
                      value={batchStatus}
                      onChange={(e) => setBatchStatus(e.target.value as "Published" | "Draft")}
                      className="flex-1 bg-[#0F1C2E] border border-[#1E293B] rounded-lg px-3 py-1.5 text-xs text-white outline-none focus:border-blue-500 cursor-pointer"
                    >
                      <option value="Published">Status: Published</option>
                      <option value="Draft">Status: Draft</option>
                    </select>
                    <button
                      onClick={applyBatchStatus}
                      className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 cursor-pointer"
                    >
                      Apply All
                    </button>
                  </div>
                </div>
              </div>

              {/* Interactive Data Table */}
              <div className="border border-[#1E293B] rounded-xl overflow-hidden bg-[#0F1C2E]">
                <div className="overflow-x-auto max-h-[460px]">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="sticky top-0 z-10 bg-[#0A1628] border-b border-[#1E293B] text-slate-400 font-semibold text-[11px] uppercase tracking-wider">
                      <tr>
                        <th className="py-3 px-3 w-12 text-center">#</th>
                        <th className="py-3 px-4 min-w-[220px]">Title & Slug</th>
                        <th className="py-3 px-3 min-w-[140px]">Category</th>
                        <th className="py-3 px-3 min-w-[130px]">Author</th>
                        <th className="py-3 px-3 min-w-[110px]">Status</th>
                        <th className="py-3 px-4 min-w-[200px]">Featured Image</th>
                        <th className="py-3 px-3 min-w-[100px] text-center">Body Preview</th>
                        <th className="py-3 px-3 w-12 text-center"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1E293B]">
                      {rows.map((r, i) => (
                        <tr
                          key={r.id}
                          className={`hover:bg-[#1E293B]/40 transition-colors ${
                            !r.isValid ? "bg-red-950/10" : ""
                          }`}
                        >
                          {/* Row Index & Validation Icon */}
                          <td className="py-3 px-3 text-center">
                            {r.isValid ? (
                              <span className="text-emerald-400 font-mono text-[11px]">{i + 1}</span>
                            ) : (
                              <span
                                title={r.errors.join(", ")}
                                className="inline-flex text-red-400 cursor-help"
                              >
                                <AlertCircle size={15} />
                              </span>
                            )}
                          </td>

                          {/* Title Input */}
                          <td className="py-3 px-4">
                            <input
                              type="text"
                              value={r.title}
                              onChange={(e) => updateRow(r.id, { title: e.target.value })}
                              placeholder="Article headline..."
                              className={`w-full bg-[#0A1628] border rounded-lg px-2.5 py-1.5 text-xs text-white outline-none focus:border-blue-500 font-medium ${
                                !r.title.trim() ? "border-red-500/70" : "border-[#1E293B]"
                              }`}
                            />
                            <div className="text-[10px] text-slate-500 font-mono mt-1 truncate max-w-xs">
                              /{r.slug}
                            </div>
                          </td>

                          {/* Category Dropdown */}
                          <td className="py-3 px-3">
                            <select
                              value={r.category}
                              onChange={(e) => updateRow(r.id, { category: e.target.value })}
                              className={`w-full bg-[#0A1628] border rounded-lg px-2 py-1.5 text-xs text-white outline-none focus:border-blue-500 cursor-pointer ${
                                !r.category ? "border-amber-500/60" : "border-[#1E293B]"
                              }`}
                            >
                              <option value="">Select...</option>
                              {ALLOWED_CATEGORIES.map((c) => (
                                <option key={c} value={c}>
                                  {c}
                                </option>
                              ))}
                            </select>
                          </td>

                          {/* Author Input */}
                          <td className="py-3 px-3">
                            <input
                              type="text"
                              value={r.author}
                              onChange={(e) => updateRow(r.id, { author: e.target.value })}
                              placeholder="Author name..."
                              className="w-full bg-[#0A1628] border border-[#1E293B] rounded-lg px-2.5 py-1.5 text-xs text-white outline-none focus:border-blue-500"
                            />
                          </td>

                          {/* Status Dropdown */}
                          <td className="py-3 px-3">
                            <select
                              value={r.status}
                              onChange={(e) =>
                                updateRow(r.id, { status: e.target.value as "Published" | "Draft" })
                              }
                              className="w-full bg-[#0A1628] border border-[#1E293B] rounded-lg px-2 py-1.5 text-xs font-semibold text-slate-300 outline-none focus:border-blue-500 cursor-pointer"
                            >
                              <option value="Published">Published</option>
                              <option value="Draft">Draft</option>
                            </select>
                          </td>

                          {/* Featured Image & Inline Upload */}
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              {r.image ? (
                                <div className="relative group w-9 h-9 rounded-lg overflow-hidden border border-[#1E293B] bg-slate-900 flex-shrink-0">
                                  <img
                                    src={r.image}
                                    alt="thumbnail"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      (e.target as HTMLElement).style.display = "none";
                                    }}
                                  />
                                </div>
                              ) : (
                                <div className="w-9 h-9 rounded-lg bg-[#0A1628] border border-dashed border-[#1E293B] flex items-center justify-center text-slate-600 flex-shrink-0">
                                  <ImageIcon size={14} />
                                </div>
                              )}

                              <input
                                type="text"
                                placeholder="Paste image URL..."
                                value={r.image}
                                onChange={(e) => updateRow(r.id, { image: e.target.value })}
                                className="flex-1 bg-[#0A1628] border border-[#1E293B] rounded-lg px-2 py-1.5 text-[11px] text-white placeholder-slate-600 outline-none focus:border-blue-500 truncate"
                              />

                              <button
                                onClick={() => triggerRowImageUpload(r.id)}
                                disabled={uploadingImageRowId === r.id}
                                className="px-2 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-[10px] font-semibold transition-colors flex items-center gap-1 cursor-pointer flex-shrink-0"
                                title="Upload image file directly to Cloudinary"
                              >
                                {uploadingImageRowId === r.id ? (
                                  <Loader2 size={12} className="animate-spin text-blue-400" />
                                ) : (
                                  <Upload size={12} />
                                )}
                                Upload
                              </button>
                            </div>
                          </td>

                          {/* Body Preview Button */}
                          <td className="py-3 px-3 text-center">
                            <button
                              onClick={() => setPreviewRow(r)}
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-blue-950/40 hover:bg-blue-900/40 border border-blue-800/40 text-blue-300 hover:text-white text-[11px] font-semibold transition-colors cursor-pointer"
                            >
                              <Eye size={12} /> View
                            </button>
                          </td>

                          {/* Remove Row Button */}
                          <td className="py-3 px-3 text-center">
                            <button
                              onClick={() => removeRow(r.id)}
                              className="text-slate-500 hover:text-red-400 p-1.5 rounded-md hover:bg-red-500/10 transition-colors cursor-pointer"
                              title="Exclude this article from import"
                            >
                              <Trash2 size={14} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: SUCCESS RESULT SCREEN */}
          {step === "success" && importResult && (
            <div className="max-w-xl mx-auto py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <Check size={32} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Import Completed Successfully!
                </h3>
                <p className="text-xs text-slate-400">
                  Imported {importResult.created.length} blog article
                  {importResult.created.length !== 1 ? "s" : ""} to MarkTale.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1C2E] border border-[#1E293B] max-h-56 overflow-y-auto text-left divide-y divide-[#1E293B]">
                {importResult.created.map((b, i) => (
                  <div key={i} className="py-2.5 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200 truncate pr-4">✓ {b.title}</span>
                    <a
                      href={`/blog/${b.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline text-[11px] font-mono flex-shrink-0"
                    >
                      /blog/{b.slug}
                    </a>
                  </div>
                ))}

                {importResult.errors.length > 0 && (
                  <div className="pt-3">
                    <div className="text-xs font-bold text-red-400 mb-2">Errors ({importResult.errors.length}):</div>
                    {importResult.errors.map((e, i) => (
                      <div key={i} className="text-xs text-red-300 py-1">
                        {e.title ? `${e.title}: ` : ""}{e.error}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-lg shadow-blue-600/20 cursor-pointer"
              >
                Close & View Blogs
              </button>
            </div>
          )}
        </div>

        {/* ── Modal Footer Actions ── */}
        {step === "review" && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-[#1E293B] bg-[#0F1C2E]">
            <div className="text-xs text-slate-400">
              {validCount} ready to publish • {issueCount} need attention
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                disabled={isSubmitting}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white border border-[#1E293B] hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleFinalImport}
                disabled={isSubmitting || validCount === 0}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 transition-all shadow-lg shadow-blue-600/25 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    Importing Articles ({importProgress}%)...
                  </>
                ) : (
                  <>
                    <CheckCircle2 size={15} />
                    Import {validCount} Article{validCount !== 1 ? "s" : ""}
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ── Content Preview Modal ── */}
      {previewRow && (
        <div
          className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPreviewRow(null)}
        >
          <div
            className="bg-[#0A1628] border border-[#1E293B] rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#1E293B] bg-[#0F1C2E]">
              <div className="flex items-center gap-2">
                <FileText size={18} className="text-blue-400" />
                <h3 className="text-sm font-bold text-white truncate max-w-md">
                  {previewRow.title || "Untitled Article"}
                </h3>
              </div>
              <button
                onClick={() => setPreviewRow(null)}
                className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pb-3 border-b border-[#1E293B]">
                <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                  {previewRow.category || "Uncategorized"}
                </span>
                <span>By {previewRow.author || "Unknown"}</span>
                <span>•</span>
                <span>{previewRow.readTime}</span>
                <span>•</span>
                <span className="font-semibold text-emerald-400">{previewRow.status}</span>
              </div>

              {previewRow.image && (
                <div className="rounded-xl overflow-hidden max-h-48 bg-slate-900 border border-[#1E293B]">
                  <img
                    src={previewRow.image}
                    alt={previewRow.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {previewRow.excerpt && (
                <p className="text-sm italic text-slate-300 bg-slate-900/60 p-3 rounded-lg border-l-2 border-blue-500">
                  {previewRow.excerpt}
                </p>
              )}

              <div className="pt-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Rendered Article Body:
                </div>
                <div
                  className="prose prose-invert prose-sm max-w-none text-slate-300 leading-relaxed space-y-3"
                  dangerouslySetInnerHTML={{
                    __html: previewRow.formattedContent || "<p>No content preview available.</p>",
                  }}
                />
              </div>
            </div>

            <div className="px-6 py-3 border-t border-[#1E293B] bg-[#0F1C2E] flex justify-end">
              <button
                onClick={() => setPreviewRow(null)}
                className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
