import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from './jobs.module.css';

const jobs = [
    {
        id: 1,
        title: 'Senior Creative Strategist',
        location: 'Amsterdam, NL',
        type: 'Full-time',
        description: 'We are looking for a senior creative strategist to join our team and help shape the future of sports marketing.'
    }
];

export default function Jobs() {
    return (
        <main>
            <Header />
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1 className={styles.heading}>Join the team</h1>
                        <p className={styles.subheading}>
                            We're always looking for creatives in the field. We currently have {jobs.length} open position{jobs.length !== 1 ? 's' : ''}.
                        </p>
                    </div>

                    <div className={styles.jobs}>
                        {jobs.map((job) => (
                            <div key={job.id} className={styles.jobCard}>
                                <div className={styles.jobHeader}>
                                    <h2 className={styles.jobTitle}>{job.title}</h2>
                                    <div className={styles.jobMeta}>
                                        <span className={styles.location}>{job.location}</span>
                                        <span className={styles.type}>{job.type}</span>
                                    </div>
                                </div>
                                <p className={styles.jobDescription}>{job.description}</p>
                                <Link href="/contact" className={styles.applyBtn}>
                                    Apply Now
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className={styles.cta}>
                        <h3 className={styles.ctaHeading}>Don't see a perfect fit?</h3>
                        <p className={styles.ctaText}>
                            We're always interested in meeting talented people. Send us your portfolio and let's talk.
                        </p>
                        <Link href="/contact" className={styles.ctaBtn}>
                            Get in touch
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
