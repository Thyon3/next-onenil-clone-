import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">ONENIL</Link>
                </div>
                <nav className={styles.right}>
                    <Link href="/contact" className={styles.contactLink}>
                        Get in touch
                    </Link>
                    <button className={styles.menuBtn} aria-label="Open Menu">
                        <span className={styles.menuLine}></span>
                        <span className={styles.menuLine}></span>
                    </button>
                </nav>
            </div>
        </header>
    );
}
