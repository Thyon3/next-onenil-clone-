"use client";

import { FoxyHero } from "@/components/ui/foxy-hero";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Hero() {
    const router = useRouter();
    return (
        <div className="relative overflow-hidden bg-background">
            {/* Enhanced layered background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Base gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />

                {/* Animated gradient orbs */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accentBlue/5 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl opacity-50" />

                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(var(--border-color)_1px,transparent_1px),linear-gradient(90deg,var(--border-color)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

                {/* Subtle noise texture */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%221%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22256%22 height=%22256%22 filter=%22url(%23noise)%22 opacity=%220.15%22/%3E%3C/svg%3E')] opacity-[0.03]" />
            </div>

            {/* Main content wrapper */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <FoxyHero
                    backgroundColor="transparent"
                    hideHeader={true}
                    logo={{
                        text: (
                            <div className="flex items-center gap-3">
                                <div className="h-5 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-cyan-400 rounded-full" />
                                <span className="text-xl font-bold tracking-[0.2em] uppercase text-foreground">
                                    ATHLON
                                </span>
                            </div>
                        ),
                    }}
                    navigation={[]}
                    topLabel={
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                            <span className="text-sm font-medium tracking-[0.3em] uppercase text-blue-400">
                                PERFORMANCE REDEFINED
                            </span>
                            <div className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                        </div>
                    }
                    title={
                        <div className="flex flex-col items-center">
                            <div className="relative mb-2">
                                <span className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-[-0.05em] leading-none select-none opacity-20 absolute -top-8 left-1/2 -translate-x-1/2 text-foreground blur-sm">
                                    ELITE
                                </span>
                                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-[-0.02em] leading-none uppercase">
                                    <span className="relative z-10 bg-gradient-to-b from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent drop-shadow-2xl">
                                        ELITE
                                    </span>
                                </h1>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="h-px w-8 md:w-16 bg-blue-500/50" />
                                <span className="text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter uppercase bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                                    PERFORMANCE
                                </span>
                                <div className="h-px w-8 md:w-16 bg-blue-500/50" />
                            </div>
                        </div>
                    }
                    description={
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Advanced athletic wear engineered for peak performance.
                            Combining cutting-edge technology with premium materials
                            to elevate every movement.
                        </p>
                    }
                    leftImage="/images/player-left.png"
                    rightImage="/images/player-right.png"
                    ctaButtons={{
                        primary: {
                            label: (
                                <span className="flex items-center gap-2">
                                    Shop Collection
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            ),
                            onClick: () => router.push('/shop'),
                        },
                        secondary: {
                            label: "Explore Tech",
                            onClick: () => console.log("Technology details"),
                        },
                    }}
                    className="relative z-10"
                />
            </motion.div>
        </div>
    );
}