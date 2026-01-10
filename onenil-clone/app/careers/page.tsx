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
        <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative pt-40 pb-24 px-8 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-background" />
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full" />
                    <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-cyan-600/5 blur-[120px] rounded-full" />
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-0.5 w-12 bg-blue-600 rounded-full" />
                            <span className="text-[0.7rem] font-black tracking-[0.5em] uppercase text-blue-600">Careers</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter uppercase mb-12 leading-[0.85] italic">
                            Join the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 drop-shadow-sm">Evolution.</span>
                        </h1>
                        <p className="text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
                            We're looking for visionary thinkers, designers, and engineers who want to <span className="text-foreground font-black">redefine</span> what's possible in human performance.
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
                        { label: 'Global Hubs', value: '4', icon: <FiGlobe /> },
                        { label: 'Patents pending', value: '18', icon: <FiZap /> }
                    ].map((stat, i) => (
                        <div key={i} className="p-10 bg-card border border-border rounded-[2.5rem] backdrop-blur-sm shadow-sm group hover:border-blue-500/30 transition-all duration-500">
                            <div className="text-blue-600 text-3xl mb-6 group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                            <div className="text-5xl font-black text-foreground mb-2 tracking-tighter">{stat.value}</div>
                            <div className="text-[0.6rem] text-muted-foreground uppercase tracking-[0.3em] font-black">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Job Board */}
            <section className="px-8 pb-32">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20">
                        <div>
                            <h2 className="text-5xl font-black uppercase tracking-tighter text-foreground mb-4">Open Positions</h2>
                            <p className="text-xl text-muted-foreground font-light">Find your place in the future of athletics.</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {departments.map((dept) => (
                                <button
                                    key={dept}
                                    onClick={() => setSelectedDept(dept)}
                                    className={`px-6 py-3 rounded-2xl border text-[0.65rem] font-black uppercase tracking-widest transition-all duration-500 ${selectedDept === dept
                                        ? "bg-foreground border-foreground text-background shadow-2xl shadow-foreground/10"
                                        : "bg-card border-border text-muted-foreground hover:border-foreground/20"
                                        }`}
                                >
                                    {dept}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <AnimatePresence mode="popLayout">
                            {filteredJobs.map((job) => (
                                <motion.div
                                    key={job.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.98, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    className="group block p-10 lg:p-14 bg-card border border-border rounded-[3rem] hover:border-blue-500/30 transition-all duration-700 shadow-sm relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 relative z-10">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-4 mb-8">
                                                <span className="text-[0.6rem] px-5 py-2 bg-blue-600 text-white font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-blue-600/10">
                                                    {job.department}
                                                </span>
                                                <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-xl text-muted-foreground font-black text-[0.6rem] uppercase tracking-widest border border-border">
                                                    <FiMapPin className="text-blue-600" /> {job.location}
                                                </div>
                                            </div>
                                            <h3 className="text-4xl lg:text-5xl font-black text-foreground mb-6 group-hover:text-blue-600 transition-colors uppercase tracking-tighter leading-none italic">{job.title}</h3>
                                            <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mb-10">{job.description}</p>

                                            <div className="flex flex-wrap gap-3">
                                                {job.requirements.slice(0, 3).map((req, i) => (
                                                    <span key={i} className="text-[0.65rem] text-foreground bg-muted px-4 py-2 rounded-xl border border-border font-black uppercase tracking-widest">
                                                        {req}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="shrink-0 flex flex-col items-center lg:items-end gap-6">
                                            <button className="px-12 py-6 bg-foreground text-background rounded-2xl font-black uppercase tracking-[0.2em] text-[0.7rem] hover:scale-105 transition-all shadow-2xl shadow-foreground/20 flex items-center gap-3">
                                                Apply Now <FiArrowRight className="text-lg" />
                                            </button>
                                            <div className="flex flex-col lg:items-end">
                                                <span className="text-[0.6rem] text-muted-foreground font-black uppercase tracking-[0.2em]">Assignment</span>
                                                <span className="text-[0.6rem] text-foreground font-black uppercase tracking-[0.2em]">Full Time Position</span>
                                            </div>
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
                <div className="max-w-[1400px] mx-auto bg-foreground text-background rounded-[4rem] p-16 lg:p-28 overflow-hidden relative shadow-2xl">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full -z-0" />
                    <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full -z-0" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-background mb-10 leading-none">Built on <br /><span className="text-blue-500 italic">Innovation.</span></h2>
                            <p className="text-2xl text-background/60 leading-relaxed font-light mb-16">
                                We're not just a company; we're a lab where science meets sport. We value <span className="text-background font-black">intellectual curiosity</span> as much as physical performance.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                                {[
                                    { title: 'Performance First', desc: 'Every decision leads to measurable athlete gains.' },
                                    { title: 'Borderless Teams', desc: 'Remote-first culture with global hub access.' },
                                    { title: 'Total Well-being', desc: 'Mental and physical health is a foundational KPI.' },
                                    { title: 'Elite Standards', desc: 'We ship only what we would use for an Olympic final.' }
                                ].map((value, i) => (
                                    <div key={i} className="group">
                                        <h4 className="text-background font-black mb-4 flex items-center gap-3 text-lg uppercase tracking-tight group-hover:text-blue-500 transition-colors">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                            {value.title}
                                        </h4>
                                        <p className="text-sm text-background/50 font-light leading-relaxed">{value.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                'Gym & Labs', 'Athlete Testing', 'Global Visa', 'Stock Options', 'Annual Offsite', 'Equipment Fund'
                            ].map((benefit, i) => (
                                <div key={i} className="p-8 bg-background/5 border border-background/10 rounded-[2rem] flex items-center justify-between group hover:bg-background/10 hover:border-blue-500/30 transition-all duration-500 shadow-sm">
                                    <span className="text-[0.65rem] font-black text-background/60 group-hover:text-background transition-colors uppercase tracking-[0.2em]">{benefit}</span>
                                    <FiPlus className="text-blue-500 text-xl opacity-0 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
