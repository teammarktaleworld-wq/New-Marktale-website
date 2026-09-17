
//remove name

"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────
type ColorScheme = {
  primary: string;
  tagline: string;
  title: string;
  highlight: string;
  subtitle: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  gradFrom: string;
  gradMid: string;
  gradTo: string;
};

type FounderData = {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
  video: string;
  video2: string;
  colorScheme: ColorScheme;
  stats: { value: string; label: string }[];
};

type MediaType = "image" | "video" | "video2";
type Slide = {
  founderId: number;
  mediaType: MediaType;
  founderIndex: number;
  tagline: string;
  heading: string;
  highlight: string;
  subtitle: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

// ─── Color Schemes ────────────────────────────────────────────────────────────
const colorSchemes: Record<string, ColorScheme> = {
  blue: {
    primary: "from-blue-600 via-blue-500 to-cyan-500",
    tagline: "BLUE OCEAN STRATEGY",
    title: "Dominate the",
    highlight: "Digital Frontier",
    subtitle: "Where vision meets velocity",
    description: "We transform ambitious ideas into market-leading brands. Strategic storytelling meets data-driven growth.",
    ctaPrimary: "Launch Vision",
    ctaSecondary: "Explore Strategy",
    gradFrom: "#2563eb",
    gradMid: "#3b82f6",
    gradTo: "#06b6d4",
  },
  yellow: {
    primary: "from-yellow-500 via-amber-500 to-orange-500",
    tagline: "REBEL ECONOMICS",
    title: "Break the",
    highlight: "Status Quo",
    subtitle: "Bold moves create bold empires",
    description: "Disruptive strategies for founders who dare to be different. Bold colors, bolder results.",
    ctaPrimary: "Start Rebellion",
    ctaSecondary: "Read Manifesto",
    gradFrom: "#eab308",
    gradMid: "#f59e0b",
    gradTo: "#f97316",
  },
};

// ─── Founder Data ─────────────────────────────────────────────────────────────
const founderData: FounderData[] = [
  {
    id: 1,
    // name: "Kautilya Kalyan",
    name: "MarkTale Team",
    title: "Founder & CEO",
    quote: "Great brands aren't built in comfort zones. They're forged in decisive action.",
    image: "/founder/founderimage.jpeg",
    video: "/founder/foundervideo.mp4",
    video2: "/founder/foundervideo2.mp4",
    colorScheme: colorSchemes.blue,
    stats: [
      { value: "10x", label: "Growth" },
      { value: "150+", label: "Brands" },
      { value: "98%", label: "Success" },
    ],
  },
  {
    id: 2,
    name: "MarkTale Team",
    title: "Chief Disruptor",
    quote: "The biggest risk is playing it safe. Disrupt or be disrupted — there's no middle ground.",
    image: "/founder/founderimage.jpeg",
    video: "/founder/foundervideo.mp4",
    video2: "/founder/foundervideo2.mp4",
    colorScheme: colorSchemes.yellow,
    stats: [
      { value: "15x", label: "ROI" },
      { value: "200+", label: "Campaigns" },
      { value: "45+", label: "Awards" },
    ],
  },
];

// ─── Per-slide unique text ────────────────────────────────────────────────────
const slideTextData: {
  tagline: string; heading: string; highlight: string;
  subtitle: string; description: string; ctaPrimary: string; ctaSecondary: string;
}[] = [
    {
      tagline: "MEET THE VISIONARY",
      heading: "Dominate the",
      highlight: "Digital Frontier",
      subtitle: "Where vision meets velocity",
      description: "We transform ambitious ideas into market-leading brands. Strategic storytelling meets data-driven growth.",
      ctaPrimary: "Launch Vision",
      ctaSecondary: "Explore Strategy",
    },
    {
      tagline: "BLUE OCEAN STRATEGY",
      heading: "Build a",
      highlight: "Legacy Brand",
      subtitle: "Data-driven storytelling at scale",
      description: "From strategy to execution — we architect brands that don't just compete, they redefine the market entirely.",
      ctaPrimary: "Start Building",
      ctaSecondary: "View Our Work",
    },
    {
      tagline: "FOUNDER'S JOURNEY",
      heading: "Scale Beyond",
      highlight: "Your Limits",
      subtitle: "Proven systems for 10× growth",
      description: "150+ brands scaled. 98% success rate. We don't follow trends — we create them with precision and purpose.",
      ctaPrimary: "Let's Scale",
      ctaSecondary: "See Results",
    },
    {
      tagline: "MEET THE DISRUPTOR",
      heading: "Break the",
      highlight: "Status Quo",
      subtitle: "Bold moves create bold empires",
      description: "Disruptive strategies for founders who dare to be different. Bold colors, bolder results.",
      ctaPrimary: "Start Rebellion",
      ctaSecondary: "Read Manifesto",
    },
    {
      tagline: "REBEL ECONOMICS",
      heading: "Disrupt or",
      highlight: "Be Disrupted",
      subtitle: "No middle ground. Only momentum.",
      description: "200+ campaigns. 15× average ROI. We engineer market disruptions that competitors scramble to understand.",
      ctaPrimary: "Disrupt Now",
      ctaSecondary: "Our Strategy",
    },
    {
      tagline: "AWARD-WINNING IMPACT",
      heading: "Win the",
      highlight: "Market Game",
      subtitle: "45+ industry awards and counting",
      description: "Recognition follows results. From global campaigns to hyper-local execution — we turn bold ideas into market domination.",
      ctaPrimary: "Claim Victory",
      ctaSecondary: "View Awards",
    },
  ];

// Founder "image" slide COMMENTED OUT PER REQUEST — only video slots remain in rotation
const allSlides: Slide[] = founderData.flatMap((f, fi) =>
  (["video", "video2"] as MediaType[]).map((mediaType, mi) => {
    // mi is 0 or 1 here (video, video2) — offset by +1 to skip the "image" text entry (index 0)
    const si = fi * 3 + mi + 1;
    return { founderId: f.id, mediaType, founderIndex: fi, ...slideTextData[si] };
  })
);
const TOTAL = allSlides.length;
const IMAGE_HOLD_MS = 2500;

// ─── OPTIMIZATION 1: VideoProgress — DOM-only updates, zero React state ───────
const VideoProgress = React.memo(({ videoRef }: { videoRef: React.RefObject<HTMLVideoElement | null> }) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tick = () => {
      if (barRef.current && v.duration) {
        barRef.current.style.width = `${(v.currentTime / v.duration) * 100}%`;
      }
    };
    v.addEventListener("timeupdate", tick);
    return () => v.removeEventListener("timeupdate", tick);
  }, [videoRef]);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 z-20">
      <div ref={barRef} className="h-full bg-white/85" style={{ width: "0%" }} />
    </div>
  );
});
VideoProgress.displayName = "VideoProgress";

// ─── LiveBadge ────────────────────────────────────────────────────────────────
const LiveBadge = React.memo(({ label }: { label: string }) => (
  <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2 py-0.5 bg-black/55 backdrop-blur-sm rounded-full">
    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
    <span className="text-white text-[9px] font-bold tracking-widest">{label}</span>
  </div>
));
LiveBadge.displayName = "LiveBadge";

// ─── OPTIMIZATION 2: Particles — memoized, stable deterministic values, CSS animation ─
interface ParticleItem {
  left: string;
  top: string;
  delay: string;
  duration: string;
}

const PARTICLE_COUNT = 10;

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 43758.5453123;
  return x - Math.floor(x);
}

const PARTICLES: ParticleItem[] = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  left: `${(seededRandom(i * 12.9898) * 100).toFixed(2)}%`,
  top: `${(seededRandom(i * 78.233 + 1) * 100).toFixed(2)}%`,
  delay: `${(seededRandom(i * 37.719 + 2) * 7).toFixed(2)}s`,
  duration: `${(3.5 + seededRandom(i * 93.989 + 3) * 2.5).toFixed(2)}s`,
}));

const Particles = React.memo(({ color }: { color: string }) => {
  return (
    <>
      <style>{`
        @keyframes particle-float {
          0%   { transform: translateY(0)   scale(0); opacity: 0; }
          20%  { opacity: 0.55; }
          80%  { opacity: 0.55; }
          100% { transform: translateY(-140px) scale(1.6); opacity: 0; }
        }
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          animation: particle-float var(--dur) var(--delay) infinite ease-in-out;
        }
      `}</style>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              background: color,
              left: p.left,
              top: p.top,
              "--delay": p.delay,
              "--dur": p.duration,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </>
  );
});
Particles.displayName = "Particles";

// ─── OPTIMIZATION 3: SlideCard — memoized, CSS hover transitions ──────────────
const SlideCard = React.memo(({
  slideIdx,
  domPosition,
  centerIdx,
  onMediaEnd,
}: {
  slideIdx: number;
  domPosition: number;
  centerIdx: number;
  onMediaEnd: () => void;
}) => {
  const isCenter = domPosition === 1;
  const slide = allSlides[slideIdx];
  const founder = founderData[slide.founderIndex];
  const s = founder.colorScheme;

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const firedRef = useRef(false);

  useEffect(() => {
    if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
    firedRef.current = false;

    const v = videoRef.current;
    if (!isCenter) {
      if (v) { v.pause(); v.currentTime = 0; }
      return;
    }

    if (slide.mediaType === "image") {
      timerRef.current = setTimeout(() => {
        if (!firedRef.current) { firedRef.current = true; onMediaEnd(); }
      }, IMAGE_HOLD_MS);
    } else {
      if (v) {
        v.currentTime = 0;
        const p = v.play();
        if (p !== undefined) {
          p.catch(() => {
            timerRef.current = setTimeout(() => {
              if (!firedRef.current) { firedRef.current = true; onMediaEnd(); }
            }, 5000);
          });
        }
      }
    }

    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [centerIdx, isCenter]);

  const handleVideoEnd = useCallback(() => {
    if (isCenter && !firedRef.current) { firedRef.current = true; onMediaEnd(); }
  }, [isCenter, onMediaEnd]);

  const videoSrc = slide.mediaType === "video2" ? founder.video2 : founder.video;
  const videoLabel = slide.mediaType === "video2" ? "2 / 2" : "1 / 2";

  // OPTIMIZATION: CSS transitions for scale/opacity instead of Framer Motion
  const cardStyle: React.CSSProperties = {
    zIndex: isCenter ? 20 : 10,
    transform: isCenter ? "scale(1)" : "scale(0.79)",
    opacity: isCenter ? 1 : 0.4,
    transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease",
    position: "relative",
    cursor: "pointer",
    flexShrink: 0,
  };

  return (
    <div
      style={cardStyle}
      className={`slide-card${isCenter ? " slide-card--center" : ""}`}
    >
      <style>{`
        .slide-card:hover { transform: scale(0.82) !important; }
        .slide-card--center:hover { transform: scale(1.015) !important; }
        .slide-card-name { transition: transform 0.26s ease; }
        .slide-card:hover .slide-card-name { transform: translateY(-8px); }
        .slide-card-label { transition: transform 0.26s ease; }
        .slide-card:hover .slide-card-label { transform: translateX(4px); }
        .slide-card-title { transition: opacity 0.26s ease; }
        .slide-card:hover .slide-card-title { opacity: 1 !important; }
      `}</style>

      {isCenter && (
        <motion.div
          className="absolute -inset-[3px] rounded-[22px] blur-sm pointer-events-none"
          style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}
          animate={{ opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}

      <div className={[
        "relative rounded-2xl overflow-hidden shadow-2xl",
        isCenter
          ? "w-[185px] h-[310px] sm:w-[215px] sm:h-[360px] md:w-[255px] md:h-[420px] lg:w-[275px] lg:h-[455px]"
          : "w-[125px] h-[235px] sm:w-[148px] sm:h-[275px] md:w-[178px] md:h-[322px] lg:w-[195px] lg:h-[354px]",
      ].join(" ")}>

        {/* Image — COMMENTED OUT PER REQUEST: founder photo hidden */}
        {/* {slide.mediaType === "image" && (
          <>
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 80vw, 320px"
              priority={isCenter}
              loading={isCenter ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
            {isCenter && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 overflow-hidden z-20">
                <motion.div
                  key={`imgbar-${centerIdx}`}
                  className="h-full bg-white/85"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: IMAGE_HOLD_MS / 1000, ease: "linear" }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            )}
          </>
        )} */}

        {/* Video — OPTIMIZATION: preload="metadata", key forces src swap */}
        {(slide.mediaType === "video" || slide.mediaType === "video2") && (
          <>
            <video
              key={`vid-${slideIdx}`}
              ref={videoRef}
              src={videoSrc}
              className="w-full h-full object-cover"
              muted
              playsInline
              // OPTIMIZATION: only center card preloads; side cards defer
              preload={isCenter ? "auto" : "metadata"}
              onEnded={handleVideoEnd}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
            {isCenter && <LiveBadge label={videoLabel} />}
            {isCenter && <VideoProgress videoRef={videoRef} />}
          </>
        )}

        {/* Name overlay — COMMENTED OUT PER REQUEST: founder name/title hidden */}
        {/* <div className="slide-card-name absolute inset-0 flex flex-col justify-end p-3 sm:p-4 text-white pointer-events-none z-20">
          <div className="slide-card-label flex items-center gap-1.5 mb-0.5">
            <div className="w-4 h-px bg-white/70" />
            <span className="text-[8px] font-bold tracking-[0.2em] uppercase opacity-75">Founder</span>
          </div>
          <h3 className="slide-card-label text-xs sm:text-sm md:text-base font-bold leading-tight">
            {founder.name}
          </h3>
          <p className="slide-card-title text-[9px] sm:text-[10px] text-white/60 mt-0.5" style={{ opacity: 0.55 }}>
            {founder.title}
          </p>
        </div> */}
      </div>
    </div>
  );
});
SlideCard.displayName = "SlideCard";

// ─── OPTIMIZATION 4: Memoized left-panel subcomponents ───────────────────────
const HeroStats = React.memo(({ stats, gradFrom, gradTo }: {
  stats: FounderData["stats"];
  gradFrom: string;
  gradTo: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.23 }}
    className="flex gap-6 sm:gap-10 pt-1"
  >
    {stats.map((stat, i) => (
      // OPTIMIZATION: whileHover replaced with CSS
      <div key={i} className="hero-stat" style={{ cursor: "default" }}>
        <style>{`.hero-stat { transition: transform .18s ease; } .hero-stat:hover { transform: translateY(-4px); }`}</style>
        <p className="text-2xl sm:text-3xl font-black" style={{
          background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          {stat.value}
        </p>
        <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">{stat.label}</p>
      </div>
    ))}
  </motion.div>
));
HeroStats.displayName = "HeroStats";

const HeroCTAs = React.memo(({ ctaPrimary, ctaSecondary, gradFrom, gradTo }: {
  ctaPrimary: string;
  ctaSecondary: string;
  gradFrom: string;
  gradTo: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.27 }}
    className="flex flex-wrap gap-3 pt-1"
  >
    {/* OPTIMIZATION: whileHover/whileTap replaced with CSS */}
    <style>{`
      .cta-primary { transition: transform .15s ease, box-shadow .15s ease; }
      .cta-primary:hover { transform: scale(1.03); }
      .cta-primary:active { transform: scale(0.97); }
      .cta-secondary { transition: transform .15s ease, box-shadow .15s ease; }
      .cta-secondary:hover { transform: scale(1.03); }
      .cta-secondary:active { transform: scale(0.97); }
    `}</style>
    <Link
      href="/contact"
      className="cta-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold shadow-md hover:shadow-lg"
      style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})` }}
    >
      {ctaPrimary}
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
    <Link
      href="/work"
      className="cta-secondary inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-semibold shadow-sm hover:shadow-md"
    >
      {ctaSecondary}
    </Link>
  </motion.div>
));
HeroCTAs.displayName = "HeroCTAs";

// ─── OPTIMIZATION 5: HeroBackground — separate memoized component ─────────────
const HeroBackground = React.memo(({ founderIndex, gradFrom, gradTo }: {
  founderIndex: number;
  gradFrom: string;
  gradTo: string;
}) => (
  <>
    <AnimatePresence mode="wait">
      <motion.div
        key={`bg-${founderIndex}`}
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 80% 60% at 70% 40%, ${gradFrom}0a, transparent 70%)` }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: 0.9 }}
      />
    </AnimatePresence>

    <div
      className="absolute top-0 -left-28 w-[480px] h-[480px] rounded-full pointer-events-none"
      style={{
        background: `radial-gradient(circle, ${gradFrom}13, transparent)`,
        filter: "blur(40px)",
      }}
    />
    <div
      className="absolute -bottom-24 -right-24 w-[560px] h-[560px] rounded-full pointer-events-none"
      style={{
        background: `radial-gradient(circle, ${gradTo}10, transparent)`,
        filter: "blur(40px)",
      }}
    />
  </>
));
HeroBackground.displayName = "HeroBackground";

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function ModernHeroSection() {
  const [centerIdx, setCenterIdx] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in history) history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);

  const currentSlide = allSlides[centerIdx];
  const currentFounder = founderData[currentSlide.founderIndex];
  const s = currentFounder.colorScheme;

  const goNext = useCallback(() => setCenterIdx((p) => (p + 1) % TOTAL), []);
  const goPrev = useCallback(() => setCenterIdx((p) => (p - 1 + TOTAL) % TOTAL), []);
  const goToFounder = useCallback((fi: number) => setCenterIdx(fi * 2), []);

  const handleMediaEnd = useCallback(() => {
    setCenterIdx((p) => (p + 1) % TOTAL);
  }, []);

  const leftIdx = (centerIdx - 1 + TOTAL) % TOTAL;
  const rightIdx = (centerIdx + 1) % TOTAL;

  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden">

      <HeroBackground
        founderIndex={currentSlide.founderIndex}
        gradFrom={s.gradFrom}
        gradTo={s.gradTo}
      />

      <Particles color={s.gradFrom} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-20 sm:pt-24 lg:pt-28 pb-10">
        <div className="min-h-[calc(100vh-80px)] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center w-full">

            {/* ── LEFT: text ── */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`txt-${centerIdx}`}
                initial={{ opacity: 0, x: -26 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 26 }}
                transition={{ duration: 0.38, ease: "easeOut" }}
                className="space-y-4 sm:space-y-5 order-2 lg:order-1"
              >
                {/* Tagline */}
                <motion.span
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
                  className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold tracking-widest border"
                  style={{
                    background: `linear-gradient(135deg, ${s.gradFrom}12, ${s.gradTo}12)`,
                    borderColor: `${s.gradFrom}2e`,
                    color: s.gradFrom,
                  }}
                >
                  {currentSlide.tagline}
                </motion.span>

                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                  className="text-[clamp(1.9rem,5vw,3.7rem)] font-black leading-[1.12] tracking-tight"
                >
                  <span className="text-gray-900">{currentSlide.heading}</span>
                  <br />
                  <span style={{
                    background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradMid}, ${s.gradTo})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                    {currentSlide.highlight}
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
                  className="text-sm sm:text-base md:text-lg font-semibold"
                  style={{
                    background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {currentSlide.subtitle}
                </motion.p>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.19 }}
                  className="text-gray-500 text-sm leading-relaxed max-w-[420px]"
                >
                  {currentSlide.description}
                </motion.p>

                {/* Stats — memoized */}
                <HeroStats
                  stats={currentFounder.stats}
                  gradFrom={s.gradFrom}
                  gradTo={s.gradTo}
                />

                {/* CTAs — memoized */}
                <HeroCTAs
                  ctaPrimary={currentSlide.ctaPrimary}
                  ctaSecondary={currentSlide.ctaSecondary}
                  gradFrom={s.gradFrom}
                  gradTo={s.gradTo}
                />

                {/* Quote */}
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.32 }}
                  className="pt-4 border-t border-gray-100"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs italic leading-relaxed">&ldquo;{currentFounder.quote}&rdquo;</p>
                      <p className="text-gray-800 text-xs font-semibold mt-1.5">
                        {currentFounder.name}
                        <span className="text-gray-400 font-normal ml-1.5">— {currentFounder.title}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* ── RIGHT: carousel ── */}
            <motion.div
              initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-end justify-center gap-2 sm:gap-3 md:gap-4">
                {([leftIdx, centerIdx, rightIdx] as const).map((slideIdx, domPos) => (
                  <SlideCard
                    key={domPos}
                    slideIdx={slideIdx}
                    domPosition={domPos}
                    centerIdx={centerIdx}
                    onMediaEnd={handleMediaEnd}
                  />
                ))}
              </div>

              {/* Nav */}
              <div className="flex items-center justify-center gap-4 mt-5 sm:mt-6">
                <button
                  onClick={goPrev}
                  aria-label="Previous slide"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow active:scale-95"
                >
                  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex gap-2 items-center">
                  {founderData.map((founder, i) => {
                    const isActive = currentSlide.founderIndex === i;
                    return (
                      <button
                        key={i}
                        onClick={() => goToFounder(i)}
                        aria-label={founder.name}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: isActive ? 24 : 8,
                          height: 8,
                          background: isActive ? founder.colorScheme.gradFrom : "#d1d5db",
                        }}
                      />
                    );
                  })}
                </div>

                <button
                  onClick={goNext}
                  aria-label="Next slide"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow active:scale-95"
                >
                  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Slide-within-founder indicators — "Photo" removed since founder image slide is commented out */}
              <div className="flex items-center justify-center gap-3 mt-3">
                {(["Video 1", "Video 2"] as const).map((label, i) => {
                  const activeSlotWithinFounder = centerIdx % 2;
                  const isActiveSlot = activeSlotWithinFounder === i;
                  return (
                    <button
                      key={i}
                      onClick={() => setCenterIdx(currentSlide.founderIndex * 2 + i)}
                      className="flex items-center gap-1.5"
                    >
                      <div
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: isActiveSlot ? 16 : 8,
                          height: 8,
                          background: isActiveSlot ? s.gradFrom : "#d1d5db",
                        }}
                      />
                      <span
                        className="text-[10px] transition-colors duration-200"
                        style={{ color: isActiveSlot ? s.gradFrom : "#9ca3af" }}
                      >
                        {label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
