import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from './contact.module.css';

export default function Contact() {
    return (
        <main>
            <Header />
            <section className={styles.section}>
                <div className={styles.container}>
                    <h1 className={styles.heading}>Get in touch</h1>
                    <p className={styles.subheading}>
                        Ready to create something extraordinary? Let’s talk.
                    </p>

                    <div className={styles.content}>
                        <div className={styles.info}>
                            <div className={styles.infoBlock}>
                                <h3 className={styles.infoTitle}>Email</h3>
                                <a href="mailto:hello@onenil.com" className={styles.link}>
                                    hello@onenil.com
                                </a>
                            </div>

                            <div className={styles.infoBlock}>
                                <h3 className={styles.infoTitle}>Address</h3>
                                <p className={styles.text}>
                                    Sarphatikade 14<br />
                                    1017 WV Amsterdam<br />
                                    Netherlands
                                </p>
                            </div>

                            <div className={styles.infoBlock}>
                                <h3 className={styles.infoTitle}>Socials</h3>
                                <div className={styles.socials}>
                                    <a href="https://instagram.com" className={styles.link}>Instagram</a>
                                    <a href="https://linkedin.com" className={styles.link}>LinkedIn</a>
                                    <a href="https://twitter.com" className={styles.link}>Twitter</a>
                                </div>
                            </div>
                        </div>

                        <form className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className={styles.input}
                                    placeholder="Your name"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className={styles.input}
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="company" className={styles.label}>Company</label>
                                <input
                                    type="text"
                                    id="company"
                                    className={styles.input}
                                    placeholder="Your company"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>Message</label>
                                <textarea
                                    id="message"
                                    className={styles.textarea}
                                    placeholder="Tell us about your project"
                                    rows={6}
                                />
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
