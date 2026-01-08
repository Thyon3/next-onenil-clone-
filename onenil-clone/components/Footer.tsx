import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-white px-5 md:px-10 pt-32 pb-8 border-t border-white/10">
            <h2 className="font-heading uppercase text-[clamp(2.5rem,10vw,8rem)] leading-[0.9] mb-24 max-w-[80%]">
                Ready for <br /> take off?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-16 border-t border-white/10 text-sm font-manrope">
                {/* Sitemap */}
                <div className="flex flex-col gap-4">
                    <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold mb-2">Sitemap</span>
                    <Link href="/" className="hover:text-gray-400 transition-colors uppercase">Home</Link>
                    <Link href="/work" className="hover:text-gray-400 transition-colors uppercase">Work</Link>
                    <Link href="/archive" className="hover:text-gray-400 transition-colors uppercase">Archive</Link>
                    <Link href="/jobs" className="hover:text-gray-400 transition-colors uppercase">Jobs</Link>
                    <Link href="/contact" className="hover:text-gray-400 transition-colors uppercase">Contact</Link>
                </div>

                {/* Socials */}
                <div className="flex flex-col gap-4">
                    <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold mb-2">Socials</span>
                    <a href="#" className="hover:text-gray-400 transition-colors uppercase">Instagram</a>
                    <a href="#" className="hover:text-gray-400 transition-colors uppercase">LinkedIn</a>
                    <a href="#" className="hover:text-gray-400 transition-colors uppercase">Twitter</a>
                    <a href="#" className="hover:text-gray-400 transition-colors uppercase">Vimeo</a>
                </div>

                {/* Address */}
                <div className="flex flex-col gap-4">
                    <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold mb-2">Address</span>
                    <address className="not-italic leading-relaxed uppercase">
                        Sarphatikade 14<br />
                        1017 WV Amsterdam<br />
                        Netherlands
                    </address>
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-4">
                    <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold mb-2">Contact</span>
                    <a href="mailto:hello@onenil.com" className="hover:text-gray-400 transition-colors uppercase break-all">hello@onenil.com</a>
                    <a href="tel:+31201234567" className="hover:text-gray-400 transition-colors uppercase">+31 20 123 4567</a>
                </div>
            </div>

            {/* Bottom Credits */}
            <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-500 uppercase tracking-widest">
                <div className="flex gap-8">
                    <span>© {new Date().getFullYear()} OneNil</span>
                    <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
                </div>
                <div className="flex gap-8">
                    <span>Design by GraphicHunters</span>
                    <span>Code by Dennis</span>
                </div>
            </div>
        </footer>
    );
}
