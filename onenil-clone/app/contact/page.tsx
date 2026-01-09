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
        <main className="min-h-screen bg-gray-950 text-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-24 pb-20 px-5 md:px-10 lg:px-20">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-950" />
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px]" />
                </div>

                <div className="relative z-10 max-w-[1600px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-tight leading-[0.9] mb-6">
                            <span className="block bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                                CONNECT WITH
                            </span>
                            <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                                THE FUTURE
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-12">
                            Partner with us to push the boundaries of athletic performance.
                            Whether you're an athlete, retailer, or innovator, let's create something extraordinary together.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="px-5 md:px-10 lg:px-20 max-w-[1600px] mx-auto pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col gap-12"
                    >
                        {/* Global Headquarters */}
                        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl border border-gray-800 p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold">Global Headquarters</h3>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p className="text-gray-300">
                                        123 Performance Drive<br />
                                        San Francisco, CA 94107<br />
                                        United States
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <a href="mailto:contact@athlon.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                                        contact@athlon.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <a href="tel:+14155550123" className="text-gray-300 hover:text-blue-400 transition-colors">
                                        +1 (415) 555-0123
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Regional Offices */}
                        <div>
                            <h3 className="text-sm font-semibold tracking-widest uppercase text-blue-400 mb-6">Regional Offices</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { city: 'Amsterdam', country: 'Netherlands', email: 'eu@athlon.com' },
                                    { city: 'Tokyo', country: 'Japan', email: 'asia@athlon.com' },
                                    { city: 'Sydney', country: 'Australia', email: 'apac@athlon.com' },
                                    { city: 'Miami', country: 'USA', email: 'americas@athlon.com' }
                                ].map((office, index) => (
                                    <div key={index} className="p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                                        <div className="font-medium text-white mb-1">{office.city}</div>
                                        <div className="text-sm text-gray-400 mb-2">{office.country}</div>
                                        <a href={`mailto:${office.email}`} className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                                            {office.email}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social & Media */}
                        <div>
                            <h3 className="text-sm font-semibold tracking-widest uppercase text-cyan-400 mb-6">Connect With Us</h3>
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
                                        className="group p-4 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all"
                                    >
                                        <div className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                                            {social.platform}
                                        </div>
                                        <div className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors">
                                            {social.handle}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 lg:p-12">
                            {submitSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">Message Sent Successfully!</h3>
                                    <p className="text-gray-300 mb-8">
                                        Thank you for reaching out. Our team will get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setSubmitSuccess(false)}
                                        className="text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
                                    <p className="text-gray-400 mb-8">
                                        Tell us about your project, partnership idea, or inquiry.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                                    placeholder="John Smith"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
                                                Organization
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                                placeholder="Your company or team"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="type" className="block text-sm font-medium text-gray-400 mb-2">
                                                Inquiry Type *
                                            </label>
                                            <select
                                                id="type"
                                                required
                                                value={formData.type}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none"
                                            >
                                                {contactTypes.map((type) => (
                                                    <option key={type.id} value={type.id}>
                                                        {type.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                                Your Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={6}
                                                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                                                placeholder="Tell us about your project, partnership idea, or specific inquiry..."
                                            />
                                        </div>

                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`group w-full px-8 py-4 font-semibold rounded-lg transition-all duration-300 ${isSubmitting
                                                    ? 'bg-gray-700 cursor-not-allowed'
                                                    : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-xl hover:shadow-blue-500/30'
                                                    }`}
                                            >
                                                {isSubmitting ? (
                                                    <span className="flex items-center justify-center gap-2">
                                                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                        </svg>
                                                        Sending...
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center justify-center gap-2">
                                                        Send Message
                                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                        </svg>
                                                    </span>
                                                )}
                                            </button>

                                            <p className="text-xs text-gray-500 mt-4 text-center">
                                                By submitting, you agree to our Privacy Policy and Terms of Service.
                                            </p>
                                        </div>
                                    </form>
                                </>
                            )}
                        </div>

                        {/* Additional Info */}
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                                <div className="flex items-center gap-3 mb-2">
                                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm font-medium">Response Time</span>
                                </div>
                                <p className="text-sm text-gray-300">Typically within 24 hours</p>
                            </div>

                            <div className="p-4 bg-gray-900/30 rounded-lg border border-gray-800">
                                <div className="flex items-center gap-3 mb-2">
                                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-sm font-medium">Priority Support</span>
                                </div>
                                <p className="text-sm text-gray-300">For athletes & partners</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="px-5 md:px-10 lg:px-20 max-w-[1600px] mx-auto pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 md:p-12 text-center"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            Stay Ahead of the Curve
                        </span>
                    </h3>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                        Subscribe to our newsletter for the latest in athletic innovation,
                        product launches, and performance insights.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                        <button
                            type="submit"
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                        >
                            Subscribe
                        </button>
                    </form>
                    <p className="text-xs text-gray-500 mt-4">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </motion.div>
            </section>
        </main>
    );
}