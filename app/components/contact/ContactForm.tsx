





'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { services } from '@/lib/servicesData';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Marketing as a Service (MaaS)',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone:"string",
        service: 'Marketing as a Service (MaaS)',
        message: '',
      });
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* ── Contact Info ─────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-kestone-red font-bold tracking-widest uppercase text-sm mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl font-heading font-bold text-kestone-black mb-6">
              Ready to Start <br /> Your Project?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-12 max-w-lg font-body">
              Whether you need a full digital transformation or a specific marketing campaign,
              our team is ready to help you scale.
            </p>

            <div className="space-y-8">
              {/* <div className="flex items-start">
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center text-kestone-black mr-6 shrink-0">
                
                </div>

              </div> */}

              <div className="flex items-start">
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center text-kestone-black mr-6 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-kestone-black mb-1">Email Us</h4>
                  <a href="mailto:teammarktaleworld@gmail.com" className="text-gray-600 hover:text-kestone-red transition-colors">
                    teammarktaleworld@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center text-kestone-black mr-6 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-kestone-black mb-1">Visit Us</h4>
                  <p className="text-gray-600 mb-4">
                    Plot no. 141, Sec. 14, Dwarka,<br />
                    New Delhi – 110078 Bharat
                  </p>
                  <div className="w-full h-48 rounded-lg overflow-hidden border border-gray-200">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                      src="https://maps.google.com/maps?q=Plot%20no.%20141,%20Sec.%2014,%20Dwarka,%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      title="MarkTale Location"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="https://wa.me/9185878 70707"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-[#25D366] text-white font-bold rounded-full hover:bg-green-600 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* ── Form ─────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-50 p-6 md:p-12 rounded-3xl border border-gray-100"
          >
            {/* Success state */}
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center py-16 gap-4"
              >
                <CheckCircle size={56} className="text-green-500" />
                <h3 className="text-2xl font-bold text-kestone-black">Message Sent!</h3>
                <p className="text-gray-500 max-w-sm">
                  Thanks for reaching out. We've received your enquiry and will respond within 24 hours.
                  A confirmation email is on its way to you.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2.5 bg-kestone-black text-white rounded-lg text-sm font-semibold hover:bg-kestone-red transition-colors"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-kestone-black transition-colors text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-kestone-black transition-colors text-base"
                      placeholder="+91..."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-kestone-black transition-colors text-base"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-kestone-black transition-colors text-gray-600 text-base"
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

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-kestone-black transition-colors"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Error banner */}
                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    <AlertCircle size={18} className="shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-kestone-black text-white font-bold rounded-lg hover:bg-kestone-red transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}