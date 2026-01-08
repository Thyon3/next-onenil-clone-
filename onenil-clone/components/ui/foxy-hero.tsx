"use client";

import React from "react";
import { motion } from "framer-motion";
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
    backgroundColor = "#000000",
    hideHeader = false,
    className,
    children,
}: FoxyHeroProps) {
    const titleWords = title.split(" ");

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
            style={{ background: backgroundColor }}
            role="banner"
            aria-label="Hero section"
        >
            {/* Minimalist Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(to right, #ffffff11 1px, transparent 1px), linear-gradient(to bottom, #ffffff11 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
                <div className="absolute inset-0 bg-radial-[circle_at_50%_50%] from-transparent to-black" />
            </div>

            {/* Subtle Gradient Glows */}
            <motion.div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20"
                style={{
                    background: "radial-gradient(circle, #9d4edd 0%, transparent 70%)",
                    filter: "blur(100px)",
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

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
                className="relative z-10 flex flex-col items-center px-4 max-w-[1200px]"
            >
                <motion.span
                    variants={itemVariants}
                    className="text-white/60 font-medium tracking-[0.3em] uppercase mb-6 text-sm md:text-base"
                >
                    {subtitle}
                </motion.span>

                <motion.h1
                    className="text-center font-heading font-bold text-white text-[clamp(40px,9vw,120px)] leading-[0.9] tracking-tighter uppercase mb-12"
                >
                    {titleWords.map((word, i) => (
                        <motion.span
                            key={i}
                            variants={itemVariants}
                            className="inline-block mr-[0.2em]"
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>

                {ctaButtons && (
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-row flex-wrap justify-center items-center gap-6"
                    >
                        <button
                            onClick={ctaButtons.primary.onClick}
                            className="bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-tighter hover:scale-105 transition duration-300"
                        >
                            {ctaButtons.primary.label}
                        </button>
                        <button
                            onClick={ctaButtons.secondary.onClick}
                            className="border border-white/20 text-white px-10 py-4 rounded-full font-bold uppercase tracking-tighter hover:bg-white/10 hover:border-white/40 transition duration-300 backdrop-blur-sm"
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
                        className="mt-24 w-full max-w-[1000px] relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                        <img
                            src={dashboardImage}
                            alt="Dashboard"
                            className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl"
                        />
                    </motion.div>
                )}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </section>
    );
}
