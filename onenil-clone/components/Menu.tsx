'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Menu.module.css';

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                className={styles.menuBtn}
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                <span className={`${styles.menuLine} ${isOpen ? styles.open : ''}`}></span>
                <span className={`${styles.menuLine} ${isOpen ? styles.open : ''}`}></span>
            </button>

            <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink} onClick={toggleMenu}>
                        Home
                    </Link>
                    <Link href="/work" className={styles.navLink} onClick={toggleMenu}>
                        Work
                    </Link>
                    <Link href="/archive" className={styles.navLink} onClick={toggleMenu}>
                        Archive
                    </Link>
                    <Link href="/jobs" className={styles.navLink} onClick={toggleMenu}>
                        Jobs
                    </Link>
                    <Link href="/contact" className={styles.navLink} onClick={toggleMenu}>
                        Contact
                    </Link>
                </nav>

                <div className={styles.footer}>
                    <div className={styles.socials}>
                        <a href="https://instagram.com" className={styles.socialLink}>Instagram</a>
                        <a href="https://linkedin.com" className={styles.socialLink}>LinkedIn</a>
                        <a href="https://twitter.com" className={styles.socialLink}>Twitter</a>
                    </div>
                </div>
            </div>
        </>
    );
}
