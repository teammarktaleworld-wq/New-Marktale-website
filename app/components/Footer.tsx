"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  ArrowRight,
  Send,
  Heart,
  Shield,
  Globe,
  Award,
  Clock,
  CheckCircle,
} from "lucide-react";
import { services } from "@/lib/servicesData";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/marktaleworld",
      label: "Facebook",
      color: "blue",
    },
    {
      icon: Twitter,
      href: "https://x.com/MarktaleAi",
      label: "Twitter",
      color: "black",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/marktaleworld/posts/?feedView=all",
      label: "LinkedIn",
      color: "blue",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/marktaleworld/",
      label: "Instagram",
      color: "yellow",
    },
  ];

  const trustBadges = [
    { icon: Award, label: "Award Winning", color: "yellow" },
    { icon: Shield, label: "ISO Certified", color: "blue" },
    { icon: Globe, label: "Global Reach", color: "black" },
    { icon: Clock, label: "24/7 Support", color: "blue" },
  ];

  return (
    <footer
      className="relative bg-black text-white overflow-hidden"
      id="contact"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-16 pb-8">
        {/* Trust Badges Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12 pb-8 border-b border-white/10"
        >
          {trustBadges.map((badge, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-all"
            >
              <badge.icon
                className={`w-3.5 h-3.5 ${
                  badge.color === "blue"
                    ? "text-blue-400"
                    : badge.color === "yellow"
                      ? "text-yellow-500"
                      : "text-white"
                }`}
              />
              <span className="text-xs text-white/70">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="relative block w-40 h-12 mb-6">
              <Image
                src="/images/image.png"
                alt="MarkTale"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 160px, 160px"
                priority
              />
            </Link>

            <p className="text-white/50 mb-6 leading-relaxed text-sm">
              MarkTale – Powered by AI
              <br />A Unit of MarkTale World Private Limited
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 group ${
                    social.color === "blue"
                      ? "bg-blue-600/20 hover:bg-blue-600"
                      : social.color === "yellow"
                        ? "bg-yellow-500/20 hover:bg-yellow-500"
                        : "bg-white/10 hover:bg-white"
                  }`}
                >
                  <social.icon
                    size={16}
                    className={`transition-colors ${
                      social.color === "blue"
                        ? "text-blue-400 group-hover:text-white"
                        : social.color === "yellow"
                          ? "text-yellow-500 group-hover:text-black"
                          : "text-white/70 group-hover:text-black"
                    }`}
                  />
                </motion.a>
              ))}
            </div>

            {/* Trust Text */}
            <div className="flex items-center gap-2 mt-6">
              <Heart className="w-3.5 h-3.5 text-red-500" />
              <span className="text-[10px] text-white/40">
                150+ Happy Clients
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-white flex items-center gap-2">
              <Sparkles size={16} className="text-blue-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Events & Awards", href: "/awards" },
                { name: "Projects", href: "/projects" },
                { name: "Blogs", href: "/blogs" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-blue-400 transition-colors text-sm flex items-center gap-1 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-white flex items-center gap-2">
              <Sparkles size={16} className="text-yellow-500" />
              Services
            </h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/50 hover:text-yellow-500 transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-yellow-500 hover:text-white transition-colors text-sm font-semibold inline-flex items-center gap-1 group"
                >
                  View All Services
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info + Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-white flex items-center gap-2">
              <Sparkles size={16} className="text-blue-400" />
              Contact Us
            </h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 group">
                <MapPin
                  size={18}
                  className="text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform"
                />
                <span className="text-white/50 text-sm group-hover:text-white/70 transition-colors">
                  Plot no. 141, Sec. 14, Dwarka, New Delhi – 110078
                </span>
              </li>
             
              <li className="flex items-center gap-3 group">
                <Mail
                  size={18}
                  className="text-blue-400 group-hover:scale-110 transition-transform"
                />
                <a
                  href="mailto:info@marktaleworld.com"
                  className="text-white/50 hover:text-blue-400 transition-colors text-sm"
                >
                  teammarktaleworld@gmail.com
                </a>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <p className="text-xs text-white/40 mb-3 flex items-center gap-1">
                <Mail size={12} className="text-yellow-500" />
                Subscribe to our newsletter
              </p>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg text-sm text-white placeholder-white/40 focus:outline-none focus:border-blue-400 transition-colors"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-3 py-2 bg-blue-600 rounded-r-lg hover:bg-blue-700 transition-colors"
                >
                  {isSubscribed ? (
                    <CheckCircle size={16} className="text-white" />
                  ) : (
                    <Send size={16} className="text-white" />
                  )}
                </motion.button>
              </form>
              {isSubscribed && (
                <p className="text-[10px] text-green-400 mt-2">
                  Thanks for subscribing!
                </p>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/30 text-xs">
            © {currentYear} MarkTale World Private Limited. All Rights Reserved.
          </p>

          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-white/30 hover:text-blue-400 transition-colors text-xs"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-white/30 hover:text-blue-400 transition-colors text-xs"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-white/30 hover:text-blue-400 transition-colors text-xs"
            >
              Cookie Policy
            </Link>
          </div>
        </motion.div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
        </motion.div>
      </div>
    </footer>
  );
}
