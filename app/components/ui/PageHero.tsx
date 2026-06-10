"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  description?: string;
  bgImage?: string;
}

export default function PageHero({
  title,
  subtitle,
  description,
  bgImage,
}: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 bg-kestone-black text-white px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"
          style={{ opacity: 0.2 }}
        ></div>
      </div>

      {/* Optional BG Image Overlay */}
      {bgImage && (
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
          {/* Placeholder for future bg image implementation if needed */}
        </div>
      )}

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-kestone-red font-bold tracking-widest uppercase text-sm mb-4 block">
            {subtitle}
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl font-body leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>

      {/* Decorative Red Line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-kestone-red"
        initial={{ width: 0 }}
        animate={{ width: "20%" }}
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.div>
    </section>
  );
}
