"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AnnouncementBar() {
  const items = [...Array(10)].map((_, i) => (
    <div key={i} className="flex items-center px-8 gap-4 shrink-0">
      <span className="flex items-center gap-2 font-bold text-sm tracking-wide">
        🔥 Startup Building Plans starting at ₹15,000/month
      </span>
      <span className="text-white/40">|</span>
      <span className="flex items-center gap-2 font-medium text-sm">
        <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
        Limited-time offers available
      </span>
      <Link
        href="/contact"
        className="group flex items-center gap-1 text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-all border border-white/10 hover:border-white/30 backdrop-blur-sm"
      >
        Get Started{" "}
        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
      </Link>
      <span className="text-white/40">|</span>
    </div>
  ));

  return (
    <div className="relative bg-gradient-to-r from-[#0287E7] via-[#006bb3] to-[#0287E7] text-white overflow-hidden h-10 flex items-center z-50">
      {/* Gradient Overlay for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0287E7] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0287E7] to-transparent z-10 pointer-events-none" />

      <style jsx>{`
        @keyframes marquee-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-infinite {
          animation: marquee-infinite 120s linear infinite;
        }
        .animate-marquee-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="flex w-max animate-marquee-infinite whitespace-nowrap">
        {/* First Copy */}
        <div className="flex items-center shrink-0">{items}</div>
        {/* Second Copy (Identical) */}
        <div className="flex items-center shrink-0">{items}</div>
      </div>
    </div>
  );
}
