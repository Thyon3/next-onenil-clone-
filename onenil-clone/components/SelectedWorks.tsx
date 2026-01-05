import Link from 'next/link';

const projects = [
    {
        id: 'f1-confetti',
        client: 'Heineken',
        title: 'Heineken celebrates F1 fans at Mexican GP',
        category: 'Campaign',
        img: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1200&auto=format&fit=crop',
        color: '#009900' // Heineken Green
    },
    {
        id: 'uefa-europa-league',
        client: 'UEFA',
        title: 'Boosting the European leagues with UEFA',
        category: 'Branding',
        img: 'https://images.unsplash.com/photo-1521417531300-0a2429f13a3f?q=80&w=1200&auto=format&fit=crop',
        color: '#002F6C' // UEFA Blue
    },
    {
        id: 'ajax-takes-a-stand-against-social-hate',
        client: 'AFC Ajax',
        title: 'Ajax takes a stand against social hate',
        category: 'Campaign',
        img: 'https://images.unsplash.com/photo-1519323651260-8d3b1c3e9f60?q=80&w=1200&auto=format&fit=crop',
        color: '#D2122E' // Ajax Red
    },
];

export default function SelectedWorks() {
    return (
        <section className="bg-black text-white py-[160px] px-10">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex items-center justify-between mb-20">
                    <h2 className="font-heading uppercase font-bold leading-[0.9] text-[clamp(48px,8vw,120px)]">Works</h2>
                    <Link href="/archive" className="text-base opacity-80 hover:opacity-100">Explore archive</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
                    {projects.map((project) => (
                        <Link href={`/work/${project.id}`} key={project.id} className="block">
                            <div className="rounded-lg overflow-hidden bg-neutral-900 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5">
                                <div className="relative pb-[140%] bg-neutral-800">
                                    <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover saturate-[0.9] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04]" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 mix-blend-multiply"></div>
                                </div>
                                <div className="flex flex-col gap-1 p-6">
                                    <div className="text-xs uppercase tracking-wider opacity-70">{project.client}</div>
                                    <div className="text-[clamp(18px,2.4vw,24px)] font-bold leading-tight">{project.title}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
