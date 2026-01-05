export default function Mission() {
    return (
        <section className="bg-black text-white py-[160px] px-10">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-20">
                    <div className="flex items-center justify-center">
                        <div className="relative w-[min(520px,80vw)] h-[min(520px,80vw)]">
                            <div className="absolute w-[70%] h-[70%] border-2 border-dashed border-white/50 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-[80%]"></div>
                            <div className="absolute w-[70%] h-[70%] border-2 border-dashed border-white/50 rounded-full left-1/2 top-1/2 -translate-x-[85%] -translate-y-1/2"></div>
                            <div className="absolute w-[70%] h-[70%] border-2 border-dashed border-white/50 rounded-full left-1/2 top-1/2 -translate-x-[15%] -translate-y-1/2"></div>
                            <div className="absolute w-[60%] h-[60%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-[35%] bg-gradient-to-b from-[#b5179e] via-[#ff6b6b] to-[#ffd166] [clip-path:polygon(50%_0%,0%_85%,100%_85%)] drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]"></div>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-heading uppercase font-bold leading-[0.95] text-[clamp(48px,6vw,90px)] mb-24">
                            We believe sports is the most thrilling thing on earth
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-[20px] leading-8 font-normal opacity-80">
                            <div>
                                <p>
                                    We create winning ideas to ignite the most distinctive campaigns in sports.
                                    Like no other we know how to find the sweet spots between brands and sports culture,
                                    which makes us the specialists in our game.
                                </p>
                            </div>
                            <div>
                                <p>
                                    Our goal is to create talk-worthy and head-turning campaigns with outstanding results.
                                    Or as we like to say: Rockets for brands that dare to stand out. Nothing less.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
