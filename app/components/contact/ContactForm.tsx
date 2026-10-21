
// // 'use client';

// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
// // import { services } from '@/lib/servicesData';

// // type Status = 'idle' | 'loading' | 'success' | 'error';

// // export default function ContactForm() {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     phone: '',
// //     email: '',
// //     service: 'Marketing as a Service (MaaS)',
// //     message: '',
// //   });
// //   const [status, setStatus] = useState<Status>('idle');
// //   const [errorMsg, setErrorMsg] = useState('');

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
// //   ) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setStatus('loading');
// //     setErrorMsg('');

// //     try {
// //       const res = await fetch('/api/contact', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(formData),
// //       });

// //       const data = await res.json();

// //       if (!res.ok || !data.success) {
// //         throw new Error(data.error || 'Something went wrong. Please try again.');
// //       }

// //       setStatus('success');
// //       setFormData({
// //         name: '',
// //         phone: '',
// //         email: '',
// //         service: 'Marketing as a Service (MaaS)',
// //         message: '',
// //       });
// //     } catch (err: any) {
// //       setStatus('error');
// //       setErrorMsg(err.message);
// //     }
// //   };

// //   return (
// //     <section className="py-24 bg-white">
// //       <div className="container mx-auto px-6">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

// //           {/* ── Contact Info ─────────────────────────────────────────────── */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -20 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //           >
// //             <span className="text-kestone-red font-bold tracking-widest uppercase text-sm mb-4 block">
// //               Get In Touch
// //             </span>
// //             <h2 className="text-4xl font-heading font-bold text-kestone-black mb-6">
// //               Ready to Start <br /> Your Project?
// //             </h2>
// //             <p className="text-gray-600 leading-relaxed mb-12 max-w-lg font-body">
// //               Whether you need a full digital transformation or a specific marketing campaign,
// //               our team is ready to help you scale.
// //             </p>

// //             <div className="space-y-8">
// //               {/* <div className="flex items-start">
// //                 <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center text-kestone-black mr-6 shrink-0">
// //                   <Phone size={24} />
// //                 </div>
// //                 <div>
// //                   <h4 className="text-lg font-bold text-kestone-black mb-1">Call Us</h4>
// //                   <a href="tel:+9185878 70707" className="text-gray-600 hover:text-kestone-red transition-colors">
// //                     +91-85878 70707
// //                   </a>
// //                 </div> */}


// //               <div className="flex items-start">
// //                 <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center text-kestone-black mr-6 shrink-0">
// //                   <Mail size={24} />
// //                 </div>
// //                 <div>
// //                   <h4 className="text-lg font-bold text-kestone-black mb-1">Email Us</h4>
// //                   <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
// //  className="text-gray-600 hover:text-kestone-red transition-colors">
// // {process.env.NEXT_PUBLIC_CONTACT_EMAIL}                  </a>
// //                 </div>
// //               </div>

// //               <div className="flex items-start">
// //                 <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center text-kestone-black mr-6 shrink-0">
// //                   <MapPin size={24} />
// //                 </div>
// //                 <div>
// //                   <h4 className="text-lg font-bold text-kestone-black mb-1">Visit Us</h4>
// //                   <p className="text-gray-600 mb-4">
// //                     Plot no. 141, Sec. 14, Dwarka,<br />
// //                     New Delhi – 110078 Bharat
// //                   </p>
// //                   <div className="w-full h-48 rounded-lg overflow-hidden border border-gray-200">
// //                     <iframe
// //                       width="100%"
// //                       height="100%"
// //                       frameBorder="0"
// //                       scrolling="no"
// //                       marginHeight={0}
// //                       marginWidth={0}
// //                       src="https://maps.google.com/maps?q=Plot%20no.%20141,%20Sec.%2014,%20Dwarka,%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
// //                       title="MarkTale Location"
// //                     />
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="mt-12">
// //               <a
// //                 // href="https://wa.me/9185878 70707"
// //                 href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="inline-flex items-center px-8 py-3 bg-[#25D366] text-white font-bold rounded-full hover:bg-green-600 transition-colors"
// //               >
// //                 Chat on WhatsApp
// //               </a>
// //             </div>
// //           </motion.div>

// //           {/* ── Form ─────────────────────────────────────────────────────── */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 20 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             className="bg-neutral-50 p-6 md:p-12 rounded-3xl border border-gray-100"
// //           >
// //             {/* Success state */}
// //             {status === 'success' ? (
// //               <motion.div
// //                 initial={{ opacity: 0, scale: 0.95 }}
// //                 animate={{ opacity: 1, scale: 1 }}
// //                 className="flex flex-col items-center justify-center h-full text-center py-16 gap-4"
// //               >
// //                 <CheckCircle size={56} className="text-green-500" />
// //                 <h3 className="text-2xl font-bold text-kestone-black">Message Sent!</h3>
// //                 <p className="text-gray-500 max-w-sm">
// //                   Thanks for reaching out. We've received your enquiry and will respond within 24 hours.
// //                   A confirmation email is on its way to you.
// //                 </p>
// //                 <button
// //                   onClick={() => setStatus('idle')}
// //                   className="mt-4 px-6 py-2.5 bg-kestone-black text-white rounded-lg text-sm font-semibold hover:bg-kestone-red transition-colors"
// //                 >
// //                   Send Another
// //                 </button>
// //               </motion.div>
// //             ) : (
// //               <form onSubmit={handleSubmit} className="space-y-6">
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                   <div>
// //                     <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
// //                       Name
// //                     </label>
// //                     <input
// //                       type="text"
// //                       id="name"
// //                       name="name"
// //                       required
// //                       value={formData.name}
// //                       onChange={handleChange}
// //                       className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-kestone-black transition-colors text-base"
// //                       placeholder="John Doe"
// //                     />
// //                   </div>
// //                   <div>
// //                     <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
// //                       Phone
// //                     </label>
// //                     <input
// //                       type="tel"
// //                       id="phone"
// //                       name="phone"
// //                       required
// //                       value={formData.phone}
// //                       onChange={handleChange}
// //                       className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-kestone-black transition-colors text-base"
// //                       placeholder="+91..."
// //                     />
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
// //                     Email
// //                   </label>
// //                   <input
// //                     type="email"
// //                     id="email"
// //                     name="email"
// //                     required
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-kestone-black transition-colors text-base"
// //                     placeholder="john@company.com"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
// //                     Service Interest
// //                   </label>
// //                   <select
// //                     id="service"
// //                     name="service"
// //                     value={formData.service}
// //                     onChange={handleChange}
// //                     className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-kestone-black transition-colors text-gray-600 text-base"
// //                   >
// //                     <option>Marketing as a Service (MaaS)</option>
// //                     {services.map((service) => (
// //                       <option key={service.id} value={service.title}>
// //                         {service.title}
// //                       </option>
// //                     ))}
// //                     <option>Other</option>
// //                   </select>
// //                 </div>

// //                 <div>
// //                   <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
// //                     Message
// //                   </label>
// //                   <textarea
// //                     id="message"
// //                     name="message"
// //                     rows={4}
// //                     value={formData.message}
// //                     onChange={handleChange}
// //                     className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-kestone-black transition-colors"
// //                     placeholder="Tell us about your project..."
// //                   />
// //                 </div>

// //                 {/* Error banner */}
// //                 {status === 'error' && (
// //                   <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
// //                     <AlertCircle size={18} className="shrink-0" />
// //                     {errorMsg}
// //                   </div>
// //                 )}

// //                 <button
// //                   type="submit"
// //                   disabled={status === 'loading'}
// //                   className="w-full py-4 bg-kestone-black text-white font-bold rounded-lg hover:bg-kestone-red transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
// //                 >
// //                   {status === 'loading' ? (
// //                     <>
// //                       <Loader2 size={18} className="animate-spin" />
// //                       Sending...
// //                     </>
// //                   ) : (
// //                     <>
// //                       Send Message
// //                       <Send size={18} />
// //                     </>
// //                   )}
// //                 </button>
// //               </form>
// //             )}
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// 'use client';

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Send, CheckCircle, AlertCircle, Loader2, MapPin, Mail } from 'lucide-react';

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

// const BUDGETS = ['Below 25K', '25K to 50K', '50K to 1L', '1L Plus'];
// const TIMELINES = ['Urgent 1 Week', '1 Month', '2 to 3 Months', 'Just Exploring'];

// const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hello@marktaleworld.com';

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '', phone: '', email: '', company: '', message: '',
//   });
//   const [selectedChips, setSelectedChips] = useState<string[]>([]);
//   const [budget, setBudget] = useState('');
//   const [timeline, setTimeline] = useState('');
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
//           budget,
//           timeline,
//         }),
//       });
//       const data = await res.json();
//       if (!res.ok || !data.success) throw new Error(data.error || 'Something went wrong.');
//       setSubmittedEmail(formData.email);
//       setStatus('success');
//       setFormData({ name: '', phone: '', email: '', company: '', message: '' });
//       setSelectedChips([]);
//       setBudget('');
//       setTimeline('');
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
//           <h2 className="text-3xl md:text-4xl font-heading font-black text-kestone-black mb-4 leading-tight">
//             Start Your Growth Journey
//           </h2>
//           <p className="text-gray-500 leading-relaxed mb-10 font-body text-sm">
//             Fill in the details. Our team will review your project and respond
//             with a custom strategy within 24 hours guaranteed.
//           </p>

//           <div className="space-y-6">
//             <div className="flex items-start gap-4">
//               <div className="w-11 h-11 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center shrink-0">
//                 <Mail size={20} className="text-gray-700" />
//               </div>
//               <div>
//                 <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Email</p>
//                 <a href={"mailto:" + CONTACT_EMAIL + "?subject=Project Inquiry - MarkTale World"} className="text-sm font-semibold text-kestone-black hover:text-kestone-red transition-colors">{CONTACT_EMAIL}</a>
//               </div>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="w-11 h-11 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center shrink-0">
//                 <MapPin size={20} className="text-gray-700" />
//               </div>
//               <div>
//                 <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Visit Us</p>
//                 <p className="text-sm font-semibold text-kestone-black leading-relaxed">
//                   Plot no. 141, Sec. 14, Dwarka, New Delhi - 110078
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
//                 <a href={"mailto:" + CONTACT_EMAIL} className="text-kestone-black font-semibold underline">
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
//                 <label className={labelClass}>Monthly Budget</label>
//                 <div className="flex flex-wrap gap-2 mt-1">
//                   {BUDGETS.map((b) => (
//                     <button key={b} type="button" onClick={() => setBudget(b)}
//                       className={"px-4 py-2 rounded-xl border text-xs font-bold transition-all " + (budget === b ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-gray-200 bg-white text-gray-500 hover:border-gray-400')}>
//                       {b}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <label className={labelClass}>Project Timeline</label>
//                 <div className="flex flex-wrap gap-2 mt-1">
//                   {TIMELINES.map((t) => (
//                     <button key={t} type="button" onClick={() => setTimeline(t)}
//                       className={"px-4 py-2 rounded-xl border text-xs font-bold transition-all " + (timeline === t ? 'border-cyan-500 bg-cyan-50 text-cyan-700' : 'border-gray-200 bg-white text-gray-500 hover:border-gray-400')}>
//                       {t}
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





'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2, MapPin, Mail, Phone } from 'lucide-react';

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

const BUDGETS = ['Below 25K', '25K to 50K', '50K to 1L', '1L Plus'];
const TIMELINES = ['Urgent 1 Week', '1 Month', '2 to 3 Months', 'Just Exploring'];

// ── Env-driven contact details (with safe fallbacks so links never break) ───
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'marktaleworld@gmail.com';
const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '+91-8587870707';
const CONTACT_PHONE_RAW = process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW ?? '918587870707';
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '918587870707';
const WHATSAPP_MESSAGE =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
  'Hi! I would like to know more about your services.';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', company: '', message: '',
  });
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
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
          budget,
          timeline,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || 'Something went wrong.');
      setSubmittedEmail(formData.email);
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', company: '', message: '' });
      setSelectedChips([]);
      setBudget('');
      setTimeline('');
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
          <h2 className="text-3xl md:text-4xl font-heading font-black text-kestone-black mb-4 leading-tight">
            Start Your Growth Journey
          </h2>
          <p className="text-gray-500 leading-relaxed mb-10 font-body text-sm">
            Fill in the details. Our team will review your project and respond
            with a custom strategy within 24 hours guaranteed.
          </p>

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
              <div className="w-11 h-11 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center shrink-0">
                <Phone size={20} className="text-gray-700" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Call Us</p>
                <a
                  href={`tel:+${CONTACT_PHONE_RAW}`}
                  className="text-sm font-semibold text-kestone-black hover:text-kestone-red transition-colors"
                >
                  {CONTACT_PHONE}
                </a>
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
                  UAE- Discovery Garden, Dubai            </p>
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
                <label className={labelClass}>Monthly Budget</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {BUDGETS.map((b) => (
                    <button key={b} type="button" onClick={() => setBudget(b)}
                      className={"px-4 py-2 rounded-xl border text-xs font-bold transition-all " + (budget === b ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-gray-200 bg-white text-gray-500 hover:border-gray-400')}>
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelClass}>Project Timeline</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {TIMELINES.map((t) => (
                    <button key={t} type="button" onClick={() => setTimeline(t)}
                      className={"px-4 py-2 rounded-xl border text-xs font-bold transition-all " + (timeline === t ? 'border-cyan-500 bg-cyan-50 text-cyan-700' : 'border-gray-200 bg-white text-gray-500 hover:border-gray-400')}>
                      {t}
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
