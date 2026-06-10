"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center bg-kestone-black text-white overflow-hidden px-6 pt-44"
    >
      {/* Background Grid - faint */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center"
        style={{ y, opacity }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-heading font-black leading-tight tracking-tighter mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Mark<span className="text-kestone-red">Tale</span> – AI Powered
          Marketing Agency
        </motion.h1>

        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-400">
            Helping Brands <span className="text-white">Grow</span>
          </h2>
        </motion.div>

        <motion.div
          className="mt-12 text-lg md:text-xl text-gray-500 max-w-4xl mx-auto font-body leading-relaxed space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p>
            MarkTale is an AI powered pioneering advertising and marketing
            company dedicated to helping businesses of all sizes achieve their
            maximum potential through innovative and effective marketing
            strategies. We are committed to driving brand visibility, customer
            engagement, and lead generation for its clients.
          </p>
          <p className="text-white font-medium">
            What sets us apart is our unwavering dedication to our craft. With
            specialized departments focused on their respective areas of
            expertise, we delve deep into each project to ensure every detail is
            meticulously crafted.
          </p>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="h-24 w-1 bg-kestone-red mx-auto animate-bounce"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
