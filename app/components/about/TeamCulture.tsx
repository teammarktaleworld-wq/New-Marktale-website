// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Users, Star, Award, Zap, Code, PenTool, TrendingUp, Search } from 'lucide-react';

// const departments = [
//     { name: 'Social Media Sorcerers', icon: Users },
//     { name: 'Digital Strategy Geniuses', icon: Brain }, // Using Brain again or finding similar
//     { name: 'Performance Marketing Ninjas', icon: TrendingUp },
//     { name: 'Creative Design & Video Wizards', icon: Palette }, // Palette is good
//     { name: 'Innovative Copywriting', icon: PenTool },
//     { name: 'SEO and Analytics Experts', icon: Search },
//     { name: 'Web Development Aces', icon: Code },
//     { name: 'Client Service Department', icon: Star }
// ];

// // Imports for icons not in lucide 'live' set? I'll use standard ones.
// import { Brain, Palette } from 'lucide-react';

// export default function TeamCulture() {
//     return (
//         <section className="py-24 bg-gray-50">
//             <div className="container mx-auto px-6 max-w-7xl">
//                 <div className="text-center mb-16">
//                     <h2 className="text-4xl md:text-5xl font-heading font-bold text-kestone-black mb-6">
//                         Team & Culture
//                     </h2>
//                     <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto">
//                         A powerhouse of 50+ creative minds with specialized departments dedicated to your success.
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {departments.map((dept, idx) => (
//                         <motion.div
//                             key={idx}
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: idx * 0.1, duration: 0.5 }}
//                             className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center group"
//                         >
//                             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-kestone-red transition-colors duration-300">
//                                 <dept.icon className="text-kestone-black group-hover:text-white transition-colors" size={32} />
//                             </div>
//                             <h3 className="text-lg font-heading font-bold text-gray-800">
//                                 {dept.name}
//                             </h3>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }



'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { Users, Star, Code, PenTool, TrendingUp, Search, Sparkles } from 'lucide-react';
import { Brain, Palette } from 'lucide-react';

const departments = [
    { name: 'Social Media Sorcerers', icon: Users },
    { name: 'Digital Strategy Geniuses', icon: Brain },
    { name: 'Performance Marketing Ninjas', icon: TrendingUp },
    { name: 'Creative Design & Video Wizards', icon: Palette },
    { name: 'Innovative Copywriting', icon: PenTool },
    { name: 'SEO and Analytics Experts', icon: Search },
    { name: 'Web Development Aces', icon: Code },
    { name: 'Client Service Department', icon: Star }
];

const teamMembers = [
    {
        name: 'Vaibhav',
        role: 'App Developer',
        initials: 'V',
        description:
            'Vaibhav is a skilled App Developer passionate about building fast, scalable, and user-friendly mobile applications. He focuses on delivering seamless digital experiences with clean code, modern technologies, and performance-driven development.',
        expertise: [
            'Mobile App Development',
            'Android & iOS Solutions',
            'API Integration',
            'Performance Optimization',
            'UI Implementation'
        ]
    },
    {
        name: 'Abhishek',
        role: 'Senior Software Developer',
        initials: 'A',
        description:
            'Abhishek is an experienced Senior Software Developer specializing in scalable web applications, backend architecture, and enterprise-grade software solutions. He ensures every project is secure, efficient, and built with industry best practices.',
        expertise: [
            'Full Stack Development',
            'Backend Development',
            'Database Architecture',
            'REST APIs',
            'Software Optimization'
        ]
    },
    {
        name: 'Priya',
        role: 'Digital Marketing Specialist',
        initials: 'P',
        description:
            'Priya helps businesses build a powerful online presence through strategic digital marketing, SEO, content planning, social media management, and performance campaigns that drive measurable growth.',
        expertise: [
            'Digital Marketing',
            'SEO',
            'Social Media Management',
            'Performance Marketing',
            'Content Strategy'
        ]
    }
];

// Deterministic "floating particle" positions (avoids Math.random hydration mismatch)
const particles = Array.from({ length: 16 }).map((_, i) => ({
    id: i,
    left: (i * 41 + 7) % 100,
    top: (i * 29 + 13) % 100,
    size: 2 + (i % 3),
    duration: 9 + (i % 5) * 2,
    delay: (i % 8) * 0.5
}));

function TeamCard({ member, index }: { member: (typeof teamMembers)[number]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const px = e.clientX - rect.left;
        const py = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        rotateX.set(((py - centerY) / centerY) * -6);
        rotateY.set(((px - centerX) / centerX) * 6);
    };

    const handleMouseLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.94 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: index * 0.05 }
        }
    };

    return (
        <motion.div variants={cardVariants} style={{ perspective: 1200 }} className="group relative">
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' as const }}
                whileHover={{ scale: 1.03, y: -8 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="relative h-full flex flex-col overflow-hidden rounded-[24px] border border-blue-500/20 bg-white/[0.03] p-8 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.45)] transition-[border-color,box-shadow] duration-500 hover:border-blue-400/50 hover:shadow-[0_0_60px_-10px_rgba(59,130,246,0.35)]"
            >
                {/* corner glow */}
                <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {/* faint top highlight for glass effect */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                <div className="relative mx-auto mb-6" style={{ transform: 'translateZ(40px)' }}>
                    <div className="absolute inset-0 rounded-full bg-blue-500 blur-xl opacity-30 transition-opacity duration-500 group-hover:opacity-60 animate-pulse" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-blue-300/30 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 shadow-lg shadow-blue-500/30">
                        <span className="text-2xl font-heading font-bold tracking-wide text-white">
                            {member.initials}
                        </span>
                    </div>
                </div>

                <h3 className="relative text-center text-xl font-heading font-bold text-white">
                    {member.name}
                    <span className="mx-auto mt-2 block h-[2px] w-0 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-500 ease-out group-hover:w-12" />
                </h3>

                <p className="mb-5 mt-2 flex items-center justify-center gap-1.5 text-center text-xs font-body font-semibold uppercase tracking-[0.15em] text-blue-400">
                    <motion.span
                        animate={{ rotate: [0, 15, 0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
                        className="inline-flex"
                    >
                        <Sparkles size={12} className="text-blue-400" />
                    </motion.span>
                    {member.role}
                </p>

                <p className="mb-6 text-center font-body text-sm leading-relaxed text-gray-400">
                    {member.description}
                </p>

                <div className="mt-auto flex flex-wrap justify-center gap-2 border-t border-white/5 pt-4">
                    {member.expertise.map((skill) => (
                        <span
                            key={skill}
                            className="cursor-default rounded-full border border-blue-500/30 bg-blue-500/5 px-3 py-1 text-[11px] font-body font-medium text-blue-300 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-500/15 hover:shadow-[0_0_12px_rgba(59,130,246,0.45)]"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function TeamCulture() {
    return (
        <>
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-kestone-black mb-6">
                            Team & Culture
                        </h2>
                        <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto">
                            A powerhouse of 50+ creative minds with specialized departments dedicated to your success.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {departments.map((dept, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center group"
                            >
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-kestone-red transition-colors duration-300">
                                    <dept.icon className="text-kestone-black group-hover:text-white transition-colors" size={32} />
                                </div>
                                <h3 className="text-lg font-heading font-bold text-gray-800">
                                    {dept.name}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet Our Team — premium dark section */}
            <section className="relative overflow-hidden bg-black py-28 md:py-32">
                {/* animated glow blobs */}
                <motion.div
                    aria-hidden
                    animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
                    transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                    className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]"
                />
                <motion.div
                    aria-hidden
                    animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
                    transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
                    className="pointer-events-none absolute -bottom-40 -right-20 h-[450px] w-[450px] rounded-full bg-blue-500/15 blur-[120px]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_60%)]" />

                {/* floating particles */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    {particles.map((p) => (
                        <motion.span
                            key={p.id}
                            className="absolute rounded-full bg-blue-400/60"
                            style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
                            animate={{ y: [0, -22, 0], opacity: [0.15, 0.8, 0.15] }}
                            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    ))}
                </div>

                <div className="container relative z-10 mx-auto max-w-7xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20 text-center"
                    >
                        <h2 className="mb-6 bg-gradient-to-b from-white to-blue-400 bg-clip-text font-heading text-4xl font-bold text-transparent md:text-6xl">
                            Meet Our Team
                        </h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mx-auto mb-8 h-[3px] rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                        />
                        <p className="mx-auto max-w-2xl font-body text-lg text-gray-400 md:text-xl">
                            Our talented professionals combine technology, creativity, and strategy to deliver exceptional digital experiences.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
                        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {teamMembers.map((member, idx) => (
                            <TeamCard key={member.name} member={member} index={idx} />
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}