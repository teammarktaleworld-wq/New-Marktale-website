"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Star,
  Award,
  Zap,
  Code,
  PenTool,
  TrendingUp,
  Search,
} from "lucide-react";

const departments = [
  { name: "Social Media Sorcerers", icon: Users },
  { name: "Digital Strategy Geniuses", icon: Brain }, // Using Brain again or finding similar
  { name: "Performance Marketing Ninjas", icon: TrendingUp },
  { name: "Creative Design & Video Wizards", icon: Palette }, // Palette is good
  { name: "Innovative Copywriting", icon: PenTool },
  { name: "SEO and Analytics Experts", icon: Search },
  { name: "Web Development Aces", icon: Code },
  { name: "Client Service Department", icon: Star },
];

// Imports for icons not in lucide 'live' set? I'll use standard ones.
import { Brain, Palette } from "lucide-react";

export default function TeamCulture() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-kestone-black mb-6">
            Team & Culture
          </h2>
          <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto">
            A powerhouse of 50+ creative minds with specialized departments
            dedicated to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dept, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center group"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-kestone-red transition-colors duration-300">
                <dept.icon
                  className="text-kestone-black group-hover:text-white transition-colors"
                  size={32}
                />
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-800">
                {dept.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
