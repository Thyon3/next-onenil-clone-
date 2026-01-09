'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import {
    FiHome,
    FiShoppingBag,
    FiBriefcase,
    FiArchive,
    FiUsers,
    FiUser,
    FiMail,
    FiMapPin,
    FiGlobe,
    FiAward,
    FiActivity,
    FiZap
} from 'react-icons/fi';

const menuItems = [
    {
        label: 'Home',
        href: '/',
        icon: <FiHome className="w-6 h-6" />,
        color: 'from-blue-500 to-cyan-400',
        description: 'Performance technology hub'
    },
    {
        label: 'Technology',
        href: '/technology',
        icon: <FiAward className="w-6 h-6" />,
        color: 'from-purple-500 to-pink-400',
        description: 'Innovative sports technology'
    },
    {
        label: 'Collections',
        href: '/collections',
        icon: <FiShoppingBag className="w-6 h-6" />,
        color: 'from-green-500 to-emerald-400',
        description: 'Performance engineered wear'
    },
    {
        label: 'Research',
        href: '/research',
        icon: <FiActivity className="w-6 h-6" />,
        color: 'from-orange-500 to-amber-400',
        description: 'Sports science & innovation'
    },
    {
        label: 'Athletes',
        href: '/athletes',
        icon: <FiUser className="w-6 h-6" />,
        color: 'from-cyan-500 to-blue-400',
        description: 'Elite athlete partnerships'
    },
    {
        label: 'Careers',
        href: '/careers',
        icon: <FiUsers className="w-6 h-6" />,
        color: 'from-pink-500 to-rose-400',
        description: 'Join our innovation team'
    },
    {
        label: 'Contact',
        href: '/contact',
        icon: <FiMail className="w-6 h-6" />,
        color: 'from-indigo-500 to-purple-400',
        description: 'Get in touch with us'
    },
];

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const toggleMenu = () => {
        if (!isOpen) {
            setIsOpen(true);
            setTimeout(() => setIsVisible(true), 10);
        } else {
            setIsVisible(false);
            setTimeout(() => setIsOpen(false), 400);
        }
    };

    const closeMenu = () => {
        setIsVisible(false);
        setTimeout(() => setIsOpen(false), 400);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {/* Menu Toggle Button */}
            <button
                className="relative z-[100] p-3 rounded-lg bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
                onClick={toggleMenu}
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                <div className="flex flex-col items-center justify-center w-6 h-5 relative">
                    <span className={`absolute top-0 w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isVisible ? 'rotate-45 top-2' : ''}`}></span>
                    <span className={`absolute top-2 w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isVisible ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`absolute bottom-0 w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isVisible ? '-rotate-45 top-2' : ''}`}></span>
                </div>
                <span className="sr-only">Menu</span>
            </button>

            {/* Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-[9999]">
                    {/* Backdrop Layer - Semi-transparent dark overlay */}
                    <div
                        className={`absolute inset-0 bg-black transition-opacity duration-400 ${isVisible ? 'opacity-60' : 'opacity-0'}`}
                        onClick={closeMenu}
                    />

                    {/* Menu Sidebar Container */}
                    <div
                        className={`absolute inset-y-0 right-0 w-full max-w-4xl bg-gray-900 shadow-2xl transition-transform duration-500 ease-out ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Gray Background with Subtle Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950" />

                        {/* Subtle Pattern Overlay */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
                                                linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)`,
                                backgroundSize: '50px 50px',
                            }} />
                        </div>

                        {/* Accent Gradient Edge */}
                        <div className="absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-blue-500 via-cyan-400 to-purple-500" />

                        {/* Menu Content */}
                        <div className="relative z-10 h-full overflow-y-auto">
                            {/* Menu Header */}
                            <div className="px-8 py-6 border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm">
                                <div className="flex items-center justify-between">
                                    <Link
                                        href="/"
                                        onClick={closeMenu}
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="relative">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                                                <div className="text-white font-bold text-lg">A</div>
                                            </div>
                                            <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                        </div>
                                        <div>
                                            <span className="text-xl font-bold tracking-tight text-white">ATHLON</span>
                                            <div className="text-xs text-gray-400">Performance Technology</div>
                                        </div>
                                    </Link>

                                    <div className="flex items-center gap-4">
                                        <Link
                                            href="/contact"
                                            onClick={closeMenu}
                                            className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium text-sm rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all hidden md:block"
                                        >
                                            Contact
                                        </Link>
                                        <button
                                            onClick={toggleMenu}
                                            className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-gray-600 hover:bg-gray-800 transition-all group"
                                            aria-label="Close menu"
                                        >
                                            <IoClose className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Main Menu Content */}
                            <div className="px-8 py-8">
                                {/* Navigation Links */}
                                <div className="mb-12">
                                    <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6 px-2">
                                        Navigation
                                    </h3>
                                    <nav className="space-y-2">
                                        {menuItems.map((item, index) => (
                                            <div
                                                key={index}
                                                className="opacity-0 animate-fadeIn"
                                                style={{ animationDelay: `${index * 0.1}s` }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    onClick={closeMenu}
                                                    className="group block"
                                                >
                                                    <div className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-gray-800/50 hover:border-gray-700 border border-transparent">
                                                        {/* Icon */}
                                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                                            <div className="text-white">
                                                                {item.icon}
                                                            </div>
                                                        </div>

                                                        {/* Text Content */}
                                                        <div className="flex-1">
                                                            <h3 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-300">
                                                                {item.label}
                                                            </h3>
                                                            <p className="text-gray-400 mt-1 text-sm">
                                                                {item.description}
                                                            </p>
                                                        </div>

                                                        {/* Arrow */}
                                                        <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/20 transition-all duration-300">
                                                            <svg className="w-3 h-3 text-gray-400 group-hover:text-blue-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </nav>
                                </div>

                                {/* Contact & Info Section */}
                                <div className="bg-gray-800/30 rounded-2xl border border-gray-800 p-6 mb-8">
                                    <h3 className="text-lg font-semibold text-white mb-6">
                                        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                            Contact Information
                                        </span>
                                    </h3>

                                    <div className="space-y-6">
                                        {/* Headquarters */}
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                                                <FiMapPin className="w-4 h-4 text-blue-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-white mb-1">Global Headquarters</h4>
                                                <address className="not-italic text-gray-300 text-sm leading-relaxed">
                                                    123 Performance Drive<br />
                                                    San Francisco, CA 94107<br />
                                                    United States
                                                </address>
                                            </div>
                                        </div>

                                        {/* Contact */}
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                                                <FiMail className="w-4 h-4 text-cyan-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-white mb-1">Contact</h4>
                                                <div className="space-y-1">
                                                    <a
                                                        href="mailto:contact@athlon.tech"
                                                        className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        contact@athlon.tech
                                                    </a>
                                                    <a
                                                        href="tel:+14155550123"
                                                        className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        +1 (415) 555-0123
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Social Links */}
                                        <div className="pt-4 border-t border-gray-800">
                                            <h4 className="font-medium text-white mb-3">Follow Us</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {['LinkedIn', 'Twitter', 'Instagram', 'YouTube'].map((platform) => (
                                                    <a
                                                        key={platform}
                                                        href="#"
                                                        className="px-3 py-1.5 bg-gray-900/50 text-gray-300 rounded-lg border border-gray-800 hover:border-gray-700 hover:text-white transition-all text-xs"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        {platform}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Newsletter Signup */}
                                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl border border-gray-800 p-6">
                                    <h4 className="font-medium text-white mb-3">Stay Updated</h4>
                                    <p className="text-gray-400 text-sm mb-4">
                                        Subscribe to our newsletter for performance insights.
                                    </p>
                                    <form
                                        className="flex flex-col sm:flex-row gap-3"
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                        }}
                                    >
                                        <input
                                            type="email"
                                            placeholder="Your email"
                                            className="flex-1 px-4 py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm"
                                            onClick={(e) => e.stopPropagation()}
                                        />
                                        <button
                                            type="submit"
                                            className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all text-sm whitespace-nowrap"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="px-8 py-6 border-t border-gray-800 bg-gray-900/50 mt-auto">
                                <div className="text-center text-gray-500 text-xs">
                                    <p>© {new Date().getFullYear()} Athlon Performance Technologies</p>
                                    <div className="flex flex-wrap justify-center gap-4 mt-2">
                                        <Link href="/privacy" className="hover:text-gray-300 transition-colors" onClick={closeMenu}>Privacy</Link>
                                        <Link href="/terms" className="hover:text-gray-300 transition-colors" onClick={closeMenu}>Terms</Link>
                                        <Link href="/cookies" className="hover:text-gray-300 transition-colors" onClick={closeMenu}>Cookies</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Animation Styles */}
            <style jsx global>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(8px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.4s ease-out forwards;
                }
                
                /* Custom scrollbar for menu */
                .overflow-y-auto {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(100, 116, 139, 0.5) transparent;
                }
                
                .overflow-y-auto::-webkit-scrollbar {
                    width: 6px;
                }
                
                .overflow-y-auto::-webkit-scrollbar-track {
                    background: transparent;
                }
                
                .overflow-y-auto::-webkit-scrollbar-thumb {
                    background-color: rgba(100, 116, 139, 0.5);
                    border-radius: 3px;
                }
            `}</style>
        </>
    );
}