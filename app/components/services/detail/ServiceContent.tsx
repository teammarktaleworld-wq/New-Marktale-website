"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { ServiceSection } from "@/lib/servicesData";

interface ServiceContentProps {
  sections: ServiceSection[];
}

export default function ServiceContent({ sections }: ServiceContentProps) {
  return (
    <div className="bg-white">
      {sections.map((section, idx) => {
        // Alternating Layouts or Specific Styles based on 'type'
        const isHighlight = section.type === "highlight";
        const isDark = isHighlight; // Highlight sections get dark bg

        return (
          <section
            key={idx}
            className={`py-20 px-6 ${isDark ? "bg-neutral-900 text-white" : "bg-white text-kestone-black"} ${section.type === "process" ? "bg-neutral-50" : ""}`}
          >
            <div className="container mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                {section.subtitle && (
                  <span
                    className={`block mb-4 text-sm font-bold uppercase tracking-widest ${isDark ? "text-kestone-red" : "text-kestone-red"}`}
                  >
                    {section.subtitle}
                  </span>
                )}

                {section.title && (
                  <h2
                    className={`text-3xl md:text-4xl font-heading font-bold mb-8 ${isDark ? "text-white" : "text-kestone-black"}`}
                  >
                    {section.title}
                  </h2>
                )}

                <div
                  className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"} font-body space-y-6`}
                >
                  <p>{section.content}</p>
                </div>

                {section.list && section.list.length > 0 && (
                  <div
                    className={`mt-10 ${section.type === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-4"}`}
                  >
                    {section.list.map((item, listIdx) => (
                      <div key={listIdx} className="flex items-start">
                        <div
                          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4 ${isDark ? "bg-kestone-red text-white" : "bg-kestone-red/10 text-kestone-red"}`}
                        >
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <p
                          className={`${isDark ? "text-gray-200" : "text-gray-700"} font-medium`}
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
