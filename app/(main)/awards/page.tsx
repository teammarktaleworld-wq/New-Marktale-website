// 'client';

// import React from 'react';
// import PageHero from '@/components/ui/PageHero';
// import AwardsGrid from '@/components/awards/AwardsGrid';
// import AwardsImpact from '@/components/awards/AwardsImpact';
// import TeamCTA from '@/components/TeamCTA';

// export default function AwardsPage() {
//     return (
//         <div className="bg-white min-h-screen">
//             <PageHero
//                 title="Awards & Recognition"
//                 subtitle="Excellence"
//                 description="Our journey is defined by the milestones we've crossed and the impact we've created for our partners."
//             />
//             <AwardsGrid />
//             <AwardsImpact />
//             <TeamCTA />
//         </div>
//     );
// }





















// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence, useInView } from "framer-motion";
// import Link from "next/link";
// import { ArrowRight, Play, Pause, Volume2, VolumeX } from "lucide-react";

// /* =========================================================
//    DATA
//    ========================================================= */

// const milestones = [
//   {
//     year: "2024",
//     company: "MarkTale",
//     role: "Founder & CEO",
//     result: "Founded and scaled MarkTale, launching Delhi059 by Chef Kanishk, TripTale, Dee Cee Pearls, and Down Ridge from zero to revenue.",
//     metrics: [
//       { value: "4", label: "Brands launched" },
//       { value: "500%", label: "Avg. growth" },
//     ],
//     accent: "#0287E7",
//     tag: "Current",
//   },
//   {
//     year: "2023",
//     company: "Volvo Cars India",
//     role: "Digital Marketing Lead",
//     result: "Led end-to-end digital marketing — web, SEO/SEM, email, social, and display — delivering measurable ROAS for one of India's most premium automotive brands.",
//     metrics: [
//       { value: "300%", label: "ROI achieved" },
//       { value: "10×", label: "ROAS" },
//     ],
//     accent: "#d97706",
//     tag: "Automotive",
//   },
//   {
//     year: "2021",
//     company: "Kamalraj Group",
//     role: "Head of Marketing",
//     result: "Drove client subscriptions and society activations across residential and commercial verticals, achieving full occupancy across 50+ societies.",
//     metrics: [
//       { value: "50+", label: "Societies" },
//       { value: "100%", label: "Occupancy" },
//     ],
//     accent: "#0287E7",
//     tag: "Real Estate",
//   },
//   {
//     year: "2019",
//     company: "Mindwise Media Research",
//     role: "Senior Zonal Coordinator",
//     result: "Managed election survey operations and a 120-member field team across multiple zones, maintaining near-perfect accuracy under tight deadlines.",
//     metrics: [
//       { value: "120", label: "Team members" },
//       { value: "99%", label: "Accuracy" },
//     ],
//     accent: "#0287E7",
//     tag: "Research",
//   },
//   {
//     year: "2018",
//     company: "Commercial Direction",
//     role: "Director & Cinematographer",
//     result: "Directed and filmed commercial content for Unique Builders, eBay.in, and Square Animation Company — campaigns that crossed a million views.",
//     metrics: [
//       { value: "10+", label: "Ads produced" },
//       { value: "1M+", label: "Total views" },
//     ],
//     accent: "#d97706",
//     tag: "Film",
//   },
//   {
//     year: "2017",
//     company: "National Theatre",
//     role: "Actor — Delhi Representative",
//     result: "Represented Delhi at the national level in competitive theatre, earning recognition for performance craft — the foundation of MarkTale's storytelling DNA.",
//     metrics: [
//       { value: "National", label: "Level" },
//       { value: "Award", label: "Winner" },
//     ],
//     accent: "#0287E7",
//     tag: "Performance",
//   },
// ];

// const trustStats = [
//   { value: "10+", label: "Years of excellence" },
//   { value: "150+", label: "Brands scaled" },
//   { value: "50+", label: "Major campaigns" },
//   { value: "98%", label: "Success rate" },
// ];

// /* =========================================================
//    COUNT-UP
//    ========================================================= */

// function CountUp({ value, color }: { value: string; color: string }) {
//   const ref = useRef<HTMLSpanElement>(null);
//   const inView = useInView(ref, { once: true });
//   const [display, setDisplay] = useState("0");

//   useEffect(() => {
//     if (!inView) return;
//     const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
//     const suffix = value.replace(/[0-9.]/g, "");
//     if (isNaN(numeric)) { setDisplay(value); return; }
//     let start = 0;
//     const duration = 1200;
//     const step = 16;
//     const increment = numeric / (duration / step);
//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= numeric) { setDisplay(value); clearInterval(timer); }
//       else setDisplay(Math.floor(start) + suffix);
//     }, step);
//     return () => clearInterval(timer);
//   }, [inView, value]);

//   return <span ref={ref} style={{ color }}>{display}</span>;
// }

// /* =========================================================
//    VIDEO HERO — light theme, video anchored to top
//    ========================================================= */

// function VideoHero() {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [playing, setPlaying] = useState(true);
//   const [muted, setMuted] = useState(true);

//   const togglePlay = () => {
//     const v = videoRef.current;
//     if (!v) return;
//     if (v.paused) { v.play(); setPlaying(true); }
//     else { v.pause(); setPlaying(false); }
//   };

//   const toggleMute = () => {
//     const v = videoRef.current;
//     if (!v) return;
//     v.muted = !v.muted;
//     setMuted(v.muted);
//   };

//   return (
//     <div className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-gray-100">
//       <video
//         ref={videoRef}
//         src="/founder/Awards-video.mp4"
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="auto"
//         className="absolute inset-0 w-full h-full object-cover"
//         style={{ objectPosition: "center center" }}
//       />

//       {/* Light-compatible overlay — subtle dark tint only at bottom for text legibility */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
//       <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

//       {/* Content — bottom-left */}
//       <div className="absolute inset-0 flex flex-col justify-end px-6 pb-14 md:px-16 lg:px-24">
//         <div className="max-w-2xl">
//           <motion.p
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-[#38bdf8] text-xs font-semibold tracking-[0.2em] mb-4 uppercase"
//           >
//             A decade of proof
//           </motion.p>
//           <motion.h1
//             initial={{ opacity: 0, y: 18 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.35 }}
//             className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-5"
//           >
//             Every milestone<br />
//             <span className="text-[#0287E7]">earned, not given.</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="text-white/70 text-sm md:text-base max-w-md leading-relaxed"
//           >
//             From a national theatre stage to scaling 150+ brands — this is the
//             story of what relentless execution looks like.
//           </motion.p>
//         </div>
//       </div>

//       {/* Video controls — bottom right */}
//       <div className="absolute bottom-5 right-5 flex gap-2">
//         <button
//           onClick={toggleMute}
//           className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white hover:bg-black/50 transition-colors"
//           aria-label={muted ? "Unmute" : "Mute"}
//         >
//           {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
//         </button>
//         <button
//           onClick={togglePlay}
//           className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white hover:bg-black/50 transition-colors"
//           aria-label={playing ? "Pause" : "Play"}
//         >
//           {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
//         </button>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    TRUST BAR — light bg
//    ========================================================= */

// function TrustBar() {
//   return (
//     <div className="bg-white border-b border-gray-100 shadow-sm">
//       <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24 py-8
//                       grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-gray-200">
//         {trustStats.map((s, i) => (
//           <div key={i} className="text-center md:px-6">
//             <p className="text-3xl md:text-4xl font-black">
//               <CountUp value={s.value} color="#0287E7" />
//             </p>
//             <p className="text-gray-400 text-xs mt-1 tracking-wide">{s.label}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    MILESTONE CARD — light theme
//    ========================================================= */

// function MilestoneCard({
//   item,
//   index,
// }: {
//   item: (typeof milestones)[0];
//   index: number;
// }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 28 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
//       className="group relative"
//     >
//       {/* Timeline connector line */}
//       <div
//         className="absolute left-[2.85rem] top-12 bottom-0 w-px hidden md:block"
//         style={{ background: `linear-gradient(to bottom, ${item.accent}25, transparent 90%)` }}
//       />

//       <div className="flex flex-col md:flex-row gap-5 md:gap-8">

//         {/* Year dot column */}
//         <div className="flex md:flex-col items-center md:items-center gap-3 md:gap-1 md:w-24 shrink-0 pt-1">
//           <div
//             className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black shrink-0 relative z-10 shadow-sm"
//             style={{
//               background: `${item.accent}12`,
//               border: `2px solid ${item.accent}`,
//               color: item.accent,
//             }}
//           >
//             {item.year.slice(2)}
//           </div>
//           <p className="text-gray-400 text-xs font-medium">{item.year}</p>
//         </div>

//         {/* Card */}
//         <div
//           className="flex-1 rounded-2xl p-6 md:p-7 border border-gray-100 bg-white
//                      shadow-sm hover:shadow-md transition-all duration-300
//                      group-hover:border-gray-200"
//           onMouseEnter={(e) => {
//             (e.currentTarget as HTMLDivElement).style.borderColor = `${item.accent}30`;
//             (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 24px ${item.accent}12`;
//           }}
//           onMouseLeave={(e) => {
//             (e.currentTarget as HTMLDivElement).style.borderColor = "#f3f4f6";
//             (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.06)";
//           }}
//         >
//           {/* Tag + role row */}
//           <div className="flex items-center justify-between mb-3">
//             <p
//               className="text-xs font-semibold tracking-[0.1em]"
//               style={{ color: item.accent }}
//             >
//               {item.role}
//             </p>
//             <span
//               className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
//               style={{
//                 background: `${item.accent}10`,
//                 color: item.accent,
//               }}
//             >
//               {item.tag}
//             </span>
//           </div>

//           {/* Company name */}
//           <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-tight">
//             {item.company}
//           </h3>

//           {/* Result */}
//           <p className="text-gray-500 text-sm leading-relaxed mb-5">
//             {item.result}
//           </p>

//           {/* Metrics */}
//           <div className="flex gap-8 pt-4 border-t border-gray-50">
//             {item.metrics.map((m, mi) => (
//               <div key={mi}>
//                 <p className="text-xl font-black" style={{ color: item.accent }}>
//                   {m.value}
//                 </p>
//                 <p className="text-gray-400 text-xs mt-0.5">{m.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// /* =========================================================
//    MAIN
//    ========================================================= */

// export default function AwardsGrid() {
//   const [filter, setFilter] = useState<string>("All");

//   const years = ["All", "2024", "2023", "2021", "2019", "2018", "2017"];
//   const filtered =
//     filter === "All" ? milestones : milestones.filter((m) => m.year === filter);

//   return (
//     <div className="bg-gray-50 min-h-screen">

//       {/* ── Video Hero ── */}
//       <VideoHero />

//       {/* ── Trust Bar ── */}
//       <TrustBar />

//       {/* ── Timeline ── */}
//       <section className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-24">

//         {/* Header */}
//         <div className="mb-12">
//           <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
//             The track record
//           </h2>
//           <p className="text-gray-400 text-base max-w-md">
//             Six years of tangible outcomes across automotive, real estate,
//             food, research, and film.
//           </p>
//         </div>

//         {/* Year filter */}
//         <div className="flex flex-wrap gap-2 mb-10">
//           {years.map((y) => {
//             const active = filter === y;
//             return (
//               <button
//                 key={y}
//                 onClick={() => setFilter(y)}
//                 className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
//                 style={{
//                   background: active ? "#0287E7" : "#fff",
//                   color: active ? "#fff" : "#6b7280",
//                   border: active ? "1px solid #0287E7" : "1px solid #e5e7eb",
//                   boxShadow: active ? "0 2px 8px #0287E730" : "none",
//                 }}
//               >
//                 {y}
//               </button>
//             );
//           })}
//         </div>

//         {/* List */}
//         <div className="flex flex-col gap-6">
//           <AnimatePresence mode="popLayout">
//             {filtered.map((item, i) => (
//               <MilestoneCard key={item.company} item={item} index={i} />
//             ))}
//           </AnimatePresence>

//           {filtered.length === 0 && (
//             <p className="text-gray-300 text-sm py-16 text-center">
//               No milestones for {filter}.
//             </p>
//           )}
//         </div>
//       </section>

//       {/* ── Bottom CTA ── */}
//       <section className="bg-white border-t border-gray-100">
//         <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-20
//                         flex flex-col md:flex-row md:items-center md:justify-between gap-8">
//           <div>
//             <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
//               Ready to be the next milestone?
//             </h3>
//             <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
//               Book a free strategy call. We'll audit your brand and show you
//               exactly where the growth is.
//             </p>
//           </div>
//           <div className="flex flex-col sm:flex-row gap-3 shrink-0">
//             <Link
//               href="/contact"
//               className="group inline-flex items-center justify-center gap-2 px-6 py-3
//                          rounded-xl bg-[#0287E7] text-white text-sm font-semibold
//                          hover:bg-[#006bb3] transition-colors shadow-md shadow-blue-200"
//             >
//               Book Free Consultation
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
//             </Link>
//             <Link
//               href="/work"
//               className="inline-flex items-center justify-center px-6 py-3
//                          rounded-xl border border-gray-200 text-gray-600 text-sm font-medium
//                          hover:border-gray-300 hover:text-gray-900 transition-all"
//             >
//               See Our Work
//             </Link>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }

















"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Pause, Volume2, VolumeX } from "lucide-react";

/* =========================================================
   DATA
   ========================================================= */

const milestones = [
  {
    year: "2024",
    company: "MarkTale",
    role: "Founder & CEO",
    result: "Founded and scaled MarkTale, launching Delhi059 by Chef Kanishk, TripTale, Dee Cee Pearls, and Down Ridge from zero to revenue.",
    metrics: [
      { value: "4", label: "Brands launched" },
      { value: "500%", label: "Avg. growth" },
    ],
    accent: "#0287E7",
    tag: "Current",
  },
  {
    year: "2023",
    company: "Volvo Cars India",
    role: "Digital Marketing Lead",
    result: "Led end-to-end digital marketing — web, SEO/SEM, email, social, and display — delivering measurable ROAS for one of India's most premium automotive brands.",
    metrics: [
      { value: "300%", label: "ROI achieved" },
      { value: "10×", label: "ROAS" },
    ],
    accent: "#d97706",
    tag: "Automotive",
  },
  {
    year: "2021",
    company: "Kamalraj Group",
    role: "Head of Marketing",
    result: "Drove client subscriptions and society activations across residential and commercial verticals, achieving full occupancy across 50+ societies.",
    metrics: [
      { value: "50+", label: "Societies" },
      { value: "100%", label: "Occupancy" },
    ],
    accent: "#0287E7",
    tag: "Real Estate",
  },
  {
    year: "2019",
    company: "Mindwise Media Research",
    role: "Senior Zonal Coordinator",
    result: "Managed election survey operations and a 120-member field team across multiple zones, maintaining near-perfect accuracy under tight deadlines.",
    metrics: [
      { value: "120", label: "Team members" },
      { value: "99%", label: "Accuracy" },
    ],
    accent: "#0287E7",
    tag: "Research",
  },
  {
    year: "2018",
    company: "Commercial Direction",
    role: "Director & Cinematographer",
    result: "Directed and filmed commercial content for Unique Builders, eBay.in, and Square Animation Company — campaigns that crossed a million views.",
    metrics: [
      { value: "10+", label: "Ads produced" },
      { value: "1M+", label: "Total views" },
    ],
    accent: "#d97706",
    tag: "Film",
  },
  {
    year: "2017",
    company: "National Theatre",
    role: "Actor — Delhi Representative",
    result: "Represented Delhi at the national level in competitive theatre, earning recognition for performance craft — the foundation of MarkTale's storytelling DNA.",
    metrics: [
      { value: "National", label: "Level" },
      { value: "Award", label: "Winner" },
    ],
    accent: "#0287E7",
    tag: "Performance",
  },
];

const trustStats = [
  { value: "10+", label: "Years of excellence" },
  { value: "150+", label: "Brands scaled" },
  { value: "50+", label: "Major campaigns" },
  { value: "98%", label: "Success rate" },
];

/* =========================================================
   COUNT-UP
   ========================================================= */

function CountUp({ value, color }: { value: string; color: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
    const suffix = value.replace(/[0-9.]/g, "");
    if (isNaN(numeric)) { setDisplay(value); return; }
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = numeric / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numeric) { setDisplay(value); clearInterval(timer); }
      else setDisplay(Math.floor(start) + suffix);
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref} style={{ color }}>{display}</span>;
}

/* =========================================================
   VIDEO HERO — light theme, video anchored to top
   ========================================================= */

function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-black">
      {/* Blurred background fill — hides black bars on sides */}
      <video
        src="/founder/Awards-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover scale-110"
        style={{ filter: "blur(18px)", opacity: 0.45 }}
      />
      {/* Main video — full frame visible */}
      <video
        ref={videoRef}
        src="/founder/Awards-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-contain"
        style={{ objectPosition: "center center" }}
      />

      {/* Light-compatible overlay — subtle dark tint only at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      {/* Content — bottom-left */}
      <div className="absolute inset-0 flex flex-col justify-end px-6 pb-14 md:px-16 lg:px-24">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#38bdf8] text-xs font-semibold tracking-[0.2em] mb-4 uppercase"
          >
            A decade of proof
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-5"
          >
            Every milestone<br />
            <span className="text-[#0287E7]">earned, not given.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/70 text-sm md:text-base max-w-md leading-relaxed"
          >
            From a national theatre stage to scaling 150+ brands — this is the
            story of what relentless execution looks like.
          </motion.p>
        </div>
      </div>

      {/* Video controls — bottom right */}
      <div className="absolute bottom-5 right-5 flex gap-2">
        <button
          onClick={toggleMute}
          className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white hover:bg-black/50 transition-colors"
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
        <button
          onClick={togglePlay}
          className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white hover:bg-black/50 transition-colors"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   TRUST BAR — light bg
   ========================================================= */

function TrustBar() {
  return (
    <div className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24 py-8
                      grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-gray-200">
        {trustStats.map((s, i) => (
          <div key={i} className="text-center md:px-6">
            <p className="text-3xl md:text-4xl font-black">
              <CountUp value={s.value} color="#0287E7" />
            </p>
            <p className="text-gray-400 text-xs mt-1 tracking-wide">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   MILESTONE CARD — light theme
   ========================================================= */

function MilestoneCard({
  item,
  index,
}: {
  item: (typeof milestones)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
      className="group relative"
    >
      {/* Timeline connector line */}
      <div
        className="absolute left-[2.85rem] top-12 bottom-0 w-px hidden md:block"
        style={{ background: `linear-gradient(to bottom, ${item.accent}25, transparent 90%)` }}
      />

      <div className="flex flex-col md:flex-row gap-5 md:gap-8">

        {/* Year dot column */}
        <div className="flex md:flex-col items-center md:items-center gap-3 md:gap-1 md:w-24 shrink-0 pt-1">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black shrink-0 relative z-10 shadow-sm"
            style={{
              background: `${item.accent}12`,
              border: `2px solid ${item.accent}`,
              color: item.accent,
            }}
          >
            {item.year.slice(2)}
          </div>
          <p className="text-gray-400 text-xs font-medium">{item.year}</p>
        </div>

        {/* Card */}
        <div
          className="flex-1 rounded-2xl p-6 md:p-7 border border-gray-100 bg-white
                     shadow-sm hover:shadow-md transition-all duration-300
                     group-hover:border-gray-200"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = `${item.accent}30`;
            (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 24px ${item.accent}12`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "#f3f4f6";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.06)";
          }}
        >
          {/* Tag + role row */}
          <div className="flex items-center justify-between mb-3">
            <p
              className="text-xs font-semibold tracking-[0.1em]"
              style={{ color: item.accent }}
            >
              {item.role}
            </p>
            <span
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
              style={{
                background: `${item.accent}10`,
                color: item.accent,
              }}
            >
              {item.tag}
            </span>
          </div>

          {/* Company name */}
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-tight">
            {item.company}
          </h3>

          {/* Result */}
          <p className="text-gray-500 text-sm leading-relaxed mb-5">
            {item.result}
          </p>

          {/* Metrics */}
          <div className="flex gap-8 pt-4 border-t border-gray-50">
            {item.metrics.map((m, mi) => (
              <div key={mi}>
                <p className="text-xl font-black" style={{ color: item.accent }}>
                  {m.value}
                </p>
                <p className="text-gray-400 text-xs mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN
   ========================================================= */

export default function AwardsGrid() {
  const [filter, setFilter] = useState<string>("All");

  const years = ["All", "2024", "2023", "2021", "2019", "2018", "2017"];
  const filtered =
    filter === "All" ? milestones : milestones.filter((m) => m.year === filter);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ── Video Hero ── */}
      <VideoHero />

      {/* ── Trust Bar ── */}
      <TrustBar />

      {/* ── Timeline ── */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-24">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
            The track record
          </h2>
          <p className="text-gray-400 text-base max-w-md">
            Six years of tangible outcomes across automotive, real estate,
            food, research, and film.
          </p>
        </div>

        {/* Year filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {years.map((y) => {
            const active = filter === y;
            return (
              <button
                key={y}
                onClick={() => setFilter(y)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  background: active ? "#0287E7" : "#fff",
                  color: active ? "#fff" : "#6b7280",
                  border: active ? "1px solid #0287E7" : "1px solid #e5e7eb",
                  boxShadow: active ? "0 2px 8px #0287E730" : "none",
                }}
              >
                {y}
              </button>
            );
          })}
        </div>

        {/* List */}
        <div className="flex flex-col gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <MilestoneCard key={item.company} item={item} index={i} />
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="text-gray-300 text-sm py-16 text-center">
              No milestones for {filter}.
            </p>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-20
                        flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              Ready to be the next milestone?
            </h3>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Book a free strategy call. We'll audit your brand and show you
              exactly where the growth is.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3
                         rounded-xl bg-[#0287E7] text-white text-sm font-semibold
                         hover:bg-[#006bb3] transition-colors shadow-md shadow-blue-200"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-6 py-3
                         rounded-xl border border-gray-200 text-gray-600 text-sm font-medium
                         hover:border-gray-300 hover:text-gray-900 transition-all"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}