"use client";

import Link from 'next/link';
import Menu from './Menu';
import { useCart } from '@/lib/cart-context';
import { FiShoppingBag, FiSun, FiMoon } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useTheme } from '@/lib/theme-context';

export default function Header() {
    const { cartCount } = useCart();
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-[100] px-8 py-6 text-white transition-transform mix-blend-difference">
            <div className="max-w-[1800px] mx-auto flex items-center justify-between">
                <div className="z-[101]">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="h-6 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-400 group-hover:h-8 transition-all duration-300" />
                        <span className="text-2xl font-bold tracking-wider bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-heading uppercase">
                            ATHLON
                        </span>
                    </Link>
                </div>
                <nav className="flex items-center gap-12">
                    <Link
                        href="/shop"
                        className="font-manrope text-[0.85rem] uppercase font-semibold tracking-widest relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-white after:transform after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                    >
                        Store
                    </Link>
                    <Link
                        href="/contact"
                        className="font-manrope text-[0.85rem] uppercase font-semibold tracking-widest relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-white after:transform after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                    >
                        Get in touch
                    </Link>

                    <Link href="/cart" className="relative group p-2">
                        <FiShoppingBag className="text-xl group-hover:text-blue-400 transition-colors" />
                        {mounted && cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-blue-600 text-[0.6rem] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-in zoom-in duration-300">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {mounted && (theme === 'dark' ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />)}
                    </button>

                    <Menu />
                </nav>
            </div>
        </header>
    );
}

