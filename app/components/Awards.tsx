"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  Medal,
  Star,
  Target,
  Zap,
  Crown,
  Shield,
} from "lucide-react";

const awards = [
  {
    icon: Trophy,
    title: "Agency Excellence Award",
    desc: "International Marketing Fiesta (IMF) Awards 2025",
  },
  {
    icon: Award,
    title: "Sustainable Marketing Campaign",
    desc: "Dell Technologies Forum ET Shark Awards 2025",
  },
  {
    icon: Medal,
    title: "Small Budget Event of the Year",
    desc: "Dell Technologies Experience Zone at Gartner Symposium WOW Awards Asia, 2024",
  },
  {
    icon: Star,
    title: "Effective Digital Marketing",
    desc: "Edvanza Mobile App & Web Promotion ACEF Global Customer Engagement Forum",
  },
  {
    icon: Target,
    title: "Experiential Marketing Agency",
    desc: "Agency of The Year EDCA 2023",
  },
  {
    icon: Zap,
    title: "Product Launch Of The Year",
    desc: "Dell Product Launch (Alienware) EDCA 2023",
  },
  {
    icon: Crown,
    title: "Government Event of The Year",
    desc: "TERI - World Sustainability Development Summit EDCA 2023",
  },
  {
    icon: Shield,
    title: "Leading Tech Marketing Agency",
    desc: "Marketing 2.0 Conference, Las Vegas, 2022",
  },
  {
    icon: Award,
    title: "Data-Driven Marketing",
    desc: "GitHub Academic Program ACEF Global Customer Engagement Forum",
  },
];

export default function Awards() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-12 grid-rows-12 gap-4 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-black rounded-full" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-16 lg:mb-0 lg:absolute lg:top-24 lg:left-12 lg:text-left lg:w-1/4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-heading font-bold text-kestone-black mb-2 uppercase">
            Awards & <br /> Recognitions
          </h2>
          <p className="text-gray-500 font-body">
            Testimony to Our Business Excellence
          </p>
        </motion.div>

        <div className="lg:ml-[25%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <award.icon
                className="w-16 h-16 text-kestone-red mb-6"
                strokeWidth={1.5}
              />
              <span className="text-xs text-gray-400 uppercase tracking-wider mb-2 block font-bold">
                {award.title}
              </span>
              <h3 className="text-sm font-heading font-bold text-kestone-black leading-snug max-w-xs mx-auto">
                {award.desc}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
