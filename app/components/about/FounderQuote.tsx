



// //remove name
// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// export default function FounderQuote() {
//     return (
//         <section className="py-24 bg-neutral-50 border-y border-neutral-200">
//             <div className="container mx-auto px-6 max-w-7xl">
//                 <div className="flex flex-col md:flex-row gap-12 items-center">
//                     {/* Visual - Minimalist Portrait placeholder */}
//                     <motion.div
//                         className="w-full md:w-1/3"
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
//                     >
//                         <div className="aspect-[3/4] bg-neutral-200 relative overflow-hidden grayscale contrast-125 group hover:grayscale-0 transition-all duration-500">
//                             <Image
//                                 src="/images/founder/founderimage.jpeg"
//                                 alt="MarkTale Marketing Leadership"
//                                 fill
//                                 className="object-cover"
//                             />
//                             {/* Overlay gradient for text readability */}
//                             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
//                             <div className="absolute bottom-0 left-0 p-6 pb-7 bg-gradient-to-t from-black/80 to-transparent w-full flex items-center gap-3">
//                                 <div className="w-9 h-9 rounded-full bg-kestone-red flex items-center justify-center flex-shrink-0">
//                                     <span className="text-white font-heading font-bold text-sm">M</span>
//                                 </div>
//                                 <div>
//                                     <h3 className="text-white font-heading font-bold text-xl leading-none">MarkTale</h3>
//                                     <p className="text-neutral-300 text-sm uppercase tracking-widest mt-1">Chief Marketing Officer</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </motion.div>

//                     {/* Quote */}
//                     <motion.div
//                         className="w-full md:w-2/3"
//                         initial={{ opacity: 0, x: 20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.2 }}
//                     >
//                         <div className="text-6xl text-kestone-red font-serif mb-4 opacity-50 pl-6">&quot;</div>
//                         <blockquote className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-snug text-neutral-900 mb-8 border-l-4 border-kestone-red pl-6">
//                             Numbers don&apos;t lie, and neither do we. <span className="text-kestone-red">Every campaign we run is built to prove its worth</span> — in leads, in revenue, in growth you can actually see.
//                         </blockquote>
//                         <p className="text-lg text-neutral-500 font-body leading-relaxed pl-6">
//                             As MarkTale&apos;s CMO, I&apos;ve built our entire approach around one principle: marketing should be measurable, not magical. From SEO and performance ads to AI-powered creative and brand strategy, our team doesn&apos;t just execute campaigns — we engineer growth systems that compound over time. Every client relationship is judged the same way: did the numbers move?
//                         </p>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// }












'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, ArrowUpRight } from 'lucide-react';

export default function FounderQuote() {
    return (
        <section className="relative overflow-hidden border-y border-neutral-200 bg-neutral-50 py-24 md:py-32">
            {/* Decorative background */}
            <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-kestone-red/5 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-neutral-200/60 blur-3xl" />

            <div className="container relative mx-auto max-w-7xl px-6">
                <div className="grid items-center gap-14 lg:grid-cols-[380px_1fr] lg:gap-20">

                    {/* Founder Image */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        {/* Image frame */}
                        <div className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
                            <Image
                                src="/founder/founderimage2.webp"
                                alt="Kautilya Kalyan - Founder & CEO"
                                fill
                                priority
                                className="object-cover grayscale-[15%] transition-all duration-700 hover:scale-105 hover:grayscale-0"
                                sizes="(max-width: 1024px) 100vw, 380px"
                            />

                            {/* Bottom gradient */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Founder details */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-white/70">
                                    Founder & CEO
                                </p>

                                <h3 className="font-heading text-2xl font-bold tracking-tight text-white md:text-3xl">
                                    Kautilya Kalyan
                                </h3>

                                <a
                                    href="https://www.linkedin.com/in/kautilyakalyan/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
                                >
                                    <Linkedin className="h-4 w-4" />
                                    Connect on LinkedIn
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                </a>
                            </div>
                        </div>

                        {/* Accent line */}
                        <div className="absolute -bottom-3 left-6 right-6 h-[3px] bg-kestone-red" />
                    </motion.div>

                    {/* Founder Quote */}
                    <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                    >
                        {/* Eyebrow */}
                        <div className="mb-7 flex items-center gap-4">
                            <span className="h-px w-10 bg-kestone-red" />
                            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                                A Note from the Founder
                            </span>
                        </div>

                        {/* Quote mark */}
                        <div className="mb-2 font-serif text-7xl leading-none text-kestone-red/20">
                            &ldquo;
                        </div>

                        <blockquote className="border-l-2 border-kestone-red pl-6 font-heading text-2xl font-bold leading-[1.25] tracking-tight text-neutral-900 md:text-3xl lg:text-[2.65rem]">
                            Numbers don&apos;t lie, and neither do we.
                            <span className="text-kestone-red">
                                {' '}Every campaign we build is designed to prove its worth
                            </span>{' '}
                            — through meaningful leads, measurable revenue, and growth you
                            can actually see.
                        </blockquote>

                        {/* Description */}
                        <p className="mt-8 max-w-2xl pl-6 font-body text-base leading-8 text-neutral-500 md:text-lg">
                            At MarkTale, we believe great marketing should be measurable,
                            purposeful, and built for long-term impact. From SEO and
                            performance marketing to AI-powered creative and brand strategy,
                            we don&apos;t simply run campaigns — we build growth systems
                            designed to create lasting momentum.
                        </p>

                        {/* Signature / Founder attribution */}
                        <div className="mt-10 flex items-center gap-5 pl-6">
                            <div className="h-px w-12 bg-neutral-300" />

                            <div>
                                <p className="font-heading text-lg font-bold text-neutral-900">
                                    Kautilya Kalyan
                                </p>
                                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-400">
                                    Founder & CEO
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}