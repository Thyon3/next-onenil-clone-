"use client";

import Link from 'next/link';
import Menu from './Menu';
import { useCart } from '@/lib/cart-context';
import { FiShoppingBag, FiSun, FiMoon } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useTheme } from '@/lib/theme-context';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const { cartCount } = useCart();
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-[100] px-10 py-8 transition-all duration-500 border-b border-transparent bg-background/0 hover:bg-background/80 hover:backdrop-blur-xl hover:border-border">
            <div className="max-w-[1800px] mx-auto flex items-center justify-between">
                <div className="z-[101]">
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="relative">
                            <span className="text-3xl font-black tracking-tighter italic uppercase text-foreground">
                                ONENIL<span className="text-blue-600">.</span>
                            </span>
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-500" />
                        </div>
                    </Link>
                </div>

                <nav className="flex items-center gap-16">
                    <div className="hidden lg:flex items-center gap-12">
                        {[
                            { label: 'Infrastructure', href: '/technology' },
                            { label: 'Market', href: '/shop' },
                            { label: 'Protocols', href: '/contact' }
                        ].map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-muted-foreground hover:text-foreground transition-all duration-300 relative group py-2"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-8 pl-12 border-l border-border/50">
                        <Link href="/cart" className="relative group p-3 text-foreground hover:text-blue-600 transition-all duration-300 rounded-xl bg-card border border-border">
                            <FiShoppingBag className="text-xl" />
                            <AnimatePresence>
                                {mounted && cartCount > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="absolute -top-2 -right-2 bg-blue-600 text-white text-[0.55rem] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-background"
                                    >
                                        {cartCount}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </Link>

                        <button
                            onClick={toggleTheme}
                            className="p-3 rounded-xl bg-card border border-border text-foreground hover:bg-foreground hover:text-background transition-all duration-500 shadow-sm"
                            aria-label="Toggle theme"
                        >
                            {mounted && (theme === 'dark' ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />)}
                        </button>

                        <Menu />
                    </div>
                </nav>
            </div>
        </header>
    );
}

