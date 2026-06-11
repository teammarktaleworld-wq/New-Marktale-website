"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const workItems = [
  {
    id: "delhi059",
    title: "Delhi059",
    category: "Restaurant - Canada",
    description:
      "From zero to Canada's culinary icon with 650+ Google reviews—all without spending a rupee on performance marketing.",
    image: "/delhi059-logo.jpg",
    tags: ["Hospitality", "Featured"],
  },
  {
    id: "local-ride",
    title: "Local Ride",
    category: "Transportation - Canada",
    description:
      "Engineered from the ground up into a thriving Canadian rideshare powerhouse. Full-stack iOS/Android apps with zero commission for drivers.",
    image: "/Feature_logos/localride.jpg",
    tags: ["App Development", "Featured"],
  },
  {
    id: "dee-cee-accessories",
    title: "Dee Cee Accessories",
    category: "Jewelry",
    description:
      "Digital setup from scratch. Products photography, SEO based listings on Amazon and Flipkart. Digital Social Media Accounts setup.",
    image: "/Feature_logos/deecee.jpg",
    tags: ["E-commerce", "Photography"],
  },
  {
    id: "last-mile-care",
    title: "Last Mile Care",
    category: "NGO",
    description:
      "Supporting communities with compassionate care and digital outreach strategies to amplify their mission.",
    // image: 'https://www.marktaleworld.com/clients/lastmilecare.png',
    image: "/Feature_logos/lastmilecare.jpeg",

    tags: ["Non-profit"],
  },
  {
    id: "maggo-play-school",
    title: "Maggo Play School",
    category: "Education",
    description:
      "Creating joyful learning experiences for young minds in Delhi with innovative digital engagement.",
    image: "/Feature_logos/maggo.png",
    tags: ["Education"],
  },
  {
    id: "bg-foundation",
    title: "BG Foundation",
    category: "NGO - Canada",
    description:
      "Empowering change through digital transformation and community engagement initiatives across Canada.",
    image: "https://www.marktaleworld.com/clients/bgfoundation.png",
    tags: ["Non-profit"],
  },
  {
    id: "bg-foods",
    title: "BG Foods",
    category: "E-commerce - Canada/USA",
    description:
      "Everything from scratch. Building a thriving food e-commerce platform across North America.",
    // image: 'https://www.marktaleworld.com/clients/bgfoods.png',
    image: "/Feature_logos/bgfoods.jpeg",

    tags: ["E-commerce"],
  },
  {
    id: "promac-advisory",
    title: "Promac Advisory",
    category: "Real Estate - Jaipur",
    description:
      "Transforming real estate advisory with data-driven insights and premium digital presence.",
    image: "/Feature_logos/promac.png",
    tags: ["Real Estate"],
  },
  {
    id: "cabtale",
    title: "CabTale",
    category: "Transportation",
    description:
      "Building the future of urban mobility with seamless booking experiences and real-time tracking solutions.",
    image: "/Feature_logos/cabtale.jpg",
    tags: ["Mobility", "App Development"],
  },
  {
    id: "astro-nexus",
    title: "Astro Nexus",
    category: "Astrology",
    description:
      "Bridging ancient wisdom with modern technology through engaging digital astrology experiences.",
    image: "/Feature_logos/astronexus.jpg",
    tags: ["Digital Media"],
  },
  {
    id: "biryani-bar",
    title: "Biryani Bar",
    category: "Hospitality",
    description:
      "Crafting memorable dining experiences through innovative digital ordering and customer loyalty programs.",
    image: "/Feature_logos/biryanibar.jpg",
    tags: ["Hospitality"],
  },
  {
    id: "read-abroad",
    title: "Read Abroad",
    category: "Education",
    description:
      "Connecting students with global educational opportunities through innovative digital platforms.",
    image: "https://www.marktaleworld.com/clients/readabroad.png",
    tags: ["Education"],
  },
  {
    id: "writing-rodgers",
    title: "Writing Rodgers",
    category: "Education",
    description:
      "Empowering writers and educators with comprehensive digital tools and content strategies.",
    image: "/Feature_logos/writing.png",
    tags: ["Education"],
  },
];

const categories = [
  "All",
  "Hospitality",
  "App Development",
  "E-commerce",
  "Non-profit",
  "Education",
  "Real Estate",
];

export default function ProjectsGallery() {
  const [filter, setFilter] = useState("All");

  const filteredItems =
    filter === "All"
      ? workItems
      : workItems.filter(
          (item) =>
            item.tags.includes(filter) || item.category.includes(filter),
        );

  return (
    <section className="py-24 bg-white" id="work">
      <div className="container mx-auto px-6">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-sm font-bold uppercase tracking-widest relative pb-2 transition-colors ${
                filter === cat
                  ? "text-kestone-black"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {cat}
              {filter === cat && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-kestone-black"
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <Link
                key={item.id}
                href={`/projects/${item.id}`}
                className="block group cursor-pointer"
              >
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-64 overflow-hidden mb-6 bg-gray-100 rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="text-center px-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-heading font-bold text-kestone-black mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
