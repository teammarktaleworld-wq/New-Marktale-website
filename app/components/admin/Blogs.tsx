// // components/Blogs.tsx
// import { useState, useEffect } from "react";
// import { S, Icons, ConfirmDialog, catColor } from "./Common";
// import { CATEGORIES } from "./data";
// import { db } from "../../lib/firebase";
// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";

// type Blog = {
//   id: string;
//   slug: string;
//   title: string;
//   category: string;
//   date: string;
//   author: string;
//   readTime: string;
//   status: "Published" | "Draft";
//   image: string;
//   excerpt: string;
//   content: string;
// };

// type BlogForm = Omit<Blog, "id" | "slug"> & {
//   id?: string;
//   slug?: string;
// };

// // ─── Blog Modal ───────────────────────────────────────────────────────────────
// function BlogModal({ blog, onSave, onClose }: any) {
//   const [form, setForm] = useState<BlogForm>(
//     blog || {
//       title: "",
//       category: CATEGORIES[0],
//       author: "",
//       readTime: "",
//       status: "Draft",
//       excerpt: "",
//       content: "",
//       date: new Date().toLocaleDateString("en-US", {
//         month: "short",
//         day: "numeric",
//         year: "numeric",
//       }),
//       image: "",
//     },
//   );

//   const [imageError, setImageError] = useState(false);

//   // Reset image error when URL changes
//   const handleImageChange = (url: string) => {
//     setImageError(false);
//     setForm({ ...form, image: url });
//   };

//   return (
//     <div style={S.modal}>
//       <div style={{ ...S.modalBox, maxHeight: "90vh", overflowY: "auto" }}>
//         <div style={S.modalTitle}>{blog ? "Edit Blog" : "Add New Blog"}</div>

//         {/* Title */}
//         <div style={S.formGroup}>
//           <label style={S.label}>Title *</label>
//           <input
//             style={S.input}
//             value={form.title}
//             onChange={(e) => setForm({ ...form, title: e.target.value })}
//             placeholder="Blog title..."
//           />
//         </div>

//         {/* Category + Status */}
//         <div
//           style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
//         >
//           <div style={S.formGroup}>
//             <label style={S.label}>Category</label>
//             <select
//               style={{ ...S.select, width: "100%" }}
//               value={form.category}
//               onChange={(e) => setForm({ ...form, category: e.target.value })}
//             >
//               {CATEGORIES.map((c) => (
//                 <option key={c}>{c}</option>
//               ))}
//             </select>
//           </div>
//           <div style={S.formGroup}>
//             <label style={S.label}>Status</label>
//             <select
//               style={{ ...S.select, width: "100%" }}
//               value={form.status}
//               onChange={(e) =>
//                 setForm({
//                   ...form,
//                   status: e.target.value as "Published" | "Draft",
//                 })
//               }
//             >
//               <option>Draft</option>
//               <option>Published</option>
//             </select>
//           </div>
//         </div>

//         {/* Author + Read Time */}
//         <div
//           style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
//         >
//           <div style={S.formGroup}>
//             <label style={S.label}>Author</label>
//             <input
//               style={S.input}
//               value={form.author}
//               onChange={(e) => setForm({ ...form, author: e.target.value })}
//               placeholder="Author name..."
//             />
//           </div>
//           <div style={S.formGroup}>
//             <label style={S.label}>Read Time</label>
//             <input
//               style={S.input}
//               value={form.readTime}
//               onChange={(e) => setForm({ ...form, readTime: e.target.value })}
//               placeholder="e.g. 5 min read"
//             />
//           </div>
//         </div>

//         {/* Image URL + Preview */}
//         <div style={S.formGroup}>
//           <label style={S.label}>Image URL</label>
//           <input
//             style={S.input}
//             value={form.image}
//             onChange={(e) => handleImageChange(e.target.value)}
//             placeholder="https://example.com/image.jpg"
//           />
//           {/* Live Preview */}
//           {form.image && !imageError ? (
//             <div style={{ marginTop: 8, position: "relative" }}>
//               <img
//                 src={form.image}
//                 alt="Preview"
//                 onError={() => setImageError(true)}
//                 style={{
//                   width: "100%",
//                   maxHeight: 180,
//                   objectFit: "cover",
//                   borderRadius: 8,
//                   border: "1px solid #334155",
//                   display: "block",
//                 }}
//               />
//               <span
//                 style={{
//                   position: "absolute",
//                   top: 6,
//                   left: 6,
//                   background: "rgba(0,0,0,0.55)",
//                   color: "#94A3B8",
//                   fontSize: 10,
//                   padding: "2px 7px",
//                   borderRadius: 4,
//                 }}
//               >
//                 Preview
//               </span>
//             </div>
//           ) : imageError ? (
//             <div
//               style={{
//                 marginTop: 8,
//                 padding: "10px 14px",
//                 background: "#1E293B",
//                 border: "1px solid #ef4444",
//                 borderRadius: 8,
//                 color: "#ef4444",
//                 fontSize: 12,
//               }}
//             >
//               ⚠ Could not load image. Check the URL.
//             </div>
//           ) : null}
//         </div>

//         {/* Excerpt */}
//         <div style={S.formGroup}>
//           <label style={S.label}>Excerpt</label>
//           <textarea
//             style={{ ...S.input, minHeight: 80 }}
//             value={form.excerpt}
//             onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
//             placeholder="Short description..."
//           />
//         </div>

//         {/* Content */}
//         <div style={S.formGroup}>
//           <label style={S.label}>Content (HTML)</label>
//           <textarea
//             style={{ ...S.input, minHeight: 150, fontFamily: "monospace" }}
//             value={form.content}
//             onChange={(e) => setForm({ ...form, content: e.target.value })}
//             placeholder="<p>Blog content in HTML...</p>"
//           />
//         </div>

//         {/* Actions */}
//         <div
//           style={{
//             display: "flex",
//             gap: 10,
//             justifyContent: "flex-end",
//             marginTop: 8,
//           }}
//         >
//           <button style={S.btn("ghost")} onClick={onClose}>
//             Cancel
//           </button>
//           <button
//             style={S.btn("primary")}
//             onClick={() => {
//               if (form.title.trim()) onSave(form);
//             }}
//           >
//             {blog ? "Save Changes" : "Add Blog"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Main Blogs Component ─────────────────────────────────────────────────────
// export default function Blogs({
//   blogs: initialBlogs = [],
//   setBlogs: onBlogsChange,
// }: {
//   blogs?: Blog[];
//   setBlogs?: (blogs: Blog[]) => void;
// }) {
//   const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);
//   const [search, setSearch] = useState("");
//   const [filterCat, setFilterCat] = useState("All");
//   const [filterStatus, setFilterStatus] = useState("All");
//   const [modal, setModal] = useState<Blog | "add" | null>(null);
//   const [confirm, setConfirm] = useState<{
//     id: string;
//     message: string;
//   } | null>(null);
//   const [isSyncing, setIsSyncing] = useState(false);

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   // ── Firestore: Fetch ────────────────────────────────────────────────────────
//   const fetchBlogs = async () => {
//     try {
//       setIsSyncing(true);
//       const snapshot = await getDocs(collection(db, "blogs"));
//       const data: Blog[] = snapshot.docs.map((d) => ({
//         id: d.id,
//         ...(d.data() as Omit<Blog, "id">),
//       }));
//       setBlogs(data);
//       if (onBlogsChange) onBlogsChange(data);
//     } catch (error) {
//       console.error("Failed to fetch blogs:", error);
//     } finally {
//       setIsSyncing(false);
//     }
//   };

//   // ── Firestore: Add ──────────────────────────────────────────────────────────
//   const handleSave = async (form: BlogForm) => {
//     try {
//       setIsSyncing(true);

//       if (modal && modal !== "add") {
//         // Update
//         const { id, ...rest } = form as Blog;
//         await updateDoc(doc(db, "blogs", modal.id), { ...rest });
//       } else {
//         // Add
//         const slug = form.title
//           .toLowerCase()
//           .replace(/[^a-z0-9]+/g, "-")
//           .replace(/(^-|-$)/g, "");
//         await addDoc(collection(db, "blogs"), { ...form, slug });
//       }

//       await fetchBlogs();
//       setModal(null);
//     } catch (error) {
//       console.error("Failed to save blog:", error);
//     } finally {
//       setIsSyncing(false);
//     }
//   };

//   // ── Firestore: Delete ───────────────────────────────────────────────────────
//   const handleDelete = async (id: string) => {
//     try {
//       setIsSyncing(true);
//       await deleteDoc(doc(db, "blogs", id));
//       await fetchBlogs();
//       setConfirm(null);
//     } catch (error) {
//       console.error("Failed to delete blog:", error);
//     } finally {
//       setIsSyncing(false);
//     }
//   };

//   const filtered = blogs.filter(
//     (b) =>
//       (filterCat === "All" || b.category === filterCat) &&
//       (filterStatus === "All" || b.status === filterStatus) &&
//       b.title.toLowerCase().includes(search.toLowerCase()),
//   );

//   return (
//     <div>
//       {/* Syncing indicator */}
//       {isSyncing && (
//         <div
//           style={{
//             position: "fixed",
//             top: 20,
//             right: 20,
//             background: "#3B82F6",
//             color: "white",
//             padding: "8px 16px",
//             borderRadius: 8,
//             fontSize: 12,
//             zIndex: 1000,
//           }}
//         >
//           <Icons.Refresh /> Syncing...
//         </div>
//       )}

//       {/* Header */}
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           marginBottom: 24,
//         }}
//       >
//         <div>
//           <div style={S.sectionTitle}>Blog Manager</div>
//           <div style={S.sectionSub}>
//             {blogs.length} total posts ·{" "}
//             {blogs.filter((b) => b.status === "Published").length} published
//           </div>
//         </div>
//         <button style={S.btn("primary")} onClick={() => setModal("add")}>
//           <Icons.Add /> Add Blog
//         </button>
//       </div>

//       {/* Filters */}
//       <div
//         style={{
//           display: "flex",
//           gap: 10,
//           marginBottom: 16,
//           flexWrap: "wrap",
//           alignItems: "center",
//         }}
//       >
//         <div style={{ position: "relative" }}>
//           <div
//             style={{
//               position: "absolute",
//               left: 12,
//               top: "50%",
//               transform: "translateY(-50%)",
//             }}
//           >
//             <Icons.Search />
//           </div>
//           <input
//             style={{ ...S.searchBar, paddingLeft: 36 }}
//             placeholder="Search blogs..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>
//         <select
//           style={S.select}
//           value={filterCat}
//           onChange={(e) => setFilterCat(e.target.value)}
//         >
//           <option>All</option>
//           {CATEGORIES.map((c) => (
//             <option key={c}>{c}</option>
//           ))}
//         </select>
//         <select
//           style={S.select}
//           value={filterStatus}
//           onChange={(e) => setFilterStatus(e.target.value)}
//         >
//           <option>All</option>
//           <option>Published</option>
//           <option>Draft</option>
//         </select>
//         <button style={S.btn("ghost")} onClick={fetchBlogs}>
//           <Icons.Refresh /> Refresh
//         </button>
//       </div>

//       {/* Table */}
//       <div style={S.card}>
//         <table style={S.table}>
//           <thead>
//             <tr>
//               <th style={S.th}>Title</th>
//               <th style={S.th}>Category</th>
//               <th style={S.th}>Author</th>
//               <th style={S.th}>Date</th>
//               <th style={S.th}>Read Time</th>
//               <th style={S.th}>Status</th>
//               <th style={S.th}>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filtered.length === 0 && (
//               <tr>
//                 <td
//                   colSpan={7}
//                   style={{
//                     ...S.td,
//                     textAlign: "center",
//                     color: "#475569",
//                     padding: 32,
//                   }}
//                 >
//                   No blogs found.
//                 </td>
//               </tr>
//             )}
//             {filtered.map((b) => (
//               <tr key={b.id}>
//                 {/* Title + Thumbnail */}
//                 <td style={{ ...S.td, maxWidth: 240 }}>
//                   <div
//                     style={{ display: "flex", alignItems: "center", gap: 10 }}
//                   >
//                     {b.image ? (
//                       <img
//                         src={b.image}
//                         alt=""
//                         style={{
//                           width: 44,
//                           height: 30,
//                           objectFit: "cover",
//                           borderRadius: 4,
//                           border: "1px solid #334155",
//                           flexShrink: 0,
//                         }}
//                         onError={(e) =>
//                           (e.currentTarget.style.display = "none")
//                         }
//                       />
//                     ) : (
//                       <div
//                         style={{
//                           width: 44,
//                           height: 30,
//                           borderRadius: 4,
//                           background: "#1E293B",
//                           border: "1px solid #334155",
//                           flexShrink: 0,
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           fontSize: 10,
//                           color: "#475569",
//                         }}
//                       >
//                         No img
//                       </div>
//                     )}
//                     <span
//                       style={{
//                         overflow: "hidden",
//                         textOverflow: "ellipsis",
//                         whiteSpace: "nowrap",
//                         fontWeight: 500,
//                         color: "#F1F5F9",
//                       }}
//                     >
//                       {b.title}
//                     </span>
//                   </div>
//                 </td>
//                 <td style={S.td}>
//                   <span style={S.tag(catColor(b.category))}>{b.category}</span>
//                 </td>
//                 <td style={S.td}>{b.author}</td>
//                 <td style={S.td}>{b.date}</td>
//                 <td style={S.td}>{b.readTime}</td>
//                 <td style={S.td}>
//                   <span
//                     style={S.badge(
//                       b.status === "Published" ? "#10B981" : "#F59E0B",
//                     )}
//                   >
//                     <Icons.Dot /> {b.status}
//                   </span>
//                 </td>
//                 <td style={S.td}>
//                   <div style={{ display: "flex", gap: 6 }}>
//                     <button style={S.btn("ghost")} onClick={() => setModal(b)}>
//                       <Icons.Edit />
//                     </button>
//                     <button
//                       style={S.btn("danger")}
//                       onClick={() =>
//                         setConfirm({
//                           id: b.id,
//                           message:
//                             "This blog post will be permanently deleted.",
//                         })
//                       }
//                     >
//                       <Icons.Delete />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {modal && (
//         <BlogModal
//           blog={modal === "add" ? null : modal}
//           onSave={handleSave}
//           onClose={() => setModal(null)}
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

// export const dynamic = "force-dynamic";

// import React, { useState, useEffect, useCallback } from "react";
// import { Card } from "@/components/ui/Card";
// import { Button } from "@/components/ui/Button";
// import { Modal } from "@/components/ui/Modal";
// import { Input, Textarea } from "@/components/ui/Input";
// import { Toast } from "@/components/ui/Toast";
// import { Loader } from "@/components/ui/Loader";
// import {
//   Edit2,
//   Trash2,
//   FileText,
//   Calendar,
//   User,
//   Upload,
//   Search,
//   Filter,
//   RefreshCw,
//   Eye,
//   EyeOff,
//   Image as ImageIcon,
//   Tag,
//   Clock,
// } from "lucide-react";

// // ─── Types ────────────────────────────────────────────────────────────────────
// type BlogStatus = "published" | "draft";

// type Blog = {
//   id: string;
//   slug: string;
//   title: string;
//   excerpt: string;
//   content: string;
//   category: string;
//   author: string;
//   readTime: string;
//   image: string;
//   status: BlogStatus;
//   date: string;
//   createdAt?: string;
// };

// type BlogForm = {
//   title: string;
//   excerpt: string;
//   content: string;
//   category: string;
//   author: string;
//   readTime: string;
//   image: string;
//   status: BlogStatus;
// };

// const CATEGORIES = [
//   "Leadership",
//   "Career Growth",
//   "Productivity",
//   "Mindset",
//   "Technology",
//   "Business",
//   "Wellness",
//   "Finance",
// ];

// const DEFAULT_FORM: BlogForm = {
//   title: "",
//   excerpt: "",
//   content: "",
//   category: "Leadership",
//   author: "Mridu Bhandari",
//   readTime: "5 Min Read",
//   image: "",
//   status: "published",
// };

// // ─── API helpers ──────────────────────────────────────────────────────────────
// const BlogAPI = {
//   getAll: async (params?: { status?: string; category?: string; page?: number; limit?: number }) => {
//     const qs = new URLSearchParams();
//     if (params?.status) qs.set("status", params.status);
//     if (params?.category && params.category !== "All") qs.set("category", params.category);
//     if (params?.page) qs.set("page", String(params.page));
//     if (params?.limit) qs.set("limit", String(params.limit));
//     const res = await fetch(`/api/blogs?${qs.toString()}`);
//     if (!res.ok) throw new Error((await res.json()).error || "Failed to fetch");
//     return res.json() as Promise<{ blogs: Blog[]; total: number; page: number; totalPages: number }>;
//   },

//   create: async (data: BlogForm & { date?: string; imageFile?: File }) => {
//     // Upload image if provided as a File (re-use your existing uploadMedia util)
//     let image = data.image;
//     if (data.imageFile) {
//       const fd = new FormData();
//       fd.append("file", data.imageFile);
//       fd.append("folder", "blogs");
//       const uploadRes = await fetch("/api/upload", { method: "POST", body: fd });
//       if (uploadRes.ok) image = (await uploadRes.json()).url;
//     }
//     const res = await fetch("/api/blogs", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ ...data, image, date: new Date().toISOString() }),
//     });
//     if (!res.ok) throw new Error((await res.json()).error || "Create failed");
//     return res.json();
//   },

//   update: async (id: string, data: Partial<BlogForm>) => {
//     const res = await fetch(`/api/blogs/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });
//     if (!res.ok) throw new Error((await res.json()).error || "Update failed");
//     return res.json();
//   },

//   delete: async (id: string) => {
//     const res = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
//     if (!res.ok) throw new Error((await res.json()).error || "Delete failed");
//     return res.json();
//   },

//   bulkUpload: async (file: File) => {
//     const fd = new FormData();
//     fd.append("file", file);
//     const res = await fetch("/api/blogs/bulk", { method: "POST", body: fd });
//     if (!res.ok) throw new Error((await res.json()).error || "Bulk upload failed");
//     return res.json();
//   },
// };

// // ─── Form Fields Component ────────────────────────────────────────────────────
// function BlogFormFields({
//   form,
//   setForm,
//   imageFile,
//   setImageFile,
//   showImageUrl = true,
// }: {
//   form: BlogForm;
//   setForm: (f: BlogForm) => void;
//   imageFile?: File | null;
//   setImageFile?: (f: File | null) => void;
//   showImageUrl?: boolean;
// }) {
//   return (
//     <>
//       <Input
//         label="Article Headline *"
//         required
//         value={form.title}
//         onChange={(e: any) => setForm({ ...form, title: e.target.value })}
//         placeholder="Enter a compelling title..."
//       />

//       <Textarea
//         label="Excerpt / Brief"
//         required
//         value={form.excerpt}
//         onChange={(e: any) => setForm({ ...form, excerpt: e.target.value })}
//         placeholder="A short summary shown on listing pages..."
//       />

//       <Textarea
//         label="Full Content (HTML or Markdown)"
//         required
//         value={form.content}
//         onChange={(e: any) => setForm({ ...form, content: e.target.value })}
//         className="min-h-[200px] font-mono"
//         placeholder="<p>Write your full article here...</p>"
//       />

//       <div className="grid grid-cols-2 gap-4">
//         <div className="space-y-2">
//           <label className="text-[10px] text-[#475569] font-black uppercase tracking-widest pl-1">
//             Category
//           </label>
//           <select
//             value={form.category}
//             onChange={(e) => setForm({ ...form, category: e.target.value })}
//             className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00e5ff]/40 transition-colors"
//           >
//             {CATEGORIES.map((c) => (
//               <option key={c} value={c} className="bg-[#0f172a]">
//                 {c}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="space-y-2">
//           <label className="text-[10px] text-[#475569] font-black uppercase tracking-widest pl-1">
//             Status
//           </label>
//           <select
//             value={form.status}
//             onChange={(e) => setForm({ ...form, status: e.target.value as BlogStatus })}
//             className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00e5ff]/40 transition-colors"
//           >
//             <option value="published" className="bg-[#0f172a]">Published</option>
//             <option value="draft" className="bg-[#0f172a]">Draft</option>
//           </select>
//         </div>
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         <Input
//           label="Author"
//           value={form.author}
//           onChange={(e: any) => setForm({ ...form, author: e.target.value })}
//           placeholder="Author name"
//         />
//         <Input
//           label="Read Time"
//           value={form.readTime}
//           onChange={(e: any) => setForm({ ...form, readTime: e.target.value })}
//           placeholder="e.g. 5 Min Read"
//         />
//       </div>

//       {showImageUrl && (
//         <Input
//           label="Image URL (optional)"
//           value={form.image}
//           onChange={(e: any) => setForm({ ...form, image: e.target.value })}
//           placeholder="https://example.com/image.jpg"
//         />
//       )}

//       {setImageFile && (
//         <div className="space-y-2">
//           <label className="text-[10px] text-[#475569] font-black uppercase tracking-widest pl-1">
//             Or Upload Featured Image
//           </label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setImageFile(e.target.files ? e.target.files[0] : null)}
//             className="w-full text-xs text-[#cbd5f5] file:mr-4 file:py-2.5 file:px-5 file:rounded-xl file:border-0 file:text-[10px] file:font-black file:uppercase file:bg-white/10 file:text-white hover:file:bg-white/20 cursor-pointer"
//           />
//           {imageFile && (
//             <p className="text-[10px] text-[#475569] pl-1">
//               Selected: <span className="text-[#94a3b8]">{imageFile.name}</span>
//             </p>
//           )}
//         </div>
//       )}
//     </>
//   );
// }

// // ─── Main Component ───────────────────────────────────────────────────────────
// export default function AdminBlog() {
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [total, setTotal] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const LIMIT = 20;

//   // Filters
//   const [search, setSearch] = useState("");
//   const [filterStatus, setFilterStatus] = useState("All");
//   const [filterCategory, setFilterCategory] = useState("All");

//   // Modals
//   const [isCreateOpen, setIsCreateOpen] = useState(false);
//   const [isEditOpen, setIsEditOpen] = useState(false);
//   const [isBulkOpen, setIsBulkOpen] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [editingPost, setEditingPost] = useState<Blog | null>(null);

//   // Forms
//   const [createForm, setCreateForm] = useState<BlogForm>(DEFAULT_FORM);
//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const [editForm, setEditForm] = useState<BlogForm>(DEFAULT_FORM);
//   const [bulkFile, setBulkFile] = useState<File | null>(null);
//   const [bulkResult, setBulkResult] = useState<any>(null);
//   const [isBulkUploading, setIsBulkUploading] = useState(false);

//   // Toast
//   const [toast, setToast] = useState({ show: false, message: "", type: "success" as "success" | "error" });

//   const showToast = (message: string, type: "success" | "error" = "success") => {
//     setToast({ show: true, message, type });
//   };

//   // Fetch
//   const fetchBlogs = useCallback(async (page = 1) => {
//     try {
//       setLoading(true);
//       const res = await BlogAPI.getAll({
//         status: filterStatus !== "All" ? filterStatus.toLowerCase() : undefined,
//         category: filterCategory !== "All" ? filterCategory : undefined,
//         page,
//         limit: LIMIT,
//       });
//       setBlogs(res.blogs);
//       setTotal(res.total);
//       setCurrentPage(res.page);
//       setTotalPages(res.totalPages);
//     } catch (err: any) {
//       showToast(err.message, "error");
//     } finally {
//       setLoading(false);
//     }
//   }, [filterStatus, filterCategory]);

//   useEffect(() => { fetchBlogs(1); }, [fetchBlogs]);

//   // Client-side search filter
//   const filtered = search
//     ? blogs.filter((b) => b.title.toLowerCase().includes(search.toLowerCase()))
//     : blogs;

//   // Create
//   const handleCreate = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!createForm.title.trim()) return showToast("Title is required", "error");
//     try {
//       setIsSubmitting(true);
//       await BlogAPI.create({ ...createForm, imageFile: imageFile ?? undefined });
//       showToast("Article published successfully!");
//       setIsCreateOpen(false);
//       setCreateForm(DEFAULT_FORM);
//       setImageFile(null);
//       fetchBlogs(1);
//     } catch (err: any) {
//       showToast(err.message, "error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Edit open
//   const openEdit = (post: Blog) => {
//     setEditingPost(post);
//     setEditForm({
//       title: post.title,
//       excerpt: post.excerpt || "",
//       content: post.content || "",
//       category: post.category || "Leadership",
//       author: post.author || "Mridu Bhandari",
//       readTime: post.readTime || "5 Min Read",
//       image: post.image || "",
//       status: (post.status as BlogStatus) || "published",
//     });
//     setIsEditOpen(true);
//   };

//   // Update
//   const handleUpdate = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!editingPost) return;
//     try {
//       setIsSubmitting(true);
//       await BlogAPI.update(editingPost.id, editForm);
//       showToast("Article updated successfully!");
//       setIsEditOpen(false);
//       setEditingPost(null);
//       fetchBlogs(currentPage);
//     } catch (err: any) {
//       showToast(err.message, "error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Delete
//   const handleDelete = async (id: string, title: string) => {
//     if (!confirm(`Permanently delete "${title}"?`)) return;
//     try {
//       await BlogAPI.delete(id);
//       setBlogs((prev) => prev.filter((b) => b.id !== id));
//       setTotal((t) => t - 1);
//       showToast("Article deleted");
//     } catch (err: any) {
//       showToast(err.message, "error");
//     }
//   };

//   // Toggle status quickly
//   const handleToggleStatus = async (post: Blog) => {
//     const newStatus: BlogStatus = post.status === "published" ? "draft" : "published";
//     try {
//       await BlogAPI.update(post.id, { status: newStatus });
//       setBlogs((prev) => prev.map((b) => (b.id === post.id ? { ...b, status: newStatus } : b)));
//       showToast(`Article ${newStatus === "published" ? "published" : "set to draft"}`);
//     } catch (err: any) {
//       showToast(err.message, "error");
//     }
//   };

//   // Bulk upload
//   const handleBulkUpload = async () => {
//     if (!bulkFile) return;
//     try {
//       setIsBulkUploading(true);
//       setBulkResult(null);
//       const result = await BlogAPI.bulkUpload(bulkFile);
//       setBulkResult(result);
//       showToast(`${result.created?.length || 0} articles imported!`);
//       fetchBlogs(1);
//     } catch (err: any) {
//       showToast(err.message, "error");
//     } finally {
//       setIsBulkUploading(false);
//     }
//   };

//   return (
//     <div className="w-full">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-10">
//         <div>
//           <div className="flex items-center gap-3 mb-2">
//             <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
//               <FileText size={18} />
//             </div>
//             <h1 className="text-2xl md:text-3xl font-black tracking-tight">Editorial Hub</h1>
//           </div>
//           <p className="text-[#475569] font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] ml-0 md:ml-11">
//             {total} Total · {blogs.filter((b) => b.status === "published").length} Published · Article & Newsletter Management
//           </p>
//         </div>
//         <div className="flex gap-3 w-full sm:w-auto">
//           <Button
//             onClick={() => { setBulkFile(null); setBulkResult(null); setIsBulkOpen(true); }}
//             className="w-full sm:w-auto !bg-white/5 !text-white hover:!bg-white/10 flex items-center gap-2"
//           >
//             <Upload size={16} /> Bulk Import
//           </Button>
//           <Button
//             onClick={() => { setCreateForm(DEFAULT_FORM); setImageFile(null); setIsCreateOpen(true); }}
//             className="w-full sm:w-auto"
//           >
//             + Draft New Post
//           </Button>
//         </div>
//       </div>

//       {/* Filters Bar */}
//       <div className="flex flex-wrap gap-3 mb-6">
//         <div className="relative flex-1 min-w-[200px]">
//           <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#475569]" />
//           <input
//             type="text"
//             placeholder="Search articles..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full h-10 pl-9 pr-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-[#475569] focus:outline-none focus:border-[#00e5ff]/30 transition-colors"
//           />
//         </div>

//         <select
//           value={filterStatus}
//           onChange={(e) => { setFilterStatus(e.target.value); }}
//           className="h-10 px-4 rounded-xl bg-white/5 border border-white/10 text-sm text-[#94a3b8] focus:outline-none focus:border-[#00e5ff]/30 transition-colors"
//         >
//           <option value="All" className="bg-[#0f172a]">All Status</option>
//           <option value="published" className="bg-[#0f172a]">Published</option>
//           <option value="draft" className="bg-[#0f172a]">Draft</option>
//         </select>

//         <select
//           value={filterCategory}
//           onChange={(e) => { setFilterCategory(e.target.value); }}
//           className="h-10 px-4 rounded-xl bg-white/5 border border-white/10 text-sm text-[#94a3b8] focus:outline-none focus:border-[#00e5ff]/30 transition-colors"
//         >
//           <option value="All" className="bg-[#0f172a]">All Categories</option>
//           {CATEGORIES.map((c) => (
//             <option key={c} value={c} className="bg-[#0f172a]">{c}</option>
//           ))}
//         </select>

//         <button
//           onClick={() => fetchBlogs(currentPage)}
//           className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#94a3b8] hover:text-white hover:bg-white/10 transition-colors"
//           title="Refresh"
//         >
//           <RefreshCw size={15} />
//         </button>
//       </div>

//       {/* Table */}
//       {loading ? (
//         <div className="flex justify-center p-20">
//           <Loader />
//         </div>
//       ) : (
//         <Card className="!p-0 bg-white/[0.02] border-white/5 shadow-2xl relative overflow-hidden" hoverable={false}>
//           <div className="overflow-x-auto custom-scrollbar">
//             <table className="w-full text-left min-w-[900px]">
//               <thead className="bg-[#0f172a] text-[#475569] text-[10px] uppercase font-black tracking-[0.2em] border-b border-white/5">
//                 <tr>
//                   <th className="px-6 py-5">Article</th>
//                   <th className="px-6 py-5">Category</th>
//                   <th className="px-6 py-5">Author</th>
//                   <th className="px-6 py-5">Date</th>
//                   <th className="px-6 py-5">Read Time</th>
//                   <th className="px-6 py-5 text-center">Status</th>
//                   <th className="px-6 py-5 text-right">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="text-sm">
//                 {filtered.length === 0 ? (
//                   <tr>
//                     <td colSpan={7} className="px-8 py-20 text-center text-[#475569] italic">
//                       No articles found. Start drafting!
//                     </td>
//                   </tr>
//                 ) : (
//                   filtered.map((post) => (
//                     <tr
//                       key={post.id}
//                       className="hover:bg-white/[0.03] transition-colors border-b border-white/5 last:border-0"
//                     >
//                       {/* Title + Thumbnail */}
//                       <td className="px-6 py-5 max-w-xs">
//                         <div className="flex items-center gap-3">
//                           {post.image ? (
//                             <img
//                               src={post.image}
//                               alt=""
//                               className="w-11 h-8 object-cover rounded-md border border-white/10 flex-shrink-0"
//                               onError={(e) => (e.currentTarget.style.display = "none")}
//                             />
//                           ) : (
//                             <div className="w-11 h-8 rounded-md bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center">
//                               <ImageIcon size={12} className="text-[#475569]" />
//                             </div>
//                           )}
//                           <div className="min-w-0">
//                             <p className="font-bold text-white truncate">{post.title}</p>
//                             {post.excerpt && (
//                               <p className="text-[10px] text-[#475569] truncate mt-0.5">{post.excerpt}</p>
//                             )}
//                           </div>
//                         </div>
//                       </td>

//                       <td className="px-6 py-5">
//                         <span className="px-2.5 py-1 rounded-lg bg-white/5 text-[#94a3b8] text-[10px] font-black uppercase tracking-widest border border-white/10">
//                           {post.category}
//                         </span>
//                       </td>

//                       <td className="px-6 py-5">
//                         <div className="flex items-center gap-2 text-xs text-[#cbd5f5]">
//                           <User size={12} className="text-[#475569]" />
//                           {post.author || "—"}
//                         </div>
//                       </td>

//                       <td className="px-6 py-5">
//                         <div className="flex items-center gap-2 text-[10px] text-[#475569] font-bold">
//                           <Calendar size={12} />
//                           {post.date ? new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "—"}
//                         </div>
//                       </td>

//                       <td className="px-6 py-5">
//                         <div className="flex items-center gap-2 text-[10px] text-[#475569] font-bold">
//                           <Clock size={12} />
//                           {post.readTime || "—"}
//                         </div>
//                       </td>

//                       <td className="px-6 py-5 text-center">
//                         <button
//                           onClick={() => handleToggleStatus(post)}
//                           title="Click to toggle status"
//                           className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border transition-all hover:scale-105 ${
//                             post.status === "published"
//                               ? "bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20"
//                               : "bg-amber-500/10 text-amber-400 border-amber-500/20 hover:bg-amber-500/20"
//                           }`}
//                         >
//                           {post.status === "published" ? "Published" : "Draft"}
//                         </button>
//                       </td>

//                       <td className="px-6 py-5 text-right">
//                         <div className="flex justify-end gap-2">
//                           <button
//                             onClick={() => openEdit(post)}
//                             className="p-2.5 rounded-xl bg-white/5 text-[#94a3b8] hover:text-[#00e5ff] hover:bg-[#00e5ff]/10 transition-all border border-transparent hover:border-[#00e5ff]/20"
//                             title="Edit"
//                           >
//                             <Edit2 size={15} />
//                           </button>
//                           <button
//                             onClick={() => handleDelete(post.id, post.title)}
//                             className="p-2.5 rounded-xl bg-white/5 text-[#94a3b8] hover:text-red-400 hover:bg-red-500/10 transition-all border border-transparent hover:border-red-500/20"
//                             title="Delete"
//                           >
//                             <Trash2 size={15} />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <div className="flex items-center justify-between px-6 py-4 border-t border-white/5">
//               <p className="text-[10px] text-[#475569] font-bold uppercase tracking-widest">
//                 Page {currentPage} of {totalPages} · {total} total articles
//               </p>
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => fetchBlogs(currentPage - 1)}
//                   disabled={currentPage <= 1}
//                   className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-[#94a3b8] hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
//                 >
//                   ← Prev
//                 </button>
//                 <button
//                   onClick={() => fetchBlogs(currentPage + 1)}
//                   disabled={currentPage >= totalPages}
//                   className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-[#94a3b8] hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
//                 >
//                   Next →
//                 </button>
//               </div>
//             </div>
//           )}
//         </Card>
//       )}

//       {/* ── CREATE MODAL ─────────────────────────────────────────────────────── */}
//       <Modal isOpen={isCreateOpen} onClose={() => !isSubmitting && setIsCreateOpen(false)} title="Draft New Article">
//         <form onSubmit={handleCreate} className="space-y-5 pt-4 max-h-[72vh] overflow-y-auto px-1 custom-scrollbar">
//           <BlogFormFields
//             form={createForm}
//             setForm={setCreateForm}
//             imageFile={imageFile}
//             setImageFile={setImageFile}
//           />
//           <Button fullWidth className="h-14 !mt-8 font-black uppercase tracking-[0.2em]" disabled={isSubmitting}>
//             {isSubmitting ? "Publishing..." : "Deploy to Feed"}
//           </Button>
//         </form>
//       </Modal>

//       {/* ── EDIT MODAL ───────────────────────────────────────────────────────── */}
//       <Modal isOpen={isEditOpen} onClose={() => !isSubmitting && setIsEditOpen(false)} title="Update Article">
//         <form onSubmit={handleUpdate} className="space-y-5 pt-4 max-h-[72vh] overflow-y-auto px-1 custom-scrollbar">
//           <BlogFormFields form={editForm} setForm={setEditForm} />
//           <Button fullWidth className="h-14 !mt-8 font-black uppercase tracking-[0.2em]" disabled={isSubmitting}>
//             {isSubmitting ? "Saving Changes..." : "Commit Updates"}
//           </Button>
//         </form>
//       </Modal>

//       {/* ── BULK IMPORT MODAL ────────────────────────────────────────────────── */}
//       <Modal isOpen={isBulkOpen} onClose={() => !isBulkUploading && setIsBulkOpen(false)} title="Bulk Import Articles">
//         <div className="space-y-6 pt-4 max-h-[70vh] overflow-y-auto px-1 custom-scrollbar">
//           <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
//             <h4 className="text-sm font-bold text-white mb-3">How to prepare your .docx</h4>
//             <ol className="text-xs text-[#94a3b8] space-y-2 list-decimal list-inside leading-relaxed">
//               <li>Open your Google Doc containing all blog articles</li>
//               <li>Each blog must start with a marker: <strong className="text-white">BLOG 1</strong>, <strong className="text-white">BLOG 2</strong>, etc.</li>
//               <li>The line directly after the marker becomes the blog title</li>
//               <li>The first paragraph after the title becomes the excerpt</li>
//               <li>The rest is saved as the full content</li>
//               <li>Download as <strong className="text-white">.docx</strong> format</li>
//             </ol>
//           </div>

//           <div className="space-y-2">
//             <label className="text-[10px] text-[#475569] font-black uppercase tracking-widest pl-1">
//               Upload .docx File
//             </label>
//             <input
//               type="file"
//               accept=".docx"
//               onChange={(e) => { setBulkFile(e.target.files?.[0] ?? null); setBulkResult(null); }}
//               className="w-full text-xs text-[#cbd5f5] file:mr-4 file:py-2.5 file:px-5 file:rounded-xl file:border-0 file:text-[10px] file:font-black file:uppercase file:bg-white/10 file:text-white hover:file:bg-white/20 cursor-pointer"
//             />
//             {bulkFile && (
//               <p className="text-xs text-[#94a3b8] pl-1">
//                 Selected: <span className="text-white font-bold">{bulkFile.name}</span>
//               </p>
//             )}
//           </div>

//           {bulkResult && (
//             <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
//               <p className="text-sm font-bold text-green-400 mb-2">{bulkResult.message}</p>
//               {bulkResult.created?.length > 0 && (
//                 <ul className="text-xs text-[#94a3b8] space-y-1 mt-2">
//                   {bulkResult.created.map((b: any, i: number) => (
//                     <li key={i} className="truncate">✓ {b.title}</li>
//                   ))}
//                 </ul>
//               )}
//               {bulkResult.errors?.length > 0 && (
//                 <div className="mt-3 pt-3 border-t border-white/10">
//                   <p className="text-xs font-bold text-red-400 mb-1">Errors ({bulkResult.errors.length})</p>
//                   {bulkResult.errors.map((e: any, i: number) => (
//                     <p key={i} className="text-xs text-red-300">{e.chunk || e.title}: {e.error}</p>
//                   ))}
//                 </div>
//               )}
//             </div>
//           )}

//           <Button
//             fullWidth
//             className="h-14 !mt-8 font-black uppercase tracking-[0.2em]"
//             disabled={!bulkFile || isBulkUploading}
//             onClick={handleBulkUpload}
//           >
//             {isBulkUploading ? "Importing Articles..." : "Import from Document"}
//           </Button>
//         </div>
//       </Modal>

//       <Toast
//         isVisible={toast.show}
//         message={toast.message}
//         type={toast.type}
//         onClose={() => setToast({ ...toast, show: false })}
//       />
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { S, Icons, ConfirmDialog, catColor } from "./Common";
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

// ─── Inline Styles (matching S system) ───────────────────────────────────────
const ls = {
  overlay: {
    position: "fixed" as const,
    inset: 0,
    background: "rgba(0,0,0,0.7)",
    backdropFilter: "blur(4px)",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  modalBox: {
    background: "#0F172A",
    border: "1px solid #1E293B",
    borderRadius: 16,
    padding: 28,
    width: "100%",
    maxWidth: 680,
    maxHeight: "88vh",
    overflowY: "auto" as const,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "#F1F5F9",
    marginBottom: 24,
    paddingBottom: 16,
    borderBottom: "1px solid #1E293B",
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    display: "block" as const,
    fontSize: 10,
    fontWeight: 700,
    color: "#475569",
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    marginBottom: 7,
  },
  input: {
    width: "100%",
    background: "#0A1628",
    border: "1px solid #1E293B",
    borderRadius: 10,
    padding: "10px 14px",
    color: "#F1F5F9",
    fontSize: 13,
    outline: "none",
    boxSizing: "border-box" as const,
    fontFamily: "inherit",
    transition: "border-color 0.15s",
  },
  select: {
    background: "#0A1628",
    border: "1px solid #1E293B",
    borderRadius: 10,
    padding: "10px 14px",
    color: "#F1F5F9",
    fontSize: 13,
    outline: "none",
    cursor: "pointer",
    width: "100%",
    boxSizing: "border-box" as const,
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 14,
  },
  imgPreview: {
    width: "100%",
    maxHeight: 160,
    objectFit: "cover" as const,
    borderRadius: 8,
    border: "1px solid #1E293B",
    marginTop: 8,
    display: "block",
  },
  imgError: {
    marginTop: 8,
    padding: "8px 12px",
    background: "#1E293B",
    border: "1px solid #ef444460",
    borderRadius: 8,
    color: "#ef4444",
    fontSize: 12,
  },
  actions: {
    display: "flex",
    gap: 10,
    justifyContent: "flex-end",
    marginTop: 24,
    paddingTop: 16,
    borderTop: "1px solid #1E293B",
  },
  // Table
  tableWrap: {
    background: "#0A1628",
    border: "1px solid #1E293B",
    borderRadius: 12,
    overflow: "hidden",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    fontSize: 13,
  },
  thead: {
    background: "#0F172A",
  },
  th: {
    padding: "12px 16px",
    textAlign: "left" as const,
    fontSize: 10,
    fontWeight: 700,
    color: "#475569",
    textTransform: "uppercase" as const,
    letterSpacing: "0.12em",
    borderBottom: "1px solid #1E293B",
    whiteSpace: "nowrap" as const,
  },
  td: {
    padding: "12px 16px",
    color: "#CBD5E1",
    borderBottom: "1px solid #0F172A",
    verticalAlign: "middle" as const,
  },
  // Filters
  filtersRow: {
    display: "flex",
    gap: 10,
    marginBottom: 20,
    flexWrap: "wrap" as const,
    alignItems: "center",
  },
  searchWrap: {
    position: "relative" as const,
    flex: 1,
    minWidth: 200,
  },
  searchIcon: {
    position: "absolute" as const,
    left: 12,
    top: "50%",
    transform: "translateY(-50%)",
    color: "#475569",
    pointerEvents: "none" as const,
  },
  searchInput: {
    width: "100%",
    background: "#0A1628",
    border: "1px solid #1E293B",
    borderRadius: 10,
    padding: "9px 14px 9px 36px",
    color: "#F1F5F9",
    fontSize: 13,
    outline: "none",
    boxSizing: "border-box" as const,
  },
  filterSelect: {
    background: "#0A1628",
    border: "1px solid #1E293B",
    borderRadius: 10,
    padding: "9px 14px",
    color: "#94A3B8",
    fontSize: 12,
    outline: "none",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  // Status badge
  statusBadge: (status: BlogStatus) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    padding: "3px 10px",
    borderRadius: 20,
    fontSize: 11,
    fontWeight: 600,
    cursor: "pointer",
    border: "1px solid",
    transition: "opacity 0.15s",
    ...(status === "Published"
      ? { background: "#10B98115", color: "#10B981", borderColor: "#10B98130" }
      : {
          background: "#F59E0B15",
          color: "#F59E0B",
          borderColor: "#F59E0B30",
        }),
  }),
  // Thumb
  thumb: {
    width: 44,
    height: 30,
    objectFit: "cover" as const,
    borderRadius: 4,
    border: "1px solid #1E293B",
    flexShrink: 0,
  },
  thumbPlaceholder: {
    width: 44,
    height: 30,
    borderRadius: 4,
    background: "#1E293B",
    border: "1px solid #334155",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 9,
    color: "#475569",
  },
  // Bulk modal instructions
  instructionsBox: {
    background: "#0A1628",
    border: "1px solid #1E293B",
    borderRadius: 10,
    padding: "14px 16px",
    marginBottom: 20,
  },
  instrTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: "#F1F5F9",
    marginBottom: 10,
  },
  instrList: {
    margin: 0,
    paddingLeft: 18,
    color: "#94A3B8",
    fontSize: 12,
    lineHeight: 1.9,
  },
  resultBox: {
    background: "#10B98110",
    border: "1px solid #10B98130",
    borderRadius: 10,
    padding: "14px 16px",
    marginTop: 16,
  },
  resultTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: "#10B981",
    marginBottom: 8,
  },
  resultItem: {
    fontSize: 12,
    color: "#94A3B8",
    paddingTop: 3,
  },
  errorBox: {
    background: "#ef444410",
    border: "1px solid #ef444430",
    borderRadius: 10,
    padding: "12px 16px",
    marginTop: 12,
  },
  // Tag
  catTag: (cat: string) => ({
    display: "inline-block",
    padding: "2px 8px",
    borderRadius: 4,
    fontSize: 11,
    fontWeight: 600,
    background: `${catColor(cat)}15`,
    color: catColor(cat),
    border: `1px solid ${catColor(cat)}30`,
  }),
  // Syncing toast
  syncToast: {
    position: "fixed" as const,
    top: 20,
    right: 20,
    background: "#3B82F6",
    color: "white",
    padding: "8px 16px",
    borderRadius: 8,
    fontSize: 12,
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  // Empty state
  emptyCell: {
    textAlign: "center" as const,
    color: "#475569",
    padding: "40px 0",
    fontStyle: "italic" as const,
    fontSize: 13,
  },
  // File input
  fileInput: {
    width: "100%",
    fontSize: 12,
    color: "#CBD5E1",
    background: "#0A1628",
    border: "1px solid #1E293B",
    borderRadius: 10,
    padding: "8px 12px",
    cursor: "pointer",
    boxSizing: "border-box" as const,
  },
  fileHint: {
    fontSize: 11,
    color: "#475569",
    marginTop: 6,
  },
  // Header row
  headerRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 24,
    gap: 16,
    flexWrap: "wrap" as const,
  },
  headerLeft: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 4,
  },
  headerBtns: {
    display: "flex",
    gap: 10,
    alignItems: "center",
  },
  divider: {
    height: 1,
    background: "#1E293B",
    margin: "16px 0",
  },
  paginationRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 16px",
    borderTop: "1px solid #1E293B",
  },
  pageInfo: {
    fontSize: 11,
    color: "#475569",
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
  },
  pageBtn: (disabled: boolean) => ({
    padding: "6px 14px",
    background: disabled ? "transparent" : "#1E293B",
    border: "1px solid #1E293B",
    borderRadius: 8,
    color: disabled ? "#334155" : "#94A3B8",
    fontSize: 12,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    fontFamily: "inherit",
  }),
};

// ─── Blog Modal ───────────────────────────────────────────────────────────────
function BlogModal({
  blog,
  onSave,
  onClose,
  isSaving,
}: {
  blog: Blog | null;
  onSave: (form: BlogForm) => void;
  onClose: () => void;
  isSaving: boolean;
}) {
  const [form, setForm] = useState<BlogForm>(
    blog ?? {
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
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imgErr, setImgErr] = useState(false);

  return (
    <div
      style={ls.overlay}
      onClick={(e) => e.target === e.currentTarget && !isSaving && onClose()}
    >
      <div style={ls.modalBox}>
        <div style={ls.modalTitle}>
          {blog ? "Edit Article" : "Draft New Article"}
        </div>

        {/* Title */}
        <div style={ls.formGroup}>
          <label style={ls.label}>Article Title *</label>
          <input
            style={ls.input}
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Enter a compelling headline..."
          />
        </div>

        {/* Excerpt */}
        <div style={ls.formGroup}>
          <label style={ls.label}>Excerpt / Brief</label>
          <textarea
            style={{ ...ls.input, minHeight: 70, resize: "vertical" }}
            value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            placeholder="Short summary shown on listing pages..."
          />
        </div>

        {/* Content */}
        <div style={ls.formGroup}>
          <label style={ls.label}>Full Content (HTML or Markdown)</label>
          <textarea
            style={{
              ...ls.input,
              minHeight: 160,
              resize: "vertical",
              fontFamily: "monospace",
              fontSize: 12,
            }}
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            placeholder="<p>Write your full article here...</p>"
          />
        </div>

        {/* Category + Status */}
        <div style={ls.grid2}>
          <div style={ls.formGroup}>
            <label style={ls.label}>Category</label>
            <select
              style={ls.select}
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              {CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div style={ls.formGroup}>
            <label style={ls.label}>Status</label>
            <select
              style={ls.select}
              value={form.status}
              onChange={(e) =>
                setForm({ ...form, status: e.target.value as BlogStatus })
              }
            >
              <option>Draft</option>
              <option>Published</option>
            </select>
          </div>
        </div>

        {/* Author + Read Time */}
        <div style={ls.grid2}>
          <div style={ls.formGroup}>
            <label style={ls.label}>Author</label>
            <input
              style={ls.input}
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              placeholder="Author name..."
            />
          </div>
          <div style={ls.formGroup}>
            <label style={ls.label}>Read Time</label>
            <input
              style={ls.input}
              value={form.readTime}
              onChange={(e) => setForm({ ...form, readTime: e.target.value })}
              placeholder="e.g. 5 Min Read"
            />
          </div>
        </div>

        {/* Image URL */}
        <div style={ls.formGroup}>
          <label style={ls.label}>Image URL (optional)</label>
          <input
            style={ls.input}
            value={form.image}
            onChange={(e) => {
              setImgErr(false);
              setForm({ ...form, image: e.target.value });
            }}
            placeholder="https://example.com/image.jpg"
          />
          {form.image && !imgErr && (
            <img
              src={form.image}
              alt="preview"
              style={ls.imgPreview}
              onError={() => setImgErr(true)}
            />
          )}
          {imgErr && (
            <div style={ls.imgError}>
              ⚠ Could not load image. Check the URL.
            </div>
          )}
        </div>

        {/* File upload */}
        <div style={ls.formGroup}>
          <label style={ls.label}>Or Upload Featured Image</label>
          <input
            type="file"
            accept="image/*"
            style={ls.fileInput}
            onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
          />
          {imageFile && (
            <div style={ls.fileHint}>Selected: {imageFile.name}</div>
          )}
        </div>

        {/* Actions */}
        <div style={ls.actions}>
          <button style={S.btn("ghost")} onClick={onClose} disabled={isSaving}>
            Cancel
          </button>
          <button
            style={S.btn("primary")}
            disabled={isSaving || !form.title.trim()}
            onClick={() =>
              form.title.trim() &&
              onSave({ ...form, _imageFile: imageFile } as any)
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
  onUpload: (file: File) => void;
  isUploading: boolean;
  result: any;
}) {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div
      style={ls.overlay}
      onClick={(e) => e.target === e.currentTarget && !isUploading && onClose()}
    >
      <div style={{ ...ls.modalBox, maxWidth: 520 }}>
        <div style={ls.modalTitle}>Bulk Import Articles</div>

        <div style={ls.instructionsBox}>
          <div style={ls.instrTitle}>How to prepare your document</div>
          <ol style={ls.instrList}>
            <li>Open your Google Doc with all blog content</li>
            <li>
              Each blog must start with a marker:{" "}
              <strong style={{ color: "#F1F5F9" }}>BLOG 1</strong>,{" "}
              <strong style={{ color: "#F1F5F9" }}>BLOG 2</strong>, etc.
            </li>
            <li>The line after the marker becomes the title</li>
            <li>First paragraph after title = excerpt; rest = content</li>
            <li>
              Download as <strong style={{ color: "#F1F5F9" }}>.docx</strong>{" "}
              format
            </li>
          </ol>
        </div>

        <div style={ls.formGroup}>
          <label style={ls.label}>Upload .docx File</label>
          <input
            type="file"
            accept=".docx"
            style={ls.fileInput}
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
          {file && (
            <div style={ls.fileHint}>
              Selected:{" "}
              <strong style={{ color: "#94A3B8" }}>{file.name}</strong>
            </div>
          )}
        </div>

        {result && (
          <div style={ls.resultBox}>
            <div style={ls.resultTitle}>{result.message}</div>
            {result.created?.map((b: any, i: number) => (
              <div key={i} style={ls.resultItem}>
                ✓ {b.title}
              </div>
            ))}
            {result.errors?.length > 0 && (
              <div style={ls.errorBox}>
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

        <div style={ls.actions}>
          <button
            style={S.btn("ghost")}
            onClick={onClose}
            disabled={isUploading}
          >
            Cancel
          </button>
          <button
            style={S.btn("primary")}
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

// ─── Main Blogs Component ─────────────────────────────────────────────────────
export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);

  // Modals
  const [modal, setModal] = useState<Blog | "add" | null>(null);
  const [bulkOpen, setBulkOpen] = useState(false);
  const [confirm, setConfirm] = useState<{
    id: string;
    message: string;
  } | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isBulkUploading, setIsBulkUploading] = useState(false);
  const [bulkResult, setBulkResult] = useState<any>(null);

  // Filters
  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  // Pagination
  const PAGE_SIZE = 15;
  const [page, setPage] = useState(1);

  // ── Fetch ──────────────────────────────────────────────────────────────────
  const fetchBlogs = async () => {
    try {
      setIsSyncing(true);
      const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      setBlogs(
        snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Blog, "id">) })),
      );
    } catch (err) {
      console.error("fetchBlogs:", err);
    } finally {
      setIsSyncing(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // ── Save (add / update) ────────────────────────────────────────────────────
  const handleSave = async (form: BlogForm & { _imageFile?: File }) => {
    try {
      setIsSaving(true);
      const { _imageFile, ...rest } = form;

      let image = rest.image || "";

      // Upload image if a file was chosen
      if (_imageFile) {
        const fd = new FormData();
        fd.append("file", _imageFile);
        fd.append("folder", "blogs");
        const res = await fetch("/api/upload", { method: "POST", body: fd });
        if (res.ok) image = (await res.json()).url;
      }

      if (modal && modal !== "add") {
        // Update existing
        const { id, slug: _slug, ...fields } = rest as Blog;
        await updateDoc(doc(db, "blogs", (modal as Blog).id), {
          ...fields,
          image,
          updatedAt: Timestamp.now(),
        });
      } else {
        // Create new
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

  // ── Delete ─────────────────────────────────────────────────────────────────
  const handleDelete = async (id: string) => {
    try {
      setIsSyncing(true);
      await deleteDoc(doc(db, "blogs", id));
      await fetchBlogs();
      setConfirm(null);
    } catch (err) {
      console.error("handleDelete:", err);
    } finally {
      setIsSyncing(false);
    }
  };

  // ── Toggle status ──────────────────────────────────────────────────────────
  const handleToggleStatus = async (blog: Blog) => {
    const next: BlogStatus =
      blog.status === "Published" ? "Draft" : "Published";
    try {
      await updateDoc(doc(db, "blogs", blog.id), {
        status: next,
        updatedAt: Timestamp.now(),
      });
      setBlogs((prev) =>
        prev.map((b) => (b.id === blog.id ? { ...b, status: next } : b)),
      );
    } catch (err) {
      console.error("toggleStatus:", err);
    }
  };

  // ── Bulk upload ────────────────────────────────────────────────────────────
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
      console.error("bulkUpload:", err);
      setBulkResult({ message: err.message, created: [], errors: [] });
    } finally {
      setIsBulkUploading(false);
    }
  };

  // ── Filter + paginate ──────────────────────────────────────────────────────
  const filtered = blogs.filter((b) => {
    const matchCat = filterCat === "All" || b.category === filterCat;
    const matchStatus = filterStatus === "All" || b.status === filterStatus;
    const matchSearch =
      !search || b.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchStatus && matchSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const published = blogs.filter((b) => b.status === "Published").length;

  return (
    <div>
      {/* Syncing indicator */}
      {isSyncing && (
        <div style={ls.syncToast}>
          <Icons.Refresh /> Syncing...
        </div>
      )}

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div style={ls.headerRow}>
        <div style={ls.headerLeft}>
          <div style={S.sectionTitle}>Blog Manager</div>
          <div style={S.sectionSub}>
            {blogs.length} total · {published} published
          </div>
        </div>
        <div style={ls.headerBtns}>
          <button
            style={{ ...S.btn("ghost"), fontSize: 12 }}
            onClick={() => {
              setBulkResult(null);
              setBulkOpen(true);
            }}
          >
            {/* <Icons.Upload /> Bulk Import */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>{" "}
            Bulk Import
          </button>
          <button style={S.btn("primary")} onClick={() => setModal("add")}>
            <Icons.Add /> New Article
          </button>
        </div>
      </div>

      {/* ── Filters ────────────────────────────────────────────────────────── */}
      <div style={ls.filtersRow}>
        <div style={ls.searchWrap}>
          <span style={ls.searchIcon}>
            <Icons.Search />
          </span>
          <input
            style={ls.searchInput}
            placeholder="Search articles..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>

        <select
          style={ls.filterSelect}
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
          style={ls.filterSelect}
          value={filterCat}
          onChange={(e) => {
            setFilterCat(e.target.value);
            setPage(1);
          }}
        >
          <option value="All">All Categories</option>
          {CATEGORIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <button
          style={{ ...S.btn("ghost"), padding: "8px 12px" }}
          onClick={fetchBlogs}
          title="Refresh"
        >
          <Icons.Refresh />
        </button>
      </div>

      {/* ── Table ──────────────────────────────────────────────────────────── */}
      <div style={ls.tableWrap}>
        <div style={{ overflowX: "auto" }}>
          <table style={ls.table}>
            <thead style={ls.thead}>
              <tr>
                <th style={ls.th}>Article</th>
                <th style={ls.th}>Category</th>
                <th style={ls.th}>Author</th>
                <th style={ls.th}>Date</th>
                <th style={ls.th}>Read Time</th>
                <th style={{ ...ls.th, textAlign: "center" }}>Status</th>
                <th style={{ ...ls.th, textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={7} style={ls.emptyCell}>
                    {search || filterCat !== "All" || filterStatus !== "All"
                      ? "No articles match your filters."
                      : "No articles yet. Start drafting!"}
                  </td>
                </tr>
              ) : (
                paginated.map((b) => (
                  <tr key={b.id} style={{ borderBottom: "1px solid #0F172A" }}>
                    {/* Title + Thumb */}
                    <td style={{ ...ls.td, maxWidth: 280 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        {b.image ? (
                          <img
                            src={b.image}
                            alt=""
                            style={ls.thumb}
                            onError={(e) =>
                              (e.currentTarget.style.display = "none")
                            }
                          />
                        ) : (
                          <div style={ls.thumbPlaceholder}>IMG</div>
                        )}
                        <div style={{ minWidth: 0 }}>
                          <div
                            style={{
                              fontWeight: 600,
                              color: "#F1F5F9",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              fontSize: 13,
                            }}
                          >
                            {b.title}
                          </div>
                          {b.excerpt && (
                            <div
                              style={{
                                fontSize: 11,
                                color: "#475569",
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
                    <td style={ls.td}>
                      <span style={ls.catTag(b.category)}>{b.category}</span>
                    </td>

                    {/* Author */}
                    <td style={{ ...ls.td, color: "#94A3B8", fontSize: 12 }}>
                      {b.author || "—"}
                    </td>

                    {/* Date */}
                    <td
                      style={{
                        ...ls.td,
                        color: "#475569",
                        fontSize: 12,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {b.date || "—"}
                    </td>

                    {/* Read Time */}
                    <td
                      style={{
                        ...ls.td,
                        color: "#475569",
                        fontSize: 12,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {b.readTime || "—"}
                    </td>

                    {/* Status — clickable toggle */}
                    <td style={{ ...ls.td, textAlign: "center" }}>
                      <span
                        style={ls.statusBadge(b.status)}
                        onClick={() => handleToggleStatus(b)}
                        title="Click to toggle status"
                      >
                        <Icons.Dot /> {b.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td style={{ ...ls.td, textAlign: "right" }}>
                      <div
                        style={{
                          display: "flex",
                          gap: 6,
                          justifyContent: "flex-end",
                        }}
                      >
                        <button
                          style={S.btn("ghost")}
                          onClick={() => setModal(b)}
                          title="Edit"
                        >
                          <Icons.Edit />
                        </button>
                        <button
                          style={S.btn("danger")}
                          onClick={() =>
                            setConfirm({
                              id: b.id,
                              message: `Permanently delete "${b.title}"?`,
                            })
                          }
                          title="Delete"
                        >
                          <Icons.Delete />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={ls.paginationRow}>
            <span style={ls.pageInfo}>
              Page {page} of {totalPages} · {filtered.length} articles
            </span>
            <div style={{ display: "flex", gap: 8 }}>
              <button
                style={ls.pageBtn(page <= 1)}
                disabled={page <= 1}
                onClick={() => setPage((p) => p - 1)}
              >
                ← Prev
              </button>
              <button
                style={ls.pageBtn(page >= totalPages)}
                disabled={page >= totalPages}
                onClick={() => setPage((p) => p + 1)}
              >
                Next →
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ── Modals ─────────────────────────────────────────────────────────── */}
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
