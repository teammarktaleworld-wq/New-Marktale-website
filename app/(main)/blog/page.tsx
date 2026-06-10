// "use client";
// export const dynamic = "force-dynamic";

// import React, { useState, useEffect, useCallback } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { Search, Clock, User, ChevronRight, BookOpen, X } from "lucide-react";

// const ACCENT = { from: "#2563eb", mid: "#3b82f6", to: "#06b6d4" };

// const CATEGORIES = [
//   "All", "Leadership", "Career Growth", "Productivity",
//   "Mindset", "Technology", "Business", "Wellness", "Finance",
// ];

// const CAT_COLORS: Record<string, { bg: string; text: string; border: string }> = {
//   Leadership:      { bg: "#6366F110", text: "#6366F1", border: "#6366F130" },
//   "Career Growth": { bg: "#10B98110", text: "#10B981", border: "#10B98130" },
//   Productivity:    { bg: "#F59E0B10", text: "#F59E0B", border: "#F59E0B30" },
//   Mindset:         { bg: "#EC489910", text: "#EC4899", border: "#EC489930" },
//   Technology:      { bg: "#3B82F610", text: "#3B82F6", border: "#3B82F630" },
//   Business:        { bg: "#8B5CF610", text: "#8B5CF6", border: "#8B5CF630" },
//   Wellness:        { bg: "#14B8A610", text: "#14B8A6", border: "#14B8A630" },
//   Finance:         { bg: "#F9731610", text: "#F97316", border: "#F9731630" },
// };

// type Blog = {
//   id: string;
//   slug: string;
//   title: string;
//   excerpt: string;
//   category: string;
//   author: string;
//   readTime: string;
//   image: string;
//   date: string;
//   status: string;
// };

// function SkeletonCard({ delay = 0 }: { delay?: number }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay, duration: 0.4 }}
//       className="rounded-2xl overflow-hidden border border-gray-100 bg-white"
//     >
//       <div className="h-52 bg-gray-100 animate-pulse" />
//       <div className="p-6 space-y-3">
//         <div className="h-3 w-20 bg-gray-100 rounded animate-pulse" />
//         <div className="h-5 bg-gray-100 rounded animate-pulse" />
//         <div className="h-5 w-3/4 bg-gray-100 rounded animate-pulse" />
//         <div className="h-3 bg-gray-100 rounded animate-pulse" />
//         <div className="h-3 w-4/5 bg-gray-100 rounded animate-pulse" />
//         <div className="flex gap-4 pt-2">
//           <div className="h-3 w-20 bg-gray-100 rounded animate-pulse" />
//           <div className="h-3 w-16 bg-gray-100 rounded animate-pulse" />
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// function CategoryBadge({ category }: { category: string }) {
//   const col = CAT_COLORS[category] ?? { bg: "#64748B10", text: "#64748B", border: "#64748B30" };
//   return (
//     <span
//       className="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border"
//       style={{ background: col.bg, color: col.text, borderColor: col.border }}
//     >
//       {category}
//     </span>
//   );
// }

// function BlogCard({ blog, index }: { blog: Blog; index: number }) {
//   const [imgErr, setImgErr] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.4, delay: index * 0.07 }}
//       whileHover={{ y: -6 }}
//     >
//       <Link
//         href={`/blog/${blog.slug}`}
//         className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300"
//       >
//         <div className="relative h-52 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex-shrink-0">
//           {blog.image && !imgErr ? (
//             <img
//               src={blog.image}
//               alt={blog.title}
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//               onError={() => setImgErr(true)}
//             />
//           ) : (
//             <div className="w-full h-full flex items-center justify-center">
//               <BookOpen size={36} className="text-gray-200" />
//             </div>
//           )}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           <div className="absolute top-3 left-3">
//             <CategoryBadge category={blog.category} />
//           </div>
//         </div>
//         <div className="flex flex-col flex-1 p-6">
//           <h2 className="font-black text-gray-900 text-base leading-snug mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
//             {blog.title}
//           </h2>
//           {blog.excerpt && (
//             <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 flex-1 mb-4">
//               {blog.excerpt}
//             </p>
//           )}
//           <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
//             <div className="flex items-center gap-3 flex-wrap">
//               {blog.author && (
//                 <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
//                   <User size={10} /> {blog.author}
//                 </span>
//               )}
//               {blog.readTime && (
//                 <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
//                   <Clock size={10} /> {blog.readTime}
//                 </span>
//               )}
//             </div>
//             <span className="flex items-center gap-1 text-[10px] font-black text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
//               Read <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
//             </span>
//           </div>
//         </div>
//       </Link>
//     </motion.div>
//   );
// }

// function FeaturedCard({ blog }: { blog: Blog }) {
//   const [imgErr, setImgErr] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.55 }}
//       whileHover={{ y: -4 }}
//     >
//       <Link
//         href={`/blog/${blog.slug}`}
//         className="group relative flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-blue-200 shadow-md hover:shadow-2xl transition-all duration-400"
//       >
//         <div className="relative md:w-[55%] h-72 md:h-auto overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 flex-shrink-0">
//           {blog.image && !imgErr ? (
//             <img
//               src={blog.image}
//               alt={blog.title}
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
//               onError={() => setImgErr(true)}
//             />
//           ) : (
//             <div className="w-full h-full flex items-center justify-center">
//               <BookOpen size={56} className="text-blue-100" />
//             </div>
//           )}
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/80 hidden md:block" />
//         </div>
//         <div className="flex flex-col justify-center flex-1 p-8 md:p-12">
//           <div className="flex items-center gap-3 mb-5">
//             <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-[10px] font-black uppercase tracking-widest shadow-sm">
//               ✦ Featured
//             </span>
//             <CategoryBadge category={blog.category} />
//           </div>
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors duration-300">
//             {blog.title}
//           </h2>
//           {blog.excerpt && (
//             <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 max-w-lg">
//               {blog.excerpt}
//             </p>
//           )}
//           <div className="flex items-center gap-5 flex-wrap">
//             {blog.author && (
//               <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
//                 <User size={12} /> {blog.author}
//               </span>
//             )}
//             {blog.readTime && (
//               <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
//                 <Clock size={12} /> {blog.readTime}
//               </span>
//             )}
//             <span
//               className="ml-auto flex items-center gap-2 text-sm font-black text-white px-5 py-2.5 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
//               style={{ background: "linear-gradient(135deg, #2563eb, #06b6d4)" }}
//             >
//               Read Article <ChevronRight size={14} />
//             </span>
//           </div>
//         </div>
//       </Link>
//     </motion.div>
//   );
// }

// function Particles() {
//   return (
//     <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
//       {Array.from({ length: 8 }).map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1 h-1 rounded-full"
//           style={{ background: i % 2 === 0 ? ACCENT.from : ACCENT.to, opacity: 0.35 }}
//           initial={{ x: `${10 + i * 12}%`, y: "110%" }}
//           animate={{ y: "-10%" }}
//           transition={{ duration: 8 + i * 1.5, repeat: Infinity, delay: i * 1.2, ease: "linear" }}
//         />
//       ))}
//     </div>
//   );
// }

// export default function BlogsPage() {
//   const [blogs, setBlogs]               = useState<Blog[]>([]);
//   const [loading, setLoading]           = useState(true);
//   const [search, setSearch]             = useState("");
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [page, setPage]                 = useState(1);
//   const [totalPages, setTotalPages]     = useState(1);
//   const [total, setTotal]               = useState(0);
//   const LIMIT = 9;

//   const fetchBlogs = useCallback(async (p = 1, cat = activeCategory) => {
//     try {
//       setLoading(true);
//       const qs = new URLSearchParams({
//         // ✅ FIX: Send "Published" (capital P) to match Firestore documents
//         status: "Published",
//         limit:  String(LIMIT),
//         page:   String(p),
//       });
//       if (cat !== "All") qs.set("category", cat);

//       const res  = await fetch(`/api/blogs?${qs.toString()}`);
//       const data = await res.json();
//       setBlogs(data.blogs || []);
//       setTotal(data.total || 0);
//       setTotalPages(data.totalPages || 1);
//       setPage(p);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   }, [activeCategory]);

//   useEffect(() => { fetchBlogs(1); }, [fetchBlogs]);

//   const handleCategory = (cat: string) => {
//     setActiveCategory(cat);
//     fetchBlogs(1, cat);
//   };

//   const filtered = search
//     ? blogs.filter(
//         (b) =>
//           b.title.toLowerCase().includes(search.toLowerCase()) ||
//           (b.excerpt ?? "").toLowerCase().includes(search.toLowerCase())
//       )
//     : blogs;

//   const featured = !search ? filtered[0]      : undefined;
//   const rest     = !search ? filtered.slice(1) : filtered;

//   return (
//     <div className="relative min-h-screen bg-white overflow-hidden">
//       <Particles />

//       <div
//         className="fixed top-0 -left-32 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
//         style={{ background: `radial-gradient(circle, ${ACCENT.from}0a, transparent)`, zIndex: 0 }}
//       />
//       <div
//         className="fixed -bottom-32 -right-32 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
//         style={{ background: `radial-gradient(circle, ${ACCENT.to}08, transparent)`, zIndex: 0 }}
//       />

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-28">

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -24 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-14"
//         >
//           <motion.span
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.1 }}
//             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-extrabold tracking-widest border mb-5"
//             style={{
//               background:  `linear-gradient(135deg, ${ACCENT.from}12, ${ACCENT.to}12)`,
//               borderColor: `${ACCENT.from}2e`,
//               color:        ACCENT.from,
//             }}
//           >
//             <BookOpen size={13} /> INSIGHTS & ARTICLES
//           </motion.span>

//           <motion.h1
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.15 }}
//             className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-gray-900 mb-4"
//           >
//             Ideas That{" "}
//             <span
//               style={{
//                 background: `linear-gradient(135deg, ${ACCENT.from}, ${ACCENT.mid}, ${ACCENT.to})`,
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               Move Markets
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-gray-400 text-base max-w-xl mx-auto"
//           >
//             Perspectives on leadership, growth, and the future of work from the frontlines.
//           </motion.p>
//         </motion.div>

//         {/* Search & Filters */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.25 }}
//           className="flex flex-col md:flex-row gap-4 mb-10"
//         >
//           <div className="relative flex-1">
//             <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
//             <input
//               type="text"
//               placeholder="Search articles..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full h-12 pl-10 pr-10 rounded-xl bg-white border border-gray-200 text-gray-700 text-sm placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
//             />
//             <AnimatePresence>
//               {search && (
//                 <motion.button
//                   initial={{ opacity: 0, scale: 0.6 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.6 }}
//                   onClick={() => setSearch("")}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors"
//                 >
//                   <X size={14} />
//                 </motion.button>
//               )}
//             </AnimatePresence>
//           </div>

//           <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 flex-nowrap">
//             {CATEGORIES.map((cat) => {
//               const isActive = activeCategory === cat;
//               return (
//                 <motion.button
//                   key={cat}
//                   onClick={() => handleCategory(cat)}
//                   whileHover={{ scale: 1.04 }}
//                   whileTap={{ scale: 0.97 }}
//                   className="flex-shrink-0 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all duration-200"
//                   style={
//                     isActive
//                       ? {
//                           background:  `linear-gradient(135deg, ${ACCENT.from}, ${ACCENT.to})`,
//                           color:        "#fff",
//                           borderColor: "transparent",
//                           boxShadow:   `0 4px 14px ${ACCENT.from}30`,
//                         }
//                       : {
//                           background:  "#fff",
//                           color:        "#94a3b8",
//                           borderColor: "#e2e8f0",
//                         }
//                   }
//                 >
//                   {cat}
//                 </motion.button>
//               );
//             })}
//           </div>
//         </motion.div>

//         {/* Content */}
//         {loading ? (
//           <div className="space-y-8">
//             <div className="h-72 md:h-80 bg-gray-50 border border-gray-100 rounded-3xl animate-pulse" />
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {Array.from({ length: 6 }).map((_, i) => (
//                 <SkeletonCard key={i} delay={i * 0.05} />
//               ))}
//             </div>
//           </div>
//         ) : filtered.length === 0 ? (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="text-center py-28"
//           >
//             <div
//               className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 border"
//               style={{
//                 background:  `linear-gradient(135deg, ${ACCENT.from}10, ${ACCENT.to}10)`,
//                 borderColor: `${ACCENT.from}20`,
//               }}
//             >
//               <BookOpen size={28} className="text-blue-300" />
//             </div>
//             <p className="text-gray-400 text-sm mb-3">
//               {search ? `No articles matching "${search}"` : "No articles published yet."}
//             </p>
//             {search && (
//               <button
//                 onClick={() => setSearch("")}
//                 className="text-xs font-bold text-blue-500 hover:text-blue-600 underline underline-offset-2 transition-colors"
//               >
//                 Clear search
//               </button>
//             )}
//           </motion.div>
//         ) : (
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={`${activeCategory}-${page}`}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="space-y-8"
//             >
//               {featured && page === 1 && <FeaturedCard blog={featured} />}

//               {rest.length > 0 && (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {rest.map((blog, i) => (
//                     <BlogCard key={blog.id} blog={blog} index={i} />
//                   ))}
//                 </div>
//               )}

//               {totalPages > 1 && !search && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                   className="flex items-center justify-center gap-4 pt-10"
//                 >
//                   <motion.button
//                     whileHover={{ scale: 1.04 }}
//                     whileTap={{ scale: 0.96 }}
//                     onClick={() => fetchBlogs(page - 1)}
//                     disabled={page <= 1}
//                     className="px-6 py-3 rounded-xl bg-white border border-gray-200 text-xs text-gray-500 hover:text-gray-800 hover:border-gray-300 hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed transition-all font-bold uppercase tracking-widest shadow-sm"
//                   >
//                     ← Previous
//                   </motion.button>

//                   <span className="text-[10px] text-gray-300 font-black uppercase tracking-widest px-4">
//                     {page} / {totalPages}
//                   </span>

//                   <motion.button
//                     whileHover={{ scale: 1.04 }}
//                     whileTap={{ scale: 0.96 }}
//                     onClick={() => fetchBlogs(page + 1)}
//                     disabled={page >= totalPages}
//                     className="px-6 py-3 rounded-xl text-xs text-white font-bold uppercase tracking-widest shadow-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:shadow-md"
//                     style={{ background: `linear-gradient(135deg, ${ACCENT.from}, ${ACCENT.to})` }}
//                   >
//                     Next →
//                   </motion.button>
//                 </motion.div>
//               )}

//               <p className="text-center text-[10px] text-gray-300 font-bold uppercase tracking-widest pt-2">
//                 Showing {filtered.length} of {total} articles
//               </p>
//             </motion.div>
//           </AnimatePresence>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
export const dynamic = "force-dynamic";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Clock,
  User,
  ChevronRight,
  BookOpen,
  X,
  TrendingUp,
} from "lucide-react";

const ACCENT = { from: "#2563eb", mid: "#3b82f6", to: "#06b6d4" };

const CATEGORIES = [
  "All",
  "Leadership",
  "Career Growth",
  "Productivity",
  "Mindset",
  "Technology",
  "Business",
  "Wellness",
  "Finance",
];

const CAT_COLORS: Record<
  string,
  { bg: string; text: string; border: string; glow: string }
> = {
  Leadership: {
    bg: "#6366F112",
    text: "#6366F1",
    border: "#6366F130",
    glow: "#6366F120",
  },
  "Career Growth": {
    bg: "#10B98112",
    text: "#10B981",
    border: "#10B98130",
    glow: "#10B98120",
  },
  Productivity: {
    bg: "#F59E0B12",
    text: "#F59E0B",
    border: "#F59E0B30",
    glow: "#F59E0B20",
  },
  Mindset: {
    bg: "#EC489912",
    text: "#EC4899",
    border: "#EC489930",
    glow: "#EC489920",
  },
  Technology: {
    bg: "#3B82F612",
    text: "#3B82F6",
    border: "#3B82F630",
    glow: "#3B82F620",
  },
  Business: {
    bg: "#8B5CF612",
    text: "#8B5CF6",
    border: "#8B5CF630",
    glow: "#8B5CF620",
  },
  Wellness: {
    bg: "#14B8A612",
    text: "#14B8A6",
    border: "#14B8A630",
    glow: "#14B8A620",
  },
  Finance: {
    bg: "#F9731612",
    text: "#F97316",
    border: "#F9731630",
    glow: "#F9731620",
  },
};

type Blog = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  image: string;
  date: string;
  status: string;
};

function CategoryBadge({
  category,
  size = "sm",
}: {
  category: string;
  size?: "sm" | "md";
}) {
  const col = CAT_COLORS[category] ?? {
    bg: "#64748B12",
    text: "#64748B",
    border: "#64748B30",
    glow: "#64748B20",
  };
  return (
    <span
      className={`inline-flex items-center rounded-lg font-black uppercase tracking-widest border ${
        size === "md" ? "px-3 py-1.5 text-[11px]" : "px-2.5 py-1 text-[10px]"
      }`}
      style={{ background: col.bg, color: col.text, borderColor: col.border }}
    >
      {category}
    </span>
  );
}

// ── Animated Blog Card ──────────────────────────────────────────────────────
function BlogCard({ blog, index }: { blog: Blog; index: number }) {
  const [imgErr, setImgErr] = useState(false);
  const [hovered, setHovered] = useState(false);
  const col = CAT_COLORS[blog.category] ?? { glow: "#2563eb20" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ perspective: 1000 }}
    >
      <Link href={`/blog/${blog.slug}`} className="block h-full">
        <motion.div
          animate={{
            y: hovered ? -8 : 0,
            boxShadow: hovered
              ? `0 24px 60px -10px ${col.glow}, 0 8px 20px rgba(0,0,0,0.08)`
              : "0 2px 8px rgba(0,0,0,0.04)",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 h-full"
          style={{
            borderColor: hovered
              ? (CAT_COLORS[blog.category]?.border ?? "#e2e8f0")
              : "#f1f5f9",
          }}
        >
          {/* Image */}
          <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 flex-shrink-0">
            {blog.image && !imgErr ? (
              <motion.img
                src={blog.image}
                alt={blog.title}
                animate={{ scale: hovered ? 1.07 : 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full h-full object-cover"
                onError={() => setImgErr(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <BookOpen size={40} className="text-gray-200" />
              </div>
            )}

            {/* Overlay */}
            <motion.div
              animate={{ opacity: hovered ? 1 : 0 }}
              className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"
            />

            {/* Category */}
            <div className="absolute top-4 left-4">
              <CategoryBadge category={blog.category} />
            </div>

            {/* Read pill appears on hover */}
            <motion.div
              animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-[11px] font-black uppercase tracking-widest"
              style={{
                background: "linear-gradient(135deg, #2563eb, #06b6d4)",
              }}
            >
              Read <ChevronRight size={11} />
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-6">
            <h2 className="font-black text-gray-900 text-[15px] leading-snug mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
              {blog.title}
            </h2>
            {blog.excerpt && (
              <p className="text-gray-400 text-[13px] leading-relaxed line-clamp-2 flex-1 mb-4">
                {blog.excerpt}
              </p>
            )}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-50 mt-auto flex-wrap">
              {blog.author && (
                <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <User size={10} /> {blog.author}
                </span>
              )}
              {blog.readTime && (
                <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <Clock size={10} /> {blog.readTime}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

// ── Featured Hero Card ──────────────────────────────────────────────────────
function FeaturedCard({ blog }: { blog: Blog }) {
  const [imgErr, setImgErr] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <Link href={`/blog/${blog.slug}`} className="block">
        <motion.div
          animate={{
            boxShadow: hovered
              ? "0 32px 80px -12px rgba(37,99,235,0.18), 0 8px 24px rgba(0,0,0,0.06)"
              : "0 4px 16px rgba(0,0,0,0.06)",
          }}
          transition={{ duration: 0.4 }}
          className="group relative flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden border border-gray-100"
          style={{ minHeight: 420 }}
        >
          {/* Image side */}
          <div className="relative lg:w-[52%] h-72 lg:h-auto overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 flex-shrink-0">
            {blog.image && !imgErr ? (
              <motion.img
                src={blog.image}
                alt={blog.title}
                animate={{ scale: hovered ? 1.06 : 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full h-full object-cover"
                onError={() => setImgErr(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <BookOpen size={64} className="text-blue-100" />
              </div>
            )}
            <motion.div
              animate={{ opacity: hovered ? 1 : 0.4 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white hidden lg:block"
            />
          </div>

          {/* Content side */}
          <div className="flex flex-col justify-center flex-1 p-8 lg:p-14">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest"
                style={{
                  background: "linear-gradient(135deg, #2563eb, #06b6d4)",
                }}
              >
                <TrendingUp size={10} /> Featured
              </span>
              <CategoryBadge category={blog.category} size="md" />
            </div>

            <h2 className="text-2xl lg:text-4xl font-black text-gray-900 leading-[1.1] mb-5 group-hover:text-blue-600 transition-colors duration-300">
              {blog.title}
            </h2>

            {blog.excerpt && (
              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg line-clamp-3">
                {blog.excerpt}
              </p>
            )}

            <div className="flex items-center gap-6 flex-wrap">
              {blog.author && (
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                  <User size={12} /> {blog.author}
                </span>
              )}
              {blog.readTime && (
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                  <Clock size={12} /> {blog.readTime}
                </span>
              )}
              <motion.span
                animate={{
                  opacity: hovered ? 1 : 0,
                  x: hovered ? 0 : -8,
                }}
                transition={{ duration: 0.25 }}
                className="ml-auto flex items-center gap-2 px-6 py-3 rounded-full text-sm font-black text-white"
                style={{
                  background: "linear-gradient(135deg, #2563eb, #06b6d4)",
                }}
              >
                Read Article <ChevronRight size={14} />
              </motion.span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

// ── Skeleton ────────────────────────────────────────────────────────────────
function SkeletonCard({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="rounded-3xl overflow-hidden border border-gray-100 bg-white"
    >
      <div className="h-56 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 animate-pulse" />
      <div className="p-6 space-y-3">
        <div className="h-3 w-20 bg-gray-100 rounded-full animate-pulse" />
        <div className="h-5 bg-gray-100 rounded-full animate-pulse" />
        <div className="h-5 w-3/4 bg-gray-100 rounded-full animate-pulse" />
        <div className="h-3 bg-gray-100 rounded-full animate-pulse" />
        <div className="h-3 w-4/5 bg-gray-100 rounded-full animate-pulse" />
      </div>
    </motion.div>
  );
}

// ── Floating dots ────────────────────────────────────────────────────────────
function FloatingDots() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 4 + i * 2,
            height: 4 + i * 2,
            background: i % 2 === 0 ? ACCENT.from : ACCENT.to,
            opacity: 0.2,
            left: `${8 + i * 15}%`,
          }}
          initial={{ y: "110vh" }}
          animate={{ y: "-10vh" }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────
export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const LIMIT = 9;

  const fetchBlogs = useCallback(
    async (p = 1, cat = activeCategory) => {
      try {
        setLoading(true);
        const qs = new URLSearchParams({
          status: "Published",
          limit: String(LIMIT),
          page: String(p),
        });
        if (cat !== "All") qs.set("category", cat);
        const res = await fetch(`/api/blogs?${qs}`);
        const data = await res.json();
        setBlogs(data.blogs || []);
        setTotal(data.total || 0);
        setTotalPages(data.totalPages || 1);
        setPage(p);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    [activeCategory],
  );

  useEffect(() => {
    fetchBlogs(1);
  }, [fetchBlogs]);

  const handleCategory = (cat: string) => {
    setActiveCategory(cat);
    fetchBlogs(1, cat);
  };

  const filtered = search
    ? blogs.filter(
        (b) =>
          b.title.toLowerCase().includes(search.toLowerCase()) ||
          (b.excerpt ?? "").toLowerCase().includes(search.toLowerCase()),
      )
    : blogs;

  const featured = !search ? filtered[0] : undefined;
  const rest = !search ? filtered.slice(1) : filtered;

  return (
    <div className="relative min-h-screen bg-[#f8fafc] overflow-hidden">
      <FloatingDots />

      {/* bg blobs */}
      <div
        className="fixed top-0 left-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, #2563eb08, transparent 60%)",
          zIndex: 0,
        }}
      />
      <div
        className="fixed bottom-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 80%, #06b6d408, transparent 60%)",
          zIndex: 0,
        }}
      />

      {/* ── IMPORTANT: pt-28 pushes content below navbar ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[11px] font-extrabold tracking-widest border mb-6"
            style={{
              background: "linear-gradient(135deg, #2563eb12, #06b6d412)",
              borderColor: "#2563eb2e",
              color: "#2563eb",
            }}
          >
            <BookOpen size={13} /> INSIGHTS & ARTICLES
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-gray-900 mb-5"
          >
            Ideas That{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #2563eb, #3b82f6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Move Markets
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Perspectives on leadership, growth, and the future of work from the
            frontlines.
          </motion.p>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-col lg:flex-row gap-4 mb-12"
        >
          {/* Search */}
          <div className="relative lg:w-80 flex-shrink-0">
            <Search
              size={15}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-12 pl-11 pr-10 rounded-2xl bg-white border border-gray-200 text-gray-700 text-sm placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
            />
            <AnimatePresence>
              {search && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500"
                >
                  <X size={14} />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Category pills */}
          <div className="flex gap-2 overflow-x-auto pb-1 flex-nowrap flex-1">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <motion.button
                  key={cat}
                  onClick={() => handleCategory(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex-shrink-0 h-12 px-5 rounded-2xl text-[11px] font-black uppercase tracking-widest border transition-all duration-200"
                  style={
                    isActive
                      ? {
                          background:
                            "linear-gradient(135deg, #2563eb, #06b6d4)",
                          color: "#fff",
                          borderColor: "transparent",
                          boxShadow: "0 4px 16px #2563eb30",
                        }
                      : {
                          background: "#fff",
                          color: "#94a3b8",
                          borderColor: "#e2e8f0",
                        }
                  }
                >
                  {cat}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Content */}
        {loading ? (
          <div className="space-y-10">
            <div className="h-80 bg-white rounded-3xl animate-pulse border border-gray-100" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} delay={i * 0.05} />
              ))}
            </div>
          </div>
        ) : filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32"
          >
            <div
              className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 border"
              style={{
                background: "linear-gradient(135deg, #2563eb10, #06b6d410)",
                borderColor: "#2563eb20",
              }}
            >
              <BookOpen size={32} className="text-blue-300" />
            </div>
            <p className="text-gray-400 text-base mb-4">
              {search
                ? `No articles matching "${search}"`
                : "No articles published yet."}
            </p>
            {search && (
              <button
                onClick={() => setSearch("")}
                className="text-sm font-bold text-blue-500 hover:text-blue-600 underline underline-offset-4"
              >
                Clear search
              </button>
            )}
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${page}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-10"
            >
              {/* Featured */}
              {featured && page === 1 && <FeaturedCard blog={featured} />}

              {/* Cards grid */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((blog, i) => (
                    <BlogCard key={blog.id} blog={blog} index={i} />
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && !search && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-center gap-4 pt-10"
                >
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => fetchBlogs(page - 1)}
                    disabled={page <= 1}
                    className="px-7 py-3 rounded-2xl bg-white border border-gray-200 text-xs text-gray-500 hover:border-gray-300 hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed font-bold uppercase tracking-widest shadow-sm transition-all"
                  >
                    ← Previous
                  </motion.button>
                  <span className="text-[11px] text-gray-300 font-black uppercase tracking-widest px-4">
                    {page} / {totalPages}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => fetchBlogs(page + 1)}
                    disabled={page >= totalPages}
                    className="px-7 py-3 rounded-2xl text-xs text-white font-bold uppercase tracking-widest shadow-sm disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-md transition-all"
                    style={{
                      background: "linear-gradient(135deg, #2563eb, #06b6d4)",
                    }}
                  >
                    Next →
                  </motion.button>
                </motion.div>
              )}

              <p className="text-center text-[10px] text-gray-300 font-bold uppercase tracking-widest pt-2">
                Showing {filtered.length} of {total} articles
              </p>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
