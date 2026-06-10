"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FounderQuote() {
  return (
    <section className="py-24 bg-neutral-50 border-y border-neutral-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Visual - Minimalist Portrait placeholder */}
          <motion.div
            className="w-full md:w-1/3"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[3/4] bg-neutral-200 relative overflow-hidden grayscale contrast-125 group hover:grayscale-0 transition-all duration-500">
              <Image
                src="/images/kautilya_kalyan.jpeg"
                alt="Kautilya Kalyan - Founder & Visionary"
                fill
                className="object-cover"
              />
              {/* Overlay gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full">
                <h3 className="text-white font-heading font-bold text-xl">
                  Kautilya Kalyan
                </h3>
                <p className="text-neutral-300 text-sm uppercase tracking-widest">
                  Founder & Visionary
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-6xl text-kestone-red font-serif mb-6 opacity-30">
              &quot;
            </div>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-tight text-neutral-900 mb-8">
              The future of marketing isn&apos;t about shouting louder.
              It&apos;s about whispering the right message to the right person
              at the exact right time.{" "}
              <span className="text-kestone-red">
                AI makes that possible at scale.
              </span>
            </blockquote>
            <p className="text-lg text-neutral-500 font-body leading-relaxed">
              With 13+ years transforming brands across real estate, SaaS, and
              automotive, I founded MarkTale to bridge the gap between creative
              ambition and data reality. We are the partners I always wished I
              had.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
