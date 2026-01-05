import Link from 'next/link';

export default function CTABlocks() {
    return (
        <section className="bg-black px-10 pb-[120px]">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                <Link href="/archive" className="relative block rounded-lg min-h-[420px] overflow-hidden transition duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 shadow-lg" style={{ backgroundImage: 'linear-gradient(135deg, #9530ff 0%, #ff7a00 100%)' }}>
                    <div className="relative z-10 p-16 flex items-end h-full text-white">
                        <div>
                            <span className="block text-sm uppercase tracking-[0.2em] opacity-70 mb-5">Get inspired by our work</span>
                            <h3 className="text-[clamp(28px,3vw,42px)] font-bold leading-tight mb-8 max-w-[500px]">
                                Explore our infinite archive, full of inspiration.
                            </h3>
                            <span className="inline-block text-base font-semibold uppercase tracking-wide pb-4 border-b-2 border-current transition-transform hover:translate-x-2">Explore archive →</span>
                        </div>
                    </div>
                </Link>

                <Link href="/jobs" className="relative block rounded-lg min-h-[420px] overflow-hidden transition duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 bg-white">
                    <div className="relative z-10 p-16 flex items-end h-full text-black">
                        <div>
                            <span className="block text-sm uppercase tracking-[0.2em] opacity-70 mb-5">We’re always looking for creatives in the field</span>
                            <h3 className="text-[clamp(28px,3vw,42px)] font-bold leading-tight mb-8 max-w-[500px]">
                                We currently have 1 open positions.
                            </h3>
                            <span className="inline-block text-base font-semibold uppercase tracking-wide pb-4 border-b-2 border-current transition-transform hover:translate-x-2">Explore Jobs →</span>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
}
