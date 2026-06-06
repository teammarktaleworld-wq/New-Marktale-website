"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Users,
  Zap,
  Shield,
  Heart,
  Clock,
  Star,
  MessageCircle,
  Mail,
  MapPin,
  CheckCircle,
  Award,
  TrendingUp,
} from "lucide-react";

export default function TeamCTA() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const contactMethods = [
    {
      icon: Mail,
      label: "Email Us",
      value: "teammarktaleworld@gmail.com",
      color: "yellow",
    },
    {
      icon: MessageCircle,
      label: "Live Chat",
      value: "Available 24/7",
      color: "black",
    },
  ];

  const stats = [
    {
      value: "24/7",
      label: "Support Available",
      icon: Clock,
      color: "blue",
      trend: "Always",
    },
    {
      value: "100%",
      label: "Client Dedication",
      icon: Heart,
      color: "yellow",
      trend: "Passion",
    },
    {
      value: "50+",
      label: "Team Members",
      icon: Users,
      color: "blue",
      trend: "Growing",
    },
    {
      value: "98%",
      label: "Satisfaction Rate",
      icon: Star,
      color: "black",
      trend: "Top Tier",
    },
  ];

  const trustBadges = [
    { name: "Award Winning", icon: Award, color: "yellow" },
    { name: "Client Trusted", icon: Shield, color: "blue" },
    { name: "Fast Growth", icon: TrendingUp, color: "black" },
    { name: "Quality Assured", icon: CheckCircle, color: "blue" },
  ];

  return (
    <section
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      id="contact"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/30 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm tracking-wide">
              LET'S WORK TOGETHER
            </span>
          </motion.div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-[1.2] tracking-tight">
            We are big enough to{" "}
            <span className="text-blue-600 block mt-2">manage scale</span>
            <span className="text-black">& small enough to</span>
            <span className="text-yellow-600 block mt-2">
              understand the care you need
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            You may be an established enterprise with defined processes for
            almost everything or a self-funded start-up looking to create a
            niche for itself, we are here for you to make things work.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredStat(idx)}
                onMouseLeave={() => setHoveredStat(null)}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-white border border-gray-200 rounded-2xl p-4 text-center shadow-sm hover:shadow-xl transition-all duration-300">
                  <div
                    className={`w-10 h-10 rounded-xl ${stat.color === "blue"
                        ? "bg-blue-100 group-hover:bg-blue-600"
                        : stat.color === "yellow"
                          ? "bg-yellow-100 group-hover:bg-yellow-500"
                          : "bg-gray-100 group-hover:bg-black"
                      } flex items-center justify-center mx-auto mb-2 transition-all duration-300`}
                  >
                    <stat.icon
                      className={`w-5 h-5 transition-colors duration-300 ${stat.color === "blue"
                          ? "text-blue-600 group-hover:text-white"
                          : stat.color === "yellow"
                            ? "text-yellow-600 group-hover:text-black"
                            : "text-black group-hover:text-white"
                        }`}
                    />
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-xl font-bold text-black">{stat.value}</p>
                    <span
                      className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${hoveredStat === idx
                          ? stat.color === "blue"
                            ? "bg-blue-600 text-white"
                            : stat.color === "yellow"
                              ? "bg-yellow-500 text-black"
                              : "bg-black text-white"
                          : stat.color === "blue"
                            ? "bg-blue-100 text-blue-700"
                            : stat.color === "yellow"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-gray-100 text-gray-700"
                        } transition-all duration-300`}
                    >
                      {stat.trend}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Methods */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {contactMethods.map((method, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                whileHover={{ y: -3 }}
                className={`flex items-center gap-3 px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer ${method.color === "blue"
                    ? "bg-blue-50 border-blue-200 hover:bg-blue-100"
                    : method.color === "yellow"
                      ? "bg-yellow-50 border-yellow-200 hover:bg-yellow-100"
                      : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                  }`}
              >
                <div
                  className={`w-8 h-8 rounded-full ${method.color === "blue"
                      ? "bg-blue-600"
                      : method.color === "yellow"
                        ? "bg-yellow-500"
                        : "bg-black"
                    } flex items-center justify-center`}
                >
                  <method.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">{method.label}</p>
                  <p
                    className={`text-sm font-semibold ${method.color === "blue"
                        ? "text-blue-600"
                        : method.color === "yellow"
                          ? "text-yellow-600"
                          : "text-black"
                      }`}
                  >
                    {method.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
              >
                View Our Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-8 border-t border-gray-100"
          >
            <p className="text-sm text-gray-400 mb-4">
              Trusted by innovative companies worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {trustBadges.map((badge, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-200"
                >
                  <badge.icon
                    className={`w-3.5 h-3.5 ${badge.color === "blue"
                        ? "text-blue-600"
                        : badge.color === "yellow"
                          ? "text-yellow-500"
                          : "text-black"
                      }`}
                  />
                  <span className="text-xs font-medium text-gray-600">
                    {badge.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Office Hours Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <p className="text-xs text-gray-400">
              🚀 Ready to start? Get a free consultation within 24 hours
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0"
      >
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 py-4">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:200%_100%] animate-shimmer" />
          <div className="relative z-10 text-center">
            <p className="text-white/90 text-sm">
              ⚡ Limited slots available for Q2 2024 • Book your free
              consultation now
            </p>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
