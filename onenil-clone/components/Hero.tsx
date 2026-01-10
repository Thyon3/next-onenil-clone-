"use client";

import { FoxyHero } from "@/components/ui/foxy-hero";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Hero() {
    const router = useRouter();
    return (
        <div className="relative overflow-hidden bg-background min-h-screen flex items-center">
            {/* Enhanced layered background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-background" />

                {/* Animated gradient orbs - subtle and elegant */}
                <div className="absolute top-[10%] -left-[10%] w-[60%] h-[60%] bg-blue-600/5 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-cyan-600/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

                {/* Subtle high-tech grid */}
                <div className="absolute inset-0 bg-[linear-gradient(var(--border-color)_1px,transparent_1px),linear-gradient(90deg,var(--border-color)_1px,transparent_1px)] bg-[size:100px_100px] opacity-[0.05]" />
            </div>

            {/* Main content wrapper */}
            <div className="w-full relative z-10">
                <FoxyHero
                    backgroundColor="transparent"
                    hideHeader={true}
                    logo={{
                        text: (
                            <div className="flex items-center gap-4">
                                <span className="text-2xl font-black tracking-tighter italic uppercase text-foreground">
                                    ONENIL<span className="text-blue-600">.</span>
                                </span>
                            </div>
                        ),
                    }}
                    navigation={[]}
                    topLabel={
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center justify-center gap-4 mb-12"
                        >
                            <div className="h-0.5 w-12 bg-blue-600 rounded-full" />
                            <span className="text-[0.7rem] font-black tracking-[0.5em] uppercase text-blue-600">
                                Experimental Prototype v.2.049
                            </span>
                            <div className="h-0.5 w-12 bg-blue-600 rounded-full" />
                        </motion.div>
                    }
                    title={
                        <div className="flex flex-col items-center gap-2">
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tighter leading-[0.8] uppercase italic text-center"
                            >
                                <span className="block text-foreground drop-shadow-sm">System</span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 drop-shadow-xl animate-gradient">Override.</span>
                            </motion.h1>
                        </div>
                    }
                    description={
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-2xl md:text-3xl font-light text-muted-foreground leading-relaxed max-w-4xl mx-auto mt-12 text-center"
                        >
                            The intersection of proprietary material science and human biomechanical optimization.
                            Engineering equipment for those who refuse to acknowledge limits.
                        </motion.p>
                    }
                    leftImage="/images/player-left.png"
                    rightImage="/images/player-right.png"
                    ctaButtons={{
                        primary: {
                            label: (
                                <span className="flex items-center gap-4 py-2">
                                    Initialize Shop
                                    <div className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </span>
                            ),
                            onClick: () => router.push('/shop'),
                        },
                        secondary: {
                            label: (
                                <span className="flex items-center gap-3">
                                    Core Tech
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                                </span>
                            ),
                            onClick: () => router.push('/technology'),
                        },
                    }}
                    className="relative z-10"
                />
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <div className="text-[0.6rem] font-black tracking-[0.4em] uppercase text-muted-foreground">Scroll to Begin</div>
                <div className="w-px h-16 bg-gradient-to-b from-blue-600 via-transparent to-transparent" />
            </motion.div>
        </div>
    );
}