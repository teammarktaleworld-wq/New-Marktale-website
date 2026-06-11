"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Award,
  Star,
  Mic,
  Briefcase,
  Video,
  Sparkles,
  Calendar,
  ArrowRight,
  TrendingUp,
  Users,
  Globe,
  Zap,
  Heart,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const achievements = [
  {
    icon: Star,
    title: "Founder & Scale",
    desc: "Successfully founded and scaled MarkTale, launching multiple brands including Delhi059 by Chef Kanishk, TripTale, Dee Cee Pearls, and Down Ridge.",
    year: "2024",
    impact: "4 Brands",
    color: "blue",
    metric: "+500% Growth",
  },
  {
    icon: Trophy,
    title: "Volvo Cars India",
    desc: "Led high-impact digital marketing for Volvo Cars India, driving campaigns across web, SEO/SEM, email, social media, and display channels.",
    year: "2023",
    impact: "300% ROI",
    color: "yellow",
    metric: "10x ROAS",
  },

  {
    icon: Award,
    title: "Kamalraj Group",
    desc: "Headed marketing for Kamalraj Group (residential and commercial), increasing client subscriptions and activating new societies.",
    year: "2021",
    impact: "50+ Societies",
    color: "black",
    metric: "100% Occupancy",
  },
  {
    icon: Mic,
    title: "Mindwise Media Research",
    desc: "Managed election surveys and a 120-member field team as Senior Zonal Coordinator at Mindwise Media Research Unit.",
    year: "2019",
    impact: "120 Members",
    color: "yellow",
    metric: "99% Accuracy",
  },
  {
    icon: Video,
    title: "Commercial Direction",
    desc: "Directed and filmed commercial and promotional content, including ads for Unique Builders, eBay.in, and Square Animation Company.",
    year: "2018",
    impact: "10+ Ads",
    color: "blue",
    metric: "1M+ Views",
  },
  {
    icon: Star,
    title: "National Theatre Actor",
    desc: "Represented Delhi at the national level as a theatre actor, demonstrating recognized performance skills.",
    year: "2017",
    impact: "National Level",
    color: "black",
    metric: "Award Winning",
  },
];

const stats = [
  {
    value: "10+",
    label: "Years of Excellence",
    icon: TrendingUp,
    color: "blue",
    trend: "Est. 2014",
  },
  {
    value: "50+",
    label: "Major Campaigns",
    icon: Globe,
    color: "yellow",
    trend: "+20 this year",
  },
  {
    value: "150+",
    label: "Brands Impacted",
    icon: Users,
    color: "blue",
    trend: "Growing",
  },
  {
    value: "98%",
    label: "Success Rate",
    icon: CheckCircle,
    color: "black",
    trend: "Top 1%",
  },
];

export default function AwardsGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const years = ["All", "2024", "2023", "2022", "2021", "2019", "2018", "2017"];
  const filteredAchievements =
    selectedYear === "All" || !selectedYear
      ? achievements
      : achievements.filter((item) => item.year === selectedYear);

  return (
    <section
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      id="achievements"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/30 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm tracking-wide">
              THE PATH TO EXCELLENCE
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-[1.2] tracking-tight">
            Milestones that
            <span className="block text-blue-600 mt-2">define us.</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-4">
            A decade of turning challenges into achievements
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20"
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} whileHover={{ y: -5 }} className="group">
              <div className="relative bg-white border border-gray-200 rounded-2xl p-5 text-center shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div
                  className={`w-12 h-12 rounded-xl ${
                    stat.color === "blue"
                      ? "bg-blue-600"
                      : stat.color === "yellow"
                        ? "bg-yellow-500"
                        : "bg-black"
                  } flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-3xl font-bold text-black">{stat.value}</p>
                  <span
                    className={`text-xs font-semibold px-1.5 py-0.5 rounded ${
                      stat.color === "blue"
                        ? "bg-blue-100 text-blue-700"
                        : stat.color === "yellow"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {stat.trend}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Year Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year === "All" ? null : year)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedYear === year || (year === "All" && !selectedYear)
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredAchievements.map((item, index) => (
              <motion.div
                key={item.year + item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group"
              >
                <div className="relative h-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div
                      className={`px-2 py-1 rounded-lg text-xs font-bold ${
                        item.color === "blue"
                          ? "bg-blue-600 text-white"
                          : item.color === "yellow"
                            ? "bg-yellow-500 text-black"
                            : "bg-black text-white"
                      }`}
                    >
                      {item.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Icon */}
                    <div className="mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl ${
                          item.color === "blue"
                            ? "bg-blue-100"
                            : item.color === "yellow"
                              ? "bg-yellow-100"
                              : "bg-gray-100"
                        } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <item.icon
                          className={`w-5 h-5 ${
                            item.color === "blue"
                              ? "text-blue-600"
                              : item.color === "yellow"
                                ? "text-yellow-600"
                                : "text-black"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                        hoveredIndex === index ? "text-blue-600" : "text-black"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    {/* Metrics Row */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-6 h-6 rounded-full ${
                            item.color === "blue"
                              ? "bg-blue-100"
                              : item.color === "yellow"
                                ? "bg-yellow-100"
                                : "bg-gray-100"
                          } flex items-center justify-center`}
                        >
                          <Zap
                            className={`w-3 h-3 ${
                              item.color === "blue"
                                ? "text-blue-600"
                                : item.color === "yellow"
                                  ? "text-yellow-600"
                                  : "text-black"
                            }`}
                          />
                        </div>
                        <span className="text-xs font-semibold text-gray-700">
                          {item.impact}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-green-500" />
                        <span className="text-xs font-bold text-green-600">
                          {item.metric}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                      item.color === "blue"
                        ? "bg-blue-600"
                        : item.color === "yellow"
                          ? "bg-yellow-500"
                          : "bg-black"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredAchievements.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white rounded-2xl border border-gray-200"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <Trophy className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500 font-medium">
              No achievements found for {selectedYear}
            </p>
          </motion.div>
        )}

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {[
            { icon: Award, label: "Industry Recognition", color: "blue" },
            { icon: Globe, label: "Global Impact", color: "yellow" },
            { icon: Users, label: "Client Trust", color: "black" },
            { icon: Heart, label: "Passion Driven", color: "blue" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 hover:shadow-md transition-all"
            >
              <item.icon
                className={`w-3.5 h-3.5 ${
                  item.color === "blue"
                    ? "text-blue-600"
                    : item.color === "yellow"
                      ? "text-yellow-500"
                      : "text-black"
                }`}
              />
              <span className="text-xs font-medium text-gray-700">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Journey CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/journey"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-black text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg"
            >
              View Complete Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <p className="text-xs text-gray-400 mt-3">
            From 2017 to Present — Every milestone tells a story
          </p>
        </motion.div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 md:p-10 text-center shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Ready to add your success story?
              </h3>
              <p className="text-blue-100 mb-5 max-w-md mx-auto text-sm">
                Let's create milestones together
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-xl transition-all text-sm"
                >
                  Start Your Journey
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
