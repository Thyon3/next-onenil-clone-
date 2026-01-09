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
        <main className="min-h-screen bg-gray-950 text-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-24 pb-20 px-5 md:px-10 lg:px-20">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-950" />
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px]" />
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
                                <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-tight leading-[0.9] mb-6">
                                    <span className="block bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                                        JOIN THE
                                    </span>
                                    <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                                        PERFORMANCE REVOLUTION
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
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
                                        <div key={index} className="text-center p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800">
                                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                                            <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{stat.label}</div>
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
                            <h2 className="text-2xl font-bold mb-2">Current Openings</h2>
                            <p className="text-gray-400">Filter by department or job type</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="px-4 py-2 text-sm border border-gray-700 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-colors">
                                Reset Filters
                            </button>
                            <button className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                                Sort: Newest
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Department Filters */}
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="h-px w-6 bg-gradient-to-r from-blue-500 to-transparent" />
                                <span className="text-sm font-semibold tracking-widest uppercase text-blue-400">Departments</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {departments.map((dept) => (
                                    <button
                                        key={dept}
                                        className={`px-3 py-1.5 text-sm rounded-lg border transition-all ${dept === 'All'
                                            ? 'bg-blue-500/20 border-blue-500 text-blue-400'
                                            : 'bg-gray-900/30 border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-800/30'
                                            }`}
                                    >
                                        {dept}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Job Type Filters */}
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="h-px w-6 bg-gradient-to-r from-cyan-500 to-transparent" />
                                <span className="text-sm font-semibold tracking-widest uppercase text-cyan-400">Job Type</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {jobTypes.map((type) => (
                                    <button
                                        key={type}
                                        className={`px-3 py-1.5 text-sm rounded-lg border transition-all ${type === 'All'
                                            ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400'
                                            : 'bg-gray-900/30 border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-800/30'
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
                            <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm hover:border-gray-600 transition-all duration-500">
                                <div className="p-6 lg:p-8">
                                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                                        {/* Job Info */}
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-4 mb-4">
                                                <span className="px-3 py-1 text-xs font-semibold tracking-widest uppercase bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                                                    {job.department}
                                                </span>
                                                <span className="px-3 py-1 text-xs font-semibold tracking-widest uppercase bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
                                                    {job.type}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                                                {job.title}
                                            </h3>

                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="flex items-center gap-2">
                                                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <span className="text-gray-300">{job.location}</span>
                                                </div>
                                            </div>

                                            <p className="text-gray-300 mb-6 leading-relaxed max-w-3xl">
                                                {job.description}
                                            </p>

                                            {/* Requirements */}
                                            <div className="mb-6">
                                                <h4 className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-3">Requirements</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {job.requirements.map((req, i) => (
                                                        <span key={i} className="px-3 py-1 text-sm bg-gray-900/50 text-gray-300 rounded-full border border-gray-700">
                                                            {req}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Perks */}
                                            <div>
                                                <h4 className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-3">Perks & Benefits</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {job.perks.map((perk, i) => (
                                                        <span key={i} className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/20">
                                                            {perk}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Apply Button */}
                                        <div className="lg:w-48 flex lg:flex-col items-center lg:items-end gap-4">
                                            <Link
                                                href={`/jobs/${job.id}`}
                                                className="group/btn px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 w-full lg:w-auto text-center"
                                            >
                                                <span className="flex items-center justify-center gap-2">
                                                    Apply Now
                                                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </span>
                                            </Link>
                                            <span className="text-xs text-gray-500 lg:text-right">
                                                Posted 2 weeks ago
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Gradient Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Culture Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 md:p-12 mb-20"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                    Our Culture
                                </span>
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Performance Driven</h4>
                                        <p className="text-gray-300 text-sm">Every decision is measured by its impact on athlete performance.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Innovation First</h4>
                                        <p className="text-gray-300 text-sm">We encourage experimentation and boundary-pushing ideas.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-1">
                                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Elite Standards</h4>
                                        <p className="text-gray-300 text-sm">We only ship products we would trust with Olympic athletes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                                    Our Benefits
                                </span>
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: "🏋️", label: "Athlete Facilities" },
                                    { icon: "📈", label: "Equity Options" },
                                    { icon: "🌍", label: "Global Mobility" },
                                    { icon: "🧪", label: "Lab Access" },
                                    { icon: "🎓", label: "Learning Budget" },
                                    { icon: "⚡", label: "Flexible Hours" },
                                    { icon: "🏥", label: "Health Insurance" },
                                    { icon: "✈️", label: "Travel Budget" }
                                ].map((benefit, index) => (
                                    <div key={index} className="p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                                        <div className="text-2xl mb-2">{benefit.icon}</div>
                                        <div className="text-sm font-medium">{benefit.label}</div>
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
                    <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-12">
                        <h3 className="text-2xl md:text-4xl font-bold mb-6">
                            Don't see the perfect role?
                        </h3>
                        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            We're always looking for exceptional talent. If you're passionate about sports
                            technology and innovation, we'd love to hear from you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    Send Your CV
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </Link>
                            <Link
                                href="/about"
                                className="group px-8 py-4 border border-gray-700 text-white font-semibold rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                            >
                                Learn About Our Team
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}