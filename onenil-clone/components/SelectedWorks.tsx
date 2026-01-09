"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const collections = [
    {
        id: 'quantumweave-elite',
        category: 'Performance',
        title: 'QuantumWeave Elite Series',
        description: 'Advanced compression wear with real-time biometric tracking and adaptive temperature regulation.',
        img: '/images/quantumweave.jpg',
        stats: {
            performance: '+24%',
            weight: '180g',
            temperature: 'Adaptive'
        },
        color: '#0066CC'
    },
    {
        id: 'aeroflow-running',
        category: 'Running',
        title: 'AeroFlow Running Collection',
        description: 'Aerodynamic design with moisture-wicking nanotechnology for optimal marathon performance.',
        img: '/images/aeroflow.jpg',
        stats: {
            performance: '+18%',
            weight: '120g',
            aero: '98%'
        },
        color: '#00A3E0'
    },
    {
        id: 'recovery-plus',
        category: 'Recovery',
        title: 'Recovery+ Smart Fabric',
        description: 'Intelligent compression technology with infrared therapy and muscle oscillation support.',
        img: '/images/recovery.jpg',
        stats: {
            recovery: '+32%',
            compression: 'Medical Grade',
            therapy: 'IR + Vibration'
        },
        color: '#8B5CF6'
    },
];

export default function SelectedWorks() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section className="bg-background text-foreground py-24 md:py-32 px-5 md:px-10 lg:px-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-background" />
                <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-[1600px] mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent" />
                                <span className="text-sm font-semibold tracking-widest uppercase text-blue-400">
                                    Featured Innovation
                                </span>
                            </div>
                            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.9]">
                                <span className="block text-foreground opacity-80">
                                    ENGINEERED
                                </span>
                                <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                                    COLLECTIONS
                                </span>
                            </h2>
                        </div>
                        <div className="md:text-right">
                            <p className="text-lg text-muted-foreground max-w-md mb-4">
                                Cutting-edge athletic wear designed through biomechanical research and material innovation.
                            </p>
                            <Link
                                href="/archive"
                                className="group inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                <span>Explore All Collections</span>
                                <svg
                                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Stats Bar */}
                    <div className="grid grid-cols-3 gap-6 max-w-2xl">
                        {[
                            { value: "98%", label: "Athlete Satisfaction" },
                            { value: "2.4x", label: "Recovery Speed" },
                            { value: "24/7", label: "Biometric Tracking" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center p-4 bg-card backdrop-blur-sm rounded-xl border border-border">
                                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                    {stat.value}
                                </div>
                                <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Collections Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {collections.map((collection, index) => (
                        <motion.div
                            key={collection.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Link
                                href={`/work/${collection.id}`}
                                className="group block"
                                onMouseEnter={() => setHoveredId(collection.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <div className="relative overflow-hidden rounded-2xl border border-border bg-card backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500 h-full">
                                    {/* Image Container */}
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        {/* Placeholder Image Background */}
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                background: `linear-gradient(135deg, ${collection.color}20, ${collection.color}05)`,
                                                backgroundSize: '200% 200%',
                                                animation: hoveredId === collection.id ? 'gradientShift 3s ease infinite' : 'none'
                                            }}
                                        >
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-center p-8">
                                                    <div className="text-4xl mb-4">⚡</div>
                                                    <span className="text-lg font-bold text-white/80">{collection.title}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Stats Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                            <div className="grid grid-cols-3 gap-4">
                                                {Object.entries(collection.stats).map(([key, value]) => (
                                                    <div key={key} className="text-center">
                                                        <div className="text-lg font-bold text-white">{value}</div>
                                                        <div className="text-xs text-white/70 uppercase tracking-wider mt-1">
                                                            {key}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1.5 text-xs font-semibold tracking-widest uppercase bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 backdrop-blur-sm">
                                                {collection.category}
                                            </span>
                                        </div>

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                                            {collection.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-6 leading-relaxed">
                                            {collection.description}
                                        </p>

                                        {/* Tech Features */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {[
                                                'Adaptive Fit',
                                                'Moisture Control',
                                                'Temperature Regulation',
                                                'Performance Tracking'
                                            ].map((feature, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 text-xs bg-card/50 text-muted-foreground rounded-full border border-border"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <div className="flex items-center justify-between pt-4 border-t border-border">
                                            <span className="text-sm font-medium text-muted-foreground group-hover:text-blue-400 transition-colors">
                                                View Collection
                                            </span>
                                            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/20 transition-all">
                                                <svg
                                                    className="w-4 h-4 text-muted-foreground group-hover:text-blue-400 transition-colors"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover Effect Border */}
                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-2xl transition-all duration-500 pointer-events-none" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-block bg-card backdrop-blur-sm rounded-2xl border border-border p-8 md:p-12 max-w-2xl text-foreground">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                Ready to Elevate Your Performance?
                            </span>
                        </h3>
                        <p className="text-muted-foreground mb-8">
                            Discover how our technology can enhance your athletic capabilities.
                            Schedule a consultation with our performance specialists.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/shop"
                                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    Shop Collections
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </span>
                            </Link>
                            <Link
                                href="/contact"
                                className="group px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                            >
                                Book a Consultation
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* CSS for gradient animation */}
            <style jsx>{`
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </section>
    );
}