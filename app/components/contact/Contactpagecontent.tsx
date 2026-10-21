// 'use client';

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   Send,
//   CheckCircle,
//   AlertCircle,
//   Loader2,
//   MapPin,
//   Mail,
//   Phone,
//   Plus,
//   Minus,
// } from 'lucide-react';

// // ── Env-driven contact details (with safe fallbacks so links never break) ───
// const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'marktaleworld@gmail.com';
// const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '+91-8587870707';
// const CONTACT_PHONE_RAW = process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW ?? '918587870707';
// const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '918587870707';
// const WHATSAPP_MESSAGE =
//   process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
//   'Hi! I would like to know more about your services.';

// type Status = 'idle' | 'loading' | 'success' | 'error';

// const SERVICE_CHIPS = [
//   'Website Development',
//   'App Development',
//   'SEO',
//   'Performance Marketing',
//   'Branding and Design',
//   'Lead Generation',
//   'Social Media',
//   'AI Automation',
// ];

// const faqs = [
//   {
//     q: 'How quickly do you respond to inquiries?',
//     a: 'We respond to all contact form submissions within 24 hours on business days. For urgent requirements, WhatsApp us directly — our team is available 9 AM to 9 PM IST, Monday to Saturday.',
//   },
//   {
//     q: 'How fast can you onboard a new client?',
//     a: 'We move at the speed of your business. Typically, we complete discovery and kick off execution within 5–7 business days.',
//   },
//   {
//     q: 'Do you work with pre-seed startups?',
//     a: "Yes — in fact, we specialize in them. Our 'MaaS for Startups' package gives early-stage founders a full marketing stack without the C-suite costs.",
//   },
//   {
//     q: 'What is your pricing model?',
//     a: 'We offer retainer-based models (MaaS) and project-based pricing. No hidden fees, no surprise billings. Engagements typically start from ₹25,000/month.',
//   },
//   {
//     q: 'Can you handle international projects?',
//     a: 'Absolutely. We serve clients across India, UAE, USA, UK, and Southeast Asia. Our team is fully remote-friendly with regular video call updates across time zones.',
//   },
// ];

// const stats = [
//   { num: '30+', label: 'Brands Successfully Built' },
//   { num: '10+', label: 'Years of Experience' },
//   { num: '500K+', label: 'Lives Impacted' },
//   { num: '24 Hrs', label: 'Guaranteed Response' },
// ];

// const cards = [
//   {
//     icon: '✉️',
//     label: 'Email',
//     value: CONTACT_EMAIL,
//     color: 'rgba(139,92,246,0.15)',
//     textColor: '#A78BFA',
//     delay: 0,
//     href: `mailto:${CONTACT_EMAIL}?subject=Project Inquiry - MarkTale World`,
//   },
//   {
//     icon: '📍',
//     label: 'Location',
//     value: 'New Delhi, India',
//     color: 'rgba(6,182,212,0.15)',
//     textColor: '#22D3EE',
//     delay: 0.08,
//     href: 'https://maps.google.com/?q=Dwarka+Sector+14+New+Delhi',
//   },
//   {
//     icon: '⚡',
//     label: 'Response Time',
//     value: 'Within 24 Hours',
//     color: 'rgba(251,191,36,0.15)',
//     textColor: '#FCD34D',
//     delay: 0.16,
//     href: null as string | null,
//   },
//   {
//     icon: '🕐',
//     label: 'Work Hours',
//     value: 'Mon-Sat, 10AM-7PM IST',
//     color: 'rgba(16,185,129,0.15)',
//     textColor: '#34D399',
//     delay: 0.24,
//     href: null as string | null,
//   },
// ];

// // ─────────────────────────────────────────────────────────────────────────
// // Hero
// // ─────────────────────────────────────────────────────────────────────────
// function ContactHero() {
//   const scrollToForm = () => {
//     document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section className="relative bg-black text-white pt-15 pb-20 px-6 overflow-hidden text-center">
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <motion.div
//           animate={{ scale: [1, 1.15, 1], y: [0, -20, 0] }}
//           transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
//           className="absolute w-[420px] h-[420px] rounded-full -top-28 -left-20"
//           style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)', filter: 'blur(60px)' }}
//         />
//         <motion.div
//           animate={{ scale: [1, 1.1, 1], y: [0, 20, 0] }}
//           transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
//           className="absolute w-[380px] h-[380px] rounded-full -top-16 -right-16"
//           style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.16) 0%, transparent 70%)', filter: 'blur(60px)' }}
//         />
//         <motion.div
//           animate={{ scale: [1, 1.2, 1] }}
//           transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
//           className="absolute w-[300px] h-[300px] rounded-full bottom-0 left-1/2 -translate-x-1/2"
//           style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }}
//         />
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 rounded-full px-5 py-1.5 mb-7 relative"
//       >
//         <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
//         <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">
//           MarkTale - Turning Your Tale into Sales        </span>
//       </motion.div>

//       <motion.h1
//         initial={{ opacity: 0, y: 24 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, delay: 0.1 }}
//         className="font-heading font-black text-5xl md:text-7xl leading-[1.08] tracking-tight mb-5 relative"
//       >
//         Let&apos;s Build Something
//         <span style={{
//           background: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 50%, #06B6D4 100%)',
//           WebkitBackgroundClip: 'text',
//           WebkitTextFillColor: 'transparent',
//         }}>
//           Extraordinary
//         </span>
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, delay: 0.2 }}
//         className="text-gray-400 text-lg max-w-xl mx-auto mb-9 leading-relaxed relative font-body"
//       >
//         Tell us about your project. Our growth experts will craft a custom
//         AI-powered strategy to scale your brand — fast.
//       </motion.p>

//       <motion.div
//         initial={{ opacity: 0, y: 16 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.3 }}
//         className="flex flex-wrap gap-3 justify-center mb-10 relative"
//       >
//         {[
//           { icon: '🚀', label: '24 Hrs Response' },
//           { icon: '🌍', label: 'Global Clients' },
//           { icon: '🤖', label: 'AI-Powered Solutions' },
//         ].map((p) => (
//           <span key={p.label} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300 font-medium">
//             <span>{p.icon}</span> {p.label}
//           </span>
//         ))}
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 16 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.4 }}
//         className="flex justify-center relative"
//       >
//         <button
//           onClick={scrollToForm}
//           className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(59,130,246,0.35)]"
//           style={{ background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)' }}
//         >
//           📅 Schedule Free Consultation
//         </button>
//       </motion.div>
//     </section>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────
// // Cards
// // ─────────────────────────────────────────────────────────────────────────
// function ContactCards() {
//   return (
//     <section className="bg-black pb-16 px-6">
//       <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
//         {cards.map((card) =>
//           card.href ? (
//             <motion.a
//               key={card.label}
//               href={card.href}
//               target={card.href.startsWith('http') ? '_blank' : undefined}
//               rel="noopener noreferrer"
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: card.delay }}
//               whileHover={{ y: -4 }}
//               className="block bg-[#0A0A0A] border border-white/[0.07] rounded-2xl p-4 text-center cursor-pointer transition-shadow hover:shadow-[0_16px_40px_rgba(59,130,246,0.1)] no-underline"
//             >
//               <div
//                 className="w-12 h-12 rounded-[13px] flex items-center justify-center text-xl mx-auto mb-3"
//                 style={{ background: card.color, color: card.textColor }}
//               >
//                 {card.icon}
//               </div>
//               <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">{card.label}</p>
//               <p className="text-xs font-semibold text-slate-300 leading-snug break-words">{card.value}</p>
//             </motion.a>
//           ) : (
//             <motion.div
//               key={card.label}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: card.delay }}
//               whileHover={{ y: -4 }}
//               className="block bg-[#0A0A0A] border border-white/[0.07] rounded-2xl p-6 text-center transition-shadow hover:shadow-[0_16px_40px_rgba(59,130,246,0.1)]"
//             >
//               <div
//                 className="w-12 h-12 rounded-[13px] flex items-center justify-center text-xl mx-auto mb-3"
//                 style={{ background: card.color, color: card.textColor }}
//               >
//                 {card.icon}
//               </div>
//               <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">{card.label}</p>
//               <p className="text-xs font-semibold text-slate-300 leading-snug break-words">{card.value}</p>
//             </motion.div>
//           )
//         )}
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────
// // Form (budget + timeline sections removed)
// // ─────────────────────────────────────────────────────────────────────────
// function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '', phone: '', email: '', company: '', message: '',
//   });
//   const [selectedChips, setSelectedChips] = useState<string[]>([]);
//   const [status, setStatus] = useState<Status>('idle');
//   const [errorMsg, setErrorMsg] = useState('');
//   const [submittedEmail, setSubmittedEmail] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const toggleChip = (chip: string) =>
//     setSelectedChips((prev) =>
//       prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
//     );

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus('loading');
//     setErrorMsg('');
//     try {
//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           ...formData,
//           services: selectedChips.join(', '),
//         }),
//       });
//       const data = await res.json();
//       if (!res.ok || !data.success) throw new Error(data.error || 'Something went wrong.');
//       setSubmittedEmail(formData.email);
//       setStatus('success');
//       setFormData({ name: '', phone: '', email: '', company: '', message: '' });
//       setSelectedChips([]);
//     } catch (err: unknown) {
//       setStatus('error');
//       setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
//     }
//   };

//   const inputClass = 'w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all';
//   const labelClass = 'block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wider';

//   return (
//     <section id="contact-form" className="bg-white py-20 px-6">
//       <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">

//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           className="lg:col-span-2 flex flex-col justify-start"
//         >
//           <span className="text-kestone-red font-bold tracking-widest uppercase text-xs mb-4 block">
//             Get In Touch
//           </span>
//           <h2 className="text-3xl md:text-4xl font-black text-black mb-4 leading-tight">
//             Start Your Growth Journey with MarkTale
//           </h2>
//           <p className="text-gray-500 leading-relaxed mb-10 font-body text-sm">
//             Fill in the details of your project. MarkTale (Marktale World Private Limited) will review your requirements and respond with a custom strategy within 24 hours.
//           </p>
//           {/* add a space  */}

//           <div className="space-y-6">
//             <div className="flex items-start gap-4">
//               <div className="w-11 h-11 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center shrink-0">
//                 <Mail size={20} className="text-gray-700" />
//               </div>
//               <div>
//                 <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Email</p>
//                 <a
//                   href={`mailto:${CONTACT_EMAIL}?subject=Project Inquiry - MarkTale World`}
//                   className="text-sm font-semibold text-kestone-black hover:text-kestone-red transition-colors"
//                 >
//                   {CONTACT_EMAIL}
//                 </a>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="w-11 h-11 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center shrink-0">
//                 <Phone size={20} className="text-gray-700" />
//               </div>
//               <div>
//                 <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Call Us</p>
//                 <a
//                   href={`tel:+${CONTACT_PHONE_RAW}`}
//                   className="text-sm font-semibold text-kestone-black hover:text-kestone-red transition-colors"
//                 >
//                   {CONTACT_PHONE}
//                 </a>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="w-11 h-11 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center shrink-0">
//                 <MapPin size={20} className="text-gray-700" />
//               </div>
//               <div>
//                 <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Visit Us</p>
//                 <p className="text-sm font-semibold text-kestone-black leading-relaxed">
//                   Head Office: Plot no. 141, Sector 14, Dwarka, New Delhi - 110078

//                   Branch Office: BB Ganj, Muzaffarpur, Bihar - 842001

//                   Branch Office: NRI Apartment, Sector 58, Seawoods, Navi Mumbai, Maharashtra 400706

//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="w-11 h-11 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center shrink-0">
//                 <span className="text-lg">🕐</span>
//               </div>
//               <div>
//                 <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Work Hours</p>
//                 <p className="text-sm font-semibold text-kestone-black">Mon-Sat, 10AM-7PM IST</p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-8">
//             <a
//               href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white font-bold rounded-full hover:bg-green-600 transition-colors"
//             >
//               Chat on WhatsApp
//             </a>
//           </div>

//           <div className="mt-8 rounded-2xl overflow-hidden border border-gray-100 h-44">
//             <iframe
//               width="100%"
//               height="100%"
//               frameBorder={0}
//               scrolling="no"
//               src="https://maps.google.com/maps?q=Plot%20no.%20141,%20Sec.%2014,%20Dwarka,%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
//               title="MarkTale Location"
//             />
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           className="lg:col-span-3 bg-neutral-50 border border-gray-100 rounded-3xl p-7 md:p-10"
//         >
//           {status === 'success' ? (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               className="flex flex-col items-center justify-center py-20 gap-5 text-center"
//             >
//               <CheckCircle size={60} className="text-green-500" />
//               <h3 className="text-2xl font-heading font-black text-kestone-black">Message Sent!</h3>
//               <p className="text-gray-500 max-w-sm text-sm leading-relaxed font-body">
//                 Thanks for reaching out! We will reply to{' '}
//                 <span className="font-bold text-kestone-black">{submittedEmail}</span>{' '}
//                 within 24 hours. Check your inbox.
//               </p>
//               <p className="text-xs text-gray-400">
//                 Did not get it? Check spam or email us at{' '}
//                 <a href={`mailto:${CONTACT_EMAIL}`} className="text-kestone-black font-semibold underline">
//                   {CONTACT_EMAIL}
//                 </a>
//               </p>
//               <button
//                 onClick={() => setStatus('idle')}
//                 className="mt-2 px-7 py-3 bg-kestone-black text-white rounded-xl text-sm font-bold hover:bg-kestone-red transition-colors"
//               >
//                 Send Another Message
//               </button>
//             </motion.div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 <div>
//                   <label className={labelClass}>Full Name</label>
//                   <input type="text" name="name" required value={formData.name}
//                     onChange={handleChange} className={inputClass} placeholder="Rahul Sharma" />
//                 </div>
//                 <div>
//                   <label className={labelClass}>Phone</label>
//                   <input type="tel" name="phone" required value={formData.phone}
//                     onChange={handleChange} className={inputClass} placeholder="+91 98765 00000" />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 <div>
//                   <label className={labelClass}>Email</label>
//                   <input type="email" name="email" required value={formData.email}
//                     onChange={handleChange} className={inputClass} placeholder="rahul@company.com" />
//                 </div>
//                 <div>
//                   <label className={labelClass}>Company or Brand</label>
//                   <input type="text" name="company" value={formData.company}
//                     onChange={handleChange} className={inputClass} placeholder="Your Brand Pvt Ltd" />
//                 </div>
//               </div>

//               <div>
//                 <label className={labelClass}>Services You Need</label>
//                 <div className="flex flex-wrap gap-2 mt-1">
//                   {SERVICE_CHIPS.map((chip) => (
//                     <button key={chip} type="button" onClick={() => toggleChip(chip)}
//                       className={"px-4 py-2 rounded-full border text-xs font-bold transition-all " + (selectedChips.includes(chip) ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white text-gray-500 hover:border-gray-400')}>
//                       {chip}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <label className={labelClass}>Tell Us About Your Project</label>
//                 <textarea name="message" rows={4} required value={formData.message}
//                   onChange={handleChange} className={inputClass}
//                   placeholder="Describe your goals, challenges, and what you want to achieve..." />
//               </div>

//               {status === 'error' && (
//                 <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
//                   <AlertCircle size={18} className="shrink-0" /> {errorMsg}
//                 </div>
//               )}

//               <button type="submit" disabled={status === 'loading'}
//                 className="w-full py-4 rounded-xl font-black text-white text-base flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
//                 style={{ background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)' }}>
//                 {status === 'loading' ? (
//                   <><Loader2 size={18} className="animate-spin" /> Sending...</>
//                 ) : (
//                   <>Send Message - Get Free Audit <Send size={16} /></>
//                 )}
//               </button>

//               <p className="text-center text-xs text-gray-400">
//                 Your information is 100% secure. No spam, ever.
//               </p>
//             </form>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────
// // Stats
// // ─────────────────────────────────────────────────────────────────────────
// function StatsSection() {
//   return (
//     <section className="relative py-20 px-6 text-center overflow-hidden"
//       style={{ background: 'linear-gradient(135deg, #0F2460 0%, #1E1060 50%, #0A1628 100%)' }}>

//       <div className="absolute inset-0 pointer-events-none"
//         style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(139,92,246,0.12) 0%, transparent 60%)' }} />

//       <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//         className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3 relative">
//         Our Track Record
//       </motion.p>

//       <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//         transition={{ delay: 0.08 }}
//         className="font-heading font-black text-3xl text-white mb-12 relative">
//         Numbers That Speak for Themselves
//       </motion.h2>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto relative">
//         {stats.map((s, i) => (
//           <motion.div key={s.label}
//             initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }} transition={{ delay: i * 0.1 }}
//             className="bg-white/5 border border-white/[0.08] rounded-2xl py-8 px-4">
//             <p className="text-4xl font-black mb-2"
//               style={{ background: 'linear-gradient(90deg,#60A5FA,#A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
//               {s.num}
//             </p>
//             <p className="text-sm text-white/55 font-medium leading-snug">{s.label}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────
// // Meeting / Calendly card
// // ─────────────────────────────────────────────────────────────────────────
// function MeetingCard() {
//   return (
//     <section className="bg-neutral-50 py-16 px-6">
//       <div className="max-w-3xl mx-auto">
//         <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//           className="text-kestone-red text-xs font-bold uppercase tracking-widest mb-2">
//           Free Strategy Call
//         </motion.p>
//         <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//           transition={{ delay: 0.08 }}
//           className="font-heading font-black text-3xl text-kestone-black mb-2">
//           Prefer to Talk First?
//         </motion.h2>
//         <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//           transition={{ delay: 0.12 }}
//           className="text-gray-400 text-sm mb-8">
//           Skip the form — book a 30-minute call directly with our growth strategists.
//         </motion.p>

//         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }} transition={{ delay: 0.18 }} whileHover={{ y: -2 }}
//           className="bg-white border border-gray-100 rounded-2xl p-7 flex flex-col sm:flex-row gap-6 items-start shadow-sm hover:shadow-md transition-shadow">

//           <div className="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center text-2xl"
//             style={{ background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)' }}>
//             📅
//           </div>

//           <div className="flex-1">
//             <h3 className="font-heading font-black text-lg text-kestone-black mb-2">
//               Book a Free Strategy Call
//             </h3>
//             <p className="text-sm text-gray-500 leading-relaxed mb-4 font-body">
//               We&apos;ll audit your current marketing setup and show you exactly what&apos;s holding
//               your growth back — no fluff, no sales pitch. Just a real, actionable plan.
//             </p>
//             <div className="flex flex-wrap gap-2 mb-5">
//               {['30 Minutes', 'Google Meet', '100% Free', 'No Obligation'].map((tag) => (
//                 <span key={tag} className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1 text-xs font-bold text-gray-500">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//             <div className="inline-flex items-center gap-2 px-6 py-3 bg-kestone-black text-white rounded-xl text-sm font-bold hover:bg-kestone-red transition-colors">
//               Book on Calendly
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────
// // FAQ
// // ─────────────────────────────────────────────────────────────────────────
// function FAQSection() {
//   const [openIndex, setOpenIndex] = useState<number | null>(0);

//   return (
//     <section className="bg-white py-20 px-6 border-t border-gray-50">
//       <div className="max-w-3xl mx-auto">
//         <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
//           className="text-kestone-red font-bold tracking-widest uppercase text-xs mb-3 block">
//           Common Questions
//         </motion.span>
//         <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//           transition={{ delay: 0.08 }}
//           className="font-heading font-black text-3xl text-kestone-black mb-10">
//           Frequently Asked Questions
//         </motion.h2>

//         <div className="space-y-3">
//           {faqs.map((faq, i) => (
//             <motion.div key={i}
//               initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }} transition={{ delay: i * 0.07 }}
//               className={`border rounded-2xl overflow-hidden transition-colors ${openIndex === i ? 'border-kestone-black' : 'border-gray-100'
//                 }`}>
//               <button
//                 onClick={() => setOpenIndex(openIndex === i ? null : i)}
//                 className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-neutral-50 transition-colors">
//                 <span className="font-heading font-bold text-base text-kestone-black pr-4">
//                   {faq.q}
//                 </span>
//                 <span className="shrink-0 w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400">
//                   {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
//                 </span>
//               </button>
//               <AnimatePresence initial={false}>
//                 {openIndex === i && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: 'auto', opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3, ease: 'easeInOut' }}>
//                     <p className="px-6 pb-6 text-gray-500 text-sm leading-relaxed font-body">
//                       {faq.a}
//                     </p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────
// // Combined export — single component holding the entire contact page
// // ─────────────────────────────────────────────────────────────────────────
// export default function ContactPageContent() {
//   return (
//     <main className="bg-black">
//       <ContactHero />
//       <ContactCards />
//       <ContactForm />
//       <StatsSection />
//       <MeetingCard />
//       <FAQSection />
//     </main>
//   );
// }





'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  MapPin,
  Mail,
  Phone,
  Plus,
  Minus,
} from 'lucide-react';

// ── Env-driven contact details (with safe fallbacks so links never break) ───
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'marktaleworld@gmail.com';
const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '+91-8587870707';
const CONTACT_PHONE_RAW = process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW ?? '918587870707';
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '918587870707';
const WHATSAPP_MESSAGE =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
  'Hi! I would like to know more about your services.';

type Status = 'idle' | 'loading' | 'success' | 'error';

const SERVICE_CHIPS = [
  'Website Development',
  'App Development',
  'SEO',
  'Performance Marketing',
  'Branding and Design',
  'Lead Generation',
  'Social Media',
  'AI Automation',
];

const faqs = [
  {
    q: 'How quickly do you respond to inquiries?',
    a: 'We respond to all contact form submissions within 24 hours on business days. For urgent requirements, WhatsApp us directly — our team is available 9 AM to 9 PM IST, Monday to Saturday.',
  },
  {
    q: 'How fast can you onboard a new client?',
    a: 'We move at the speed of your business. Typically, we complete discovery and kick off execution within 5–7 business days.',
  },
  {
    q: 'Do you work with pre-seed startups?',
    a: "Yes — in fact, we specialize in them. Our 'MaaS for Startups' package gives early-stage founders a full marketing stack without the C-suite costs.",
  },
  {
    q: 'What is your pricing model?',
    a: 'We offer retainer-based models (MaaS) and project-based pricing. No hidden fees, no surprise billings. Engagements typically start from ₹25,000/month.',
  },
  {
    q: 'Can you handle international projects?',
    a: 'Absolutely. We serve clients across India, UAE, USA, UK, and Southeast Asia. Our team is fully remote-friendly with regular video call updates across time zones.',
  },
];

const stats = [
  { num: '30+', label: 'Brands Successfully Built' },
  { num: '10+', label: 'Years of Experience' },
  { num: '500K+', label: 'Lives Impacted' },
  { num: '24 Hrs', label: 'Guaranteed Response' },
];

const cards = [
  {
    icon: '✉️',
    label: 'Email',
    value: CONTACT_EMAIL,
    color: 'rgba(139,92,246,0.15)',
    textColor: '#A78BFA',
    delay: 0,
    href: `mailto:${CONTACT_EMAIL}?subject=Project Inquiry - MarkTale World`,
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'India, UAE',
    color: 'rgba(6,182,212,0.15)',
    textColor: '#22D3EE',
    delay: 0.08,
    href: 'https://maps.google.com/?q=Dwarka+Sector+14+New+Delhi',
  },
  {
    icon: '⚡',
    label: 'Response Time',
    value: 'Within 24 Hours',
    color: 'rgba(251,191,36,0.15)',
    textColor: '#FCD34D',
    delay: 0.16,
    href: null as string | null,
  },
  {
    icon: '🕐',
    label: 'Work Hours',
    value: 'Mon-Sat, 10AM-7PM IST',
    color: 'rgba(16,185,129,0.15)',
    textColor: '#34D399',
    delay: 0.24,
    href: null as string | null,
  },
];

// ─────────────────────────────────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────────────────────────────────
function ContactHero() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-black text-white pt-15 pb-20 px-6 overflow-hidden text-center">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], y: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-[420px] h-[420px] rounded-full -top-28 -left-20"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], y: [0, 20, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute w-[380px] h-[380px] rounded-full -top-16 -right-16"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.16) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
          className="absolute w-[300px] h-[300px] rounded-full bottom-0 left-1/2 -translate-x-1/2"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 rounded-full px-5 py-1.5 mb-7 relative"
      >
        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">
          MarkTale - Turning Your Tale into Sales        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-heading font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-5 relative break-words"
      >
        Let&apos;s Build
        <br className="sm:hidden" />
        {" "}Something
        <br />
        <span style={{
          background: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 50%, #06B6D4 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Extraordinary
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-gray-400 text-lg max-w-xl mx-auto mb-9 leading-relaxed relative font-body"
      >
        Tell us about your project. Our growth experts will craft a custom
        AI-powered strategy to scale your brand — fast.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap gap-3 justify-center mb-10 relative"
      >
        {[
          { icon: '🚀', label: '24 Hrs Response' },
          { icon: '🌍', label: 'Global Clients' },
          { icon: '🤖', label: 'AI-Powered Solutions' },
        ].map((p) => (
          <span key={p.label} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300 font-medium">
            <span>{p.icon}</span> {p.label}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center relative"
      >
        <button
          onClick={scrollToForm}
          className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(59,130,246,0.35)]"
          style={{ background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)' }}
        >
          📅 Schedule Free Consultation
        </button>
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Cards
// ─────────────────────────────────────────────────────────────────────────
function ContactCards() {
  return (
    <section className="bg-black pb-16 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card) =>
          card.href ? (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: card.delay }}
              whileHover={{ y: -4 }}
              className="block bg-[#0A0A0A] border border-white/[0.07] rounded-2xl p-4 text-center cursor-pointer transition-shadow hover:shadow-[0_16px_40px_rgba(59,130,246,0.1)] no-underline"
            >
              <div
                className="w-12 h-12 rounded-[13px] flex items-center justify-center text-xl mx-auto mb-3"
                style={{ background: card.color, color: card.textColor }}
              >
                {card.icon}
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">{card.label}</p>
              <p className="text-xs font-semibold text-slate-300 leading-snug break-words">{card.value}</p>
            </motion.a>
          ) : (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: card.delay }}
              whileHover={{ y: -4 }}
              className="block bg-[#0A0A0A] border border-white/[0.07] rounded-2xl p-6 text-center transition-shadow hover:shadow-[0_16px_40px_rgba(59,130,246,0.1)]"
            >
              <div
                className="w-12 h-12 rounded-[13px] flex items-center justify-center text-xl mx-auto mb-3"
                style={{ background: card.color, color: card.textColor }}
              >
                {card.icon}
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">{card.label}</p>
              <p className="text-xs font-semibold text-slate-300 leading-snug break-words">{card.value}</p>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Form (budget + timeline sections removed)
// ─────────────────────────────────────────────────────────────────────────
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', company: '', message: '',
  });
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const toggleChip = (chip: string) =>
    setSelectedChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          services: selectedChips.join(', '),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || 'Something went wrong.');
      setSubmittedEmail(formData.email);
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', company: '', message: '' });
      setSelectedChips([]);
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  };

  const inputClass = 'w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all';
  const labelClass = 'block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wider';

  return (
    <section id="contact-form" className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 flex flex-col justify-start"
        >
          <span className="text-kestone-red font-bold tracking-widest uppercase text-xs mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-black mb-4 leading-tight">
            Start Your Growth Journey with MarkTale
          </h2>
          <p className="text-gray-500 leading-relaxed mb-10 font-body text-sm">
            Fill in the details of your project. MarkTale (Marktale World Private Limited) will review your requirements and respond with a custom strategy within 24 hours.
          </p>
          {/* add a space  */}

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center shrink-0">
                <Mail size={20} className="text-gray-700" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Email</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Project Inquiry - MarkTale World`}
                  className="text-sm font-semibold text-kestone-black hover:text-kestone-red transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Call Us</p>
                <div className="flex flex-nowrap items-center gap-2">
                  <a
                    href={`tel:+${CONTACT_PHONE_RAW}`}
                    className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-kestone-black hover:border-kestone-red hover:text-kestone-red transition-colors"
                  >
                    <Phone size={14} /> {CONTACT_PHONE}
                  </a>
                  <a
                    href="tel:+971582426107"
                    className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-kestone-black hover:border-kestone-red hover:text-kestone-red transition-colors"
                  >
                    <Phone size={14} /> +971-582426107
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-gray-700" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Visit Us</p>
                <p className="text-sm font-semibold text-kestone-black leading-relaxed">
                  Delhi- Dwarka, New Delhi - 110078
                  <br />
                  UAE- Discovery Garden, Dubai

                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center shrink-0">
                <span className="text-lg">🕐</span>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Work Hours</p>
                <p className="text-sm font-semibold text-kestone-black">Mon-Sat, 10AM-7PM IST</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white font-bold rounded-full hover:bg-green-600 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-8 rounded-2xl overflow-hidden border border-gray-100 h-44">
            <iframe
              width="100%"
              height="100%"
              frameBorder={0}
              scrolling="no"
              src="https://maps.google.com/maps?q=Plot%20no.%20141,%20Sec.%2014,%20Dwarka,%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="MarkTale Location"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 bg-neutral-50 border border-gray-100 rounded-3xl p-7 md:p-10"
        >
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-20 gap-5 text-center"
            >
              <CheckCircle size={60} className="text-green-500" />
              <h3 className="text-2xl font-heading font-black text-kestone-black">Message Sent!</h3>
              <p className="text-gray-500 max-w-sm text-sm leading-relaxed font-body">
                Thanks for reaching out! We will reply to{' '}
                <span className="font-bold text-kestone-black">{submittedEmail}</span>{' '}
                within 24 hours. Check your inbox.
              </p>
              <p className="text-xs text-gray-400">
                Did not get it? Check spam or email us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-kestone-black font-semibold underline">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-2 px-7 py-3 bg-kestone-black text-white rounded-xl text-sm font-bold hover:bg-kestone-red transition-colors"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Full Name</label>
                  <input type="text" name="name" required value={formData.name}
                    onChange={handleChange} className={inputClass} placeholder="Rahul Sharma" />
                </div>
                <div>
                  <label className={labelClass}>Phone</label>
                  <input type="tel" name="phone" required value={formData.phone}
                    onChange={handleChange} className={inputClass} placeholder="+91 98765 00000" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Email</label>
                  <input type="email" name="email" required value={formData.email}
                    onChange={handleChange} className={inputClass} placeholder="rahul@company.com" />
                </div>
                <div>
                  <label className={labelClass}>Company or Brand</label>
                  <input type="text" name="company" value={formData.company}
                    onChange={handleChange} className={inputClass} placeholder="Your Brand Pvt Ltd" />
                </div>
              </div>

              <div>
                <label className={labelClass}>Services You Need</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {SERVICE_CHIPS.map((chip) => (
                    <button key={chip} type="button" onClick={() => toggleChip(chip)}
                      className={"px-4 py-2 rounded-full border text-xs font-bold transition-all " + (selectedChips.includes(chip) ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white text-gray-500 hover:border-gray-400')}>
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelClass}>Tell Us About Your Project</label>
                <textarea name="message" rows={4} required value={formData.message}
                  onChange={handleChange} className={inputClass}
                  placeholder="Describe your goals, challenges, and what you want to achieve..." />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                  <AlertCircle size={18} className="shrink-0" /> {errorMsg}
                </div>
              )}

              <button type="submit" disabled={status === 'loading'}
                className="w-full py-4 rounded-xl font-black text-white text-base flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)' }}>
                {status === 'loading' ? (
                  <><Loader2 size={18} className="animate-spin" /> Sending...</>
                ) : (
                  <>Send Message - Get Free Audit <Send size={16} /></>
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                Your information is 100% secure. No spam, ever.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Stats
// ─────────────────────────────────────────────────────────────────────────
function StatsSection() {
  return (
    <section className="relative py-20 px-6 text-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0F2460 0%, #1E1060 50%, #0A1628 100%)' }}>

      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(139,92,246,0.12) 0%, transparent 60%)' }} />

      <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3 relative">
        Our Track Record
      </motion.p>

      <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ delay: 0.08 }}
        className="font-heading font-black text-3xl text-white mb-12 relative">
        Numbers That Speak for Themselves
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto relative">
        {stats.map((s, i) => (
          <motion.div key={s.label}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-white/5 border border-white/[0.08] rounded-2xl py-8 px-4">
            <p className="text-4xl font-black mb-2"
              style={{ background: 'linear-gradient(90deg,#60A5FA,#A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {s.num}
            </p>
            <p className="text-sm text-white/55 font-medium leading-snug">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Meeting / Calendly card
// ─────────────────────────────────────────────────────────────────────────
function MeetingCard() {
  return (
    <section className="bg-neutral-50 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-kestone-red text-xs font-bold uppercase tracking-widest mb-2">
          Free Strategy Call
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="font-heading font-black text-3xl text-kestone-black mb-2">
          Prefer to Talk First?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="text-gray-400 text-sm mb-8">
          Skip the form — book a 30-minute call directly with our growth strategists.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.18 }} whileHover={{ y: -2 }}
          className="bg-white border border-gray-100 rounded-2xl p-7 flex flex-col sm:flex-row gap-6 items-start shadow-sm hover:shadow-md transition-shadow">

          <div className="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center text-2xl"
            style={{ background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)' }}>
            📅
          </div>

          <div className="flex-1">
            <h3 className="font-heading font-black text-lg text-kestone-black mb-2">
              Book a Free Strategy Call
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4 font-body">
              We&apos;ll audit your current marketing setup and show you exactly what&apos;s holding
              your growth back — no fluff, no sales pitch. Just a real, actionable plan.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {['30 Minutes', 'Google Meet', '100% Free', 'No Obligation'].map((tag) => (
                <span key={tag} className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1 text-xs font-bold text-gray-500">
                  {tag}
                </span>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-kestone-black text-white rounded-xl text-sm font-bold hover:bg-kestone-red transition-colors">
              Book on Calendly
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────────────────
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 px-6 border-t border-gray-50">
      <div className="max-w-3xl mx-auto">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-kestone-red font-bold tracking-widest uppercase text-xs mb-3 block">
          Common Questions
        </motion.span>
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="font-heading font-black text-3xl text-kestone-black mb-10">
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className={`border rounded-2xl overflow-hidden transition-colors ${openIndex === i ? 'border-kestone-black' : 'border-gray-100'
                }`}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-neutral-50 transition-colors">
                <span className="font-heading font-bold text-base text-kestone-black pr-4">
                  {faq.q}
                </span>
                <span className="shrink-0 w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400">
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}>
                    <p className="px-6 pb-6 text-gray-500 text-sm leading-relaxed font-body">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Combined export — single component holding the entire contact page
// ─────────────────────────────────────────────────────────────────────────
export default function ContactPageContent() {
  return (
    <main className="bg-black">
      <ContactHero />
      <ContactCards />
      <ContactForm />
      <StatsSection />
      <MeetingCard />
      <FAQSection />
    </main>
  );
}
