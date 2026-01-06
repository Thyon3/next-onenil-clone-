import Link from "next/link";

const works = [
    {
        id: 1,
        title: 'Heineken celebrates F1 fans at Mexican GP',
        category: 'Campaign',
        year: '2024',
        description: 'A thrilling campaign celebrating Formula 1 fans at the Mexican Grand Prix with Heineken.'
    },
    {
        id: 2,
        title: 'Boosting the European leagues with UEFA',
        category: 'Branding',
        year: '2024',
        description: 'Strategic branding initiative to elevate the UEFA Europa League across Europe.'
    },
    {
        id: 3,
        title: 'Ajax takes a stand against social hate',
        category: 'Campaign',
        year: '2023',
        description: 'A powerful social campaign addressing online hate in football culture.'
    }
];

export default function Work() {
    return (
        <main className="min-h-screen bg-white text-black pt-32 pb-20">
            <section className="px-5 md:px-10 max-w-[1400px] mx-auto">
                <div className="mb-24">
                    <h1 className="text-[clamp(3.5rem,9vw,9rem)] font-heading uppercase font-bold leading-[0.9] mb-8">
                        A deep dive <br /> into our cases
                    </h1>
                    <p className="text-xl md:text-2xl font-manrope max-w-2xl opacity-80">
                        Rockets for brands that dare to stand out.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 mb-32">
                    {works.map((work) => (
                        <Link
                            key={work.id}
                            href={`/work/${work.id}`}
                            className="group block"
                        >
                            <div className="relative aspect-[4/3] bg-gray-100 mb-8 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-heading text-2xl uppercase font-bold group-hover:scale-105 transition-transform duration-500">
                                    {/* Placeholder for actual image */}
                                    {work.title}
                                </div>
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        View case
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-gray-500">
                                    <span>{work.category}</span>
                                    <span>{work.year}</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold uppercase leading-tight group-hover:text-accentBlue transition-colors">
                                    {work.title}
                                </h2>
                                <p className="text-lg opacity-80 font-manrope line-clamp-2">
                                    {work.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/archive" className="inline-block border border-black px-10 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
                        View all projects in archive
                    </Link>
                </div>
            </section>
        </main>
    );
}
