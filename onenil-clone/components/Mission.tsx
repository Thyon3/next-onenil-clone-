import styles from './Mission.module.css';

export default function Mission() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <div className={styles.leftColumn}>
                        <div className={styles.categories}>
                            <span className={styles.category}>Brands</span>
                            <span className={styles.separator}>/</span>
                            <span className={styles.category}>Fans</span>
                            <span className={styles.separator}>/</span>
                            <span className={styles.category}>Sports</span>
                        </div>
                    </div>

                    <div className={styles.rightColumn}>
                        <h2 className={styles.heading}>
                            We believe sports is the most thrilling thing on earth
                        </h2>

                        <div className={styles.description}>
                            <div className={styles.descColumn}>
                                <p>
                                    We create winning ideas to ignite the most distinctive campaigns in sports.
                                    Like no other we know how to find the sweet spots between brands and sports culture,
                                    which makes us the specialists in our game.
                                </p>
                            </div>
                            <div className={styles.descColumn}>
                                <p>
                                    Our goal is to create talk-worthy and head-turning campaigns with outstanding results.
                                    Or as we like to say: Rockets for brands that dare to stand out. Nothing less.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
