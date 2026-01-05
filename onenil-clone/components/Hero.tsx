import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.backgroundContainer}>
                <img
                    src="https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?q=80&w=2574&auto=format&fit=crop"
                    alt="Sports atmosphere"
                    className={styles.bgImage}
                />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.content}>
                <h1 className={styles.heading}>
                    The Creative <br /> Agency in Sports
                </h1>

                <div className={styles.footer}>
                    <div className={styles.scrollIndicator}>
                        Explore
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                        </svg>
                    </div>

                    <div className={styles.ignite}>
                        Hold to Ignite
                    </div>
                </div>
            </div>
        </section>
    );
}
