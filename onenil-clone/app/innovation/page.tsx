"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function InnovationPage() {
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
                            Future Roadmap
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.8] mb-12 uppercase italic">
                        The <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">Innovation.</span>
                    </h1>

                    <p className="text-2xl text-muted-foreground max-w-3xl font-light leading-relaxed mb-12">
                        Where we're going. Explore the active prototypes and theoretical frameworks
                        currently under development in our innovation hub.
                    </p>
                </motion.div>
            </section>

            <section className="px-8 md:px-12 lg:px-20 max-w-[1700px] mx-auto pb-48">
                <div className="space-y-12">
                    {[
                        { title: "Project: Neural-Link", status: "Theoretical", desc: "Direct sensory feedback from gear to the somatosensory cortex via non-invasive wave-forms." },
                        { title: "Project: Atmos-Gen", status: "Prototyping", desc: "Automated moisture-to-oxygen conversion integrated into extreme-weather headgear." },
                        { title: "Project: Gravity-Sync", status: "Active Research", desc: "Variable-weight distribution systems for high-altitude physiological conditioning." }
                    ].map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-12 md:p-20 bg-card border border-border rounded-[3rem] flex flex-col md:flex-row justify-between items-start md:items-center gap-12 group hover:border-blue-600/30 transition-all duration-500"
                        >
                            <div>
                                <div className="text-[0.6rem] font-black text-blue-600 mb-6 uppercase tracking-widest">{project.status}</div>
                                <h3 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4">{project.title}</h3>
                                <p className="text-xl text-muted-foreground font-light max-w-xl">{project.desc}</p>
                            </div>
                            <div className="w-20 h-20 rounded-2xl bg-muted border border-border group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
