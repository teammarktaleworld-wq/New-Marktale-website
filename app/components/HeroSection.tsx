// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// // Color Schemes - Only Blue, Yellow, Black
// const colorSchemes = {
//   blue: {
//     primary: "from-blue-600 via-blue-500 to-cyan-500",
//     secondary: "from-blue-500 to-cyan-500",
//     accent: "blue-500",
//     text: "text-blue-600",
//     bg: "bg-blue-600",
//     tagline: "BLUE OCEAN STRATEGY",
//     title: "Dominate the",
//     highlight: "Digital Frontier",
//     subtitle: "Where vision meets velocity",
//     description:
//       "We transform ambitious ideas into market-leading brands. Strategic storytelling meets data-driven growth.",
//     ctaPrimary: "Launch Vision",
//     ctaSecondary: "Explore Strategy",
//   },
//   yellow: {
//     primary: "from-yellow-500 via-amber-500 to-orange-500",
//     secondary: "from-yellow-500 to-orange-500",
//     accent: "yellow-500",
//     text: "text-yellow-600",
//     bg: "bg-yellow-500",
//     tagline: "REBEL ECONOMICS",
//     title: "Break the",
//     highlight: "Status Quo",
//     subtitle: "Bold moves create bold empires",
//     description:
//       "Disruptive strategies for founders who dare to be different. Bold colors, bolder results.",
//     ctaPrimary: "Start Rebellion",
//     ctaSecondary: "Read Manifesto",
//   },
//   black: {
//     primary: "from-gray-900 via-gray-800 to-gray-700",
//     secondary: "from-gray-800 to-gray-700",
//     accent: "gray-900",
//     text: "text-gray-900",
//     bg: "bg-gray-900",
//     tagline: "PREMIUM LEGACY",
//     title: "Build Your",
//     highlight: "Immortal Empire",
//     subtitle: "Premium brands demand premium execution",
//     description:
//       "Where sophistication meets strategy. Elite positioning for founders ready to lead.",
//     ctaPrimary: "Claim Legacy",
//     ctaSecondary: "View Work",
//   },
// };

// // Founder card data - Only 3 founders (Blue, Yellow, Black)
// const founderCards = [
//   {
//     id: 1,
//     name: "Arjun Mehta",
//     title: "Founder & CEO",
//     quote: "Great brands aren't built in comfort zones. They're forged in decisive action.",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop",
//     colorScheme: colorSchemes.blue,
//     stats: [
//       { value: "10x", label: "Growth" },
//       { value: "150+", label: "Brands" },
//       { value: "98%", label: "Success" },
//     ],
//   },
//   {
//     id: 2,
//     name: "Kavya Singh",
//     title: "Chief Disruptor",
//     quote: "The biggest risk is playing it safe. Disrupt or be disrupted — there's no middle ground.",
//     image: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?w=600&h=800&fit=crop",
//     colorScheme: colorSchemes.yellow,
//     stats: [
//       { value: "15x", label: "ROI" },
//       { value: "200+", label: "Campaigns" },
//       { value: "45+", label: "Awards" },
//     ],
//   },
//   {
//     id: 3,
//     name: "Vikram Rao",
//     title: "Creative Director",
//     quote: "True leaders don't follow trends. They set standards that last for generations.",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
//     colorScheme: colorSchemes.black,
//     stats: [
//       { value: "$2B+", label: "Value" },
//       { value: "25+", label: "Years" },
//       { value: "100%", label: "Success" },
//     ],
//   },
// ];

// // Card Component
// const FounderCard = ({ card, isCenter, onClick }: { card: any; isCenter: boolean; onClick: () => void }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const scheme = card.colorScheme;

//   return (
//     <motion.div
//       className={`
//         relative cursor-pointer transition-all duration-500 flex-shrink-0
//         ${isCenter ? "w-72 md:w-80 lg:w-88" : "w-56 md:w-64"}
//       `}
//       animate={{
//         scale: isCenter ? 1 : 0.85,
//         opacity: isCenter ? 1 : 0.5,
//         zIndex: isCenter ? 20 : 10,
//       }}
//       whileHover={{ scale: isCenter ? 1.02 : 0.87 }}
//       transition={{ type: "spring", stiffness: 300, damping: 30 }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       onClick={onClick}
//     >
//       <div
//         className={`
//           relative w-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-500
//           ${isCenter ? "h-[440px] md:h-[500px]" : "h-[360px] md:h-[420px]"}
//           ${isCenter ? `ring-2 ring-offset-2 ring-${scheme.accent}` : ""}
//         `}
//       >
//         <Image
//           src={card.image}
//           alt={card.name}
//           fill
//           className="object-cover"
//           sizes="(max-width: 768px) 280px, 350px"
//           priority={isCenter}
//         />

//         {/* Gradient Overlay */}
//         <motion.div
//           className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent`}
//           animate={{
//             opacity: isHovered ? 0.9 : 0.6,
//           }}
//           transition={{ duration: 0.3 }}
//         />

//         {/* Card Content */}
//         <motion.div
//           className="absolute inset-0 flex flex-col justify-end p-5 text-white"
//           animate={{
//             y: isHovered ? -15 : 0,
//           }}
//           transition={{ duration: 0.3 }}
//         >
//           <div className="space-y-1.5">
//             <motion.div
//               className="flex items-center gap-2"
//               animate={{ x: isHovered ? 8 : 0 }}
//             >
//               <div className="w-6 h-0.5 bg-white/80" />
//               <span className="text-[10px] font-semibold tracking-wider uppercase">
//                 Founder
//               </span>
//             </motion.div>

//             <motion.h3
//               className="text-lg md:text-xl font-bold"
//               animate={{ x: isHovered ? 8 : 0 }}
//             >
//               {card.name}
//             </motion.h3>

//             <motion.p
//               className="text-xs text-white/70 font-medium"
//               animate={{ opacity: isHovered ? 1 : 0.7 }}
//             >
//               {card.title}
//             </motion.p>

//             <motion.button
//               className="mt-1 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-900 rounded-lg text-xs font-semibold w-fit"
//               initial={{ opacity: 0, y: 15 }}
//               animate={{
//                 opacity: isHovered ? 1 : 0,
//                 y: isHovered ? 0 : 15,
//               }}
//               transition={{ duration: 0.2 }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               View Profile
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// // Particle Component
// const Particles = ({ accent }: { accent: string }) => {
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     setDimensions({
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });

//     const handleResize = () => {
//       setDimensions({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   if (dimensions.width === 0) return null;

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {[...Array(15)].map((_, i) => (
//         <motion.div
//           key={`particle-${i}`}
//           className={`absolute w-0.5 h-0.5 bg-${accent} rounded-full`}
//           initial={{
//             x: Math.random() * dimensions.width,
//             y: Math.random() * dimensions.height,
//           }}
//           animate={{
//             y: [null, -100, -200],
//             x: [null, Math.random() * 80 - 40, Math.random() * 150 - 75],
//             opacity: [0, 1, 0],
//             scale: [0, 2, 0],
//           }}
//           transition={{
//             duration: 3 + Math.random() * 2,
//             repeat: Infinity,
//             delay: Math.random() * 5,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default function ModernHeroSection() {
//   const [centerIndex, setCenterIndex] = useState(1); // Start with yellow in center
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [mounted, setMounted] = useState(false);

//   const currentCard = founderCards[centerIndex];
//   const currentScheme = currentCard.colorScheme;

//   // Auto-play carousel
//   useEffect(() => {
//     if (!mounted) return;
//     if (!isAutoPlaying) return;

//     const timer = setInterval(() => {
//       nextCard();
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [isAutoPlaying, mounted, centerIndex]);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const nextCard = () => {
//     setCenterIndex((prev) => (prev + 1) % founderCards.length);
//     setIsAutoPlaying(false);
//     setTimeout(() => setIsAutoPlaying(true), 8000);
//   };

//   const prevCard = () => {
//     setCenterIndex((prev) => (prev - 1 + founderCards.length) % founderCards.length);
//     setIsAutoPlaying(false);
//     setTimeout(() => setIsAutoPlaying(true), 8000);
//   };

//   const getVisibleCards = () => {
//     const cards = [];
//     for (let i = -1; i <= 1; i++) {
//       const index = (centerIndex + i + founderCards.length) % founderCards.length;
//       cards.push({
//         ...founderCards[index],
//         isCenter: i === 0,
//         position: i,
//       });
//     }
//     return cards;
//   };

//   const visibleCards = getVisibleCards();

//   if (!mounted) {
//     return (
//       <div className="relative min-h-screen w-full bg-white overflow-hidden">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl min-h-screen flex items-center justify-center">
//           <div className="animate-pulse">Loading...</div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative min-h-screen w-full bg-white overflow-hidden">
//       {/* Animated Background */}
//       <motion.div
//         key={`bg-${centerIndex}`}
//         className={`absolute inset-0 bg-gradient-to-br ${currentScheme.primary} opacity-[0.03]`}
//         animate={{
//           scale: [1, 1.05, 1],
//         }}
//         transition={{ duration: 10, repeat: Infinity }}
//       />

//       <Particles accent={currentScheme.accent} />

//       {/* Gradient Orbs */}
//       <motion.div
//         key={`orb1-${centerIndex}`}
//         className={`absolute top-32 left-10 w-72 h-72 rounded-full bg-gradient-to-r ${currentScheme.primary} opacity-[0.08] blur-3xl`}
//         animate={{
//           x: [0, 40, 0],
//           y: [0, 20, 0],
//         }}
//         transition={{ duration: 8, repeat: Infinity }}
//       />
//       <motion.div
//         key={`orb2-${centerIndex}`}
//         className={`absolute bottom-32 right-10 w-96 h-96 rounded-full bg-gradient-to-r ${currentScheme.secondary} opacity-[0.08] blur-3xl`}
//         animate={{
//           x: [0, -40, 0],
//           y: [0, -20, 0],
//         }}
//         transition={{ duration: 10, repeat: Infinity }}
//       />

//       {/* Main Content - Added pt-24 to account for fixed navbar */}
//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-24 lg:pt-28">
//         <div className="min-h-[calc(100vh-120px)] flex items-center">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
//             {/* Left Column - Text Content */}
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`text-${centerIndex}`}
//                 initial={{ opacity: 0, x: -40 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 40 }}
//                 transition={{ duration: 0.5 }}
//                 className="space-y-5"
//               >
//                 {/* Badge */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.1 }}
//                   className="inline-flex"
//                 >
//                   <div
//                     className={`px-3 py-1 rounded-full bg-gradient-to-r ${currentScheme.primary} bg-opacity-10 backdrop-blur-sm border border-${currentScheme.accent}/20`}
//                   >
//                     <span
//                       className={`text-[11px] font-semibold tracking-wider bg-gradient-to-r ${currentScheme.primary} bg-clip-text text-transparent`}
//                     >
//                       {currentScheme.tagline}
//                     </span>
//                   </div>
//                 </motion.div>

//                 {/* Title */}
//                 <motion.h1
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.15 }}
//                   className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2] tracking-tight"
//                 >
//                   <span className="text-gray-900">{currentScheme.title}</span>
//                   <br />
//                   <span
//                     className={`bg-gradient-to-r ${currentScheme.primary} bg-clip-text text-transparent`}
//                   >
//                     {currentScheme.highlight}
//                   </span>
//                 </motion.h1>

//                 {/* Subtitle */}
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.2 }}
//                   className={`text-base md:text-lg font-medium bg-gradient-to-r ${currentScheme.primary} bg-clip-text text-transparent`}
//                 >
//                   {currentScheme.subtitle}
//                 </motion.p>

//                 {/* Description */}
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.25 }}
//                   className="text-gray-500 text-sm md:text-base leading-relaxed"
//                 >
//                   {currentScheme.description}
//                 </motion.p>

//                 {/* Stats */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 }}
//                   className="flex gap-8 pt-2"
//                 >
//                   {currentCard.stats.map((stat, idx) => (
//                     <motion.div
//                       key={idx}
//                       className="text-left"
//                       whileHover={{ y: -3 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <p
//                         className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${currentScheme.primary} bg-clip-text text-transparent`}
//                       >
//                         {stat.value}
//                       </p>
//                       <p className="text-[11px] text-gray-400 uppercase tracking-wider">
//                         {stat.label}
//                       </p>
//                     </motion.div>
//                   ))}
//                 </motion.div>

//                 {/* CTA Buttons */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.35 }}
//                   className="flex flex-wrap gap-3 pt-2"
//                 >
//                   <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                     <Link
//                       href="/contact"
//                       className={`inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r ${currentScheme.primary} text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all gap-2 text-sm`}
//                     >
//                       {currentScheme.ctaPrimary}
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </Link>
//                   </motion.div>

//                   <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                     <Link
//                       href="/work"
//                       className={`inline-flex items-center justify-center px-5 py-2.5 bg-white border-2 border-${currentScheme.accent}/20 text-${currentScheme.accent} font-semibold rounded-full shadow-sm hover:shadow-md transition-all gap-2 text-sm`}
//                     >
//                       {currentScheme.ctaSecondary}
//                     </Link>
//                   </motion.div>
//                 </motion.div>

//                 {/* Quote */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                   className={`pt-3 border-t border-${currentScheme.accent}/10`}
//                 >
//                   <div className="flex items-start gap-3">
//                     <div
//                       className={`w-8 h-8 rounded-full bg-gradient-to-r ${currentScheme.primary} flex items-center justify-center flex-shrink-0`}
//                     >
//                       <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="text-gray-500 text-xs italic leading-relaxed">
//                         "{currentCard.quote}"
//                       </p>
//                       <p className="font-semibold text-gray-800 text-xs mt-1">
//                         {currentCard.name}
//                         <span className={`text-${currentScheme.accent} text-[10px] font-normal ml-1.5`}>
//                           {currentCard.title}
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </AnimatePresence>

//             {/* Right Column - Carousel */}
//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="relative"
//             >
//               <div className="relative flex items-center justify-center min-h-[520px]">
//                 <div className="relative flex items-center justify-center gap-3 md:gap-5">
//                   {visibleCards.map((card) => (
//                     <FounderCard
//                       key={`${card.id}-${centerIndex}`}
//                       card={card}
//                       isCenter={card.isCenter}
//                       onClick={() => {
//                         const newIndex = founderCards.findIndex(c => c.id === card.id);
//                         setCenterIndex(newIndex);
//                         setIsAutoPlaying(false);
//                         setTimeout(() => setIsAutoPlaying(true), 8000);
//                       }}
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* Carousel Controls */}
//               <div className="flex justify-center gap-4 mt-6">
//                 <button
//                   onClick={prevCard}
//                   className="w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 hover:shadow-lg transition-all flex items-center justify-center group"
//                 >
//                   <svg className="w-4 h-4 text-gray-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                   </svg>
//                 </button>

//                 <div className="flex gap-1.5 items-center">
//                   {founderCards.map((_, idx) => (
//                     <button
//                       key={idx}
//                       onClick={() => {
//                         setCenterIndex(idx);
//                         setIsAutoPlaying(false);
//                         setTimeout(() => setIsAutoPlaying(true), 8000);
//                       }}
//                       className={`h-1 rounded-full transition-all duration-300 ${
//                         idx === centerIndex
//                           ? `w-5 bg-${currentScheme.accent}`
//                           : "w-1 bg-gray-300 hover:bg-gray-400"
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 <button
//                   onClick={nextCard}
//                   className="w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 hover:shadow-lg transition-all flex items-center justify-center group"
//                 >
//                   <svg className="w-4 h-4 text-gray-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }













// "use client";

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// // ─── Color Schemes ─────────────────────────────────────────────────────────────
// const colorSchemes = {
//   blue: {
//     primary: "from-blue-600 via-blue-500 to-cyan-500",
//     secondary: "from-blue-500 to-cyan-500",
//     accent: "blue-500",
//     text: "text-blue-600",
//     bg: "bg-blue-600",
//     tagline: "BLUE OCEAN STRATEGY",
//     title: "Dominate the",
//     highlight: "Digital Frontier",
//     subtitle: "Where vision meets velocity",
//     description:
//       "We transform ambitious ideas into market-leading brands. Strategic storytelling meets data-driven growth.",
//     ctaPrimary: "Launch Vision",
//     ctaSecondary: "Explore Strategy",
//     gradFrom: "#2563eb",
//     gradTo: "#06b6d4",
//   },
//   yellow: {
//     primary: "from-yellow-500 via-amber-500 to-orange-500",
//     secondary: "from-yellow-500 to-orange-500",
//     accent: "yellow-500",
//     text: "text-yellow-600",
//     bg: "bg-yellow-500",
//     tagline: "REBEL ECONOMICS",
//     title: "Break the",
//     highlight: "Status Quo",
//     subtitle: "Bold moves create bold empires",
//     description:
//       "Disruptive strategies for founders who dare to be different. Bold colors, bolder results.",
//     ctaPrimary: "Start Rebellion",
//     ctaSecondary: "Read Manifesto",
//     gradFrom: "#eab308",
//     gradTo: "#f97316",
//   },
//   black: {
//     primary: "from-gray-900 via-gray-800 to-gray-700",
//     secondary: "from-gray-800 to-gray-700",
//     accent: "gray-900",
//     text: "text-gray-900",
//     bg: "bg-gray-900",
//     tagline: "PREMIUM LEGACY",
//     title: "Build Your",
//     highlight: "Immortal Empire",
//     subtitle: "Premium brands demand premium execution",
//     description:
//       "Where sophistication meets strategy. Elite positioning for founders ready to lead.",
//     ctaPrimary: "Claim Legacy",
//     ctaSecondary: "View Work",
//     gradFrom: "#111827",
//     gradTo: "#374151",
//   },
// };

// // ─── Founder Data ───────────────────────────────────────────────────────────────
// const founderCards = [
//   {
//     id: 1,
//     name: "Arjun Mehta",
//     title: "Founder & CEO",
//     quote: "Great brands aren't built in comfort zones. They're forged in decisive action.",
//     image: "/founder/founderimage.png",
//     video: "/founder/foundervideo.mp4",
//     colorScheme: colorSchemes.blue,
//     stats: [
//       { value: "10x", label: "Growth" },
//       { value: "150+", label: "Brands" },
//       { value: "98%", label: "Success" },
//     ],
//   },
//   {
//     id: 2,
//     name: "Kavya Singh",
//     title: "Chief Disruptor",
//     quote:
//       "The biggest risk is playing it safe. Disrupt or be disrupted — there's no middle ground.",
//     image: "/founder/founderimage.png",
//     video: "/founder/foundervideo.mp4",
//     colorScheme: colorSchemes.yellow,
//     stats: [
//       { value: "15x", label: "ROI" },
//       { value: "200+", label: "Campaigns" },
//       { value: "45+", label: "Awards" },
//     ],
//   },
//   {
//     id: 3,
//     name: "Vikram Rao",
//     title: "Creative Director",
//     quote: "True leaders don't follow trends. They set standards that last for generations.",
//     image: "/founder/founderimage.png",
//     video: "/founder/foundervideo.mp4",
//     colorScheme: colorSchemes.black,
//     stats: [
//       { value: "$2B+", label: "Value" },
//       { value: "25+", label: "Years" },
//       { value: "100%", label: "Success" },
//     ],
//   },
// ];

// // ─── Image → Video slide for a single card ─────────────────────────────────────
// const IMAGE_HOLD_MS = 2800;   // how long image stays before sliding away
// const SLIDE_DURATION = 0.65;  // seconds for the slide transition

// type MediaSlideProps = {
//   card: (typeof founderCards)[0];
//   isCenter: boolean;
// };

// const MediaSlide = ({ card, isCenter }: MediaSlideProps) => {
//   const [showVideo, setShowVideo] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

//   // Reset & restart sequence whenever this card becomes the center card
//   useEffect(() => {
//     setShowVideo(false);
//     if (timerRef.current) clearTimeout(timerRef.current);

//     if (isCenter) {
//       timerRef.current = setTimeout(() => {
//         setShowVideo(true);
//       }, IMAGE_HOLD_MS);
//     }

//     return () => {
//       if (timerRef.current) clearTimeout(timerRef.current);
//     };
//   }, [isCenter, card.id]);

//   // Auto-play video once revealed
//   useEffect(() => {
//     if (showVideo && videoRef.current) {
//       videoRef.current.currentTime = 0;
//       videoRef.current.play().catch(() => {/* autoplay blocked */});
//     }
//   }, [showVideo]);

//   return (
//     <div className="relative w-full h-full overflow-hidden rounded-2xl">
//       {/* ── IMAGE (slides up and out) ── */}
//       <motion.div
//         className="absolute inset-0 will-change-transform"
//         animate={{ y: showVideo ? "-102%" : "0%" }}
//         transition={{ duration: SLIDE_DURATION, ease: [0.76, 0, 0.24, 1] }}
//       >
//         <Image
//           src={card.image}
//           alt={card.name}
//           fill
//           className="object-cover"
//           sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 380px"
//           priority={isCenter}
//         />
//         {/* subtle gradient over image */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
//       </motion.div>

//       {/* ── VIDEO (slides up from below) ── */}
//       <motion.div
//         className="absolute inset-0 will-change-transform"
//         initial={{ y: "102%" }}
//         animate={{ y: showVideo ? "0%" : "102%" }}
//         transition={{ duration: SLIDE_DURATION, ease: [0.76, 0, 0.24, 1] }}
//       >
//         <video
//           ref={videoRef}
//           src={card.video}
//           className="w-full h-full object-cover"
//           muted
//           loop
//           playsInline
//         />
//         {/* gradient over video */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
//         {/* tiny "LIVE" badge */}
//         {showVideo && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.3 }}
//             className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded-full"
//           >
//             <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
//             <span className="text-white text-[9px] font-bold tracking-widest">LIVE</span>
//           </motion.div>
//         )}
//       </motion.div>

//       {/* ── Progress bar (only on center card) ── */}
//       {isCenter && !showVideo && (
//         <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 overflow-hidden">
//           <motion.div
//             className="h-full bg-white/70"
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: 1 }}
//             transition={{ duration: IMAGE_HOLD_MS / 1000, ease: "linear" }}
//             style={{ transformOrigin: "left" }}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// // ─── Founder Card shell ─────────────────────────────────────────────────────────
// const FounderCard = ({
//   card,
//   isCenter,
//   onClick,
// }: {
//   card: (typeof founderCards)[0] & { isCenter: boolean };
//   isCenter: boolean;
//   onClick: () => void;
// }) => {
//   const [hovered, setHovered] = useState(false);
//   const scheme = card.colorScheme;

//   return (
//     <motion.div
//       className="relative cursor-pointer flex-shrink-0"
//       style={{ width: isCenter ? undefined : undefined }}
//       animate={{
//         scale: isCenter ? 1 : 0.82,
//         opacity: isCenter ? 1 : 0.45,
//         zIndex: isCenter ? 20 : 10,
//       }}
//       whileHover={{ scale: isCenter ? 1.02 : 0.85 }}
//       transition={{ type: "spring", stiffness: 280, damping: 28 }}
//       onHoverStart={() => setHovered(true)}
//       onHoverEnd={() => setHovered(false)}
//       onClick={onClick}
//     >
//       {/* Glow ring on center */}
//       {isCenter && (
//         <motion.div
//           className="absolute -inset-1 rounded-[20px] blur-sm opacity-40"
//           style={{
//             background: `linear-gradient(135deg, ${scheme.gradFrom}, ${scheme.gradTo})`,
//           }}
//           animate={{ opacity: [0.3, 0.55, 0.3] }}
//           transition={{ duration: 2.5, repeat: Infinity }}
//         />
//       )}

//       <div
//         className={[
//           "relative rounded-2xl overflow-hidden shadow-2xl",
//           "w-[200px] sm:w-[230px] md:w-[260px]",
//           isCenter
//             ? "h-[380px] sm:h-[430px] md:h-[490px]"
//             : "h-[300px] sm:h-[350px] md:h-[400px]",
//         ].join(" ")}
//       >
//         <MediaSlide card={card} isCenter={isCenter} />

//         {/* Name overlay */}
//         <motion.div
//           className="absolute inset-0 flex flex-col justify-end p-4 text-white pointer-events-none"
//           animate={{ y: hovered ? -10 : 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <motion.div className="flex items-center gap-2 mb-1" animate={{ x: hovered ? 6 : 0 }}>
//             <div className="w-5 h-px bg-white/70" />
//             <span className="text-[9px] font-semibold tracking-widest uppercase opacity-80">
//               Founder
//             </span>
//           </motion.div>
//           <motion.h3
//             className="text-sm sm:text-base md:text-lg font-bold leading-tight"
//             animate={{ x: hovered ? 6 : 0 }}
//           >
//             {card.name}
//           </motion.h3>
//           <motion.p
//             className="text-[10px] sm:text-xs text-white/60 font-medium mt-0.5"
//             animate={{ opacity: hovered ? 1 : 0.6 }}
//           >
//             {card.title}
//           </motion.p>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// // ─── Floating particles ─────────────────────────────────────────────────────────
// const Particles = ({ gradFrom, gradTo }: { gradFrom: string; gradTo: string }) => {
//   const [dims, setDims] = useState({ w: 0, h: 0 });
//   useEffect(() => {
//     setDims({ w: window.innerWidth, h: window.innerHeight });
//     const onResize = () => setDims({ w: window.innerWidth, h: window.innerHeight });
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);
//   if (!dims.w) return null;
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {Array.from({ length: 12 }).map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1 h-1 rounded-full"
//           style={{ background: gradFrom }}
//           initial={{ x: Math.random() * dims.w, y: Math.random() * dims.h, opacity: 0 }}
//           animate={{ y: [null, -120], opacity: [0, 0.7, 0], scale: [0, 1.5, 0] }}
//           transition={{
//             duration: 3.5 + Math.random() * 2,
//             repeat: Infinity,
//             delay: Math.random() * 6,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// // ─── Main Component ─────────────────────────────────────────────────────────────
// export default function ModernHeroSection() {
//   const [centerIndex, setCenterIndex] = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);
//   const [mounted, setMounted] = useState(false);

//   const current = founderCards[centerIndex];
//   const scheme = current.colorScheme;

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // Auto-advance carousel (waits for image + video to play a bit before switching)
//   useEffect(() => {
//     if (!mounted || !autoPlay) return;
//     const CARD_CYCLE_MS = IMAGE_HOLD_MS + 5000; // image hold + ~5s video
//     const t = setTimeout(() => {
//       setCenterIndex((p) => (p + 1) % founderCards.length);
//     }, CARD_CYCLE_MS);
//     return () => clearTimeout(t);
//   }, [mounted, autoPlay, centerIndex]);

//   const pauseAutoPlay = useCallback(() => {
//     setAutoPlay(false);
//     setTimeout(() => setAutoPlay(true), 12000);
//   }, []);

//   const go = useCallback(
//     (idx: number) => {
//       setCenterIndex(idx);
//       pauseAutoPlay();
//     },
//     [pauseAutoPlay]
//   );

//   const prev = () => go((centerIndex - 1 + founderCards.length) % founderCards.length);
//   const next = () => go((centerIndex + 1) % founderCards.length);

//   const visibleCards = [-1, 0, 1].map((offset) => {
//     const idx = (centerIndex + offset + founderCards.length) % founderCards.length;
//     return { ...founderCards[idx], isCenter: offset === 0, position: offset };
//   });

//   if (!mounted) {
//     return (
//       <div className="min-h-screen w-full bg-white flex items-center justify-center">
//         <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="relative min-h-screen w-full bg-white overflow-hidden">
//       {/* Background gradient wash */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={`bg-${centerIndex}`}
//           className={`absolute inset-0 bg-gradient-to-br ${scheme.primary}`}
//           style={{ opacity: 0.04 }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.04 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//         />
//       </AnimatePresence>

//       {/* Orbs */}
//       <motion.div
//         key={`orb1-${centerIndex}`}
//         className={`absolute top-20 -left-20 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none`}
//         style={{
//           background: `radial-gradient(circle, ${scheme.gradFrom}18, transparent)`,
//         }}
//         animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
//         transition={{ duration: 9, repeat: Infinity }}
//       />
//       <motion.div
//         className={`absolute bottom-0 -right-20 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none`}
//         style={{
//           background: `radial-gradient(circle, ${scheme.gradTo}15, transparent)`,
//         }}
//         animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
//         transition={{ duration: 11, repeat: Infinity }}
//       />

//       <Particles gradFrom={scheme.gradFrom} gradTo={scheme.gradTo} />

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-20 sm:pt-24 lg:pt-28 pb-12">
//         <div className="min-h-[calc(100vh-96px)] flex items-center">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">

//             {/* ── LEFT: Text ── */}
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`text-${centerIndex}`}
//                 initial={{ opacity: 0, x: -32 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 32 }}
//                 transition={{ duration: 0.45, ease: "easeOut" }}
//                 className="space-y-5 order-2 lg:order-1"
//               >
//                 {/* Tagline badge */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 16 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.08 }}
//                 >
//                   <span
//                     className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest border`}
//                     style={{
//                       background: `linear-gradient(135deg, ${scheme.gradFrom}15, ${scheme.gradTo}15)`,
//                       borderColor: `${scheme.gradFrom}30`,
//                       color: scheme.gradFrom,
//                     }}
//                   >
//                     {scheme.tagline}
//                   </span>
//                 </motion.div>

//                 {/* Title */}
//                 <motion.h1
//                   initial={{ opacity: 0, y: 16 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.13 }}
//                   className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black leading-[1.15] tracking-tight"
//                 >
//                   <span className="text-gray-900">{scheme.title}</span>
//                   <br />
//                   <span
//                     style={{
//                       background: `linear-gradient(135deg, ${scheme.gradFrom}, ${scheme.gradTo})`,
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                     }}
//                   >
//                     {scheme.highlight}
//                   </span>
//                 </motion.h1>

//                 {/* Subtitle */}
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.18 }}
//                   className="text-sm sm:text-base md:text-lg font-semibold"
//                   style={{
//                     background: `linear-gradient(135deg, ${scheme.gradFrom}, ${scheme.gradTo})`,
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                   }}
//                 >
//                   {scheme.subtitle}
//                 </motion.p>

//                 {/* Description */}
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.22 }}
//                   className="text-gray-500 text-sm leading-relaxed max-w-md"
//                 >
//                   {scheme.description}
//                 </motion.p>

//                 {/* Stats */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 16 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.27 }}
//                   className="flex gap-6 sm:gap-10 pt-1"
//                 >
//                   {current.stats.map((s, i) => (
//                     <motion.div key={i} whileHover={{ y: -3 }} transition={{ duration: 0.18 }}>
//                       <p
//                         className="text-2xl sm:text-3xl font-black"
//                         style={{
//                           background: `linear-gradient(135deg, ${scheme.gradFrom}, ${scheme.gradTo})`,
//                           WebkitBackgroundClip: "text",
//                           WebkitTextFillColor: "transparent",
//                         }}
//                       >
//                         {s.value}
//                       </p>
//                       <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest mt-0.5">
//                         {s.label}
//                       </p>
//                     </motion.div>
//                   ))}
//                 </motion.div>

//                 {/* CTAs */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 16 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.32 }}
//                   className="flex flex-wrap gap-3 pt-1"
//                 >
//                   <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//                     <Link
//                       href="/contact"
//                       className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold shadow-lg transition-shadow hover:shadow-xl"
//                       style={{
//                         background: `linear-gradient(135deg, ${scheme.gradFrom}, ${scheme.gradTo})`,
//                       }}
//                     >
//                       {scheme.ctaPrimary}
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </Link>
//                   </motion.div>

//                   <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//                     <Link
//                       href="/work"
//                       className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
//                     >
//                       {scheme.ctaSecondary}
//                     </Link>
//                   </motion.div>
//                 </motion.div>

//                 {/* Quote */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.38 }}
//                   className="pt-4 border-t border-gray-100"
//                 >
//                   <div className="flex items-start gap-3">
//                     <div
//                       className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
//                       style={{
//                         background: `linear-gradient(135deg, ${scheme.gradFrom}, ${scheme.gradTo})`,
//                       }}
//                     >
//                       <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="text-gray-500 text-xs italic leading-relaxed">
//                         "{current.quote}"
//                       </p>
//                       <p className="text-gray-800 text-xs font-semibold mt-1.5">
//                         {current.name}
//                         <span className="text-gray-400 font-normal ml-1.5">— {current.title}</span>
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </AnimatePresence>

//             {/* ── RIGHT: Carousel ── */}
//             <motion.div
//               initial={{ opacity: 0, x: 32 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="order-1 lg:order-2"
//             >
//               {/* Cards row */}
//               <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5 pb-2">
//                 {visibleCards.map((card) => (
//                   <FounderCard
//                     key={`${card.id}-${centerIndex}`}
//                     card={card}
//                     isCenter={card.isCenter}
//                     onClick={() => go(founderCards.findIndex((c) => c.id === card.id))}
//                   />
//                 ))}
//               </div>

//               {/* Controls */}
//               <div className="flex items-center justify-center gap-4 mt-5 sm:mt-7">
//                 <button
//                   onClick={prev}
//                   aria-label="Previous founder"
//                   className="w-9 h-9 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow active:scale-95"
//                 >
//                   <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                   </svg>
//                 </button>

//                 {/* Dot indicators */}
//                 <div className="flex gap-1.5 items-center">
//                   {founderCards.map((_, i) => (
//                     <button
//                       key={i}
//                       onClick={() => go(i)}
//                       aria-label={`Go to founder ${i + 1}`}
//                       className="relative overflow-hidden rounded-full transition-all duration-300"
//                       style={{
//                         width: i === centerIndex ? 24 : 6,
//                         height: 6,
//                         background: i === centerIndex ? scheme.gradFrom : "#d1d5db",
//                       }}
//                     >
//                       {/* auto-play progress inside active dot */}
//                       {i === centerIndex && autoPlay && (
//                         <motion.div
//                           className="absolute inset-y-0 left-0"
//                           style={{ background: scheme.gradTo, opacity: 0.5 }}
//                           initial={{ width: "0%" }}
//                           animate={{ width: "100%" }}
//                           transition={{
//                             duration: (IMAGE_HOLD_MS + 5000) / 1000,
//                             ease: "linear",
//                           }}
//                           key={`prog-${centerIndex}`}
//                         />
//                       )}
//                     </button>
//                   ))}
//                 </div>

//                 <button
//                   onClick={next}
//                   aria-label="Next founder"
//                   className="w-9 h-9 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow active:scale-95"
//                 >
//                   <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


















// "use client";

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// // ─── Types ───────────────────────────────────────────────────────────────────────
// type ColorScheme = {
//   primary: string;
//   tagline: string;
//   title: string;
//   highlight: string;
//   subtitle: string;
//   description: string;
//   ctaPrimary: string;
//   ctaSecondary: string;
//   gradFrom: string;
//   gradMid: string;
//   gradTo: string;
// };

// type FounderCard = {
//   id: number;
//   name: string;
//   title: string;
//   quote: string;
//   image: string;
//   video: string;
//   video2: string;
//   colorScheme: ColorScheme;
//   stats: { value: string; label: string }[];
// };

// // ─── Color Schemes ───────────────────────────────────────────────────────────────
// const colorSchemes: Record<string, ColorScheme> = {
//   blue: {
//     primary: "from-blue-600 via-blue-500 to-cyan-500",
//     tagline: "BLUE OCEAN STRATEGY",
//     title: "Dominate the",
//     highlight: "Digital Frontier",
//     subtitle: "Where vision meets velocity",
//     description:
//       "We transform ambitious ideas into market-leading brands. Strategic storytelling meets data-driven growth.",
//     ctaPrimary: "Launch Vision",
//     ctaSecondary: "Explore Strategy",
//     gradFrom: "#2563eb",
//     gradMid: "#3b82f6",
//     gradTo: "#06b6d4",
//   },
//   yellow: {
//     primary: "from-yellow-500 via-amber-500 to-orange-500",
//     tagline: "REBEL ECONOMICS",
//     title: "Break the",
//     highlight: "Status Quo",
//     subtitle: "Bold moves create bold empires",
//     description:
//       "Disruptive strategies for founders who dare to be different. Bold colors, bolder results.",
//     ctaPrimary: "Start Rebellion",
//     ctaSecondary: "Read Manifesto",
//     gradFrom: "#eab308",
//     gradMid: "#f59e0b",
//     gradTo: "#f97316",
//   },
//   black: {
//     primary: "from-gray-900 via-gray-800 to-gray-700",
//     tagline: "PREMIUM LEGACY",
//     title: "Build Your",
//     highlight: "Immortal Empire",
//     subtitle: "Premium brands demand premium execution",
//     description:
//       "Where sophistication meets strategy. Elite positioning for founders ready to lead.",
//     ctaPrimary: "Claim Legacy",
//     ctaSecondary: "View Work",
//     gradFrom: "#111827",
//     gradMid: "#1f2937",
//     gradTo: "#374151",
//   },
// };

// // ─── Founder Data ────────────────────────────────────────────────────────────────
// const founderCards: FounderCard[] = [
//   {
//     id: 1,
//     name: "Arjun Mehta",
//     title: "Founder & CEO",
//     quote: "Great brands aren't built in comfort zones. They're forged in decisive action.",
//     image: "/founder/founderimage.png",
//     video: "/founder/foundervideo.mp4",
//     video2: "/founder/foundervideo2.mp4",
//     colorScheme: colorSchemes.blue,
//     stats: [
//       { value: "10x", label: "Growth" },
//       { value: "150+", label: "Brands" },
//       { value: "98%", label: "Success" },
//     ],
//   },
//   {
//     id: 2,
//     name: "Kavya Singh",
//     title: "Chief Disruptor",
//     quote:
//       "The biggest risk is playing it safe. Disrupt or be disrupted — there's no middle ground.",
//     image: "/founder/founderimage.png",
//     video: "/founder/foundervideo.mp4",
//     video2: "/founder/foundervideo2.mp4",
//     colorScheme: colorSchemes.yellow,
//     stats: [
//       { value: "15x", label: "ROI" },
//       { value: "200+", label: "Campaigns" },
//       { value: "45+", label: "Awards" },
//     ],
//   },
//   {
//     id: 3,
//     name: "Vikram Rao",
//     title: "Creative Director",
//     quote: "True leaders don't follow trends. They set standards that last for generations.",
//     image: "/founder/founderimage.png",
//     video: "/founder/foundervideo.mp4",
//     video2: "/founder/foundervideo2.mp4",
//     colorScheme: colorSchemes.black,
//     stats: [
//       { value: "$2B+", label: "Value" },
//       { value: "25+", label: "Years" },
//       { value: "100%", label: "Success" },
//     ],
//   },
// ];

// // ─── Config ───────────────────────────────────────────────────────────────────────
// const IMAGE_HOLD_MS = 2500;
// const SLIDE_DURATION = 0.68;
// const SLIDE_EASE = [0.77, 0, 0.175, 1] as const;

// // ─── VideoProgress ────────────────────────────────────────────────────────────────
// const VideoProgress = ({ videoRef }: { videoRef: React.RefObject<HTMLVideoElement> }) => {
//   const [pct, setPct] = useState(0);
//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;
//     const tick = () => { if (v.duration) setPct((v.currentTime / v.duration) * 100); };
//     v.addEventListener("timeupdate", tick);
//     return () => v.removeEventListener("timeupdate", tick);
//   }, [videoRef]);
//   return (
//     <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 z-20">
//       <div className="h-full bg-white/85 transition-none" style={{ width: `${pct}%` }} />
//     </div>
//   );
// };

// // ─── LiveBadge ────────────────────────────────────────────────────────────────────
// const LiveBadge = ({ label }: { label: string }) => (
//   <motion.div
//     initial={{ opacity: 0, scale: 0.8 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ delay: 0.2 }}
//     className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2 py-0.5 bg-black/55 backdrop-blur-sm rounded-full"
//   >
//     <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
//     <span className="text-white text-[9px] font-bold tracking-widest">{label}</span>
//   </motion.div>
// );

// // ─── MediaStack ───────────────────────────────────────────────────────────────────
// // 3 panels: [0]=image  [1]=video  [2]=video2
// // Each panel slides in from the right as the previous finishes.
// type PanelIdx = 0 | 1 | 2;

// const MediaStack = ({
//   card,
//   isCenter,
//   onSequenceEnd,
// }: {
//   card: FounderCard;
//   isCenter: boolean;
//   onSequenceEnd: () => void;
// }) => {
//   const [panel, setPanel] = useState<PanelIdx>(0);
//   const v1Ref = useRef<HTMLVideoElement>(null);
//   const v2Ref = useRef<HTMLVideoElement>(null);
//   const imgTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
//   const endFiredRef = useRef(false);

//   // Reset + restart sequence whenever card becomes center
//   useEffect(() => {
//     setPanel(0);
//     endFiredRef.current = false;
//     if (imgTimerRef.current) clearTimeout(imgTimerRef.current);

//     // Pause & rewind videos
//     [v1Ref, v2Ref].forEach((r) => {
//       if (r.current) { r.current.pause(); r.current.currentTime = 0; }
//     });

//     if (isCenter) {
//       imgTimerRef.current = setTimeout(() => setPanel(1), IMAGE_HOLD_MS);
//     }
//     return () => { if (imgTimerRef.current) clearTimeout(imgTimerRef.current); };
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isCenter, card.id]);

//   // Play video1
//   useEffect(() => {
//     if (panel === 1 && isCenter && v1Ref.current) {
//       v1Ref.current.currentTime = 0;
//       v1Ref.current.play().catch(() => {});
//     }
//   }, [panel, isCenter]);

//   // Play video2
//   useEffect(() => {
//     if (panel === 2 && isCenter && v2Ref.current) {
//       v2Ref.current.currentTime = 0;
//       v2Ref.current.play().catch(() => {});
//     }
//   }, [panel, isCenter]);

//   const onV1End = useCallback(() => { if (isCenter) setPanel(2); }, [isCenter]);
//   const onV2End = useCallback(() => {
//     if (isCenter && !endFiredRef.current) {
//       endFiredRef.current = true;
//       onSequenceEnd();
//     }
//   }, [isCenter, onSequenceEnd]);

//   // Each panel offset: panel 0 at 0%, panel 1 at 100%, panel 2 at 200% (all shifted left by panel * 100%)
//   const x = (idx: number) => `${(idx - panel) * 100}%`;

//   return (
//     <div className="relative w-full h-full overflow-hidden rounded-2xl">
//       {/* Panel dot strip */}
//       <div className="absolute top-2.5 left-1/2 -translate-x-1/2 flex gap-[5px] z-30 pointer-events-none">
//         {[0, 1, 2].map((i) => (
//           <div
//             key={i}
//             className="rounded-full transition-all duration-300"
//             style={{
//               height: 3,
//               width: i === panel ? 16 : 5,
//               background: i === panel ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.35)",
//             }}
//           />
//         ))}
//       </div>

//       {/* ── Panel 0 — Image ── */}
//       <motion.div
//         className="absolute inset-0 will-change-transform"
//         animate={{ x: x(0) }}
//         transition={{ duration: SLIDE_DURATION, ease: SLIDE_EASE }}
//       >
//         <Image
//           src={card.image}
//           alt={card.name}
//           fill
//           className="object-cover"
//           sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 320px"
//           priority={isCenter}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
//         {/* Image countdown bar */}
//         {panel === 0 && isCenter && (
//           <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 overflow-hidden z-20">
//             <motion.div
//               className="h-full bg-white/85"
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: 1 }}
//               transition={{ duration: IMAGE_HOLD_MS / 1000, ease: "linear" }}
//               style={{ transformOrigin: "left" }}
//             />
//           </div>
//         )}
//       </motion.div>

//       {/* ── Panel 1 — Video 1 ── */}
//       <motion.div
//         className="absolute inset-0 will-change-transform"
//         animate={{ x: x(1) }}
//         transition={{ duration: SLIDE_DURATION, ease: SLIDE_EASE }}
//       >
//         <video
//           ref={v1Ref}
//           src={card.video}
//           className="w-full h-full object-cover"
//           muted
//           playsInline
//           onEnded={onV1End}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
//         {panel === 1 && isCenter && <LiveBadge label="1 / 2" />}
//         {panel === 1 && isCenter && <VideoProgress videoRef={v1Ref} />}
//       </motion.div>

//       {/* ── Panel 2 — Video 2 ── */}
//       <motion.div
//         className="absolute inset-0 will-change-transform"
//         animate={{ x: x(2) }}
//         transition={{ duration: SLIDE_DURATION, ease: SLIDE_EASE }}
//       >
//         <video
//           ref={v2Ref}
//           src={card.video2}
//           className="w-full h-full object-cover"
//           muted
//           playsInline
//           onEnded={onV2End}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
//         {panel === 2 && isCenter && <LiveBadge label="2 / 2" />}
//         {panel === 2 && isCenter && <VideoProgress videoRef={v2Ref} />}
//       </motion.div>
//     </div>
//   );
// };

// // ─── Founder Card ─────────────────────────────────────────────────────────────────
// const FounderCardComp = ({
//   card,
//   isCenter,
//   onClick,
//   onSequenceEnd,
// }: {
//   card: FounderCard & { isCenter: boolean };
//   isCenter: boolean;
//   onClick: () => void;
//   onSequenceEnd: () => void;
// }) => {
//   const [hovered, setHovered] = useState(false);
//   const s = card.colorScheme;

//   return (
//     <motion.div
//       className="relative cursor-pointer flex-shrink-0"
//       animate={{ scale: isCenter ? 1 : 0.79, opacity: isCenter ? 1 : 0.4, zIndex: isCenter ? 20 : 10 }}
//       whileHover={{ scale: isCenter ? 1.015 : 0.82 }}
//       transition={{ type: "spring", stiffness: 255, damping: 25 }}
//       onHoverStart={() => setHovered(true)}
//       onHoverEnd={() => setHovered(false)}
//       onClick={onClick}
//     >
//       {/* Glow */}
//       {isCenter && (
//         <motion.div
//           className="absolute -inset-[3px] rounded-[22px] blur-sm pointer-events-none"
//           style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}
//           animate={{ opacity: [0.2, 0.45, 0.2] }}
//           transition={{ duration: 3, repeat: Infinity }}
//         />
//       )}

//       <div
//         className={[
//           "relative rounded-2xl overflow-hidden shadow-2xl",
//           isCenter
//             ? "w-[185px] h-[310px] sm:w-[215px] sm:h-[360px] md:w-[255px] md:h-[420px] lg:w-[275px] lg:h-[455px]"
//             : "w-[125px] h-[235px] sm:w-[148px] sm:h-[275px] md:w-[178px] md:h-[322px] lg:w-[195px] lg:h-[354px]",
//         ].join(" ")}
//       >
//         <MediaStack card={card} isCenter={isCenter} onSequenceEnd={onSequenceEnd} />

//         {/* Name overlay */}
//         <motion.div
//           className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 text-white pointer-events-none z-20"
//           animate={{ y: hovered ? -8 : 0 }}
//           transition={{ duration: 0.26 }}
//         >
//           <motion.div className="flex items-center gap-1.5 mb-0.5" animate={{ x: hovered ? 4 : 0 }}>
//             <div className="w-4 h-px bg-white/70" />
//             <span className="text-[8px] font-bold tracking-[0.2em] uppercase opacity-75">Founder</span>
//           </motion.div>
//           <motion.h3
//             className="text-xs sm:text-sm md:text-base font-bold leading-tight"
//             animate={{ x: hovered ? 4 : 0 }}
//           >
//             {card.name}
//           </motion.h3>
//           <motion.p
//             className="text-[9px] sm:text-[10px] text-white/60 mt-0.5"
//             animate={{ opacity: hovered ? 1 : 0.55 }}
//           >
//             {card.title}
//           </motion.p>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// // ─── Particles ────────────────────────────────────────────────────────────────────
// const Particles = ({ color }: { color: string }) => {
//   const [dims, setDims] = useState({ w: 0, h: 0 });
//   useEffect(() => {
//     setDims({ w: window.innerWidth, h: window.innerHeight });
//     const r = () => setDims({ w: window.innerWidth, h: window.innerHeight });
//     window.addEventListener("resize", r);
//     return () => window.removeEventListener("resize", r);
//   }, []);
//   if (!dims.w) return null;
//   return (
//     <div className="absolute inset-0 pointer-events-none overflow-hidden">
//       {Array.from({ length: 10 }).map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1 h-1 rounded-full"
//           style={{ background: color }}
//           initial={{ x: Math.random() * dims.w, y: Math.random() * dims.h, opacity: 0 }}
//           animate={{ y: [null, -140], opacity: [0, 0.55, 0], scale: [0, 1.6, 0] }}
//           transition={{ duration: 3.5 + Math.random() * 2.5, repeat: Infinity, delay: Math.random() * 7 }}
//         />
//       ))}
//     </div>
//   );
// };

// // ─── Main ────────────────────────────────────────────────────────────────────────
// export default function ModernHeroSection() {
//   const [centerIndex, setCenterIndex] = useState(0);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => { setMounted(true); }, []);

//   const current = founderCards[centerIndex];
//   const s = current.colorScheme;

//   const goTo = useCallback((idx: number) => setCenterIndex(idx), []);
//   const prev = () => goTo((centerIndex - 1 + founderCards.length) % founderCards.length);
//   const next = () => goTo((centerIndex + 1) % founderCards.length);

//   // Auto-advance: called when video2 ends on the center card
//   const handleSequenceEnd = useCallback(() => {
//     setCenterIndex((p) => (p + 1) % founderCards.length);
//   }, []);

//   const visibleCards = [-1, 0, 1].map((offset) => {
//     const idx = (centerIndex + offset + founderCards.length) % founderCards.length;
//     return { ...founderCards[idx], isCenter: offset === 0 };
//   });

//   if (!mounted) {
//     return (
//       <div className="min-h-screen w-full bg-white flex items-center justify-center">
//         <div className="w-8 h-8 border-2 border-gray-100 border-t-blue-500 rounded-full animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="relative min-h-screen w-full bg-white overflow-hidden">

//       {/* Background wash */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={`bg-${centerIndex}`}
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background: `radial-gradient(ellipse 80% 60% at 70% 40%, ${s.gradFrom}0a, transparent 70%)`,
//           }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.9 }}
//         />
//       </AnimatePresence>

//       {/* Orbs */}
//       <motion.div
//         className="absolute top-0 -left-28 w-[480px] h-[480px] rounded-full blur-[90px] pointer-events-none"
//         style={{ background: `radial-gradient(circle, ${s.gradFrom}13, transparent)` }}
//         animate={{ x: [0, 26, 0], y: [0, 16, 0] }}
//         transition={{ duration: 10, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute -bottom-24 -right-24 w-[560px] h-[560px] rounded-full blur-[100px] pointer-events-none"
//         style={{ background: `radial-gradient(circle, ${s.gradTo}10, transparent)` }}
//         animate={{ x: [0, -22, 0], y: [0, -14, 0] }}
//         transition={{ duration: 13, repeat: Infinity }}
//       />

//       <Particles color={s.gradFrom} />

//       {/* Main layout */}
//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-20 sm:pt-24 lg:pt-28 pb-10">
//         <div className="min-h-[calc(100vh-80px)] flex items-center">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center w-full">

//             {/* LEFT — text */}
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`txt-${centerIndex}`}
//                 initial={{ opacity: 0, x: -26 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 26 }}
//                 transition={{ duration: 0.42, ease: "easeOut" }}
//                 className="space-y-4 sm:space-y-5 order-2 lg:order-1"
//               >
//                 {/* Tagline */}
//                 <motion.span
//                   initial={{ opacity: 0, y: 12 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.06 }}
//                   className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold tracking-widest border"
//                   style={{
//                     background: `linear-gradient(135deg, ${s.gradFrom}12, ${s.gradTo}12)`,
//                     borderColor: `${s.gradFrom}2e`,
//                     color: s.gradFrom,
//                   }}
//                 >
//                   {s.tagline}
//                 </motion.span>

//                 {/* Heading */}
//                 <motion.h1
//                   initial={{ opacity: 0, y: 12 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.11 }}
//                   className="text-[clamp(1.9rem,5vw,3.7rem)] font-black leading-[1.12] tracking-tight"
//                 >
//                   <span className="text-gray-900">{s.title}</span>
//                   <br />
//                   <span
//                     style={{
//                       background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradMid}, ${s.gradTo})`,
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                     }}
//                   >
//                     {s.highlight}
//                   </span>
//                 </motion.h1>

//                 {/* Subtitle */}
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.16 }}
//                   className="text-sm sm:text-base md:text-lg font-semibold"
//                   style={{
//                     background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})`,
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                   }}
//                 >
//                   {s.subtitle}
//                 </motion.p>

//                 {/* Description */}
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.2 }}
//                   className="text-gray-500 text-sm leading-relaxed max-w-[420px]"
//                 >
//                   {s.description}
//                 </motion.p>

//                 {/* Stats */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 12 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.24 }}
//                   className="flex gap-6 sm:gap-10 pt-1"
//                 >
//                   {current.stats.map((stat, i) => (
//                     <motion.div key={i} whileHover={{ y: -4 }} transition={{ duration: 0.18 }}>
//                       <p
//                         className="text-2xl sm:text-3xl font-black"
//                         style={{
//                           background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})`,
//                           WebkitBackgroundClip: "text",
//                           WebkitTextFillColor: "transparent",
//                         }}
//                       >
//                         {stat.value}
//                       </p>
//                       <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">
//                         {stat.label}
//                       </p>
//                     </motion.div>
//                   ))}
//                 </motion.div>

//                 {/* CTAs */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 12 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.28 }}
//                   className="flex flex-wrap gap-3 pt-1"
//                 >
//                   <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//                     <Link
//                       href="/contact"
//                       className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold shadow-md hover:shadow-lg transition-shadow"
//                       style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}
//                     >
//                       {s.ctaPrimary}
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </Link>
//                   </motion.div>
//                   <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//                     <Link
//                       href="/work"
//                       className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
//                     >
//                       {s.ctaSecondary}
//                     </Link>
//                   </motion.div>
//                 </motion.div>

//                 {/* Quote */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.33 }}
//                   className="pt-4 border-t border-gray-100"
//                 >
//                   <div className="flex items-start gap-3">
//                     <div
//                       className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
//                       style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}
//                     >
//                       <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="text-gray-500 text-xs italic leading-relaxed">"{current.quote}"</p>
//                       <p className="text-gray-800 text-xs font-semibold mt-1.5">
//                         {current.name}
//                         <span className="text-gray-400 font-normal ml-1.5">— {current.title}</span>
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </AnimatePresence>

//             {/* RIGHT — carousel */}
//             <motion.div
//               initial={{ opacity: 0, x: 26 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="order-1 lg:order-2"
//             >
//               {/* Cards row */}
//               <div className="flex items-end justify-center gap-2 sm:gap-3 md:gap-4">
//                 {visibleCards.map((card) => (
//                   <FounderCardComp
//                     key={`${card.id}-${centerIndex}`}
//                     card={card}
//                     isCenter={card.isCenter}
//                     onClick={() => goTo(founderCards.findIndex((c) => c.id === card.id))}
//                     onSequenceEnd={handleSequenceEnd}
//                   />
//                 ))}
//               </div>

//               {/* Nav controls */}
//               <div className="flex items-center justify-center gap-4 mt-5 sm:mt-6">
//                 <button
//                   onClick={prev}
//                   aria-label="Previous"
//                   className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow active:scale-95"
//                 >
//                   <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                   </svg>
//                 </button>

//                 <div className="flex gap-1.5 items-center">
//                   {founderCards.map((_, i) => (
//                     <button
//                       key={i}
//                       onClick={() => goTo(i)}
//                       aria-label={`Founder ${i + 1}`}
//                       className="rounded-full transition-all duration-300"
//                       style={{
//                         width: i === centerIndex ? 22 : 6,
//                         height: 5,
//                         background: i === centerIndex ? s.gradFrom : "#d1d5db",
//                       }}
//                     />
//                   ))}
//                 </div>

//                 <button
//                   onClick={next}
//                   aria-label="Next"
//                   className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow active:scale-95"
//                 >
//                   <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>

//               {/* Media legend */}
//               <div className="flex items-center justify-center gap-4 mt-3">
//                 {["Photo", "Video 1", "Video 2"].map((label, i) => (
//                   <div key={i} className="flex items-center gap-1.5">
//                     <div
//                       className="w-2 h-2 rounded-full"
//                       style={{ background: s.gradFrom, opacity: 0.3 + i * 0.28 }}
//                     />
//                     <span className="text-[10px] text-gray-400">{label}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }













// "use client";

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// // ─── Types ───────────────────────────────────────────────────────────────────────
// type ColorScheme = {
//   primary: string;
//   tagline: string;
//   title: string;
//   highlight: string;
//   subtitle: string;
//   description: string;
//   ctaPrimary: string;
//   ctaSecondary: string;
//   gradFrom: string;
//   gradMid: string;
//   gradTo: string;
// };

// type FounderData = {
//   id: number;
//   name: string;
//   title: string;
//   quote: string;
//   image: string;
//   video: string;
//   video2: string;
//   colorScheme: ColorScheme;
//   stats: { value: string; label: string }[];
// };

// // A "slide" is one card in the carousel: a founder + media type
// type MediaType = "image" | "video" | "video2";
// type Slide = {
//   founderId: number;
//   mediaType: MediaType;
//   founderIndex: number; // index into founderData array
// };

// // ─── Color Schemes ───────────────────────────────────────────────────────────────
// const colorSchemes: Record<string, ColorScheme> = {
//   blue: {
//     primary: "from-blue-600 via-blue-500 to-cyan-500",
//     tagline: "BLUE OCEAN STRATEGY",
//     title: "Dominate the",
//     highlight: "Digital Frontier",
//     subtitle: "Where vision meets velocity",
//     description:
//       "We transform ambitious ideas into market-leading brands. Strategic storytelling meets data-driven growth.",
//     ctaPrimary: "Launch Vision",
//     ctaSecondary: "Explore Strategy",
//     gradFrom: "#2563eb",
//     gradMid: "#3b82f6",
//     gradTo: "#06b6d4",
//   },
//   yellow: {
//     primary: "from-yellow-500 via-amber-500 to-orange-500",
//     tagline: "REBEL ECONOMICS",
//     title: "Break the",
//     highlight: "Status Quo",
//     subtitle: "Bold moves create bold empires",
//     description:
//       "Disruptive strategies for founders who dare to be different. Bold colors, bolder results.",
//     ctaPrimary: "Start Rebellion",
//     ctaSecondary: "Read Manifesto",
//     gradFrom: "#eab308",
//     gradMid: "#f59e0b",
//     gradTo: "#f97316",
//   },
//   black: {
//     primary: "from-gray-900 via-gray-800 to-gray-700",
//     tagline: "PREMIUM LEGACY",
//     title: "Build Your",
//     highlight: "Immortal Empire",
//     subtitle: "Premium brands demand premium execution",
//     description:
//       "Where sophistication meets strategy. Elite positioning for founders ready to lead.",
//     ctaPrimary: "Claim Legacy",
//     ctaSecondary: "View Work",
//     gradFrom: "#111827",
//     gradMid: "#1f2937",
//     gradTo: "#374151",
//   },
// };

// // ─── Founder Data ────────────────────────────────────────────────────────────────
// const founderData: FounderData[] = [
//   {
//     id: 1,
//     name: "Arjun Mehta",
//     title: "Founder & CEO",
//     quote: "Great brands aren't built in comfort zones. They're forged in decisive action.",
//     image: "/founder/founderimage.png",
//     video: "/founder/foundervideo.mp4",
//     video2: "/founder/foundervideo2.mp4",
//     colorScheme: colorSchemes.blue,
//     stats: [
//       { value: "10x", label: "Growth" },
//       { value: "150+", label: "Brands" },
//       { value: "98%", label: "Success" },
//     ],
//   },
//   {
//     id: 2,
//     name: "Kavya Singh",
//     title: "Chief Disruptor",
//     quote:
//       "The biggest risk is playing it safe. Disrupt or be disrupted — there's no middle ground.",
//     image: "/founder/founderimage.png",
//     video: "/founder/foundervideo.mp4",
//     video2: "/founder/foundervideo2.mp4",
//     colorScheme: colorSchemes.yellow,
//     stats: [
//       { value: "15x", label: "ROI" },
//       { value: "200+", label: "Campaigns" },
//       { value: "45+", label: "Awards" },
//     ],
//   },
//   {
//     id: 3,
//     name: "Vikram Rao",
//     title: "Creative Director",
//     quote: "True leaders don't follow trends. They set standards that last for generations.",
//     image: "/founder/founderimage.png",
//     video: "/founder/foundervideo.mp4",
//     video2: "/founder/foundervideo2.mp4",
//     colorScheme: colorSchemes.black,
//     stats: [
//       { value: "$2B+", label: "Value" },
//       { value: "25+", label: "Years" },
//       { value: "100%", label: "Success" },
//     ],
//   },
// ];

// // ─── Build flat slide list: [F1-img, F1-vid, F1-vid2, F2-img, F2-vid, F2-vid2, F3-img, ...]
// const allSlides: Slide[] = founderData.flatMap((f, fi) => [
//   { founderId: f.id, mediaType: "image", founderIndex: fi },
//   { founderId: f.id, mediaType: "video", founderIndex: fi },
//   { founderId: f.id, mediaType: "video2", founderIndex: fi },
// ]);
// const TOTAL_SLIDES = allSlides.length; // 9

// // ─── Config ───────────────────────────────────────────────────────────────────────
// const IMAGE_HOLD_MS = 2500;
// const SLIDE_DURATION = 0.68;
// const SLIDE_EASE = [0.77, 0, 0.175, 1] as const;

// // ─── VideoProgress ────────────────────────────────────────────────────────────────
// const VideoProgress = ({ videoRef }: { videoRef: React.RefObject<HTMLVideoElement> }) => {
//   const [pct, setPct] = useState(0);
//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;
//     const tick = () => {
//       if (v.duration) setPct((v.currentTime / v.duration) * 100);
//     };
//     v.addEventListener("timeupdate", tick);
//     return () => v.removeEventListener("timeupdate", tick);
//   }, [videoRef]);
//   return (
//     <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 z-20">
//       <div className="h-full bg-white/85 transition-none" style={{ width: `${pct}%` }} />
//     </div>
//   );
// };

// // ─── LiveBadge ────────────────────────────────────────────────────────────────────
// const LiveBadge = ({ label }: { label: string }) => (
//   <motion.div
//     initial={{ opacity: 0, scale: 0.8 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ delay: 0.2 }}
//     className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2 py-0.5 bg-black/55 backdrop-blur-sm rounded-full"
//   >
//     <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
//     <span className="text-white text-[9px] font-bold tracking-widest">{label}</span>
//   </motion.div>
// );

// // ─── SingleMediaCard ──────────────────────────────────────────────────────────────
// // Renders ONE card showing exactly one media type (image | video | video2).
// // isCenter = it's the focused card in the carousel.
// const SingleMediaCard = ({
//   slide,
//   founder,
//   isCenter,
//   onMediaEnd,
// }: {
//   slide: Slide;
//   founder: FounderData;
//   isCenter: boolean;
//   onMediaEnd: () => void;
// }) => {
//   const [hovered, setHovered] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const endFiredRef = useRef(false);
//   const imgTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
//   const s = founder.colorScheme;

//   // When this card becomes center, start its media
//   useEffect(() => {
//     endFiredRef.current = false;
//     if (imgTimerRef.current) clearTimeout(imgTimerRef.current);

//     if (videoRef.current) {
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0;
//     }

//     if (!isCenter) return;

//     if (slide.mediaType === "image") {
//       imgTimerRef.current = setTimeout(() => {
//         if (!endFiredRef.current) {
//           endFiredRef.current = true;
//           onMediaEnd();
//         }
//       }, IMAGE_HOLD_MS);
//     } else {
//       // video or video2
//       if (videoRef.current) {
//         videoRef.current.currentTime = 0;
//         videoRef.current.play().catch(() => {});
//       }
//     }

//     return () => {
//       if (imgTimerRef.current) clearTimeout(imgTimerRef.current);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isCenter, slide.founderId, slide.mediaType]);

//   const onVideoEnd = useCallback(() => {
//     if (isCenter && !endFiredRef.current) {
//       endFiredRef.current = true;
//       onMediaEnd();
//     }
//   }, [isCenter, onMediaEnd]);

//   const videoSrc = slide.mediaType === "video" ? founder.video : founder.video2;
//   const videoLabel = slide.mediaType === "video" ? "1 / 2" : "2 / 2";

//   return (
//     <motion.div
//       className="relative cursor-pointer flex-shrink-0"
//       animate={{
//         scale: isCenter ? 1 : 0.79,
//         opacity: isCenter ? 1 : 0.4,
//         zIndex: isCenter ? 20 : 10,
//       }}
//       whileHover={{ scale: isCenter ? 1.015 : 0.82 }}
//       transition={{ type: "spring", stiffness: 255, damping: 25 }}
//       onHoverStart={() => setHovered(true)}
//       onHoverEnd={() => setHovered(false)}
//     >
//       {/* Glow ring */}
//       {isCenter && (
//         <motion.div
//           className="absolute -inset-[3px] rounded-[22px] blur-sm pointer-events-none"
//           style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}
//           animate={{ opacity: [0.2, 0.45, 0.2] }}
//           transition={{ duration: 3, repeat: Infinity }}
//         />
//       )}

//       <div
//         className={[
//           "relative rounded-2xl overflow-hidden shadow-2xl",
//           isCenter
//             ? "w-[185px] h-[310px] sm:w-[215px] sm:h-[360px] md:w-[255px] md:h-[420px] lg:w-[275px] lg:h-[455px]"
//             : "w-[125px] h-[235px] sm:w-[148px] sm:h-[275px] md:w-[178px] md:h-[322px] lg:w-[195px] lg:h-[354px]",
//         ].join(" ")}
//       >
//         {/* ── Image ── */}
//         {slide.mediaType === "image" && (
//           <>
//             <Image
//               src={founder.image}
//               alt={founder.name}
//               fill
//               className="object-cover"
//               sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 320px"
//               priority={isCenter}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
//             {/* Countdown bar */}
//             {isCenter && (
//               <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 overflow-hidden z-20">
//                 <motion.div
//                   className="h-full bg-white/85"
//                   initial={{ scaleX: 0 }}
//                   animate={{ scaleX: 1 }}
//                   transition={{ duration: IMAGE_HOLD_MS / 1000, ease: "linear" }}
//                   style={{ transformOrigin: "left" }}
//                 />
//               </div>
//             )}
//           </>
//         )}

//         {/* ── Video ── */}
//         {(slide.mediaType === "video" || slide.mediaType === "video2") && (
//           <>
//             <video
//               ref={videoRef}
//               src={videoSrc}
//               className="w-full h-full object-cover"
//               muted
//               playsInline
//               onEnded={onVideoEnd}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
//             {isCenter && <LiveBadge label={videoLabel} />}
//             {isCenter && <VideoProgress videoRef={videoRef} />}
//           </>
//         )}

//         {/* Name overlay */}
//         <motion.div
//           className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 text-white pointer-events-none z-20"
//           animate={{ y: hovered ? -8 : 0 }}
//           transition={{ duration: 0.26 }}
//         >
//           <motion.div className="flex items-center gap-1.5 mb-0.5" animate={{ x: hovered ? 4 : 0 }}>
//             <div className="w-4 h-px bg-white/70" />
//             <span className="text-[8px] font-bold tracking-[0.2em] uppercase opacity-75">Founder</span>
//           </motion.div>
//           <motion.h3
//             className="text-xs sm:text-sm md:text-base font-bold leading-tight"
//             animate={{ x: hovered ? 4 : 0 }}
//           >
//             {founder.name}
//           </motion.h3>
//           <motion.p
//             className="text-[9px] sm:text-[10px] text-white/60 mt-0.5"
//             animate={{ opacity: hovered ? 1 : 0.55 }}
//           >
//             {founder.title}
//           </motion.p>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// // ─── Particles ────────────────────────────────────────────────────────────────────
// const Particles = ({ color }: { color: string }) => {
//   const [dims, setDims] = useState({ w: 0, h: 0 });
//   useEffect(() => {
//     setDims({ w: window.innerWidth, h: window.innerHeight });
//     const r = () => setDims({ w: window.innerWidth, h: window.innerHeight });
//     window.addEventListener("resize", r);
//     return () => window.removeEventListener("resize", r);
//   }, []);
//   if (!dims.w) return null;
//   return (
//     <div className="absolute inset-0 pointer-events-none overflow-hidden">
//       {Array.from({ length: 10 }).map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1 h-1 rounded-full"
//           style={{ background: color }}
//           initial={{ x: Math.random() * dims.w, y: Math.random() * dims.h, opacity: 0 }}
//           animate={{ y: [null, -140], opacity: [0, 0.55, 0], scale: [0, 1.6, 0] }}
//           transition={{ duration: 3.5 + Math.random() * 2.5, repeat: Infinity, delay: Math.random() * 7 }}
//         />
//       ))}
//     </div>
//   );
// };

// // ─── Main ────────────────────────────────────────────────────────────────────────
// export default function ModernHeroSection() {
//   // centerSlideIdx is the index into allSlides[] for the currently focused card
//   const [centerSlideIdx, setCenterSlideIdx] = useState(0);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const currentSlide = allSlides[centerSlideIdx];
//   const currentFounder = founderData[currentSlide.founderIndex];
//   const s = currentFounder.colorScheme;

//   // Navigate
//   const goTo = useCallback(
//     (idx: number) => setCenterSlideIdx((idx + TOTAL_SLIDES) % TOTAL_SLIDES),
//     []
//   );
//   const prev = () => goTo(centerSlideIdx - 1);
//   const next = () => goTo(centerSlideIdx + 1);

//   // Auto-advance when center card's media finishes
//   const handleMediaEnd = useCallback(() => {
//     setCenterSlideIdx((p) => (p + 1) % TOTAL_SLIDES);
//   }, []);

//   // Build the 3 visible cards: prev / center / next
//   const visibleSlideIdxs = [-1, 0, 1].map(
//     (offset) => (centerSlideIdx + offset + TOTAL_SLIDES) % TOTAL_SLIDES
//   );

//   // Dot indicators: one per slide (9 total) — grouped visually by founder
//   // For compactness show one dot per slide
//   const dotSlides = allSlides;

//   if (!mounted) {
//     return (
//       <div className="min-h-screen w-full bg-white flex items-center justify-center">
//         <div className="w-8 h-8 border-2 border-gray-100 border-t-blue-500 rounded-full animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="relative min-h-screen w-full bg-white overflow-hidden">
//       {/* Background wash */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={`bg-${centerSlideIdx}`}
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background: `radial-gradient(ellipse 80% 60% at 70% 40%, ${s.gradFrom}0a, transparent 70%)`,
//           }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.9 }}
//         />
//       </AnimatePresence>

//       {/* Orbs */}
//       <motion.div
//         className="absolute top-0 -left-28 w-[480px] h-[480px] rounded-full blur-[90px] pointer-events-none"
//         style={{ background: `radial-gradient(circle, ${s.gradFrom}13, transparent)` }}
//         animate={{ x: [0, 26, 0], y: [0, 16, 0] }}
//         transition={{ duration: 10, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute -bottom-24 -right-24 w-[560px] h-[560px] rounded-full blur-[100px] pointer-events-none"
//         style={{ background: `radial-gradient(circle, ${s.gradTo}10, transparent)` }}
//         animate={{ x: [0, -22, 0], y: [0, -14, 0] }}
//         transition={{ duration: 13, repeat: Infinity }}
//       />

//       <Particles color={s.gradFrom} />

//       {/* Main layout */}
//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-20 sm:pt-24 lg:pt-28 pb-10">
//         <div className="min-h-[calc(100vh-80px)] flex items-center">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center w-full">

//             {/* LEFT — text (updates per slide) */}
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`txt-${centerSlideIdx}`}
//                 initial={{ opacity: 0, x: -26 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 26 }}
//                 transition={{ duration: 0.42, ease: "easeOut" }}
//                 className="space-y-4 sm:space-y-5 order-2 lg:order-1"
//               >
//                 {/* Tagline */}
//                 <motion.span
//                   initial={{ opacity: 0, y: 12 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.06 }}
//                   className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold tracking-widest border"
//                   style={{
//                     background: `linear-gradient(135deg, ${s.gradFrom}12, ${s.gradTo}12)`,
//                     borderColor: `${s.gradFrom}2e`,
//                     color: s.gradFrom,
//                   }}
//                 >
//                   {s.tagline}
//                 </motion.span>

//                 {/* Heading */}
//                 <motion.h1
//                   initial={{ opacity: 0, y: 12 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.11 }}
//                   className="text-[clamp(1.9rem,5vw,3.7rem)] font-black leading-[1.12] tracking-tight"
//                 >
//                   <span className="text-gray-900">{s.title}</span>
//                   <br />
//                   <span
//                     style={{
//                       background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradMid}, ${s.gradTo})`,
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                     }}
//                   >
//                     {s.highlight}
//                   </span>
//                 </motion.h1>

//                 {/* Subtitle */}
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.16 }}
//                   className="text-sm sm:text-base md:text-lg font-semibold"
//                   style={{
//                     background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})`,
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                   }}
//                 >
//                   {s.subtitle}
//                 </motion.p>

//                 {/* Description */}
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.2 }}
//                   className="text-gray-500 text-sm leading-relaxed max-w-[420px]"
//                 >
//                   {s.description}
//                 </motion.p>

//                 {/* Stats */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 12 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.24 }}
//                   className="flex gap-6 sm:gap-10 pt-1"
//                 >
//                   {currentFounder.stats.map((stat, i) => (
//                     <motion.div key={i} whileHover={{ y: -4 }} transition={{ duration: 0.18 }}>
//                       <p
//                         className="text-2xl sm:text-3xl font-black"
//                         style={{
//                           background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})`,
//                           WebkitBackgroundClip: "text",
//                           WebkitTextFillColor: "transparent",
//                         }}
//                       >
//                         {stat.value}
//                       </p>
//                       <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">
//                         {stat.label}
//                       </p>
//                     </motion.div>
//                   ))}
//                 </motion.div>

//                 {/* CTAs */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 12 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.28 }}
//                   className="flex flex-wrap gap-3 pt-1"
//                 >
//                   <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//                     <Link
//                       href="/contact"
//                       className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold shadow-md hover:shadow-lg transition-shadow"
//                       style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}
//                     >
//                       {s.ctaPrimary}
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </Link>
//                   </motion.div>
//                   <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//                     <Link
//                       href="/work"
//                       className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
//                     >
//                       {s.ctaSecondary}
//                     </Link>
//                   </motion.div>
//                 </motion.div>

//                 {/* Quote */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.33 }}
//                   className="pt-4 border-t border-gray-100"
//                 >
//                   <div className="flex items-start gap-3">
//                     <div
//                       className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
//                       style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}
//                     >
//                       <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="text-gray-500 text-xs italic leading-relaxed">"{currentFounder.quote}"</p>
//                       <p className="text-gray-800 text-xs font-semibold mt-1.5">
//                         {currentFounder.name}
//                         <span className="text-gray-400 font-normal ml-1.5">— {currentFounder.title}</span>
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </AnimatePresence>

//             {/* RIGHT — carousel */}
//             <motion.div
//               initial={{ opacity: 0, x: 26 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="order-1 lg:order-2"
//             >
//               {/* Cards row: prev / center / next */}
//               <div className="flex items-end justify-center gap-2 sm:gap-3 md:gap-4">
//                 {visibleSlideIdxs.map((slideIdx, position) => {
//                   const slide = allSlides[slideIdx];
//                   const founder = founderData[slide.founderIndex];
//                   const isCenter = position === 1;
//                   return (
//                     <SingleMediaCard
//                       key={`${slideIdx}-${centerSlideIdx}`}
//                       slide={slide}
//                       founder={founder}
//                       isCenter={isCenter}
//                       onMediaEnd={handleMediaEnd}
//                     />
//                   );
//                 })}
//               </div>

//               {/* Nav controls */}
//               <div className="flex items-center justify-center gap-4 mt-5 sm:mt-6">
//                 <button
//                   onClick={prev}
//                   aria-label="Previous"
//                   className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow active:scale-95"
//                 >
//                   <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                   </svg>
//                 </button>

//                 {/* Dot indicators — grouped by founder, 3 dots each */}
//                 <div className="flex gap-1 items-center">
//                   {dotSlides.map((slide, i) => {
//                     const isActive = i === centerSlideIdx;
//                     const founder = founderData[slide.founderIndex];
//                     const dotColor = founder.colorScheme.gradFrom;
//                     // Small gap between founder groups
//                     const isGroupStart = i % 3 === 0 && i !== 0;
//                     return (
//                       <React.Fragment key={i}>
//                         {isGroupStart && <div className="w-1.5" />}
//                         <button
//                           onClick={() => goTo(i)}
//                           aria-label={`Slide ${i + 1}`}
//                           className="rounded-full transition-all duration-300"
//                           style={{
//                             width: isActive ? 18 : 5,
//                             height: 5,
//                             background: isActive ? dotColor : "#d1d5db",
//                           }}
//                         />
//                       </React.Fragment>
//                     );
//                   })}
//                 </div>

//                 <button
//                   onClick={next}
//                   aria-label="Next"
//                   className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow active:scale-95"
//                 >
//                   <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>

//               {/* Media type legend */}
//               <div className="flex items-center justify-center gap-4 mt-3">
//                 {(["Photo", "Video 1", "Video 2"] as const).map((label, i) => (
//                   <div key={i} className="flex items-center gap-1.5">
//                     <div
//                       className="w-2 h-2 rounded-full"
//                       style={{ background: s.gradFrom, opacity: 0.3 + i * 0.28 }}
//                     />
//                     <span className="text-[10px] text-gray-400">{label}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }















// "use client";

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// // ─── Types ───────────────────────────────────────────────────────────────────────
// type ColorScheme = {
//   primary: string;
//   tagline: string;
//   title: string;
//   highlight: string;
//   subtitle: string;
//   description: string;
//   ctaPrimary: string;
//   ctaSecondary: string;
//   gradFrom: string;
//   gradMid: string;
//   gradTo: string;
// };

// type FounderData = {
//   id: number;
//   name: string;
//   title: string;
//   quote: string;
//   image: string;
//   video: string;
//   video2: string;
//   colorScheme: ColorScheme;
//   stats: { value: string; label: string }[];
// };

// type MediaType = "image" | "video" | "video2";
// type Slide = {
//   founderId: number;
//   mediaType: MediaType;
//   founderIndex: number;
// };

// // ─── Color Schemes ───────────────────────────────────────────────────────────────
// const colorSchemes: Record<string, ColorScheme> = {
//   blue: {
//     primary: "from-blue-600 via-blue-500 to-cyan-500",
//     tagline: "BLUE OCEAN STRATEGY",
//     title: "Dominate the",
//     highlight: "Digital Frontier",
//     subtitle: "Where vision meets velocity",
//     description:
//       "We transform ambitious ideas into market-leading brands. Strategic storytelling meets data-driven growth.",
//     ctaPrimary: "Launch Vision",
//     ctaSecondary: "Explore Strategy",
//     gradFrom: "#2563eb",
//     gradMid: "#3b82f6",
//     gradTo: "#06b6d4",
//   },
//   yellow: {
//     primary: "from-yellow-500 via-amber-500 to-orange-500",
//     tagline: "REBEL ECONOMICS",
//     title: "Break the",
//     highlight: "Status Quo",
//     subtitle: "Bold moves create bold empires",
//     description:
//       "Disruptive strategies for founders who dare to be different. Bold colors, bolder results.",
//     ctaPrimary: "Start Rebellion",
//     ctaSecondary: "Read Manifesto",
//     gradFrom: "#eab308",
//     gradMid: "#f59e0b",
//     gradTo: "#f97316",
//   },
//   black: {
//     primary: "from-gray-900 via-gray-800 to-gray-700",
//     tagline: "PREMIUM LEGACY",
//     title: "Build Your",
//     highlight: "Immortal Empire",
//     subtitle: "Premium brands demand premium execution",
//     description:
//       "Where sophistication meets strategy. Elite positioning for founders ready to lead.",
//     ctaPrimary: "Claim Legacy",
//     ctaSecondary: "View Work",
//     gradFrom: "#111827",
//     gradMid: "#1f2937",
//     gradTo: "#374151",
//   },
// };

// // ─── Founder Data ────────────────────────────────────────────────────────────────
// const founderData: FounderData[] = [
//   {
//     id: 1,
//     name: "Arjun Mehta",
//     title: "Founder & CEO",
//     quote: "Great brands aren't built in comfort zones. They're forged in decisive action.",
//     image: "/founder/founderimage.png",
//     video: "/founder/foundervideo.mp4",
//     video2: "/founder/foundervideo2.mp4",
//     colorScheme: colorSchemes.blue,
//     stats: [
//       { value: "10x", label: "Growth" },
//       { value: "150+", label: "Brands" },
//       { value: "98%", label: "Success" },
//     ],
//   },
//   {
//     id: 2,
//     name: "Kavya Singh",
//     title: "Chief Disruptor",
//     quote: "The biggest risk is playing it safe. Disrupt or be disrupted — there's no middle ground.",
//     image: "/founder/founderimage.png",
//     video: "/founder/foundervideo.mp4",
//     video2: "/founder/foundervideo2.mp4",
//     colorScheme: colorSchemes.yellow,
//     stats: [
//       { value: "15x", label: "ROI" },
//       { value: "200+", label: "Campaigns" },
//       { value: "45+", label: "Awards" },
//     ],
//   },
//   {
//     id: 3,
//     name: "Vikram Rao",
//     title: "Creative Director",
//     quote: "True leaders don't follow trends. They set standards that last for generations.",
//     image: "/founder/founderimage.png",
//     video: "/founder/foundervideo.mp4",
//     video2: "/founder/foundervideo2.mp4",
//     colorScheme: colorSchemes.black,
//     stats: [
//       { value: "$2B+", label: "Value" },
//       { value: "25+", label: "Years" },
//       { value: "100%", label: "Success" },
//     ],
//   },
// ];

// // ─── Flat slide list ──────────────────────────────────────────────────────────────
// const allSlides: Slide[] = founderData.flatMap((f, fi) => [
//   { founderId: f.id, mediaType: "image",  founderIndex: fi },
//   { founderId: f.id, mediaType: "video",  founderIndex: fi },
//   { founderId: f.id, mediaType: "video2", founderIndex: fi },
// ]);
// const TOTAL_SLIDES = allSlides.length; // 9

// // ─── Config ───────────────────────────────────────────────────────────────────────
// const IMAGE_HOLD_MS = 2500;

// // ─── VideoProgress ────────────────────────────────────────────────────────────────
// const VideoProgress = ({ videoRef }: { videoRef: React.RefObject<HTMLVideoElement> }) => {
//   const [pct, setPct] = useState(0);
//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;
//     const tick = () => { if (v.duration) setPct((v.currentTime / v.duration) * 100); };
//     v.addEventListener("timeupdate", tick);
//     return () => v.removeEventListener("timeupdate", tick);
//   }, [videoRef]);
//   return (
//     <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 z-20">
//       <div className="h-full bg-white/85 transition-none" style={{ width: `${pct}%` }} />
//     </div>
//   );
// };

// // ─── LiveBadge ────────────────────────────────────────────────────────────────────
// const LiveBadge = ({ label }: { label: string }) => (
//   <motion.div
//     initial={{ opacity: 0, scale: 0.8 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ delay: 0.2 }}
//     className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2 py-0.5 bg-black/55 backdrop-blur-sm rounded-full"
//   >
//     <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
//     <span className="text-white text-[9px] font-bold tracking-widest">{label}</span>
//   </motion.div>
// );

// // ─── SingleMediaCard ──────────────────────────────────────────────────────────────
// // CRITICAL: keyed only by slideIdx — never remounts on carousel position change.
// // isCenter drives play/pause imperatively via useEffect.
// const SingleMediaCard = ({
//   slideIdx,
//   isCenter,
//   onMediaEnd,
// }: {
//   slideIdx: number;
//   isCenter: boolean;
//   onMediaEnd: () => void;
// }) => {
//   const slide   = allSlides[slideIdx];
//   const founder = founderData[slide.founderIndex];
//   const s       = founder.colorScheme;

//   const [hovered, setHovered] = useState(false);
//   const videoRef              = useRef<HTMLVideoElement>(null);
//   const endFiredRef           = useRef(false);
//   const imgTimerRef           = useRef<ReturnType<typeof setTimeout> | null>(null);

//   // Play when center, pause when side — no key remount ever
//   useEffect(() => {
//     endFiredRef.current = false;
//     if (imgTimerRef.current) { clearTimeout(imgTimerRef.current); imgTimerRef.current = null; }

//     if (!isCenter) {
//       if (videoRef.current) videoRef.current.pause();
//       return;
//     }

//     if (slide.mediaType === "image") {
//       imgTimerRef.current = setTimeout(() => {
//         if (!endFiredRef.current) { endFiredRef.current = true; onMediaEnd(); }
//       }, IMAGE_HOLD_MS);
//     } else {
//       const v = videoRef.current;
//       if (v) { v.currentTime = 0; v.play().catch(() => {}); }
//     }

//     return () => { if (imgTimerRef.current) clearTimeout(imgTimerRef.current); };
//   // slideIdx changes identity completely (new slide), isCenter changes play state
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isCenter, slideIdx]);

//   const onVideoEnd = useCallback(() => {
//     if (isCenter && !endFiredRef.current) { endFiredRef.current = true; onMediaEnd(); }
//   }, [isCenter, onMediaEnd]);

//   const videoSrc   = slide.mediaType === "video" ? founder.video : founder.video2;
//   const videoLabel = slide.mediaType === "video" ? "1 / 2" : "2 / 2";

//   return (
//     <motion.div
//       className="relative cursor-pointer flex-shrink-0"
//       animate={{ scale: isCenter ? 1 : 0.79, opacity: isCenter ? 1 : 0.4, zIndex: isCenter ? 20 : 10 }}
//       whileHover={{ scale: isCenter ? 1.015 : 0.82 }}
//       transition={{ type: "spring", stiffness: 255, damping: 25 }}
//       onHoverStart={() => setHovered(true)}
//       onHoverEnd={() => setHovered(false)}
//     >
//       {isCenter && (
//         <motion.div
//           className="absolute -inset-[3px] rounded-[22px] blur-sm pointer-events-none"
//           style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}
//           animate={{ opacity: [0.2, 0.45, 0.2] }}
//           transition={{ duration: 3, repeat: Infinity }}
//         />
//       )}

//       <div
//         className={[
//           "relative rounded-2xl overflow-hidden shadow-2xl",
//           isCenter
//             ? "w-[185px] h-[310px] sm:w-[215px] sm:h-[360px] md:w-[255px] md:h-[420px] lg:w-[275px] lg:h-[455px]"
//             : "w-[125px] h-[235px] sm:w-[148px] sm:h-[275px] md:w-[178px] md:h-[322px] lg:w-[195px] lg:h-[354px]",
//         ].join(" ")}
//       >
//         {slide.mediaType === "image" && (
//           <>
//             <Image
//               src={founder.image} alt={founder.name} fill
//               className="object-cover"
//               sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 320px"
//               priority={isCenter}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
//             {isCenter && (
//               <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 overflow-hidden z-20">
//                 <motion.div
//                   className="h-full bg-white/85"
//                   initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
//                   transition={{ duration: IMAGE_HOLD_MS / 1000, ease: "linear" }}
//                   style={{ transformOrigin: "left" }}
//                 />
//               </div>
//             )}
//           </>
//         )}

//         {(slide.mediaType === "video" || slide.mediaType === "video2") && (
//           <>
//             <video
//               ref={videoRef} src={videoSrc}
//               className="w-full h-full object-cover"
//               muted playsInline onEnded={onVideoEnd}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
//             {isCenter && <LiveBadge label={videoLabel} />}
//             {isCenter && <VideoProgress videoRef={videoRef} />}
//           </>
//         )}

//         <motion.div
//           className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 text-white pointer-events-none z-20"
//           animate={{ y: hovered ? -8 : 0 }}
//           transition={{ duration: 0.26 }}
//         >
//           <motion.div className="flex items-center gap-1.5 mb-0.5" animate={{ x: hovered ? 4 : 0 }}>
//             <div className="w-4 h-px bg-white/70" />
//             <span className="text-[8px] font-bold tracking-[0.2em] uppercase opacity-75">Founder</span>
//           </motion.div>
//           <motion.h3 className="text-xs sm:text-sm md:text-base font-bold leading-tight" animate={{ x: hovered ? 4 : 0 }}>
//             {founder.name}
//           </motion.h3>
//           <motion.p className="text-[9px] sm:text-[10px] text-white/60 mt-0.5" animate={{ opacity: hovered ? 1 : 0.55 }}>
//             {founder.title}
//           </motion.p>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// // ─── Particles ────────────────────────────────────────────────────────────────────
// const Particles = ({ color }: { color: string }) => {
//   const [dims, setDims] = useState({ w: 0, h: 0 });
//   useEffect(() => {
//     setDims({ w: window.innerWidth, h: window.innerHeight });
//     const r = () => setDims({ w: window.innerWidth, h: window.innerHeight });
//     window.addEventListener("resize", r);
//     return () => window.removeEventListener("resize", r);
//   }, []);
//   if (!dims.w) return null;
//   return (
//     <div className="absolute inset-0 pointer-events-none overflow-hidden">
//       {Array.from({ length: 10 }).map((_, i) => (
//         <motion.div
//           key={i} className="absolute w-1 h-1 rounded-full" style={{ background: color }}
//           initial={{ x: Math.random() * dims.w, y: Math.random() * dims.h, opacity: 0 }}
//           animate={{ y: [null, -140], opacity: [0, 0.55, 0], scale: [0, 1.6, 0] }}
//           transition={{ duration: 3.5 + Math.random() * 2.5, repeat: Infinity, delay: Math.random() * 7 }}
//         />
//       ))}
//     </div>
//   );
// };

// // ─── Main ────────────────────────────────────────────────────────────────────────
// export default function ModernHeroSection() {
//   const [centerSlideIdx, setCenterSlideIdx] = useState(0);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => { setMounted(true); }, []);

//   const currentSlide   = allSlides[centerSlideIdx];
//   const currentFounder = founderData[currentSlide.founderIndex];
//   const s              = currentFounder.colorScheme;

//   // Text key = founderIndex → animates only on founder change, not sub-slide change
//   const textKey = currentSlide.founderIndex;

//   const goTo = useCallback((idx: number) => setCenterSlideIdx((idx + TOTAL_SLIDES) % TOTAL_SLIDES), []);
//   // Arrows jump founder-to-founder (every 3 slides), always landing on the image card
//   const currentFounderIdx = currentSlide.founderIndex;
//   const prev = () => goTo(((currentFounderIdx - 1 + founderData.length) % founderData.length) * 3);
//   const next = () => goTo(((currentFounderIdx + 1) % founderData.length) * 3);

//   const handleMediaEnd = useCallback(() => {
//     setCenterSlideIdx((p) => (p + 1) % TOTAL_SLIDES);
//   }, []);

//   const prevIdx = (centerSlideIdx - 1 + TOTAL_SLIDES) % TOTAL_SLIDES;
//   const nextIdx = (centerSlideIdx + 1)                % TOTAL_SLIDES;

//   if (!mounted) {
//     return (
//       <div className="min-h-screen w-full bg-white flex items-center justify-center">
//         <div className="w-8 h-8 border-2 border-gray-100 border-t-blue-500 rounded-full animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="relative min-h-screen w-full bg-white overflow-hidden">

//       <AnimatePresence mode="wait">
//         <motion.div
//           key={`bg-${textKey}`}
//           className="absolute inset-0 pointer-events-none"
//           style={{ background: `radial-gradient(ellipse 80% 60% at 70% 40%, ${s.gradFrom}0a, transparent 70%)` }}
//           initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//           transition={{ duration: 0.9 }}
//         />
//       </AnimatePresence>

//       <motion.div
//         className="absolute top-0 -left-28 w-[480px] h-[480px] rounded-full blur-[90px] pointer-events-none"
//         style={{ background: `radial-gradient(circle, ${s.gradFrom}13, transparent)` }}
//         animate={{ x: [0, 26, 0], y: [0, 16, 0] }} transition={{ duration: 10, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute -bottom-24 -right-24 w-[560px] h-[560px] rounded-full blur-[100px] pointer-events-none"
//         style={{ background: `radial-gradient(circle, ${s.gradTo}10, transparent)` }}
//         animate={{ x: [0, -22, 0], y: [0, -14, 0] }} transition={{ duration: 13, repeat: Infinity }}
//       />

//       <Particles color={s.gradFrom} />

//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-20 sm:pt-24 lg:pt-28 pb-10">
//         <div className="min-h-[calc(100vh-80px)] flex items-center">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center w-full">

//             {/* LEFT — animates only on founder change */}
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`txt-${textKey}`}
//                 initial={{ opacity: 0, x: -26 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 26 }}
//                 transition={{ duration: 0.42, ease: "easeOut" }}
//                 className="space-y-4 sm:space-y-5 order-2 lg:order-1"
//               >
//                 <motion.span
//                   initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }}
//                   className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold tracking-widest border"
//                   style={{ background: `linear-gradient(135deg, ${s.gradFrom}12, ${s.gradTo}12)`, borderColor: `${s.gradFrom}2e`, color: s.gradFrom }}
//                 >
//                   {s.tagline}
//                 </motion.span>

//                 <motion.h1
//                   initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.11 }}
//                   className="text-[clamp(1.9rem,5vw,3.7rem)] font-black leading-[1.12] tracking-tight"
//                 >
//                   <span className="text-gray-900">{s.title}</span>
//                   <br />
//                   <span style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradMid}, ${s.gradTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                     {s.highlight}
//                   </span>
//                 </motion.h1>

//                 <motion.p
//                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.16 }}
//                   className="text-sm sm:text-base md:text-lg font-semibold"
//                   style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
//                 >
//                   {s.subtitle}
//                 </motion.p>

//                 <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
//                   className="text-gray-500 text-sm leading-relaxed max-w-[420px]">
//                   {s.description}
//                 </motion.p>

//                 <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}
//                   className="flex gap-6 sm:gap-10 pt-1">
//                   {currentFounder.stats.map((stat, i) => (
//                     <motion.div key={i} whileHover={{ y: -4 }} transition={{ duration: 0.18 }}>
//                       <p className="text-2xl sm:text-3xl font-black"
//                         style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                         {stat.value}
//                       </p>
//                       <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">{stat.label}</p>
//                     </motion.div>
//                   ))}
//                 </motion.div>

//                 <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}
//                   className="flex flex-wrap gap-3 pt-1">
//                   <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//                     <Link href="/contact"
//                       className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold shadow-md hover:shadow-lg transition-shadow"
//                       style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}>
//                       {s.ctaPrimary}
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </Link>
//                   </motion.div>
//                   <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//                     <Link href="/work"
//                       className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow">
//                       {s.ctaSecondary}
//                     </Link>
//                   </motion.div>
//                 </motion.div>

//                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.33 }}
//                   className="pt-4 border-t border-gray-100">
//                   <div className="flex items-start gap-3">
//                     <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
//                       style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}>
//                       <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="text-gray-500 text-xs italic leading-relaxed">"{currentFounder.quote}"</p>
//                       <p className="text-gray-800 text-xs font-semibold mt-1.5">
//                         {currentFounder.name}
//                         <span className="text-gray-400 font-normal ml-1.5">— {currentFounder.title}</span>
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </AnimatePresence>

//             {/* RIGHT — carousel */}
//             <motion.div
//               initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
//               className="order-1 lg:order-2"
//             >
//               {/* Cards: key = slideIdx only — NEVER changes identity on position shift */}
//               <div className="flex items-end justify-center gap-2 sm:gap-3 md:gap-4">
//                 <SingleMediaCard key={prevIdx}        slideIdx={prevIdx}        isCenter={false} onMediaEnd={handleMediaEnd} />
//                 <SingleMediaCard key={centerSlideIdx} slideIdx={centerSlideIdx} isCenter={true}  onMediaEnd={handleMediaEnd} />
//                 <SingleMediaCard key={nextIdx}        slideIdx={nextIdx}        isCenter={false} onMediaEnd={handleMediaEnd} />
//               </div>

//               {/* Nav */}
//               <div className="flex items-center justify-center gap-4 mt-5 sm:mt-6">
//                 <button onClick={prev} aria-label="Previous"
//                   className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow active:scale-95">
//                   <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                   </svg>
//                 </button>

//                 <div className="flex gap-2 items-center">
//                   {founderData.map((founder, i) => {
//                     const isActive = currentSlide.founderIndex === i;
//                     const dotColor = founder.colorScheme.gradFrom;
//                     return (
//                       <button
//                         key={i}
//                         onClick={() => goTo(i * 3)} // jump to founder's image slide
//                         aria-label={`Founder ${i + 1}`}
//                         className="rounded-full transition-all duration-300"
//                         style={{
//                           width:      isActive ? 22 : 8,
//                           height:     8,
//                           background: isActive ? dotColor : "#d1d5db",
//                         }}
//                       />
//                     );
//                   })}
//                 </div>

//                 <button onClick={next} aria-label="Next"
//                   className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow active:scale-95">
//                   <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>

//               {/* Legend */}
//               <div className="flex items-center justify-center gap-4 mt-3">
//                 {(["Photo", "Video 1", "Video 2"] as const).map((label, i) => (
//                   <div key={i} className="flex items-center gap-1.5">
//                     <div className="w-2 h-2 rounded-full" style={{ background: s.gradFrom, opacity: 0.3 + i * 0.28 }} />
//                     <span className="text-[10px] text-gray-400">{label}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }











// "use client";

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// // ─── Types ───────────────────────────────────────────────────────────────────────
// type ColorScheme = {
//   primary: string;
//   tagline: string;
//   title: string;
//   highlight: string;
//   subtitle: string;
//   description: string;
//   ctaPrimary: string;
//   ctaSecondary: string;
//   gradFrom: string;
//   gradMid: string;
//   gradTo: string;
// };

// type FounderData = {
//   id: number;
//   name: string;
//   title: string;
//   quote: string;
//   image: string;
//   video: string;
//   video2: string;
//   colorScheme: ColorScheme;
//   stats: { value: string; label: string }[];
// };

// type MediaType = "image" | "video" | "video2";
// type Slide = {
//   founderId: number;
//   mediaType: MediaType;
//   founderIndex: number;
// };

// // ─── Color Schemes ───────────────────────────────────────────────────────────────
// const colorSchemes: Record<string, ColorScheme> = {
//   blue: {
//     primary: "from-blue-600 via-blue-500 to-cyan-500",
//     tagline: "BLUE OCEAN STRATEGY",
//     title: "Dominate the",
//     highlight: "Digital Frontier",
//     subtitle: "Where vision meets velocity",
//     description:
//       "We transform ambitious ideas into market-leading brands. Strategic storytelling meets data-driven growth.",
//     ctaPrimary: "Launch Vision",
//     ctaSecondary: "Explore Strategy",
//     gradFrom: "#2563eb",
//     gradMid: "#3b82f6",
//     gradTo: "#06b6d4",
//   },
//   yellow: {
//     primary: "from-yellow-500 via-amber-500 to-orange-500",
//     tagline: "REBEL ECONOMICS",
//     title: "Break the",
//     highlight: "Status Quo",
//     subtitle: "Bold moves create bold empires",
//     description:
//       "Disruptive strategies for founders who dare to be different. Bold colors, bolder results.",
//     ctaPrimary: "Start Rebellion",
//     ctaSecondary: "Read Manifesto",
//     gradFrom: "#eab308",
//     gradMid: "#f59e0b",
//     gradTo: "#f97316",
//   },
// };

// // ─── Founder Data — 2 founders only ──────────────────────────────────────────────
// const founderData: FounderData[] = [
//   {
//     id: 1,
//     name: "Kautilya Kalyan",
//     title: "Founder & CEO",
//     quote: "Great brands aren't built in comfort zones. They're forged in decisive action.",
//     image: "/founder/founderimage.png",
//     video: "/founder/foundervideo.mp4",
//     video2: "/founder/foundervideo2.mp4",
//     colorScheme: colorSchemes.blue,
//     stats: [
//       { value: "10x", label: "Growth" },
//       { value: "150+", label: "Brands" },
//       { value: "98%", label: "Success" },
//     ],
//   },
//   {
//     id: 2,
//     name: "Kavya Singh",
//     title: "Chief Disruptor",
//     quote: "The biggest risk is playing it safe. Disrupt or be disrupted — there's no middle ground.",
//     image: "/founder/founderimage.png",
//     video: "/founder/foundervideo.mp4",
//     video2: "/founder/foundervideo2.mp4",
//     colorScheme: colorSchemes.yellow,
//     stats: [
//       { value: "15x", label: "ROI" },
//       { value: "200+", label: "Campaigns" },
//       { value: "45+", label: "Awards" },
//     ],
//   },
// ];

// // ─── Flat slide list: [F1-img, F1-vid, F1-vid2, F2-img, F2-vid, F2-vid2] ─────────
// const allSlides: Slide[] = founderData.flatMap((f, fi) => [
//   { founderId: f.id, mediaType: "image",  founderIndex: fi },
//   { founderId: f.id, mediaType: "video",  founderIndex: fi },
//   { founderId: f.id, mediaType: "video2", founderIndex: fi },
// ]);
// const TOTAL = allSlides.length; // 6

// const IMAGE_HOLD_MS = 2500;

// // ─── VideoProgress bar ────────────────────────────────────────────────────────────
// const VideoProgress = ({ videoRef }: { videoRef: React.RefObject<HTMLVideoElement> }) => {
//   const [pct, setPct] = useState(0);
//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;
//     const tick = () => { if (v.duration) setPct((v.currentTime / v.duration) * 100); };
//     v.addEventListener("timeupdate", tick);
//     return () => v.removeEventListener("timeupdate", tick);
//   }, [videoRef]);
//   return (
//     <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 z-20">
//       <div className="h-full bg-white/85 transition-none" style={{ width: `${pct}%` }} />
//     </div>
//   );
// };

// // ─── LiveBadge ────────────────────────────────────────────────────────────────────
// const LiveBadge = ({ label }: { label: string }) => (
//   <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2 py-0.5 bg-black/55 backdrop-blur-sm rounded-full">
//     <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
//     <span className="text-white text-[9px] font-bold tracking-widest">{label}</span>
//   </div>
// );

// // ─── Particles ────────────────────────────────────────────────────────────────────
// const Particles = ({ color }: { color: string }) => {
//   const [dims, setDims] = useState({ w: 0, h: 0 });
//   useEffect(() => {
//     setDims({ w: window.innerWidth, h: window.innerHeight });
//     const r = () => setDims({ w: window.innerWidth, h: window.innerHeight });
//     window.addEventListener("resize", r);
//     return () => window.removeEventListener("resize", r);
//   }, []);
//   if (!dims.w) return null;
//   return (
//     <div className="absolute inset-0 pointer-events-none overflow-hidden">
//       {Array.from({ length: 10 }).map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1 h-1 rounded-full"
//           style={{ background: color }}
//           initial={{ x: Math.random() * dims.w, y: Math.random() * dims.h, opacity: 0 }}
//           animate={{ y: [null, -140], opacity: [0, 0.55, 0], scale: [0, 1.6, 0] }}
//           transition={{ duration: 3.5 + Math.random() * 2.5, repeat: Infinity, delay: Math.random() * 7 }}
//         />
//       ))}
//     </div>
//   );
// };

// // ─── SlideCard ────────────────────────────────────────────────────────────────────
// // CRITICAL DESIGN: Every card is rendered ALWAYS and never unmounted.
// // Position (center / left-side / right-side / hidden) is controlled via CSS transforms.
// // This means video elements are NEVER destroyed mid-play.
// //
// // isCenter  → play media, show controls
// // !isCenter → pause video, hide controls, scale down
// const SlideCard = ({
//   idx,
//   centerIdx,
//   onMediaEnd,
// }: {
//   idx: number;           // this card's absolute slide index
//   centerIdx: number;     // which slide is currently center
//   onMediaEnd: () => void;
// }) => {
//   const slide   = allSlides[idx];
//   const founder = founderData[slide.founderIndex];
//   const s       = founder.colorScheme;

//   const videoRef    = useRef<HTMLVideoElement>(null);
//   const timerRef    = useRef<ReturnType<typeof setTimeout> | null>(null);
//   const firedRef    = useRef(false);
//   const [hovered, setHovered] = useState(false);

//   // Compute position relative to center, wrapping around
//   // Result: -1 = left side, 0 = center, 1 = right side, else = hidden
//   const rawOffset = idx - centerIdx;
//   const halfTotal = Math.floor(TOTAL / 2);
//   let offset = rawOffset;
//   if (rawOffset >  halfTotal) offset = rawOffset - TOTAL;
//   if (rawOffset < -halfTotal) offset = rawOffset + TOTAL;

//   const isCenter     = offset === 0;
//   const isVisible    = Math.abs(offset) <= 1; // only prev / center / next shown
//   const isLeftSide   = offset === -1;
//   const isRightSide  = offset === 1;

//   // ── Imperative play / pause — runs whenever centerIdx changes ──────────────────
//   useEffect(() => {
//     // Clear any running image timer
//     if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
//     firedRef.current = false;

//     const v = videoRef.current;

//     if (!isCenter) {
//       // Not center → pause if video
//       if (v) v.pause();
//       return;
//     }

//     // This card IS center — start its media
//     if (slide.mediaType === "image") {
//       timerRef.current = setTimeout(() => {
//         if (!firedRef.current) { firedRef.current = true; onMediaEnd(); }
//       }, IMAGE_HOLD_MS);
//     } else {
//       // video or video2
//       if (v) {
//         v.currentTime = 0;
//         v.play().catch(() => {});
//       }
//     }

//     return () => { if (timerRef.current) clearTimeout(timerRef.current); };
//   // Re-run ONLY when which slide is center changes. idx never changes for this instance.
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [centerIdx]);

//   const handleVideoEnd = useCallback(() => {
//     if (isCenter && !firedRef.current) { firedRef.current = true; onMediaEnd(); }
//   }, [isCenter, onMediaEnd]);

//   const videoSrc   = slide.mediaType === "video" ? founder.video : founder.video2;
//   const videoLabel = slide.mediaType === "video" ? "1 / 2" : "2 / 2";

//   // Visual layout
//   const scale   = isCenter ? 1 : 0.79;
//   const opacity = isCenter ? 1 : 0.4;
//   const zIndex  = isCenter ? 20 : 10;
//   const display = isVisible ? "block" : "none"; // hide far-away cards entirely

//   return (
//     <motion.div
//       style={{ display, zIndex }}
//       className="relative cursor-pointer flex-shrink-0"
//       animate={{ scale, opacity }}
//       whileHover={{ scale: isCenter ? 1.015 : 0.82 }}
//       transition={{ type: "spring", stiffness: 255, damping: 25 }}
//       onHoverStart={() => setHovered(true)}
//       onHoverEnd={() => setHovered(false)}
//     >
//       {/* Glow ring — center only */}
//       {isCenter && (
//         <motion.div
//           className="absolute -inset-[3px] rounded-[22px] blur-sm pointer-events-none"
//           style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}
//           animate={{ opacity: [0.2, 0.45, 0.2] }}
//           transition={{ duration: 3, repeat: Infinity }}
//         />
//       )}

//       <div
//         className={[
//           "relative rounded-2xl overflow-hidden shadow-2xl",
//           isCenter
//             ? "w-[185px] h-[310px] sm:w-[215px] sm:h-[360px] md:w-[255px] md:h-[420px] lg:w-[275px] lg:h-[455px]"
//             : "w-[125px] h-[235px] sm:w-[148px] sm:h-[275px] md:w-[178px] md:h-[322px] lg:w-[195px] lg:h-[354px]",
//         ].join(" ")}
//       >
//         {/* ── Image panel ── */}
//         {slide.mediaType === "image" && (
//           <>
//             <Image
//               src={founder.image}
//               alt={founder.name}
//               fill
//               className="object-cover"
//               sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 320px"
//               priority={isCenter}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
//             {/* Image countdown bar */}
//             {isCenter && (
//               <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 overflow-hidden z-20">
//                 <motion.div
//                   key={`imgbar-${centerIdx}`}
//                   className="h-full bg-white/85"
//                   initial={{ scaleX: 0 }}
//                   animate={{ scaleX: 1 }}
//                   transition={{ duration: IMAGE_HOLD_MS / 1000, ease: "linear" }}
//                   style={{ transformOrigin: "left" }}
//                 />
//               </div>
//             )}
//           </>
//         )}

//         {/* ── Video panel ── */}
//         {(slide.mediaType === "video" || slide.mediaType === "video2") && (
//           <>
//             <video
//               ref={videoRef}
//               src={videoSrc}
//               className="w-full h-full object-cover"
//               muted
//               playsInline
//               onEnded={handleVideoEnd}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
//             {isCenter && <LiveBadge label={videoLabel} />}
//             {isCenter && <VideoProgress videoRef={videoRef} />}
//           </>
//         )}

//         {/* Name overlay */}
//         <motion.div
//           className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 text-white pointer-events-none z-20"
//           animate={{ y: hovered ? -8 : 0 }}
//           transition={{ duration: 0.26 }}
//         >
//           <motion.div className="flex items-center gap-1.5 mb-0.5" animate={{ x: hovered ? 4 : 0 }}>
//             <div className="w-4 h-px bg-white/70" />
//             <span className="text-[8px] font-bold tracking-[0.2em] uppercase opacity-75">Founder</span>
//           </motion.div>
//           <motion.h3
//             className="text-xs sm:text-sm md:text-base font-bold leading-tight"
//             animate={{ x: hovered ? 4 : 0 }}
//           >
//             {founder.name}
//           </motion.h3>
//           <motion.p
//             className="text-[9px] sm:text-[10px] text-white/60 mt-0.5"
//             animate={{ opacity: hovered ? 1 : 0.55 }}
//           >
//             {founder.title}
//           </motion.p>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// // ─── Main ────────────────────────────────────────────────────────────────────────
// export default function ModernHeroSection() {
//   const [centerIdx, setCenterIdx] = useState(0);
//   const [mounted,   setMounted]   = useState(false);

//   useEffect(() => { setMounted(true); }, []);

//   const currentSlide   = allSlides[centerIdx];
//   const currentFounder = founderData[currentSlide.founderIndex];
//   const s              = currentFounder.colorScheme;

//   // Text key = founderIndex → animates only on founder change, not sub-slide
//   const textKey = currentSlide.founderIndex;

//   // Navigate — always moves by 1 slide at a time (image → video → video2 → next founder)
//   const goToSlide    = useCallback((i: number) => setCenterIdx((i + TOTAL) % TOTAL), []);
//   const goToFounder  = useCallback((fi: number) => goToSlide(fi * 3), [goToSlide]);
//   const prevFounder  = () => goToFounder((currentSlide.founderIndex - 1 + founderData.length) % founderData.length);
//   const nextFounder  = () => goToFounder((currentSlide.founderIndex + 1) % founderData.length);

//   // Called by center card when its media finishes → advance one slide
//   const handleMediaEnd = useCallback(() => {
//     setCenterIdx((p) => (p + 1) % TOTAL);
//   }, []);

//   if (!mounted) {
//     return (
//       <div className="min-h-screen w-full bg-white flex items-center justify-center">
//         <div className="w-8 h-8 border-2 border-gray-100 border-t-blue-500 rounded-full animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="relative min-h-screen w-full bg-white overflow-hidden">

//       {/* Background wash — changes per founder */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={`bg-${textKey}`}
//           className="absolute inset-0 pointer-events-none"
//           style={{ background: `radial-gradient(ellipse 80% 60% at 70% 40%, ${s.gradFrom}0a, transparent 70%)` }}
//           initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//           transition={{ duration: 0.9 }}
//         />
//       </AnimatePresence>

//       {/* Ambient orbs */}
//       <motion.div
//         className="absolute top-0 -left-28 w-[480px] h-[480px] rounded-full blur-[90px] pointer-events-none"
//         style={{ background: `radial-gradient(circle, ${s.gradFrom}13, transparent)` }}
//         animate={{ x: [0, 26, 0], y: [0, 16, 0] }}
//         transition={{ duration: 10, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute -bottom-24 -right-24 w-[560px] h-[560px] rounded-full blur-[100px] pointer-events-none"
//         style={{ background: `radial-gradient(circle, ${s.gradTo}10, transparent)` }}
//         animate={{ x: [0, -22, 0], y: [0, -14, 0] }}
//         transition={{ duration: 13, repeat: Infinity }}
//       />

//       <Particles color={s.gradFrom} />

//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-20 sm:pt-24 lg:pt-28 pb-10">
//         <div className="min-h-[calc(100vh-80px)] flex items-center">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center w-full">

//             {/* ── LEFT: text — animates only on founder change ── */}
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`txt-${textKey}`}
//                 initial={{ opacity: 0, x: -26 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 26 }}
//                 transition={{ duration: 0.42, ease: "easeOut" }}
//                 className="space-y-4 sm:space-y-5 order-2 lg:order-1"
//               >
//                 {/* Tagline pill */}
//                 <motion.span
//                   initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }}
//                   className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold tracking-widest border"
//                   style={{ background: `linear-gradient(135deg, ${s.gradFrom}12, ${s.gradTo}12)`, borderColor: `${s.gradFrom}2e`, color: s.gradFrom }}
//                 >
//                   {s.tagline}
//                 </motion.span>

//                 {/* Heading */}
//                 <motion.h1
//                   initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.11 }}
//                   className="text-[clamp(1.9rem,5vw,3.7rem)] font-black leading-[1.12] tracking-tight"
//                 >
//                   <span className="text-gray-900">{s.title}</span>
//                   <br />
//                   <span style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradMid}, ${s.gradTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                     {s.highlight}
//                   </span>
//                 </motion.h1>

//                 {/* Subtitle */}
//                 <motion.p
//                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.16 }}
//                   className="text-sm sm:text-base md:text-lg font-semibold"
//                   style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
//                 >
//                   {s.subtitle}
//                 </motion.p>

//                 {/* Description */}
//                 <motion.p
//                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
//                   className="text-gray-500 text-sm leading-relaxed max-w-[420px]"
//                 >
//                   {s.description}
//                 </motion.p>

//                 {/* Stats */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}
//                   className="flex gap-6 sm:gap-10 pt-1"
//                 >
//                   {currentFounder.stats.map((stat, i) => (
//                     <motion.div key={i} whileHover={{ y: -4 }} transition={{ duration: 0.18 }}>
//                       <p
//                         className="text-2xl sm:text-3xl font-black"
//                         style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
//                       >
//                         {stat.value}
//                       </p>
//                       <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">{stat.label}</p>
//                     </motion.div>
//                   ))}
//                 </motion.div>

//                 {/* CTAs */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}
//                   className="flex flex-wrap gap-3 pt-1"
//                 >
//                   <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//                     <Link
//                       href="/contact"
//                       className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold shadow-md hover:shadow-lg transition-shadow"
//                       style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}
//                     >
//                       {s.ctaPrimary}
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </Link>
//                   </motion.div>
//                   <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//                     <Link
//                       href="/work"
//                       className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
//                     >
//                       {s.ctaSecondary}
//                     </Link>
//                   </motion.div>
//                 </motion.div>

//                 {/* Quote */}
//                 <motion.div
//                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.33 }}
//                   className="pt-4 border-t border-gray-100"
//                 >
//                   <div className="flex items-start gap-3">
//                     <div
//                       className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
//                       style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}
//                     >
//                       <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="text-gray-500 text-xs italic leading-relaxed">"{currentFounder.quote}"</p>
//                       <p className="text-gray-800 text-xs font-semibold mt-1.5">
//                         {currentFounder.name}
//                         <span className="text-gray-400 font-normal ml-1.5">— {currentFounder.title}</span>
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </AnimatePresence>

//             {/* ── RIGHT: carousel ── */}
//             <motion.div
//               initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
//               className="order-1 lg:order-2"
//             >
//               {/*
//                 ALL slides are rendered here always — no remounting ever.
//                 Each SlideCard computes its own position offset from centerIdx
//                 and shows/hides itself accordingly.
//               */}
//               <div className="flex items-end justify-center gap-2 sm:gap-3 md:gap-4">
//                 {allSlides.map((_, idx) => (
//                   <SlideCard
//                     key={idx}          // STABLE key — never changes
//                     idx={idx}
//                     centerIdx={centerIdx}
//                     onMediaEnd={handleMediaEnd}
//                   />
//                 ))}
//               </div>

//               {/* Nav controls */}
//               <div className="flex items-center justify-center gap-4 mt-5 sm:mt-6">
//                 <button
//                   onClick={prevFounder}
//                   aria-label="Previous founder"
//                   className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow active:scale-95"
//                 >
//                   <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                   </svg>
//                 </button>

//                 {/* 2 dots — one per founder */}
//                 <div className="flex gap-2 items-center">
//                   {founderData.map((founder, i) => {
//                     const isActive = currentSlide.founderIndex === i;
//                     const dotColor = founder.colorScheme.gradFrom;
//                     return (
//                       <button
//                         key={i}
//                         onClick={() => goToFounder(i)}
//                         aria-label={`${founder.name}`}
//                         className="rounded-full transition-all duration-300"
//                         style={{
//                           width:      isActive ? 24 : 8,
//                           height:     8,
//                           background: isActive ? dotColor : "#d1d5db",
//                         }}
//                       />
//                     );
//                   })}
//                 </div>

//                 <button
//                   onClick={nextFounder}
//                   aria-label="Next founder"
//                   className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow active:scale-95"
//                 >
//                   <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>

//               {/* Media legend */}
//               <div className="flex items-center justify-center gap-4 mt-3">
//                 {(["Photo", "Video 1", "Video 2"] as const).map((label, i) => (
//                   <div key={i} className="flex items-center gap-1.5">
//                     <div className="w-2 h-2 rounded-full" style={{ background: s.gradFrom, opacity: 0.3 + i * 0.28 }} />
//                     <span className="text-[10px] text-gray-400">{label}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
















// "use client";

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// // ─── Types ───────────────────────────────────────────────────────────────────────
// type ColorScheme = {
//   primary: string;
//   tagline: string;
//   title: string;
//   highlight: string;
//   subtitle: string;
//   description: string;
//   ctaPrimary: string;
//   ctaSecondary: string;
//   gradFrom: string;
//   gradMid: string;
//   gradTo: string;
// };

// type FounderData = {
//   id: number;
//   name: string;
//   title: string;
//   quote: string;
//   image: string;
//   video: string;
//   video2: string;
//   colorScheme: ColorScheme;
//   stats: { value: string; label: string }[];
// };

// type MediaType = "image" | "video" | "video2";
// type Slide = {
//   founderId: number;
//   mediaType: MediaType;
//   founderIndex: number;
// };

// // ─── Color Schemes ───────────────────────────────────────────────────────────────
// const colorSchemes: Record<string, ColorScheme> = {
//   blue: {
//     primary: "from-blue-600 via-blue-500 to-cyan-500",
//     tagline: "BLUE OCEAN STRATEGY",
//     title: "Dominate the",
//     highlight: "Digital Frontier",
//     subtitle: "Where vision meets velocity",
//     description:
//       "We transform ambitious ideas into market-leading brands. Strategic storytelling meets data-driven growth.",
//     ctaPrimary: "Launch Vision",
//     ctaSecondary: "Explore Strategy",
//     gradFrom: "#2563eb",
//     gradMid: "#3b82f6",
//     gradTo: "#06b6d4",
//   },
//   yellow: {
//     primary: "from-yellow-500 via-amber-500 to-orange-500",
//     tagline: "REBEL ECONOMICS",
//     title: "Break the",
//     highlight: "Status Quo",
//     subtitle: "Bold moves create bold empires",
//     description:
//       "Disruptive strategies for founders who dare to be different. Bold colors, bolder results.",
//     ctaPrimary: "Start Rebellion",
//     ctaSecondary: "Read Manifesto",
//     gradFrom: "#eab308",
//     gradMid: "#f59e0b",
//     gradTo: "#f97316",
//   },
// };

// // ─── Founder Data ────────────────────────────────────────────────────────────────
// const founderData: FounderData[] = [
//   {
//     id: 1,
//     name: "Kautilya Kalyan",
//     title: "Founder & CEO",
//     quote: "Great brands aren't built in comfort zones. They're forged in decisive action.",
//     image: "/founder/founderimage.png",
//     video: "/founder/foundervideo.mp4",
//     video2: "/founder/foundervideo2.mp4",
//     colorScheme: colorSchemes.blue,
//     stats: [
//       { value: "10x", label: "Growth" },
//       { value: "150+", label: "Brands" },
//       { value: "98%", label: "Success" },
//     ],
//   },
//   {
//     id: 2,
//     name: "Kavya Singh",
//     title: "Chief Disruptor",
//     quote: "The biggest risk is playing it safe. Disrupt or be disrupted — there's no middle ground.",
//     image: "/founder/founderimage.png",
//     video: "/founder/foundervideo.mp4",
//     video2: "/founder/foundervideo2.mp4",
//     colorScheme: colorSchemes.yellow,
//     stats: [
//       { value: "15x", label: "ROI" },
//       { value: "200+", label: "Campaigns" },
//       { value: "45+", label: "Awards" },
//     ],
//   },
// ];

// // ─── Flat slide list: [F1-img, F1-vid, F1-vid2, F2-img, F2-vid, F2-vid2] ─────────
// const allSlides: Slide[] = founderData.flatMap((f, fi) => [
//   { founderId: f.id, mediaType: "image",  founderIndex: fi },
//   { founderId: f.id, mediaType: "video",  founderIndex: fi },
//   { founderId: f.id, mediaType: "video2", founderIndex: fi },
// ]);
// const TOTAL = allSlides.length; // 6

// const IMAGE_HOLD_MS = 2500;

// // ─── VideoProgress bar ────────────────────────────────────────────────────────────
// const VideoProgress = ({ videoRef }: { videoRef: React.RefObject<HTMLVideoElement> }) => {
//   const [pct, setPct] = useState(0);
//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;
//     const tick = () => { if (v.duration) setPct((v.currentTime / v.duration) * 100); };
//     v.addEventListener("timeupdate", tick);
//     return () => v.removeEventListener("timeupdate", tick);
//   }, [videoRef]);
//   return (
//     <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 z-20">
//       <div className="h-full bg-white/85 transition-none" style={{ width: `${pct}%` }} />
//     </div>
//   );
// };

// // ─── LiveBadge ────────────────────────────────────────────────────────────────────
// const LiveBadge = ({ label }: { label: string }) => (
//   <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2 py-0.5 bg-black/55 backdrop-blur-sm rounded-full">
//     <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
//     <span className="text-white text-[9px] font-bold tracking-widest">{label}</span>
//   </div>
// );

// // ─── Particles ────────────────────────────────────────────────────────────────────
// const Particles = ({ color }: { color: string }) => {
//   const [dims, setDims] = useState({ w: 0, h: 0 });
//   useEffect(() => {
//     setDims({ w: window.innerWidth, h: window.innerHeight });
//     const r = () => setDims({ w: window.innerWidth, h: window.innerHeight });
//     window.addEventListener("resize", r);
//     return () => window.removeEventListener("resize", r);
//   }, []);
//   if (!dims.w) return null;
//   return (
//     <div className="absolute inset-0 pointer-events-none overflow-hidden">
//       {Array.from({ length: 10 }).map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1 h-1 rounded-full"
//           style={{ background: color }}
//           initial={{ x: Math.random() * dims.w, y: Math.random() * dims.h, opacity: 0 }}
//           animate={{ y: [null, -140], opacity: [0, 0.55, 0], scale: [0, 1.6, 0] }}
//           transition={{ duration: 3.5 + Math.random() * 2.5, repeat: Infinity, delay: Math.random() * 7 }}
//         />
//       ))}
//     </div>
//   );
// };

// // ─── SlideCard ────────────────────────────────────────────────────────────────────
// // Now receives isCenter / isLeft / isRight directly — no offset math needed.
// // Only 3 cards ever rendered (prev, center, next), always in order: left, center, right.
// const SlideCard = ({
//   idx,
//   isCenter,
//   onMediaEnd,
// }: {
//   idx: number;
//   isCenter: boolean;
//   onMediaEnd: () => void;
// }) => {
//   const slide   = allSlides[idx];
//   const founder = founderData[slide.founderIndex];
//   const s       = founder.colorScheme;

//   const videoRef = useRef<HTMLVideoElement>(null);
//   const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
//   const firedRef = useRef(false);
//   const [hovered, setHovered] = useState(false);

//   // Play/pause driven by isCenter prop
//   useEffect(() => {
//     if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
//     firedRef.current = false;

//     const v = videoRef.current;

//     if (!isCenter) {
//       if (v) v.pause();
//       return;
//     }

//     if (slide.mediaType === "image") {
//       timerRef.current = setTimeout(() => {
//         if (!firedRef.current) { firedRef.current = true; onMediaEnd(); }
//       }, IMAGE_HOLD_MS);
//     } else {
//       if (v) {
//         v.currentTime = 0;
//         v.play().catch(() => {});
//       }
//     }

//     return () => { if (timerRef.current) clearTimeout(timerRef.current); };
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isCenter, idx]);

//   const handleVideoEnd = useCallback(() => {
//     if (isCenter && !firedRef.current) { firedRef.current = true; onMediaEnd(); }
//   }, [isCenter, onMediaEnd]);

//   const videoSrc   = slide.mediaType === "video" ? founder.video : founder.video2;
//   const videoLabel = slide.mediaType === "video" ? "1 / 2" : "2 / 2";

//   const scale   = isCenter ? 1 : 0.79;
//   const opacity = isCenter ? 1 : 0.4;
//   const zIndex  = isCenter ? 20 : 10;

//   return (
//     <motion.div
//       style={{ zIndex }}
//       className="relative cursor-pointer flex-shrink-0"
//       animate={{ scale, opacity }}
//       whileHover={{ scale: isCenter ? 1.015 : 0.82 }}
//       transition={{ type: "spring", stiffness: 255, damping: 25 }}
//       onHoverStart={() => setHovered(true)}
//       onHoverEnd={() => setHovered(false)}
//     >
//       {/* Glow ring — center only */}
//       {isCenter && (
//         <motion.div
//           className="absolute -inset-[3px] rounded-[22px] blur-sm pointer-events-none"
//           style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}
//           animate={{ opacity: [0.2, 0.45, 0.2] }}
//           transition={{ duration: 3, repeat: Infinity }}
//         />
//       )}

//       <div
//         className={[
//           "relative rounded-2xl overflow-hidden shadow-2xl",
//           isCenter
//             ? "w-[185px] h-[310px] sm:w-[215px] sm:h-[360px] md:w-[255px] md:h-[420px] lg:w-[275px] lg:h-[455px]"
//             : "w-[125px] h-[235px] sm:w-[148px] sm:h-[275px] md:w-[178px] md:h-[322px] lg:w-[195px] lg:h-[354px]",
//         ].join(" ")}
//       >
//         {/* ── Image panel ── */}
//         {slide.mediaType === "image" && (
//           <>
//             <Image
//               src={founder.image}
//               alt={founder.name}
//               fill
//               className="object-cover"
//               sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 320px"
//               priority={isCenter}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
//             {isCenter && (
//               <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 overflow-hidden z-20">
//                 <motion.div
//                   key={`imgbar-${idx}`}
//                   className="h-full bg-white/85"
//                   initial={{ scaleX: 0 }}
//                   animate={{ scaleX: 1 }}
//                   transition={{ duration: IMAGE_HOLD_MS / 1000, ease: "linear" }}
//                   style={{ transformOrigin: "left" }}
//                 />
//               </div>
//             )}
//           </>
//         )}

//         {/* ── Video panel ── */}
//         {(slide.mediaType === "video" || slide.mediaType === "video2") && (
//           <>
//             <video
//               ref={videoRef}
//               src={videoSrc}
//               className="w-full h-full object-cover"
//               muted
//               playsInline
//               onEnded={handleVideoEnd}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
//             {isCenter && <LiveBadge label={videoLabel} />}
//             {isCenter && <VideoProgress videoRef={videoRef} />}
//           </>
//         )}

//         {/* Name overlay */}
//         <motion.div
//           className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 text-white pointer-events-none z-20"
//           animate={{ y: hovered ? -8 : 0 }}
//           transition={{ duration: 0.26 }}
//         >
//           <motion.div className="flex items-center gap-1.5 mb-0.5" animate={{ x: hovered ? 4 : 0 }}>
//             <div className="w-4 h-px bg-white/70" />
//             <span className="text-[8px] font-bold tracking-[0.2em] uppercase opacity-75">Founder</span>
//           </motion.div>
//           <motion.h3
//             className="text-xs sm:text-sm md:text-base font-bold leading-tight"
//             animate={{ x: hovered ? 4 : 0 }}
//           >
//             {founder.name}
//           </motion.h3>
//           <motion.p
//             className="text-[9px] sm:text-[10px] text-white/60 mt-0.5"
//             animate={{ opacity: hovered ? 1 : 0.55 }}
//           >
//             {founder.title}
//           </motion.p>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// // ─── Main ────────────────────────────────────────────────────────────────────────
// export default function ModernHeroSection() {
//   const [centerIdx, setCenterIdx] = useState(0);
//   const [mounted,   setMounted]   = useState(false);

//   useEffect(() => {
//     // FIX: Prevent browser from restoring scroll position on reload,
//     // which caused the hero section to jump upward.
//     if (typeof window !== "undefined") {
//       if ("scrollRestoration" in history) {
//         history.scrollRestoration = "manual";
//       }
//       window.scrollTo(0, 0);
//     }
//     setMounted(true);
//   }, []);

//   const currentSlide   = allSlides[centerIdx];
//   const currentFounder = founderData[currentSlide.founderIndex];
//   const s              = currentFounder.colorScheme;

//   const textKey = currentSlide.founderIndex;

//   const goToSlide   = useCallback((i: number) => setCenterIdx((i + TOTAL) % TOTAL), []);
//   const goToFounder = useCallback((fi: number) => goToSlide(fi * 3), [goToSlide]);
//   const prevFounder = () => goToFounder((currentSlide.founderIndex - 1 + founderData.length) % founderData.length);
//   const nextFounder = () => goToFounder((currentSlide.founderIndex + 1) % founderData.length);

//   const handleMediaEnd = useCallback(() => {
//     setCenterIdx((p) => (p + 1) % TOTAL);
//   }, []);

//   // FIX: Compute the 3 visible slide indices in order: [left, center, right]
//   // This ensures the center card is ALWAYS rendered in the DOM middle position,
//   // so it appears visually centered in the flex row.
//   const leftIdx  = (centerIdx - 1 + TOTAL) % TOTAL;
//   const rightIdx = (centerIdx + 1) % TOTAL;
//   const visibleSlides = [leftIdx, centerIdx, rightIdx];

//   if (!mounted) {
//     return (
//       <div className="min-h-screen w-full bg-white flex items-center justify-center">
//         <div className="w-8 h-8 border-2 border-gray-100 border-t-blue-500 rounded-full animate-spin" />
//       </div>
//     );
//   }

//   return (
//     // FIX: Use `h-screen` instead of `min-h-screen` to prevent layout reflow on reload.
//     // overflow-hidden prevents any scroll-jump artifacts.
//     <div className="relative min-h-screen w-full bg-white overflow-hidden">

//       {/* Background wash */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={`bg-${textKey}`}
//           className="absolute inset-0 pointer-events-none"
//           style={{ background: `radial-gradient(ellipse 80% 60% at 70% 40%, ${s.gradFrom}0a, transparent 70%)` }}
//           initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//           transition={{ duration: 0.9 }}
//         />
//       </AnimatePresence>

//       {/* Ambient orbs */}
//       <motion.div
//         className="absolute top-0 -left-28 w-[480px] h-[480px] rounded-full blur-[90px] pointer-events-none"
//         style={{ background: `radial-gradient(circle, ${s.gradFrom}13, transparent)` }}
//         animate={{ x: [0, 26, 0], y: [0, 16, 0] }}
//         transition={{ duration: 10, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute -bottom-24 -right-24 w-[560px] h-[560px] rounded-full blur-[100px] pointer-events-none"
//         style={{ background: `radial-gradient(circle, ${s.gradTo}10, transparent)` }}
//         animate={{ x: [0, -22, 0], y: [0, -14, 0] }}
//         transition={{ duration: 13, repeat: Infinity }}
//       />

//       <Particles color={s.gradFrom} />

//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-20 sm:pt-24 lg:pt-28 pb-10">
//         <div className="min-h-[calc(100vh-80px)] flex items-center">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center w-full">

//             {/* ── LEFT: text ── */}
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`txt-${textKey}`}
//                 initial={{ opacity: 0, x: -26 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 26 }}
//                 transition={{ duration: 0.42, ease: "easeOut" }}
//                 className="space-y-4 sm:space-y-5 order-2 lg:order-1"
//               >
//                 {/* Tagline pill */}
//                 <motion.span
//                   initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }}
//                   className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold tracking-widest border"
//                   style={{ background: `linear-gradient(135deg, ${s.gradFrom}12, ${s.gradTo}12)`, borderColor: `${s.gradFrom}2e`, color: s.gradFrom }}
//                 >
//                   {s.tagline}
//                 </motion.span>

//                 {/* Heading */}
//                 <motion.h1
//                   initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.11 }}
//                   className="text-[clamp(1.9rem,5vw,3.7rem)] font-black leading-[1.12] tracking-tight"
//                 >
//                   <span className="text-gray-900">{s.title}</span>
//                   <br />
//                   <span style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradMid}, ${s.gradTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                     {s.highlight}
//                   </span>
//                 </motion.h1>

//                 {/* Subtitle */}
//                 <motion.p
//                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.16 }}
//                   className="text-sm sm:text-base md:text-lg font-semibold"
//                   style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
//                 >
//                   {s.subtitle}
//                 </motion.p>

//                 {/* Description */}
//                 <motion.p
//                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
//                   className="text-gray-500 text-sm leading-relaxed max-w-[420px]"
//                 >
//                   {s.description}
//                 </motion.p>

//                 {/* Stats */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}
//                   className="flex gap-6 sm:gap-10 pt-1"
//                 >
//                   {currentFounder.stats.map((stat, i) => (
//                     <motion.div key={i} whileHover={{ y: -4 }} transition={{ duration: 0.18 }}>
//                       <p
//                         className="text-2xl sm:text-3xl font-black"
//                         style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
//                       >
//                         {stat.value}
//                       </p>
//                       <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">{stat.label}</p>
//                     </motion.div>
//                   ))}
//                 </motion.div>

//                 {/* CTAs */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}
//                   className="flex flex-wrap gap-3 pt-1"
//                 >
//                   <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//                     <Link
//                       href="/contact"
//                       className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold shadow-md hover:shadow-lg transition-shadow"
//                       style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}
//                     >
//                       {s.ctaPrimary}
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </Link>
//                   </motion.div>
//                   <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//                     <Link
//                       href="/work"
//                       className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
//                     >
//                       {s.ctaSecondary}
//                     </Link>
//                   </motion.div>
//                 </motion.div>

//                 {/* Quote */}
//                 <motion.div
//                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.33 }}
//                   className="pt-4 border-t border-gray-100"
//                 >
//                   <div className="flex items-start gap-3">
//                     <div
//                       className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
//                       style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}
//                     >
//                       <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="text-gray-500 text-xs italic leading-relaxed">"{currentFounder.quote}"</p>
//                       <p className="text-gray-800 text-xs font-semibold mt-1.5">
//                         {currentFounder.name}
//                         <span className="text-gray-400 font-normal ml-1.5">— {currentFounder.title}</span>
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </AnimatePresence>

//             {/* ── RIGHT: carousel ── */}
//             <motion.div
//               initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
//               className="order-1 lg:order-2"
//             >
//               {/*
//                 FIX: Only render 3 cards — [left, center, right] — always in this DOM order.
//                 The center card is ALWAYS at DOM position 1 (middle), so it's visually
//                 centered in the flex row. No more first-card-on-left issue.
//               */}
//               <div className="flex items-end justify-center gap-2 sm:gap-3 md:gap-4">
//                 {visibleSlides.map((idx) => (
//                   <SlideCard
//                     key={idx}
//                     idx={idx}
//                     isCenter={idx === centerIdx}
//                     onMediaEnd={handleMediaEnd}
//                   />
//                 ))}
//               </div>

//               {/* Nav controls */}
//               <div className="flex items-center justify-center gap-4 mt-5 sm:mt-6">
//                 <button
//                   onClick={prevFounder}
//                   aria-label="Previous founder"
//                   className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow active:scale-95"
//                 >
//                   <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                   </svg>
//                 </button>

//                 {/* 2 dots — one per founder */}
//                 <div className="flex gap-2 items-center">
//                   {founderData.map((founder, i) => {
//                     const isActive = currentSlide.founderIndex === i;
//                     const dotColor = founder.colorScheme.gradFrom;
//                     return (
//                       <button
//                         key={i}
//                         onClick={() => goToFounder(i)}
//                         aria-label={`${founder.name}`}
//                         className="rounded-full transition-all duration-300"
//                         style={{
//                           width:      isActive ? 24 : 8,
//                           height:     8,
//                           background: isActive ? dotColor : "#d1d5db",
//                         }}
//                       />
//                     );
//                   })}
//                 </div>

//                 <button
//                   onClick={nextFounder}
//                   aria-label="Next founder"
//                   className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow active:scale-95"
//                 >
//                   <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>

//               {/* Media legend */}
//               <div className="flex items-center justify-center gap-4 mt-3">
//                 {(["Photo", "Video 1", "Video 2"] as const).map((label, i) => (
//                   <div key={i} className="flex items-center gap-1.5">
//                     <div className="w-2 h-2 rounded-full" style={{ background: s.gradFrom, opacity: 0.3 + i * 0.28 }} />
//                     <span className="text-[10px] text-gray-400">{label}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }














// "use client";

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// // ─── Types ───────────────────────────────────────────────────────────────────────
// type ColorScheme = {
//   primary: string;
//   tagline: string;
//   title: string;
//   highlight: string;
//   subtitle: string;
//   description: string;
//   ctaPrimary: string;
//   ctaSecondary: string;
//   gradFrom: string;
//   gradMid: string;
//   gradTo: string;
// };

// type FounderData = {
//   id: number;
//   name: string;
//   title: string;
//   quote: string;
//   image: string;
//   video: string;
//   video2: string;
//   colorScheme: ColorScheme;
//   stats: { value: string; label: string }[];
// };

// type MediaType = "image" | "video" | "video2";
// type Slide = {
//   founderId: number;
//   mediaType: MediaType;
//   founderIndex: number;
//   tagline: string;
//   heading: string;
//   highlight: string;
//   subtitle: string;
//   description: string;
//   ctaPrimary: string;
//   ctaSecondary: string;
// };

// // ─── Color Schemes ───────────────────────────────────────────────────────────────
// const colorSchemes: Record<string, ColorScheme> = {
//   blue: {
//     primary: "from-blue-600 via-blue-500 to-cyan-500",
//     tagline: "BLUE OCEAN STRATEGY",
//     title: "Dominate the",
//     highlight: "Digital Frontier",
//     subtitle: "Where vision meets velocity",
//     description: "We transform ambitious ideas into market-leading brands. Strategic storytelling meets data-driven growth.",
//     ctaPrimary: "Launch Vision",
//     ctaSecondary: "Explore Strategy",
//     gradFrom: "#2563eb",
//     gradMid: "#3b82f6",
//     gradTo: "#06b6d4",
//   },
//   yellow: {
//     primary: "from-yellow-500 via-amber-500 to-orange-500",
//     tagline: "REBEL ECONOMICS",
//     title: "Break the",
//     highlight: "Status Quo",
//     subtitle: "Bold moves create bold empires",
//     description: "Disruptive strategies for founders who dare to be different. Bold colors, bolder results.",
//     ctaPrimary: "Start Rebellion",
//     ctaSecondary: "Read Manifesto",
//     gradFrom: "#eab308",
//     gradMid: "#f59e0b",
//     gradTo: "#f97316",
//   },
// };

// // ─── Founder Data ────────────────────────────────────────────────────────────────
// const founderData: FounderData[] = [
//   {
//     id: 1,
//     name: "Kautilya Kalyan",
//     title: "Founder & CEO",
//     quote: "Great brands aren't built in comfort zones. They're forged in decisive action.",
//     image: "/founder/founderimage.jpeg",
//     video: "/founder/foundervideo.mp4",
//     video2: "/founder/foundervideo2.mp4",
//     colorScheme: colorSchemes.blue,
//     stats: [
//       { value: "10x", label: "Growth" },
//       { value: "150+", label: "Brands" },
//       { value: "98%", label: "Success" },
//     ],
//   },
//   {
//     id: 2,
//     name: "Kautilya Kalyan",
//     title: "Chief Disruptor",
//     quote: "The biggest risk is playing it safe. Disrupt or be disrupted — there's no middle ground.",
//     image: "/founder/founderimage.png",
//     video: "/founder/foundervideo.mp4",
//     video2: "/founder/foundervideo2.mp4",
//     colorScheme: colorSchemes.yellow,
//     stats: [
//       { value: "15x", label: "ROI" },
//       { value: "200+", label: "Campaigns" },
//       { value: "45+", label: "Awards" },
//     ],
//   },
// ];

// // ─── Per-slide unique text (6 slides total) ───────────────────────────────────────
// const slideTextData: {
//   tagline: string; heading: string; highlight: string;
//   subtitle: string; description: string; ctaPrimary: string; ctaSecondary: string;
// }[] = [
//   // Slide 0 — Founder 1 Photo
//   {
//     tagline: "MEET THE VISIONARY",
//     heading: "Dominate the",
//     highlight: "Digital Frontier",
//     subtitle: "Where vision meets velocity",
//     description: "We transform ambitious ideas into market-leading brands. Strategic storytelling meets data-driven growth.",
//     ctaPrimary: "Launch Vision",
//     ctaSecondary: "Explore Strategy",
//   },
//   // Slide 1 — Founder 1 Video 1
//   {
//     tagline: "BLUE OCEAN STRATEGY",
//     heading: "Build a",
//     highlight: "Legacy Brand",
//     subtitle: "Data-driven storytelling at scale",
//     description: "From strategy to execution — we architect brands that don't just compete, they redefine the market entirely.",
//     ctaPrimary: "Start Building",
//     ctaSecondary: "View Our Work",
//   },
//   // Slide 2 — Founder 1 Video 2
//   {
//     tagline: "FOUNDER'S JOURNEY",
//     heading: "Scale Beyond",
//     highlight: "Your Limits",
//     subtitle: "Proven systems for 10× growth",
//     description: "150+ brands scaled. 98% success rate. We don't follow trends — we create them with precision and purpose.",
//     ctaPrimary: "Let's Scale",
//     ctaSecondary: "See Results",
//   },
//   // Slide 3 — Founder 2 Photo
//   {
//     tagline: "MEET THE DISRUPTOR",
//     heading: "Break the",
//     highlight: "Status Quo",
//     subtitle: "Bold moves create bold empires",
//     description: "Disruptive strategies for founders who dare to be different. Bold colors, bolder results.",
//     ctaPrimary: "Start Rebellion",
//     ctaSecondary: "Read Manifesto",
//   },
//   // Slide 4 — Founder 2 Video 1
//   {
//     tagline: "REBEL ECONOMICS",
//     heading: "Disrupt or",
//     highlight: "Be Disrupted",
//     subtitle: "No middle ground. Only momentum.",
//     description: "200+ campaigns. 15× average ROI. We engineer market disruptions that competitors scramble to understand.",
//     ctaPrimary: "Disrupt Now",
//     ctaSecondary: "Our Strategy",
//   },
//   // Slide 5 — Founder 2 Video 2
//   {
//     tagline: "AWARD-WINNING IMPACT",
//     heading: "Win the",
//     highlight: "Market Game",
//     subtitle: "45+ industry awards and counting",
//     description: "Recognition follows results. From global campaigns to hyper-local execution — we turn bold ideas into market domination.",
//     ctaPrimary: "Claim Victory",
//     ctaSecondary: "View Awards",
//   },
// ];

// // ─── Build flat slide list ────────────────────────────────────────────────────────
// const allSlides: Slide[] = founderData.flatMap((f, fi) =>
//   (["image", "video", "video2"] as MediaType[]).map((mediaType, mi) => {
//     const si = fi * 3 + mi;
//     return {
//       founderId: f.id,
//       mediaType,
//       founderIndex: fi,
//       ...slideTextData[si],
//     };
//   })
// );
// const TOTAL = allSlides.length; // 6
// const IMAGE_HOLD_MS = 2500;

// // ─── VideoProgress ────────────────────────────────────────────────────────────────
// const VideoProgress = ({ videoRef }: { videoRef: React.RefObject<HTMLVideoElement | null> }) => {
//   const [pct, setPct] = useState(0);
//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;
//     const tick = () => { if (v.duration) setPct((v.currentTime / v.duration) * 100); };
//     v.addEventListener("timeupdate", tick);
//     return () => v.removeEventListener("timeupdate", tick);
//   }, [videoRef]);
//   return (
//     <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 z-20">
//       <div className="h-full bg-white/85 transition-none" style={{ width: `${pct}%` }} />
//     </div>
//   );
// };

// // ─── LiveBadge ────────────────────────────────────────────────────────────────────
// const LiveBadge = ({ label }: { label: string }) => (
//   <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2 py-0.5 bg-black/55 backdrop-blur-sm rounded-full">
//     <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
//     <span className="text-white text-[9px] font-bold tracking-widest">{label}</span>
//   </div>
// );

// // ─── Particles ────────────────────────────────────────────────────────────────────
// const Particles = ({ color }: { color: string }) => {
//   const [dims, setDims] = useState({ w: 0, h: 0 });
//   useEffect(() => {
//     setDims({ w: window.innerWidth, h: window.innerHeight });
//     const r = () => setDims({ w: window.innerWidth, h: window.innerHeight });
//     window.addEventListener("resize", r);
//     return () => window.removeEventListener("resize", r);
//   }, []);
//   if (!dims.w) return null;
//   return (
//     <div className="absolute inset-0 pointer-events-none overflow-hidden">
//       {Array.from({ length: 10 }).map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1 h-1 rounded-full"
//           style={{ background: color }}
//           initial={{ x: Math.random() * dims.w, y: Math.random() * dims.h, opacity: 0 }}
//           animate={{ y: [null, -140], opacity: [0, 0.55, 0], scale: [0, 1.6, 0] }}
//           transition={{ duration: 3.5 + Math.random() * 2.5, repeat: Infinity, delay: Math.random() * 7 }}
//         />
//       ))}
//     </div>
//   );
// };

// // ─── SlideCard ───────────────────────────────────────────────────────────────────
// // KEY DESIGN:
// // - Keyed by domPosition (0/1/2) so the motion.div is NEVER remounted
// // - slideIdx prop changes when carousel advances — video element uses key={slideIdx}
// //   to force a clean src swap without destroying the parent DOM node
// // - centerIdx in useEffect deps ensures play/pause fires on EVERY slide advance,
// //   even when domPosition stays 1 (center) across consecutive slides (fixes video2)
// const SlideCard = ({
//   slideIdx,
//   domPosition,
//   centerIdx,
//   onMediaEnd,
// }: {
//   slideIdx: number;
//   domPosition: number;  // 0=left, 1=center, 2=right
//   centerIdx: number;
//   onMediaEnd: () => void;
// }) => {
//   const isCenter = domPosition === 1;
//   const slide    = allSlides[slideIdx];
//   const founder  = founderData[slide.founderIndex];
//   const s        = founder.colorScheme;

//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
//   const firedRef = useRef(false);
//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
//     firedRef.current = false;

//     const v = videoRef.current;

//     if (!isCenter) {
//       if (v) { v.pause(); v.currentTime = 0; }
//       return;
//     }

//     if (slide.mediaType === "image") {
//       timerRef.current = setTimeout(() => {
//         if (!firedRef.current) { firedRef.current = true; onMediaEnd(); }
//       }, IMAGE_HOLD_MS);
//     } else {
//       if (v) {
//         v.currentTime = 0;
//         const p = v.play();
//         if (p !== undefined) {
//           p.catch(() => {
//             // Autoplay blocked — advance after fallback delay
//             timerRef.current = setTimeout(() => {
//               if (!firedRef.current) { firedRef.current = true; onMediaEnd(); }
//             }, 5000);
//           });
//         }
//       }
//     }

//     return () => { if (timerRef.current) clearTimeout(timerRef.current); };
//   // centerIdx ensures this fires on every advance even when domPosition=1 stays center
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [centerIdx, isCenter]);

//   const handleVideoEnd = useCallback(() => {
//     if (isCenter && !firedRef.current) { firedRef.current = true; onMediaEnd(); }
//   }, [isCenter, onMediaEnd]);

//   const videoSrc   = slide.mediaType === "video2" ? founder.video2 : founder.video;
//   const videoLabel = slide.mediaType === "video2" ? "2 / 2" : "1 / 2";

//   return (
//     <motion.div
//       style={{ zIndex: isCenter ? 20 : 10 }}
//       className="relative cursor-pointer flex-shrink-0"
//       animate={{ scale: isCenter ? 1 : 0.79, opacity: isCenter ? 1 : 0.4 }}
//       whileHover={{ scale: isCenter ? 1.015 : 0.82 }}
//       transition={{ type: "spring", stiffness: 255, damping: 25 }}
//       onHoverStart={() => setHovered(true)}
//       onHoverEnd={() => setHovered(false)}
//     >
//       {isCenter && (
//         <motion.div
//           className="absolute -inset-[3px] rounded-[22px] blur-sm pointer-events-none"
//           style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}
//           animate={{ opacity: [0.2, 0.45, 0.2] }}
//           transition={{ duration: 3, repeat: Infinity }}
//         />
//       )}

//       <div className={[
//         "relative rounded-2xl overflow-hidden shadow-2xl",
//         isCenter
//           ? "w-[185px] h-[310px] sm:w-[215px] sm:h-[360px] md:w-[255px] md:h-[420px] lg:w-[275px] lg:h-[455px]"
//           : "w-[125px] h-[235px] sm:w-[148px] sm:h-[275px] md:w-[178px] md:h-[322px] lg:w-[195px] lg:h-[354px]",
//       ].join(" ")}>

//         {/* Image */}
//         {slide.mediaType === "image" && (
//           <>
//             <Image
//               src={founder.image}
//               alt={founder.name}
//               fill
//               className="object-cover"
//               sizes="(max-width: 640px) 80vw, 320px"
//               priority={isCenter}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
//             {isCenter && (
//               <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 overflow-hidden z-20">
//                 <motion.div
//                   key={`imgbar-${centerIdx}`}
//                   className="h-full bg-white/85"
//                   initial={{ scaleX: 0 }}
//                   animate={{ scaleX: 1 }}
//                   transition={{ duration: IMAGE_HOLD_MS / 1000, ease: "linear" }}
//                   style={{ transformOrigin: "left" }}
//                 />
//               </div>
//             )}
//           </>
//         )}

//         {/* Video — key={slideIdx} forces src reload when this slot gets a new slide */}
//         {(slide.mediaType === "video" || slide.mediaType === "video2") && (
//           <>
//             <video
//               key={`vid-${slideIdx}`}
//               ref={videoRef}
//               src={videoSrc}
//               className="w-full h-full object-cover"
//               muted
//               playsInline
//               onEnded={handleVideoEnd}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
//             {isCenter && <LiveBadge label={videoLabel} />}
//             {isCenter && <VideoProgress videoRef={videoRef} />}
//           </>
//         )}

//         {/* Name overlay */}
//         <motion.div
//           className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 text-white pointer-events-none z-20"
//           animate={{ y: hovered ? -8 : 0 }}
//           transition={{ duration: 0.26 }}
//         >
//           <motion.div className="flex items-center gap-1.5 mb-0.5" animate={{ x: hovered ? 4 : 0 }}>
//             <div className="w-4 h-px bg-white/70" />
//             <span className="text-[8px] font-bold tracking-[0.2em] uppercase opacity-75">Founder</span>
//           </motion.div>
//           <motion.h3
//             className="text-xs sm:text-sm md:text-base font-bold leading-tight"
//             animate={{ x: hovered ? 4 : 0 }}
//           >
//             {founder.name}
//           </motion.h3>
//           <motion.p
//             className="text-[9px] sm:text-[10px] text-white/60 mt-0.5"
//             animate={{ opacity: hovered ? 1 : 0.55 }}
//           >
//             {founder.title}
//           </motion.p>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// // ─── Main ────────────────────────────────────────────────────────────────────────
// export default function ModernHeroSection() {
//   const [centerIdx, setCenterIdx] = useState(0);
//   const [mounted,   setMounted]   = useState(false);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       if ("scrollRestoration" in history) history.scrollRestoration = "manual";
//       window.scrollTo(0, 0);
//     }
//     setMounted(true);
//   }, []);

//   const currentSlide   = allSlides[centerIdx];
//   const currentFounder = founderData[currentSlide.founderIndex];
//   const s              = currentFounder.colorScheme;

//   // FIX 1: textKey = centerIdx → text animates on EVERY card change, not just founder change
//   const textKey = centerIdx;

//   // FIX 2: arrow buttons advance 1 slide at a time (not full founder jump)
//   const goNext      = useCallback(() => setCenterIdx((p) => (p + 1) % TOTAL), []);
//   const goPrev      = useCallback(() => setCenterIdx((p) => (p - 1 + TOTAL) % TOTAL), []);
//   const goToFounder = useCallback((fi: number) => setCenterIdx(fi * 3), []);

//   const handleMediaEnd = useCallback(() => {
//     setCenterIdx((p) => (p + 1) % TOTAL);
//   }, []);

//   const leftIdx  = (centerIdx - 1 + TOTAL) % TOTAL;
//   const rightIdx = (centerIdx + 1) % TOTAL;

//   if (!mounted) {
//     return (
//       <div className="min-h-screen w-full bg-white flex items-center justify-center">
//         <div className="w-8 h-8 border-2 border-gray-100 border-t-blue-500 rounded-full animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="relative min-h-screen w-full bg-white overflow-hidden">

//       <AnimatePresence mode="wait">
//         <motion.div
//           key={`bg-${currentSlide.founderIndex}`}
//           className="absolute inset-0 pointer-events-none"
//           style={{ background: `radial-gradient(ellipse 80% 60% at 70% 40%, ${s.gradFrom}0a, transparent 70%)` }}
//           initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//           transition={{ duration: 0.9 }}
//         />
//       </AnimatePresence>

//       <motion.div
//         className="absolute top-0 -left-28 w-[480px] h-[480px] rounded-full blur-[90px] pointer-events-none"
//         style={{ background: `radial-gradient(circle, ${s.gradFrom}13, transparent)` }}
//         animate={{ x: [0, 26, 0], y: [0, 16, 0] }}
//         transition={{ duration: 10, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute -bottom-24 -right-24 w-[560px] h-[560px] rounded-full blur-[100px] pointer-events-none"
//         style={{ background: `radial-gradient(circle, ${s.gradTo}10, transparent)` }}
//         animate={{ x: [0, -22, 0], y: [0, -14, 0] }}
//         transition={{ duration: 13, repeat: Infinity }}
//       />

//       <Particles color={s.gradFrom} />

//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-20 sm:pt-24 lg:pt-28 pb-10">
//         <div className="min-h-[calc(100vh-80px)] flex items-center">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center w-full">

//             {/* ── LEFT: text — keyed to centerIdx so it re-animates on every slide ── */}
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`txt-${textKey}`}
//                 initial={{ opacity: 0, x: -26 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 26 }}
//                 transition={{ duration: 0.38, ease: "easeOut" }}
//                 className="space-y-4 sm:space-y-5 order-2 lg:order-1"
//               >
//                 {/* Tagline */}
//                 <motion.span
//                   initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
//                   className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold tracking-widest border"
//                   style={{ background: `linear-gradient(135deg, ${s.gradFrom}12, ${s.gradTo}12)`, borderColor: `${s.gradFrom}2e`, color: s.gradFrom }}
//                 >
//                   {currentSlide.tagline}
//                 </motion.span>

//                 {/* Heading */}
//                 <motion.h1
//                   initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
//                   className="text-[clamp(1.9rem,5vw,3.7rem)] font-black leading-[1.12] tracking-tight"
//                 >
//                   <span className="text-gray-900">{currentSlide.heading}</span>
//                   <br />
//                   <span style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradMid}, ${s.gradTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                     {currentSlide.highlight}
//                   </span>
//                 </motion.h1>

//                 {/* Subtitle */}
//                 <motion.p
//                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
//                   className="text-sm sm:text-base md:text-lg font-semibold"
//                   style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
//                 >
//                   {currentSlide.subtitle}
//                 </motion.p>

//                 {/* Description */}
//                 <motion.p
//                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.19 }}
//                   className="text-gray-500 text-sm leading-relaxed max-w-[420px]"
//                 >
//                   {currentSlide.description}
//                 </motion.p>

//                 {/* Stats */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.23 }}
//                   className="flex gap-6 sm:gap-10 pt-1"
//                 >
//                   {currentFounder.stats.map((stat, i) => (
//                     <motion.div key={i} whileHover={{ y: -4 }} transition={{ duration: 0.18 }}>
//                       <p className="text-2xl sm:text-3xl font-black" style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                         {stat.value}
//                       </p>
//                       <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">{stat.label}</p>
//                     </motion.div>
//                   ))}
//                 </motion.div>

//                 {/* CTAs */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.27 }}
//                   className="flex flex-wrap gap-3 pt-1"
//                 >
//                   <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//                     <Link
//                       href="/contact"
//                       className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold shadow-md hover:shadow-lg transition-shadow"
//                       style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}
//                     >
//                       {currentSlide.ctaPrimary}
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </Link>
//                   </motion.div>
//                   <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//                     <Link href="/work" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow">
//                       {currentSlide.ctaSecondary}
//                     </Link>
//                   </motion.div>
//                 </motion.div>

//                 {/* Quote */}
//                 <motion.div
//                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.32 }}
//                   className="pt-4 border-t border-gray-100"
//                 >
//                   <div className="flex items-start gap-3">
//                     <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}>
//                       <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="text-gray-500 text-xs italic leading-relaxed">"{currentFounder.quote}"</p>
//                       <p className="text-gray-800 text-xs font-semibold mt-1.5">
//                         {currentFounder.name}
//                         <span className="text-gray-400 font-normal ml-1.5">— {currentFounder.title}</span>
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </AnimatePresence>

//             {/* ── RIGHT: carousel ── */}
//             <motion.div
//               initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
//               className="order-1 lg:order-2"
//             >
//               <div className="flex items-end justify-center gap-2 sm:gap-3 md:gap-4">
//                 {([leftIdx, centerIdx, rightIdx] as const).map((slideIdx, domPos) => (
//                   <SlideCard
//                     key={domPos}           // stable key — never causes remount
//                     slideIdx={slideIdx}    // changes as carousel advances
//                     domPosition={domPos}   // 1 = center
//                     centerIdx={centerIdx}  // triggers play/pause re-evaluation
//                     onMediaEnd={handleMediaEnd}
//                   />
//                 ))}
//               </div>

//               {/* Nav — arrows = 1 slide, dots = jump to founder */}
//               <div className="flex items-center justify-center gap-4 mt-5 sm:mt-6">
//                 <button
//                   onClick={goPrev}
//                   aria-label="Previous slide"
//                   className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow active:scale-95"
//                 >
//                   <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                   </svg>
//                 </button>

//                 <div className="flex gap-2 items-center">
//                   {founderData.map((founder, i) => {
//                     const isActive = currentSlide.founderIndex === i;
//                     return (
//                       <button
//                         key={i}
//                         onClick={() => goToFounder(i)}
//                         aria-label={founder.name}
//                         className="rounded-full transition-all duration-300"
//                         style={{ width: isActive ? 24 : 8, height: 8, background: isActive ? founder.colorScheme.gradFrom : "#d1d5db" }}
//                       />
//                     );
//                   })}
//                 </div>

//                 <button
//                   onClick={goNext}
//                   aria-label="Next slide"
//                   className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow active:scale-95"
//                 >
//                   <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>

//               {/* Slide-within-founder indicators — clickable */}
//               <div className="flex items-center justify-center gap-3 mt-3">
//                 {(["Photo", "Video 1", "Video 2"] as const).map((label, i) => {
//                   const activeSlotWithinFounder = centerIdx % 3;
//                   const isActiveSlot = activeSlotWithinFounder === i;
//                   return (
//                     <button
//                       key={i}
//                       onClick={() => setCenterIdx(currentSlide.founderIndex * 3 + i)}
//                       className="flex items-center gap-1.5"
//                     >
//                       <div
//                         className="rounded-full transition-all duration-300"
//                         style={{ width: isActiveSlot ? 16 : 8, height: 8, background: isActiveSlot ? s.gradFrom : "#d1d5db" }}
//                       />
//                       <span className="text-[10px] transition-colors duration-200" style={{ color: isActiveSlot ? s.gradFrom : "#9ca3af" }}>
//                         {label}
//                       </span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );

// }






// "use client";

// import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// // ─── Types ────────────────────────────────────────────────────────────────────
// type ColorScheme = {
//   primary: string;
//   tagline: string;
//   title: string;
//   highlight: string;
//   subtitle: string;
//   description: string;
//   ctaPrimary: string;
//   ctaSecondary: string;
//   gradFrom: string;
//   gradMid: string;
//   gradTo: string;
// };

// type FounderData = {
//   id: number;
//   name: string;
//   title: string;
//   quote: string;
//   image: string;
//   video: string;
//   video2: string;
//   colorScheme: ColorScheme;
//   stats: { value: string; label: string }[];
// };

// type MediaType = "image" | "video" | "video2";
// type Slide = {
//   founderId: number;
//   mediaType: MediaType;
//   founderIndex: number;
//   tagline: string;
//   heading: string;
//   highlight: string;
//   subtitle: string;
//   description: string;
//   ctaPrimary: string;
//   ctaSecondary: string;
// };

// // ─── Color Schemes ────────────────────────────────────────────────────────────
// const colorSchemes: Record<string, ColorScheme> = {
//   blue: {
//     primary: "from-blue-600 via-blue-500 to-cyan-500",
//     tagline: "BLUE OCEAN STRATEGY",
//     title: "Dominate the",
//     highlight: "Digital Frontier",
//     subtitle: "Where vision meets velocity",
//     description: "We transform ambitious ideas into market-leading brands. Strategic storytelling meets data-driven growth.",
//     ctaPrimary: "Launch Vision",
//     ctaSecondary: "Explore Strategy",
//     gradFrom: "#2563eb",
//     gradMid: "#3b82f6",
//     gradTo: "#06b6d4",
//   },
//   yellow: {
//     primary: "from-yellow-500 via-amber-500 to-orange-500",
//     tagline: "REBEL ECONOMICS",
//     title: "Break the",
//     highlight: "Status Quo",
//     subtitle: "Bold moves create bold empires",
//     description: "Disruptive strategies for founders who dare to be different. Bold colors, bolder results.",
//     ctaPrimary: "Start Rebellion",
//     ctaSecondary: "Read Manifesto",
//     gradFrom: "#eab308",
//     gradMid: "#f59e0b",
//     gradTo: "#f97316",
//   },
// };

// // ─── Founder Data ─────────────────────────────────────────────────────────────
// const founderData: FounderData[] = [
//   {
//     id: 1,
//     name: "Kautilya Kalyan",
//     title: "Founder & CEO",
//     quote: "Great brands aren't built in comfort zones. They're forged in decisive action.",
//     image: "/founder/founderimage.jpeg",
//     video: "/founder/foundervideo.mp4",
//     video2: "/founder/foundervideo2.mp4",
//     colorScheme: colorSchemes.blue,
//     stats: [
//       { value: "10x", label: "Growth" },
//       { value: "150+", label: "Brands" },
//       { value: "98%", label: "Success" },
//     ],
//   },
//   {
//     id: 2,
//     name: "Kautilya Kalyan",
//     title: "Chief Disruptor",
//     quote: "The biggest risk is playing it safe. Disrupt or be disrupted — there's no middle ground.",
//     image: "/founder/founderimage.jpeg",
//     video: "/founder/foundervideo.mp4",
//     video2: "/founder/foundervideo2.mp4",
//     colorScheme: colorSchemes.yellow,
//     stats: [
//       { value: "15x", label: "ROI" },
//       { value: "200+", label: "Campaigns" },
//       { value: "45+", label: "Awards" },
//     ],
//   },
// ];

// // ─── Per-slide unique text ────────────────────────────────────────────────────
// const slideTextData: {
//   tagline: string; heading: string; highlight: string;
//   subtitle: string; description: string; ctaPrimary: string; ctaSecondary: string;
// }[] = [
//     {
//       tagline: "MEET THE VISIONARY",
//       heading: "Dominate the",
//       highlight: "Digital Frontier",
//       subtitle: "Where vision meets velocity",
//       description: "We transform ambitious ideas into market-leading brands. Strategic storytelling meets data-driven growth.",
//       ctaPrimary: "Launch Vision",
//       ctaSecondary: "Explore Strategy",
//     },
//     {
//       tagline: "BLUE OCEAN STRATEGY",
//       heading: "Build a",
//       highlight: "Legacy Brand",
//       subtitle: "Data-driven storytelling at scale",
//       description: "From strategy to execution — we architect brands that don't just compete, they redefine the market entirely.",
//       ctaPrimary: "Start Building",
//       ctaSecondary: "View Our Work",
//     },
//     {
//       tagline: "FOUNDER'S JOURNEY",
//       heading: "Scale Beyond",
//       highlight: "Your Limits",
//       subtitle: "Proven systems for 10× growth",
//       description: "150+ brands scaled. 98% success rate. We don't follow trends — we create them with precision and purpose.",
//       ctaPrimary: "Let's Scale",
//       ctaSecondary: "See Results",
//     },
//     {
//       tagline: "MEET THE DISRUPTOR",
//       heading: "Break the",
//       highlight: "Status Quo",
//       subtitle: "Bold moves create bold empires",
//       description: "Disruptive strategies for founders who dare to be different. Bold colors, bolder results.",
//       ctaPrimary: "Start Rebellion",
//       ctaSecondary: "Read Manifesto",
//     },
//     {
//       tagline: "REBEL ECONOMICS",
//       heading: "Disrupt or",
//       highlight: "Be Disrupted",
//       subtitle: "No middle ground. Only momentum.",
//       description: "200+ campaigns. 15× average ROI. We engineer market disruptions that competitors scramble to understand.",
//       ctaPrimary: "Disrupt Now",
//       ctaSecondary: "Our Strategy",
//     },
//     {
//       tagline: "AWARD-WINNING IMPACT",
//       heading: "Win the",
//       highlight: "Market Game",
//       subtitle: "45+ industry awards and counting",
//       description: "Recognition follows results. From global campaigns to hyper-local execution — we turn bold ideas into market domination.",
//       ctaPrimary: "Claim Victory",
//       ctaSecondary: "View Awards",
//     },
//   ];

// const allSlides: Slide[] = founderData.flatMap((f, fi) =>
//   (["image", "video", "video2"] as MediaType[]).map((mediaType, mi) => {
//     const si = fi * 3 + mi;
//     return { founderId: f.id, mediaType, founderIndex: fi, ...slideTextData[si] };
//   })
// );
// const TOTAL = allSlides.length;
// const IMAGE_HOLD_MS = 2500;

// // ─── OPTIMIZATION 1: VideoProgress — DOM-only updates, zero React state ───────
// const VideoProgress = React.memo(({ videoRef }: { videoRef: React.RefObject<HTMLVideoElement | null> }) => {
//   const barRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;
//     const tick = () => {
//       if (barRef.current && v.duration) {
//         barRef.current.style.width = `${(v.currentTime / v.duration) * 100}%`;
//       }
//     };
//     v.addEventListener("timeupdate", tick);
//     return () => v.removeEventListener("timeupdate", tick);
//   }, [videoRef]);

//   return (
//     <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 z-20">
//       <div ref={barRef} className="h-full bg-white/85" style={{ width: "0%" }} />
//     </div>
//   );
// });
// VideoProgress.displayName = "VideoProgress";

// // ─── LiveBadge ────────────────────────────────────────────────────────────────
// const LiveBadge = React.memo(({ label }: { label: string }) => (
//   <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2 py-0.5 bg-black/55 backdrop-blur-sm rounded-full">
//     <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
//     <span className="text-white text-[9px] font-bold tracking-widest">{label}</span>
//   </div>
// ));
// LiveBadge.displayName = "LiveBadge";

// // ─── OPTIMIZATION 2: Particles — memoized, stable random values, CSS animation ─
// interface ParticleItem {
//   left: string;
//   top: string;
//   delay: string;
//   duration: string;
// }

// const PARTICLE_COUNT = 10;

// const Particles = React.memo(({ color }: { color: string }) => {
//   // Generate stable random values once — never on re-render
//   const particles = useMemo<ParticleItem[]>(() => (
//     Array.from({ length: PARTICLE_COUNT }, () => ({
//       left: `${Math.random() * 100}%`,
//       top: `${Math.random() * 100}%`,
//       delay: `${(Math.random() * 7).toFixed(2)}s`,
//       duration: `${(3.5 + Math.random() * 2.5).toFixed(2)}s`,
//     }))
//   ), []); // empty deps — generated once for lifetime of component

//   return (
//     <>
//       <style>{`
//         @keyframes particle-float {
//           0%   { transform: translateY(0)   scale(0); opacity: 0; }
//           20%  { opacity: 0.55; }
//           80%  { opacity: 0.55; }
//           100% { transform: translateY(-140px) scale(1.6); opacity: 0; }
//         }
//         .particle {
//           position: absolute;
//           width: 4px;
//           height: 4px;
//           border-radius: 50%;
//           animation: particle-float var(--dur) var(--delay) infinite ease-in-out;
//         }
//       `}</style>
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {particles.map((p, i) => (
//           <div
//             key={i}
//             className="particle"
//             style={{
//               background: color,
//               left: p.left,
//               top: p.top,
//               "--delay": p.delay,
//               "--dur": p.duration,
//             } as React.CSSProperties}
//           />
//         ))}
//       </div>
//     </>
//   );
// });
// Particles.displayName = "Particles";

// // ─── OPTIMIZATION 3: SlideCard — memoized, CSS hover transitions ──────────────
// const SlideCard = React.memo(({
//   slideIdx,
//   domPosition,
//   centerIdx,
//   onMediaEnd,
// }: {
//   slideIdx: number;
//   domPosition: number;
//   centerIdx: number;
//   onMediaEnd: () => void;
// }) => {
//   const isCenter = domPosition === 1;
//   const slide = allSlides[slideIdx];
//   const founder = founderData[slide.founderIndex];
//   const s = founder.colorScheme;

//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
//   const firedRef = useRef(false);

//   useEffect(() => {
//     if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
//     firedRef.current = false;

//     const v = videoRef.current;
//     if (!isCenter) {
//       if (v) { v.pause(); v.currentTime = 0; }
//       return;
//     }

//     if (slide.mediaType === "image") {
//       timerRef.current = setTimeout(() => {
//         if (!firedRef.current) { firedRef.current = true; onMediaEnd(); }
//       }, IMAGE_HOLD_MS);
//     } else {
//       if (v) {
//         v.currentTime = 0;
//         const p = v.play();
//         if (p !== undefined) {
//           p.catch(() => {
//             timerRef.current = setTimeout(() => {
//               if (!firedRef.current) { firedRef.current = true; onMediaEnd(); }
//             }, 5000);
//           });
//         }
//       }
//     }

//     return () => { if (timerRef.current) clearTimeout(timerRef.current); };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [centerIdx, isCenter]);

//   const handleVideoEnd = useCallback(() => {
//     if (isCenter && !firedRef.current) { firedRef.current = true; onMediaEnd(); }
//   }, [isCenter, onMediaEnd]);

//   const videoSrc = slide.mediaType === "video2" ? founder.video2 : founder.video;
//   const videoLabel = slide.mediaType === "video2" ? "2 / 2" : "1 / 2";

//   // OPTIMIZATION: CSS transitions for scale/opacity instead of Framer Motion
//   const cardStyle: React.CSSProperties = {
//     zIndex: isCenter ? 20 : 10,
//     transform: isCenter ? "scale(1)" : "scale(0.79)",
//     opacity: isCenter ? 1 : 0.4,
//     transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease",
//     position: "relative",
//     cursor: "pointer",
//     flexShrink: 0,
//   };

//   return (
//     <div
//       style={cardStyle}
//       className={`slide-card${isCenter ? " slide-card--center" : ""}`}
//     >
//       <style>{`
//         .slide-card:hover { transform: scale(0.82) !important; }
//         .slide-card--center:hover { transform: scale(1.015) !important; }
//         .slide-card-name { transition: transform 0.26s ease; }
//         .slide-card:hover .slide-card-name { transform: translateY(-8px); }
//         .slide-card-label { transition: transform 0.26s ease; }
//         .slide-card:hover .slide-card-label { transform: translateX(4px); }
//         .slide-card-title { transition: opacity 0.26s ease; }
//         .slide-card:hover .slide-card-title { opacity: 1 !important; }
//       `}</style>

//       {isCenter && (
//         <motion.div
//           className="absolute -inset-[3px] rounded-[22px] blur-sm pointer-events-none"
//           style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}
//           animate={{ opacity: [0.2, 0.45, 0.2] }}
//           transition={{ duration: 3, repeat: Infinity }}
//         />
//       )}

//       <div className={[
//         "relative rounded-2xl overflow-hidden shadow-2xl",
//         isCenter
//           ? "w-[185px] h-[310px] sm:w-[215px] sm:h-[360px] md:w-[255px] md:h-[420px] lg:w-[275px] lg:h-[455px]"
//           : "w-[125px] h-[235px] sm:w-[148px] sm:h-[275px] md:w-[178px] md:h-[322px] lg:w-[195px] lg:h-[354px]",
//       ].join(" ")}>

//         {/* Image */}
//         {slide.mediaType === "image" && (
//           <>
//             <Image
//               src={founder.image}
//               alt={founder.name}
//               fill
//               className="object-cover"
//               sizes="(max-width: 640px) 80vw, 320px"
//               priority={isCenter}
//               // OPTIMIZATION: non-center images lazy loaded
//               loading={isCenter ? "eager" : "lazy"}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
//             {isCenter && (
//               <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 overflow-hidden z-20">
//                 <motion.div
//                   key={`imgbar-${centerIdx}`}
//                   className="h-full bg-white/85"
//                   initial={{ scaleX: 0 }}
//                   animate={{ scaleX: 1 }}
//                   transition={{ duration: IMAGE_HOLD_MS / 1000, ease: "linear" }}
//                   style={{ transformOrigin: "left" }}
//                 />
//               </div>
//             )}
//           </>
//         )}

//         {/* Video — OPTIMIZATION: preload="metadata", key forces src swap */}
//         {(slide.mediaType === "video" || slide.mediaType === "video2") && (
//           <>
//             <video
//               key={`vid-${slideIdx}`}
//               ref={videoRef}
//               src={videoSrc}
//               className="w-full h-full object-cover"
//               muted
//               playsInline
//               // OPTIMIZATION: only center card preloads; side cards defer
//               preload={isCenter ? "auto" : "metadata"}
//               onEnded={handleVideoEnd}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
//             {isCenter && <LiveBadge label={videoLabel} />}
//             {isCenter && <VideoProgress videoRef={videoRef} />}
//           </>
//         )}

//         {/* Name overlay — CSS transitions replace Framer Motion */}
//         <div className="slide-card-name absolute inset-0 flex flex-col justify-end p-3 sm:p-4 text-white pointer-events-none z-20">
//           <div className="slide-card-label flex items-center gap-1.5 mb-0.5">
//             <div className="w-4 h-px bg-white/70" />
//             <span className="text-[8px] font-bold tracking-[0.2em] uppercase opacity-75">Founder</span>
//           </div>
//           <h3 className="slide-card-label text-xs sm:text-sm md:text-base font-bold leading-tight">
//             {founder.name}
//           </h3>
//           <p className="slide-card-title text-[9px] sm:text-[10px] text-white/60 mt-0.5" style={{ opacity: 0.55 }}>
//             {founder.title}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// });
// SlideCard.displayName = "SlideCard";

// // ─── OPTIMIZATION 4: Memoized left-panel subcomponents ───────────────────────
// const HeroStats = React.memo(({ stats, gradFrom, gradTo }: {
//   stats: FounderData["stats"];
//   gradFrom: string;
//   gradTo: string;
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.23 }}
//     className="flex gap-6 sm:gap-10 pt-1"
//   >
//     {stats.map((stat, i) => (
//       // OPTIMIZATION: whileHover replaced with CSS
//       <div key={i} className="hero-stat" style={{ cursor: "default" }}>
//         <style>{`.hero-stat { transition: transform .18s ease; } .hero-stat:hover { transform: translateY(-4px); }`}</style>
//         <p className="text-2xl sm:text-3xl font-black" style={{
//           background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})`,
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//         }}>
//           {stat.value}
//         </p>
//         <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">{stat.label}</p>
//       </div>
//     ))}
//   </motion.div>
// ));
// HeroStats.displayName = "HeroStats";

// const HeroCTAs = React.memo(({ ctaPrimary, ctaSecondary, gradFrom, gradTo }: {
//   ctaPrimary: string;
//   ctaSecondary: string;
//   gradFrom: string;
//   gradTo: string;
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.27 }}
//     className="flex flex-wrap gap-3 pt-1"
//   >
//     {/* OPTIMIZATION: whileHover/whileTap replaced with CSS */}
//     <style>{`
//       .cta-primary { transition: transform .15s ease, box-shadow .15s ease; }
//       .cta-primary:hover { transform: scale(1.03); }
//       .cta-primary:active { transform: scale(0.97); }
//       .cta-secondary { transition: transform .15s ease, box-shadow .15s ease; }
//       .cta-secondary:hover { transform: scale(1.03); }
//       .cta-secondary:active { transform: scale(0.97); }
//     `}</style>
//     <Link
//       href="/contact"
//       className="cta-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold shadow-md hover:shadow-lg"
//       style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})` }}
//     >
//       {ctaPrimary}
//       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//       </svg>
//     </Link>
//     <Link
//       href="/work"
//       className="cta-secondary inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-semibold shadow-sm hover:shadow-md"
//     >
//       {ctaSecondary}
//     </Link>
//   </motion.div>
// ));
// HeroCTAs.displayName = "HeroCTAs";

// // ─── OPTIMIZATION 5: HeroBackground — separate memoized component ─────────────
// // Isolates background re-renders from text/carousel updates
// const HeroBackground = React.memo(({ founderIndex, gradFrom, gradTo }: {
//   founderIndex: number;
//   gradFrom: string;
//   gradTo: string;
// }) => (
//   <>
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={`bg-${founderIndex}`}
//         className="absolute inset-0 pointer-events-none"
//         style={{ background: `radial-gradient(ellipse 80% 60% at 70% 40%, ${gradFrom}0a, transparent 70%)` }}
//         initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//         transition={{ duration: 0.9 }}
//       />
//     </AnimatePresence>

//     {/* OPTIMIZATION: blur reduced from 90px/100px → 40px, static gradient blobs */}
//     <div
//       className="absolute top-0 -left-28 w-[480px] h-[480px] rounded-full pointer-events-none"
//       style={{
//         background: `radial-gradient(circle, ${gradFrom}13, transparent)`,
//         filter: "blur(40px)",
//       }}
//     />
//     <div
//       className="absolute -bottom-24 -right-24 w-[560px] h-[560px] rounded-full pointer-events-none"
//       style={{
//         background: `radial-gradient(circle, ${gradTo}10, transparent)`,
//         filter: "blur(40px)",
//       }}
//     />
//   </>
// ));
// HeroBackground.displayName = "HeroBackground";

// // ─── Main ─────────────────────────────────────────────────────────────────────
// export default function ModernHeroSection() {
//   // OPTIMIZATION: removed mounted useState — use CSS to handle SSR flash instead
//   const [centerIdx, setCenterIdx] = useState(0);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       if ("scrollRestoration" in history) history.scrollRestoration = "manual";
//       window.scrollTo(0, 0);
//     }
//   }, []);

//   const currentSlide = allSlides[centerIdx];
//   const currentFounder = founderData[currentSlide.founderIndex];
//   const s = currentFounder.colorScheme;

//   const goNext = useCallback(() => setCenterIdx((p) => (p + 1) % TOTAL), []);
//   const goPrev = useCallback(() => setCenterIdx((p) => (p - 1 + TOTAL) % TOTAL), []);
//   const goToFounder = useCallback((fi: number) => setCenterIdx(fi * 3), []);

//   const handleMediaEnd = useCallback(() => {
//     setCenterIdx((p) => (p + 1) % TOTAL);
//   }, []);

//   const leftIdx = (centerIdx - 1 + TOTAL) % TOTAL;
//   const rightIdx = (centerIdx + 1) % TOTAL;

//   return (
//     <div className="relative min-h-screen w-full bg-white overflow-hidden">

//       {/* OPTIMIZATION: Memoized background — only re-renders on founder change */}
//       <HeroBackground
//         founderIndex={currentSlide.founderIndex}
//         gradFrom={s.gradFrom}
//         gradTo={s.gradTo}
//       />

//       {/* OPTIMIZATION: Memoized particles with stable random values */}
//       <Particles color={s.gradFrom} />

//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-20 sm:pt-24 lg:pt-28 pb-10">
//         <div className="min-h-[calc(100vh-80px)] flex items-center">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center w-full">

//             {/* ── LEFT: text ── */}
//             {/* OPTIMIZATION: only the changing content inside AnimatePresence
//                 The outer wrapper stays mounted; only inner text transitions */}
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`txt-${centerIdx}`}
//                 initial={{ opacity: 0, x: -26 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 26 }}
//                 transition={{ duration: 0.38, ease: "easeOut" }}
//                 className="space-y-4 sm:space-y-5 order-2 lg:order-1"
//               >
//                 {/* Tagline */}
//                 <motion.span
//                   initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
//                   className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold tracking-widest border"
//                   style={{
//                     background: `linear-gradient(135deg, ${s.gradFrom}12, ${s.gradTo}12)`,
//                     borderColor: `${s.gradFrom}2e`,
//                     color: s.gradFrom,
//                   }}
//                 >
//                   {currentSlide.tagline}
//                 </motion.span>

//                 {/* Heading */}
//                 <motion.h1
//                   initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
//                   className="text-[clamp(1.9rem,5vw,3.7rem)] font-black leading-[1.12] tracking-tight"
//                 >
//                   <span className="text-gray-900">{currentSlide.heading}</span>
//                   <br />
//                   <span style={{
//                     background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradMid}, ${s.gradTo})`,
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                   }}>
//                     {currentSlide.highlight}
//                   </span>
//                 </motion.h1>

//                 {/* Subtitle */}
//                 <motion.p
//                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
//                   className="text-sm sm:text-base md:text-lg font-semibold"
//                   style={{
//                     background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})`,
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                   }}
//                 >
//                   {currentSlide.subtitle}
//                 </motion.p>

//                 {/* Description */}
//                 <motion.p
//                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.19 }}
//                   className="text-gray-500 text-sm leading-relaxed max-w-[420px]"
//                 >
//                   {currentSlide.description}
//                 </motion.p>

//                 {/* Stats — memoized */}
//                 <HeroStats
//                   stats={currentFounder.stats}
//                   gradFrom={s.gradFrom}
//                   gradTo={s.gradTo}
//                 />

//                 {/* CTAs — memoized */}
//                 <HeroCTAs
//                   ctaPrimary={currentSlide.ctaPrimary}
//                   ctaSecondary={currentSlide.ctaSecondary}
//                   gradFrom={s.gradFrom}
//                   gradTo={s.gradTo}
//                 />

//                 {/* Quote */}
//                 <motion.div
//                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.32 }}
//                   className="pt-4 border-t border-gray-100"
//                 >
//                   <div className="flex items-start gap-3">
//                     <div
//                       className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
//                       style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}
//                     >
//                       <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="text-gray-500 text-xs italic leading-relaxed">"{currentFounder.quote}"</p>
//                       <p className="text-gray-800 text-xs font-semibold mt-1.5">
//                         {currentFounder.name}
//                         <span className="text-gray-400 font-normal ml-1.5">— {currentFounder.title}</span>
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </AnimatePresence>

//             {/* ── RIGHT: carousel ── */}
//             <motion.div
//               initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
//               className="order-1 lg:order-2"
//             >
//               <div className="flex items-end justify-center gap-2 sm:gap-3 md:gap-4">
//                 {([leftIdx, centerIdx, rightIdx] as const).map((slideIdx, domPos) => (
//                   <SlideCard
//                     key={domPos}
//                     slideIdx={slideIdx}
//                     domPosition={domPos}
//                     centerIdx={centerIdx}
//                     onMediaEnd={handleMediaEnd}
//                   />
//                 ))}
//               </div>

//               {/* Nav */}
//               <div className="flex items-center justify-center gap-4 mt-5 sm:mt-6">
//                 <button
//                   onClick={goPrev}
//                   aria-label="Previous slide"
//                   className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow active:scale-95"
//                 >
//                   <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                   </svg>
//                 </button>

//                 <div className="flex gap-2 items-center">
//                   {founderData.map((founder, i) => {
//                     const isActive = currentSlide.founderIndex === i;
//                     return (
//                       <button
//                         key={i}
//                         onClick={() => goToFounder(i)}
//                         aria-label={founder.name}
//                         className="rounded-full transition-all duration-300"
//                         style={{
//                           width: isActive ? 24 : 8,
//                           height: 8,
//                           background: isActive ? founder.colorScheme.gradFrom : "#d1d5db",
//                         }}
//                       />
//                     );
//                   })}
//                 </div>

//                 <button
//                   onClick={goNext}
//                   aria-label="Next slide"
//                   className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow active:scale-95"
//                 >
//                   <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>

//               {/* Slide-within-founder indicators */}
//               <div className="flex items-center justify-center gap-3 mt-3">
//                 {(["Photo", "Video 1", "Video 2"] as const).map((label, i) => {
//                   const activeSlotWithinFounder = centerIdx % 3;
//                   const isActiveSlot = activeSlotWithinFounder === i;
//                   return (
//                     <button
//                       key={i}
//                       onClick={() => setCenterIdx(currentSlide.founderIndex * 3 + i)}
//                       className="flex items-center gap-1.5"
//                     >
//                       <div
//                         className="rounded-full transition-all duration-300"
//                         style={{
//                           width: isActiveSlot ? 16 : 8,
//                           height: 8,
//                           background: isActiveSlot ? s.gradFrom : "#d1d5db",
//                         }}
//                       />
//                       <span
//                         className="text-[10px] transition-colors duration-200"
//                         style={{ color: isActiveSlot ? s.gradFrom : "#9ca3af" }}
//                       >
//                         {label}
//                       </span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }










"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────
type ColorScheme = {
  primary: string;
  tagline: string;
  title: string;
  highlight: string;
  subtitle: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  gradFrom: string;
  gradMid: string;
  gradTo: string;
};

type FounderData = {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
  video: string;
  video2: string;
  colorScheme: ColorScheme;
  stats: { value: string; label: string }[];
};

type MediaType = "image" | "video" | "video2";
type Slide = {
  founderId: number;
  mediaType: MediaType;
  founderIndex: number;
  tagline: string;
  heading: string;
  highlight: string;
  subtitle: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

// ─── Color Schemes ────────────────────────────────────────────────────────────
const colorSchemes: Record<string, ColorScheme> = {
  blue: {
    primary: "from-blue-600 via-blue-500 to-cyan-500",
    tagline: "BLUE OCEAN STRATEGY",
    title: "Dominate the",
    highlight: "Digital Frontier",
    subtitle: "Where vision meets velocity",
    description: "We transform ambitious ideas into market-leading brands. Strategic storytelling meets data-driven growth.",
    ctaPrimary: "Launch Vision",
    ctaSecondary: "Explore Strategy",
    gradFrom: "#2563eb",
    gradMid: "#3b82f6",
    gradTo: "#06b6d4",
  },
  yellow: {
    primary: "from-yellow-500 via-amber-500 to-orange-500",
    tagline: "REBEL ECONOMICS",
    title: "Break the",
    highlight: "Status Quo",
    subtitle: "Bold moves create bold empires",
    description: "Disruptive strategies for founders who dare to be different. Bold colors, bolder results.",
    ctaPrimary: "Start Rebellion",
    ctaSecondary: "Read Manifesto",
    gradFrom: "#eab308",
    gradMid: "#f59e0b",
    gradTo: "#f97316",
  },
};

// ─── Founder Data ─────────────────────────────────────────────────────────────
const founderData: FounderData[] = [
  {
    id: 1,
    name: "Kautilya Kalyan",
    title: "Founder & CEO",
    quote: "Great brands aren't built in comfort zones. They're forged in decisive action.",
    image: "/founder/founderimage.jpeg",
    video: "/founder/foundervideo.mp4",
    video2: "/founder/foundervideo2.mp4",
    colorScheme: colorSchemes.blue,
    stats: [
      { value: "10x", label: "Growth" },
      { value: "150+", label: "Brands" },
      { value: "98%", label: "Success" },
    ],
  },
  {
    id: 2,
    name: "Kautilya Kalyan",
    title: "Chief Disruptor",
    quote: "The biggest risk is playing it safe. Disrupt or be disrupted — there's no middle ground.",
    image: "/founder/founderimage.jpeg",
    video: "/founder/foundervideo.mp4",
    video2: "/founder/foundervideo2.mp4",
    colorScheme: colorSchemes.yellow,
    stats: [
      { value: "15x", label: "ROI" },
      { value: "200+", label: "Campaigns" },
      { value: "45+", label: "Awards" },
    ],
  },
];

// ─── Per-slide unique text ────────────────────────────────────────────────────
const slideTextData: {
  tagline: string; heading: string; highlight: string;
  subtitle: string; description: string; ctaPrimary: string; ctaSecondary: string;
}[] = [
    {
      tagline: "MEET THE VISIONARY",
      heading: "Dominate the",
      highlight: "Digital Frontier",
      subtitle: "Where vision meets velocity",
      description: "We transform ambitious ideas into market-leading brands. Strategic storytelling meets data-driven growth.",
      ctaPrimary: "Launch Vision",
      ctaSecondary: "Explore Strategy",
    },
    {
      tagline: "BLUE OCEAN STRATEGY",
      heading: "Build a",
      highlight: "Legacy Brand",
      subtitle: "Data-driven storytelling at scale",
      description: "From strategy to execution — we architect brands that don't just compete, they redefine the market entirely.",
      ctaPrimary: "Start Building",
      ctaSecondary: "View Our Work",
    },
    {
      tagline: "FOUNDER'S JOURNEY",
      heading: "Scale Beyond",
      highlight: "Your Limits",
      subtitle: "Proven systems for 10× growth",
      description: "150+ brands scaled. 98% success rate. We don't follow trends — we create them with precision and purpose.",
      ctaPrimary: "Let's Scale",
      ctaSecondary: "See Results",
    },
    {
      tagline: "MEET THE DISRUPTOR",
      heading: "Break the",
      highlight: "Status Quo",
      subtitle: "Bold moves create bold empires",
      description: "Disruptive strategies for founders who dare to be different. Bold colors, bolder results.",
      ctaPrimary: "Start Rebellion",
      ctaSecondary: "Read Manifesto",
    },
    {
      tagline: "REBEL ECONOMICS",
      heading: "Disrupt or",
      highlight: "Be Disrupted",
      subtitle: "No middle ground. Only momentum.",
      description: "200+ campaigns. 15× average ROI. We engineer market disruptions that competitors scramble to understand.",
      ctaPrimary: "Disrupt Now",
      ctaSecondary: "Our Strategy",
    },
    {
      tagline: "AWARD-WINNING IMPACT",
      heading: "Win the",
      highlight: "Market Game",
      subtitle: "45+ industry awards and counting",
      description: "Recognition follows results. From global campaigns to hyper-local execution — we turn bold ideas into market domination.",
      ctaPrimary: "Claim Victory",
      ctaSecondary: "View Awards",
    },
  ];

const allSlides: Slide[] = founderData.flatMap((f, fi) =>
  (["image", "video", "video2"] as MediaType[]).map((mediaType, mi) => {
    const si = fi * 3 + mi;
    return { founderId: f.id, mediaType, founderIndex: fi, ...slideTextData[si] };
  })
);
const TOTAL = allSlides.length;
const IMAGE_HOLD_MS = 2500;

// ─── OPTIMIZATION 1: VideoProgress — DOM-only updates, zero React state ───────
const VideoProgress = React.memo(({ videoRef }: { videoRef: React.RefObject<HTMLVideoElement | null> }) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tick = () => {
      if (barRef.current && v.duration) {
        barRef.current.style.width = `${(v.currentTime / v.duration) * 100}%`;
      }
    };
    v.addEventListener("timeupdate", tick);
    return () => v.removeEventListener("timeupdate", tick);
  }, [videoRef]);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 z-20">
      <div ref={barRef} className="h-full bg-white/85" style={{ width: "0%" }} />
    </div>
  );
});
VideoProgress.displayName = "VideoProgress";

// ─── LiveBadge ────────────────────────────────────────────────────────────────
const LiveBadge = React.memo(({ label }: { label: string }) => (
  <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2 py-0.5 bg-black/55 backdrop-blur-sm rounded-full">
    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
    <span className="text-white text-[9px] font-bold tracking-widest">{label}</span>
  </div>
));
LiveBadge.displayName = "LiveBadge";

// ─── OPTIMIZATION 2: Particles — memoized, stable deterministic values, CSS animation ─
// FIX (react-hooks/purity + react-hooks/set-state-in-effect): Math.random()
// can't be called during the render phase (impure), and calling setState
// synchronously inside a useEffect body causes an avoidable cascading render.
// Instead we use a deterministic seeded pseudo-random generator and compute
// the particle positions once at module scope. This is pure (no render-time
// randomness), requires no effect/setState round-trip, and produces the same
// output on the server and the client, so there's no hydration mismatch either.
interface ParticleItem {
  left: string;
  top: string;
  delay: string;
  duration: string;
}

const PARTICLE_COUNT = 10;

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 43758.5453123;
  return x - Math.floor(x);
}

const PARTICLES: ParticleItem[] = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  left: `${(seededRandom(i * 12.9898) * 100).toFixed(2)}%`,
  top: `${(seededRandom(i * 78.233 + 1) * 100).toFixed(2)}%`,
  delay: `${(seededRandom(i * 37.719 + 2) * 7).toFixed(2)}s`,
  duration: `${(3.5 + seededRandom(i * 93.989 + 3) * 2.5).toFixed(2)}s`,
}));

const Particles = React.memo(({ color }: { color: string }) => {
  return (
    <>
      <style>{`
        @keyframes particle-float {
          0%   { transform: translateY(0)   scale(0); opacity: 0; }
          20%  { opacity: 0.55; }
          80%  { opacity: 0.55; }
          100% { transform: translateY(-140px) scale(1.6); opacity: 0; }
        }
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          animation: particle-float var(--dur) var(--delay) infinite ease-in-out;
        }
      `}</style>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              background: color,
              left: p.left,
              top: p.top,
              "--delay": p.delay,
              "--dur": p.duration,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </>
  );
});
Particles.displayName = "Particles";

// ─── OPTIMIZATION 3: SlideCard — memoized, CSS hover transitions ──────────────
const SlideCard = React.memo(({
  slideIdx,
  domPosition,
  centerIdx,
  onMediaEnd,
}: {
  slideIdx: number;
  domPosition: number;
  centerIdx: number;
  onMediaEnd: () => void;
}) => {
  const isCenter = domPosition === 1;
  const slide = allSlides[slideIdx];
  const founder = founderData[slide.founderIndex];
  const s = founder.colorScheme;

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const firedRef = useRef(false);

  useEffect(() => {
    if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
    firedRef.current = false;

    const v = videoRef.current;
    if (!isCenter) {
      if (v) { v.pause(); v.currentTime = 0; }
      return;
    }

    if (slide.mediaType === "image") {
      timerRef.current = setTimeout(() => {
        if (!firedRef.current) { firedRef.current = true; onMediaEnd(); }
      }, IMAGE_HOLD_MS);
    } else {
      if (v) {
        v.currentTime = 0;
        const p = v.play();
        if (p !== undefined) {
          p.catch(() => {
            timerRef.current = setTimeout(() => {
              if (!firedRef.current) { firedRef.current = true; onMediaEnd(); }
            }, 5000);
          });
        }
      }
    }

    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [centerIdx, isCenter]);

  const handleVideoEnd = useCallback(() => {
    if (isCenter && !firedRef.current) { firedRef.current = true; onMediaEnd(); }
  }, [isCenter, onMediaEnd]);

  const videoSrc = slide.mediaType === "video2" ? founder.video2 : founder.video;
  const videoLabel = slide.mediaType === "video2" ? "2 / 2" : "1 / 2";

  // OPTIMIZATION: CSS transitions for scale/opacity instead of Framer Motion
  const cardStyle: React.CSSProperties = {
    zIndex: isCenter ? 20 : 10,
    transform: isCenter ? "scale(1)" : "scale(0.79)",
    opacity: isCenter ? 1 : 0.4,
    transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease",
    position: "relative",
    cursor: "pointer",
    flexShrink: 0,
  };

  return (
    <div
      style={cardStyle}
      className={`slide-card${isCenter ? " slide-card--center" : ""}`}
    >
      <style>{`
        .slide-card:hover { transform: scale(0.82) !important; }
        .slide-card--center:hover { transform: scale(1.015) !important; }
        .slide-card-name { transition: transform 0.26s ease; }
        .slide-card:hover .slide-card-name { transform: translateY(-8px); }
        .slide-card-label { transition: transform 0.26s ease; }
        .slide-card:hover .slide-card-label { transform: translateX(4px); }
        .slide-card-title { transition: opacity 0.26s ease; }
        .slide-card:hover .slide-card-title { opacity: 1 !important; }
      `}</style>

      {isCenter && (
        <motion.div
          className="absolute -inset-[3px] rounded-[22px] blur-sm pointer-events-none"
          style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}
          animate={{ opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}

      <div className={[
        "relative rounded-2xl overflow-hidden shadow-2xl",
        isCenter
          ? "w-[185px] h-[310px] sm:w-[215px] sm:h-[360px] md:w-[255px] md:h-[420px] lg:w-[275px] lg:h-[455px]"
          : "w-[125px] h-[235px] sm:w-[148px] sm:h-[275px] md:w-[178px] md:h-[322px] lg:w-[195px] lg:h-[354px]",
      ].join(" ")}>

        {/* Image */}
        {slide.mediaType === "image" && (
          <>
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 80vw, 320px"
              priority={isCenter}
              // OPTIMIZATION: non-center images lazy loaded
              loading={isCenter ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
            {isCenter && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 overflow-hidden z-20">
                <motion.div
                  key={`imgbar-${centerIdx}`}
                  className="h-full bg-white/85"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: IMAGE_HOLD_MS / 1000, ease: "linear" }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            )}
          </>
        )}

        {/* Video — OPTIMIZATION: preload="metadata", key forces src swap */}
        {(slide.mediaType === "video" || slide.mediaType === "video2") && (
          <>
            <video
              key={`vid-${slideIdx}`}
              ref={videoRef}
              src={videoSrc}
              className="w-full h-full object-cover"
              muted
              playsInline
              // OPTIMIZATION: only center card preloads; side cards defer
              preload={isCenter ? "auto" : "metadata"}
              onEnded={handleVideoEnd}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
            {isCenter && <LiveBadge label={videoLabel} />}
            {isCenter && <VideoProgress videoRef={videoRef} />}
          </>
        )}

        {/* Name overlay — CSS transitions replace Framer Motion */}
        <div className="slide-card-name absolute inset-0 flex flex-col justify-end p-3 sm:p-4 text-white pointer-events-none z-20">
          <div className="slide-card-label flex items-center gap-1.5 mb-0.5">
            <div className="w-4 h-px bg-white/70" />
            <span className="text-[8px] font-bold tracking-[0.2em] uppercase opacity-75">Founder</span>
          </div>
          <h3 className="slide-card-label text-xs sm:text-sm md:text-base font-bold leading-tight">
            {founder.name}
          </h3>
          <p className="slide-card-title text-[9px] sm:text-[10px] text-white/60 mt-0.5" style={{ opacity: 0.55 }}>
            {founder.title}
          </p>
        </div>
      </div>
    </div>
  );
});
SlideCard.displayName = "SlideCard";

// ─── OPTIMIZATION 4: Memoized left-panel subcomponents ───────────────────────
const HeroStats = React.memo(({ stats, gradFrom, gradTo }: {
  stats: FounderData["stats"];
  gradFrom: string;
  gradTo: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.23 }}
    className="flex gap-6 sm:gap-10 pt-1"
  >
    {stats.map((stat, i) => (
      // OPTIMIZATION: whileHover replaced with CSS
      <div key={i} className="hero-stat" style={{ cursor: "default" }}>
        <style>{`.hero-stat { transition: transform .18s ease; } .hero-stat:hover { transform: translateY(-4px); }`}</style>
        <p className="text-2xl sm:text-3xl font-black" style={{
          background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          {stat.value}
        </p>
        <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">{stat.label}</p>
      </div>
    ))}
  </motion.div>
));
HeroStats.displayName = "HeroStats";

const HeroCTAs = React.memo(({ ctaPrimary, ctaSecondary, gradFrom, gradTo }: {
  ctaPrimary: string;
  ctaSecondary: string;
  gradFrom: string;
  gradTo: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.27 }}
    className="flex flex-wrap gap-3 pt-1"
  >
    {/* OPTIMIZATION: whileHover/whileTap replaced with CSS */}
    <style>{`
      .cta-primary { transition: transform .15s ease, box-shadow .15s ease; }
      .cta-primary:hover { transform: scale(1.03); }
      .cta-primary:active { transform: scale(0.97); }
      .cta-secondary { transition: transform .15s ease, box-shadow .15s ease; }
      .cta-secondary:hover { transform: scale(1.03); }
      .cta-secondary:active { transform: scale(0.97); }
    `}</style>
    <Link
      href="/contact"
      className="cta-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold shadow-md hover:shadow-lg"
      style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})` }}
    >
      {ctaPrimary}
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
    <Link
      href="/work"
      className="cta-secondary inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-semibold shadow-sm hover:shadow-md"
    >
      {ctaSecondary}
    </Link>
  </motion.div>
));
HeroCTAs.displayName = "HeroCTAs";

// ─── OPTIMIZATION 5: HeroBackground — separate memoized component ─────────────
// Isolates background re-renders from text/carousel updates
const HeroBackground = React.memo(({ founderIndex, gradFrom, gradTo }: {
  founderIndex: number;
  gradFrom: string;
  gradTo: string;
}) => (
  <>
    <AnimatePresence mode="wait">
      <motion.div
        key={`bg-${founderIndex}`}
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 80% 60% at 70% 40%, ${gradFrom}0a, transparent 70%)` }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: 0.9 }}
      />
    </AnimatePresence>

    {/* OPTIMIZATION: blur reduced from 90px/100px → 40px, static gradient blobs */}
    <div
      className="absolute top-0 -left-28 w-[480px] h-[480px] rounded-full pointer-events-none"
      style={{
        background: `radial-gradient(circle, ${gradFrom}13, transparent)`,
        filter: "blur(40px)",
      }}
    />
    <div
      className="absolute -bottom-24 -right-24 w-[560px] h-[560px] rounded-full pointer-events-none"
      style={{
        background: `radial-gradient(circle, ${gradTo}10, transparent)`,
        filter: "blur(40px)",
      }}
    />
  </>
));
HeroBackground.displayName = "HeroBackground";

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function ModernHeroSection() {
  // OPTIMIZATION: removed mounted useState — use CSS to handle SSR flash instead
  const [centerIdx, setCenterIdx] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in history) history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);

  const currentSlide = allSlides[centerIdx];
  const currentFounder = founderData[currentSlide.founderIndex];
  const s = currentFounder.colorScheme;

  const goNext = useCallback(() => setCenterIdx((p) => (p + 1) % TOTAL), []);
  const goPrev = useCallback(() => setCenterIdx((p) => (p - 1 + TOTAL) % TOTAL), []);
  const goToFounder = useCallback((fi: number) => setCenterIdx(fi * 3), []);

  const handleMediaEnd = useCallback(() => {
    setCenterIdx((p) => (p + 1) % TOTAL);
  }, []);

  const leftIdx = (centerIdx - 1 + TOTAL) % TOTAL;
  const rightIdx = (centerIdx + 1) % TOTAL;

  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden">

      {/* OPTIMIZATION: Memoized background — only re-renders on founder change */}
      <HeroBackground
        founderIndex={currentSlide.founderIndex}
        gradFrom={s.gradFrom}
        gradTo={s.gradTo}
      />

      {/* OPTIMIZATION: Memoized particles with stable random values */}
      <Particles color={s.gradFrom} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-20 sm:pt-24 lg:pt-28 pb-10">
        <div className="min-h-[calc(100vh-80px)] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center w-full">

            {/* ── LEFT: text ── */}
            {/* OPTIMIZATION: only the changing content inside AnimatePresence
                The outer wrapper stays mounted; only inner text transitions */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`txt-${centerIdx}`}
                initial={{ opacity: 0, x: -26 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 26 }}
                transition={{ duration: 0.38, ease: "easeOut" }}
                className="space-y-4 sm:space-y-5 order-2 lg:order-1"
              >
                {/* Tagline */}
                <motion.span
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
                  className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold tracking-widest border"
                  style={{
                    background: `linear-gradient(135deg, ${s.gradFrom}12, ${s.gradTo}12)`,
                    borderColor: `${s.gradFrom}2e`,
                    color: s.gradFrom,
                  }}
                >
                  {currentSlide.tagline}
                </motion.span>

                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                  className="text-[clamp(1.9rem,5vw,3.7rem)] font-black leading-[1.12] tracking-tight"
                >
                  <span className="text-gray-900">{currentSlide.heading}</span>
                  <br />
                  <span style={{
                    background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradMid}, ${s.gradTo})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                    {currentSlide.highlight}
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
                  className="text-sm sm:text-base md:text-lg font-semibold"
                  style={{
                    background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {currentSlide.subtitle}
                </motion.p>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.19 }}
                  className="text-gray-500 text-sm leading-relaxed max-w-[420px]"
                >
                  {currentSlide.description}
                </motion.p>

                {/* Stats — memoized */}
                <HeroStats
                  stats={currentFounder.stats}
                  gradFrom={s.gradFrom}
                  gradTo={s.gradTo}
                />

                {/* CTAs — memoized */}
                <HeroCTAs
                  ctaPrimary={currentSlide.ctaPrimary}
                  ctaSecondary={currentSlide.ctaSecondary}
                  gradFrom={s.gradFrom}
                  gradTo={s.gradTo}
                />

                {/* Quote */}
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.32 }}
                  className="pt-4 border-t border-gray-100"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `linear-gradient(135deg, ${s.gradFrom}, ${s.gradTo})` }}
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                      </svg>
                    </div>
                    <div>
                      {/* FIX (react/no-unescaped-entities): replaced literal "
                          characters with &ldquo; / &rdquo; HTML entities */}
                      <p className="text-gray-500 text-xs italic leading-relaxed">&ldquo;{currentFounder.quote}&rdquo;</p>
                      <p className="text-gray-800 text-xs font-semibold mt-1.5">
                        {currentFounder.name}
                        <span className="text-gray-400 font-normal ml-1.5">— {currentFounder.title}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* ── RIGHT: carousel ── */}
            <motion.div
              initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-end justify-center gap-2 sm:gap-3 md:gap-4">
                {([leftIdx, centerIdx, rightIdx] as const).map((slideIdx, domPos) => (
                  <SlideCard
                    key={domPos}
                    slideIdx={slideIdx}
                    domPosition={domPos}
                    centerIdx={centerIdx}
                    onMediaEnd={handleMediaEnd}
                  />
                ))}
              </div>

              {/* Nav */}
              <div className="flex items-center justify-center gap-4 mt-5 sm:mt-6">
                <button
                  onClick={goPrev}
                  aria-label="Previous slide"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow active:scale-95"
                >
                  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex gap-2 items-center">
                  {founderData.map((founder, i) => {
                    const isActive = currentSlide.founderIndex === i;
                    return (
                      <button
                        key={i}
                        onClick={() => goToFounder(i)}
                        aria-label={founder.name}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: isActive ? 24 : 8,
                          height: 8,
                          background: isActive ? founder.colorScheme.gradFrom : "#d1d5db",
                        }}
                      />
                    );
                  })}
                </div>

                <button
                  onClick={goNext}
                  aria-label="Next slide"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow active:scale-95"
                >
                  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Slide-within-founder indicators */}
              <div className="flex items-center justify-center gap-3 mt-3">
                {(["Photo", "Video 1", "Video 2"] as const).map((label, i) => {
                  const activeSlotWithinFounder = centerIdx % 3;
                  const isActiveSlot = activeSlotWithinFounder === i;
                  return (
                    <button
                      key={i}
                      onClick={() => setCenterIdx(currentSlide.founderIndex * 3 + i)}
                      className="flex items-center gap-1.5"
                    >
                      <div
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: isActiveSlot ? 16 : 8,
                          height: 8,
                          background: isActiveSlot ? s.gradFrom : "#d1d5db",
                        }}
                      />
                      <span
                        className="text-[10px] transition-colors duration-200"
                        style={{ color: isActiveSlot ? s.gradFrom : "#9ca3af" }}
                      >
                        {label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}