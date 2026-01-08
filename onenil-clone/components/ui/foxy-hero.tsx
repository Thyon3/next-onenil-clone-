"use client";

import React, { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface FoxyHeroProps {
    logo?: {
        icon?: React.ReactNode;
        text: string;
    };
    navigation?: Array<{
        label: string;
        isActive?: boolean;
        onClick?: () => void;
    }>;
    headerCta?: {
        label: string;
        onClick: () => void;
    };
    title: string;
    subtitle: string;
    ctaButtons?: {
        primary: {
            label: string;
            onClick: () => void;
        };
        secondary: {
            label: string;
            onClick: () => void;
        };
    };
    dashboardImage?: string;
    leftImage?: string;
    rightImage?: string;
    backgroundColor?: string;
    hideHeader?: boolean;
    className?: string;
    children?: React.ReactNode;
}

export function FoxyHero({
    logo = { text: "Foxy" },
    navigation = [],
    headerCta,
    title,
    subtitle,
    ctaButtons,
    dashboardImage,
    leftImage,
    rightImage,
    backgroundColor = "#020205",
    hideHeader = false,
    className,
    children,
}: FoxyHeroProps) {
    const titleWords = title.split(" ");
    const { scrollY } = useScroll();

    // Parallax effects for the players
    const leftPlayerY = useTransform(scrollY, [0, 500], [0, -50]);
    const rightPlayerY = useTransform(scrollY, [0, 500], [0, 50]);

    // Generate stars for the night sky effect
    const stars = useMemo(() => {
        return Array.from({ length: 150 }).map((_, i) => ({
            id: i,
            size: Math.random() * 2 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7 + 0.3,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 5,
        }));
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <section
            className={cn(
                "relative w-full h-screen flex flex-col items-center justify-center overflow-hidden",
                className
            )}
            style={{
                background: `radial-gradient(circle at center, #0a0a1a 0%, ${backgroundColor} 100%)`
            }}
            role="banner"
            aria-label="Hero section"
        >
            {/* Space Background Layers */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Stars */}
                {stars.map((star) => (
                    <motion.div
                        key={star.id}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: star.size,
                            height: star.size,
                            top: star.top,
                            left: star.left,
                            opacity: star.opacity,
                        }}
                        animate={{
                            opacity: [star.opacity, 0.2, star.opacity],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            delay: star.delay,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* Galaxy / Nebula Effects */}
                <motion.div
                    className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full opacity-20"
                    style={{
                        background: "radial-gradient(circle, #4a148c 0%, transparent 70%)",
                        filter: "blur(120px)",
                    }}
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.2, 0.1],
                        rotate: [0, 10, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Left Player (3D Object Look) */}
            {leftImage && (
                <motion.div
                    style={{ y: leftPlayerY }}
                    initial={{ x: -200, opacity: 0, scale: 0.8 }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                    className="absolute left-[-15%] bottom-[-10%] z-20 w-[55vw] max-w-[800px] pointer-events-none"
                >
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <img
                            src={leftImage}
                            alt="Elite Athlete Left"
                            className="w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)] filter contrast-110 brightness-110"
                        />
                        {/* Subtle glow behind player */}
                        <div className="absolute inset-0 bg-blue-500/10 blur-[100px] -z-10 rounded-full" />
                    </motion.div>
                </motion.div>
            )}

            {/* Right Player (3D Object Look) */}
            {rightImage && (
                <motion.div
                    style={{ y: rightPlayerY }}
                    initial={{ x: 200, opacity: 0, scale: 0.8 }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
                    className="absolute right-[-15%] bottom-[-10%] z-20 w-[55vw] max-w-[800px] pointer-events-none"
                >
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                        <img
                            src={rightImage}
                            alt="Elite Athlete Right"
                            className="w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)] filter contrast-110 brightness-110"
                        />
                        {/* Subtle glow behind player */}
                        <div className="absolute inset-0 bg-purple-500/10 blur-[100px] -z-10 rounded-full" />
                    </motion.div>
                </motion.div>
            )}

            {/* Header (if visible) */}
            {!hideHeader && (
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-0 left-0 right-0 z-50 flex flex-row justify-between items-center px-10 py-8"
                >
                    <div className="flex flex-row items-center gap-2">
                        {logo.icon}
                        <span className="font-heading font-bold text-2xl tracking-tight text-white uppercase">
                            {logo.text}
                        </span>
                    </div>

                    <nav className="hidden lg:flex flex-row items-center gap-8">
                        {navigation.map((item, index) => (
                            <button
                                key={index}
                                onClick={item.onClick}
                                className={cn(
                                    "transition-all text-lg font-medium",
                                    item.isActive ? "text-white" : "text-white/50 hover:text-white"
                                )}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {headerCta && (
                        <button
                            onClick={headerCta.onClick}
                            className="bg-white text-black px-6 py-2 rounded-full font-bold uppercase tracking-tight hover:bg-white/90 transition"
                        >
                            {headerCta.label}
                        </button>
                    )}
                </motion.header>
            )}

            {/* Main Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-30 flex flex-col items-center px-4 max-w-[1400px]"
            >
                <motion.span
                    variants={itemVariants}
                    className="text-neutral-400 font-medium tracking-[0.5em] uppercase mb-8 text-xs md:text-sm"
                >
                    {subtitle}
                </motion.span>

                <motion.h1
                    className="text-center font-heading font-bold text-[clamp(32px,6vw,90px)] leading-[1] tracking-tighter uppercase mb-16 max-w-[1200px]"
                    style={{
                        color: "#E5E7EB", // neutral-200 for a "friendlier" silver-white
                    }}
                >
                    {titleWords.map((word, i) => (
                        <motion.span
                            key={i}
                            variants={itemVariants}
                            className="inline-block mr-[0.3em]"
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>

                {ctaButtons && (
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-row flex-wrap justify-center items-center gap-8"
                    >
                        <button
                            onClick={ctaButtons.primary.onClick}
                            className="bg-neutral-100 text-black px-12 py-5 rounded-full font-bold uppercase tracking-tight hover:scale-105 hover:bg-white transition duration-300"
                        >
                            {ctaButtons.primary.label}
                        </button>
                        <button
                            onClick={ctaButtons.secondary.onClick}
                            className="border border-neutral-700 text-neutral-300 px-12 py-5 rounded-full font-bold uppercase tracking-tight hover:bg-white/5 hover:border-neutral-500 transition duration-300 backdrop-blur-md"
                        >
                            {ctaButtons.secondary.label}
                        </button>
                    </motion.div>
                )}

                {children}

                {/* Dashboard Image (Optional) */}
                {dashboardImage && (
                    <motion.div
                        variants={itemVariants}
                        className="mt-24 w-full max-w-[1000px] relative px-4"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                        <img
                            src={dashboardImage}
                            alt="Dashboard"
                            className="w-full h-auto rounded-2xl border border-white/5 shadow-2xl"
                        />
                    </motion.div>
                )}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-neutral-500 to-transparent" />
            </motion.div>
        </section>
    );
}
