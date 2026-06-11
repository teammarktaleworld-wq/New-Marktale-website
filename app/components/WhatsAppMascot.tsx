// 'use client';

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X } from 'lucide-react';

// export default function WhatsAppMascot() {
//     const [isVisible, setIsVisible] = useState(false);
//     const [isDismissed, setIsDismissed] = useState(false);

//     useEffect(() => {
//         // Show mascot after 3 seconds
//         const timer = setTimeout(() => {
//             if (!isDismissed) {
//                 setIsVisible(true);
//             }
//         }, 3000);

//         return () => clearTimeout(timer);
//     }, [isDismissed]);

//     const handleDismiss = () => {
//         setIsVisible(false);
//         setIsDismissed(true);
//     };

//     const handleClick = () => {
//         window.open('https://wa.me/918587870707?text=Hi! I need help with my marketing needs.', '_blank');
//     };

//     return (
//         <AnimatePresence>
//             {isVisible && !isDismissed && (
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0, x: 100 }}
//                     animate={{ opacity: 1, scale: 1, x: 0 }}
//                     exit={{ opacity: 0, scale: 0, x: 100 }}
//                     transition={{ type: 'spring', stiffness: 260, damping: 20 }}
//                     className="fixed bottom-32 right-6 z-40 cursor-pointer"
//                     onClick={handleClick}
//                 >
//                     {/* Speech Bubble */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.3 }}
//                         className="absolute bottom-full right-0 mb-4 bg-white rounded-lg shadow-xl p-4 max-w-[200px] group-hover:shadow-2xl transition-shadow"
//                     >
//                         <button
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 handleDismiss();
//                             }}
//                             className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors"
//                         >
//                             <X className="w-3 h-3 text-gray-600" />
//                         </button>
//                         <p className="text-sm font-medium text-kestone-black">
//                             👋 Need help? Click here to chat with us!
//                         </p>
//                         {/* Speech bubble arrow */}
//                         <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45" />
//                     </motion.div>

//                     {/* Mascot Character */}
//                     <motion.div
//                         animate={{
//                             y: [0, -10, 0],
//                         }}
//                         transition={{
//                             duration: 2,
//                             repeat: Infinity,
//                             ease: 'easeInOut'
//                         }}
//                         className="relative"
//                     >
//                         <motion.img
//                             src="/mascot.png"
//                             alt="Help Mascot"
//                             className="w-32 h-32 object-contain drop-shadow-2xl"
//                             animate={{
//                                 rotate: [-5, 5, -5],
//                             }}
//                             transition={{
//                                 duration: 3,
//                                 repeat: Infinity,
//                                 ease: 'easeInOut'
//                             }}
//                         />

//                         {/* Glow effect */}
//                         <motion.div
//                             className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-30"
//                             animate={{
//                                 scale: [1, 1.2, 1],
//                                 opacity: [0.3, 0.5, 0.3],
//                             }}
//                             transition={{
//                                 duration: 2,
//                                 repeat: Infinity,
//                                 ease: 'easeInOut'
//                             }}
//                         />
//                     </motion.div>

//                     {/* Sparkle effects */}
//                     <motion.div
//                         className="absolute top-0 right-0 text-2xl"
//                         animate={{
//                             scale: [0, 1, 0],
//                             rotate: [0, 180, 360],
//                         }}
//                         transition={{
//                             duration: 2,
//                             repeat: Infinity,
//                             ease: 'easeInOut',
//                             delay: 0.5
//                         }}
//                     >
//                         ✨
//                     </motion.div>
//                     <motion.div
//                         className="absolute bottom-0 left-0 text-xl"
//                         animate={{
//                             scale: [0, 1, 0],
//                             rotate: [0, -180, -360],
//                         }}
//                         transition={{
//                             duration: 2,
//                             repeat: Infinity,
//                             ease: 'easeInOut',
//                             delay: 1
//                         }}
//                     >
//                         ⭐
//                     </motion.div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }


// priya 
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bot, Sparkles, PhoneCall } from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

interface Option {
  label: string;
  value: string;
  color?: string;
}

type Step = "welcome" | "web_app" | "marketing" | "pricing" | "form" | "completed";

export default function WhatsAppMascot() {
  const [isMascotVisible, setIsMascotVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);
  const [options, setOptions] = useState<Option[]>([]);
  const [currentStep, setCurrentStep] = useState<Step>("welcome");
  const [selectedInterest, setSelectedInterest] = useState("General");

  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, options, isTyping]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) setIsMascotVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isDismissed]);

  const getCurrentTime = () =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const botReply = (text: string, newOptions: Option[], nextStep?: Step, delay = 700) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: `b-${Date.now()}`, sender: "bot", text, timestamp: getCurrentTime() },
      ]);
      setOptions(newOptions);
      if (nextStep) setCurrentStep(nextStep);
    }, delay);
  };

  const startChat = () => {
    setIsChatOpen(true);
    if (messages.length === 0) {
      setMessages([
        { id: "m1", sender: "bot", text: "👋 Hi! Welcome to MarkTale – Powered by AI! 🚀", timestamp: getCurrentTime() },
        { id: "m2", sender: "bot", text: "I'm Marky, your growth assistant. How can I help you scale today?", timestamp: getCurrentTime() },
      ]);
      setOptions([
        { label: "🌐 Website / App", value: "web_app", color: "blue" },
        { label: "📣 Marketing Help", value: "marketing", color: "purple" },
        { label: "💰 See Pricing", value: "pricing", color: "green" },
        { label: "🏆 Talk to Team", value: "lead_trigger", color: "orange" },
      ]);
      setCurrentStep("welcome");
    }
  };

  const handleOptionClick = (option: Option) => {
    setMessages((prev) => [
      ...prev,
      { id: `u-${Date.now()}`, sender: "user", text: option.label, timestamp: getCurrentTime() },
    ]);
    setOptions([]);

    switch (option.value) {
      case "web_app":
        setSelectedInterest("Website / App");
        botReply(
          "Great choice! 🖥️ We build premium websites & apps starting at ₹15,000. What do you need?",
          [
            { label: "🏢 Business Website", value: "lead_trigger", color: "blue" },
            { label: "🛒 E-commerce Store", value: "lead_trigger", color: "purple" },
            { label: "📱 Custom App", value: "lead_trigger", color: "green" },
          ],
          "web_app"
        );
        break;

      case "marketing":
        setSelectedInterest("Marketing");
        botReply(
          "Let's boost your reach! 📈 Which service interests you?",
          [
            { label: "🔍 SEO & Google Ads", value: "lead_trigger", color: "blue" },
            { label: "📲 Social Media Growth", value: "lead_trigger", color: "purple" },
            { label: "🎯 Lead Gen Ads", value: "lead_trigger", color: "green" },
          ],
          "marketing"
        );
        break;

      case "pricing":
        setSelectedInterest("Pricing Enquiry");
        botReply(
          "💰 Our plans:\n\n🚀 Startup Plan — ₹15,000/mo\n📈 Growth Plan — Custom pricing\n\nWant a free consultation?",
          [
            { label: "✅ Yes, Book Free Call", value: "lead_trigger", color: "green" },
            { label: "🔄 Back to Menu", value: "reset", color: "blue" },
          ],
          "pricing"
        );
        break;

      case "lead_trigger":
        setCurrentStep("form");
        setOptions([]);
        break;

   case "reset":
  setMessages([
    { id: "m1", sender: "bot", text: "👋 Hi! Welcome to MarkTale – Powered by AI! 🚀", timestamp: getCurrentTime() },
    { id: "m2", sender: "bot", text: "I'm Marky, your growth assistant. How can I help you scale today?", timestamp: getCurrentTime() },
  ]);
  setOptions([
    { label: "🌐 Website / App", value: "web_app", color: "blue" },
    { label: "📣 Marketing Help", value: "marketing", color: "purple" },
    { label: "💰 See Pricing", value: "pricing", color: "green" },
    { label: "🏆 Talk to Team", value: "lead_trigger", color: "orange" },
  ]);
  setCurrentStep("welcome");
  break;
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          interest: selectedInterest,
          source: "Chatbot",
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setFormSubmitted(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: "b-final",
            sender: "bot",
            text: `Perfect, ${formData.name}! 🙏 Our consultant will call you within 30 mins on ${formData.phone}. 🚀`,
            timestamp: getCurrentTime(),
          },
        ]);
        setCurrentStep("completed");
      }, 400);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const colorMap: Record<string, string> = {
    blue: "border-blue-200 text-blue-700 hover:bg-blue-50",
    purple: "border-purple-200 text-purple-700 hover:bg-purple-50",
    green: "border-green-200 text-green-700 hover:bg-green-50",
    orange: "border-orange-200 text-orange-700 hover:bg-orange-50",
  };

  return (
    <div className="fixed bottom-28 right-5 z-50 flex flex-col items-end gap-3">

      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="w-[320px] sm:w-[360px] h-[480px] rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-3 border border-slate-100"
            style={{ background: "#fff" }}
          >
            {/* Header */}
            <div
              className="p-3.5 flex items-center justify-between flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)" }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center ring-2 ring-white/30">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-white text-sm">Marky AI</h3>
                    <Sparkles className="w-3 h-3 text-yellow-300" />
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <p className="text-[10px] text-blue-100">Online & Active</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="hover:bg-white/20 p-1.5 rounded-lg transition-colors">
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-slate-50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2 text-[11px] shadow-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "text-white rounded-tr-none"
                        : "bg-white text-slate-800 rounded-tl-none border border-slate-100"
                    }`}
                    style={msg.sender === "user" ? { background: "linear-gradient(135deg, #2563eb, #7c3aed)" } : {}}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                    <span className="block text-[8px] mt-1 opacity-50 text-right">{msg.timestamp}</span>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex justify-start">
                    <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none px-4 py-2.5 shadow-sm flex gap-1 items-center">
                      {[0, 1, 2].map((i) => (
                        <motion.span key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Options */}
              {!isTyping && options.length > 0 && currentStep !== "form" && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-1.5 mt-1">
                  {options.map((opt, i) => (
                    <button key={i} onClick={() => handleOptionClick(opt)}
                      className={`w-full text-left bg-white border font-medium text-[11px] px-3.5 py-2 rounded-xl transition-all shadow-sm ${colorMap[opt.color || "blue"]}`}>
                      {opt.label}
                    </button>
                  ))}
                </motion.div>
              )}

              {/* Lead Form */}
              {currentStep === "form" && !formSubmitted && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-3.5 rounded-xl border border-blue-100 shadow-md space-y-2.5">
                  <div className="flex items-center gap-2 mb-1">
                    <PhoneCall className="w-4 h-4 text-blue-600" />
                    <p className="text-[11px] font-bold text-slate-800">Book Your Free Strategy Call</p>
                  </div>
                  <div className="space-y-2">
                    <input required type="text" placeholder="Your Name" value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-slate-200 rounded-lg p-2 text-[11px] outline-none focus:ring-1 focus:ring-blue-500" />
                    <input required type="tel" placeholder="Phone Number" value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-slate-200 rounded-lg p-2 text-[11px] outline-none focus:ring-1 focus:ring-blue-500" />
                    {submitError && <p className="text-[10px] text-red-500">{submitError}</p>}
                    <button onClick={handleFormSubmit} disabled={isSubmitting}
                      className="w-full text-white text-[11px] font-bold py-2 rounded-lg disabled:opacity-60"
                      style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}>
                      {isSubmitting ? "Sending..." : "🚀 Get Free Callback"}
                    </button>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Footer */}
            <div className="py-1.5 text-[8px] text-center font-bold tracking-[0.15em] uppercase flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)", color: "rgba(255,255,255,0.6)" }}>
              ✦ MarkTale AI Suite ✦
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mascot */}
      <AnimatePresence>
        {isMascotVisible && !isDismissed && !isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0, x: 100 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative cursor-pointer"
            onClick={startChat}
          >
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="absolute bottom-full right-0 mb-3 bg-white rounded-xl shadow-xl p-3 w-[170px]">
              <button onClick={(e) => { e.stopPropagation(); setIsDismissed(true); }}
                className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors">
                <X className="w-3 h-3 text-gray-600" />
              </button>
              <p className="text-xs font-semibold text-slate-800 leading-snug">👋 Need help? Chat with Marky!</p>
              <div className="absolute -bottom-2 right-7 w-4 h-4 bg-white transform rotate-45" />
            </motion.div>

            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="relative">
              <motion.img src="/mascot.png" alt="Marky Mascot" className="w-28 h-28 object-contain drop-shadow-2xl"
                animate={{ rotate: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
              <motion.div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-20"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
            </motion.div>
            <motion.div className="absolute top-0 right-0 text-xl" animate={{ scale: [0, 1, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>✨</motion.div>
            <motion.div className="absolute bottom-0 left-0 text-lg" animate={{ scale: [0, 1, 0], rotate: [0, -180, -360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}>⭐</motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}