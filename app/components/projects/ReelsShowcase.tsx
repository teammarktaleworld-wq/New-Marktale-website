"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Eye, Heart } from "lucide-react";

const reels = [
  {
    id: 1,
    title: "Delhi059 Behind the Scenes",
    brand: "Delhi059",
    thumbnail: "https://www.instagram.com/p/DQzEyrTDAXW/media/?size=l",
    instagramUrl: "https://www.instagram.com/p/DQzEyrTDAXW/",
    views: "125K",
    likes: "8.2K",
    duration: "0:45",
    description: "A day in the life at Canada's favorite restaurant",
  },
  {
    id: 2,
    title: "Local Ride Driver Stories",
    brand: "Local Ride",
    thumbnail: "https://www.instagram.com/p/DSG7FV_jVdI/media/?size=l",
    instagramUrl: "https://www.instagram.com/p/DSG7FV_jVdI/",
    views: "89K",
    likes: "5.4K",
    duration: "0:32",
    description: "Real drivers, real stories, zero commission",
  },
  {
    id: 4,
    title: "Dee Cee Jewelry Showcase",
    brand: "Dee Cee Accessories",
    thumbnail: "https://www.instagram.com/p/DIYuVCWz2aO/media/?size=l",
    instagramUrl: "https://www.instagram.com/p/DIYuVCWz2aO/",
    views: "92K",
    likes: "6.8K",
    duration: "0:38",
    description: "Elegance meets affordability",
  },
  {
    id: 5,
    title: "Biryani Bar Cooking Magic",
    brand: "Biryani Bar",
    thumbnail:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
    instagramUrl: undefined,
    views: "178K",
    likes: "14.2K",
    duration: "0:52",
    description: "The secret to perfect biryani",
  },
  {
    id: 6,
    title: "CabTale Safety First",
    brand: "CabTale",
    thumbnail: "https://www.instagram.com/p/DNH5BkfBSeQ/media/?size=l",
    instagramUrl: "https://www.instagram.com/p/DNH5BkfBSeQ/",
    views: "45K",
    likes: "3.2K",
    duration: "0:30",
    description: "Your safety is our priority",
  },
];

const featuredReel = reels[0];

export default function ReelsShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-sm uppercase tracking-widest rounded-full mb-4">
            Video Content
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-kestone-black mb-6">
            Reels That Resonate
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Short-form content that captures attention, tells stories, and
            drives massive engagement across social platforms.
          </p>
        </motion.div>

        {/* Featured Reel */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-kestone-black to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Video Preview */}
              <div
                className="relative aspect-[9/16] md:aspect-auto group cursor-pointer"
                onClick={() => {
                  if (featuredReel.instagramUrl) {
                    window.open(
                      featuredReel.instagramUrl,
                      "_blank",
                      "noopener,noreferrer",
                    );
                  }
                }}
              >
                <Image
                  src={featuredReel.thumbnail}
                  alt={featuredReel.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 bg-kestone-red rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play size={32} className="text-white ml-1" fill="white" />
                  </motion.div>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold uppercase rounded-full">
                  Featured
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-sm font-bold rounded-full">
                  {featuredReel.duration}
                </div>
              </div>

              {/* Info */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block px-4 py-2 bg-kestone-red/20 text-kestone-red font-bold text-sm uppercase tracking-wide rounded-full mb-4 w-fit">
                  {featuredReel.brand}
                </span>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                  {featuredReel.title}
                </h3>
                <p className="text-gray-300 font-body text-lg mb-6">
                  {featuredReel.description}
                </p>
                <div className="flex items-center gap-6 text-white mb-8">
                  <div className="flex items-center gap-2">
                    <Eye size={20} className="text-kestone-red" />
                    <span className="font-bold">{featuredReel.views}</span>
                    <span className="text-gray-400 text-sm">views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart size={20} className="text-kestone-red" />
                    <span className="font-bold">{featuredReel.likes}</span>
                    <span className="text-gray-400 text-sm">likes</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    if (featuredReel.instagramUrl) {
                      window.open(
                        featuredReel.instagramUrl,
                        "_blank",
                        "noopener,noreferrer",
                      );
                    }
                  }}
                  className="px-8 py-4 bg-kestone-red text-white font-heading font-bold rounded-full hover:bg-kestone-red/90 transition-colors w-fit"
                >
                  Watch on Instagram
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reels Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {reels.slice(1).map((reel, idx) => (
            <motion.div
              key={reel.id}
              className="group relative aspect-[9/16] rounded-xl overflow-hidden bg-gray-100 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => {
                if (reel.instagramUrl) {
                  window.open(
                    reel.instagramUrl,
                    "_blank",
                    "noopener,noreferrer",
                  );
                }
              }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={reel.thumbnail}
                alt={reel.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-heading font-bold text-sm mb-1 line-clamp-2">
                    {reel.title}
                  </h4>
                  <p className="text-gray-300 text-xs mb-2">{reel.brand}</p>
                  <div className="flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1">
                      <Eye size={12} />
                      {reel.views}
                    </span>
                    <span>{reel.duration}</span>
                  </div>
                </div>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 bg-kestone-red/90 rounded-full flex items-center justify-center">
                  <Play size={24} className="text-white ml-1" fill="white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
