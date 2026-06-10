"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, TrendingUp, Users } from "lucide-react";
import type { Project } from "@/lib/projects";

interface Delhi059PageProps {
  project: Project;
}

const instagramPosts = [
  "https://www.instagram.com/p/DQB79pECXF6/",
  "https://www.instagram.com/p/DP-EWKpiWbQ/",
  "https://www.instagram.com/p/DPzt3oOjetG/",
  "https://www.instagram.com/p/DNPL_92J3NZ/",
  "https://www.instagram.com/p/DNI7FAbR0uL/",
  "https://www.instagram.com/p/DNUMOCrJsIh/",
];

const reels = [
  "https://www.instagram.com/p/DQhlZJaDmbh/",
  "https://www.instagram.com/p/DQB79pECXF6/",
  "https://www.instagram.com/p/DP-EWKpiWbQ/",
];

export default function Delhi059Page({ project }: Delhi059PageProps) {
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    // Trigger logo animation after component mounts
    const timer = setTimeout(() => setLogoLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#3D0000] min-h-screen">
      {/* Back Link */}
      <div className="container mx-auto px-6 pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-[#DAA520] hover:text-[#FFD700] transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000] via-[#6B0000] to-[#5C0000]" />

        {/* Gold Shimmer Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DAA520] to-transparent animate-shimmer" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: logoLoaded ? 1 : 0,
              scale: logoLoaded ? 1 : 0.8,
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-[#DAA520] shadow-2xl shadow-[#DAA520]/30">
              <Image
                src="/delhi059-logo.jpg"
                alt="Delhi 059 Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-7xl font-heading font-bold text-white mb-6"
          >
            Delhi 059
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-2xl md:text-3xl text-[#DAA520] font-light tracking-wide"
          >
            Modern Indian Luxury in Canada
          </motion.p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#3D0000] to-transparent" />
      </section>

      {/* Featured Reel Section */}
      <section className="py-20 bg-[#3D0000]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-heading font-bold text-[#DAA520] text-center mb-12">
              The Story in Motion
            </h2>

            <div className="relative rounded-3xl overflow-hidden border-2 border-[#DAA520] shadow-2xl shadow-[#DAA520]/20">
              <div className="aspect-[9/16] max-h-[600px] mx-auto bg-black">
                <iframe
                  src="https://www.instagram.com/p/DQhlZJaDmbh/embed"
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-20 bg-[#4A0000]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold text-[#DAA520] text-center mb-16">
            Our Visual Journey
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {instagramPosts.map((post, index) => (
              <motion.a
                key={index}
                href={post}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 20px 60px rgba(218, 165, 32, 0.3), 0 0 20px rgba(218, 165, 32, 0.5)",
                }}
                className="relative aspect-square rounded-2xl overflow-hidden bg-black border border-[#DAA520]/30 transition-all duration-300 group"
              >
                <iframe
                  src={`${post}embed`}
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#DAA520]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-32 bg-[#6B0000] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, #DAA520 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-heading font-bold text-white mb-8"
            >
              From <span className="text-[#DAA520]">Zero</span> to{" "}
              <span className="text-[#DAA520]">Icon</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-[#E5E5E5] leading-relaxed space-y-6"
            >
              <p>
                Delhi 059 isn't just a restaurant—it's a{" "}
                <span className="text-[#DAA520] font-semibold">
                  cultural movement
                </span>
                . Born in Windsor, Canada, we brought the soul of Delhi's
                streets to Canadian palates.
              </p>

              <p>
                No ads. No gimmicks. Just{" "}
                <span className="text-[#DAA520] font-semibold">
                  authentic flavors
                </span>
                ,
                <span className="text-[#DAA520] font-semibold">
                  {" "}
                  community love
                </span>
                , and
                <span className="text-[#DAA520] font-semibold">
                  {" "}
                  650+ five-star stories
                </span>
                .
              </p>

              <p className="text-2xl md:text-3xl font-bold text-[#DAA520] pt-8">
                This is what happens when heritage meets hustle.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reels Strip */}
      <section className="py-20 bg-[#3D0000]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold text-[#DAA520] text-center mb-12">
            More Stories
          </h2>

          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-5 pb-4" style={{ width: "max-content" }}>
              {reels.map((reel, index) => (
                <motion.a
                  key={index}
                  href={reel}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-2xl overflow-hidden border border-[#DAA520] shadow-lg hover:shadow-[#DAA520]/30 transition-all duration-300"
                  style={{ width: "300px", height: "533px" }}
                >
                  <iframe
                    src={`${reel}embed`}
                    className="w-full h-full"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Did Section */}
      <section className="py-24 bg-[#4A0000]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#DAA520] text-center mb-16">
            What We Delivered
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Sparkles,
                title: "Content Creation",
                description: "Viral-worthy content that tells your story",
              },
              {
                icon: TrendingUp,
                title: "Branding",
                description: "Identity that commands attention",
              },
              {
                icon: Users,
                title: "Social Growth",
                description: "650+ organic reviews, zero ad spend",
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white/5 border border-[#DAA520]/20 rounded-2xl p-10 text-center hover:bg-white/10 hover:border-[#DAA520]/40 transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-[#DAA520] mx-auto mb-6" />
                  <h3 className="text-2xl font-heading font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#E5E5E5] text-lg">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[#3D0000] relative overflow-hidden">
        {/* Radial Gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-[#5C0000] via-[#3D0000] to-[#2A0000]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Ready to Build Your Legacy?
            </h2>

            <p className="text-xl md:text-2xl text-[#DAA520] mb-12">
              Let's create your brand story
            </p>

            <Link
              href="/contact"
              className="inline-block px-12 py-4 text-lg font-bold uppercase tracking-widest border-2 border-[#DAA520] text-[#DAA520] rounded-lg hover:bg-[#DAA520] hover:text-[#3D0000] transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </div>
  );
}
