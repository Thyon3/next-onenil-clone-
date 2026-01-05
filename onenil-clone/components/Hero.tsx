export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden text-white flex flex-col justify-center items-center">
            <div className="absolute inset-0 -z-10">
                <img
                    src="https://images.unsplash.com/photo-1523978591478-c753949ff840?q=80&w=2574&auto=format&fit=crop"
                    alt="Rocket launch"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            <div className="w-full max-w-[1600px] px-10 mx-auto relative z-10 flex flex-col justify-center h-full">
                <h1 className="font-heading uppercase font-extrabold leading-[0.9] tracking-tight text-center text-[clamp(48px,9vw,140px)]">
                    Buckle up and enjoy <br /> the flight
                </h1>
                <div className="absolute left-10 right-10 bottom-10 flex justify-between items-end">
                    <div className="flex flex-col items-center gap-2 uppercase tracking-[0.2em] text-sm opacity-70">
                        Explore
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                        </svg>
                    </div>
                    <div className="uppercase tracking-[0.2em] text-sm border border-white/30 px-6 py-3 rounded-full backdrop-blur hover:bg-white/10 hover:border-white transition">
                        Hold to Ignite
                    </div>
                </div>
            </div>
        </section>
    );
}
