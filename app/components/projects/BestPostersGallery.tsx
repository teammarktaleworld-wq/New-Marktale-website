"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Share2, ZoomIn, ExternalLink } from "lucide-react";

const posterCategories = [
  "All",
  "Social Media",
  "Print",
  "Digital Ads",
  "Branding",
  "Events",
];

const posters = [
  {
    id: 1,
    title: "Delhi059 Grand Opening",
    brand: "Delhi059",
    category: "Social Media",
    image: "https://www.instagram.com/p/DBjCxUbuKge/media/?size=l",
    description: "Launch campaign that generated 10K+ impressions",
    link: "https://www.instagram.com/p/DBjCxUbuKge/",
  },
  {
    id: 2,
    title: "Local Ride App Launch",
    brand: "Local Ride",
    category: "Digital Ads",
    image: "https://www.instagram.com/p/DSGIHDZgcQm/media/?size=l",
    description: "Zero commission driver campaign",
    link: "https://www.instagram.com/p/DSGIHDZgcQm/",
  },
  {
    id: 3,
    title: "BG Foods Festive Special",
    brand: "BG Foods",
    category: "Social Media",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    description: "Diwali campaign with 50K+ reach",
    link: undefined,
  },
  {
    id: 4,
    title: "Promac Luxury Homes",
    brand: "Promac Advisory",
    category: "Print",
    image: "/creatives/promaccreatives.png",
    description: "Premium real estate brochure design",
    link: undefined,
  },
  {
    id: 5,
    title: "Astro Nexus Zodiac Series",
    brand: "Astro Nexus",
    category: "Branding",
    image: "https://www.instagram.com/p/DTSxqv6iNh5/media/?size=l",
    description: "Complete brand identity redesign",
    link: "https://www.instagram.com/p/DTSxqv6iNh5/",
  },
  {
    id: 6,
    title: "Dee Cee Jewelry Collection",
    brand: "Dee Cee Accessories",
    category: "Social Media",
    image: "https://www.instagram.com/p/DHIHRiZSdrU/media/?size=l",
    description: "Product photography campaign",
    link: "https://www.instagram.com/p/DHIHRiZSdrU/",
  },
  {
    id: 7,
    title: "Biryani Bar Menu Launch",
    brand: "Biryani Bar",
    category: "Print",
    image: "/creatives/biryanibar.jpg",
    description: "Premium menu design and photography",
    link: undefined,
  },
  {
    id: 8,
    title: "CabTale Safety Campaign",
    brand: "CabTale",
    category: "Digital Ads",
    image: "https://www.instagram.com/p/DOLPnqODw42/media/?size=l",
    description: "Safety-first messaging campaign",
    link: "https://www.instagram.com/p/DOLPnqODw42/",
  },
  {
    id: 9,
    title: "BG Foundation Charity Drive",
    brand: "BG Foundation",
    category: "Events",
    image: "https://www.instagram.com/p/DRelzQxjF9d/media/?size=l",
    description: "Community outreach event branding",
    link: "https://www.instagram.com/p/DRelzQxjF9d/?img_index=1",
  },
  {
    id: 10,
    title: "Read Abroad Study Guide",
    brand: "Read Abroad",
    category: "Branding",
    image: "https://www.instagram.com/p/DR1YULWEegw/media/?size=l",
    description: "Educational branding materials",
    link: "https://www.instagram.com/p/DR1YULWEegw/",
  },
  {
    id: 11,
    title: "Writing Rodgers Workshop",
    brand: "Writing Rodgers",
    category: "Events",
    image: "/creatives/writingrodgerscreative.jpg",
    description: "Creative writing workshop promotion",
    link: undefined,
  },
  {
    id: 12,
    title: "TripTale Travel Stories",
    brand: "TripTale",
    category: "Social Media",
    image: "https://www.instagram.com/p/DOdLasDCRCO/media/?size=l",
    description: "Engaging travel content series",
    link: "https://www.instagram.com/p/DOdLasDCRCO/",
  },
];

export default function BestPostersGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<
    (typeof posters)[0] | null
  >(null);

  const filteredPosters =
    selectedCategory === "All"
      ? posters
      : posters.filter((poster) => poster.category === selectedCategory);

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
          <span className="inline-block px-6 py-2 bg-kestone-red/10 text-kestone-red font-bold text-sm uppercase tracking-widest rounded-full mb-4">
            Creative Excellence
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-kestone-black mb-6">
            Our Best Posters
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            A curated collection of our most impactful designs—each poster tells
            a story, drives engagement, and delivers results.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {posterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-heading font-bold text-sm uppercase tracking-wide transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-kestone-red text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Posters Grid - Masonry Style */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredPosters.map((poster, idx) => (
              <motion.div
                key={poster.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="break-inside-avoid mb-6"
              >
                <div
                  className="group relative overflow-hidden rounded-xl bg-gray-100 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
                  onClick={() => {
                    if (poster.link) {
                      window.open(poster.link, "_blank", "noopener,noreferrer");
                    } else {
                      setLightboxImage(poster);
                    }
                  }}
                >
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={poster.image}
                      alt={poster.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block px-3 py-1 bg-kestone-red text-white text-xs font-bold uppercase rounded-full mb-2">
                          {poster.category}
                        </span>
                        <h3 className="text-white font-heading font-bold text-xl mb-2">
                          {poster.title}
                        </h3>
                        <p className="text-gray-300 text-sm font-body mb-3">
                          {poster.description}
                        </p>
                        <div className="flex items-center gap-2 text-white text-xs">
                          {poster.link ? (
                            <>
                              <ExternalLink size={16} />
                              <span>Click to view on Instagram</span>
                            </>
                          ) : (
                            <>
                              <ZoomIn size={16} />
                              <span>Click to view full size</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Brand Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                    <span className="text-kestone-black font-heading font-bold text-xs">
                      {poster.brand}
                    </span>
                  </div>

                  {/* Instagram Badge */}
                  {poster.link && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center gap-1">
                      <ExternalLink size={12} />
                      <span className="text-xs font-bold">Instagram</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
            >
              <motion.div
                className="relative max-w-5xl w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute -top-12 right-0 p-2 text-white hover:text-kestone-red transition-colors"
                >
                  <X size={32} />
                </button>

                {/* Image */}
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                  <Image
                    src={lightboxImage.image}
                    alt={lightboxImage.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Info */}
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    {lightboxImage.title}
                  </h3>
                  <p className="text-gray-400 font-body mb-4">
                    {lightboxImage.description}
                  </p>
                  <div className="flex justify-center gap-4">
                    {lightboxImage.link ? (
                      <Link
                        href={lightboxImage.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:opacity-90 transition-opacity">
                          <ExternalLink size={18} />
                          View on Instagram
                        </button>
                      </Link>
                    ) : (
                      <>
                        <button className="flex items-center gap-2 px-6 py-3 bg-kestone-red text-white rounded-full hover:bg-kestone-red/90 transition-colors">
                          <Download size={18} />
                          Download
                        </button>
                        <button className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors">
                          <Share2 size={18} />
                          Share
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
