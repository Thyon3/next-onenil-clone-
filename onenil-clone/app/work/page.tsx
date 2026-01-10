import Link from "next/link";

const works = [
    {
        id: 1,
        title: 'QuantumWeave Elite Series',
        category: 'Performance Gear',
        year: '2024',
        description: 'Advanced compression wear with real-time biometric tracking and adaptive temperature regulation.',
        stats: {
            performance: '+24%',
            weight: '180g',
            tech: 'AI-Powered'
        }
    },
    {
        id: 2,
        title: 'AeroFlow Running Collection',
        category: 'Running Apparel',
        year: '2024',
        description: 'Aerodynamic design with moisture-wicking nanotechnology for optimal marathon performance.',
        stats: {
            performance: '+18%',
            weight: '120g',
            tech: 'Nanotech'
        }
    },
    {
        id: 3,
        title: 'Recovery+ Smart Fabric',
        category: 'Recovery Wear',
        year: '2023',
        description: 'Intelligent compression technology with infrared therapy and muscle oscillation support.',
        stats: {
            performance: '+32%',
            weight: '210g',
            tech: 'Bio-Feedback'
        }
    }
];

export default function Work() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-24 pb-20 transition-colors duration-300" id="work">
            <section className="px-5 md:px-10 lg:px-20 max-w-[1600px] mx-auto">
                {/* Hero Section with Stats */}
                <div className="mb-20 lg:mb-32">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-16">
                        <div className="lg:w-2/3">
                            <h1 className="text-[clamp(3rem,8vw,7rem)] font-black tracking-tight leading-[0.9] mb-8">
                                <span className="block text-foreground opacity-90">
                                    ENGINEERED
                                </span>
                                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                    FOR PERFORMANCE
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed font-light">
                                Cutting-edge athletic wear designed through biomechanical research and material innovation.
                                Each collection is engineered to enhance human potential.
                            </p>
                        </div>

                        <div className="lg:w-1/3">
                            <div className="grid grid-cols-3 gap-6">
                                {[
                                    { value: "98%", label: "Athlete Satisfaction" },
                                    { value: "2.4x", label: "Recovery Speed" },
                                    { value: "0.02s", label: "Reaction Time" }
                                ].map((stat, index) => (
                                    <div key={index} className="text-center p-4 bg-card backdrop-blur-sm rounded-xl border border-border shadow-sm">
                                        <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                            {stat.value}
                                        </div>
                                        <div className="text-[0.6rem] text-muted-foreground mt-2 uppercase tracking-widest font-black leading-tight">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Innovation Highlight */}
                    <div className="bg-blue-500/5 p-8 rounded-2xl border border-blue-500/10 shadow-sm">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                                    <span className="text-[0.65rem] font-black tracking-widest uppercase text-cyan-600">
                                        Featured Innovation
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
                                    QuantumWeave™ Technology
                                </h3>
                                <p className="text-muted-foreground max-w-2xl font-light">
                                    Our proprietary fabric technology that dynamically adjusts to body temperature and muscle activation.
                                </p>
                            </div>
                            <Link
                                href="/technology"
                                className="group px-6 py-3 border border-border bg-background text-foreground font-black uppercase tracking-widest text-xs rounded-lg hover:border-blue-500 hover:bg-blue-500/5 transition-all duration-300 shadow-sm"
                            >
                                <span className="flex items-center gap-2">
                                    Learn More
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Work Grid */}
                <div className="mb-20">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-px w-12 bg-blue-500" />
                                <span className="text-[0.65rem] font-black tracking-widest uppercase text-blue-500">
                                    Featured Collections
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                                Performance Engineering
                            </h2>
                        </div>
                        <div className="hidden md:block text-[0.65rem] font-black uppercase tracking-widest text-muted-foreground">
                            {works.length} Collections
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                        {works.map((work) => (
                            <Link
                                key={work.id}
                                href={`/work/${work.id}`}
                                className="group relative overflow-hidden rounded-2xl border border-border bg-card backdrop-blur-sm hover:border-blue-500 transition-all duration-500 shadow-sm"
                            >
                                {/* Card Content */}
                                <div className="p-6">
                                    {/* Category & Year */}
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="px-3 py-1 text-[0.6rem] font-black tracking-widest uppercase bg-blue-500/10 text-blue-500 rounded-full border border-blue-500/20">
                                            {work.category}
                                        </span>
                                        <span className="text-[0.65rem] font-black text-muted-foreground uppercase tracking-widest">
                                            {work.year}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl md:text-2xl font-black mb-4 group-hover:text-blue-600 transition-colors uppercase tracking-tight leading-tight">
                                        {work.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-muted-foreground mb-6 leading-relaxed font-light text-sm">
                                        {work.description}
                                    </p>

                                    {/* Performance Stats */}
                                    <div className="grid grid-cols-3 gap-3 mb-8">
                                        <div className="text-center p-3 bg-background border border-border rounded-lg">
                                            <div className="text-lg font-black text-foreground">
                                                {work.stats.performance}
                                            </div>
                                            <div className="text-[0.55rem] font-black text-muted-foreground mt-1 uppercase tracking-widest leading-none">
                                                Gain
                                            </div>
                                        </div>
                                        <div className="text-center p-3 bg-background border border-border rounded-lg">
                                            <div className="text-lg font-black text-foreground">
                                                {work.stats.weight}
                                            </div>
                                            <div className="text-[0.55rem] font-black text-muted-foreground mt-1 uppercase tracking-widest leading-none">
                                                Weight
                                            </div>
                                        </div>
                                        <div className="text-center p-3 bg-background border border-border rounded-lg">
                                            <div className="text-[0.7rem] font-black text-foreground line-clamp-1 py-1">
                                                {work.stats.tech}
                                            </div>
                                            <div className="text-[0.55rem] font-black text-muted-foreground mt-1 uppercase tracking-widest leading-none">
                                                Tech
                                            </div>
                                        </div>
                                    </div>

                                    {/* View Case Button */}
                                    <div className="flex items-center justify-between pt-4 border-t border-border">
                                        <span className="text-[0.65rem] font-black uppercase tracking-widest text-muted-foreground group-hover:text-blue-600 transition-colors">
                                            View Case Study
                                        </span>
                                        <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all">
                                            <svg className="w-4 h-4 text-muted-foreground group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Gradient Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </Link>
                        ))}
                    </div>

                    {/* Archive CTA */}
                    <div className="text-center">
                        <Link
                            href="/archive"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-black uppercase tracking-[0.2em] text-sm rounded-lg hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-foreground/10"
                        >
                            <span>View All Collections</span>
                            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Technology Partners */}
                <div className="py-16 border-t border-border">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="h-px w-8 bg-border" />
                            <span className="text-[0.65rem] font-black tracking-widest uppercase text-muted-foreground">
                                Technology Partners
                            </span>
                            <div className="h-px w-8 bg-border" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">
                            Engineered with Industry Leaders
                        </h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto font-light">
                            Collaborating with the world's leading material science and biomechanics research institutions.
                        </p>
                    </div>

                    {/* Partner Logos */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
                        {['MaterialScience Co.', 'Biomech Labs', 'Quantum Textiles', 'Performance Research'].map((partner, index) => (
                            <div key={index} className="flex items-center justify-center p-6 bg-muted rounded-xl border border-border transition-colors hover:bg-muted/80">
                                <span className="font-black text-[0.7rem] uppercase tracking-widest text-muted-foreground">{partner}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}