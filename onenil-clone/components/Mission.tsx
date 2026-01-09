"use client";

import { motion } from "framer-motion";

export default function Mission() {
    return (
        <section className="bg-gray-950 text-white py-24 md:py-32 px-5 md:px-10 lg:px-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
                <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/2 right-1/4 w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-[120px]" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px),
                                        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }} />
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Technology Visualization */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative w-[min(500px,90vw)] h-[min(500px,90vw)]">
                            {/* Outer Circle - Quantum Technology */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border border-blue-500/30 rounded-full"
                            >
                                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full blur-sm" />
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full blur-sm" />
                                <div className="absolute bottom-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full blur-sm" />
                            </motion.div>

                            {/* Middle Circle - Biomechanics */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[20%] border border-cyan-500/30 rounded-full"
                            >
                                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full" />
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full" />
                            </motion.div>

                            {/* Inner Core - Performance Core */}
                            <div className="absolute inset-[40%]">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative w-full h-full"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-500/20 to-purple-600/20 rounded-full blur-xl" />
                                    <div className="absolute inset-4 bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 rounded-full shadow-[0_0_60px_rgba(59,130,246,0.3)]">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-3xl mb-2">⚡</div>
                                                <div className="text-sm font-bold tracking-widest uppercase">ATHLON</div>
                                                <div className="text-xs text-gray-300">CORE</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Floating Technology Particles */}
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        x: [0, 20, 0],
                                        y: [0, -20, 0],
                                        rotate: [0, 180, 360]
                                    }}
                                    transition={{
                                        duration: 4 + i,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.5
                                    }}
                                    className={`absolute w-2 h-2 rounded-full ${i % 3 === 0 ? 'bg-blue-400' :
                                        i % 3 === 1 ? 'bg-cyan-400' :
                                            'bg-purple-400'
                                        }`}
                                    style={{
                                        left: `${50 + 40 * Math.cos((i * 60) * Math.PI / 180)}%`,
                                        top: `${50 + 40 * Math.sin((i * 60) * Math.PI / 180)}%`,
                                    }}
                                />
                            ))}

                            {/* Technology Labels */}
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                                <span className="px-3 py-1.5 text-xs font-semibold tracking-widest uppercase bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                                    QuantumWeave™
                                </span>
                            </div>
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                                <span className="px-3 py-1.5 text-xs font-semibold tracking-widest uppercase bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                                    Biometric AI
                                </span>
                            </div>
                            <div className="absolute top-1/2 -left-6 -translate-y-1/2">
                                <span className="px-3 py-1.5 text-xs font-semibold tracking-widest uppercase bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
                                    4D Motion
                                </span>
                            </div>
                            <div className="absolute top-1/2 -right-6 -translate-y-1/2">
                                <span className="px-3 py-1.5 text-xs font-semibold tracking-widest uppercase bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                                    Adaptive Fit
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Mission Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Header */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent" />
                                <span className="text-sm font-semibold tracking-widest uppercase text-blue-400">
                                    Our Mission
                                </span>
                            </div>
                            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] mb-8">
                                <span className="block bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                                    REDEFINING HUMAN
                                </span>
                                <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                                    PERFORMANCE
                                </span>
                            </h2>
                        </div>

                        {/* Mission Statements */}
                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Biomechanical Innovation</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        We engineer apparel that works in harmony with the human body,
                                        using advanced biomechanics to enhance natural movement patterns
                                        and optimize athletic performance.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-400 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Material Science</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Through proprietary fabric technologies like QuantumWeave™,
                                        we create adaptive materials that respond to environmental
                                        conditions and physiological demands in real-time.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Elite Standards</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Every product is validated through rigorous testing with
                                        professional athletes, ensuring our technology delivers
                                        measurable performance advantages at the highest levels.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Technology Principles */}
                        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
                            <h3 className="text-lg font-semibold mb-4 text-center">Our Technology Principles</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Adaptive", value: "Dynamic Response" },
                                    { label: "Precise", value: "Biometric Accuracy" },
                                    { label: "Sustainable", value: "Eco-Materials" },
                                    { label: "Proven", value: "Athlete Tested" }
                                ].map((principle, index) => (
                                    <div key={index} className="text-center p-3 bg-gray-900/30 rounded-lg border border-gray-700">
                                        <div className="text-sm font-medium text-white">{principle.label}</div>
                                        <div className="text-xs text-gray-400 mt-1">{principle.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="/technology"
                                className="group inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                <span>Explore Our Technology</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                            <a
                                href="/research"
                                className="group inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors ml-6"
                            >
                                <span>View Research Papers</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Performance Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20 lg:mt-32"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: "98%", label: "Performance Retention", sublabel: "After 500 washes" },
                            { value: "0.02s", label: "Reaction Time", sublabel: "Average improvement" },
                            { value: "24°C", label: "Temperature Range", sublabel: "Adaptive regulation" },
                            { value: "3.8x", label: "Moisture Wicking", sublabel: "Compared to cotton" }
                        ].map((metric, index) => (
                            <div key={index} className="text-center p-6 bg-gradient-to-b from-gray-900/30 to-black/30 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-gray-600 transition-all">
                                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                    {metric.value}
                                </div>
                                <div className="text-sm font-semibold mt-2">{metric.label}</div>
                                <div className="text-xs text-gray-400 mt-1">{metric.sublabel}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}