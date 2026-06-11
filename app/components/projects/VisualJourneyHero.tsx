"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Users, Award } from "lucide-react";

const milestones = [
  {
    year: "2014",
    event: "The Beginning",
    description: "Started with a vision to transform brands",
  },
  {
    year: "2017",
    event: "Breaking Barriers",
    description: "Crossed 10+ brands milestone",
  },
  {
    year: "2020",
    event: "Global Expansion",
    description: "Expanded to Canada, USA, UAE",
  },
  {
    year: "2023",
    event: "The Restart",
    description: "Reborn with renewed passion and purpose",
  },
  {
    year: "2026",
    event: "The Future",
    description: "Building the next generation of iconic brands",
  },
];

const achievements = [
  { icon: Users, number: "500K+", label: "Lives Touched" },
  { icon: Award, number: "30+", label: "Brands Built" },
  { icon: TrendingUp, number: "10M+", label: "Reach Generated" },
  { icon: Sparkles, number: "∞", label: "Creative Ideas" },
];

export default function VisualJourneyHero() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-kestone-black via-gray-900 to-kestone-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-kestone-red rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Main Hero Content */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-kestone-red/20 border border-kestone-red rounded-full text-kestone-red font-bold text-sm uppercase tracking-widest">
              <Sparkles size={16} />
              Our Visual Journey
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From Legacy to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-kestone-red via-pink-500 to-purple-500">
              Legendary
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Every brand we've built carries a piece of our soul. Every campaign
            tells a story. Every creative piece is a testament to our unwavering
            commitment to excellence.
          </motion.p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-kestone-red/20 rounded-full group-hover:bg-kestone-red/30 transition-colors duration-300">
                <achievement.icon className="text-kestone-red" size={28} />
              </div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                {achievement.number}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide font-body">
                {achievement.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              The Journey That Shaped Us
            </h2>
            <p className="text-gray-400 font-body">
              Every milestone, every challenge, every triumph—this is our story
            </p>
          </div>

          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-kestone-red via-purple-500 to-kestone-red opacity-30" />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"} text-center md:text-left`}
                >
                  <div className="inline-block px-4 py-2 bg-kestone-red/20 rounded-full mb-3">
                    <span className="text-kestone-red font-heading font-bold text-lg">
                      {milestone.year}
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    {milestone.event}
                  </h3>
                  <p className="text-gray-400 font-body">
                    {milestone.description}
                  </p>
                </div>

                {/* Center Dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-6 h-6 bg-kestone-red rounded-full border-4 border-kestone-black shadow-lg shadow-kestone-red/50" />
                  <div className="absolute inset-0 w-6 h-6 bg-kestone-red rounded-full animate-ping opacity-75" />
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emotional Closing */}
        <motion.div
          className="text-center mt-24 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-8 md:p-12 bg-gradient-to-br from-kestone-red/10 to-purple-500/10 rounded-3xl border border-kestone-red/20 backdrop-blur-sm">
            <p className="text-xl md:text-2xl text-white font-body leading-relaxed italic">
              "This isn't just business. This is our life's work. Every brand we
              touch becomes part of our legacy. Every success story fuels our
              passion. We didn't just restart—we{" "}
              <span className="font-bold text-kestone-red">reignited</span>
              with a fire that burns brighter than ever."
            </p>
            <div className="mt-6 text-gray-400 font-heading">
              — The MarkTale Team
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
