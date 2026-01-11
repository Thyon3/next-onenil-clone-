"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CookiesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />

            <section className="pt-48 pb-32 px-8 md:px-12 lg:px-20 max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-0.5 w-12 bg-blue-600 rounded-full" />
                        <span className="text-[0.7rem] font-black tracking-[0.5em] uppercase text-blue-600">
                            Digital Fingerprinting
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] mb-12 uppercase italic">
                        Digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">Tracking.</span>
                    </h1>

                    <div className="prose prose-invert prose-lg max-w-none font-light text-muted-foreground leading-relaxed space-y-12 mt-20">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-foreground uppercase italic tracking-tight">01. Purpose</h2>
                            <p>
                                We utilize micro-tracking modules to maintain session persistence and optimize interface delivery speeds.
                                This ensures the ecosystem responds dynamically to your browsing preferences.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-foreground uppercase italic tracking-tight">02. Control Protocols</h2>
                            <p>
                                All digital tracking can be initialized or terminated via your browser's core security settings.
                                Note that disabling these modules may latency-affect specific interactive modules.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
