export default function Contact() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-20">
            <section className="px-5 md:px-10 max-w-[1400px] mx-auto">
                <h1 className="text-[clamp(3rem,8vw,8rem)] font-heading uppercase font-bold leading-[0.9] mb-20">
                    Get in touch
                </h1>

                <p className="text-xl md:text-2xl font-manrope max-w-2xl mb-20 opacity-80">
                    Ready to create something extraordinary? Let’s talk.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32">
                    <div className="flex flex-col gap-12 font-manrope">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Email</h3>
                            <a href="mailto:hello@onenil.com" className="text-xl hover:text-accentPurple transition-colors">
                                hello@onenil.com
                            </a>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Address</h3>
                            <p className="text-xl leading-relaxed">
                                Sarphatikade 14<br />
                                1017 WV Amsterdam<br />
                                Netherlands
                            </p>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Socials</h3>
                            <div className="flex flex-col gap-2 text-xl">
                                <a href="https://instagram.com" className="hover:text-accentPurple transition-colors w-fit">Instagram</a>
                                <a href="https://linkedin.com" className="hover:text-accentPurple transition-colors w-fit">LinkedIn</a>
                                <a href="https://twitter.com" className="hover:text-accentPurple transition-colors w-fit">Twitter</a>
                            </div>
                        </div>
                    </div>

                    <form className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-gray-500">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-white transition-colors placeholder:text-white/20"
                                placeholder="Your name"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-gray-500">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-white transition-colors placeholder:text-white/20"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="company" className="text-sm font-bold uppercase tracking-widest text-gray-500">Company</label>
                            <input
                                type="text"
                                id="company"
                                className="bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-white transition-colors placeholder:text-white/20"
                                placeholder="Your company"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-gray-500">Message</label>
                            <textarea
                                id="message"
                                className="bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-white transition-colors placeholder:text-white/20 resize-none"
                                placeholder="Tell us about your project"
                                rows={6}
                            />
                        </div>

                        <button type="submit" className="mt-8 bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-accentPurple hover:text-white transition-colors w-fit">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
