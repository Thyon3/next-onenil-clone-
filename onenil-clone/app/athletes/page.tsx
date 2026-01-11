"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const athletes = [
    {
        name: "Marcus Thorne",
        discipline: "Track & Field",
        bio: "Setting new world records in the 100m sprint using our Quantum-Z spikes.",
        location: "United Kingdom",
        stats: { recovery: "98%", efficiency: "+12%" }
    },
    {
        name: "Elena Petrov",
        discipline: "Alpine Skiing",
        bio: "Optimizing descent trajectories with real-time biometric suit feedback.",
        location: "Switzerland",
        stats: { aero: "-14%", stability: "+22%" }
    },
    {
        name: "Kenji Sato",
        discipline: "Endurance Cycling",
        bio: "Pioneering long-distance metabolic management through integrated skin-sensors.",
        location: "Japan",
        stats: { endurance: "+30%", vo2max: "Elite" }
    }
];

export default function AthletesPage() {
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
                            Elite Partners
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.8] mb-12 uppercase italic">
                        The <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">Athletes.</span>
                    </h1>

                    <p className="text-2xl text-muted-foreground max-w-3xl font-light leading-relaxed mb-12">
                        Collaboration with the world's most disciplined human beings.
                        Testing the edge of prototype technology in the heat of competition.
                    </p>
                </motion.div>
            </section>

            <section className="px-8 md:px-12 lg:px-20 max-w-[1700px] mx-auto pb-48">
                <div className="grid grid-cols-1 gap-8">
                    {athletes.map((athlete, index) => (
                        <motion.div
                            key={athlete.name}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-card border border-border rounded-[3rem] overflow-hidden group"
                        >
                            <div className="grid lg:grid-cols-2">
                                <div className="relative h-[600px] bg-muted">
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                                    <div className="absolute bottom-12 left-12 z-20">
                                        <div className="text-[0.7rem] font-black tracking-[0.3em] uppercase text-blue-600 mb-2">{athlete.location}</div>
                                        <h3 className="text-5xl font-black uppercase italic tracking-tighter">{athlete.name}</h3>
                                    </div>
                                    <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/0 transition-all duration-700" />
                                </div>
                                <div className="p-12 md:p-20 flex flex-col justify-center">
                                    <div className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-cyan-500 mb-6 italic">
                                        {athlete.discipline}
                                    </div>
                                    <p className="text-3xl font-light text-foreground leading-snug mb-12">
                                        "{athlete.bio}"
                                    </p>
                                    <div className="grid grid-cols-2 gap-8 pt-12 border-t border-border">
                                        {Object.entries(athlete.stats).map(([label, value]) => (
                                            <div key={label}>
                                                <div className="text-[0.6rem] font-black uppercase tracking-widest text-muted-foreground mb-2">{label}</div>
                                                <div className="text-4xl font-black italic uppercase tracking-tighter">{value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
