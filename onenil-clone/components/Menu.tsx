'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { BsRocketTakeoffFill } from 'react-icons/bs';

const menuItems = [
    { label: 'Work', href: '/work', color: '#ff4d6d' },
    { label: 'Archive', href: '/archive', color: '#00e5ff' },
    { label: 'Jobs', href: '/jobs', color: '#ffd166' },
    { label: 'Contact', href: '/contact', color: '#9d4edd' },
];

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
                <div className="w-[30px] flex flex-col items-end gap-[6px]">
                    <span className={`block w-full h-[2px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block w-[20px] h-[2px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                </div>
            </button>

            <div className={`fixed inset-0 bg-black z-[2000] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
                {/* Menu Header */}
                <div className="w-full max-w-[1800px] mx-auto px-8 py-6 flex items-center justify-between">
                    <div className="text-white text-2xl">
                        <BsRocketTakeoffFill />
                    </div>
                    <div className="flex items-center gap-8">
                        <Link
                            href="/contact"
                            onClick={toggleMenu}
                            className="bg-white text-black px-6 py-2 rounded-full font-manrope font-bold text-sm uppercase tracking-wide hover:bg-[#9d4edd] hover:text-white transition-colors"
                        >
                            Get in touch
                        </Link>
                        <button onClick={toggleMenu} className="text-white text-3xl hover:text-gray-400 transition-colors">
                            <IoClose />
                        </button>
                    </div>
                </div>

                {/* Menu Content */}
                <div className="flex-1 w-full max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 pb-12 items-center">

                    {/* Links Column */}
                    <nav className="flex flex-col gap-2">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="group relative w-fit overflow-hidden"
                                onClick={toggleMenu}
                            >
                                <span
                                    className="font-heading font-bold uppercase text-[clamp(40px,7vw,100px)] leading-[1.1] text-white transition-colors duration-300 group-hover:text-[var(--hover-color)]"
                                    style={{ '--hover-color': item.color } as any}
                                >
                                    {item.label}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    {/* Info Column */}
                    <div className="flex flex-col gap-12 text-white/70 font-manrope text-sm lg:pl-20 mt-8 lg:mt-0 lg:items-start">
                        <div className="flex flex-col gap-1">
                            <p>Sarphatikade 14</p>
                            <p>1017 WV Amsterdam</p>
                            <p>Netherlands</p>
                        </div>

                        <a href="mailto:hello@onenil.com" className="text-white hover:text-white/100 transition-colors">
                            hello@onenil.com
                        </a>

                        <div className="flex flex-col gap-2">
                            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
                            <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
                            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
