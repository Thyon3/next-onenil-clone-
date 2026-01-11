"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BiometricsPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />

            <section className="pt-48 pb-32 px-8 md:px-12 lg:px-20 max-w-[1700px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-0.5 w-12 bg-blue-600 rounded-full" />
                        <span className="text-[0.7rem] font-black tracking-[0.5em] uppercase text-blue-600">
                            Neural Integration
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.8] mb-12 uppercase italic">
                        Bio <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">Metrics.</span>
                    </h1>

                    <p className="text-2xl text-muted-foreground max-w-3xl font-light leading-relaxed mb-12">
                        The digitalization of the human peripheral nervous system.
                        We transform physiological data into actionable athletic intelligence.
                    </p>
                </motion.div>
            </section>

            <section className="px-8 md:px-12 lg:px-20 max-w-[1700px] mx-auto pb-48">
                <div className="bg-card rounded-[4rem] border border-border overflow-hidden p-12 md:p-32 relative">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]" />
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="relative z-10">
                            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-10">Real-time <br />Feedback Loop</h2>
                            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12">
                                Our sensors capture HRV, blood oxygenation, and muscle activation (EMG)
                                without direct skin contact, using the fabric itself as a conductive medium.
                            </p>
                            <div className="space-y-6">
                                {['Sub-millisecond latency', 'Medical-grade accuracy', 'Non-invasive telemetry'].map(item => (
                                    <div key={item} className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                        <span className="text-[0.7rem] font-black uppercase tracking-widest text-foreground">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="aspect-square bg-muted rounded-3xl border border-border flex items-center justify-center relative overflow-hidden"
                        >
                            {/* Decorative data visualization elements */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1),transparent)]" />
                            <div className="text-[0.6rem] font-black text-blue-600/30 uppercase tracking-[2em] -rotate-90">DATA_STREAM_v4.0</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
