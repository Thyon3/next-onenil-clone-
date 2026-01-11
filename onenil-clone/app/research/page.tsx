"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const researchPapers = [
    {
        id: "RP-2049-01",
        title: "QuantumWeave™: Molecular Memory in Polyamide Fibers",
        category: "Material Science",
        abstract: "Analyzing the structural integrity and kinetic energy return of memory-mapped polymers under high-intensity athletic load.",
        date: "MAR 2026"
    },
    {
        id: "RP-2048-08",
        title: "Biometric AI: Real-time Peripheral Nervous System Monitoring",
        category: "Biometrics",
        abstract: "Integration of sub-dermal sensors in compression gear for millisecond-latency neurological feedback loops.",
        date: "OCT 2025"
    },
    {
        id: "RP-2048-03",
        title: "Kinetic Architecture: The 4D Motion Synthesis",
        category: "Biomechanics",
        abstract: "Computational models of skeletal alignment optimization through variable-tension textile grids.",
        date: "MAR 2025"
    }
];

export default function ResearchPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="pt-48 pb-32 px-8 md:px-12 lg:px-20 max-w-[1700px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-0.5 w-12 bg-blue-600 rounded-full" />
                        <span className="text-[0.7rem] font-black tracking-[0.5em] uppercase text-blue-600">
                            Research & Development
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.8] mb-12 uppercase italic">
                        The <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">Science.</span>
                    </h1>

                    <p className="text-2xl text-muted-foreground max-w-3xl font-light leading-relaxed mb-12">
                        Transparent peer-reviewed research defining the next era of human performance.
                        Explore our internal library of proprietary material science and biomechanical studies.
                    </p>
                </motion.div>
            </section>

            {/* Research Papers Grid */}
            <section className="px-8 md:px-12 lg:px-20 max-w-[1700px] mx-auto pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {researchPapers.map((paper, index) => (
                        <motion.div
                            key={paper.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-card border border-border rounded-[2.5rem] p-10 hover:border-blue-600/30 transition-all duration-500 group"
                        >
                            <div className="flex justify-between items-start mb-10">
                                <span className="text-[0.6rem] font-black tracking-widest text-muted-foreground uppercase py-2 px-4 bg-muted rounded-full">
                                    {paper.id}
                                </span>
                                <span className="text-[0.6rem] font-black tracking-widest text-blue-600 uppercase">
                                    {paper.date}
                                </span>
                            </div>

                            <h3 className="text-2xl font-black uppercase tracking-tight italic mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                                {paper.title}
                            </h3>

                            <div className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-cyan-500 mb-6">
                                {paper.category}
                            </div>

                            <p className="text-muted-foreground font-light leading-relaxed mb-10">
                                {paper.abstract}
                            </p>

                            <button className="flex items-center gap-3 text-[0.7rem] font-black uppercase tracking-widest text-foreground hover:text-blue-600 transition-colors">
                                Download Protocol
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Lab Section CTA */}
            <section className="px-8 md:px-12 lg:px-20 max-w-[1700px] mx-auto pb-48">
                <div className="bg-foreground rounded-[4rem] p-12 md:p-32 text-center text-background overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-500/20" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative z-10"
                    >
                        <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-12">
                            Access Global <br />Lab Network
                        </h2>
                        <button className="px-12 py-6 bg-background text-foreground rounded-2xl font-black uppercase tracking-[0.4em] text-[0.7rem] hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-2xl">
                            Request Credentials
                        </button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
