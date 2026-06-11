"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/logos/Biryani-Bar-Kitchener-Logo-1-scaled-1.png",
  "/logos/CCL-Logo-1.png",
  "/logos/CREATIVE-KITCHENS-WARDROBE-LOGO-HD-1-scaled.png",
  "/logos/Dee-Cee-Accessories (1).png",
  "/logos/FreeGPSUpdate-scaled.png",
  "/logos/GSF-LOGO.png",
  "/logos/Indian-Jewelryish.png",
  "/logos/JD-Logo.png",
  "/logos/LMC-logo-scaled.png",
  "/logos/Noida-Run-logo.png",
  "/logos/Primary-Single-Logo.png",
  "/logos/Prun-Sports-logo.png",
  "/logos/SINNOVA-AGRO.png",
  "/logos/Surbhee-PEB-e1747653635952.png",
  "/logos/Theme-Interiors-e1747653537500.png",
  "/logos/Writing-Rodgers.png",
  "/logos/string-theory-logo-.png",
];

export default function LogoCarouselMobile() {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  const duration = 10; // seconds for one complete cycle (faster)

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Horizontal scrolling row */}
      <motion.div
        className="flex gap-6 items-center h-full"
        animate={{
          x: ["0%", "-33.33%"],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <motion.div
            key={`${logo}-${index}`}
            className="relative w-32 h-24 bg-slate-800 rounded-xl shadow-lg p-4 flex items-center justify-center flex-shrink-0 group hover:shadow-2xl transition-all duration-300"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-kestone-red/0 to-kestone-red/0 group-hover:from-kestone-red/5 group-hover:to-blue-500/5 rounded-xl transition-all duration-300" />
            <Image
              src={logo}
              alt="Client Logo"
              fill
              className="object-contain p-3 transition-all duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
