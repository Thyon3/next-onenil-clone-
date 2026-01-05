import Link from 'next/link';
import Menu from './Menu';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-[100] px-8 py-6 text-white transition-transform mix-blend-difference">
            <div className="max-w-[1800px] mx-auto flex items-center justify-between">
                <div className="font-heading font-bold uppercase tracking-wider text-lg z-[101]">
                    <Link href="/">ONENIL</Link>
                </div>
                <nav className="flex items-center gap-12">
                    <Link
                        href="/contact"
                        className="font-manrope text-[0.85rem] uppercase font-semibold tracking-wider relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-white after:transform after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                    >
                        Get in touch
                    </Link>
                    <Menu />
                </nav>
            </div>
        </header>
    );
}

