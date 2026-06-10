"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Users,
  Heart,
  MessageCircle,
  Share2,
  DollarSign,
  Target,
  Zap,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";

const campaigns = [
  {
    id: 1,
    brand: "Delhi059",
    influencer: "@foodie_canada",
    platform: "Instagram",
    image: "/delhi059-logo.jpg",
    followers: "250K",
    engagement: "8.5%",
    reach: "2.1M",
    conversions: "450+",
    roi: "12x",
    description: "Authentic food review that drove massive foot traffic",
    metrics: {
      likes: "45K",
      comments: "2.3K",
      shares: "1.8K",
      saves: "12K",
    },
  },
  {
    id: 2,
    brand: "Dee Cee Accessories",
    influencer: "@fashion_forward",
    platform: "Instagram",
    image: "/Feature_logos/deecee.jpg",
    followers: "180K",
    engagement: "12.3%",
    reach: "1.8M",
    conversions: "320+",
    roi: "15x",
    description: "Jewelry styling series that went viral",
    metrics: {
      likes: "38K",
      comments: "1.9K",
      shares: "2.1K",
      saves: "15K",
    },
  },
  {
    id: 3,
    brand: "Astro Nexus",
    influencer: "@cosmic_vibes",
    platform: "YouTube",
    image: "/Feature_logos/astronexus.jpg",
    followers: "420K",
    engagement: "6.8%",
    reach: "3.5M",
    conversions: "890+",
    roi: "18x",
    description: "Weekly horoscope series with massive engagement",
    metrics: {
      likes: "67K",
      comments: "4.2K",
      shares: "3.5K",
      saves: "22K",
    },
  },
  {
    id: 4,
    brand: "Biryani Bar",
    influencer: "@food_explorer",
    platform: "Instagram",
    image: "/Feature_logos/biryanibar.jpg",
    followers: "310K",
    engagement: "9.2%",
    reach: "2.8M",
    conversions: "670+",
    roi: "14x",
    description: "Authentic biryani launch that went viral",
    metrics: {
      likes: "52K",
      comments: "3.1K",
      shares: "2.9K",
      saves: "18K",
    },
  },
];

const stats = [
  {
    icon: Users,
    number: "50+",
    label: "Influencer Partnerships",
    color: "text-pink-500",
  },
  {
    icon: TrendingUp,
    number: "25M+",
    label: "Total Reach",
    color: "text-purple-500",
  },
  {
    icon: DollarSign,
    number: "15x",
    label: "Average ROI",
    color: "text-green-500",
  },
  {
    icon: Zap,
    number: "95%",
    label: "Campaign Success Rate",
    color: "text-yellow-500",
  },
];

const platformIcons = {
  Instagram: Instagram,
  YouTube: Youtube,
  Twitter: Twitter,
};

export default function InfluencerMarketing() {
  const [selectedCampaign, setSelectedCampaign] = useState(campaigns[0]);

  return (
    <section className="py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-300 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold text-sm uppercase tracking-widest rounded-full shadow-lg">
              <Zap size={16} />
              Influencer Marketing
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            <span className="text-kestone-black">Campaigns That</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              Break The Internet
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-body leading-relaxed">
            We don't just find influencers—we create{" "}
            <span className="font-bold text-purple-600">viral moments</span>,
            build{" "}
            <span className="font-bold text-pink-600">
              authentic partnerships
            </span>
            , and deliver
            <span className="font-bold text-blue-600">
              {" "}
              measurable results
            </span>{" "}
            that transform brands.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 ${stat.color} bg-opacity-10 rounded-full mb-3`}
              >
                <stat.icon className={stat.color} size={28} />
              </div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-kestone-black mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-body">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Campaign Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Campaign Selector */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-kestone-black mb-6">
              Featured Campaigns
            </h3>
            {campaigns.map((campaign, idx) => (
              <motion.div
                key={campaign.id}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedCampaign.id === campaign.id
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-xl scale-105"
                    : "bg-white/80 backdrop-blur-sm hover:bg-white shadow-md hover:shadow-lg"
                }`}
                onClick={() => setSelectedCampaign(campaign)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={campaign.image}
                      alt={campaign.brand}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4
                        className={`font-heading font-bold ${selectedCampaign.id === campaign.id ? "text-white" : "text-kestone-black"}`}
                      >
                        {campaign.brand}
                      </h4>
                      {React.createElement(
                        platformIcons[
                          campaign.platform as keyof typeof platformIcons
                        ],
                        {
                          size: 16,
                          className:
                            selectedCampaign.id === campaign.id
                              ? "text-white"
                              : "text-pink-500",
                        },
                      )}
                    </div>
                    <p
                      className={`text-sm font-body ${selectedCampaign.id === campaign.id ? "text-white/90" : "text-gray-600"}`}
                    >
                      {campaign.influencer}
                    </p>
                  </div>
                  <div className="text-right">
                    <div
                      className={`text-2xl font-heading font-bold ${selectedCampaign.id === campaign.id ? "text-white" : "text-purple-600"}`}
                    >
                      {campaign.roi}
                    </div>
                    <div
                      className={`text-xs ${selectedCampaign.id === campaign.id ? "text-white/80" : "text-gray-500"}`}
                    >
                      ROI
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Campaign Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCampaign.id}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <div className="relative aspect-square">
                <Image
                  src={selectedCampaign.image}
                  alt={selectedCampaign.brand}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-sm rounded-full shadow-lg">
                  {selectedCampaign.platform}
                </div>
              </div>

              {/* Details */}
              <div className="p-8">
                <h3 className="text-3xl font-heading font-bold text-kestone-black mb-3">
                  {selectedCampaign.brand}
                </h3>
                <p className="text-gray-600 font-body text-lg mb-6">
                  {selectedCampaign.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl">
                    <div className="text-2xl font-heading font-bold text-pink-600 mb-1">
                      {selectedCampaign.reach}
                    </div>
                    <div className="text-sm text-gray-600 font-body">
                      Total Reach
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                    <div className="text-2xl font-heading font-bold text-purple-600 mb-1">
                      {selectedCampaign.engagement}
                    </div>
                    <div className="text-sm text-gray-600 font-body">
                      Engagement Rate
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                    <div className="text-2xl font-heading font-bold text-blue-600 mb-1">
                      {selectedCampaign.conversions}
                    </div>
                    <div className="text-sm text-gray-600 font-body">
                      Conversions
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                    <div className="text-2xl font-heading font-bold text-green-600 mb-1">
                      {selectedCampaign.roi}
                    </div>
                    <div className="text-sm text-gray-600 font-body">
                      Return on Investment
                    </div>
                  </div>
                </div>

                {/* Social Metrics */}
                <div className="flex items-center justify-around p-6 bg-gray-50 rounded-xl">
                  <div className="text-center">
                    <Heart className="text-pink-500 mx-auto mb-2" size={24} />
                    <div className="font-heading font-bold text-kestone-black">
                      {selectedCampaign.metrics.likes}
                    </div>
                    <div className="text-xs text-gray-500">Likes</div>
                  </div>
                  <div className="text-center">
                    <MessageCircle
                      className="text-blue-500 mx-auto mb-2"
                      size={24}
                    />
                    <div className="font-heading font-bold text-kestone-black">
                      {selectedCampaign.metrics.comments}
                    </div>
                    <div className="text-xs text-gray-500">Comments</div>
                  </div>
                  <div className="text-center">
                    <Share2
                      className="text-purple-500 mx-auto mb-2"
                      size={24}
                    />
                    <div className="font-heading font-bold text-kestone-black">
                      {selectedCampaign.metrics.shares}
                    </div>
                    <div className="text-xs text-gray-500">Shares</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl p-12 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Ready to Go Viral?
          </h3>
          <p className="text-xl text-white/90 font-body mb-8 max-w-2xl mx-auto">
            Let's create influencer campaigns that don't just get views—they get
            results.
          </p>
          <Link href="/contact">
            <motion.button
              className="px-10 py-5 bg-white text-purple-600 font-heading font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Campaign
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
