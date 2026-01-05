'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Menu.module.css';

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
        return () => {
            document.body.classList.remove('menu-open');
        };
    }, [isOpen]);

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
                <div className={styles.overlayContent}>
                    <nav className={styles.nav}>
                        <Link href="/work" className={`${styles.navLink} ${styles.work}`} onClick={toggleMenu}>
                            Work
                        </Link>
                        <Link href="/archive" className={`${styles.navLink} ${styles.archive}`} onClick={toggleMenu}>
                            Archive
                        </Link>
                        <Link href="/jobs" className={`${styles.navLink} ${styles.jobs}`} onClick={toggleMenu}>
                            Jobs
                        </Link>
                        <Link href="/contact" className={`${styles.navLink} ${styles.contact}`} onClick={toggleMenu}>
                            Contact
                        </Link>
                    </nav>

                    <div className={styles.info}>
                        <div className={styles.infoBlock}>
                            <div className={styles.address}>
                                <span>Sarphatikade 14</span>
                                <span>1017 WV Amsterdam</span>
                                <span>Netherlands</span>
                            </div>
                            <a href="mailto:hello@onenil.com" className={styles.email}>
                                hello@onenil.com
                            </a>
                        </div>
                        <div className={styles.socials}>
                            <a href="https://twitter.com" className={styles.socialLink}>Twitter</a>
                            <a href="https://instagram.com" className={styles.socialLink}>Instagram</a>
                            <a href="https://linkedin.com" className={styles.socialLink}>LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
