import Link from "next/link";

const jobs = [
    {
        id: 1,
        title: 'Senior Creative Strategist',
        location: 'Amsterdam, NL',
        type: 'Full-time',
        description: 'We are looking for a senior creative strategist to join our team and help shape the future of sports marketing.'
    }
];

export default function Jobs() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-20">
            <section className="px-5 md:px-10 max-w-[1400px] mx-auto">
                <div className="mb-24">
                    <h1 className="text-[clamp(3.5rem,9vw,9rem)] font-heading uppercase font-bold leading-[0.9] mb-8">
                        Join the <br /> team
                    </h1>
                    <p className="text-xl md:text-2xl font-manrope max-w-2xl opacity-80">
                        We’re always looking for creatives in the field. We currently have {jobs.length} open position{jobs.length !== 1 ? 's' : ''}.
                    </p>
                </div>

                <div className="flex flex-col gap-4 mb-32">
                    {jobs.map((job) => (
                        <div key={job.id} className="group border-t border-white/20 py-12 transition-all hover:bg-white/5 relative">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                <div className="flex-1">
                                    <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 group-hover:text-accentPurple transition-colors">{job.title}</h2>
                                    <div className="flex gap-4 text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">
                                        <span>{job.location}</span>
                                        <span>•</span>
                                        <span>{job.type}</span>
                                    </div>
                                    <p className="max-w-2xl text-lg opacity-80 mb-8 font-manrope">{job.description}</p>
                                    <Link href="/contact" className="inline-block border border-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white/5 p-12 md:p-20 rounded-lg text-center">
                    <h3 className="text-2xl md:text-4xl font-heading uppercase font-bold mb-6">Don’t see a perfect fit?</h3>
                    <p className="text-lg opacity-80 mb-10 max-w-xl mx-auto font-manrope">
                        We’re always interested in meeting talented people. Send us your portfolio and let’s talk.
                    </p>
                    <Link href="/contact" className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-accentPurple hover:text-white transition-colors">
                        Get in touch
                    </Link>
                </div>
            </section>
        </main>
    );
}
