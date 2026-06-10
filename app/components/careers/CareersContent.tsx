"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const positions = [
  {
    title: "Senior Growth Strategist",
    location: "New Delhi / Remote",
    type: "Full-time",
    desc: "Lead go-to-market strategies for our Series A clients. You live and breathe CAC, LTV, and retention metrics.",
  },
  {
    title: "Full Stack Developer (Next.js)",
    location: "Remote",
    type: "Full-time",
    desc: "Build pixel-perfect digital experiences. Mastery of React, Node.js, and modern CSS frameworks required.",
  },
  {
    title: "Content Marketing Lead",
    location: "New Delhi",
    type: "Hybrid",
    desc: "Shape the voice of high-growth startups. You will manage editorial calendars and lead a team of AI + Human writers.",
  },
];

const perks = [
  "Remote-first capabilities",
  "Competitive equity packages",
  "Annual learning budget",
  "Mental health support",
  "Global team retreats",
  "Latest tech equipment",
];

export default function CareersContent() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Why Join Us */}
        <div className="mb-24">
          <div>
            <span className="text-kestone-red font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Culture
            </span>
            <h2 className="text-4xl font-heading font-bold mb-6 text-kestone-black">
              Built for Those Who <br />{" "}
              <span className="text-gray-400">Move Fast</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 font-body">
              We are not a traditional agency. We are a growth engine powered by
              technology and creativity. We look for people who are obsessed
              with solving problems and aren&apos;t afraid to break things to
              make them better.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {perks.map((perk, idx) => (
                <div
                  key={idx}
                  className="flex items-center text-gray-700 font-medium"
                >
                  <CheckCircle size={18} className="text-kestone-red mr-2" />
                  {perk}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <div className="text-center mb-16">
            <span className="text-kestone-red font-bold tracking-widest uppercase text-sm mb-4 block">
              Join The Team
            </span>
            <h2 className="text-4xl font-heading font-bold text-kestone-black">
              Open Positions
            </h2>
          </div>

          <div className="grid gap-6">
            {positions.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-neutral-50 p-8 rounded-xl border border-transparent hover:border-kestone-black transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div>
                  <h3 className="text-2xl font-heading font-bold text-kestone-black mb-2">
                    {job.title}
                  </h3>
                  <div className="flex gap-4 text-sm font-medium text-gray-400 mb-4 md:mb-0">
                    <span className="bg-white px-3 py-1 rounded-full shadow-sm">
                      {job.location}
                    </span>
                    <span className="bg-white px-3 py-1 rounded-full shadow-sm">
                      {job.type}
                    </span>
                  </div>
                  <p className="mt-4 text-gray-600 max-w-2xl">{job.desc}</p>
                </div>
                <button className="mt-6 md:mt-0 px-8 py-3 bg-kestone-black text-white font-bold rounded-full group-hover:bg-kestone-red transition-colors flex items-center">
                  Apply Now{" "}
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
