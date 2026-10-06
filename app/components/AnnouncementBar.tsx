// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { ArrowRight, Sparkles } from "lucide-react";

// export default function AnnouncementBar() {
//     const items = [...Array(10)].map((_, i) => (
//         <div key={i} className="flex items-center px-8 gap-4 shrink-0">
//             <span className="flex items-center gap-2 font-bold text-sm tracking-wide">
//                 {/* 🔥 Startup Building Plans starting at ₹15,000/month */}
//             </span>
//             <span className="text-white/40">|</span>
//             <span className="flex items-center gap-2 font-medium text-sm">
//                 <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
//                 Limited-time offers available
//             </span>
//             <Link
//                 href="/contact"
//                 className="group flex items-center gap-1 text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-all border border-white/10 hover:border-white/30 backdrop-blur-sm"
//             >
//                 Get Started <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
//             </Link>
//             <span className="text-white/40">|</span>
//         </div>
//     ));

//     return (
//         <div className="relative bg-gradient-to-r from-[#0287E7] via-[#006bb3] to-[#0287E7] text-white overflow-hidden h-10 flex items-center z-50">
//             {/* Gradient Overlay for smooth edges */}
//             <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0287E7] to-transparent z-10 pointer-events-none" />
//             <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0287E7] to-transparent z-10 pointer-events-none" />

//             <style jsx>{`
//                 @keyframes marquee-infinite {
//                     0% {
//                         transform: translateX(0);
//                     }
//                     100% {
//                         transform: translateX(-50%);
//                     }
//                 }
//                 .animate-marquee-infinite {
//                     animation: marquee-infinite 120s linear infinite;
//                 }
//                 .animate-marquee-infinite:hover {
//                     animation-play-state: paused;
//                 }
//             `}</style>

//             <div className="flex w-max animate-marquee-infinite whitespace-nowrap">
//                 {/* First Copy */}
//                 <div className="flex items-center shrink-0">
//                     {items}
//                 </div>
//                 {/* Second Copy (Identical) */}
//                 <div className="flex items-center shrink-0">
//                     {items}
//                 </div>
//             </div>
//         </div>
//     );
// }















"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Zap, TrendingUp, Gift, Star } from "lucide-react";

/* =========================================================
   TICKER ITEMS — conversion-focused, no fluff
   ========================================================= */

const TICKER_ITEMS = [
  {
    icon: <Gift className="w-4 h-4 text-yellow-300" />,
    text: "Book Your Free Consultation",
    href: "/contact",
  },
  {
    icon: <Sparkles className="w-4 h-4 text-yellow-300" />,
    text: "Free Brand Analysis — No Strings Attached",
    href: "/contact",
  },
  {
    icon: <Zap className="w-4 h-4 text-yellow-300" />,
    text: "Start Making Money with Your Brand",
    href: "/contact",
  },
  {
    icon: <TrendingUp className="w-4 h-4 text-yellow-300" />,
    text: "10× Your Revenue — Book a Strategy Call",
    href: "/contact",
  },
  {
    icon: <Star className="w-4 h-4 text-yellow-300" />,
    text: "Book a Live Demo — See Results Before You Pay",
    href: "/contact",
  },
  {
    icon: <Sparkles className="w-4 h-4 text-yellow-300" />,
    text: "Get a Free Growth Roadmap for Your Business",
    href: "/contact",
  },
  {
    icon: <Zap className="w-4 h-4 text-yellow-300" />,
    text: "Turn Followers Into Paying Customers — Start Today",
    href: "/contact",
  },
  {
    icon: <TrendingUp className="w-4 h-4 text-yellow-300" />,
    text: "150+ Brands Scaled — Yours Could Be Next",
    href: "/contact",
  },
];

/* =========================================================
   SINGLE TICKER ITEM
   ========================================================= */

function TickerItem({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
}) {
  return (
    <div className="flex items-center gap-3 px-6 shrink-0">
      {/* Dot separator */}
      <span className="w-1 h-1 rounded-full bg-white/30 shrink-0" />

      {/* Icon + text */}
      <span className="flex items-center gap-2 text-sm font-semibold tracking-wide whitespace-nowrap">
        {icon}
        {text}
      </span>

      {/* CTA pill */}
      <Link
        href={href}
        className="
          group flex items-center gap-1
          text-[11px] font-bold tracking-wider uppercase
          bg-white text-[#0287E7]
          px-3 py-1 rounded-full
          hover:bg-yellow-300 hover:text-black
          transition-all duration-200
          border border-white/30
          whitespace-nowrap
          shrink-0
        "
      >
        Get Started
        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-150" />
      </Link>
    </div>
  );
}

/* =========================================================
   ANNOUNCEMENT BAR
   ========================================================= */

export default function AnnouncementBar() {
  // Double the array for seamless infinite loop
  const allItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="relative bg-gradient-to-r from-[#0287E7] via-[#005fa3] to-[#0287E7] text-white overflow-hidden h-10 flex items-center z-50">

      {/* Edge fade overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0287E7] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0287E7] to-transparent z-10 pointer-events-none" />

      <style jsx>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          animation: ticker 40s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="ticker-track flex w-max items-center">
        {allItems.map((item, i) => (
          <TickerItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
}