"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        type: 'general',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', company: '', type: 'general', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitSuccess(false), 5000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const contactTypes = [
        { id: 'general', label: 'General Inquiry' },
        { id: 'partnership', label: 'Partnership Opportunity' },
        { id: 'athlete', label: 'Athlete Partnership' },
        { id: 'retail', label: 'Retail & Distribution' },
        { id: 'press', label: 'Press & Media' },
        { id: 'career', label: 'Career Opportunity' }
    ];

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-40 pb-24 px-8 md:px-12 lg:px-20">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-background" />
                    <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px]" />
                    <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-[150px]" />
                </div>

                <div className="relative z-10 max-w-[1700px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-0.5 w-12 bg-blue-600 rounded-full" />
                            <span className="text-[0.7rem] font-black tracking-[0.5em] uppercase text-blue-600">Contact</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] mb-12 uppercase italic">
                            Connect <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 drop-shadow-sm">Global Hub.</span>
                        </h1>

                        <p className="text-2xl text-muted-foreground max-w-3xl font-light leading-relaxed mb-12">
                            Partner with us to push the boundaries of athletic performance.
                            Whether you're an athlete, retailer, or innovator, let's create something extraordinary together.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="px-8 md:px-12 lg:px-20 max-w-[1700px] mx-auto pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col gap-16"
                    >
                        {/* Global Headquarters */}
                        <div className="bg-card backdrop-blur-sm rounded-[2.5rem] border border-border p-10 lg:p-14 shadow-sm group hover:border-blue-500/30 transition-all duration-500">
                            <div className="flex items-center gap-6 mb-10">
                                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center border border-blue-600/20 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-blue-500/5">
                                    <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tighter italic">Headquarters</h3>
                            </div>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <p className="text-xl text-muted-foreground leading-relaxed font-light">
                                        123 Performance Drive<br />
                                        San Francisco, CA 94107<br />
                                        United States
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <a href="mailto:contact@athlon.com" className="block text-2xl font-black text-foreground hover:text-blue-600 transition-colors uppercase tracking-tight">
                                        contact@athlon.com
                                    </a>
                                    <a href="tel:+14155550123" className="block text-2xl font-black text-foreground hover:text-blue-600 transition-colors uppercase tracking-tight">
                                        +1 (415) 555-0123
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Regional Offices */}
                        <div>
                            <h3 className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-blue-600 mb-8">Regional Analytics Hubs</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { city: 'Amsterdam', country: 'Netherlands', email: 'eu@athlon.com', icon: '🇪🇺' },
                                    { city: 'Tokyo', country: 'Japan', email: 'asia@athlon.com', icon: '🇯🇵' },
                                    { city: 'Sydney', country: 'Australia', email: 'apac@athlon.com', icon: '🇦🇺' },
                                    { city: 'Miami', country: 'USA', email: 'americas@athlon.com', icon: '🇺🇸' }
                                ].map((office, index) => (
                                    <div key={index} className="p-8 bg-card border border-border rounded-[2rem] shadow-sm hover:border-blue-500/30 transition-all duration-500 group">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-2xl">{office.icon}</span>
                                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                                        </div>
                                        <div className="text-xl font-black text-foreground mb-1 uppercase tracking-tight italic group-hover:text-blue-600 transition-colors">{office.city}</div>
                                        <div className="text-[0.6rem] font-black text-muted-foreground mb-4 uppercase tracking-widest">{office.country}</div>
                                        <a href={`mailto:${office.email}`} className="text-[0.65rem] font-black text-blue-600 hover:text-foreground transition-colors uppercase tracking-widest">
                                            {office.email}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social & Media */}
                        <div>
                            <h3 className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-cyan-600 mb-8">Connect with us</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { platform: 'Instagram', handle: '@athlon.performance', url: 'https://instagram.com' },
                                    { platform: 'LinkedIn', handle: 'Athlon Performance', url: 'https://linkedin.com' },
                                    { platform: 'Twitter', handle: '@athlon_tech', url: 'https://twitter.com' },
                                    { platform: 'YouTube', handle: 'Athlon Tech', url: 'https://youtube.com' }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group p-6 bg-card border border-border rounded-2xl hover:border-cyan-500/50 hover:bg-muted transition-all duration-500 shadow-sm"
                                    >
                                        <div className="text-[0.65rem] font-black text-foreground mb-1 uppercase tracking-widest group-hover:text-cyan-600 transition-colors">
                                            {social.platform}
                                        </div>
                                        <div className="text-[0.6rem] font-black text-muted-foreground uppercase tracking-widest group-hover:text-foreground transition-colors">
                                            {social.handle}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="bg-card backdrop-blur-sm rounded-[3rem] border border-border p-10 lg:p-16 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-600/5 to-cyan-500/5 -z-0" />

                            {submitSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-20 relative z-10"
                                >
                                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-blue-500/20">
                                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter italic">Mission Received</h3>
                                    <p className="text-xl text-muted-foreground mb-12 font-light leading-relaxed">
                                        Thank you for reaching out. Our analysts will review your transmission and get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setSubmitSuccess(false)}
                                        className="px-10 py-5 bg-foreground text-background rounded-2xl font-black uppercase tracking-widest text-[0.7rem] hover:scale-105 transition-all shadow-2xl"
                                    >
                                        Clear and Resend
                                    </button>
                                </motion.div>
                            ) : (
                                <div className="relative z-10">
                                    <h2 className="text-4xl lg:text-5xl font-black mb-4 uppercase tracking-tighter italic">Transmission</h2>
                                    <p className="text-xl text-muted-foreground mb-12 font-light leading-relaxed">
                                        Tell us about your project, partnership, or specific inquiry.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label htmlFor="name" className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">
                                                    Subject Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-6 py-5 bg-background border border-border rounded-2xl text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm font-black text-[0.7rem] tracking-wider uppercase"
                                                    placeholder="Enter Full Name"
                                                />
                                            </div>

                                            <div className="space-y-3">
                                                <label htmlFor="email" className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-6 py-5 bg-background border border-border rounded-2xl text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm font-black text-[0.7rem] tracking-wider uppercase"
                                                    placeholder="Enter Email"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label htmlFor="company" className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">
                                                Organization
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-6 py-5 bg-background border border-border rounded-2xl text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm font-black text-[0.7rem] tracking-wider uppercase"
                                                placeholder="Company or Team Name"
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <label htmlFor="type" className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">
                                                Inquiry Type *
                                            </label>
                                            <div className="relative">
                                                <select
                                                    id="type"
                                                    required
                                                    value={formData.type}
                                                    onChange={handleChange}
                                                    className="w-full px-6 py-5 bg-background border border-border rounded-2xl text-foreground focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none shadow-sm font-black text-[0.7rem] tracking-wider uppercase"
                                                >
                                                    {contactTypes.map((type) => (
                                                        <option key={type.id} value={type.id}>
                                                            {type.label}
                                                        </option>
                                                    ))}
                                                </select>
                                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-blue-600">
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label htmlFor="message" className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">
                                                Transmission Body *
                                            </label>
                                            <textarea
                                                id="message"
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={5}
                                                className="w-full px-6 py-5 bg-background border border-border rounded-2xl text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none shadow-sm font-black text-[0.7rem] tracking-wider uppercase"
                                                placeholder="Enter Message Content..."
                                            />
                                        </div>

                                        <div className="pt-8">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`group w-full px-10 py-6 font-black uppercase tracking-[0.2em] text-[0.75rem] rounded-2xl transition-all duration-500 shadow-2xl ${isSubmitting
                                                    ? 'bg-muted text-muted-foreground cursor-not-allowed'
                                                    : 'bg-foreground text-background hover:scale-[1.02] hover:shadow-foreground/20'
                                                    }`}
                                            >
                                                {isSubmitting ? (
                                                    <span className="flex items-center justify-center gap-4">
                                                        <div className="w-5 h-5 border-2 border-background/20 border-t-background rounded-full animate-spin" />
                                                        Processing Transmission...
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center justify-center gap-4">
                                                        Submit Transmission
                                                        <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                        </svg>
                                                    </span>
                                                )}
                                            </button>

                                            <p className="text-[0.55rem] text-muted-foreground mt-8 text-center font-black uppercase tracking-widest leading-loose">
                                                By submitting, you agree to our standard operating protocols, <br />Privacy Policy and Terms of Service.
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>

                        {/* Additional Info Cards */}
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-card border border-border rounded-[2rem] shadow-sm flex items-center gap-6 group hover:border-blue-500/30 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-[0.6rem] font-black uppercase tracking-widest text-muted-foreground mb-1">Response Time</div>
                                    <div className="text-[0.65rem] font-black uppercase tracking-widest text-foreground">Within 24 Hours</div>
                                </div>
                            </div>

                            <div className="p-8 bg-card border border-border rounded-[2rem] shadow-sm flex items-center gap-6 group hover:border-cyan-500/30 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-cyan-600/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-[0.6rem] font-black uppercase tracking-widest text-muted-foreground mb-1">Priority Channel</div>
                                    <div className="text-[0.65rem] font-black uppercase tracking-widest text-foreground">Athletes & Partners</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="px-8 md:px-12 lg:px-20 max-w-[1700px] mx-auto pb-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-foreground text-background rounded-[4rem] p-16 md:p-24 text-center shadow-2xl relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full -z-0" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h3 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter italic">
                            Stay Ahead <br />of the Curve
                        </h3>
                        <p className="text-xl text-background/60 mb-12 font-light leading-relaxed">
                            Subscribe for the latest in athletic innovation, exclusive product launches, and deep performance insights.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-6">
                            <input
                                type="email"
                                placeholder="ENTER EMAIL ADDRESS"
                                className="flex-1 px-8 py-6 bg-background/10 border border-background/20 rounded-2xl text-background placeholder:text-background/30 focus:outline-none focus:border-blue-500 transition-all font-black text-[0.7rem] tracking-wider uppercase"
                            />
                            <button
                                type="submit"
                                className="px-12 py-6 bg-background text-foreground font-black uppercase tracking-[0.2em] text-[0.7rem] rounded-2xl hover:scale-105 transition-all shadow-2xl"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}