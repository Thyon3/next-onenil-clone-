"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background text-foreground relative overflow-hidden border-t border-border">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-background" />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 px-8 md:px-12 lg:px-20 pt-32 pb-16">
                {/* Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mb-32"
                >
                    <div className="bg-card backdrop-blur-xl rounded-[3rem] border border-border p-12 md:p-20 max-w-7xl mx-auto shadow-sm group hover:border-blue-600/30 transition-all duration-700">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h3 className="text-4xl md:text-6xl font-black mb-8 leading-[0.8] tracking-tighter uppercase italic drop-shadow-sm">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">
                                        Join The <br />Innovation.
                                    </span>
                                </h3>
                                <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-md">
                                    Subscribe to receive proprietary research insights and tactical performance updates.
                                </p>
                            </div>
                            <form className="flex flex-col gap-6">
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="ELECTRONIC MAIL ADDRESS"
                                        className="w-full px-10 py-6 bg-background border border-border rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600/20 transition-all text-[0.7rem] font-black tracking-widest uppercase"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-10 py-6 bg-foreground text-background font-black text-[0.7rem] uppercase tracking-[0.4em] rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-xl"
                                >
                                    Initialize Subscription
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="mb-12">
                            <span className="text-4xl font-black tracking-tighter italic uppercase text-foreground">
                                ONENIL<span className="text-blue-600">.</span>
                            </span>
                        </div>
                        <p className="text-muted-foreground text-xl mb-12 max-w-xs leading-relaxed font-light">
                            Engineering the future of human potential through
                            advanced material science and biometric AI.
                        </p>
                        <div className="flex items-center gap-4">
                            {['LinkedIn', 'X', 'Insta'].map((item, i) => (
                                <div key={i} className="px-6 py-3 rounded-xl bg-card border border-border text-[0.6rem] font-black uppercase tracking-widest text-muted-foreground hover:text-foreground hover:border-foreground transition-all cursor-pointer shadow-sm">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-blue-600 mb-10 italic">
                            Infrastructure
                        </h4>
                        <div className="space-y-6">
                            {['Technology', 'Performance Lab', 'Material Science', 'Biometrics', 'Innovation Hub'].map((link) => (
                                <Link
                                    key={link}
                                    href="#"
                                    className="block text-xl text-muted-foreground hover:text-foreground transition-all font-light"
                                >
                                    {link}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-cyan-500 mb-10 italic">
                            Ecosystem
                        </h4>
                        <div className="space-y-6">
                            {['Elite Athletes', 'Research Papers', 'Collections', 'Partnerships', 'Global Logistics'].map((link) => (
                                <Link
                                    key={link}
                                    href="#"
                                    className="block text-xl text-muted-foreground hover:text-foreground transition-all font-light"
                                >
                                    {link}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact info */}
                    <div>
                        <h4 className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-foreground mb-10 italic">
                            Connect
                        </h4>
                        <div className="space-y-10">
                            <div>
                                <div className="text-[0.6rem] font-black uppercase tracking-widest text-muted-foreground mb-3">Electronic Inquiries</div>
                                <a href="mailto:contact@onnenil.tech" className="text-2xl font-black italic tracking-tighter text-foreground hover:text-blue-600 transition-colors uppercase">
                                    hq@onnenil.tech
                                </a>
                            </div>
                            <div>
                                <div className="text-[0.6rem] font-black uppercase tracking-widest text-muted-foreground mb-3">Global Communications</div>
                                <a href="tel:+14155550123" className="text-2xl font-black italic tracking-tighter text-foreground hover:text-blue-600 transition-colors">
                                    +1 (415) 555-0123
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Offices Grid */}
                <div className="mb-32 pt-16 border-t border-border">
                    <h4 className="text-[0.7rem] font-black tracking-[0.5em] uppercase text-muted-foreground mb-12 italic">
                        Operational Coordinates
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            { city: 'San Francisco', role: 'Global HQ & R&D', code: 'US-SF-01' },
                            { city: 'Amsterdam', role: 'European Hub', code: 'NL-AMS-04' },
                            { city: 'Tokyo', role: 'APAC Operations', code: 'JP-TYO-09' },
                            { city: 'Boston', role: 'Materials Lab', code: 'US-BOS-02' }
                        ].map((office) => (
                            <div key={office.city} className="p-10 bg-card rounded-[2.5rem] border border-border group hover:border-blue-600/30 transition-all duration-500 shadow-sm">
                                <div className="text-2xl font-black uppercase tracking-tighter italic text-foreground mb-1 group-hover:text-blue-600 transition-colors">{office.city}</div>
                                <div className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-muted-foreground mb-6 opacity-60">{office.code}</div>
                                <div className="text-[0.7rem] font-black uppercase tracking-widest text-foreground">{office.role}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-16 border-t border-border flex flex-col lg:flex-row justify-between items-center gap-12 text-[0.7rem] font-black uppercase tracking-[0.2em] text-muted-foreground">
                    <div className="flex flex-wrap justify-center gap-10">
                        <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Infrastructure</Link>
                        <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Operations</Link>
                        <Link href="/cookies" className="hover:text-foreground transition-colors">Digital Tracking</Link>
                        <Link href="/cookies" className="hover:text-foreground transition-colors">Accessibility Protocol</Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span>Systems Active: v.4.0.2</span>
                    </div>

                    <div>
                        © {currentYear} ONENIL PERFORMANCE TECHNOLOGIES. ALL RIGHTS RESERVED.
                    </div>
                </div>

                {/* Back to top */}
                <div className="mt-20 flex justify-center">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group flex flex-col items-center gap-4 text-[0.6rem] font-black uppercase tracking-[0.4em] text-muted-foreground hover:text-foreground transition-all"
                    >
                        <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                            <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </div>
                        <span>Protocol: Return</span>
                    </button>
                </div>
            </div>
        </footer>
    );
}