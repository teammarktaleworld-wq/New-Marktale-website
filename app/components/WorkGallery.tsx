"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, Minus, X, MapPin } from "lucide-react";

// Ultimate Synchronized Data Layer matched exactly from image_fff066.png & local images
const workItems = [
  {
    id: 1,
    slug: "mentorleap",
    title: "MentorLeap",
    category: "EdTech",
    country: "India",
    image: "/Feature_logos/mentorleep.png",
    tags: ["AI Mentorship", "EdTech"],
    challenge: "Hesitant professionals struggled with boardroom communication and leadership identity due to generic, non-scalable learning approaches."
  },
  {
    id: 2,
    slug: "delhi059",
    title: "Delhi059",
    category: "Hospitality",
    country: "Canada",
    image: "/Feature_logos/delhi.jpg",
    tags: ["SEO", "Social Proof"],
    challenge: "Chef Kanishk wanted to bring authentic Indian flavors to Canada but had absolutely zero digital footprint or local discovery channels."
  },
  {
    id: 3,
    slug: "localride",
    title: "Local Ride",
    category: "Transportation",
    country: "Canada",
    image: "/Feature_logos/localride.jpg",
    tags: ["App Marketing", "Growth"],
    challenge: "Entering a highly monopolized rideshare market dominated by multi-billion dollar tech giants required a brilliant grassroots challenger strategy."
  },
  {
    id: 4,
    slug: "deecee",
    title: "Dee Cee Accessories",
    category: "Jewelry",
    country: "India",
    image: "/Feature_logos/deecee.jpg",
    tags: ["E-com Setup", "Photography"],
    challenge: "A highly trusted, legacy offline jewelry manufacturer with absolutely no internet storefront or direct-to-consumer pipelines."
  },
  {
    id: 5,
    slug: "lastmile",
    title: "Last Mile Care",
    category: "NGO",
    country: "India",
    image: "/Feature_logos/lastmile.jpeg",
    tags: ["Brand Identity", "Outreach"],
    challenge: "An impactful ground-level healthcare collective struggled to build digital transparency needed for continuous institutional donations."
  },
  {
    id: 6,
    slug: "maggoplayschool",
    title: "Maggo Play School",
    category: "Education",
    country: "India",
    image: "/Feature_logos/maggo.png",
    tags: ["Digital Learning", "Engagement"],
    challenge: "Creating joyful learning experiences for young minds in Delhi with innovative, localized interactive digital preschool management frameworks."
  },
  {
    id: 7,
    slug: "bgfoundation",
    title: "BG Foundation",
    category: "NGO",
    country: "Canada",
    image: "/Feature_logos/foundation.jpeg",
    tags: ["Social Impact", "Transformation"],
    challenge: "Empowering communities through strategic digital transformation resources and localized outreach initiatives managed across Canada."
  },
  {
    id: 8,
    slug: "bgfoods",
    title: "BG Foods",
    category: "E-commerce",
    country: "Canada/USA",
    image: "/Feature_logos/bgfoods.jpeg",
    tags: ["Performance Ads", "SEO"],
    challenge: "Scaling regional Indian grocery and snack products to highly competitive North American retail shelves and cross-border digital buyers."
  },
  {
    id: 9,
    slug: "promac",
    title: "Promac Advisory",
    category: "Real Estate",
    country: "India",
    image: "/Feature_logos/promac.png",
    tags: ["Lead Gen", "Trust Branding"],
    challenge: "High-ticket property advisory firms require deep consumer trust, making traditional cold transactional digital ads highly ineffective."
  },
  {
    id: 10,
    slug: "cabtale",
    title: "CabTale",
    category: "Transportation",
    country: "India",
    image: "/Feature_logos/cabtale.jpg",
    tags: ["UI/UX Strategy", "Growth"],
    challenge: "Solving high friction urban transit demands required an intuitive, lightning-fast application experience backed by heavy localized awareness."
  },
  {
    id: 11,
    slug: "astronexus",
    title: "Astro Nexus",
    category: "Astrology",
    country: "India",
    image: "/Feature_logos/astronexus.jpg",
    tags: ["Brand Dev", "Targeted Ads"],
    challenge: "Scaling modern algorithmic astrology services inside a tradition-bound niche without losing cultural authenticity or depth."
  },
  {
    id: 12,
    slug: "biryanibar",
    title: "Biryani Bar",
    category: "Hospitality",
    country: "India",
    image: "/creatives/biryanibar.jpg",
    tags: ["Viral Strategy", "Social Media"],
    challenge: "A brilliant local eatery with delicious food remained undiscovered outside its immediate neighborhood due to low local social presence."
  },
  {
    id: 13,
    slug: "readabroad",
    title: "Read Abroad",
    category: "Education",
    country: "Global",
    image: "/Feature_logos/read.jpeg",
    tags: ["Consulting", "Global Reach"],
    challenge: "Connecting students seamlessly with international educational opportunities through intuitive, unified cross-border digital consultation platforms."
  },
  {
    id: 14,
    slug: "writingrodgers",
    title: "Writing Rodgers",
    category: "Education",
    country: "Global",
    image: "/Feature_logos/writing.png",
    tags: ["Content Architecture", "EdTech"],
    challenge: "Valuing structural academic workflows with crisp, optimized content strategies designed to elevate student-centric research portfolios."
  }
];

const categories = ["All", "EdTech", "Hospitality", "Transportation", "E-commerce", "Jewelry", "NGO", "Education", "Astrology", "Real Estate"];

export default function WorkGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof workItems[0] | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredItems = activeCategory === "All"
    ? workItems
    : workItems.filter(item => item.category === activeCategory);

  const displayedItems = filteredItems.slice(0, visibleCount);

  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto bg-white text-zinc-900 transition-all duration-300 relative">

      {/* Universal Soft Navigation Tabs */}
      <div className="flex flex-wrap gap-2.5 justify-center mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setVisibleCount(6);
            }}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${activeCategory === cat
                ? "bg-zinc-950 border-zinc-950 text-white shadow-lg scale-105"
                : "bg-zinc-50 border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/80"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Advanced Spring Animated Layout Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {displayedItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 10 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              onClick={() => setSelectedProject(item)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-xs hover:shadow-xl hover:border-zinc-300/90 transition-all duration-500 flex flex-col h-[450px] cursor-pointer"
            >
              {/* Media Block */}
              <div className="relative h-48 w-full overflow-hidden bg-zinc-50 border-b border-zinc-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-zinc-800 border border-zinc-200/80 shadow-xs">
                  {item.category}
                </span>
              </div>

              {/* Data Space */}
              <div className="p-6 flex flex-col flex-grow bg-white">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-black tracking-tight text-zinc-950 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-bold text-zinc-400 bg-zinc-50/50 px-2 py-0.5 rounded border border-zinc-100 uppercase tracking-wide flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 text-zinc-400" /> {item.country}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold tracking-wide uppercase bg-zinc-100 text-zinc-500 px-2 py-0.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-xs md:text-sm text-zinc-400 line-clamp-3 mb-6 flex-grow leading-relaxed font-normal">
                  {item.challenge}
                </p>

                <div className="w-full mt-auto inline-flex items-center justify-center gap-2 bg-zinc-50 group-hover:bg-zinc-950 border border-zinc-200 group-hover:border-zinc-950 text-xs font-bold uppercase tracking-wider text-zinc-700 group-hover:text-white py-3.5 rounded-xl transition-all duration-300 shadow-2xs">
                  View Quick Analysis
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Dynamic Toggle Action Control (More / Back Button Interface) */}
      <div className="pt-16 flex justify-center">
        {filteredItems.length > visibleCount ? (
          <button
            onClick={() => setVisibleCount(filteredItems.length)}
            className="inline-flex items-center gap-2 bg-white border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-400 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xs hover:shadow-md"
          >
            <Plus className="w-4 h-4 text-zinc-400" /> More Operations ({filteredItems.length - visibleCount}+)
          </button>
        ) : (
          visibleCount > 6 && (
            <button
              onClick={() => setVisibleCount(6)}
              className="inline-flex items-center gap-2 bg-zinc-50 border border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:border-zinc-400 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-inner"
            >
              <Minus className="w-4 h-4 text-zinc-500" /> Show Less (Back View)
            </button>
          )
        )}
      </div>

      {/* Pure White/Light Styled Modal Sheet */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Black bg overlay completely converted to soft neutral glassmorphic gray tint
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-100/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white border border-zinc-200 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Handle */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2.5 bg-white/90 hover:bg-zinc-100 rounded-full border border-zinc-200 text-zinc-600 hover:text-zinc-900 shadow-sm transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Cover Showcase */}
              <div className="relative h-64 w-full bg-zinc-50 border-b border-zinc-100">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
                <span className="absolute bottom-4 left-6 bg-zinc-900 text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                  {selectedProject.category}
                </span>
              </div>

              {/* Extended Details Grid Layout - All Black Backgrounds Removed */}
              <div className="p-8 overflow-y-auto space-y-6 flex-grow bg-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-4">
                  <div>
                    <h2 className="text-2xl font-black tracking-tight text-zinc-950">{selectedProject.title}</h2>
                    <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider mt-1">Operational Audit Case Study</p>
                  </div>
                  <div className="text-xs font-bold text-zinc-600 bg-zinc-50 border border-zinc-200 px-3 py-1.5 rounded-lg w-max tracking-wide">
                    📍 Deployment Market: {selectedProject.country}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-black tracking-widest uppercase text-zinc-400">Core Architecture & Focus</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-bold uppercase tracking-wide bg-zinc-100 text-zinc-700 border border-zinc-200 px-3 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 bg-zinc-50 border border-zinc-200/80 p-5 rounded-2xl">
                  <h4 className="text-xs font-black tracking-widest uppercase text-zinc-800">Deployment Strategy & Challenge</h4>
                  <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-normal">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/work/${selectedProject.slug}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all shadow-md shadow-zinc-950/10"
                  >
                    Explore Full Live Case Study <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="sm:px-6 py-4 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-700 font-bold text-xs uppercase tracking-widest rounded-xl transition-all"
                  >
                    Close View
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}