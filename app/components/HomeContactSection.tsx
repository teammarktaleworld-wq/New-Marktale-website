"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Sparkles,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Users,
  Zap,
} from "lucide-react";
import { services } from "@/lib/servicesData";

export default function HomeContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Marketing as a Service (MaaS)",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(
          data.error || "Something went wrong. Please try again.",
        );
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "Marketing as a Service (MaaS)",
        message: "",
      });
    } catch (err: any) {
      setSubmitStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      text: "+91 85878 70707",
      href: "tel:+9185878 70707",
      color: "blue",
    },
    {
      icon: Mail,
      text: "hello@marktaleworld.com",
      href: "mailto:hello@marktaleworld.com",
      color: "yellow",
    },
    {
      icon: MapPin,
      text: "Dwarka, New Delhi Bharat",
      href: "#",
      color: "black",
    },
  ];

  const trustStats = [
    { value: "24/7", label: "Support", icon: Clock, color: "blue" },
    { value: "30min", label: "Response Time", icon: Zap, color: "yellow" },
    { value: "100%", label: "Satisfaction", icon: Users, color: "black" },
  ];

  return (
    <section
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      id="contact"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/30 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm tracking-wide uppercase">
              GET IN TOUCH
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-[1.2] tracking-tight">
            Ready to{" "}
            <span className="text-blue-600 block mt-2">
              Start Your Project?
            </span>
          </h2>

          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Whether you need a full digital transformation or a specific
            marketing campaign, our team is ready to help you scale.
          </p>
        </motion.div>

        {/* Trust Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12"
        >
          {trustStats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              className="text-center p-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div
                className={`w-8 h-8 rounded-lg ${
                  stat.color === "blue"
                    ? "bg-blue-100"
                    : stat.color === "yellow"
                      ? "bg-yellow-100"
                      : "bg-gray-100"
                } flex items-center justify-center mx-auto mb-2`}
              >
                <stat.icon
                  className={`w-4 h-4 ${
                    stat.color === "blue"
                      ? "text-blue-600"
                      : stat.color === "yellow"
                        ? "text-yellow-600"
                        : "text-black"
                  }`}
                />
              </div>
              <p className="text-lg font-bold text-black">{stat.value}</p>
              <p className="text-[10px] text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1 space-y-4"
          >
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.href}
                whileHover={{ x: 5, scale: 1.02 }}
                className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group cursor-pointer ${
                  info.color === "blue"
                    ? "bg-blue-50 border-blue-200 hover:bg-blue-100"
                    : info.color === "yellow"
                      ? "bg-yellow-50 border-yellow-200 hover:bg-yellow-100"
                      : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl ${
                    info.color === "blue"
                      ? "bg-blue-600"
                      : info.color === "yellow"
                        ? "bg-yellow-500"
                        : "bg-black"
                  } flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <info.icon className="w-4 h-4 text-white" />
                </div>
                <span
                  className={`font-medium ${
                    info.color === "blue"
                      ? "text-blue-700"
                      : info.color === "yellow"
                        ? "text-yellow-700"
                        : "text-gray-700"
                  }`}
                >
                  {info.text}
                </span>
              </motion.a>
            ))}

            {/* Response Time Badge */}
            <motion.div
              whileHover={{ y: -3 }}
              className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl text-center border border-gray-100"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm font-semibold text-black">
                  Response within 24 hours
                </span>
              </div>
              <p className="text-xs text-gray-500">
                We typically respond within a few hours
              </p>
            </motion.div>

            {/* Trust Indicator */}
            <div className="flex items-center justify-center gap-2 pt-2">
              <div className="flex -space-x-2">
                {["AJ", "KS", "VR"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[8px] font-bold text-gray-700"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <span className="text-[10px] text-gray-400">
                150+ happy clients
              </span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 p-6 md:p-8">
              {/* Success State */}
              {submitStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 text-sm max-w-xs">
                    Thanks for reaching out. We've saved your enquiry and sent
                    you a confirmation email. Our team will get back to you
                    within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="mt-2 text-blue-600 text-sm font-semibold underline underline-offset-2"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name and Phone - Side by Side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 text-base ${
                          focusedField === "name"
                            ? "border-blue-600 bg-white shadow-sm"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 text-base ${
                          focusedField === "phone"
                            ? "border-blue-600 bg-white shadow-sm"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        placeholder="+91..."
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 text-base ${
                        focusedField === "email"
                          ? "border-blue-600 bg-white shadow-sm"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 transition-colors text-gray-700 text-base cursor-pointer hover:border-gray-300"
                    >
                      <option>Marketing as a Service (MaaS)</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 resize-none ${
                        focusedField === "message"
                          ? "border-blue-600 bg-white shadow-sm"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Error Message */}
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm"
                    >
                      <span className="font-semibold shrink-0">Error:</span>
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-center text-gray-400 mt-4">
                    By submitting, you agree to our privacy policy. We'll never
                    share your details.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 md:p-8 text-center shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <MessageCircle className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Prefer WhatsApp? Chat with us directly
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                Click the button below to start a conversation
              </p>
              <motion.a
                href="https://wa.me/918587870707"
                target="_blank"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-xl transition-all text-sm"
              >
                Chat on WhatsApp
                <MessageCircle className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
