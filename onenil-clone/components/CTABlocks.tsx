"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTABlocks() {
    return (
        <section className="bg-background px-5 md:px-10 lg:px-20 pb-24 md:pb-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-background" />
                <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px]" />
                <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-[1600px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Technology Innovation CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            href="/technology"
                            className="group relative block overflow-hidden rounded-2xl min-h-[400px] md:min-h-[480px]"
                        >
                            {/* Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-cyan-500/20" />

                            {/* Animated Background Elements */}
                            <div className="absolute inset-0">
                                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                                <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                            </div>

                            {/* Pattern Overlay */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute inset-0" style={{
                                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                                    backgroundSize: '30px 30px',
                                }} />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-10 md:p-14 flex flex-col justify-between h-full">
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-lg shadow-black/5">
                                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        </div>
                                        <span className="text-[0.65rem] font-black tracking-[0.4em] uppercase text-white/80">
                                            Innovation
                                        </span>
                                    </div>

                                    <h3 className="text-4xl lg:text-5xl font-black leading-[0.9] text-white max-w-md uppercase tracking-tighter italic mb-8">
                                        Proprietary <br />Technologies
                                    </h3>

                                    <p className="text-white/70 mb-10 max-w-md text-lg font-light leading-relaxed">
                                        Experience QuantumWeave™ and Biometric AI redefining potential.
                                    </p>
                                </div>

                                <div className="flex items-center gap-6">
                                    <span className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-white py-3 px-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                                        View Technology
                                    </span>
                                    <div className="w-12 h-12 rounded-full border border-white/30 group-hover:border-white group-hover:bg-white/20 flex items-center justify-center transition-all duration-500 group-hover:translate-x-2">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </Link>
                    </motion.div>

                    {/* Careers CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link
                            href="/careers"
                            className="group relative block overflow-hidden rounded-[2.5rem] min-h-[400px] md:min-h-[480px] bg-card backdrop-blur-sm"
                        >
                            {/* Border and Background */}
                            <div className="absolute inset-0 border border-border group-hover:border-blue-500/30 transition-all duration-700" />

                            {/* Animated Grid Pattern */}
                            <div className="absolute inset-0 opacity-[0.03]">
                                <div className="absolute inset-0" style={{
                                    backgroundImage: `linear-gradient(90deg, currentColor 1px, transparent 1px),
                                                    linear-gradient(currentColor 1px, transparent 1px)`,
                                    backgroundSize: '40px 40px',
                                }} />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-10 md:p-14 flex flex-col justify-between h-full">
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center border border-blue-600/20 shadow-xl shadow-blue-500/5">
                                            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <span className="text-[0.65rem] font-black tracking-[0.4em] uppercase text-blue-600">
                                            Recruitment
                                        </span>
                                    </div>

                                    <h3 className="text-4xl lg:text-5xl font-black leading-[0.9] text-foreground max-w-md uppercase tracking-tighter italic mb-8">
                                        Join Our <br />Core Team
                                    </h3>

                                    <div className="space-y-4 mb-10">
                                        {[
                                            '5 Open Positions',
                                            'Global Research Teams',
                                            'Elite Collaboration'
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                                <span className="text-[0.65rem] font-black uppercase tracking-widest text-muted-foreground">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-6">
                                        <span className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-foreground">
                                            View Careers
                                        </span>
                                        <div className="w-12 h-12 rounded-full border border-border group-hover:border-blue-600 group-hover:bg-blue-600/20 flex items-center justify-center transition-all duration-500 group-hover:translate-x-2">
                                            <svg className="w-6 h-6 text-muted-foreground group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                    <span className="text-[0.6rem] text-muted-foreground font-black uppercase tracking-[0.2em]">
                                        SF • Boston • Remote
                                    </span>
                                </div>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </Link>
                    </motion.div>
                </div>

                {/* Performance Consultation CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-8"
                >
                    <Link
                        href="/contact"
                        className="group relative block overflow-hidden rounded-[2.5rem] min-h-[200px] md:min-h-[240px] bg-card border border-border hover:border-blue-500/30 transition-all duration-700 shadow-sm"
                    >
                        {/* Content */}
                        <div className="relative z-10 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between h-full">
                            <div className="mb-8 md:mb-0 md:mr-12 text-center md:text-left">
                                <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-xl shadow-blue-500/20 rotate-3 group-hover:rotate-6 transition-transform">
                                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-4xl lg:text-5xl font-black text-foreground uppercase tracking-tighter italic leading-none">
                                        Performance <span className="text-blue-600">Consultation</span>
                                    </h3>
                                </div>
                                <p className="text-muted-foreground max-w-2xl text-lg font-light leading-relaxed">
                                    Discover how our technology can enhance your athletic capabilities.
                                </p>
                            </div>

                            <div className="flex items-center gap-6">
                                <span className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-foreground group-hover:text-blue-600 transition-colors">
                                    Book a Session
                                </span>
                                <div className="w-14 h-14 rounded-full border border-border group-hover:border-blue-600 group-hover:bg-blue-600/20 flex items-center justify-center transition-all duration-500 group-hover:translate-x-2">
                                    <svg className="w-6 h-6 text-muted-foreground group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </Link>
                </motion.div>
            </div>

            {/* CSS for floating animation */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    50% { transform: translateY(-10px) translateX(5px); }
                }
            `}</style>
        </section>
    );
}