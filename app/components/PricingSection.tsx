// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Check,
//   Rocket,
//   TrendingUp,
//   Sparkles,
//   ArrowRight,
//   Shield,
//   Star,
//   Zap,
//   Briefcase,
//   Crown,
//   Heart,
//   Clock,
//   Award,
// } from "lucide-react";
// import Link from "next/link";

// const plans = [
//   {
//     name: "Startup Building Plan",
//     icon: Rocket,
//     tagline: "Best for new startups & founders",
//     price: "25,000",
//     secondMonthPrice: "15,000",
//     features: [
//       "Website + Domain + Hosting",
//       "Brand setup",
//       "Social media setup & optimization",
//       "Content (graphics, reels, articles)",
//       "SEO basics",
//       "Monthly report",
//     ],
//     cta: "Book Free Consultation",
//     ctaLink: "/contact",
//     highlighted: false,
//     color: "blue",
//     stat: "Ideal for Launch",
//   },
//   {
//     name: "Growth Plan",
//     icon: TrendingUp,
//     tagline: "For businesses ready to scale",
//     price: "50,000",
//     secondMonthPrice: "35,000",
//     features: [
//       "Includes everything in Startup Plan",
//       "E-commerce product listing & optimization",
//       "Paid ads setup",
//       "Advanced growth strategy",
//       "Funnel & retargeting",
//     ],
//     cta: "Get Started Now",
//     ctaLink: "/contact",
//     highlighted: true,
//     badge: "MOST POPULAR",
//     color: "yellow",
//     stat: "200% Avg Growth",
//   },
// ];

// const trustStats = [
//   { value: "150+", label: "Brands Scaled", icon: Briefcase, change: "+42%" },
//   { value: "200%", label: "Avg. Growth", icon: TrendingUp, change: "+15%" },
//   { value: "98%", label: "Client Retention", icon: Heart, change: "Top 1%" },
//   { value: "4.95", label: "Client Rating", icon: Award, change: "5★" },
// ];

// export default function PricingSection() {
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//   return (
//     <section className="relative py-24 lg:py-32 bg-white overflow-hidden" id="pricing">
//       {/* Background Effects */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/30 to-transparent" />
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-100/30 rounded-full blur-3xl" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50/50 rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-6 max-w-7xl relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6"
//           >
//             <Sparkles className="w-4 h-4 text-blue-600" />
//             <span className="text-blue-700 font-semibold text-sm tracking-wide">
//               SIMPLE, TRANSPARENT PRICING
//             </span>
//           </motion.div>

//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-[1.2] tracking-tight">
//             Choose your
//             <span className="block text-blue-600 mt-2">growth path.</span>
//           </h2>

//           <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-4">
//             No hidden fees. Start with what you need and scale as you grow. All
//             plans include dedicated support.
//           </p>
//         </motion.div>

//         {/* Pricing Cards */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
//           {plans.map((plan, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1, duration: 0.6 }}
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//               className="group relative"
//             >
//               <div
//                 className={`relative rounded-2xl overflow-hidden bg-white border shadow-sm hover:shadow-2xl transition-all duration-500 ${
//                   plan.highlighted
//                     ? "border-yellow-300 shadow-xl"
//                     : "border-gray-200"
//                 }`}
//               >
//                 {/* Animated Background Gradient */}
//                 <div className={`absolute inset-0 bg-gradient-to-r ${
//                   plan.color === 'blue'
//                     ? 'from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5'
//                     : 'from-yellow-500/0 via-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5'
//                 } group-hover:via-transparent group-hover:to-transparent transition-all duration-500`} />

//                 {/* Badge for Growth Plan */}
//                 {plan.badge && (
//                   <div className="absolute top-4 right-4 z-20">
//                     <motion.div
//                       className="relative"
//                       whileHover={{ scale: 1.05 }}
//                     >
//                       <div className="relative bg-yellow-500 text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">
//                         <Zap className="w-3 h-3" />
//                         {plan.badge}
//                       </div>
//                     </motion.div>
//                   </div>
//                 )}

//                 <div className="p-8">
//                   {/* Header with Icon */}
//                   <div className="flex items-center gap-4 mb-6">
//                     <motion.div
//                       className={`p-3 rounded-xl transition-all duration-300 ${
//                         hoveredCard === index
//                           ? plan.color === 'blue' ? 'bg-blue-600 shadow-lg shadow-blue-600/25' : 'bg-yellow-500 shadow-lg shadow-yellow-500/25'
//                           : plan.highlighted ? 'bg-yellow-100' : 'bg-blue-100'
//                       }`}
//                       animate={{
//                         scale: hoveredCard === index ? 1.1 : 1,
//                         rotate: hoveredCard === index ? [0, -5, 5, 0] : 0,
//                       }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <plan.icon
//                         size={24}
//                         className={
//                           hoveredCard === index ? 'text-white' : plan.color === 'blue' ? 'text-blue-600' : 'text-yellow-600'
//                         }
//                       />
//                     </motion.div>
//                     <div>
//                       <h3 className={`text-2xl font-bold text-black transition-colors duration-300 ${
//                         hoveredCard === index ? (plan.color === 'blue' ? 'text-blue-600' : 'text-yellow-600') : ''
//                       }`}>
//                         {plan.name}
//                       </h3>
//                       <p className="text-sm text-gray-500 mt-0.5">
//                         {plan.tagline}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Pricing */}
//                   <div className="mb-6 pb-6 border-b border-gray-100">
//                     <div className="flex items-baseline gap-2">
//                       <span className="text-5xl font-black text-black">
//                         ₹{plan.price}
//                       </span>
//                       <span className="text-gray-500 text-sm">/ 1st Month</span>
//                     </div>
//                     <div className="flex items-center gap-2 mt-2">
//                       <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
//                       <motion.span
//                         className={`text-sm font-medium px-3 py-1 rounded-full ${
//                           plan.highlighted
//                             ? "bg-yellow-100 text-yellow-700"
//                             : "bg-blue-100 text-blue-700"
//                         }`}
//                         animate={{
//                           scale: hoveredCard === index ? 1.05 : 1,
//                         }}
//                       >
//                         Then ₹{plan.secondMonthPrice}/month
//                       </motion.span>
//                       <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
//                     </div>
//                   </div>

//                   {/* Features List */}
//                   <ul className="space-y-3.5 mb-8">
//                     {plan.features.map((feature, idx) => (
//                       <motion.li
//                         key={idx}
//                         initial={{ opacity: 0, x: -10 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.1 + idx * 0.05 }}
//                         className="flex items-start gap-3 group/feature"
//                       >
//                         <motion.div
//                           className={`flex-shrink-0 w-5 h-5 rounded-lg flex items-center justify-center transition-all duration-300 ${
//                             hoveredCard === index
//                               ? plan.color === 'blue' ? 'bg-blue-600' : 'bg-yellow-500'
//                               : plan.highlighted ? 'bg-yellow-100' : 'bg-blue-100'
//                           }`}
//                           animate={{
//                             scale: hoveredCard === index ? 1.1 : 1,
//                           }}
//                         >
//                           <Check
//                             size={12}
//                             className={
//                               hoveredCard === index ? 'text-white' : plan.color === 'blue' ? 'text-blue-600' : 'text-yellow-600'
//                             }
//                             strokeWidth={3}
//                           />
//                         </motion.div>
//                         <span className={`text-sm transition-colors duration-300 ${
//                           hoveredCard === index ? 'text-gray-900' : 'text-gray-600'
//                         }`}>
//                           {feature}
//                         </span>
//                       </motion.li>
//                     ))}
//                   </ul>

//                   {/* Stat Badge */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{
//                       opacity: hoveredCard === index ? 1 : 0,
//                       y: hoveredCard === index ? 0 : 10,
//                     }}
//                     transition={{ duration: 0.2 }}
//                     className="mb-4"
//                   >
//                     <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full ${
//                       plan.color === 'blue' ? 'bg-blue-50' : 'bg-yellow-50'
//                     }`}>
//                       <TrendingUp className={`w-3 h-3 ${plan.color === 'blue' ? 'text-blue-600' : 'text-yellow-600'}`} />
//                       <span className={`text-xs font-semibold ${plan.color === 'blue' ? 'text-blue-600' : 'text-yellow-600'}`}>
//                         {plan.stat}
//                       </span>
//                     </div>
//                   </motion.div>

//                   {/* CTA Button */}
//                   <motion.div
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <Link
//                       href={plan.ctaLink}
//                       className={`group/btn relative w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold transition-all duration-300 overflow-hidden ${
//                         plan.highlighted
//                           ? "bg-yellow-500 text-black hover:bg-yellow-600 hover:shadow-xl hover:shadow-yellow-500/25"
//                           : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25"
//                       }`}
//                     >
//                       <span>{plan.cta}</span>
//                       <ArrowRight
//                         size={18}
//                         className="group-hover/btn:translate-x-1 transition-transform"
//                       />
//                     </Link>
//                   </motion.div>

//                   {/* Fine print */}
//                   <p className="text-xs text-center text-gray-400 mt-4">
//                     No long-term contracts • Cancel anytime
//                   </p>
//                 </div>

//                 {/* Bottom Accent Line */}
//                 <div className={`absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
//                   plan.color === 'blue' ? 'bg-blue-600' : 'bg-yellow-500'
//                 }`} />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Guarantee Banner */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//           className="mt-16 text-center"
//         >
//           <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-full border border-gray-200">
//             <Shield className="w-5 h-5 text-blue-600" />
//             <span className="text-sm font-medium text-gray-700">
//               30-day money-back guarantee
//             </span>
//             <div className="w-px h-4 bg-gray-300" />
//             <Clock className="w-5 h-5 text-yellow-600" />
//             <span className="text-sm font-medium text-gray-700">
//               24/7 Priority Support
//             </span>
//           </div>
//         </motion.div>

//         {/* CTA Banner */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="mt-20"
//         >
//           <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 md:p-12 text-center shadow-2xl">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl" />
//             <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

//             <div className="relative z-10">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20 mb-6"
//               >
//                 <Rocket className="w-4 h-4 text-yellow-400" />
//                 <span className="text-white/90 text-sm font-medium">
//                   Not sure which plan fits?
//                 </span>
//               </motion.div>

//               <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
//                 Let's talk about your goals
//               </h3>
//               <p className="text-blue-100 max-w-xl mx-auto mb-8">
//                 Book a free consultation and we'll help you choose the right
//                 plan for your business.
//               </p>

//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Link
//                   href="/contact"
//                   className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
//                 >
//                   Book Free Consultation
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Rocket,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Shield,
  Star,
  Zap,
  Briefcase,
  Crown,
  Heart,
  Clock,
  Award,
} from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Startup Building Plan",
    icon: Rocket,
    tagline: "Best for new startups & founders",
    features: [
      "Website + Domain + Hosting",
      "Brand setup",
      "Social media setup & optimization",
      "Content (graphics, reels, articles)",
      "SEO basics",
      "Monthly report",
    ],
    cta: "Book Free Consultation",
    ctaLink: "/contact",
    highlighted: false,
    color: "blue",
    stat: "Ideal for Launch",
  },
  {
    name: "Growth Plan",
    icon: TrendingUp,
    tagline: "For businesses ready to scale",
    features: [
      "Includes everything in Startup Plan",
      "E-commerce product listing & optimization",
      "Paid ads setup",
      "Advanced growth strategy",
      "Funnel & retargeting",
    ],
    cta: "Get Started Now",
    ctaLink: "/contact",
    highlighted: true,
    badge: "MOST POPULAR",
    color: "yellow",
    stat: "200% Avg Growth",
  },
];

const trustStats = [
  { value: "150+", label: "Brands Scaled", icon: Briefcase, change: "+42%" },
  { value: "200%", label: "Avg. Growth", icon: TrendingUp, change: "+15%" },
  { value: "98%", label: "Client Retention", icon: Heart, change: "Top 1%" },
  { value: "4.95", label: "Client Rating", icon: Award, change: "5★" },
];

export default function PricingSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      id="pricing"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/30 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm tracking-wide">
              SIMPLE, TRANSPARENT PRICING
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-[1.2] tracking-tight">
            Choose your
            <span className="block text-blue-600 mt-2">growth path.</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-4">
            No hidden fees. Start with what you need and scale as you grow. All
            plans include dedicated support.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative h-full"
            >
              <div
                className={`relative rounded-2xl overflow-hidden bg-white border shadow-sm hover:shadow-2xl transition-all duration-500 h-full ${
                  // SAHI (space add karo h-full ke baad):
                  plan.highlighted
                    ? "border-yellow-300 shadow-xl"
                    : "border-gray-200"
                }`}
              >
                {/* Animated Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${
                    plan.color === "blue"
                      ? "from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5"
                      : "from-yellow-500/0 via-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5"
                  } group-hover:via-transparent group-hover:to-transparent transition-all duration-500`}
                />

                {/* Badge for Growth Plan */}
                {plan.badge && (
                  <div className="absolute top-4 right-4 z-20">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="relative bg-yellow-500 text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        {plan.badge}
                      </div>
                    </motion.div>
                  </div>
                )}

                <div className="p-8 flex flex-col h-full">
                  {/* Header with Icon */}
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                    <motion.div
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        hoveredCard === index
                          ? plan.color === "blue"
                            ? "bg-blue-600 shadow-lg shadow-blue-600/25"
                            : "bg-yellow-500 shadow-lg shadow-yellow-500/25"
                          : plan.highlighted
                            ? "bg-yellow-100"
                            : "bg-blue-100"
                      }`}
                      animate={{
                        scale: hoveredCard === index ? 1.1 : 1,
                        rotate: hoveredCard === index ? [0, -5, 5, 0] : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <plan.icon
                        size={24}
                        className={
                          hoveredCard === index
                            ? "text-white"
                            : plan.color === "blue"
                              ? "text-blue-600"
                              : "text-yellow-600"
                        }
                      />
                    </motion.div>
                    <div>
                      <h3
                        className={`text-2xl font-bold text-black transition-colors duration-300 ${
                          hoveredCard === index
                            ? plan.color === "blue"
                              ? "text-blue-600"
                              : "text-yellow-600"
                            : ""
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {plan.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        className="flex items-start gap-3 group/feature"
                      >
                        <motion.div
                          className={`flex-shrink-0 w-5 h-5 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            hoveredCard === index
                              ? plan.color === "blue"
                                ? "bg-blue-600"
                                : "bg-yellow-500"
                              : plan.highlighted
                                ? "bg-yellow-100"
                                : "bg-blue-100"
                          }`}
                          animate={{
                            scale: hoveredCard === index ? 1.1 : 1,
                          }}
                        >
                          <Check
                            size={12}
                            className={
                              hoveredCard === index
                                ? "text-white"
                                : plan.color === "blue"
                                  ? "text-blue-600"
                                  : "text-yellow-600"
                            }
                            strokeWidth={3}
                          />
                        </motion.div>
                        <span
                          className={`text-sm transition-colors duration-300 ${
                            hoveredCard === index
                              ? "text-gray-900"
                              : "text-gray-600"
                          }`}
                        >
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Stat Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredCard === index ? 1 : 0,
                      y: hoveredCard === index ? 0 : 10,
                    }}
                    transition={{ duration: 0.2 }}
                    className="mb-4"
                  >
                    <div
                      className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full ${
                        plan.color === "blue" ? "bg-blue-50" : "bg-yellow-50"
                      }`}
                    >
                      <TrendingUp
                        className={`w-3 h-3 ${plan.color === "blue" ? "text-blue-600" : "text-yellow-600"}`}
                      />
                      <span
                        className={`text-xs font-semibold ${plan.color === "blue" ? "text-blue-600" : "text-yellow-600"}`}
                      >
                        {plan.stat}
                      </span>
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={plan.ctaLink}
                      className={`group/btn relative w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold transition-all duration-300 overflow-hidden ${
                        plan.highlighted
                          ? "bg-yellow-500 text-black hover:bg-yellow-600 hover:shadow-xl hover:shadow-yellow-500/25"
                          : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25"
                      }`}
                    >
                      <span>{plan.cta}</span>
                      <ArrowRight
                        size={18}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </Link>
                  </motion.div>

                  {/* Fine print */}
                  <p className="text-xs text-center text-gray-400 mt-4">
                    No long-term contracts • Cancel anytime
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                    plan.color === "blue" ? "bg-blue-600" : "bg-yellow-500"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-full border border-gray-200">
            <Shield className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">
              30-day money-back guarantee
            </span>
            <div className="w-px h-4 bg-gray-300" />
            <Clock className="w-5 h-5 text-yellow-600" />
            <span className="text-sm font-medium text-gray-700">
              24/7 Priority Support
            </span>
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 md:p-12 text-center shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full border border-white/20 mb-6"
              >
                <Rocket className="w-4 h-4 text-yellow-400" />
                <span className="text-white/90 text-sm font-medium">
                  Not sure which plan fits?
                </span>
              </motion.div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Let's talk about your goals
              </h3>
              <p className="text-blue-100 max-w-xl mx-auto mb-8">
                Book a free consultation and we'll help you choose the right
                plan for your business.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
                >
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
