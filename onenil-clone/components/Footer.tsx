import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-white px-8 pt-32 pb-8 border-t border-white/10">
            <h2 className="font-heading uppercase text-[clamp(3rem,10vw,8rem)] leading-[0.9] mb-24 max-w-[80%]">
                Ready for <br /> take off?
            </h2>

            <div className="flex justify-between items-end flex-wrap gap-16 pt-16 border-t border-white/10">
                <div className="flex flex-col gap-6">
                    <span className="font-manrope text-xs uppercase text-[#666] mb-2">Socials</span>
                    <Link href="/" className="uppercase relative w-fit after:content-[''] after:absolute after:-bottom-[2px] after:left-0 after:h-px after:w-full after:bg-white after:transform after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Instagram</Link>
                    <Link href="/" className="uppercase relative w-fit after:content-[''] after:absolute after:-bottom-[2px] after:left-0 after:h-px after:w-full after:bg-white after:transform after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform">LinkedIn</Link>
                    <Link href="/" className="uppercase relative w-fit after:content-[''] after:absolute after:-bottom-[2px] after:left-0 after:h-px after:w-full after:bg-white after:transform after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Twitter</Link>
                </div>

                <div className="flex flex-col gap-6">
                    <span className="font-manrope text-xs uppercase text-[#666] mb-2">Contact</span>
                    <a href="mailto:info@onenil.com" className="uppercase relative w-fit after:content-[''] after:absolute after:-bottom-[2px] after:left-0 after:h-px after:w-full after:bg-white after:transform after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform">info@onenil.com</a>
                    <span className="uppercase relative w-fit after:content-[''] after:absolute after:-bottom-[2px] after:left-0 after:h-px after:w-full after:bg-white after:transform after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Amsterdam, NL</span>
                </div>

                <div className="flex flex-col gap-6 ml-auto">
                    <div className="font-manrope text-sm text-[#444] mt-auto">
                        © {new Date().getFullYear()} OneNil. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
