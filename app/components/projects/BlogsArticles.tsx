"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const categories = [
  "All",
  "Case Studies",
  "Industry Insights",
  "Success Stories",
  "Marketing Tips",
];

const articles = [
  {
    id: 1,
    title: "How Delhi059 Became Canada's Favorite Restaurant Without Paid Ads",
    category: "Case Studies",
    excerpt:
      "The complete story of how we built a restaurant empire using organic marketing, community engagement, and authentic storytelling.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
    author: "MarkTale Team",
    date: "Jan 10, 2026",
    readTime: "8 min read",
    tags: ["Hospitality", "Organic Growth", "Social Media"],
  },
  {
    id: 2,
    title: "Building a Zero-Commission Rideshare App: The Local Ride Story",
    category: "Success Stories",
    excerpt:
      "From concept to 10,000+ active drivers—how we disrupted the rideshare industry with a driver-first approach.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80",
    author: "MarkTale Team",
    date: "Jan 5, 2026",
    readTime: "12 min read",
    tags: ["App Development", "Disruption", "Technology"],
  },
  {
    id: 3,
    title: "The Psychology of Color in Food Marketing",
    category: "Marketing Tips",
    excerpt:
      "Why BG Foods' branding choices led to 300% increase in customer engagement and what you can learn from it.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    author: "MarkTale Team",
    date: "Dec 28, 2025",
    readTime: "6 min read",
    tags: ["Branding", "Psychology", "E-commerce"],
  },
  {
    id: 4,
    title: "Luxury Real Estate Marketing in the Digital Age",
    category: "Industry Insights",
    excerpt:
      "How Promac Advisory leveraged premium content and targeted campaigns to sell ₹50Cr+ in properties.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    author: "MarkTale Team",
    date: "Dec 20, 2025",
    readTime: "10 min read",
    tags: ["Real Estate", "Luxury Marketing", "Digital Strategy"],
  },
  {
    id: 5,
    title: "From Niche to Mainstream: Astro Nexus Growth Strategy",
    category: "Case Studies",
    excerpt:
      "How we took an astrology platform from 500 followers to 250K+ engaged community members in 18 months.",
    image:
      "https://images.unsplash.com/photo-1532153955177-f59af40d6472?w=1200&q=80",
    author: "MarkTale Team",
    date: "Dec 15, 2025",
    readTime: "9 min read",
    tags: ["Community Building", "Content Strategy", "Growth Hacking"],
  },
  {
    id: 6,
    title: "E-commerce Photography That Converts: Dee Cee Case Study",
    category: "Success Stories",
    excerpt:
      "The art and science behind product photography that increased conversion rates by 180%.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80",
    author: "MarkTale Team",
    date: "Dec 10, 2025",
    readTime: "7 min read",
    tags: ["Photography", "E-commerce", "Conversion Optimization"],
  },
];

export default function BlogsArticles() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-6 py-2 bg-purple-100 text-purple-600 font-bold text-sm uppercase tracking-widest rounded-full mb-4">
            Knowledge Hub
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-kestone-black mb-6">
            Insights & Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Deep dives into our projects, marketing strategies, and the lessons
            we've learned building 30+ brands from the ground up.
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link href={`/blogs/${articles[0].id}`}>
            <div className="group relative overflow-hidden rounded-3xl bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative aspect-[4/3] md:aspect-auto">
                  <Image
                    src={articles[0].image}
                    alt={articles[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-kestone-red text-white font-bold text-sm uppercase rounded-full">
                    Featured
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 font-bold text-xs uppercase tracking-wide rounded-full mb-4 w-fit">
                    {articles[0].category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-kestone-black mb-4 group-hover:text-kestone-red transition-colors">
                    {articles[0].title}
                  </h3>
                  <p className="text-gray-600 font-body text-lg mb-6 leading-relaxed">
                    {articles[0].excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-2">
                      <Calendar size={16} />
                      {articles[0].date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock size={16} />
                      {articles[0].readTime}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {articles[0].tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-kestone-red font-heading font-bold group-hover:gap-4 transition-all">
                    Read Full Article
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Link href={`/blogs/${article.id}`}>
                <div className="group h-full flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-kestone-black font-bold text-xs uppercase rounded-full">
                      {article.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-heading font-bold text-kestone-black mb-3 group-hover:text-kestone-red transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 font-body text-sm mb-4 leading-relaxed line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {article.readTime}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-kestone-red font-heading font-bold text-sm group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link href="/blogs">
            <motion.button
              className="group inline-flex items-center gap-3 px-8 py-4 bg-kestone-black text-white font-heading font-bold text-lg rounded-full hover:bg-kestone-red transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Articles
              <ArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                size={20}
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
