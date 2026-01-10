"use client";
import Link from "next/link";
import { motion } from "framer-motion";

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
const jobTypes = ['All', 'Full-time', 'Contract', 'Internship'];

export default function Jobs() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-24 pb-20 px-5 md:px-10 lg:px-20">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-background" />
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px]" />
                </div>

                <div className="relative z-10 max-w-[1600px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-12">
                            <div className="lg:w-2/3">
                                <h1 className="text-[clamp(3rem,8vw,6rem)] font-black tracking-tight leading-[0.9] mb-6 uppercase">
                                    <span className="block text-foreground opacity-90 font-black">
                                        JOIN THE
                                    </span>
                                    <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent italic">
                                        PERFORMANCE REVOLUTION
                                    </span>
                                </h1>
                                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-light">
                                    Help us redefine athletic potential. We're building the future of sports technology
                                    and need visionary thinkers, engineers, and innovators.
                                </p>
                            </div>

                            <div className="lg:w-1/3">
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { value: jobs.length, label: "Open Roles" },
                                        { value: "28+", label: "Team Members" },
                                        { value: "4", label: "Global Offices" },
                                        { value: "12+", label: "Elite Partners" }
                                    ].map((stat, index) => (
                                        <div key={index} className="text-center p-6 bg-card backdrop-blur-sm rounded-2xl border border-border shadow-sm">
                                            <div className="text-2xl font-black text-foreground">{stat.value}</div>
                                            <div className="text-[0.6rem] text-muted-foreground mt-1 uppercase tracking-[0.2em] font-black">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Jobs Section */}
            <section className="px-5 md:px-10 lg:px-20 max-w-[1600px] mx-auto pb-20">
                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                        <div>
                            <h2 className="text-3xl font-black uppercase tracking-tight text-foreground">Current Openings</h2>
                            <p className="text-muted-foreground font-light">Filter by department or job type</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="px-5 py-2.5 text-[0.65rem] font-black uppercase tracking-widest border border-border rounded-xl hover:border-foreground/20 transition-colors">
                                Reset Filters
                            </button>
                            <button className="px-5 py-2.5 text-[0.65rem] font-black uppercase tracking-widest bg-blue-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-600/30 transition-all">
                                Sort: Newest
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Department Filters */}
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-0.5 w-8 bg-blue-500" />
                                <span className="text-[0.6rem] font-black tracking-[0.3em] uppercase text-blue-600">Departments</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {departments.map((dept) => (
                                    <button
                                        key={dept}
                                        className={`px-4 py-2 text-[0.65rem] font-black uppercase tracking-widest rounded-xl border transition-all ${dept === 'All'
                                            ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20'
                                            : 'bg-card border-border text-muted-foreground hover:border-foreground/20'
                                            }`}
                                    >
                                        {dept}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Job Type Filters */}
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-0.5 w-8 bg-cyan-500" />
                                <span className="text-[0.6rem] font-black tracking-[0.3em] uppercase text-cyan-600">Job Type</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {jobTypes.map((type) => (
                                    <button
                                        key={type}
                                        className={`px-4 py-2 text-[0.65rem] font-black uppercase tracking-widest rounded-xl border transition-all ${type === 'All'
                                            ? 'bg-cyan-600 border-cyan-600 text-white shadow-lg shadow-cyan-600/20'
                                            : 'bg-card border-border text-muted-foreground hover:border-foreground/20'
                                            }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Jobs List */}
                <div className="space-y-6 mb-20">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="group relative overflow-hidden rounded-[2.5rem] border border-border bg-card backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500 shadow-sm">
                                <div className="p-8 lg:p-12">
                                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12">
                                        {/* Job Info */}
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                                <span className="px-4 py-1.5 text-[0.6rem] font-black tracking-widest uppercase bg-blue-500/10 text-blue-600 rounded-full border border-blue-500/10">
                                                    {job.department}
                                                </span>
                                                <span className="px-4 py-1.5 text-[0.6rem] font-black tracking-widest uppercase bg-cyan-500/10 text-cyan-600 rounded-full border border-cyan-500/10">
                                                    {job.type}
                                                </span>
                                            </div>

                                            <h3 className="text-3xl lg:text-4xl font-black mb-4 uppercase tracking-tighter text-foreground group-hover:text-blue-600 transition-colors">
                                                {job.title}
                                            </h3>

                                            <div className="flex items-center gap-3 mb-8">
                                                <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-lg border border-border">
                                                    <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <span className="text-[0.65rem] font-black uppercase text-foreground">{job.location}</span>
                                                </div>
                                            </div>

                                            <p className="text-muted-foreground mb-8 leading-relaxed max-w-3xl font-light text-lg">
                                                {job.description}
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                {/* Requirements */}
                                                <div>
                                                    <h4 className="text-[0.6rem] font-black tracking-[0.3em] uppercase text-blue-600 mb-4">Requirements</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {job.requirements.map((req, i) => (
                                                            <span key={i} className="px-3 py-1.5 text-[0.65rem] font-medium bg-muted text-muted-foreground rounded-lg border border-border">
                                                                {req}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Perks */}
                                                <div>
                                                    <h4 className="text-[0.6rem] font-black tracking-[0.3em] uppercase text-cyan-600 mb-4">Perks & Benefits</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {job.perks.map((perk, i) => (
                                                            <span key={i} className="px-3 py-1.5 text-[0.65rem] font-medium bg-cyan-500/5 text-cyan-600 rounded-lg border border-cyan-500/10">
                                                                {perk}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Apply Button */}
                                        <div className="lg:w-48 flex lg:flex-col items-center lg:items-end gap-6 h-full justify-between">
                                            <Link
                                                href={`/jobs/${job.id}`}
                                                className="group/btn relative px-8 py-5 bg-foreground text-background font-black uppercase tracking-widest text-[0.7rem] rounded-2xl hover:scale-105 transition-all duration-500 w-full lg:w-auto text-center shadow-2xl shadow-foreground/10"
                                            >
                                                <span className="flex items-center justify-center gap-3">
                                                    Apply
                                                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </span>
                                            </Link>
                                            <div className="flex flex-col lg:items-end">
                                                <span className="text-[0.6rem] font-black uppercase text-muted-foreground tracking-widest">Posted</span>
                                                <span className="text-[0.6rem] font-black uppercase text-foreground tracking-widest">2 weeks ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Culture Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-card rounded-[3rem] border border-border p-10 md:p-16 mb-20 shadow-sm relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[100px] -z-0" />

                    <div className="grid md:grid-cols-2 gap-20 items-center relative z-10">
                        <div>
                            <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-none">
                                <span className="block text-foreground opacity-90">OUR</span>
                                <span className="block text-blue-600 italic">CULTURE</span>
                            </h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                                        <FiZap className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-black uppercase tracking-widest mb-1">Performance Driven</h4>
                                        <p className="text-muted-foreground text-sm font-light leading-relaxed">Every decision is measured by its impact on athlete performance. We optimize for results.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
                                        <FiActivity className="text-cyan-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-black uppercase tracking-widest mb-1">Innovation First</h4>
                                        <p className="text-muted-foreground text-sm font-light leading-relaxed">We encourage experimentation and boundary-pushing ideas. Failure is just a data point.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
                                        <FiAward className="text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-black uppercase tracking-widest mb-1">Elite Standards</h4>
                                        <p className="text-muted-foreground text-sm font-light leading-relaxed">We only ship products we would trust with Olympic athletes. No compromises on quality.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-blue-600 mb-8">Comprehensive Benefits</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: "🏋️", label: "Athlete Labs" },
                                    { icon: "📈", label: "Equity Options" },
                                    { icon: "🌍", label: "Global Offices" },
                                    { icon: "🧪", label: "Research Fund" },
                                    { icon: "🎓", label: "Learning Subsidy" },
                                    { icon: "⚡", label: "Elite Hardware" },
                                    { icon: "🏥", label: "Wellness Care" },
                                    { icon: "✈️", label: "Offsite Sabbatical" }
                                ].map((benefit, index) => (
                                    <div key={index} className="px-6 py-5 bg-muted rounded-2xl border border-border group hover:border-blue-500/30 transition-all shadow-sm">
                                        <div className="text-2xl mb-2 grayscale group-hover:grayscale-0 transition-all">{benefit.icon}</div>
                                        <div className="text-[0.65rem] font-black uppercase tracking-widest text-muted-foreground group-hover:text-foreground">{benefit.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* No Perfect Fit CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-center"
                >
                    <div className="bg-foreground text-background rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden group">
                        {/* Background Animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-1000" />

                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-none">
                                Don't see the <br />perfect role?
                            </h3>
                            <p className="text-lg md:text-xl text-background/70 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                                We're always looking for exceptional talent. If you're passionate about sports
                                technology and innovation, we'd love to hear from you.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="group px-10 py-5 bg-background text-foreground font-black uppercase tracking-widest text-[0.7rem] rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl"
                                >
                                    <span className="flex items-center justify-center gap-3">
                                        Send Your CV
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                </Link>
                                <Link
                                    href="/work"
                                    className="group px-10 py-5 border border-background/20 text-background font-black uppercase tracking-widest text-[0.7rem] rounded-2xl hover:bg-background/5 transition-all duration-300"
                                >
                                    Our Legacy
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}