"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PartnershipsPage() {
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
                            Global Synergy
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.8] mb-12 uppercase italic">
                        Partner <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">Ships.</span>
                    </h1>

                    <p className="text-2xl text-muted-foreground max-w-3xl font-light leading-relaxed mb-12">
                        Collaborating with institutional research centers, professional sports leagues,
                        and tech innovators to scale the boundaries of human achievement.
                    </p>
                </motion.div>
            </section>

            <section className="px-8 md:px-12 lg:px-20 max-w-[1700px] mx-auto pb-48">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        "Institutional Research", "Gov-Tech Labs", "Pro-Sponsorships",
                        "Tactical Optimization", "Material Suppliers", "Distribution Partners"
                    ].map((type) => (
                        <div key={type} className="p-12 bg-card border border-border rounded-[2.5rem] hover:border-blue-600/30 transition-all cursor-default">
                            <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4">{type}</h3>
                            <div className="text-[0.6rem] font-black uppercase tracking-widest text-muted-foreground">Framework Alpha</div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
