'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
        return () => {
            document.body.classList.remove('menu-open');
        };
    }, [isOpen]);

    return (
        <>
            <button
                className="bg-transparent border-0 cursor-pointer p-2 flex flex-col gap-[6px] relative z-[1001]"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                <span className={`block w-[30px] h-[2px] bg-white transition-all ${isOpen ? 'rotate-45 translate-x-[5px] translate-y-[5px]' : ''}`}></span>
                <span className={`block w-[30px] h-[2px] bg-white transition-all ${isOpen ? '-rotate-45 translate-x-[5px] -translate-y-[5px]' : ''}`}></span>
            </button>

            <div className={`fixed inset-0 bg-black z-[1000] flex items-center justify-center transition-opacity ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="w-full max-w-[1800px] grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-16 items-center p-[120px] md:px-[60px]">
                    <nav className="flex flex-col gap-6">
                        <Link href="/work" className="text-white text-[clamp(42px,8vw,140px)] font-bold uppercase leading-[0.9] hover:text-[#ff4d6d] transition" onClick={toggleMenu}>
                            Work
                        </Link>
                        <Link href="/archive" className="text-white text-[clamp(42px,8vw,140px)] font-bold uppercase leading-[0.9] hover:text-[#00e5ff] transition" onClick={toggleMenu}>
                            Archive
                        </Link>
                        <Link href="/jobs" className="text-white text-[clamp(42px,8vw,140px)] font-bold uppercase leading-[0.9] hover:text-[#ffd166] transition" onClick={toggleMenu}>
                            Jobs
                        </Link>
                        <Link href="/contact" className="text-white text-[clamp(42px,8vw,140px)] font-bold uppercase leading-[0.9] hover:text-[#9d4edd] transition" onClick={toggleMenu}>
                            Contact
                        </Link>
                    </nav>

                    <div className="justify-self-end flex flex-col gap-6 text-white text-base leading-7 opacity-85">
                        <div>
                            <div className="flex flex-col">
                                <span>Sarphatikade 14</span>
                                <span>1017 WV Amsterdam</span>
                                <span>Netherlands</span>
                            </div>
                            <a href="mailto:hello@onenil.com" className="text-white hover:text-[#9d4edd] transition">hello@onenil.com</a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <a href="https://twitter.com" className="text-white hover:text-[#9d4edd] transition">Twitter</a>
                            <a href="https://instagram.com" className="text-white hover:text-[#9d4edd] transition">Instagram</a>
                            <a href="https://linkedin.com" className="text-white hover:text-[#9d4edd] transition">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
