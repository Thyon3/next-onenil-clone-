"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const collections = [
    { id: 1, title: 'QuantumWeave Elite', year: '2024', category: 'Performance', tech: 'Adaptive Fabric', performance: '+24%' },
    { id: 2, title: 'AeroFlow Running', year: '2024', category: 'Running', tech: 'Nanotech Weave', performance: '+18%' },
    { id: 3, title: 'Recovery+ Smart', year: '2023', category: 'Recovery', tech: 'Bio-Feedback', performance: '+32%' },
    { id: 4, title: 'HyperFlex Training', year: '2023', category: 'Training', tech: '4D Knit', performance: '+28%' },
    { id: 5, title: 'ThermoRegulate Pro', year: '2023', category: 'Extreme', tech: 'Phase Change', performance: '+41%' },
    { id: 6, title: 'Velocity Cycling', year: '2023', category: 'Cycling', tech: 'Aero Dynamics', performance: '+22%' },
    { id: 7, title: 'AquaSphere Swim', year: '2022', category: 'Swimming', tech: 'Hydro Dynamic', performance: '+19%' },
    { id: 8, title: 'Altitude Mountain', year: '2022', category: 'Outdoor', tech: 'Adaptive Insulation', performance: '+35%' },
    { id: 9, title: 'Reflex Combat', year: '2022', category: 'Combat', tech: 'Impact Dispersion', performance: '+27%' },
    { id: 10, title: 'Enduro Marathon', year: '2022', category: 'Endurance', tech: 'Moisture Matrix', performance: '+31%' },
    { id: 11, title: 'Zenith Basketball', year: '2021', category: 'Basketball', tech: 'Jump Technology', performance: '+26%' },
    { id: 12, title: 'Vortex Soccer', year: '2021', category: 'Soccer', tech: 'Ball Control', performance: '+23%' },
];

const categories = ['All', 'Performance', 'Running', 'Recovery', 'Training', 'Extreme', 'Cycling', 'Swimming', 'Outdoor', 'Combat', 'Endurance', 'Basketball', 'Soccer'];
const years = ['All', '2024', '2023', '2022', '2021'];

export default function Archive() {
    return (
        <main className="min-h-screen bg-background text-foreground relative overflow-hidden transition-colors duration-300">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 z-0">
                {/* Base gradient */}
                <div className="absolute inset-0 bg-background" />

                {/* Animated orbs */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(90deg, var(--border-color) 1px, transparent 1px),
                                        linear-gradient(var(--border-color) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }} />
                </div>
            </div>

            <section className="relative z-10 px-5 md:px-10 lg:px-20 max-w-[1800px] mx-auto pt-24 pb-20">
                {/* Header */}
                <div className="mb-16">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-12">
                        <div className="lg:w-2/3">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-tight leading-[0.9] mb-6"
                            >
                                <span className="block text-foreground opacity-90">
                                    INNOVATION
                                </span>
                                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                    ARCHIVE
                                </span>
                            </motion.h1>
                            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                                Explore our complete collection of performance-engineered athletic wear.
                                Every piece represents a breakthrough in sports technology and material science.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:w-1/3"
                        >
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { value: "12", label: "Collections" },
                                    { value: "28%", label: "Avg. Gain" },
                                    { value: "4", label: "Years" }
                                ].map((stat, index) => (
                                    <div key={index} className="text-center p-4 bg-card backdrop-blur-sm rounded-xl border border-border shadow-sm">
                                        <div className="text-xl font-bold text-foreground">{stat.value}</div>
                                        <div className="text-[0.65rem] text-muted-foreground mt-1 uppercase tracking-[0.2em] font-bold">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Filter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-12"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Filter Collections</h2>
                            <p className="text-muted-foreground">Refine by category or year</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="px-4 py-2 text-sm border border-border rounded-lg bg-card hover:border-blue-500 hover:bg-blue-500/5 transition-colors shadow-sm font-medium">
                                Reset Filters
                            </button>
                            <button className="px-4 py-2 text-sm bg-blue-600 text-white font-bold uppercase tracking-widest rounded-lg hover:shadow-lg hover:shadow-blue-600/20 transition-all">
                                Sort: Latest
                            </button>
                        </div>
                    </div>

                    {/* Category Filters */}
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-px w-6 bg-gradient-to-r from-blue-500 to-transparent" />
                            <span className="text-[0.65rem] font-black tracking-widest uppercase text-blue-500">Categories</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`px-4 py-2 text-[0.7rem] font-bold uppercase tracking-widest rounded-lg border transition-all ${category === 'All'
                                        ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20'
                                        : 'bg-card border-border text-muted-foreground hover:border-blue-500 hover:text-blue-500'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Year Filters */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-px w-6 bg-gradient-to-r from-cyan-500 to-transparent" />
                            <span className="text-[0.65rem] font-black tracking-widest uppercase text-cyan-500">Years</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {years.map((year) => (
                                <button
                                    key={year}
                                    className={`px-4 py-2 text-[0.7rem] font-bold uppercase tracking-widest rounded-lg border transition-all ${year === 'All'
                                        ? 'bg-cyan-600 border-cyan-600 text-white shadow-lg shadow-cyan-600/20'
                                        : 'bg-card border-border text-muted-foreground hover:border-cyan-500 hover:text-cyan-500'
                                        }`}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Collections Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {collections.map((collection, index) => (
                        <motion.div
                            key={collection.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                href={`/work/${collection.id}`}
                                className="group block h-full"
                            >
                                <div className="relative overflow-hidden rounded-xl border border-border bg-card backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 h-full flex flex-col shadow-sm">
                                    {/* Card Header */}
                                    <div className="p-5 border-b border-border">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="px-3 py-1 text-[0.6rem] font-black tracking-widest uppercase bg-blue-500/10 text-blue-500 rounded-full border border-blue-500/20">
                                                {collection.category}
                                            </span>
                                            <span className="text-xs font-bold text-muted-foreground">
                                                {collection.year}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 uppercase tracking-tight">
                                            {collection.title}
                                        </h3>

                                        <div className="flex items-center gap-2 mb-3">
                                            <svg className="w-4 h-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{collection.tech}</span>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-5 flex-grow">
                                        <div className="mb-4">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-[0.65rem] text-muted-foreground uppercase tracking-widest font-bold">Performance Gain</span>
                                                <span className="text-sm font-black text-green-500">{collection.performance}</span>
                                            </div>
                                            <div className="w-full h-1.5 bg-background border border-border rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
                                                    style={{ width: collection.performance }}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between text-xs">
                                                <span className="text-muted-foreground uppercase tracking-wider font-bold">Material Weight</span>
                                                <span className="text-foreground font-black uppercase">Ultra-light</span>
                                            </div>
                                            <div className="flex items-center justify-between text-xs">
                                                <span className="text-muted-foreground uppercase tracking-wider font-bold">Moisture Wicking</span>
                                                <span className="text-foreground font-black uppercase">Advanced</span>
                                            </div>
                                            <div className="flex items-center justify-between text-xs">
                                                <span className="text-muted-foreground uppercase tracking-wider font-bold">Breathability</span>
                                                <span className="text-foreground font-black uppercase">Optimal</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Footer */}
                                    <div className="p-5 pt-0">
                                        <div className="flex items-center justify-between pt-4 border-t border-border">
                                            <span className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-muted-foreground group-hover:text-blue-600 transition-colors">
                                                View Details
                                            </span>
                                            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all">
                                                <svg className="w-4 h-4 text-muted-foreground group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Load More / Archive Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 pt-12 border-t border-border"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-black uppercase tracking-tight text-foreground mb-2">Continuous Innovation</h3>
                            <p className="text-muted-foreground max-w-xl font-light">
                                Our archive represents years of research, development, and athlete testing.
                                Each collection pushes the boundaries of what's possible in athletic performance.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-6 py-3 border border-border text-foreground font-bold uppercase tracking-widest text-sm rounded-lg hover:border-blue-500 hover:bg-blue-500/5 transition-all shadow-sm">
                                Load More Collections
                            </button>
                            <Link
                                href="/research"
                                className="px-6 py-3 bg-blue-600 text-white font-bold uppercase tracking-widest text-sm rounded-lg hover:shadow-lg hover:shadow-blue-600/20 transition-all text-center"
                            >
                                View Research Papers
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}