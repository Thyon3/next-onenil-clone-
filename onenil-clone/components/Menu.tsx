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
        href: '/shop',
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
                className="relative z-[100] p-3 rounded-lg bg-card backdrop-blur-sm border border-border hover:border-accentBlue/30 transition-all duration-300 group"
                onClick={toggleMenu}
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                <div className="flex flex-col items-center justify-center w-6 h-5 relative">
                    <span className={`absolute top-0 w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 ${isVisible ? 'rotate-45 top-2' : ''}`}></span>
                    <span className={`absolute top-2 w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 ${isVisible ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`absolute bottom-0 w-6 h-0.5 bg-foreground rounded-full transition-all duration-300 ${isVisible ? '-rotate-45 top-2' : ''}`}></span>
                </div>
                <span className="sr-only">Menu</span>
            </button>

            {/* Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-[9999]">
                    {/* Backdrop Layer - Semi-transparent dark overlay */}
                    <div
                        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                        onClick={closeMenu}
                    />

                    {/* Menu Sidebar Container */}
                    <div
                        className={`absolute inset-y-0 right-0 w-full max-w-4xl bg-background shadow-2xl transition-transform duration-500 ease-out ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Gray Background with Subtle Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />

                        {/* Subtle Pattern Overlay */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `linear-gradient(90deg, var(--border-color) 1px, transparent 1px),
                                                linear-gradient(var(--border-color) 1px, transparent 1px)`,
                                backgroundSize: '50px 50px',
                            }} />
                        </div>

                        {/* Accent Gradient Edge */}
                        <div className="absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-blue-600 via-cyan-500 to-blue-700" />

                        {/* Menu Content */}
                        <div className="relative z-10 h-full overflow-y-auto">
                            {/* Menu Header */}
                            <div className="px-8 py-6 border-b border-border bg-background/80 backdrop-blur-md">
                                <div className="flex items-center justify-between">
                                    <Link
                                        href="/"
                                        onClick={closeMenu}
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="relative">
                                            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                                                <div className="text-white font-black text-lg">A</div>
                                            </div>
                                            <div className="absolute -inset-1 bg-blue-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                        </div>
                                        <div>
                                            <span className="text-xl font-black tracking-tight text-foreground uppercase">ATHLON</span>
                                            <div className="text-[0.6rem] text-muted-foreground uppercase font-black tracking-widest">Performance Technology</div>
                                        </div>
                                    </Link>

                                    <div className="flex items-center gap-4">
                                        <Link
                                            href="/contact"
                                            onClick={closeMenu}
                                            className="px-6 py-2.5 bg-blue-600 text-white font-black uppercase tracking-widest text-xs rounded-lg hover:shadow-lg hover:shadow-blue-600/30 transition-all hidden md:block"
                                        >
                                            Contact
                                        </Link>
                                        <button
                                            onClick={toggleMenu}
                                            className="p-3 rounded-lg bg-muted border border-border hover:border-foreground/20 hover:bg-background transition-all group"
                                            aria-label="Close menu"
                                        >
                                            <IoClose className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Main Menu Content */}
                            <div className="px-8 py-8">
                                {/* Navigation Links */}
                                <div className="mb-12">
                                    <h3 className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-muted-foreground mb-6 px-2">
                                        Navigation
                                    </h3>
                                    <nav className="space-y-4">
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
                                                    <div className="flex items-center gap-6 p-4 rounded-2xl transition-all duration-300 hover:bg-blue-500/5 hover:border-blue-500/20 border border-transparent">
                                                        {/* Icon */}
                                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-500/10`}>
                                                            <div className="text-white">
                                                                {item.icon}
                                                            </div>
                                                        </div>

                                                        {/* Text Content */}
                                                        <div className="flex-1">
                                                            <h3 className="text-2xl font-black text-foreground uppercase tracking-tight group-hover:text-blue-600 transition-all duration-300">
                                                                {item.label}
                                                            </h3>
                                                            <p className="text-muted-foreground mt-1 text-sm font-light">
                                                                {item.description}
                                                            </p>
                                                        </div>

                                                        {/* Arrow */}
                                                        <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </nav>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    {/* Contact & Info Section */}
                                    <div className="bg-card rounded-[2rem] border border-border p-8 shadow-sm">
                                        <h3 className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-blue-600 mb-8">
                                            Contact Information
                                        </h3>

                                        <div className="space-y-8">
                                            {/* Headquarters */}
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                                    <FiMapPin className="w-4 h-4 text-blue-600" />
                                                </div>
                                                <div>
                                                    <h4 className="text-[0.6rem] font-black uppercase tracking-widest text-foreground mb-2">Global Headquarters</h4>
                                                    <address className="not-italic text-muted-foreground text-sm font-light leading-relaxed">
                                                        123 Performance Drive<br />
                                                        San Francisco, CA 94107<br />
                                                        United States
                                                    </address>
                                                </div>
                                            </div>

                                            {/* Contact */}
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                                                    <FiMail className="w-4 h-4 text-cyan-600" />
                                                </div>
                                                <div>
                                                    <h4 className="text-[0.6rem] font-black uppercase tracking-widest text-foreground mb-2">Electronic Mail</h4>
                                                    <div className="space-y-1">
                                                        <a
                                                            href="mailto:contact@athlon.tech"
                                                            className="block text-muted-foreground hover:text-blue-600 transition-colors text-sm font-light"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            contact@athlon.tech
                                                        </a>
                                                        <a
                                                            href="tel:+14155550123"
                                                            className="block text-muted-foreground hover:text-blue-600 transition-colors text-sm font-light"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            +1 (415) 555-0123
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Social Links */}
                                            <div className="pt-8 border-t border-border">
                                                <h4 className="text-[0.6rem] font-black uppercase tracking-widest text-foreground mb-4">Digital Presence</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {['LinkedIn', 'Twitter', 'Instagram', 'YouTube'].map((platform) => (
                                                        <a
                                                            key={platform}
                                                            href="#"
                                                            className="px-4 py-2 bg-muted text-muted-foreground rounded-lg border border-border hover:border-blue-500 hover:text-blue-600 transition-all text-[0.6rem] font-black uppercase tracking-widest"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            {platform}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        {/* Newsletter Signup */}
                                        <div className="bg-blue-600 p-8 rounded-[2rem] shadow-xl shadow-blue-600/20">
                                            <h4 className="text-xl font-black text-white uppercase tracking-tight mb-3">Stay Updated</h4>
                                            <p className="text-white/80 text-sm font-light mb-6">
                                                Join our community for exclusive access to R&D updates and product launches.
                                            </p>
                                            <form
                                                className="space-y-3"
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                }}
                                            >
                                                <input
                                                    type="email"
                                                    placeholder="Your email address"
                                                    className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-white/50 text-sm"
                                                    onClick={(e) => e.stopPropagation()}
                                                />
                                                <button
                                                    type="submit"
                                                    className="w-full py-3.5 bg-white text-blue-600 font-black uppercase tracking-widest text-xs rounded-xl hover:bg-blue-50 transition-all shadow-lg"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    Subscribe
                                                </button>
                                            </form>
                                        </div>

                                        {/* Quick Info */}
                                        <div className="bg-muted p-8 rounded-[2rem] border border-border">
                                            <div className="flex items-center gap-3 mb-4">
                                                <FiGlobe className="text-blue-600" />
                                                <span className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-foreground">Global Operations</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground font-light leading-relaxed">
                                                Operating in over 45 countries with dedicated fulfillment centers in North America, Europe, and Asia-Pacific.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="px-8 py-8 border-t border-border bg-muted/30 mt-auto">
                                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                                    <p className="text-[0.6rem] font-black uppercase tracking-widest text-muted-foreground">© {new Date().getFullYear()} Athlon Performance</p>
                                    <div className="flex flex-wrap justify-center gap-8">
                                        <Link href="/privacy" className="text-[0.6rem] font-black uppercase tracking-widest text-muted-foreground hover:text-blue-600 transition-colors" onClick={closeMenu}>Privacy</Link>
                                        <Link href="/terms" className="text-[0.6rem] font-black uppercase tracking-widest text-muted-foreground hover:text-blue-600 transition-colors" onClick={closeMenu}>Terms</Link>
                                        <Link href="/cookies" className="text-[0.6rem] font-black uppercase tracking-widest text-muted-foreground hover:text-blue-600 transition-colors" onClick={closeMenu}>Cookies</Link>
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