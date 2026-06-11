"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  TrendingUp,
  Award,
  ArrowRight,
  Sparkles,
  Zap,
  Star,
  Eye,
  BarChart3,
  Shield,
  Rocket,
  Globe,
  CheckCircle,
  MapPin,
  Clock,
  Heart,
  Users,
  DollarSign,
} from "lucide-react";

const workItems = [
  {
    id: "mentorleap",
    title: "MentorLeap",
    category: "EdTech",
    location: "India",
    description:
      "Transforming professionals into confident communicators and strategic leaders through AI-powered mentorship and structured learning programs.",
    image: "/Feature_logos/mentorleep.png",
    tags: ["EdTech", "Featured"],
    result: "10k+ Professionals",
    growth: "400%",
    featured: true,
  },
  {
    id: "delhi059",
    title: "Delhi059",
    category: "Restaurant",
    location: "Canada",
    description:
      "From zero to Canada's culinary icon with 650+ Google reviews—all without spending a rupee on performance marketing.",
    image: "/delhi059-logo.jpg",
    tags: ["Hospitality", "Featured"],
    result: "650+ Reviews",
    growth: "500%",
    featured: true,
  },
  {
    id: "local-ride",
    title: "Local Ride",
    category: "Transportation",
    location: "Canada",
    description:
      "Engineered from the ground up into a thriving Canadian rideshare powerhouse.",
    image: "/Feature_logos/localride.jpg",
    tags: ["App Development", "Featured"],
    result: "100k+ Rides",
    growth: "300%",
    featured: true,
  },
  {
    id: "bg-foods",
    title: "BG Foods",
    category: "E-commerce",
    location: "Canada/USA",
    description:
      "Building a thriving food e-commerce platform across North America.",
    image: "/Feature_logos/bgfoods.jpeg",
    tags: ["E-commerce", "Featured"],
    result: "50k+ Orders",
    growth: "1000%",
    featured: true,
  },
  {
    id: "dee-cee-accessories",
    title: "Dee Cee Accessories",
    category: "Jewelry",
    location: "India",
    description:
      "Digital setup from scratch. Products photography, SEO based listings.",
    image: "/Feature_logos/deecee.jpg",
    tags: ["E-commerce"],
    result: "10x Sales",
    growth: "900%",
    featured: false,
  },
  {
    id: "cabtale",
    title: "CabTale",
    category: "Transportation",
    location: "India",
    description:
      "Building the future of urban mobility with seamless booking experiences.",
    image: "/Feature_logos/cabtale.jpg",
    tags: ["Mobility", "App Development"],
    result: "1M+ Downloads",
    growth: "800%",
    featured: false,
  },
  {
    id: "last-mile-care",
    title: "Last Mile Care",
    category: "NGO",
    location: "India",
    description: "Supporting communities with compassionate care.",
    // image: "https://www.marktaleworld.com/clients/lastmilecare.png",
    image: "/Feature_logos/lastmilecare.jpeg",

    tags: ["Non-profit"],
    result: "50k+ Reached",
    growth: "200%",
    featured: false,
  },
];
const categories = [
  "All",
  "Featured",
  "EdTech", // ← add this
  "Hospitality",
  "Transportation",
  "E-commerce",
  "Non-profit",
];
export default function WorkGallery() {
  const [filter, setFilter] = useState("All");
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});

  const filteredItems =
    filter === "All"
      ? workItems
      : filter === "Featured"
        ? workItems.filter((item) => item.featured)
        : workItems.filter((item) => item.tags.includes(filter));

  const stats = [
    {
      value: "150+",
      label: "Brands Scaled",
      icon: Briefcase,
      change: "+42%",
      color: "blue",
    },
    {
      value: "200%",
      label: "Avg. Growth",
      icon: TrendingUp,
      change: "+15%",
      color: "yellow",
    },
    {
      value: "4.95",
      label: "Client Rating",
      icon: Star,
      change: "5★",
      color: "blue",
    },
    {
      value: "98%",
      label: "Retention Rate",
      icon: Heart,
      change: "+8%",
      color: "yellow",
    },
  ];

  return (
    <section
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      id="work"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/50 to-transparent" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gray-50/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm tracking-wide">
              OUR WORK
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.15] tracking-tight">
            Digital empires
            <span className="block text-blue-600 mt-2">built to last.</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            From concept to category leader — helping 150+ brands achieve
            unprecedented growth across industries.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-28"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Animated Border on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:via-blue-600/5 group-hover:to-transparent transition-all duration-500" />

                <div
                  className={`w-12 h-12 rounded-xl ${
                    stat.color === "blue" ? "bg-blue-600" : "bg-yellow-500"
                  } flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon
                    className={`w-6 h-6 ${stat.color === "yellow" ? "text-black" : "text-white"}`}
                  />
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold text-black">{stat.value}</p>
                  <span
                    className={`text-xs font-semibold px-1.5 py-0.5 rounded ${
                      stat.color === "blue"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>

                {/* Decorative Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                    stat.color === "blue" ? "bg-blue-600" : "bg-yellow-500"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid - Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onMouseEnter={() => setActiveCard(item.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="block h-full group">
                  <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
                    {/* Image Container with Parallax Effect */}
                    <div className="relative h-64 overflow-hidden bg-gray-100">
                      <motion.div
                        className="w-full h-full"
                        animate={{
                          scale: activeCard === item.id ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          onLoad={() =>
                            setImageLoaded((prev) => ({
                              ...prev,
                              [item.id]: true,
                            }))
                          }
                        />
                      </motion.div>

                      {/* Gradient Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                        animate={{
                          opacity: activeCard === item.id ? 1 : 0.6,
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Category Badge */}
                      <motion.div
                        className="absolute top-4 left-4"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <span className="px-3 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-lg shadow-lg">
                          {item.category}
                        </span>
                      </motion.div>

                      {/* Featured Badge */}
                      {item.featured && (
                        <motion.div
                          className="absolute top-4 right-4"
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.15 }}
                        >
                          <div className="px-3 py-1.5 bg-yellow-500 text-black text-xs font-bold rounded-lg shadow-lg flex items-center gap-1">
                            <Zap className="w-3 h-3" />
                            Featured
                          </div>
                        </motion.div>
                      )}

                      {/* Location Badge */}
                      <motion.div
                        className="absolute bottom-4 left-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-white/80" />
                          <span className="text-white/80 text-xs font-medium">
                            {item.location}
                          </span>
                        </div>
                      </motion.div>

                      {/* Quick View Overlay with Slide Up Effect */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: activeCard === item.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="bg-white rounded-full px-6 py-3 flex items-center gap-2 shadow-2xl"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{
                            y: activeCard === item.id ? 0 : 20,
                            opacity: activeCard === item.id ? 1 : 0,
                          }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <Eye className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-semibold text-blue-600">
                            Quick View
                          </span>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <motion.h3
                            className="text-xl font-bold text-black mb-1 group-hover:text-blue-600 transition-colors duration-300"
                            animate={{
                              x: activeCard === item.id ? 5 : 0,
                            }}
                          >
                            {item.title}
                          </motion.h3>
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <span>{item.category}</span>
                            <span>•</span>
                            <span>{item.location}</span>
                          </div>
                        </div>
                        <motion.div
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300"
                          animate={{
                            x: activeCard === item.id ? 5 : 0,
                            backgroundColor:
                              activeCard === item.id ? "#2563EB" : "#F3F4F6",
                          }}
                        >
                          <ArrowRight
                            className={`w-4 h-4 transition-all duration-300 ${
                              activeCard === item.id
                                ? "text-white translate-x-0.5"
                                : "text-gray-400"
                            }`}
                          />
                        </motion.div>
                      </div>

                      <motion.p
                        className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4"
                        animate={{
                          opacity: activeCard === item.id ? 0.8 : 0.6,
                        }}
                      >
                        {item.description}
                      </motion.p>

                      {/* Metrics Row with Animated Border */}
                      <motion.div
                        className="flex items-center justify-between pt-4 border-t border-gray-100"
                        animate={{
                          borderColor:
                            activeCard === item.id ? "#2563EB20" : "#E5E7EB",
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <motion.div
                            className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center"
                            animate={{
                              scale: activeCard === item.id ? 1.1 : 1,
                              backgroundColor:
                                activeCard === item.id ? "#2563EB" : "#DBEAFE",
                            }}
                          >
                            <Award
                              className={`w-3.5 h-3.5 transition-colors duration-300 ${
                                activeCard === item.id
                                  ? "text-white"
                                  : "text-blue-600"
                              }`}
                            />
                          </motion.div>
                          <span className="text-xs font-semibold text-gray-700">
                            {item.result}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <motion.div
                            className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center"
                            animate={{
                              scale: activeCard === item.id ? 1.1 : 1,
                              backgroundColor:
                                activeCard === item.id ? "#EAB308" : "#FEF3C7",
                            }}
                          >
                            <TrendingUp
                              className={`w-3.5 h-3.5 transition-colors duration-300 ${
                                activeCard === item.id
                                  ? "text-white"
                                  : "text-yellow-600"
                              }`}
                            />
                          </motion.div>
                          <span className="text-xs font-bold text-yellow-600">
                            {item.growth}
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Card Border Animation on Hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: activeCard === item.id ? 1 : 0,
                        boxShadow:
                          activeCard === item.id ? "0 0 0 2px #2563EB" : "none",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 rounded-2xl ring-2 ring-blue-500/50" />
                    </motion.div>

                    {/* Shine Effect on Hover */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: activeCard === item.id ? 1 : 0,
                      }}
                    >
                      <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shine" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-200"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center"
            >
              <Briefcase className="w-8 h-8 text-blue-600" />
            </motion.div>
            <p className="text-gray-500 font-medium">
              No projects found in "{filter}" category.
            </p>
            <button
              onClick={() => setFilter("All")}
              className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-semibold inline-flex items-center gap-1 group"
            >
              View all projects
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-28"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-12 shadow-2xl">
            {/* Animated Background Elements */}
            <motion.div
              className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 7, repeat: Infinity }}
            />

            <div className="relative z-10 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur rounded-full border border-white/20 mb-6"
              >
                <Rocket className="w-4 h-4 text-yellow-400" />
                <span className="text-white/90 text-sm font-medium">
                  Ready to scale?
                </span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Let's build your
                <span className="block text-yellow-400 mt-2">
                  digital empire
                </span>
              </h3>

              <p className="text-blue-100 max-w-xl mx-auto mb-8">
                Join 150+ successful brands that trusted us with their growth
                journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
                  >
                    Start Your Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/portfolio"
                    className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    <Globe className="w-4 h-4" />
                    View Portfolio
                  </Link>
                </motion.div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400" />
                  <p className="text-xs text-blue-100">No retainer fees</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400" />
                  <p className="text-xs text-blue-100">
                    Strategy-first approach
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400" />
                  <p className="text-xs text-blue-100">Data-driven results</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Add this to your global CSS or component style */}
      <style jsx>{`
        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        .animate-shine {
          animation: shine 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
