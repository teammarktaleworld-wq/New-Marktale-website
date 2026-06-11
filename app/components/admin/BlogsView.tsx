// "use client";

// import { useState, useEffect } from "react";
// import { db } from "@/lib/firebase";
// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
//   orderBy,
//   query,
//   Timestamp,
// } from "firebase/firestore";

// // ─── Types ────────────────────────────────────────────────────────────────────
// type BlogStatus = "Published" | "Draft";

// type Blog = {
//   id: string;
//   slug: string;
//   title: string;
//   category: string;
//   date: string;
//   author: string;
//   readTime: string;
//   status: BlogStatus;
//   image: string;
//   excerpt: string;
//   content: string;
// };

// type BlogForm = Omit<Blog, "id" | "slug"> & { id?: string; slug?: string };

// // ─── Constants ────────────────────────────────────────────────────────────────
// const CATEGORIES = [
//   "Leadership", "Career Growth", "Productivity", "Mindset",
//   "Technology", "Business", "Wellness", "Finance",
// ];

// function catColor(cat: string): string {
//   const map: Record<string, string> = {
//     Leadership:     "#6366F1",
//     "Career Growth":"#10B981",
//     Productivity:   "#F59E0B",
//     Mindset:        "#EC4899",
//     Technology:     "#3B82F6",
//     Business:       "#8B5CF6",
//     Wellness:       "#14B8A6",
//     Finance:        "#F97316",
//   };
//   return map[cat] ?? "#64748B";
// }

// // ─── Shared token styles ──────────────────────────────────────────────────────
// const c = {
//   bg:        "#0F1C2E",
//   surface:   "#0A1628",
//   border:    "#1E293B",
//   borderMid: "#334155",
//   text:      "#F1F5F9",
//   muted:     "#94A3B8",
//   faint:     "#475569",
//   primary:   "#3B82F6",
//   danger:    "#EF4444",
//   success:   "#10B981",
//   warning:   "#F59E0B",
// };

// // Reusable button styles
// function btn(variant: "primary" | "ghost" | "danger" | "outline") {
//   const base = {
//     display: "inline-flex" as const,
//     alignItems: "center" as const,
//     gap: 6,
//     padding: "8px 16px",
//     borderRadius: 10,
//     fontSize: 12,
//     fontWeight: 600,
//     cursor: "pointer",
//     border: "1px solid",
//     fontFamily: "inherit",
//     transition: "all 0.15s",
//     whiteSpace: "nowrap" as const,
//   };
//   switch (variant) {
//     case "primary": return { ...base, background: c.primary, color: "#fff", borderColor: c.primary };
//     case "danger":  return { ...base, background: "transparent", color: c.danger, borderColor: `${c.danger}40` };
//     case "ghost":   return { ...base, background: "transparent", color: c.muted, borderColor: c.border };
//     case "outline": return { ...base, background: "transparent", color: c.text, borderColor: c.borderMid };
//   }
// }

// // ─── Confirm dialog ───────────────────────────────────────────────────────────
// function ConfirmDialog({
//   message, onConfirm, onCancel,
// }: { message: string; onConfirm: () => void; onCancel: () => void }) {
//   return (
//     <div style={T.overlay}>
//       <div style={{ ...T.modal, maxWidth: 400, textAlign: "center" as const }}>
//         <div style={{ fontSize: 32, marginBottom: 12 }}>⚠️</div>
//         <div style={{ fontSize: 14, color: c.text, marginBottom: 8, fontWeight: 600 }}>
//           Are you sure?
//         </div>
//         <div style={{ fontSize: 13, color: c.muted, marginBottom: 24 }}>{message}</div>
//         <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
//           <button style={btn("ghost")} onClick={onCancel}>Cancel</button>
//           <button style={btn("danger")} onClick={onConfirm}>Delete</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Modal token styles ───────────────────────────────────────────────────────
// const T = {
//   overlay: {
//     position: "fixed" as const,
//     inset: 0,
//     background: "rgba(0,0,0,0.75)",
//     backdropFilter: "blur(4px)",
//     zIndex: 9999,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 24,
//   },
//   modal: {
//     background: "#0F172A",
//     border: `1px solid ${c.border}`,
//     borderRadius: 16,
//     padding: 28,
//     width: "100%",
//     maxWidth: 700,
//     maxHeight: "90vh",
//     overflowY: "auto" as const,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 700,
//     color: c.text,
//     marginBottom: 24,
//     paddingBottom: 16,
//     borderBottom: `1px solid ${c.border}`,
//   },
//   fg: { marginBottom: 16 },
//   label: {
//     display: "block" as const,
//     fontSize: 10,
//     fontWeight: 700,
//     color: c.faint,
//     textTransform: "uppercase" as const,
//     letterSpacing: "0.1em",
//     marginBottom: 7,
//   },
//   input: {
//     width: "100%",
//     background: c.surface,
//     border: `1px solid ${c.border}`,
//     borderRadius: 10,
//     padding: "10px 14px",
//     color: c.text,
//     fontSize: 13,
//     outline: "none",
//     boxSizing: "border-box" as const,
//     fontFamily: "inherit",
//   },
//   select: {
//     width: "100%",
//     background: c.surface,
//     border: `1px solid ${c.border}`,
//     borderRadius: 10,
//     padding: "10px 14px",
//     color: c.text,
//     fontSize: 13,
//     outline: "none",
//     cursor: "pointer",
//     boxSizing: "border-box" as const,
//     fontFamily: "inherit",
//   },
//   grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 },
//   actions: {
//     display: "flex",
//     gap: 10,
//     justifyContent: "flex-end",
//     marginTop: 24,
//     paddingTop: 16,
//     borderTop: `1px solid ${c.border}`,
//   },
// };

// // ─── Blog Modal ───────────────────────────────────────────────────────────────
// function BlogModal({
//   blog, onSave, onClose, isSaving,
// }: { blog: Blog | null; onSave: (f: any) => void; onClose: () => void; isSaving: boolean }) {
//   const [form, setForm] = useState<BlogForm>(blog ?? {
//     title: "", category: CATEGORIES[0], author: "", readTime: "5 Min Read",
//     status: "Draft", excerpt: "", content: "",
//     date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
//     image: "",
//   });
//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const [imgErr, setImgErr] = useState(false);

//   const f = (k: keyof BlogForm, v: any) => setForm((p) => ({ ...p, [k]: v }));

//   return (
//     <div style={T.overlay} onClick={(e) => e.target === e.currentTarget && !isSaving && onClose()}>
//       <div style={T.modal}>
//         <div style={T.title}>{blog ? "Edit Article" : "Draft New Article"}</div>

//         <div style={T.fg}>
//           <label style={T.label}>Article Title *</label>
//           <input style={T.input} value={form.title} onChange={(e) => f("title", e.target.value)} placeholder="Enter headline..." />
//         </div>

//         <div style={T.fg}>
//           <label style={T.label}>Excerpt / Brief</label>
//           <textarea
//             style={{ ...T.input, minHeight: 72, resize: "vertical" as const }}
//             value={form.excerpt} onChange={(e) => f("excerpt", e.target.value)}
//             placeholder="Short summary shown on listing pages..."
//           />
//         </div>

//         <div style={T.fg}>
//           <label style={T.label}>Full Content (HTML or Markdown)</label>
//           <textarea
//             style={{ ...T.input, minHeight: 160, resize: "vertical" as const, fontFamily: "monospace", fontSize: 12 }}
//             value={form.content} onChange={(e) => f("content", e.target.value)}
//             placeholder="<p>Write your full article here...</p>"
//           />
//         </div>

//         <div style={T.grid2}>
//           <div style={T.fg}>
//             <label style={T.label}>Category</label>
//             <select style={T.select} value={form.category} onChange={(e) => f("category", e.target.value)}>
//               {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
//             </select>
//           </div>
//           <div style={T.fg}>
//             <label style={T.label}>Status</label>
//             <select style={T.select} value={form.status} onChange={(e) => f("status", e.target.value as BlogStatus)}>
//               <option>Draft</option>
//               <option>Published</option>
//             </select>
//           </div>
//         </div>

//         <div style={T.grid2}>
//           <div style={T.fg}>
//             <label style={T.label}>Author</label>
//             <input style={T.input} value={form.author} onChange={(e) => f("author", e.target.value)} placeholder="Author name..." />
//           </div>
//           <div style={T.fg}>
//             <label style={T.label}>Read Time</label>
//             <input style={T.input} value={form.readTime} onChange={(e) => f("readTime", e.target.value)} placeholder="5 Min Read" />
//           </div>
//         </div>

//         <div style={T.fg}>
//           <label style={T.label}>Image URL (optional)</label>
//           <input
//             style={T.input} value={form.image}
//             onChange={(e) => { setImgErr(false); f("image", e.target.value); }}
//             placeholder="https://example.com/image.jpg"
//           />
//           {form.image && !imgErr && (
//             <img src={form.image} alt="preview" onError={() => setImgErr(true)}
//               style={{ width: "100%", maxHeight: 150, objectFit: "cover", borderRadius: 8, border: `1px solid ${c.border}`, marginTop: 8 }}
//             />
//           )}
//           {imgErr && (
//             <div style={{ marginTop: 8, padding: "8px 12px", background: "#1E293B", border: "1px solid #ef444460", borderRadius: 8, color: "#ef4444", fontSize: 12 }}>
//               ⚠ Could not load image. Check the URL.
//             </div>
//           )}
//         </div>

//         <div style={T.fg}>
//           <label style={T.label}>Or Upload Featured Image</label>
//           <input type="file" accept="image/*"
//             style={{ width: "100%", fontSize: 12, color: c.muted, background: c.surface, border: `1px solid ${c.border}`, borderRadius: 10, padding: "8px 12px", cursor: "pointer", boxSizing: "border-box" as const }}
//             onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
//           />
//           {imageFile && <div style={{ fontSize: 11, color: c.faint, marginTop: 6 }}>Selected: {imageFile.name}</div>}
//         </div>

//         <div style={T.actions}>
//           <button style={btn("ghost")} onClick={onClose} disabled={isSaving}>Cancel</button>
//           <button
//             style={btn("primary")} disabled={isSaving || !form.title.trim()}
//             onClick={() => form.title.trim() && onSave({ ...form, _imageFile: imageFile })}
//           >
//             {isSaving ? "Saving..." : blog ? "Save Changes" : "Publish Article"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Bulk Upload Modal ────────────────────────────────────────────────────────
// function BulkModal({ onClose, onUpload, isUploading, result }: {
//   onClose: () => void; onUpload: (f: File) => void; isUploading: boolean; result: any;
// }) {
//   const [file, setFile] = useState<File | null>(null);

//   return (
//     <div style={T.overlay} onClick={(e) => e.target === e.currentTarget && !isUploading && onClose()}>
//       <div style={{ ...T.modal, maxWidth: 520 }}>
//         <div style={T.title}>Bulk Import Articles</div>

//         <div style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 20 }}>
//           <div style={{ fontSize: 12, fontWeight: 700, color: c.text, marginBottom: 10 }}>How to prepare your document</div>
//           <ol style={{ margin: 0, paddingLeft: 18, color: c.muted, fontSize: 12, lineHeight: 1.9 }}>
//             <li>Open your Google Doc with all blog content</li>
//             <li>Each blog must start with a marker: <strong style={{ color: c.text }}>BLOG 1</strong>, <strong style={{ color: c.text }}>BLOG 2</strong>, etc.</li>
//             <li>The line after the marker becomes the title</li>
//             <li>First paragraph after title = excerpt; rest = content</li>
//             <li>Download as <strong style={{ color: c.text }}>.docx</strong> format</li>
//           </ol>
//         </div>

//         <div style={T.fg}>
//           <label style={T.label}>Upload .docx File</label>
//           <input type="file" accept=".docx"
//             style={{ width: "100%", fontSize: 12, color: c.muted, background: c.surface, border: `1px solid ${c.border}`, borderRadius: 10, padding: "8px 12px", cursor: "pointer", boxSizing: "border-box" as const }}
//             onChange={(e) => setFile(e.target.files?.[0] ?? null)}
//           />
//           {file && <div style={{ fontSize: 11, color: c.faint, marginTop: 6 }}>Selected: <strong style={{ color: c.muted }}>{file.name}</strong></div>}
//         </div>

//         {result && (
//           <div style={{ background: "#10B98110", border: "1px solid #10B98130", borderRadius: 10, padding: "14px 16px", marginTop: 16 }}>
//             <div style={{ fontSize: 13, fontWeight: 700, color: "#10B981", marginBottom: 8 }}>{result.message}</div>
//             {result.created?.map((b: any, i: number) => (
//               <div key={i} style={{ fontSize: 12, color: c.muted, paddingTop: 3 }}>✓ {b.title}</div>
//             ))}
//             {result.errors?.length > 0 && (
//               <div style={{ background: "#ef444410", border: "1px solid #ef444430", borderRadius: 8, padding: "10px 14px", marginTop: 12 }}>
//                 <div style={{ fontSize: 12, fontWeight: 700, color: "#ef4444", marginBottom: 6 }}>Errors ({result.errors.length})</div>
//                 {result.errors.map((e: any, i: number) => (
//                   <div key={i} style={{ fontSize: 12, color: "#fca5a5" }}>{e.chunk || e.title}: {e.error}</div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         <div style={T.actions}>
//           <button style={btn("ghost")} onClick={onClose} disabled={isUploading}>Cancel</button>
//           <button style={btn("primary")} disabled={!file || isUploading} onClick={() => file && onUpload(file)}>
//             {isUploading ? "Importing..." : "Import Articles"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Main BlogsView ───────────────────────────────────────────────────────────
// export default function BlogsView() {
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [syncing, setSyncing] = useState(false);
//   const [modal, setModal] = useState<Blog | "add" | null>(null);
//   const [bulkOpen, setBulkOpen] = useState(false);
//   const [confirm, setConfirm] = useState<{ id: string; message: string } | null>(null);
//   const [isSaving, setIsSaving] = useState(false);
//   const [isBulkUploading, setIsBulkUploading] = useState(false);
//   const [bulkResult, setBulkResult] = useState<any>(null);

//   const [search, setSearch] = useState("");
//   const [filterCat, setFilterCat] = useState("All");
//   const [filterStatus, setFilterStatus] = useState("All");

//   const PAGE_SIZE = 15;
//   const [page, setPage] = useState(1);

//   // ── Fetch ────────────────────────────────────────────────────────────────
//   const fetchBlogs = async () => {
//     try {
//       setSyncing(true);
//       const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
//       const snap = await getDocs(q);
//       setBlogs(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Blog, "id">) })));
//     } catch (err) {
//       console.error("fetchBlogs:", err);
//     } finally {
//       setSyncing(false);
//     }
//   };

//   useEffect(() => { fetchBlogs(); }, []);

//   // ── Save ─────────────────────────────────────────────────────────────────
//   const handleSave = async (form: BlogForm & { _imageFile?: File }) => {
//     try {
//       setIsSaving(true);
//       const { _imageFile, ...rest } = form;
//       let image = rest.image || "";

//       if (_imageFile) {
//         const fd = new FormData();
//         fd.append("file", _imageFile);
//         fd.append("folder", "blogs");
//         const res = await fetch("/api/upload", { method: "POST", body: fd });
//         if (res.ok) image = (await res.json()).url;
//       }

//       if (modal && modal !== "add") {
//         const { id, slug: _s, ...fields } = rest as Blog;
//         await updateDoc(doc(db, "blogs", (modal as Blog).id), { ...fields, image, updatedAt: Timestamp.now() });
//       } else {
//         const slug = (rest.title ?? "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
//         await addDoc(collection(db, "blogs"), { ...rest, image, slug, createdAt: Timestamp.now(), updatedAt: Timestamp.now() });
//       }

//       await fetchBlogs();
//       setModal(null);
//     } catch (err) {
//       console.error("handleSave:", err);
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   // ── Delete ───────────────────────────────────────────────────────────────
//   const handleDelete = async (id: string) => {
//     try {
//       setSyncing(true);
//       await deleteDoc(doc(db, "blogs", id));
//       await fetchBlogs();
//       setConfirm(null);
//     } catch (err) {
//       console.error("handleDelete:", err);
//     } finally {
//       setSyncing(false);
//     }
//   };

//   // ── Toggle status ────────────────────────────────────────────────────────
//   const handleToggle = async (blog: Blog) => {
//     const next: BlogStatus = blog.status === "Published" ? "Draft" : "Published";
//     await updateDoc(doc(db, "blogs", blog.id), { status: next, updatedAt: Timestamp.now() });
//     setBlogs((p) => p.map((b) => b.id === blog.id ? { ...b, status: next } : b));
//   };

//   // ── Bulk upload ──────────────────────────────────────────────────────────
//   const handleBulkUpload = async (file: File) => {
//     try {
//       setIsBulkUploading(true);
//       setBulkResult(null);
//       const fd = new FormData();
//       fd.append("file", file);
//       const res = await fetch("/api/blogs/bulk", { method: "POST", body: fd });
//       const data = await res.json();
//       setBulkResult(data);
//       await fetchBlogs();
//     } catch (err: any) {
//       setBulkResult({ message: err.message, created: [], errors: [] });
//     } finally {
//       setIsBulkUploading(false);
//     }
//   };

//   // ── Filter + paginate ────────────────────────────────────────────────────
//   const filtered = blogs.filter((b) =>
//     (filterCat === "All" || b.category === filterCat) &&
//     (filterStatus === "All" || b.status === filterStatus) &&
//     (!search || b.title.toLowerCase().includes(search.toLowerCase()))
//   );
//   const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
//   const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
//   const published = blogs.filter((b) => b.status === "Published").length;

//   // ── Shared input style ───────────────────────────────────────────────────
//   const filterInput = {
//     background: c.surface,
//     border: `1px solid ${c.border}`,
//     borderRadius: 10,
//     padding: "8px 14px",
//     color: c.text,
//     fontSize: 12,
//     outline: "none",
//     fontFamily: "inherit",
//     cursor: "pointer",
//   };

//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

//       {/* Syncing pill */}
//       {syncing && (
//         <div style={{ position: "fixed", top: 16, right: 16, background: c.primary, color: "#fff", padding: "6px 14px", borderRadius: 8, fontSize: 12, zIndex: 9998, display: "flex", alignItems: "center", gap: 6 }}>
//           <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "#fff", opacity: 0.7 }} />
//           Syncing...
//         </div>
//       )}

//       {/* ── Header ─────────────────────────────────────────────────────── */}
//       <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
//         <div>
//           <div style={{ fontSize: 18, fontWeight: 700, color: c.text, marginBottom: 4 }}>Blog Manager</div>
//           <div style={{ fontSize: 12, color: c.faint }}>
//             {blogs.length} total &nbsp;·&nbsp; {published} published
//           </div>
//         </div>
//         <div style={{ display: "flex", gap: 10 }}>
//           <button style={btn("ghost")} onClick={() => { setBulkResult(null); setBulkOpen(true); }}>
//             {/* upload icon */}
//             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
//               <polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
//             </svg>
//             Bulk Import
//           </button>
//           <button style={btn("primary")} onClick={() => setModal("add")}>
//             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//               <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
//             </svg>
//             New Article
//           </button>
//         </div>
//       </div>

//       {/* ── Filters ────────────────────────────────────────────────────── */}
//       <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
//         {/* Search */}
//         <div style={{ position: "relative", flex: 1, minWidth: 200 }}>
//           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c.faint} strokeWidth="2"
//             style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
//             <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
//           </svg>
//           <input
//             placeholder="Search articles..."
//             value={search}
//             onChange={(e) => { setSearch(e.target.value); setPage(1); }}
//             style={{ ...filterInput, width: "100%", paddingLeft: 36, boxSizing: "border-box" as const }}
//           />
//         </div>

//         <select style={filterInput} value={filterStatus} onChange={(e) => { setFilterStatus(e.target.value); setPage(1); }}>
//           <option value="All">All Status</option>
//           <option value="Published">Published</option>
//           <option value="Draft">Draft</option>
//         </select>

//         <select style={filterInput} value={filterCat} onChange={(e) => { setFilterCat(e.target.value); setPage(1); }}>
//           <option value="All">All Categories</option>
//           {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
//         </select>

//         <button style={{ ...btn("ghost"), padding: "8px 12px" }} onClick={fetchBlogs} title="Refresh">
//           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <polyline points="23 4 23 10 17 10"/>
//             <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
//           </svg>
//         </button>
//       </div>

//       {/* ── Table ──────────────────────────────────────────────────────── */}
//       <div style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: 12, overflow: "hidden" }}>
//         <div style={{ overflowX: "auto" }}>
//           <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
//             <thead>
//               <tr style={{ background: c.bg }}>
//                 {["Article", "Category", "Author", "Date", "Read Time", "Status", "Actions"].map((h, i) => (
//                   <th key={h} style={{
//                     padding: "12px 16px",
//                     textAlign: (i === 5 ? "center" : i === 6 ? "right" : "left") as any,
//                     fontSize: 10, fontWeight: 700, color: c.faint,
//                     textTransform: "uppercase", letterSpacing: "0.12em",
//                     borderBottom: `1px solid ${c.border}`, whiteSpace: "nowrap",
//                   }}>
//                     {h}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {paginated.length === 0 ? (
//                 <tr>
//                   <td colSpan={7} style={{ textAlign: "center", color: c.faint, padding: "48px 0", fontStyle: "italic", fontSize: 13 }}>
//                     {search || filterCat !== "All" || filterStatus !== "All"
//                       ? "No articles match your filters."
//                       : "No articles yet — click New Article to get started."}
//                   </td>
//                 </tr>
//               ) : paginated.map((b) => (
//                 <tr key={b.id} style={{ borderBottom: `1px solid ${c.bg}` }}>

//                   {/* Article */}
//                   <td style={{ padding: "12px 16px", maxWidth: 280, verticalAlign: "middle" }}>
//                     <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//                       {b.image ? (
//                         <img src={b.image} alt="" onError={(e) => (e.currentTarget.style.display = "none")}
//                           style={{ width: 44, height: 30, objectFit: "cover", borderRadius: 4, border: `1px solid ${c.border}`, flexShrink: 0 }}
//                         />
//                       ) : (
//                         <div style={{ width: 44, height: 30, borderRadius: 4, background: c.border, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: c.faint }}>
//                           IMG
//                         </div>
//                       )}
//                       <div style={{ minWidth: 0 }}>
//                         <div style={{ fontWeight: 600, color: c.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
//                           {b.title}
//                         </div>
//                         {b.excerpt && (
//                           <div style={{ fontSize: 11, color: c.faint, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginTop: 2 }}>
//                             {b.excerpt}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </td>

//                   {/* Category */}
//                   <td style={{ padding: "12px 16px", verticalAlign: "middle" }}>
//                     <span style={{
//                       display: "inline-block", padding: "2px 8px", borderRadius: 4, fontSize: 11, fontWeight: 600,
//                       background: `${catColor(b.category)}18`, color: catColor(b.category), border: `1px solid ${catColor(b.category)}30`,
//                     }}>
//                       {b.category}
//                     </span>
//                   </td>

//                   {/* Author */}
//                   <td style={{ padding: "12px 16px", color: c.muted, fontSize: 12, verticalAlign: "middle" }}>
//                     {b.author || "—"}
//                   </td>

//                   {/* Date */}
//                   <td style={{ padding: "12px 16px", color: c.faint, fontSize: 12, whiteSpace: "nowrap", verticalAlign: "middle" }}>
//                     {b.date || "—"}
//                   </td>

//                   {/* Read Time */}
//                   <td style={{ padding: "12px 16px", color: c.faint, fontSize: 12, whiteSpace: "nowrap", verticalAlign: "middle" }}>
//                     {b.readTime || "—"}
//                   </td>

//                   {/* Status — clickable toggle */}
//                   <td style={{ padding: "12px 16px", textAlign: "center", verticalAlign: "middle" }}>
//                     <span
//                       onClick={() => handleToggle(b)}
//                       title="Click to toggle"
//                       style={{
//                         display: "inline-flex", alignItems: "center", gap: 5,
//                         padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600,
//                         cursor: "pointer", border: "1px solid", userSelect: "none",
//                         ...(b.status === "Published"
//                           ? { background: "#10B98115", color: "#10B981", borderColor: "#10B98130" }
//                           : { background: "#F59E0B15", color: "#F59E0B", borderColor: "#F59E0B30" }),
//                       }}
//                     >
//                       <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor", display: "inline-block" }} />
//                       {b.status}
//                     </span>
//                   </td>

//                   {/* Actions */}
//                   <td style={{ padding: "12px 16px", textAlign: "right", verticalAlign: "middle" }}>
//                     <div style={{ display: "flex", gap: 6, justifyContent: "flex-end" }}>
//                       <button style={btn("ghost")} onClick={() => setModal(b)} title="Edit">
//                         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                           <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
//                           <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
//                         </svg>
//                         Edit
//                       </button>
//                       <button
//                         style={btn("danger")}
//                         onClick={() => setConfirm({ id: b.id, message: `Permanently delete "${b.title}"?` })}
//                         title="Delete"
//                       >
//                         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                           <polyline points="3 6 5 6 21 6"/>
//                           <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
//                           <path d="M10 11v6"/><path d="M14 11v6"/>
//                           <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
//                         </svg>
//                         Delete
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderTop: `1px solid ${c.border}` }}>
//             <span style={{ fontSize: 11, color: c.faint, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
//               Page {page} of {totalPages} · {filtered.length} articles
//             </span>
//             <div style={{ display: "flex", gap: 8 }}>
//               {[{ label: "← Prev", disabled: page <= 1, action: () => setPage(p => p - 1) },
//                 { label: "Next →", disabled: page >= totalPages, action: () => setPage(p => p + 1) }].map(({ label, disabled, action }) => (
//                 <button key={label}
//                   style={{ padding: "6px 14px", background: disabled ? "transparent" : c.border, border: `1px solid ${c.border}`, borderRadius: 8, color: disabled ? "#334155" : c.muted, fontSize: 12, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.4 : 1, fontFamily: "inherit" }}
//                   disabled={disabled} onClick={action}
//                 >
//                   {label}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* ── Modals ──────────────────────────────────────────────────────── */}
//       {modal && (
//         <BlogModal
//           blog={modal === "add" ? null : modal}
//           onSave={handleSave}
//           onClose={() => !isSaving && setModal(null)}
//           isSaving={isSaving}
//         />
//       )}
//       {bulkOpen && (
//         <BulkModal
//           onClose={() => !isBulkUploading && setBulkOpen(false)}
//           onUpload={handleBulkUpload}
//           isUploading={isBulkUploading}
//           result={bulkResult}
//         />
//       )}
//       {confirm && (
//         <ConfirmDialog
//           message={confirm.message}
//           onConfirm={() => handleDelete(confirm.id)}
//           onCancel={() => setConfirm(null)}
//         />
//       )}
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";

// ─── Types ────────────────────────────────────────────────────────────────────
type BlogStatus = "Published" | "Draft";

type Blog = {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  status: BlogStatus;
  image: string;
  excerpt: string;
  content: string;
};

type BlogForm = Omit<Blog, "id" | "slug"> & { id?: string; slug?: string };

// ─── Constants ────────────────────────────────────────────────────────────────
const CATEGORIES = [
  "Leadership",
  "Career Growth",
  "Productivity",
  "Mindset",
  "Technology",
  "Business",
  "Wellness",
  "Finance",
];

function catColor(cat: string): string {
  const map: Record<string, string> = {
    Leadership: "#6366F1",
    "Career Growth": "#10B981",
    Productivity: "#F59E0B",
    Mindset: "#EC4899",
    Technology: "#3B82F6",
    Business: "#8B5CF6",
    Wellness: "#14B8A6",
    Finance: "#F97316",
  };
  return map[cat] ?? "#64748B";
}

// ─── Shared token styles ──────────────────────────────────────────────────────
const c = {
  bg: "#0F1C2E",
  surface: "#0A1628",
  border: "#1E293B",
  borderMid: "#334155",
  text: "#F1F5F9",
  muted: "#94A3B8",
  faint: "#475569",
  primary: "#3B82F6",
  danger: "#EF4444",
  success: "#10B981",
  warning: "#F59E0B",
};

function btn(variant: "primary" | "ghost" | "danger" | "outline") {
  const base = {
    display: "inline-flex" as const,
    alignItems: "center" as const,
    gap: 6,
    padding: "8px 16px",
    borderRadius: 10,
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
    border: "1px solid",
    fontFamily: "inherit",
    transition: "all 0.15s",
    whiteSpace: "nowrap" as const,
  };
  switch (variant) {
    case "primary":
      return {
        ...base,
        background: c.primary,
        color: "#fff",
        borderColor: c.primary,
      };
    case "danger":
      return {
        ...base,
        background: "transparent",
        color: c.danger,
        borderColor: `${c.danger}40`,
      };
    case "ghost":
      return {
        ...base,
        background: "transparent",
        color: c.muted,
        borderColor: c.border,
      };
    case "outline":
      return {
        ...base,
        background: "transparent",
        color: c.text,
        borderColor: c.borderMid,
      };
  }
}

// ─── Confirm dialog ───────────────────────────────────────────────────────────
function ConfirmDialog({
  message,
  onConfirm,
  onCancel,
}: {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div style={T.overlay}>
      <div style={{ ...T.modal, maxWidth: 400, textAlign: "center" as const }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>⚠️</div>
        <div
          style={{
            fontSize: 14,
            color: c.text,
            marginBottom: 8,
            fontWeight: 600,
          }}
        >
          Are you sure?
        </div>
        <div style={{ fontSize: 13, color: c.muted, marginBottom: 24 }}>
          {message}
        </div>
        <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
          <button style={btn("ghost")} onClick={onCancel}>
            Cancel
          </button>
          <button style={btn("danger")} onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

const T = {
  overlay: {
    position: "fixed" as const,
    inset: 0,
    background: "rgba(0,0,0,0.75)",
    backdropFilter: "blur(4px)",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  modal: {
    background: "#0F172A",
    border: `1px solid ${c.border}`,
    borderRadius: 16,
    padding: 28,
    width: "100%",
    maxWidth: 700,
    maxHeight: "90vh",
    overflowY: "auto" as const,
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
    color: c.text,
    marginBottom: 24,
    paddingBottom: 16,
    borderBottom: `1px solid ${c.border}`,
  },
  fg: { marginBottom: 16 },
  label: {
    display: "block" as const,
    fontSize: 10,
    fontWeight: 700,
    color: c.faint,
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    marginBottom: 7,
  },
  input: {
    width: "100%",
    background: c.surface,
    border: `1px solid ${c.border}`,
    borderRadius: 10,
    padding: "10px 14px",
    color: c.text,
    fontSize: 13,
    outline: "none",
    boxSizing: "border-box" as const,
    fontFamily: "inherit",
  },
  select: {
    width: "100%",
    background: c.surface,
    border: `1px solid ${c.border}`,
    borderRadius: 10,
    padding: "10px 14px",
    color: c.text,
    fontSize: 13,
    outline: "none",
    cursor: "pointer",
    boxSizing: "border-box" as const,
    fontFamily: "inherit",
  },
  grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 },
  actions: {
    display: "flex",
    gap: 10,
    justifyContent: "flex-end",
    marginTop: 24,
    paddingTop: 16,
    borderTop: `1px solid ${c.border}`,
  },
};

// ─── Blog Modal ───────────────────────────────────────────────────────────────
function BlogModal({
  blog,
  onSave,
  onClose,
  isSaving,
}: {
  blog: Blog | null;
  onSave: (f: any) => void;
  onClose: () => void;
  isSaving: boolean;
}) {
  const [form, setForm] = useState<BlogForm>(
    blog
      ? {
          title: blog.title,
          category: blog.category,
          author: blog.author,
          readTime: blog.readTime,
          status: blog.status,
          excerpt: blog.excerpt,
          content: blog.content,
          date: blog.date,
          image: blog.image || "", // ✅ FIX: pre-populate existing image
        }
      : {
          title: "",
          category: CATEGORIES[0],
          author: "",
          readTime: "5 Min Read",
          status: "Draft",
          excerpt: "",
          content: "",
          date: new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          image: "",
        },
  );

  // ✅ FIX: track whether user picked a new file to replace the image
  const [imageFile, setImageFile] = useState<File | null>(null);
  // ✅ FIX: preview URL — starts as existing image, updates when new file picked
  const [previewUrl, setPreviewUrl] = useState<string>(blog?.image || "");
  const [imgErr, setImgErr] = useState(false);

  // When a new file is selected, generate a local object URL for preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setImageFile(file);
    if (file) {
      setImgErr(false);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  // When the URL input changes, update preview from URL
  const handleUrlChange = (val: string) => {
    setImgErr(false);
    setImageFile(null); // clear any pending file upload
    setForm((p) => ({ ...p, image: val }));
    setPreviewUrl(val);
  };

  const f = (k: keyof BlogForm, v: any) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div
      style={T.overlay}
      onClick={(e) => e.target === e.currentTarget && !isSaving && onClose()}
    >
      <div style={T.modal}>
        <div style={T.title}>{blog ? "Edit Article" : "Draft New Article"}</div>

        <div style={T.fg}>
          <label style={T.label}>Article Title *</label>
          <input
            style={T.input}
            value={form.title}
            onChange={(e) => f("title", e.target.value)}
            placeholder="Enter headline..."
          />
        </div>

        <div style={T.fg}>
          <label style={T.label}>Excerpt / Brief</label>
          <textarea
            style={{ ...T.input, minHeight: 72, resize: "vertical" as const }}
            value={form.excerpt}
            onChange={(e) => f("excerpt", e.target.value)}
            placeholder="Short summary shown on listing pages..."
          />
        </div>

        <div style={T.fg}>
          <label style={T.label}>Full Content (HTML or Markdown)</label>
          <textarea
            style={{
              ...T.input,
              minHeight: 160,
              resize: "vertical" as const,
              fontFamily: "monospace",
              fontSize: 12,
            }}
            value={form.content}
            onChange={(e) => f("content", e.target.value)}
            placeholder="<p>Write your full article here...</p>"
          />
        </div>

        <div style={T.grid2}>
          <div style={T.fg}>
            <label style={T.label}>Category</label>
            <select
              style={T.select}
              value={form.category}
              onChange={(e) => f("category", e.target.value)}
            >
              {CATEGORIES.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div style={T.fg}>
            <label style={T.label}>Status</label>
            <select
              style={T.select}
              value={form.status}
              onChange={(e) => f("status", e.target.value as BlogStatus)}
            >
              <option>Draft</option>
              <option>Published</option>
            </select>
          </div>
        </div>

        <div style={T.grid2}>
          <div style={T.fg}>
            <label style={T.label}>Author</label>
            <input
              style={T.input}
              value={form.author}
              onChange={(e) => f("author", e.target.value)}
              placeholder="Author name..."
            />
          </div>
          <div style={T.fg}>
            <label style={T.label}>Read Time</label>
            <input
              style={T.input}
              value={form.readTime}
              onChange={(e) => f("readTime", e.target.value)}
              placeholder="5 Min Read"
            />
          </div>
        </div>

        {/* ✅ FIX: Image section — URL input + file upload, unified preview */}
        <div style={T.fg}>
          <label style={T.label}>Featured Image</label>

          {/* URL input */}
          <input
            style={{ ...T.input, marginBottom: 10 }}
            value={form.image}
            onChange={(e) => handleUrlChange(e.target.value)}
            placeholder="https://example.com/image.jpg  (paste URL or upload below)"
          />

          {/* File upload — replaces image when editing too */}
          <div
            style={{
              border: `1px dashed ${c.borderMid}`,
              borderRadius: 10,
              padding: "12px 14px",
              cursor: "pointer",
              background: c.surface,
            }}
          >
            <label style={{ cursor: "pointer", display: "block" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={c.faint}
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <span style={{ fontSize: 12, color: c.muted }}>
                  {imageFile
                    ? `✓ ${imageFile.name}`
                    : blog?.image
                      ? "Upload new image to replace current"
                      : "Upload image file"}
                </span>
              </div>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </label>
          </div>

          {/* ✅ FIX: Live preview — shows current or newly selected image */}
          {previewUrl && !imgErr && (
            <div
              style={{
                marginTop: 10,
                position: "relative",
                display: "inline-block",
                width: "100%",
              }}
            >
              <img
                src={previewUrl}
                alt="preview"
                onError={() => setImgErr(true)}
                style={{
                  width: "100%",
                  maxHeight: 180,
                  objectFit: "cover",
                  borderRadius: 10,
                  border: `1px solid ${c.border}`,
                  display: "block",
                }}
              />
              {/* Clear image button */}
              <button
                onClick={() => {
                  setPreviewUrl("");
                  setImageFile(null);
                  setImgErr(false);
                  f("image", "");
                }}
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  background: "rgba(0,0,0,0.6)",
                  border: "none",
                  borderRadius: "50%",
                  width: 28,
                  height: 28,
                  cursor: "pointer",
                  color: "#fff",
                  fontSize: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "inherit",
                }}
                title="Remove image"
              >
                ✕
              </button>
            </div>
          )}
          {imgErr && (
            <div
              style={{
                marginTop: 8,
                padding: "8px 12px",
                background: "#1E293B",
                border: "1px solid #ef444460",
                borderRadius: 8,
                color: "#ef4444",
                fontSize: 12,
              }}
            >
              ⚠ Could not load image preview. The URL may be invalid.
            </div>
          )}
        </div>

        <div style={T.actions}>
          <button style={btn("ghost")} onClick={onClose} disabled={isSaving}>
            Cancel
          </button>
          <button
            style={btn("primary")}
            disabled={isSaving || !form.title.trim()}
            onClick={() =>
              form.title.trim() && onSave({ ...form, _imageFile: imageFile })
            }
          >
            {isSaving ? "Saving..." : blog ? "Save Changes" : "Publish Article"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Bulk Upload Modal ────────────────────────────────────────────────────────
function BulkModal({
  onClose,
  onUpload,
  isUploading,
  result,
}: {
  onClose: () => void;
  onUpload: (f: File) => void;
  isUploading: boolean;
  result: any;
}) {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div
      style={T.overlay}
      onClick={(e) => e.target === e.currentTarget && !isUploading && onClose()}
    >
      <div style={{ ...T.modal, maxWidth: 520 }}>
        <div style={T.title}>Bulk Import Articles</div>
        <div
          style={{
            background: c.surface,
            border: `1px solid ${c.border}`,
            borderRadius: 10,
            padding: "14px 16px",
            marginBottom: 20,
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: c.text,
              marginBottom: 10,
            }}
          >
            How to prepare your document
          </div>
          <ol
            style={{
              margin: 0,
              paddingLeft: 18,
              color: c.muted,
              fontSize: 12,
              lineHeight: 1.9,
            }}
          >
            <li>Open your Google Doc with all blog content</li>
            <li>
              Each blog must start with a marker:{" "}
              <strong style={{ color: c.text }}>BLOG 1</strong>,{" "}
              <strong style={{ color: c.text }}>BLOG 2</strong>, etc.
            </li>
            <li>The line after the marker becomes the title</li>
            <li>First paragraph after title = excerpt; rest = content</li>
            <li>
              Download as <strong style={{ color: c.text }}>.docx</strong>{" "}
              format
            </li>
          </ol>
        </div>
        <div style={T.fg}>
          <label style={T.label}>Upload .docx File</label>
          <input
            type="file"
            accept=".docx"
            style={{
              width: "100%",
              fontSize: 12,
              color: c.muted,
              background: c.surface,
              border: `1px solid ${c.border}`,
              borderRadius: 10,
              padding: "8px 12px",
              cursor: "pointer",
              boxSizing: "border-box" as const,
            }}
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
          {file && (
            <div style={{ fontSize: 11, color: c.faint, marginTop: 6 }}>
              Selected: <strong style={{ color: c.muted }}>{file.name}</strong>
            </div>
          )}
        </div>
        {result && (
          <div
            style={{
              background: "#10B98110",
              border: "1px solid #10B98130",
              borderRadius: 10,
              padding: "14px 16px",
              marginTop: 16,
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#10B981",
                marginBottom: 8,
              }}
            >
              {result.message}
            </div>
            {result.created?.map((b: any, i: number) => (
              <div
                key={i}
                style={{ fontSize: 12, color: c.muted, paddingTop: 3 }}
              >
                ✓ {b.title}
              </div>
            ))}
            {result.errors?.length > 0 && (
              <div
                style={{
                  background: "#ef444410",
                  border: "1px solid #ef444430",
                  borderRadius: 8,
                  padding: "10px 14px",
                  marginTop: 12,
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#ef4444",
                    marginBottom: 6,
                  }}
                >
                  Errors ({result.errors.length})
                </div>
                {result.errors.map((e: any, i: number) => (
                  <div key={i} style={{ fontSize: 12, color: "#fca5a5" }}>
                    {e.chunk || e.title}: {e.error}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        <div style={T.actions}>
          <button style={btn("ghost")} onClick={onClose} disabled={isUploading}>
            Cancel
          </button>
          <button
            style={btn("primary")}
            disabled={!file || isUploading}
            onClick={() => file && onUpload(file)}
          >
            {isUploading ? "Importing..." : "Import Articles"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main BlogsView ───────────────────────────────────────────────────────────
export default function BlogsView() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [syncing, setSyncing] = useState(false);
  const [modal, setModal] = useState<Blog | "add" | null>(null);
  const [bulkOpen, setBulkOpen] = useState(false);
  const [confirm, setConfirm] = useState<{
    id: string;
    message: string;
  } | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isBulkUploading, setIsBulkUploading] = useState(false);
  const [bulkResult, setBulkResult] = useState<any>(null);

  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  const PAGE_SIZE = 15;
  const [page, setPage] = useState(1);

  // ── Fetch ────────────────────────────────────────────────────────────────
  const fetchBlogs = async () => {
    try {
      setSyncing(true);
      const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      setBlogs(
        snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Blog, "id">) })),
      );
    } catch (err) {
      console.error("fetchBlogs:", err);
    } finally {
      setSyncing(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // ── Save ─────────────────────────────────────────────────────────────────
  const handleSave = async (form: BlogForm & { _imageFile?: File }) => {
    try {
      setIsSaving(true);
      const { _imageFile, ...rest } = form;

      // ✅ FIX: Start with the current image value from the form
      let image = rest.image || "";

      // ✅ FIX: Only upload if a new file was explicitly chosen
      if (_imageFile) {
        const fd = new FormData();
        fd.append("file", _imageFile);
        fd.append("folder", "blogs");
        const res = await fetch("/api/upload", { method: "POST", body: fd });
        if (res.ok) {
          image = (await res.json()).url;
        } else {
          console.error("Upload failed:", await res.text());
        }
      }

      if (modal && modal !== "add") {
        // ✅ FIX: Edit — update all fields including the (possibly replaced) image
        const existingBlog = modal as Blog;
        const { id, slug: _s, ...fields } = rest as Blog;
        await updateDoc(doc(db, "blogs", existingBlog.id), {
          ...fields,
          image, // ✅ always write the final image value
          updatedAt: Timestamp.now(),
        });
      } else {
        // New blog
        const slug = (rest.title ?? "")
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
        await addDoc(collection(db, "blogs"), {
          ...rest,
          image,
          slug,
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now(),
        });
      }

      await fetchBlogs();
      setModal(null);
    } catch (err) {
      console.error("handleSave:", err);
    } finally {
      setIsSaving(false);
    }
  };

  // ── Delete ───────────────────────────────────────────────────────────────
  const handleDelete = async (id: string) => {
    try {
      setSyncing(true);
      await deleteDoc(doc(db, "blogs", id));
      await fetchBlogs();
      setConfirm(null);
    } catch (err) {
      console.error("handleDelete:", err);
    } finally {
      setSyncing(false);
    }
  };

  // ── Toggle status ────────────────────────────────────────────────────────
  const handleToggle = async (blog: Blog) => {
    const next: BlogStatus =
      blog.status === "Published" ? "Draft" : "Published";
    await updateDoc(doc(db, "blogs", blog.id), {
      status: next,
      updatedAt: Timestamp.now(),
    });
    setBlogs((p) =>
      p.map((b) => (b.id === blog.id ? { ...b, status: next } : b)),
    );
  };

  // ── Bulk upload ──────────────────────────────────────────────────────────
  const handleBulkUpload = async (file: File) => {
    try {
      setIsBulkUploading(true);
      setBulkResult(null);
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/blogs/bulk", { method: "POST", body: fd });
      const data = await res.json();
      setBulkResult(data);
      await fetchBlogs();
    } catch (err: any) {
      setBulkResult({ message: err.message, created: [], errors: [] });
    } finally {
      setIsBulkUploading(false);
    }
  };

  // ── Filter + paginate ────────────────────────────────────────────────────
  const filtered = blogs.filter(
    (b) =>
      (filterCat === "All" || b.category === filterCat) &&
      (filterStatus === "All" || b.status === filterStatus) &&
      (!search || b.title.toLowerCase().includes(search.toLowerCase())),
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const published = blogs.filter((b) => b.status === "Published").length;

  const filterInput = {
    background: c.surface,
    border: `1px solid ${c.border}`,
    borderRadius: 10,
    padding: "8px 14px",
    color: c.text,
    fontSize: 12,
    outline: "none",
    fontFamily: "inherit",
    cursor: "pointer",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {syncing && (
        <div
          style={{
            position: "fixed",
            top: 16,
            right: 16,
            background: c.primary,
            color: "#fff",
            padding: "6px 14px",
            borderRadius: 8,
            fontSize: 12,
            zIndex: 9998,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#fff",
              opacity: 0.7,
            }}
          />
          Syncing...
        </div>
      )}

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 14,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: c.text,
              marginBottom: 4,
            }}
          >
            Blog Manager
          </div>
          <div style={{ fontSize: 12, color: c.faint }}>
            {blogs.length} total &nbsp;·&nbsp; {published} published
          </div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button
            style={btn("ghost")}
            onClick={() => {
              setBulkResult(null);
              setBulkOpen(true);
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            Bulk Import
          </button>
          <button style={btn("primary")} onClick={() => setModal("add")}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            New Article
          </button>
        </div>
      </div>

      {/* Filters */}
      <div
        style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative", flex: 1, minWidth: 200 }}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={c.faint}
            strokeWidth="2"
            style={{
              position: "absolute",
              left: 12,
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
            }}
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            placeholder="Search articles..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            style={{
              ...filterInput,
              width: "100%",
              paddingLeft: 36,
              boxSizing: "border-box" as const,
            }}
          />
        </div>
        <select
          style={filterInput}
          value={filterStatus}
          onChange={(e) => {
            setFilterStatus(e.target.value);
            setPage(1);
          }}
        >
          <option value="All">All Status</option>
          <option value="Published">Published</option>
          <option value="Draft">Draft</option>
        </select>
        <select
          style={filterInput}
          value={filterCat}
          onChange={(e) => {
            setFilterCat(e.target.value);
            setPage(1);
          }}
        >
          <option value="All">All Categories</option>
          {CATEGORIES.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <button
          style={{ ...btn("ghost"), padding: "8px 12px" }}
          onClick={fetchBlogs}
          title="Refresh"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="23 4 23 10 17 10" />
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
          </svg>
        </button>
      </div>

      {/* Table */}
      <div
        style={{
          background: c.surface,
          border: `1px solid ${c.border}`,
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <div style={{ overflowX: "auto" }}>
          <table
            style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}
          >
            <thead>
              <tr style={{ background: c.bg }}>
                {[
                  "Article",
                  "Category",
                  "Author",
                  "Date",
                  "Read Time",
                  "Status",
                  "Actions",
                ].map((h, i) => (
                  <th
                    key={h}
                    style={{
                      padding: "12px 16px",
                      textAlign: (i === 5
                        ? "center"
                        : i === 6
                          ? "right"
                          : "left") as any,
                      fontSize: 10,
                      fontWeight: 700,
                      color: c.faint,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      borderBottom: `1px solid ${c.border}`,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    style={{
                      textAlign: "center",
                      color: c.faint,
                      padding: "48px 0",
                      fontStyle: "italic",
                      fontSize: 13,
                    }}
                  >
                    {search || filterCat !== "All" || filterStatus !== "All"
                      ? "No articles match your filters."
                      : "No articles yet — click New Article to get started."}
                  </td>
                </tr>
              ) : (
                paginated.map((b) => (
                  <tr key={b.id} style={{ borderBottom: `1px solid ${c.bg}` }}>
                    {/* Article — ✅ FIX: image renders properly with crossOrigin */}
                    <td
                      style={{
                        padding: "12px 16px",
                        maxWidth: 280,
                        verticalAlign: "middle",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        {b.image ? (
                          <div
                            style={{
                              width: 52,
                              height: 36,
                              borderRadius: 6,
                              border: `1px solid ${c.border}`,
                              flexShrink: 0,
                              overflow: "hidden",
                              background: c.border,
                            }}
                          >
                            <img
                              src={b.image}
                              alt=""
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                // ✅ FIX: on error, replace with placeholder div
                                const parent = (
                                  e.currentTarget as HTMLImageElement
                                ).parentElement;
                                if (parent) {
                                  parent.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:9px;color:#475569;font-family:monospace">IMG</div>`;
                                }
                              }}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                              }}
                            />
                          </div>
                        ) : (
                          <div
                            style={{
                              width: 52,
                              height: 36,
                              borderRadius: 6,
                              background: c.border,
                              flexShrink: 0,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: 9,
                              color: c.faint,
                            }}
                          >
                            IMG
                          </div>
                        )}
                        <div style={{ minWidth: 0 }}>
                          <div
                            style={{
                              fontWeight: 600,
                              color: c.text,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {b.title}
                          </div>
                          {b.excerpt && (
                            <div
                              style={{
                                fontSize: 11,
                                color: c.faint,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                marginTop: 2,
                              }}
                            >
                              {b.excerpt}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td
                      style={{ padding: "12px 16px", verticalAlign: "middle" }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          padding: "2px 8px",
                          borderRadius: 4,
                          fontSize: 11,
                          fontWeight: 600,
                          background: `${catColor(b.category)}18`,
                          color: catColor(b.category),
                          border: `1px solid ${catColor(b.category)}30`,
                        }}
                      >
                        {b.category}
                      </span>
                    </td>

                    {/* Author */}
                    <td
                      style={{
                        padding: "12px 16px",
                        color: c.muted,
                        fontSize: 12,
                        verticalAlign: "middle",
                      }}
                    >
                      {b.author || "—"}
                    </td>

                    {/* Date */}
                    <td
                      style={{
                        padding: "12px 16px",
                        color: c.faint,
                        fontSize: 12,
                        whiteSpace: "nowrap",
                        verticalAlign: "middle",
                      }}
                    >
                      {b.date || "—"}
                    </td>

                    {/* Read Time */}
                    <td
                      style={{
                        padding: "12px 16px",
                        color: c.faint,
                        fontSize: 12,
                        whiteSpace: "nowrap",
                        verticalAlign: "middle",
                      }}
                    >
                      {b.readTime || "—"}
                    </td>

                    {/* Status */}
                    <td
                      style={{
                        padding: "12px 16px",
                        textAlign: "center",
                        verticalAlign: "middle",
                      }}
                    >
                      <span
                        onClick={() => handleToggle(b)}
                        title="Click to toggle"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 5,
                          padding: "3px 10px",
                          borderRadius: 20,
                          fontSize: 11,
                          fontWeight: 600,
                          cursor: "pointer",
                          border: "1px solid",
                          userSelect: "none",
                          ...(b.status === "Published"
                            ? {
                                background: "#10B98115",
                                color: "#10B981",
                                borderColor: "#10B98130",
                              }
                            : {
                                background: "#F59E0B15",
                                color: "#F59E0B",
                                borderColor: "#F59E0B30",
                              }),
                        }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "currentColor",
                            display: "inline-block",
                          }}
                        />
                        {b.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td
                      style={{
                        padding: "12px 16px",
                        textAlign: "right",
                        verticalAlign: "middle",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: 6,
                          justifyContent: "flex-end",
                        }}
                      >
                        <button
                          style={btn("ghost")}
                          onClick={() => setModal(b)}
                          title="Edit"
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                          Edit
                        </button>
                        <button
                          style={btn("danger")}
                          onClick={() =>
                            setConfirm({
                              id: b.id,
                              message: `Permanently delete "${b.title}"?`,
                            })
                          }
                          title="Delete"
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                            <path d="M10 11v6" />
                            <path d="M14 11v6" />
                            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 16px",
              borderTop: `1px solid ${c.border}`,
            }}
          >
            <span
              style={{
                fontSize: 11,
                color: c.faint,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Page {page} of {totalPages} · {filtered.length} articles
            </span>
            <div style={{ display: "flex", gap: 8 }}>
              {[
                {
                  label: "← Prev",
                  disabled: page <= 1,
                  action: () => setPage((p) => p - 1),
                },
                {
                  label: "Next →",
                  disabled: page >= totalPages,
                  action: () => setPage((p) => p + 1),
                },
              ].map(({ label, disabled, action }) => (
                <button
                  key={label}
                  style={{
                    padding: "6px 14px",
                    background: disabled ? "transparent" : c.border,
                    border: `1px solid ${c.border}`,
                    borderRadius: 8,
                    color: disabled ? "#334155" : c.muted,
                    fontSize: 12,
                    cursor: disabled ? "not-allowed" : "pointer",
                    opacity: disabled ? 0.4 : 1,
                    fontFamily: "inherit",
                  }}
                  disabled={disabled}
                  onClick={action}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      {modal && (
        <BlogModal
          blog={modal === "add" ? null : modal}
          onSave={handleSave}
          onClose={() => !isSaving && setModal(null)}
          isSaving={isSaving}
        />
      )}
      {bulkOpen && (
        <BulkModal
          onClose={() => !isBulkUploading && setBulkOpen(false)}
          onUpload={handleBulkUpload}
          isUploading={isBulkUploading}
          result={bulkResult}
        />
      )}
      {confirm && (
        <ConfirmDialog
          message={confirm.message}
          onConfirm={() => handleDelete(confirm.id)}
          onCancel={() => setConfirm(null)}
        />
      )}
    </div>
  );
}
