import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.videoContainer}>
                {/* Placeholder video - using a generic sports clip or dark texture */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.videoBg}
                >
                    {/* Using a reliable free background video URL */}
                    <source src="https://cdn.coverr.co/videos/coverr-playing-football-2632/1080p.mp4" type="video/mp4" />
                </video>
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.content}>
                <h1 className={styles.heading}>
                    The Creative <br /> Agency in Sports
                </h1>
                <p className={styles.subHeading}>Hold to Ignite</p>
            </div>
        </section>
    );
}
