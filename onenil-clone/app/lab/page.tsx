"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LabPage() {
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
                            Physical Infrastructure
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.8] mb-12 uppercase italic">
                        The <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">Lab.</span>
                    </h1>

                    <p className="text-2xl text-muted-foreground max-w-3xl font-light leading-relaxed mb-12">
                        State-of-the-art testing grounds where human biology meets mechanical engineering.
                        Our laboratories are equipped for hyper-specific simulation and analysis.
                    </p>
                </motion.div>
            </section>

            <section className="px-8 md:px-12 lg:px-20 max-w-[1700px] mx-auto pb-48">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {[
                        { title: "Kinetic Tracking", desc: "48-camera motion capture system for sub-millimeter movement analysis." },
                        { title: "Environment Chamber", desc: "Simulation from -20°C to +50°C with variable humidity and oxygen levels." },
                        { title: "Impact Testing", desc: "Proprietary high-velocity projectiles testing material shear strength." },
                        { title: "Metabolic Monitoring", desc: "Real-time gas exchange and energy expenditure mapping." }
                    ].map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-12 bg-card border border-border rounded-[3rem] group hover:border-blue-600/30 transition-all duration-500"
                        >
                            <div className="text-[0.7rem] font-black text-blue-600 mb-6 uppercase tracking-widest italic">Core Module 0{i + 1}</div>
                            <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-6">{feature.title}</h3>
                            <p className="text-xl text-muted-foreground font-light leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
