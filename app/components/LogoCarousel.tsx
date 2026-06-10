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

// Split logos into two columns
const column1 = logos.slice(0, Math.ceil(logos.length / 2));
const column2 = logos.slice(Math.ceil(logos.length / 2));

interface LogoColumnProps {
  logos: string[];
  direction: "up" | "down";
  delay?: number;
}

const LogoColumn: React.FC<LogoColumnProps> = ({
  logos,
  direction,
  delay = 0,
}) => {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  const duration = 30; // seconds for one complete cycle

  return (
    <div className="relative h-full overflow-hidden">
      <motion.div
        className="flex flex-col gap-8"
        animate={{
          y: direction === "up" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          delay: delay,
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <motion.div
            key={`${logo}-${index}`}
            className="relative w-40 h-32 bg-slate-800 rounded-xl shadow-lg p-5 flex items-center justify-center group hover:shadow-2xl transition-all duration-300"
            whileHover={{
              scale: 1.1,
              rotate: [0, -2, 2, -2, 0],
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
};

export default function LogoCarousel() {
  return (
    <div className="relative h-full w-full">
      {/* Two columns with opposite directions - with 3D rotation */}
      <div
        className="flex gap-6 h-full"
        style={{
          transform: "perspective(1000px) rotateY(-8deg) rotateX(2deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <LogoColumn logos={column1} direction="up" />
        <LogoColumn logos={column2} direction="down" delay={0.5} />
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -top-10 -right-10 w-40 h-40 bg-kestone-red/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
