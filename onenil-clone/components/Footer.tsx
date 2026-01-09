"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-950 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
            </div>

            <div className="relative z-10 px-5 md:px-10 lg:px-20 pt-20 md:pt-32 pb-12">
                {/* Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-24"
                >
                    <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-10 md:p-14 max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                                    <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                        Stay Ahead in Performance
                                    </span>
                                </h3>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Subscribe to our newsletter for the latest in sports technology,
                                    product launches, and performance insights from our research teams.
                                </p>
                            </div>
                            <form className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all text-base"
                                />
                                <button
                                    type="submit"
                                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-base rounded-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all whitespace-nowrap"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>

                {/* Main Footer Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-20"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-6 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-cyan-400" />
                                <span className="text-2xl font-bold tracking-tight">ATHLON</span>
                            </div>
                            <p className="text-gray-300 text-lg mb-8 max-w-xs leading-relaxed">
                                Engineering the future of athletic performance through
                                innovative material science and biomechanical research.
                            </p>
                            <div className="flex items-center gap-4">
                                {['🏢', '🔬', '⚡', '🎯'].map((icon, i) => (
                                    <div key={i} className="w-12 h-12 rounded-xl bg-gray-900/50 border border-gray-800 flex items-center justify-center text-xl hover:bg-gray-800/50 transition-all cursor-default">
                                        {icon}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-base font-semibold tracking-wider uppercase text-blue-400 mb-8 pb-4 border-b border-gray-800">
                                Explore
                            </h4>
                            <div className="space-y-4">
                                {[
                                    { label: 'Technology', href: '/technology' },
                                    { label: 'Collections', href: '/collections' },
                                    { label: 'Research', href: '/research' },
                                    { label: 'Athletes', href: '/athletes' },
                                    { label: 'Partners', href: '/partners' },
                                    { label: 'Performance Lab', href: '/lab' }
                                ].map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="block text-gray-300 hover:text-blue-400 transition-colors text-lg"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Resources */}
                        <div>
                            <h4 className="text-base font-semibold tracking-wider uppercase text-cyan-400 mb-8 pb-4 border-b border-gray-800">
                                Resources
                            </h4>
                            <div className="space-y-4">
                                {[
                                    { label: 'Performance Guides', href: '/guides' },
                                    { label: 'Research Papers', href: '/papers' },
                                    { label: 'Athlete Testimonials', href: '/testimonials' },
                                    { label: 'Technology White Papers', href: '/whitepapers' },
                                    { label: 'Investor Relations', href: '/investors' },
                                    { label: 'Blog & Insights', href: '/blog' }
                                ].map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="block text-gray-300 hover:text-cyan-400 transition-colors text-lg"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Contact & Social */}
                        <div>
                            <h4 className="text-base font-semibold tracking-wider uppercase text-purple-400 mb-8 pb-4 border-b border-gray-800">
                                Connect
                            </h4>
                            <div className="space-y-6">
                                <div>
                                    <div className="text-sm text-gray-500 mb-2">Email</div>
                                    <a
                                        href="mailto:contact@athlon.tech"
                                        className="text-gray-300 hover:text-purple-400 transition-colors text-lg font-medium"
                                    >
                                        contact@athlon.tech
                                    </a>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 mb-2">Phone</div>
                                    <a
                                        href="tel:+14155550123"
                                        className="text-gray-300 hover:text-purple-400 transition-colors text-lg font-medium"
                                    >
                                        +1 (415) 555-0123
                                    </a>
                                </div>
                                <div className="pt-4">
                                    <div className="text-sm text-gray-500 mb-4">Follow Us</div>
                                    <div className="flex items-center gap-4">
                                        {[
                                            { platform: 'LinkedIn', icon: '👔', color: 'hover:bg-blue-900/30 hover:border-blue-700' },
                                            { platform: 'Twitter', icon: '🐦', color: 'hover:bg-sky-900/30 hover:border-sky-700' },
                                            { platform: 'Instagram', icon: '📸', color: 'hover:bg-pink-900/30 hover:border-pink-700' },
                                            { platform: 'YouTube', icon: '🎥', color: 'hover:bg-red-900/30 hover:border-red-700' }
                                        ].map((social) => (
                                            <a
                                                key={social.platform}
                                                href="#"
                                                className={`w-14 h-14 rounded-xl bg-gray-900/50 border border-gray-800 flex items-center justify-center text-2xl transition-all duration-300 ${social.color}`}
                                                title={social.platform}
                                                aria-label={`Follow us on ${social.platform}`}
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Global Offices */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-16 pt-12 border-t border-gray-800"
                >
                    <h4 className="text-lg font-semibold tracking-wider uppercase text-gray-400 mb-10">
                        Global Offices
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                city: 'San Francisco',
                                country: 'United States',
                                role: 'Global Headquarters & R&D',
                                address: '123 Performance Drive, CA 94107'
                            },
                            {
                                city: 'Boston',
                                country: 'United States',
                                role: 'Sports Science Research Center',
                                address: '456 Innovation Way, MA 02134'
                            },
                            {
                                city: 'Amsterdam',
                                country: 'Netherlands',
                                role: 'European Innovation Hub',
                                address: '789 Techstraat, 1017 WV'
                            },
                            {
                                city: 'Tokyo',
                                country: 'Japan',
                                role: 'Asia Pacific Headquarters',
                                address: '101 Ginza, Chuo City, 104-0061'
                            }
                        ].map((office) => (
                            <div key={office.city} className="p-6 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-gray-700 transition-all">
                                <div className="font-bold text-xl text-white mb-2">{office.city}</div>
                                <div className="text-base text-gray-300 mb-1">{office.country}</div>
                                <div className="text-sm text-blue-400 mb-3">{office.role}</div>
                                <div className="text-sm text-gray-400 leading-relaxed">{office.address}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="pt-12 border-t border-gray-800"
                >
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">
                        {/* Copyright */}
                        <div className="text-base text-gray-400">
                            © {currentYear} Athlon Performance Technologies. All rights reserved.
                        </div>

                        {/* Legal Links */}
                        <div className="flex flex-wrap gap-8">
                            <Link href="/privacy" className="text-base text-gray-400 hover:text-white transition-colors font-medium">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-base text-gray-400 hover:text-white transition-colors font-medium">
                                Terms of Service
                            </Link>
                            <Link href="/cookies" className="text-base text-gray-400 hover:text-white transition-colors font-medium">
                                Cookie Policy
                            </Link>
                            <Link href="/accessibility" className="text-base text-gray-400 hover:text-white transition-colors font-medium">
                                Accessibility
                            </Link>
                            <Link href="/sustainability" className="text-base text-gray-400 hover:text-white transition-colors font-medium">
                                Sustainability
                            </Link>
                        </div>

                        {/* Certification */}
                        <div className="flex flex-wrap gap-3">
                            <div className="text-sm text-gray-500 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800">
                                ISO 9001 Certified
                            </div>
                            <div className="text-sm text-gray-500 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800">
                                Sustainable Materials
                            </div>
                            <div className="text-sm text-gray-500 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800">
                                Athlete Tested
                            </div>
                        </div>
                    </div>

                    {/* Back to Top */}
                    <div className="mt-12 text-center">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="inline-flex items-center gap-3 text-base text-gray-400 hover:text-white transition-colors group"
                        >
                            <span>Back to Top</span>
                            <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Floating Particles */}
            <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-[2px] h-[2px] bg-blue-400/20 rounded-full"
                        style={{
                            left: `${10 + i * 10}%`,
                            bottom: `${10 + i * 5}%`,
                            animation: `float ${3 + i}s infinite ease-in-out`,
                            animationDelay: `${i * 0.3}s`,
                        }}
                    />
                ))}
            </div>

            {/* CSS for floating animation */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
            `}</style>
        </footer>
    );
}