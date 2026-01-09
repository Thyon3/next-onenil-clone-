"use client";

import React from 'react';
import NextImage from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FiZap, FiActivity, FiShield, FiCpu, FiWind, FiLayers, FiCheckCircle } from 'react-icons/fi';

const technologies = [
    {
        id: 'quantum-weave',
        title: 'Quantum-Weave™ Elite',
        subtitle: 'The Future of Compression',
        description: 'Our proprietary carbon-infused fiber structure that provides dynamic support while maintaining zero-drag aerodynamics. It adapts to muscle vibration in real-time.',
        icon: <FiLayers />,
        stats: [
            { label: 'Muscle Support', value: '+42%' },
            { label: 'Drag Reduction', value: '18%' },
            { label: 'Breathability', value: 'High' }
        ],
        color: 'from-blue-600 to-cyan-400'
    },
    {
        id: 'aeroflow',
        title: 'Aeroflow™ Pro',
        subtitle: 'Engineered Ventilation',
        description: 'Micro-perforation zones mapped to thermal output data from elite athletes. Maximizes heat dissipation without compromising durability.',
        icon: <FiWind />,
        stats: [
            { label: 'Cooling Rate', value: 'x2.4' },
            { label: 'Evaporation', value: '+65%' },
            { label: 'Weight', value: '95g' }
        ],
        color: 'from-cyan-500 to-blue-600'
    },
    {
        id: 'biometric-ai',
        title: 'Biometric AI',
        subtitle: 'Digital Performance Integration',
        description: 'Seamlessly integrated sensors that track muscle fatigue, heart rate variability, and movement efficiency through our proprietary App.',
        icon: <FiCpu />,
        stats: [
            { label: 'Sensor Precision', value: '0.01ms' },
            { label: 'Data Points', value: '1M+' },
            { label: 'Battery Life', value: '48h' }
        ],
        color: 'from-purple-600 to-pink-500'
    }
];

export default function TechnologyPage() {
    const router = useRouter();
    return (
        <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-full bg-blue-600/10 blur-[120px] rounded-full" />
                </div>

                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="h-px w-12 bg-blue-500" />
                            <span className="text-sm font-bold tracking-[0.4em] uppercase text-blue-400">Innovation Lab</span>
                            <div className="h-px w-12 bg-blue-500" />
                        </div>
                        <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-black tracking-[-0.05em] leading-[0.85] uppercase mb-8">
                            <span className="block text-white">The Tech</span>
                            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">Behind Elite</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                            We don't just make gear. We engineer performance multipliers through years of R&D in our dedicated sports science facilities.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
            </section>

            {/* Core Tech Grid */}
            <section className="px-6 py-24 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative p-8 bg-gray-950/50 border border-white/5 rounded-[2rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500"
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-3xl text-white mb-8 group-hover:scale-110 transition-transform`}>
                                {tech.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-white">{tech.title}</h3>
                            <p className="text-sm text-blue-400 font-bold uppercase tracking-widest mb-4">{tech.subtitle}</p>
                            <p className="text-gray-400 mb-8 leading-relaxed font-light">{tech.description}</p>

                            <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8">
                                {tech.stats.map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-lg font-bold text-white mb-1">{stat.value}</div>
                                        <div className="text-[0.65rem] text-gray-500 uppercase tracking-widest leading-none">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-all" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* In-depth Feature */}
            <section className="py-32 px-6">
                <div className="max-w-[1400px] mx-auto bg-gray-950 rounded-[3rem] border border-white/5 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                        <div className="p-12 lg:p-20 order-2 lg:order-1">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">Biometric integration</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-8">
                                Data-Driven <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Excellence.</span>
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-12 font-light">
                                Our garments act as a second skin that listens to your body. By integrating silver-fiber sensors directly into the knit, we can capture medical-grade telemetry without the bulk of traditional wearables.
                            </p>

                            <div className="space-y-6">
                                {[
                                    'Real-time muscle activation feedback',
                                    'Predictive fatigue alerts',
                                    'Form correction through haptic feedback',
                                    'Heart rate variability monitoring'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-white font-medium">
                                        <div className="w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                                            <FiCheckCircle />
                                        </div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-square lg:aspect-auto h-full min-h-[500px] order-1 lg:order-2">
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 to-transparent z-10" />
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale opacity-40" />
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.05, 1],
                                        opacity: [0.5, 0.8, 0.5]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="w-64 h-64 border-2 border-cyan-500/30 rounded-full flex items-center justify-center"
                                >
                                    <div className="w-48 h-48 border border-cyan-500/50 rounded-full animate-ping" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto p-16 bg-gradient-to-b from-blue-600/10 to-transparent rounded-[3rem] border border-blue-500/10">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-8">Ready to evolve?</h2>
                    <p className="text-gray-400 mb-12 text-lg">Experience the next generation of athletic apparel today.</p>
                    <button
                        onClick={() => router.push('/shop')}
                        className="px-12 py-5 bg-white text-black rounded-2xl font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-white/5"
                    >
                        Shop the Technology
                    </button>
                </div>
            </section>
        </main>
    );
}
