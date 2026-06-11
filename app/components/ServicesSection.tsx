"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Video,
  Search,
  FileText,
  Target,
  ShieldCheck,
  TrendingUp,
  BarChart,
  Globe,
  Smartphone,
  Zap,
  Rocket,
  Award,
  Users,
  Brain,
  Megaphone,
  LineChart,
  Code,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Android & iOS Development",
    icon: Smartphone,
    description:
      "High-performance mobile applications that users love. Native and cross-platform expertise.",
    badge: "Popular",
    color: "blue",
    stat: "+500% Growth",
  },
  {
    title: "Web Development",
    icon: Globe,
    description:
      "Scalable, fast, and secure websites that convert visitors into customers.",
    badge: "Essential",
    color: "black",
    stat: "99.9% Uptime",
  },
  {
    title: "Market Research",
    icon: Search,
    description:
      "Deep insights into your market, competitors, and customers for data-driven decisions.",
    badge: "Strategic",
    color: "blue",
    stat: "95% Accuracy",
  },
  {
    title: "Marketing Strategy",
    icon: FileText,
    description:
      "Comprehensive growth plans with clear roadmaps and measurable KPIs.",
    badge: "Core",
    color: "yellow",
    stat: "10x ROI",
  },
  {
    title: "Performance Marketing",
    icon: TrendingUp,
    description:
      "ROI-focused campaigns across Google, Meta, and emerging platforms.",
    badge: "High Impact",
    color: "blue",
    stat: "200% Avg ROI",
  },
  {
    title: "SEO & Analytics",
    icon: BarChart,
    description:
      "Dominate search rankings with actionable data insights and continuous optimization.",
    badge: "Essential",
    color: "black",
    stat: "#1 Rankings",
  },
  {
    title: "Lead Generation",
    icon: Target,
    description:
      "Qualified leads delivered consistently through multi-channel strategies.",
    badge: "Growth",
    color: "yellow",
    stat: "50k+ Leads",
  },
  {
    title: "Video Content",
    icon: Video,
    description:
      "Story-driven videos that capture attention and drive engagement.",
    badge: "Creative",
    color: "blue",
    stat: "1M+ Views",
  },
  {
    title: "Reputation Management",
    icon: ShieldCheck,
    description:
      "Protect and enhance your brand image across all digital platforms.",
    badge: "Trust",
    color: "black",
    stat: "4.95 Rating",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      id="services"
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              WHAT WE DELIVER
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-[1.2]">
            Everything you need to
            <span className="block text-blue-600 mt-2">
              scale your business
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-4">
            From strategy to execution — we provide end-to-end solutions that
            drive real, measurable growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Animated Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${
                  service.color === "blue"
                    ? "from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5"
                    : service.color === "yellow"
                      ? "from-yellow-500/0 via-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5"
                      : "from-black/0 via-black/0 to-black/0 group-hover:from-black/5"
                } group-hover:via-transparent group-hover:to-transparent transition-all duration-500`}
              />

              {/* Badge */}
              <motion.div
                className="absolute top-4 right-4 z-10"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <span
                  className={`px-2.5 py-1 text-xs font-bold rounded-full ${
                    service.color === "blue"
                      ? "bg-blue-100 text-blue-700"
                      : service.color === "yellow"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {service.badge}
                </span>
              </motion.div>

              {/* Icon Container */}
              <div className="p-6 pb-0">
                <motion.div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    hoveredCard === index
                      ? service.color === "blue"
                        ? "bg-blue-600"
                        : service.color === "yellow"
                          ? "bg-yellow-500"
                          : "bg-black"
                      : "bg-gray-100"
                  }`}
                  animate={{
                    scale: hoveredCard === index ? 1.1 : 1,
                    rotate: hoveredCard === index ? [0, -5, 5, 0] : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon
                    className={`w-8 h-8 transition-colors duration-300 ${
                      hoveredCard === index
                        ? "text-white"
                        : service.color === "blue"
                          ? "text-blue-600"
                          : service.color === "yellow"
                            ? "text-yellow-600"
                            : "text-black"
                    }`}
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className={`text-xl font-bold text-black mb-3 transition-colors duration-300 ${
                    hoveredCard === index ? "text-blue-600" : ""
                  }`}
                >
                  {service.title}
                </h3>

                <p className="text-gray-500 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Stat Badge - Appears on Hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredCard === index ? 1 : 0,
                    y: hoveredCard === index ? 0 : 10,
                  }}
                  transition={{ duration: 0.2 }}
                  className="mb-3"
                >
                  <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-50">
                    <TrendingUp className="w-3 h-3 text-green-600" />
                    <span className="text-xs font-semibold text-green-600">
                      {service.stat}
                    </span>
                  </div>
                </motion.div>

                {/* Learn More Link */}
                <motion.div
                  animate={{
                    x: hoveredCard === index ? 5 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider transition-all group-hover:gap-3"
                    style={{
                      color:
                        service.color === "blue"
                          ? "#2563EB"
                          : service.color === "yellow"
                            ? "#EAB308"
                            : "#000000",
                    }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>

              {/* Bottom Accent Line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                  service.color === "blue"
                    ? "bg-blue-600"
                    : service.color === "yellow"
                      ? "bg-yellow-500"
                      : "bg-black"
                }`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {[
            { icon: Award, label: "Award Winning Agency", color: "blue" },
            { icon: Users, label: "150+ Happy Clients", color: "yellow" },
            { icon: Rocket, label: "200% Avg Growth", color: "blue" },
            { icon: Zap, label: "Fast Delivery", color: "black" },
            { icon: CheckCircle, label: "98% Retention", color: "blue" },
          ].map((badge, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div
                className={`w-6 h-6 rounded-full ${
                  badge.color === "blue"
                    ? "bg-blue-100"
                    : badge.color === "yellow"
                      ? "bg-yellow-100"
                      : "bg-gray-100"
                } flex items-center justify-center`}
              >
                <badge.icon
                  className={`w-3.5 h-3.5 ${
                    badge.color === "blue"
                      ? "text-blue-600"
                      : badge.color === "yellow"
                        ? "text-yellow-600"
                        : "text-black"
                  }`}
                />
              </div>
              <span className="text-xs md:text-sm font-semibold text-gray-700">
                {badge.label}
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
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 md:p-12 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to scale your business?
              </h3>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                Let's create a custom growth strategy tailored to your brand.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-lg transition-all"
                >
                  Get Started Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
