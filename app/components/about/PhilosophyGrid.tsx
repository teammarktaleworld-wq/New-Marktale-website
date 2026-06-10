"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Zap, Users } from "lucide-react";

const items = [
  {
    title: "Core Philosophy",
    subtitle: "Strategic Approach",
    desc: "We take a strategic, data-driven approach to marketing, blending traditional and digital techniques to create customized solutions for your brand.",
    bg: "bg-kestone-red text-white",
    text: "text-white/80",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    icon: Zap,
  },
  {
    title: "Performance",
    subtitle: "Measurable Impact",
    desc: "Our services are designed to deliver measurable results, helping you track and optimize your marketing efforts for maximum impact.",
    bg: "bg-neutral-900 text-white",
    text: "text-gray-400",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    icon: Brain,
  },
  {
    title: "Holistic",
    subtitle: "Seamless Integration",
    desc: "We seamlessly integrate traditional and digital marketing channels, ensuring a cohesive brand experience across all touchpoints.",
    bg: "bg-white border border-neutral-200",
    text: "text-neutral-600",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-3", // Full width for the last one
    icon: Users,
  },
];

export default function PhilosophyGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <span className="text-kestone-red font-bold tracking-widest uppercase text-sm mb-2 block">
            Our Methodology
          </span>
          <h2 className="text-5xl font-heading font-black text-kestone-black uppercase">
            Why We <span className="line-through text-gray-300">Exist</span>{" "}
            <br />
            <span className="text-kestone-red">Dominate.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className={`${item.colSpan} ${item.bg} p-6 md:p-10 flex flex-col justify-between rounded-3xl relative overflow-hidden group`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {item.icon && (
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity transform group-hover:scale-110 duration-500">
                  <item.icon size={120} />
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold uppercase tracking-wider mb-2 opacity-70">
                  {item.title}
                </h3>
                <h4 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  {item.subtitle}
                </h4>
              </div>

              <p className={`text-lg leading-relaxed font-body ${item.text}`}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
