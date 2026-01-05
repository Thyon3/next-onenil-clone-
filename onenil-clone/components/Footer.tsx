import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <h2 className={styles.cta}>
                Ready for <br /> take off?
            </h2>

            <div className={styles.bottom}>
                <div className={styles.column}>
                    <span className={styles.columnTitle}>Socials</span>
                    <Link href="/" className={styles.link}>Instagram</Link>
                    <Link href="/" className={styles.link}>LinkedIn</Link>
                    <Link href="/" className={styles.link}>Twitter</Link>
                </div>

                <div className={styles.column}>
                    <span className={styles.columnTitle}>Contact</span>
                    <a href="mailto:info@onenil.com" className={styles.link}>info@onenil.com</a>
                    <span className={styles.link}>Amsterdam, NL</span>
                </div>

                <div className={styles.column} style={{ marginLeft: 'auto' }}>
                    <div className={styles.copy}>
                        © {new Date().getFullYear()} OneNil. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
