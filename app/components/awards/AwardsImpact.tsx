"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AwardsImpact() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-heading font-bold mb-8 text-kestone-black">
            More Than Just Trophies
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-body mb-12">
            While we appreciate industry recognition, our true reward is the
            tangible impact we create for our clients. Every award listed here
            represents a business transformed, a revenue target smashed, or a
            brand elevated to new heights.
          </p>
          <div className="p-8 bg-neutral-50 rounded-2xl border border-gray-100">
            <blockquote className="text-2xl font-heading italic text-gray-700 leading-relaxed">
              &quot;The creative excellence MarkTale brings to the table is
              unmatched. They don&apos;t just win awards; they win market
              share.&quot;
            </blockquote>
            <div className="mt-8 font-bold text-kestone-black uppercase tracking-widest text-sm">
              — Marketing Director, Volvo Cars India
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
