"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How fast can you onboard a new client?",
    a: "We move at the speed of your business. Typically, we can complete discovery and kick off execution within 5-7 business days.",
  },
  {
    q: "Do you work with pre-seed startups?",
    a: "Yes. In fact, we specialize in them. Our 'MaaS for Startups' package is designed specifically to give early-stage founders a full marketing stack without the C-suite costs.",
  },
  {
    q: "What is your pricing model?",
    a: "We offer both retainer-based models (MaaS) and project-based pricing. We believe in transparency, so there are no hidden fees or surprise billings.",
  },
  {
    q: "Can you handle international projects?",
    a: "Absolutely. We are already building global brands in Canada, USA, and India. Our team is accustomed to working across time zones and cultural nuances.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-kestone-red font-bold tracking-widest uppercase text-sm mb-4 block">
            Common Questions
          </span>
          <h2 className="text-4xl font-heading font-bold text-kestone-black">
            What to Expect
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 group hover:border-kestone-black transition-colors"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center justify-between cursor-pointer">
                {item.q}
                <Plus
                  size={20}
                  className="text-gray-400 group-hover:text-kestone-red transition-colors"
                />
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
