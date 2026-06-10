"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function BookAppointmentSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    message: "",
  });

  const benefits = [
    {
      icon: "🎯",
      title: "Your growth roadmap",
      description: "Get a clear path to scale your business",
    },
    {
      icon: "💡",
      title: "Marketing & tech needs",
      description: "Identify the right tools and strategies",
    },
    {
      icon: "💰",
      title: "Budget optimization",
      description: "Maximize ROI with smart spending",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate that the selected date is not in the past
    if (formData.preferredDate) {
      const selectedDate = new Date(formData.preferredDate);
      const currentDate = new Date();
      currentDate.setSeconds(0, 0); // Remove seconds and milliseconds for accurate comparison

      if (selectedDate < currentDate) {
        alert("Please select a future date and time for your appointment.");
        return;
      }
    }

    // Create a message with all the form details
    const message = `Hi! I would like to book a strategy call.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0APreferred Date & Time: ${formData.preferredDate ? new Date(formData.preferredDate).toLocaleString() : "Not specified"}%0AMessage: ${formData.message || "No additional message"}`;

    // Redirect to WhatsApp with the form details
    window.open(`https://wa.me/918527664228?text=${message}`, "_blank");
  };

  // Get the current date in the format required by datetime-local input (YYYY-MM-DDTHH:mm)
  const minDateTime = new Date();
  minDateTime.setMinutes(minDateTime.getMinutes() + 1); // Allow booking from the next minute
  const minDateTimeString = minDateTime.toISOString().slice(0, 16);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-kestone-black mb-4">
            Book a Free 30-Minute Strategy Call
          </h2>
          <p className="text-gray-600 text-lg">
            Get clarity on your business growth with our expert team
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-heading font-bold text-kestone-black mb-6">
              What You'll Get:
            </h3>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-4xl">{benefit.icon}</span>
                <div>
                  <h4 className="text-xl font-bold text-kestone-black mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}

            <div className="bg-kestone-red text-white p-6 rounded-lg">
              <p className="text-lg font-medium">
                💬 Prefer instant chat? Connect with us on WhatsApp!
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kestone-red focus:border-transparent outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kestone-red focus:border-transparent outline-none transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kestone-red focus:border-transparent outline-none transition"
                  placeholder="+91 (858) 787-0707"
                />
              </div>

              <div>
                <label
                  htmlFor="preferredDate"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Preferred Date & Time
                </label>
                <input
                  type="datetime-local"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  min={minDateTimeString} // Prevent past dates
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kestone-red focus:border-transparent outline-none transition"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Select a future date and time for your appointment
                </p>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kestone-red focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your business goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-kestone-red text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Send Details on WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
