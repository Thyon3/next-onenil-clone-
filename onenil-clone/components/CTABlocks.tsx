import Link from 'next/link';
import styles from './CTABlocks.module.css';

export default function CTABlocks() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Link href="/archive" className={styles.block}>
                    <div className={styles.content}>
                        <span className={styles.label}>Get inspired by our work</span>
                        <h3 className={styles.title}>
                            Explore our infinite archive, full of inspiration.
                        </h3>
                        <span className={styles.cta}>Explore archive →</span>
                    </div>
                </Link>

                <Link href="/jobs" className={styles.block}>
                    <div className={styles.content}>
                        <span className={styles.label}>We’re always looking for creatives in the field</span>
                        <h3 className={styles.title}>
                            We currently have 1 open positions.
                        </h3>
                        <span className={styles.cta}>Explore Jobs →</span>
                    </div>
                </Link>
            </div>
        </section>
    );
}
