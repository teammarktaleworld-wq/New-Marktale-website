"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We dive deep into your business model, audit existing assets, and identify growth bottlenecks.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "We engineer a custom roadmap combining tech stack selection, channel strategy, and content plan.",
  },
  {
    num: "03",
    title: "Execution",
    desc: "Our agile pods deploy rapid sprints—launching campaigns, building featured, and shipping code.",
  },
  {
    num: "04",
    title: "Optimization",
    desc: "We analyze performance data in real-time, iterating to maximize ROI and scale what works.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-24 bg-kestone-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-kestone-red font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            How We <span className="text-gray-500">Deliver Results</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-800 -z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10 bg-kestone-black text-center group"
            >
              <div className="w-24 h-24 mx-auto bg-neutral-900 border-4 border-kestone-black rounded-full flex items-center justify-center text-3xl font-heading font-bold text-gray-500 mb-8 group-hover:border-kestone-red group-hover:text-white transition-all duration-500 shadow-xl">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
