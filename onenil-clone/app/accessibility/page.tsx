"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AccessibilityPage() {
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
                            Universal Access
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] mb-12 uppercase italic">
                        Access <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">Protocol.</span>
                    </h1>

                    <div className="prose prose-invert prose-lg max-w-none font-light text-muted-foreground leading-relaxed space-y-12 mt-20">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-foreground uppercase italic tracking-tight">01. Commitment</h2>
                            <p>
                                ONENIL is dedicated to ensuring digital infrastructure is accessible to all individuals,
                                regardless of physical or visual ability. We strictly adhere to WCAG 2.1 Level AA standards.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-foreground uppercase italic tracking-tight">02. Interface Compliance</h2>
                            <p>
                                Our platform utilizes high-contrast ratios, semantic HTML architectures, and ARIA-compliant attributes
                                to support screen readers and alternative input methods.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
