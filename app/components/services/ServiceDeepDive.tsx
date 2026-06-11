"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Check,
  Video,
  Search,
  FileText,
  Target,
  ShieldCheck,
  Palette,
  TrendingUp,
  BarChart,
} from "lucide-react"; // Imports for icons used in ServicesGrid to ensure consistency if needed, though this file uses Check.

const deepDives = [
  {
    title: "Captivating Visuals",
    subtitle: "Video Content Creation",
    content:
      "Crafting captivating video content is crucial for brands to engage their audience and showcase their products or services in a compelling manner. Our team of creative professionals specializes in producing high-quality, attention-grabbing videos that tell your brand’s story and drive meaningful connections with your target market.",
    benefits: [
      "High-quality Production",
      "Attention-Grabbing",
      "Brand Storytelling",
      "Meaningful Connections",
    ],
    image: "/images/services/video_content_1768164776471.png",
  },
  {
    title: "Deep Understanding",
    subtitle: "Market Research",
    content:
      "We employ a multi-faceted approach to understand your audience:\n\n• Qualitative Research: In-depth interviews and focus groups to understand audience needs, pain points, and preferences.\n• Quantitative Analysis: Analysis of large-scale survey data to identify statistically significant trends.\n• Observational Studies: Ethnographic research observing customers in natural environments.",
    benefits: [
      "Audience Needs",
      "Pain Points",
      "Significant Trends",
      "Natural Behaviors",
    ],
    image: "/images/services/market_research_1768164791783.png",
  },
  {
    title: "Strategy First",
    subtitle: "Marketing Plan Development",
    content:
      "We take a strategic, data-driven approach to marketing, blending traditional and digital techniques to create customized solutions for your brand. Our comprehensive planning includes data-driven insights and creative ideation to ensure your marketing efforts yield maximum impact.",
    benefits: [
      "Comprehensive Planning",
      "Data-Driven Insights",
      "Creative Ideation",
      "Customized Solutions",
    ],
    image: "/images/services/marketing_strategy_1768164808685.png",
  },
];

export default function ServiceDeepDive() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6 text-kestone-black">
            Why Choose MarkTale?
          </h2>
          <p className="text-gray-600 leading-relaxed font-body">
            We go deeper than surface-level deliverables. We understand the
            business mechanics behind marketing and technology.
          </p>
        </div>

        <div className="space-y-24">
          {deepDives.map((dive, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-16`}
            >
              <div className="flex-1">
                <span className="text-kestone-red font-bold tracking-widest uppercase text-sm mb-4 block">
                  {dive.subtitle}
                </span>
                <h3 className="text-3xl font-heading font-bold mb-6 text-kestone-black">
                  {dive.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-body mb-8 whitespace-pre-line text-lg">
                  {dive.content}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {dive.benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="flex items-center text-kestone-black font-medium"
                    >
                      <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mr-3 text-kestone-red">
                        <Check size={14} />
                      </div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 relative h-[300px] lg:h-[400px] w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 group">
                <div className="absolute inset-0 bg-blue-50/50 mix-blend-multiply z-10 opacity-20 pointer-events-none group-hover:opacity-10 transition-opacity duration-500" />
                <Image
                  src={dive.image}
                  alt={dive.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  quality={90}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
