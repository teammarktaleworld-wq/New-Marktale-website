"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/servicesData";
import { ArrowRight } from "lucide-react";

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              href={`/services/${service.slug}`}
              key={index}
              className="block h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-50 p-6 md:p-8 rounded-3xl hover:bg-black hover:text-white transition-all duration-300 group border border-transparent hover:border-black/10 h-full flex flex-col cursor-pointer hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 text-kestone-black group-hover:bg-kestone-red group-hover:text-white transition-colors duration-300">
                  <service.icon size={28} />
                </div>

                <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-gray-300 transition-colors flex-grow">
                  {service.desc}
                </p>

                <div className="flex items-center text-sm font-bold uppercase tracking-wider text-kestone-red group-hover:text-white mt-auto">
                  Learn More{" "}
                  <ArrowRight
                    size={16}
                    className="ml-2 transform group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
