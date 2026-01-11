"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MaterialsPage() {
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
                            Proprietary Textiles
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.8] mb-12 uppercase italic">
                        Material <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">Science.</span>
                    </h1>

                    <p className="text-2xl text-muted-foreground max-w-3xl font-light leading-relaxed mb-12">
                        Beyond fabric. We engineer molecular-level responses into every fiber,
                        creating gear that communicates with the athlete's body.
                    </p>
                </motion.div>
            </section>

            <section className="px-8 md:px-12 lg:px-20 max-w-[1700px] mx-auto pb-48">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {[
                        { name: "QuantumWeave™", tag: "Memory Molecule", detail: "Self-restoring polymer structure that adapts tension based on muscular contraction density." },
                        { name: "ThermoShunt™", tag: "Heat Flow", detail: "Micro-capillary system that moves heat 14x faster than standard performance polyester." },
                        { name: "AeroNano™", tag: "Drag Reduction", detail: "Surface architecture inspired by shark skin to minimize air resistance at high velocities." }
                    ].map((material, i) => (
                        <motion.div
                            key={material.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-12 bg-card border border-border rounded-[3rem] hover:border-cyan-500/30 transition-all duration-500"
                        >
                            <div className="w-16 h-1 bg-blue-600 mb-10 rounded-full" />
                            <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-4">{material.name}</h3>
                            <div className="text-[0.6rem] font-black uppercase tracking-widest text-cyan-500 mb-8">{material.tag}</div>
                            <p className="text-muted-foreground font-light leading-relaxed">{material.detail}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
