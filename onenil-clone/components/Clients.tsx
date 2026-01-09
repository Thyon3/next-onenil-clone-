"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const partners = [
    { name: 'NIKE', category: 'Performance', logo: '⚡', description: 'Performance Innovation Partner' },
    { name: 'UNDER ARMOUR', category: 'Training', logo: '🛡️', description: 'Training Technology Alliance' },
    { name: 'GARMIN', category: 'Wearable Tech', logo: '⌚', description: 'Biometric Integration Partner' },
    { name: 'WILSON', category: 'Sports Equipment', logo: '🎾', description: 'Smart Equipment Collaboration' },
    { name: 'STRYKER', category: 'Medical', logo: '🏥', description: 'Sports Medicine Research' },
    { name: 'MIT SPORTS LAB', category: 'Research', logo: '🔬', description: 'Biomechanics Research Partner' },
    { name: 'NVIDIA', category: 'Technology', logo: '💻', description: 'AI Performance Analytics' },
    { name: 'THERMAPORE', category: 'Materials', logo: '🧪', description: 'Advanced Materials Science' },
    { name: 'US OLYMPIC COMMITTEE', category: 'Elite Sports', logo: '🥇', description: 'Official Innovation Partner' },
    { name: 'STANFORD ATHLETICS', category: 'University', logo: '🎓', description: 'University Research Program' },
    { name: 'WHOOP', category: 'Recovery', logo: '📊', description: 'Recovery Analytics Integration' },
    { name: 'ARCTERYX', category: 'Extreme Sports', logo: '⛰️', description: 'Extreme Conditions Testing' },
];

const categories = ['All', 'Performance', 'Training', 'Wearable Tech', 'Sports Equipment', 'Medical', 'Research', 'Technology', 'Materials', 'Elite Sports', 'University', 'Recovery', 'Extreme Sports'];

export default function Clients() {
    const [hoveredPartner, setHoveredPartner] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredPartners = activeCategory === 'All'
        ? partners
        : partners.filter(partner => partner.category === activeCategory);

    return (
        <section className="bg-background text-foreground py-24 md:py-32 px-5 md:px-10 lg:px-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-background" />
                <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-[1600px] mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                        <span className="text-sm font-semibold tracking-widest uppercase text-blue-400">
                            Strategic Partnerships
                        </span>
                        <div className="h-px w-8 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                    </div>

                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] mb-6">
                        <span className="block text-foreground opacity-80">
                            INNOVATING WITH
                        </span>
                        <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                            INDUSTRY LEADERS
                        </span>
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        Collaborating with global leaders in sports technology, research, and innovation
                        to push the boundaries of athletic performance.
                    </p>
                </motion.div>

                {/* Category Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${activeCategory === category
                                    ? 'bg-blue-500/20 border-blue-500 text-blue-400'
                                    : 'bg-card border-border text-muted-foreground hover:border-gray-400 hover:text-foreground'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Partners Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                    {filteredPartners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="relative"
                            onMouseEnter={() => setHoveredPartner(index)}
                            onMouseLeave={() => setHoveredPartner(null)}
                        >
                            <div className={`group relative overflow-hidden rounded-xl border bg-card backdrop-blur-sm transition-all duration-500 h-full ${hoveredPartner === index
                                ? 'border-blue-500/30 scale-105 shadow-xl shadow-blue-500/10'
                                : 'border-border'
                                }`}>
                                {/* Partner Logo */}
                                <div className="aspect-square flex flex-col items-center justify-center p-6">
                                    <div className={`text-3xl md:text-4xl mb-4 transition-transform duration-500 ${hoveredPartner === index ? 'scale-125' : ''
                                        }`}>
                                        {partner.logo}
                                    </div>
                                    <div className="text-center">
                                        <div className={`font-bold text-sm md:text-base transition-colors duration-300 ${hoveredPartner === index ? 'text-blue-400' : 'text-foreground'
                                            }`}>
                                            {partner.name}
                                        </div>
                                        <div className="text-xs text-muted-foreground mt-1">{partner.category}</div>
                                    </div>
                                </div>

                                {/* Hover Overlay */}
                                {hoveredPartner === index && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10"
                                    />
                                )}

                                {/* Description Tooltip */}
                                <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 bg-card border border-border rounded-lg shadow-xl transition-all duration-300 ${hoveredPartner === index
                                    ? 'opacity-100 translate-y-0 visible'
                                    : 'opacity-0 translate-y-2 invisible'
                                    }`} style={{ minWidth: '200px' }}>
                                    <div className="text-sm font-medium text-foreground mb-1">{partner.name}</div>
                                    <div className="text-xs text-muted-foreground">{partner.description}</div>
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-card rotate-45 border-r border-b border-border"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Partnership Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20"
                >
                    <div className="bg-card backdrop-blur-sm rounded-2xl border border-border p-8 md:p-12">
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { value: "12+", label: "Global Partners", description: "Across 8 countries" },
                                { value: "3", label: "Joint Patents", description: "Innovation collaborations" },
                                { value: "50+", label: "Research Papers", description: "Published studies" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                        {stat.value}
                                    </div>
                                    <div className="text-lg font-semibold mt-2">{stat.label}</div>
                                    <div className="text-sm text-gray-400 mt-1">{stat.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Interested in partnering with us to advance sports technology?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/partnerships"
                            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Partnership Opportunities
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </a>
                        <a
                            href="/contact"
                            className="group px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                        >
                            Contact Partnership Team
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Animated Border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30" />
        </section>
    );
}