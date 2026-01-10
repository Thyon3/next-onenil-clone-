"use client";

import { motion } from "framer-motion";

export default function Mission() {
    return (
        <section className="bg-background text-foreground py-32 md:py-48 px-8 md:px-12 lg:px-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-background" />
                <div className="absolute top-1/2 left-1/4 w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/2 right-1/4 w-[1000px] h-[1000px] bg-cyan-600/5 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-[1700px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
                    {/* Technology Visualization */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative w-[min(600px,90vw)] h-[min(600px,90vw)]">
                            {/* Outer Circle - Quantum Technology */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border border-border rounded-full"
                            >
                                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                                <div className="absolute bottom-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                            </motion.div>

                            {/* Middle Circle - Biomechanics */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[15%] border border-border/50 rounded-full"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-foreground rounded-full" />
                            </motion.div>

                            {/* Inner Core - Performance Core */}
                            <div className="absolute inset-[30%]">
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative w-full h-full"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/10 to-purple-600/10 rounded-full blur-3xl" />
                                    <div className="absolute inset-0 bg-card border border-border rounded-full shadow-2xl flex items-center justify-center">
                                        <div className="text-center p-8">
                                            <div className="w-16 h-16 bg-foreground text-background rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-12">
                                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <div className="text-[0.65rem] font-black tracking-[0.4em] uppercase text-foreground">Athlon Core</div>
                                            <div className="text-[0.5rem] text-muted-foreground uppercase tracking-[0.2em] mt-1">v.2.049</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Floating Labels */}
                            {[
                                { label: "QuantumWeave™", pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-12" },
                                { label: "Biometric AI", pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-12" },
                                { label: "4D Motion", pos: "top-1/2 left-0 -translate-x-12 -translate-y-1/2" },
                                { label: "Adaptive Fit", pos: "top-1/2 right-0 translate-x-12 -translate-y-1/2" }
                            ].map((item, i) => (
                                <div key={i} className={`absolute ${item.pos}`}>
                                    <span className="px-6 py-3 text-[0.6rem] font-black tracking-[0.3em] uppercase bg-card/80 backdrop-blur-md text-foreground rounded-full border border-border shadow-sm">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Mission Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        {/* Header */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-0.5 w-12 bg-blue-600 rounded-full" />
                                <span className="text-[0.7rem] font-black tracking-[0.5em] uppercase text-blue-600">
                                    Our Mission
                                </span>
                            </div>
                            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.8] tracking-tighter uppercase italic text-foreground mb-12">
                                Human <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">Performance</span>
                            </h2>
                        </div>

                        {/* Mission Statements */}
                        <div className="space-y-12 mb-16">
                            {[
                                {
                                    title: "Biomechanical Innovation",
                                    desc: "Engineering apparel that works in harmony with the human body, using advanced biomechanics to enhance natural movement patterns.",
                                    icon: "M13 10V3L4 14h7v7l9-11h-7z"
                                },
                                {
                                    title: "Material Science",
                                    desc: "Through proprietary technologies like QuantumWeave™, we create adaptive materials that respond to environmental conditions.",
                                    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                },
                                {
                                    title: "Elite Standards",
                                    desc: "Validated through rigorous testing with professional athletes, ensuring delivers measurable performance advantages.",
                                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-8 group">
                                    <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={item.icon} />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black uppercase tracking-tight italic mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed font-light text-xl">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-8 items-center border-t border-border pt-12">
                            <a
                                href="/technology"
                                className="group flex items-center gap-4 text-[0.7rem] font-black uppercase tracking-[0.3em] text-foreground hover:text-blue-600 transition-colors"
                            >
                                <span>Explore Tech</span>
                                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-500">
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </a>
                            <a
                                href="/careers"
                                className="group flex items-center gap-4 text-[0.7rem] font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <span>Core Research</span>
                                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground group-hover:text-background transition-all duration-500">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Performance Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-32 lg:mt-48"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: "98%", label: "Retention", sublabel: "Industrial grade" },
                            { value: "0.02s", label: "Reaction", sublabel: "Avg improvement" },
                            { value: "24°C", label: "Regulation", sublabel: "Thermal balance" },
                            { value: "3.8x", label: "Wicking", sublabel: "Surface speed" }
                        ].map((metric, index) => (
                            <div key={index} className="p-10 bg-card border border-border rounded-[2.5rem] shadow-sm hover:border-blue-600/30 transition-all duration-500 group">
                                <div className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent italic tracking-tighter mb-4">
                                    {metric.value}
                                </div>
                                <div className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-foreground mb-1">{metric.label}</div>
                                <div className="text-[0.6rem] font-black uppercase tracking-[0.1em] text-muted-foreground">{metric.sublabel}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}