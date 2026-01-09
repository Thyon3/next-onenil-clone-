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
        <main className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 z-0">
                {/* Base gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />

                {/* Animated orbs */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px),
                                        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)`,
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
                                <span className="block bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                                    INNOVATION
                                </span>
                                <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                                    ARCHIVE
                                </span>
                            </motion.h1>
                            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
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
                                    <div key={index} className="text-center p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800">
                                        <div className="text-xl font-bold text-white">{stat.value}</div>
                                        <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{stat.label}</div>
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
                            <p className="text-gray-400">Refine by category or year</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="px-4 py-2 text-sm border border-gray-700 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-colors">
                                Reset Filters
                            </button>
                            <button className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                                Sort: Latest
                            </button>
                        </div>
                    </div>

                    {/* Category Filters */}
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-px w-6 bg-gradient-to-r from-blue-500 to-transparent" />
                            <span className="text-sm font-semibold tracking-widest uppercase text-blue-400">Categories</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`px-4 py-2 text-sm rounded-lg border transition-all ${category === 'All'
                                        ? 'bg-blue-500/20 border-blue-500 text-blue-400'
                                        : 'bg-gray-900/30 border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-800/30'
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
                            <span className="text-sm font-semibold tracking-widest uppercase text-cyan-400">Years</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {years.map((year) => (
                                <button
                                    key={year}
                                    className={`px-4 py-2 text-sm rounded-lg border transition-all ${year === 'All'
                                        ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400'
                                        : 'bg-gray-900/30 border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-800/30'
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
                                <div className="relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm hover:border-gray-600 transition-all duration-500 h-full flex flex-col">
                                    {/* Card Header */}
                                    <div className="p-5 border-b border-gray-800">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="px-3 py-1 text-xs font-semibold tracking-widest uppercase bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                                                {collection.category}
                                            </span>
                                            <span className="text-sm text-gray-400">
                                                {collection.year}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                                            {collection.title}
                                        </h3>

                                        <div className="flex items-center gap-2 mb-3">
                                            <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                            <span className="text-sm text-gray-300">{collection.tech}</span>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-5 flex-grow">
                                        <div className="mb-4">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-xs text-gray-400 uppercase tracking-wider">Performance Gain</span>
                                                <span className="text-sm font-bold text-green-400">{collection.performance}</span>
                                            </div>
                                            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                                                    style={{ width: collection.performance }}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-400">Material Weight</span>
                                                <span className="text-white">Ultra-light</span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-400">Moisture Wicking</span>
                                                <span className="text-white">Advanced</span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-400">Breathability</span>
                                                <span className="text-white">Optimal</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Footer */}
                                    <div className="p-5 pt-0">
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                                            <span className="text-sm font-medium text-gray-400 group-hover:text-blue-400 transition-colors">
                                                View Details
                                            </span>
                                            <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/20 transition-all">
                                                <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    className="mt-16 pt-12 border-t border-gray-800"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold mb-2">Continuous Innovation</h3>
                            <p className="text-gray-400 max-w-xl">
                                Our archive represents years of research, development, and athlete testing.
                                Each collection pushes the boundaries of what's possible in athletic performance.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-6 py-3 border border-gray-700 text-white font-medium rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all">
                                Load More Collections
                            </button>
                            <Link
                                href="/research"
                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all text-center"
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