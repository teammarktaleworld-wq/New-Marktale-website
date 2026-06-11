"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Lightbulb,
  Sparkles,
  MapPin,
  Briefcase,
  ArrowRight,
  Zap,
  Award,
  TrendingUp,
  Users,
  CheckCircle,
  Flag,
  Building2,
  Truck,
  Rocket,
  Star,
  Heart,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const locations = [
  { name: "Canada", flag: "🇨🇦", color: "blue" },
  { name: "USA", flag: "🇺🇸", color: "blue" },
  { name: "UAE", flag: "🇦🇪", color: "yellow" },
  { name: "India", flag: "🇮🇳", color: "blue" },
  { name: "New Zealand", flag: "🇳🇿", color: "black" },
  { name: "South Africa", flag: "🇿🇦", color: "yellow" },
];

const industries = [
  { name: "Healthcare", icon: Heart, color: "blue" },
  { name: "B2B", icon: Briefcase, color: "black" },
  { name: "E-Commerce", icon: Truck, color: "yellow" },
  { name: "FMCG", icon: Zap, color: "blue" },
  { name: "Finance", icon: TrendingUp, color: "black" },
  { name: "Education", icon: Building2, color: "yellow" },
  { name: "SaaS", icon: Rocket, color: "blue" },
  { name: "Mobile Apps", icon: Smartphone, color: "black" },
  { name: "Fashion", icon: Sparkles, color: "yellow" },
  { name: "Hospitality", icon: Star, color: "blue" },
];

const stats = [
  {
    value: "6+",
    label: "Countries",
    icon: Flag,
    color: "blue",
    trend: "Global",
  },
  {
    value: "10+",
    label: "Industries",
    icon: Building2,
    color: "yellow",
    trend: "Diverse",
  },
  {
    value: "150+",
    label: "Brands Scaled",
    icon: Users,
    color: "blue",
    trend: "Growing",
  },
  {
    value: "200%",
    label: "Avg Growth",
    icon: TrendingUp,
    color: "black",
    trend: "ROI",
  },
];

// Import Smartphone if not already imported
import { Smartphone } from "lucide-react";

export default function GlobalIndustries() {
  const [activeTab, setActiveTab] = useState<"locations" | "industries">(
    "locations",
  );
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  return (
    <section
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      id="global"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/30 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50/50 rounded-full blur-3xl" />

        {/* World Map Silhouette */}
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5">
          <Globe className="w-full h-full text-black" />
        </div>
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
              WORLDWIDE REACH
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-[1.2] tracking-tight">
            Global presence.
            <span className="block text-blue-600 mt-2">Local expertise.</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-4">
            We've helped businesses across 6+ countries and 10+ industries
            achieve remarkable growth.
          </p>
        </motion.div>

        {/* Stats Grid - Premium Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="relative bg-white border border-gray-200 rounded-2xl p-5 text-center shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div
                  className={`absolute top-0 right-0 w-20 h-20 rounded-full ${
                    stat.color === "blue"
                      ? "bg-blue-600/5"
                      : stat.color === "yellow"
                        ? "bg-yellow-500/5"
                        : "bg-black/5"
                  } -mr-10 -mt-10`}
                />

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

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setActiveTab("locations")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "locations"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Flag className="w-4 h-4 inline mr-2" />
              Countries We Serve
            </button>
            <button
              onClick={() => setActiveTab("industries")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "industries"
                  ? "bg-yellow-500 text-black shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Building2 className="w-4 h-4 inline mr-2" />
              Industries We Serve
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === "locations" ? (
              <motion.div
                key="locations"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {locations.map((loc, idx) => (
                  <motion.div
                    key={loc.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    onMouseEnter={() => setSelectedLocation(loc.name)}
                    onMouseLeave={() => setSelectedLocation(null)}
                    whileHover={{ y: -5 }}
                    className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group"
                  >
                    <div
                      className={`absolute top-0 right-0 w-24 h-24 rounded-full ${
                        loc.color === "blue"
                          ? "bg-blue-600/5"
                          : loc.color === "yellow"
                            ? "bg-yellow-500/5"
                            : "bg-black/5"
                      } -mr-12 -mt-12`}
                    />

                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">{loc.flag}</span>
                      <h3
                        className={`text-xl font-bold transition-colors duration-300 ${
                          selectedLocation === loc.name
                            ? "text-blue-600"
                            : "text-black"
                        }`}
                      >
                        {loc.name}
                      </h3>
                    </div>

                    <p className="text-gray-500 text-sm mb-4">
                      We've successfully helped brands establish and scale their
                      presence in {loc.name}.
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-400">
                          Active Market
                        </span>
                      </div>
                      <motion.div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          selectedLocation === loc.name
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-400"
                        }`}
                        animate={{ x: selectedLocation === loc.name ? 5 : 0 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="industries"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {industries.map((ind, idx) => (
                  <motion.div
                    key={ind.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    onMouseEnter={() => setSelectedIndustry(ind.name)}
                    onMouseLeave={() => setSelectedIndustry(null)}
                    whileHover={{ y: -5 }}
                    className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group"
                  >
                    <div
                      className={`absolute top-0 right-0 w-24 h-24 rounded-full ${
                        ind.color === "blue"
                          ? "bg-blue-600/5"
                          : ind.color === "yellow"
                            ? "bg-yellow-500/5"
                            : "bg-black/5"
                      } -mr-12 -mt-12`}
                    />

                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl ${
                          ind.color === "blue"
                            ? "bg-blue-100"
                            : ind.color === "yellow"
                              ? "bg-yellow-100"
                              : "bg-gray-100"
                        } flex items-center justify-center`}
                      >
                        <ind.icon
                          className={`w-5 h-5 ${
                            ind.color === "blue"
                              ? "text-blue-600"
                              : ind.color === "yellow"
                                ? "text-yellow-600"
                                : "text-black"
                          }`}
                        />
                      </div>
                      <h3
                        className={`text-lg font-bold transition-colors duration-300 ${
                          selectedIndustry === ind.name
                            ? "text-yellow-600"
                            : "text-black"
                        }`}
                      >
                        {ind.name}
                      </h3>
                    </div>

                    <p className="text-gray-500 text-sm mb-4">
                      Specialized strategies tailored for the {ind.name} sector.
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-400">Expertise</span>
                      </div>
                      <motion.div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          selectedIndustry === ind.name
                            ? "bg-yellow-500 text-black"
                            : "bg-gray-100 text-gray-400"
                        }`}
                        animate={{ x: selectedIndustry === ind.name ? 5 : 0 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Interactive Map Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 p-6 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl border border-gray-200"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-black">Global Footprint</h4>
                <p className="text-sm text-gray-500">
                  6+ countries across 3 continents
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {["North America", "Middle East", "Asia Pacific", "Africa"].map(
                (region, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-600 shadow-sm"
                  >
                    {region}
                  </span>
                ),
              )}
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {[
            { icon: Zap, label: "Fast Execution", color: "yellow" },
            { icon: Award, label: "Award Winning", color: "blue" },
            { icon: CheckCircle, label: "98% Success Rate", color: "green" },
            { icon: Rocket, label: "Scalable Solutions", color: "black" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 hover:shadow-md transition-all"
            >
              <item.icon
                className={`w-3.5 h-3.5 ${
                  item.color === "yellow"
                    ? "text-yellow-500"
                    : item.color === "blue"
                      ? "text-blue-600"
                      : item.color === "green"
                        ? "text-green-500"
                        : "text-black"
                }`}
              />
              <span className="text-xs font-medium text-gray-700">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 md:p-12 text-center shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to expand globally?
              </h3>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                Let's take your brand to new markets and industries worldwide.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-xl transition-all"
                >
                  Start Your Global Journey
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <p className="text-blue-200 text-xs mt-4">
                No commitment • Free consultation
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
