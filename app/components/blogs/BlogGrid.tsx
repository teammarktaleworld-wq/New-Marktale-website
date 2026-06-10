// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Calendar, User, ArrowUpRight, Clock } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { blogs } from '@/lib/blogData';

// export default function BlogGrid() {
//     return (
//         <section className="py-24 bg-white">
//             <div className="container mx-auto px-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {blogs.map((blog, index) => (
//                         <motion.article
//                             key={blog.slug}
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: index * 0.1 }}
//                             className="group cursor-pointer"
//                         >
//                             <Link href={`/blogs/${blog.slug}`} className="block">
//                                 <div className="relative h-64 overflow-hidden rounded-xl mb-6 bg-gray-100">
//                                     <Image
//                                         src={blog.image}
//                                         alt={blog.title}
//                                         fill
//                                         className="object-cover transition-transform duration-700 group-hover:scale-105"
//                                     />
//                                     <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-widest text-kestone-black rounded-md shadow-sm">
//                                         {blog.category}
//                                     </div>
//                                 </div>

//                                 <div className="flex items-center text-xs text-gray-400 font-bold uppercase tracking-wider mb-3 space-x-4">
//                                     <div className="flex items-center">
//                                         <Calendar size={14} className="mr-1" />
//                                         {blog.date}
//                                     </div>
//                                     <div className="flex items-center">
//                                         <User size={14} className="mr-1" />
//                                         {blog.author}
//                                     </div>
//                                     {blog.readTime && (
//                                         <div className="flex items-center">
//                                             <Clock size={14} className="mr-1" />
//                                             {blog.readTime}
//                                         </div>
//                                     )}
//                                 </div>

//                                 <h3 className="text-xl font-heading font-bold text-kestone-black mb-3 group-hover:text-kestone-red transition-colors flex items-start justify-between">
//                                     {blog.title}
//                                     <ArrowUpRight size={20} className="text-gray-300 group-hover:text-kestone-red transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0 ml-2" />
//                                 </h3>

//                                 <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
//                                     {blog.excerpt}
//                                 </p>
//                             </Link>
//                         </motion.article>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  ArrowUpRight,
  Clock,
  Search,
  RefreshCw,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80";

function getImage(url: string | undefined | null): string {
  if (!url || typeof url !== "string" || url.trim() === "")
    return FALLBACK_IMAGE;
  try {
    new URL(url);
    return url;
  } catch {
    return FALLBACK_IMAGE;
  }
}

const CAT_COLORS: Record<string, string> = {
  "Email Marketing": "#F59E0B",
  "Performance Marketing": "#3B82F6",
  "SEO Strategy": "#10B981",
  Tech: "#8B5CF6",
  Startups: "#EF4444",
  AI: "#06B6D4",
  Design: "#EC4899",
  "Case Study": "#F97316",
  Branding: "#84CC16",
};

function catColor(cat: string) {
  return CAT_COLORS[cat] || "#6B7280";
}

export default function BlogGrid() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const fetchBlogs = useCallback(async () => {
    try {
      setLoading(true);
      const snapshot = await getDocs(collection(db, "blogs"));
      const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setBlogs(data);
      setLastUpdated(new Date());
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBlogs();
    const interval = setInterval(fetchBlogs, 30000);
    return () => clearInterval(interval);
  }, [fetchBlogs]);

  const published = blogs.filter((b) => b.status === "Published");
  const categories = [
    "All",
    ...Array.from(new Set(published.map((b) => b.category))),
  ];

  const filtered = published.filter((b) => {
    const matchCat = activeCategory === "All" || b.category === activeCategory;
    const matchSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      (b.excerpt || "").toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const [featured, ...rest] = filtered;

  if (loading) {
    return (
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-64 bg-gray-100 rounded-xl mb-4" />
                <div className="h-4 bg-gray-100 rounded mb-2 w-3/4" />
                <div className="h-4 bg-gray-100 rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Refresh Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={fetchBlogs}
            className="flex items-center gap-2 px-3 py-2 text-xs text-gray-500 hover:text-black transition-colors rounded-lg hover:bg-gray-100"
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
            Refresh
            <span className="text-gray-400 text-xs">
              (Updated: {lastUpdated.toLocaleTimeString()})
            </span>
          </button>
        </div>

        {/* Search + Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
          <div className="relative w-full md:w-80">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/10 transition"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
                style={
                  activeCategory === cat
                    ? {
                        background: cat === "All" ? "#000" : catColor(cat),
                        color: "#fff",
                      }
                    : { background: "#f4f4f5", color: "#71717a" }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-gray-400">
            No articles found.
          </div>
        )}

        {/* Featured post */}
        {featured && activeCategory === "All" && !search && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group mb-12"
          >
            <Link
              href={`/blogs/${featured.slug}`}
              className="grid md:grid-cols-2 gap-8 items-center bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-72 md:h-full min-h-[300px] overflow-hidden">
                <Image
                  src={getImage(featured.image)}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest text-white"
                  style={{ background: catColor(featured.category) }}
                >
                  {featured.category}
                </div>
                <div className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                  Featured
                </div>
              </div>
              <div className="p-8 md:p-10">
                <div className="flex items-center text-xs text-gray-400 font-bold uppercase tracking-wider mb-4 gap-4 flex-wrap">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} /> {featured.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={13} /> {featured.author}
                  </span>
                  {featured.readTime && (
                    <span className="flex items-center gap-1">
                      <Clock size={13} /> {featured.readTime}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight group-hover:opacity-80 transition-opacity">
                  {featured.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-black group-hover:gap-3 transition-all">
                  Read Article <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          </motion.article>
        )}

        {/* Rest of grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeCategory === "All" && !search ? rest : filtered).map(
            (blog, index) => (
              <motion.article
                key={blog.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="group cursor-pointer"
              >
                <Link href={`/blogs/${blog.slug}`} className="block">
                  <div className="relative h-56 overflow-hidden rounded-xl mb-5 bg-gray-100">
                    <Image
                      src={getImage(blog.image)}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute top-4 left-4 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest text-white"
                      style={{ background: catColor(blog.category) }}
                    >
                      {blog.category}
                    </div>
                  </div>

                  <div className="flex items-center text-xs text-gray-400 font-bold uppercase tracking-wider mb-3 gap-4 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} /> {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={13} /> {blog.author}
                    </span>
                    {blog.readTime && (
                      <span className="flex items-center gap-1">
                        <Clock size={13} /> {blog.readTime}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-black mb-3 group-hover:opacity-70 transition-opacity flex items-start justify-between gap-2">
                    {blog.title}
                    <ArrowUpRight
                      size={18}
                      className="text-gray-300 group-hover:text-black transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0 mt-0.5"
                    />
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </Link>
              </motion.article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
