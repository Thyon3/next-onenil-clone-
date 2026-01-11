"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LogisticsPage() {
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
                            Global Distribution
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.8] mb-12 uppercase italic">
                        Global <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">Logistics.</span>
                    </h1>

                    <p className="text-2xl text-muted-foreground max-w-3xl font-light leading-relaxed mb-12">
                        Ultra-low latency fulfillment powered by autonomous sorting and
                        real-time cross-continental supply chain tracking.
                    </p>
                </motion.div>
            </section>

            <section className="px-8 md:px-12 lg:px-20 max-w-[1700px] mx-auto pb-48">
                <div className="bg-card rounded-[3rem] border border-border p-12 md:p-32">
                    <div className="grid md:grid-cols-4 gap-12 text-center">
                        {[
                            { label: "Active Hubs", val: "14" },
                            { label: "Countries Served", val: "160+" },
                            { label: "Avg Delivery", val: "48H" },
                            { label: "Sustainability", val: "94%" }
                        ].map(stat => (
                            <div key={stat.label}>
                                <div className="text-[0.7rem] font-black uppercase tracking-widest text-blue-600 mb-4 italic">{stat.label}</div>
                                <div className="text-6xl font-black italic tracking-tighter">{stat.val}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
