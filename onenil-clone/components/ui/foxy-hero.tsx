"use client";

import React, { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface FoxyHeroProps {
    logo?: {
        icon?: React.ReactNode;
        text: string | React.ReactNode;
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
    topLabel?: string | React.ReactNode;
    title: string | React.ReactNode;
    description?: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    ctaButtons?: {
        primary: {
            label: string | React.ReactNode;
            onClick: () => void;
        };
        secondary: {
            label: string | React.ReactNode;
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
    topLabel,
    title,
    description,
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
    const { scrollY } = useScroll();

    // Parallax effects
    const leftPlayerY = useTransform(scrollY, [0, 500], [0, -40]);
    const rightPlayerY = useTransform(scrollY, [0, 500], [0, 40]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 25, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 100,
            },
        },
    };

    return (
        <section
            className={cn(
                "relative w-full min-h-screen flex flex-col overflow-hidden",
                className
            )}
            style={{
                background: backgroundColor === "transparent" ? "transparent" : `linear-gradient(135deg, #0a0a0a 0%, ${backgroundColor} 50%, #000000 100%)`
            }}
            role="banner"
            aria-label="Hero section"
        >
            {/* Professional Background */}
            {backgroundColor !== "transparent" && (
                <div className="absolute inset-0 pointer-events-none">
                    {/* Gradient mesh background */}
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                                            radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`,
                        }}
                    />

                    {/* Grid pattern */}
                    <div
                        className="absolute inset-0 opacity-5"
                        style={{
                            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                                            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                            backgroundSize: '50px 50px',
                        }}
                    />

                    {/* Gradient overlays */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-900/10 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
            )}

            {/* Left Player - Larger & Better Positioned */}
            {leftImage && (
                <motion.div
                    style={{ y: leftPlayerY }}
                    initial={{ x: -150, opacity: 0, scale: 0.95 }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                    className="absolute left-0 lg:left-[-5%] top-1/2 -translate-y-1/2 z-10 w-[50vw] max-w-[900px] h-[80vh] pointer-events-none"
                >
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-full h-full"
                    >
                        <img
                            src={leftImage}
                            alt="Elite Athlete"
                            className="w-full h-full object-contain object-right drop-shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
                            loading="eager"
                        />
                        {/* Subtle glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent blur-3xl -z-10 scale-110" />
                    </motion.div>
                </motion.div>
            )}

            {/* Right Player - Larger & Better Positioned */}
            {rightImage && (
                <motion.div
                    style={{ y: rightPlayerY }}
                    initial={{ x: 150, opacity: 0, scale: 0.95 }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                    className="absolute right-0 lg:right-[-5%] top-1/2 -translate-y-1/2 z-10 w-[50vw] max-w-[900px] h-[80vh] pointer-events-none"
                >
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                        }}
                        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                        className="relative w-full h-full"
                    >
                        <img
                            src={rightImage}
                            alt="Elite Athlete"
                            className="w-full h-full object-contain object-left drop-shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
                            loading="eager"
                        />
                        {/* Subtle glow */}
                        <div className="absolute inset-0 bg-gradient-to-l from-cyan-600/10 to-transparent blur-3xl -z-10 scale-110" />
                    </motion.div>
                </motion.div>
            )}

            {/* Header */}
            {!hideHeader && (
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-6 lg:px-12 py-6"
                >
                    <div className="flex items-center gap-3">
                        {logo.icon}
                        {typeof logo.text === "string" ? (
                            <span className="font-bold text-xl tracking-tight text-white">
                                {logo.text}
                            </span>
                        ) : (
                            logo.text
                        )}
                    </div>

                    {navigation.length > 0 && (
                        <nav className="hidden lg:flex items-center gap-10">
                            {navigation.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={item.onClick}
                                    className={cn(
                                        "text-sm font-medium tracking-wide transition-all duration-300",
                                        item.isActive
                                            ? "text-white border-b-2 border-blue-500 pb-1"
                                            : "text-gray-400 hover:text-white hover:border-b hover:border-gray-500 pb-1"
                                    )}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </nav>
                    )}

                    {headerCta && (
                        <button
                            onClick={headerCta.onClick}
                            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold tracking-wide rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                        >
                            {headerCta.label}
                        </button>
                    )}
                </motion.header>
            )}

            {/* Main Content Container */}
            <div className="relative z-20 flex-1 flex items-center justify-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-0"
                >
                    <div className="flex flex-col items-center text-center space-y-6 lg:space-y-8">
                        {/* Top Label */}
                        {(topLabel || subtitle) && (
                            <motion.div
                                variants={itemVariants}
                                className="w-full"
                            >
                                {typeof (topLabel || subtitle) === "string" ? (
                                    <div className="flex items-center justify-center gap-4">
                                        <div className="h-px w-8 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                                        <span className="text-sm font-semibold tracking-[0.3em] uppercase text-blue-400">
                                            {topLabel || subtitle}
                                        </span>
                                        <div className="h-px w-8 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                                    </div>
                                ) : (
                                    topLabel || subtitle
                                )}
                            </motion.div>
                        )}

                        {/* Title - Professional Typography */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-1 lg:space-y-2"
                        >
                            {typeof title === "string" ? (
                                <div className="relative">
                                    {/* Subdued background text for depth */}
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[clamp(80px,15vw,180px)] font-black tracking-tighter text-white/5 select-none pointer-events-none">
                                        ELITE
                                    </div>

                                    {/* Main title with professional styling */}
                                    <div className="space-y-1">
                                        <h1 className="text-[clamp(48px,8vw,120px)] font-bold tracking-[-0.02em] leading-[0.9] uppercase">
                                            <span className="bg-gradient-to-b from-white via-white to-white/90 bg-clip-text text-transparent">
                                                ELITE
                                            </span>
                                        </h1>
                                        <h2 className="text-[clamp(56px,9vw,140px)] font-bold tracking-[-0.01em] leading-[0.9] uppercase mt-2">
                                            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                                PERFORMANCE
                                            </span>
                                        </h2>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    {title}
                                </div>
                            )}
                        </motion.div>

                        {/* Description - Clean & Professional */}
                        {description && (
                            <motion.div
                                variants={itemVariants}
                                className="max-w-2xl mx-auto pt-4 lg:pt-6"
                            >
                                {typeof description === "string" ? (
                                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed tracking-wide font-light">
                                        {description}
                                    </p>
                                ) : (
                                    description
                                )}
                            </motion.div>
                        )}

                        {/* CTA Buttons - Professional */}
                        {ctaButtons && (
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row items-center gap-4 pt-8"
                            >
                                <button
                                    onClick={ctaButtons.primary.onClick}
                                    className="group relative px-8 lg:px-10 py-3 lg:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-base tracking-wide rounded-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {ctaButtons.primary.label}
                                        <svg
                                            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />
                                </button>

                                <button
                                    onClick={ctaButtons.secondary.onClick}
                                    className="group px-8 lg:px-10 py-3 lg:py-4 border border-gray-700 text-white font-medium text-base tracking-wide rounded-lg hover:border-gray-500 hover:bg-white/5 transition-all duration-300"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {ctaButtons.secondary.label}
                                        <svg
                                            className="w-4 h-4 opacity-70"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </button>
                            </motion.div>
                        )}

                        {/* Performance Metrics - Professional */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-3 gap-8 pt-12 mt-12 border-t border-gray-800/30 max-w-xl"
                        >
                            {[
                                { value: "98%", label: "Performance", sublabel: "Boost" },
                                { value: "24/7", label: "Biometric", sublabel: "Tracking" },
                                { value: "3D", label: "Motion", sublabel: "Fit" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-2xl font-bold text-white tracking-tight">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {stat.sublabel}
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Children */}
                        {children}
                    </div>
                </motion.div>
            </div>

            {/* Dashboard Image */}
            {dashboardImage && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="relative z-20 px-4 max-w-6xl mx-auto mt-16 lg:mt-24"
                >
                    <div className="relative rounded-xl overflow-hidden border border-gray-800">
                        <img
                            src={dashboardImage}
                            alt="Dashboard"
                            className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>
                </motion.div>
            )}

            {/* Professional Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="flex flex-col items-center">
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-4 h-8 flex flex-col items-center"
                    >
                        <div className="w-px h-4 bg-gray-400 rounded-full" />
                        <div className="w-px h-4 bg-gray-600 rounded-full mt-1" />
                    </motion.div>
                    <span className="text-xs text-gray-500 uppercase tracking-widest mt-2">
                        Scroll
                    </span>
                </div>
            </motion.div>
        </section>
    );
}