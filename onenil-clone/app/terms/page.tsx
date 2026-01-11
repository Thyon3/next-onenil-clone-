"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
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
                            Operating Guidelines
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] mb-12 uppercase italic">
                        Terms of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">Operations.</span>
                    </h1>

                    <div className="prose prose-invert prose-lg max-w-none font-light text-muted-foreground leading-relaxed space-y-12 mt-20">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-foreground uppercase italic tracking-tight">01. Intellectual Infrastructure</h2>
                            <p>
                                All material science, biometric algorithms, and textile architectures are proprietary intellectual property.
                                Unauthorized reverse engineering of gear or software systems is strictly prohibited.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-foreground uppercase italic tracking-tight">02. Usage Authorization</h2>
                            <p>
                                Gear is intended for the specific performance parameters outlined in individual product manuals.
                                ONENIL is not liable for performance variances resulting from unauthorized modifications or non-standard environments.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
