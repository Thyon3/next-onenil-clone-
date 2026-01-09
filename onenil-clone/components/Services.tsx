"use client";

import { motion } from "framer-motion";
import {
    FiCpu,
    FiTrendingUp,
    FiThermometer,
    FiHeart,
    FiActivity,
    FiTarget,
    FiZap,
    FiShield
} from 'react-icons/fi';

const technologies = [
    {
        title: 'QuantumWeave™ Fabric',
        description: 'Proprietary adaptive fabric technology that dynamically regulates temperature and moisture based on activity level and environmental conditions.',
        icon: <FiCpu className="w-8 h-8" />,
        color: 'from-blue-500 to-cyan-400',
        stats: ['98% Moisture Wicking', 'Adaptive Temperature', '4-Way Stretch']
    },
    {
        title: 'Biometric Intelligence',
        description: 'Real-time biometric tracking with AI-powered insights for performance optimization and injury prevention.',
        icon: <FiActivity className="w-8 h-8" />,
        color: 'from-purple-500 to-pink-400',
        stats: ['24/7 Heart Rate', 'Muscle Activation', 'Recovery Analysis']
    },
    {
        title: '4D Motion Capture',
        description: 'Advanced motion analysis technology that studies biomechanics to optimize athletic movement patterns.',
        icon: <FiTarget className="w-8 h-8" />,
        color: 'from-green-500 to-emerald-400',
        stats: ['360° Analysis', 'Real-time Feedback', 'Form Correction']
    },
    {
        title: 'ThermoAdapt System',
        description: 'Smart temperature regulation that adapts to environmental conditions, keeping athletes at optimal performance temperature.',
        icon: <FiThermometer className="w-8 h-8" />,
        color: 'from-orange-500 to-red-400',
        stats: ['±10°C Range', 'Instant Adaptation', 'Energy Efficient']
    },
    {
        title: 'Performance Analytics',
        description: 'Comprehensive data analytics platform that provides actionable insights for performance enhancement.',
        icon: <FiTrendingUp className="w-8 h-8" />,
        color: 'from-indigo-500 to-purple-400',
        stats: ['Predictive Analytics', 'Custom Training Plans', 'Progress Tracking']
    },
    {
        title: 'Recovery Optimization',
        description: 'Advanced recovery technology that accelerates muscle repair and reduces recovery time between sessions.',
        icon: <FiHeart className="w-8 h-8" />,
        color: 'from-pink-500 to-rose-400',
        stats: ['Compression Therapy', 'IR Technology', 'Muscle Oscillation']
    },
    {
        title: 'Power Transfer System',
        description: 'Patented technology that enhances energy transfer from muscles to movement, improving efficiency.',
        icon: <FiZap className="w-8 h-8" />,
        color: 'from-yellow-500 to-amber-400',
        stats: ['15% Efficiency Gain', 'Reduced Fatigue', 'Enhanced Output']
    },
    {
        title: 'Impact Protection',
        description: 'Advanced impact dispersion technology that protects joints and muscles during high-intensity activities.',
        icon: <FiShield className="w-8 h-8" />,
        color: 'from-gray-500 to-slate-400',
        stats: ['35% Impact Reduction', 'Joint Support', 'Flexible Protection']
    }
];

export default function Services() {
    return (
        <section className="bg-background text-foreground py-24 md:py-32 px-5 md:px-10 lg:px-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-background" />
                <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px]" />
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
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
                        <div className="lg:w-2/3">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent" />
                                <span className="text-sm font-semibold tracking-widest uppercase text-blue-400">
                                    Our Technology
                                </span>
                            </div>
                            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1]">
                                <span className="block text-foreground opacity-80">
                                    ENGINEERED FOR
                                </span>
                                <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                                    PEAK PERFORMANCE
                                </span>
                            </h2>
                        </div>
                        <div className="lg:w-1/3">
                            <p className="text-lg text-gray-300 max-w-md">
                                We develop proprietary technologies that enhance athletic performance through
                                material science, biomechanics, and data intelligence.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Technology Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-xl border border-border bg-card backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500 h-full">
                                {/* Icon */}
                                <div className="p-6">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <div className="text-white">
                                            {tech.icon}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                                        {tech.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {tech.description}
                                    </p>

                                    {/* Stats */}
                                    <div className="space-y-2">
                                        {tech.stats.map((stat, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
                                                <span className="text-sm text-muted-foreground">{stat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                {/* Corner Accent */}
                                <div className={`absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-bl ${tech.color} rounded-bl-3xl`} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Technology Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-20"
                >
                    <div className="bg-card backdrop-blur-sm rounded-2xl border border-border p-8 md:p-12">
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { value: "8", label: "Proprietary Technologies", description: "Patented innovations" },
                                { value: "15+", label: "Years Research", description: "Material science development" },
                                { value: "500+", label: "Athlete Tests", description: "Professional validation" },
                                { value: "98%", label: "Success Rate", description: "Performance improvement" }
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
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-block bg-card backdrop-blur-sm rounded-2xl border border-border p-8 md:p-12 max-w-2xl text-foreground">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                Experience the Difference
                            </span>
                        </h3>
                        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                            Discover how our technology can transform your athletic performance.
                            Schedule a consultation with our performance specialists.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/technology"
                                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    Explore Technology
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </span>
                            </a>
                            <a
                                href="/demo"
                                className="group px-8 py-4 border border-gray-700 text-white font-semibold rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                            >
                                Book a Demo
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}