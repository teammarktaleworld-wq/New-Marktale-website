"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceCTA() {
  return (
    <section className="py-24 bg-kestone-black text-white px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Let&apos;s build something extraordinary together. Contact us today to
          discuss your project and discover how we can help you achieve your
          goals.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/contact"
            className="bg-kestone-red text-white px-10 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            Start Your Project <ArrowRight size={20} />
          </Link>
          <Link
            href="/projects"
            className="px-10 py-4 rounded-full font-bold text-lg uppercase tracking-wider border border-white hover:bg-white hover:text-black transition-all"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
