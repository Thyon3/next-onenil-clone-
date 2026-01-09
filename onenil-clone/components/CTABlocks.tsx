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
                            <div className="relative z-10 p-8 md:p-12 flex flex-col justify-between h-full text-white">
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-semibold tracking-widest uppercase text-blue-300">
                                            Innovation Showcase
                                        </span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 max-w-md">
                                        Explore Our Proprietary Technologies
                                    </h3>

                                    <p className="text-gray-300 mb-8 max-w-md">
                                        Discover how QuantumWeave™, Biometric AI, and our other patented technologies are redefining athletic performance.
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <span className="text-base font-semibold group-hover:text-blue-300 transition-colors">
                                        View Technology
                                    </span>
                                    <div className="w-10 h-10 rounded-full border border-gray-300/30 group-hover:border-blue-400 group-hover:bg-blue-500/20 flex items-center justify-center transition-all duration-300 group-hover:translate-x-2">
                                        <svg className="w-5 h-5 text-gray-300 group-hover:text-blue-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                            className="group relative block overflow-hidden rounded-2xl min-h-[400px] md:min-h-[480px] bg-card backdrop-blur-sm"
                        >
                            {/* Border and Background */}
                            <div className="absolute inset-0 border border-border group-hover:border-blue-500/30 transition-all duration-500" />

                            {/* Animated Grid Pattern */}
                            <div className="absolute inset-0 opacity-[0.03]">
                                <div className="absolute inset-0" style={{
                                    backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
                                                    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)`,
                                    backgroundSize: '40px 40px',
                                }} />
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute inset-0">
                                {[...Array(6)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
                                        style={{
                                            top: `${20 + i * 15}%`,
                                            left: `${10 + i * 15}%`,
                                            animation: `float ${3 + i}s infinite ease-in-out`,
                                            animationDelay: `${i * 0.5}s`,
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-8 md:p-12 flex flex-col justify-between h-full text-white">
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-400 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-semibold tracking-widest uppercase text-accentBlue">
                                            Join Our Team
                                        </span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 max-w-md">
                                        Shape the Future of Sports Technology
                                    </h3>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-accentBlue rounded-full" />
                                            <span className="text-muted-foreground">5 Open Positions</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-accentBlue rounded-full" />
                                            <span className="text-muted-foreground">Global Research Teams</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-accentBlue rounded-full" />
                                            <span className="text-muted-foreground">Elite Athlete Collaboration</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <span className="text-base font-semibold group-hover:text-accentBlue transition-colors">
                                            View Careers
                                        </span>
                                        <div className="w-10 h-10 rounded-full border border-border group-hover:border-accentBlue group-hover:bg-accentBlue/20 flex items-center justify-center transition-all duration-300 group-hover:translate-x-2">
                                            <svg className="w-5 h-5 text-muted-foreground group-hover:text-accentBlue transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                        SF • Boston • Remote
                                    </span>
                                </div>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                        href="/consultation"
                        className="group relative block overflow-hidden rounded-2xl min-h-[200px] md:min-h-[240px]"
                    >
                        {/* Background */}
                        <div className="absolute inset-0 bg-card" />

                        {/* Animated Border */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-2xl transition-all duration-500" />

                        {/* Content */}
                        <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between h-full text-foreground">
                            <div className="mb-6 md:mb-0 md:mr-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                                        Performance Consultation
                                    </h3>
                                </div>
                                <p className="text-muted-foreground max-w-2xl">
                                    Schedule a consultation with our performance specialists to discover how our technology can enhance your athletic capabilities.
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="text-base font-semibold group-hover:text-purple-300 transition-colors text-foreground">
                                    Book a Session
                                </span>
                                <div className="w-10 h-10 rounded-full border border-border group-hover:border-purple-400 group-hover:bg-purple-500/20 flex items-center justify-center transition-all duration-300 group-hover:translate-x-2">
                                    <svg className="w-5 h-5 text-muted-foreground group-hover:text-purple-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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