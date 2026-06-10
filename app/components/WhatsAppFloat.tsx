"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  // const handleClick = () => {
  //     window.open('https://wa.me/9185878 70707?text=Hi! I would like to know more about your services.', '_blank');
  // };

  const handleClick = () => {
    const phone = "918587870707";

    const message = encodeURIComponent(
      "Hi! I would like to know more about your services.",
    );

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* WhatsApp Icon */}
      <MessageCircle className="w-8 h-8 relative z-10" />

      {/* Notification badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
      >
        1
      </motion.div>

      {/* Tooltip on hover */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-2 h-2 bg-gray-900 transform rotate-45 -mt-1" />
        </div>
      </div>
    </motion.button>
  );
}
