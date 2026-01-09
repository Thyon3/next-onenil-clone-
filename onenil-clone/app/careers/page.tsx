"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiClock, FiArrowRight, FiUsers, FiAward, FiActivity, FiGlobe, FiZap, FiPlus, FiBriefcase } from 'react-icons/fi';

const jobs = [
    {
        id: 1,
        title: 'Senior Material Scientist',
        location: 'San Francisco, CA',
        type: 'Full-time',
        department: 'Research & Development',
        description: 'Lead research on next-generation athletic fabrics with focus on adaptive temperature regulation and moisture management.',
        requirements: ['PhD in Material Science', '5+ years textile innovation', 'Published research', 'Athletics background preferred'],
        perks: ['Equity options', 'Lab access 24/7', 'Athlete testing program', 'Conference budget']
    },
    {
        id: 2,
        title: 'Biomechanics Engineer',
        location: 'Boston, MA',
        type: 'Full-time',
        department: 'Product Engineering',
        description: 'Design and analyze athletic wear that enhances human performance through biomechanical optimization.',
        requirements: ['Masters in Biomechanics', '3D motion capture', 'CAD proficiency', 'Sports performance'],
        perks: ['Performance bonus', 'Gym membership', 'Research sabbatical', 'Equipment budget']
    },
    {
        id: 3,
        title: 'Athlete Experience Director',
        location: 'Remote',
        type: 'Full-time',
        department: 'Product Testing',
        description: 'Manage elite athlete partnerships and feedback systems to drive product innovation and validation.',
        requirements: ['Sports management degree', 'Elite athlete network', 'Data analysis skills', 'Communication excellence'],
        perks: ['Travel opportunities', 'Flexible schedule', 'Product allowance', 'Wellness program']
    },
    {
        id: 4,
        title: 'Textile Innovation Lead',
        location: 'Portland, OR',
        type: 'Full-time',
        department: 'Fabric Technology',
        description: 'Drive development of proprietary fabric technologies for next-generation performance apparel.',
        requirements: ['Textile engineering degree', 'Sustainable materials', 'Manufacturing processes', 'Team leadership'],
        perks: ['Patent incentives', 'Sustainability bonus', 'Factory visits', 'Team budget']
    },
    {
        id: 5,
        title: 'Performance Data Analyst',
        location: 'Austin, TX',
        type: 'Contract',
        department: 'Data Science',
        description: 'Analyze athlete performance data to optimize product design and validate performance claims.',
        requirements: ['Data science background', 'Python/R proficiency', 'Sports analytics', 'Statistical modeling'],
        perks: ['Remote work', 'Flexible hours', 'Learning budget', 'Tech equipment']
    }
];

const departments = ['All', 'Research & Development', 'Product Engineering', 'Product Testing', 'Fabric Technology', 'Data Science'];

export default function CareersPage() {
    const [selectedDept, setSelectedDept] = useState('All');

    const filteredJobs = selectedDept === 'All'
        ? jobs
        : jobs.filter(job => job.department === selectedDept);

    return (
        <main className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-8">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-black" />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-0.5 w-8 bg-blue-500" />
                            <span className="text-sm font-bold tracking-[0.4em] uppercase text-blue-400">Careers</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-8">
                            Join the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">Performance</span> Evolution.
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
                            We're looking for visionary thinkers, designers, and engineers who want to redefine what's possible in human performance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="px-8 pb-32">
                <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { label: 'Open Roles', value: jobs.length, icon: <FiBriefcase /> },
                        { label: 'Team Members', value: '42+', icon: <FiUsers /> },
                        { label: 'Global Offices', value: '4', icon: <FiGlobe /> },
                        { label: 'Patents pending', value: '18', icon: <FiZap /> }
                    ].map((stat, i) => (
                        <div key={i} className="p-8 bg-gray-950/50 border border-white/5 rounded-3xl backdrop-blur-sm">
                            <div className="text-blue-400 text-2xl mb-4">{stat.icon}</div>
                            <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Job Board */}
            <section className="px-8 pb-32">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
                        <div>
                            <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-2">Open Positions</h2>
                            <p className="text-gray-500">Find your place in the future of athletics.</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {departments.map((dept) => (
                                <button
                                    key={dept}
                                    onClick={() => setSelectedDept(dept)}
                                    className={`px-4 py-2 rounded-xl border text-sm font-bold transition-all ${selectedDept === dept
                                        ? "bg-blue-600 border-blue-600 text-white"
                                        : "bg-gray-950/50 border-white/5 text-gray-400 hover:border-white/20"
                                        }`}
                                >
                                    {dept}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <AnimatePresence mode="popLayout">
                            {filteredJobs.map((job) => (
                                <motion.div
                                    key={job.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    className="group block p-8 bg-gray-950/50 border border-white/5 rounded-[2rem] hover:border-blue-500/30 transition-all duration-500"
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="text-[0.6rem] px-3 py-1 bg-blue-500/10 text-blue-400 font-bold uppercase tracking-widest border border-blue-500/20 rounded-full">
                                                    {job.department}
                                                </span>
                                                <div className="flex items-center gap-1.5 text-gray-500 font-bold text-[0.6rem] uppercase tracking-widest">
                                                    <FiMapPin /> {job.location}
                                                </div>
                                            </div>
                                            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{job.title}</h3>
                                            <p className="text-gray-400 font-light leading-relaxed max-w-2xl mb-8">{job.description}</p>

                                            <div className="flex flex-wrap gap-2">
                                                {job.requirements.slice(0, 3).map((req, i) => (
                                                    <span key={i} className="text-[0.65rem] text-gray-500 bg-white/5 px-3 py-1 rounded-lg border border-white/5 font-medium">
                                                        {req}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="shrink-0 flex flex-col items-center lg:items-end gap-4">
                                            <button className="px-8 py-4 bg-white text-black rounded-2xl font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-white/5 flex items-center gap-2">
                                                Apply Now <FiArrowRight />
                                            </button>
                                            <span className="text-[0.65rem] text-gray-600 font-bold uppercase tracking-widest">Full Time Position</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="px-8 pb-32">
                <div className="max-w-[1400px] mx-auto bg-gray-950 rounded-[3rem] border border-white/5 p-12 lg:p-20 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full -z-0" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-white mb-8">Built on <br /><span className="text-blue-400">Innovation.</span></h2>
                            <p className="text-lg text-gray-400 leading-relaxed font-light mb-12">
                                We're not just a company; we're a lab where science meets sport. We value intellectual curiosity as much as physical performance.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    { title: 'Performance First', desc: 'Every decision leads to measurable athlete gains.' },
                                    { title: 'Borderless Teams', desc: 'Remote-first culture with global hub access.' },
                                    { title: 'Total Well-being', desc: 'Mental and physical health is a foundational KPI.' },
                                    { title: 'Elite Standards', desc: 'We ship only what we would use for an Olympic final.' }
                                ].map((value, i) => (
                                    <div key={i}>
                                        <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                            {value.title}
                                        </h4>
                                        <p className="text-sm text-gray-500 font-light leading-relaxed">{value.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                'Gym & Labs', 'Athlete Testing', 'Global Visa', 'Stock Options', 'Annual Offsite', 'Equipment Fund'
                            ].map((benefit, i) => (
                                <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between group hover:border-blue-500/30 transition-all">
                                    <span className="text-sm font-bold text-white/70 group-hover:text-white transition-colors uppercase tracking-widest">{benefit}</span>
                                    <FiPlus className="text-blue-500 opacity-0 group-hover:opacity-100 transition-all" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
