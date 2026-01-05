import Link from "next/link";

const projects = [
    { id: 1, title: 'Heineken F1 Confetti', year: '2024', category: 'Campaign' },
    { id: 2, title: 'UEFA Europa League', year: '2024', category: 'Branding' },
    { id: 3, title: 'Ajax Social Hate', year: '2023', category: 'Campaign' },
    { id: 4, title: 'Adidas Football', year: '2023', category: 'Strategy' },
    { id: 5, title: 'KNVB Future Goals', year: '2023', category: 'Digital' },
    { id: 6, title: 'Ziggo Sport Rebrand', year: '2022', category: 'Branding' },
    { id: 7, title: 'Nike Training', year: '2022', category: 'Production' },
    { id: 8, title: 'Eredivisie Campaign', year: '2022', category: 'Campaign' },
    { id: 9, title: 'TOTO Sports', year: '2021', category: 'Strategy' },
    { id: 10, title: 'Puma Launch', year: '2021', category: 'Digital' },
];

export default function Archive() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-20">
            <section className="px-5 md:px-10 max-w-[1400px] mx-auto">
                <div className="mb-24">
                    <h1 className="text-[clamp(3.5rem,9vw,9rem)] font-heading uppercase font-bold leading-[0.9] mb-8">
                        Archive
                    </h1>
                    <p className="text-xl md:text-2xl font-manrope max-w-2xl opacity-80">
                        Explore our infinite archive, full of inspiration.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
                    {projects.map((project) => (
                        <Link key={project.id} href={`/work/${project.id}`} className="group block">
                            <div className="relative aspect-square bg-gray-900 mb-6 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-gray-700 font-heading text-xl uppercase font-bold group-hover:scale-105 transition-transform duration-500">
                                    {/* Placeholder */}
                                    {project.title}
                                </div>
                                <div className="absolute inset-0 bg-accentPurple/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white font-bold uppercase tracking-wider">
                                        View
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                                    <span>{project.category}</span>
                                    <span>{project.year}</span>
                                </div>
                                <h3 className="text-xl font-bold uppercase leading-tight group-hover:text-accentPurple transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
