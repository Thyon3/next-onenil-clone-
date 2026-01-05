import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from './work.module.css';

const works = [
    {
        id: 1,
        title: 'Heineken celebrates F1 fans at Mexican GP',
        category: 'Campaign',
        year: '2024',
        description: 'A thrilling campaign celebrating Formula 1 fans at the Mexican Grand Prix with Heineken.'
    },
    {
        id: 2,
        title: 'Boosting the European leagues with UEFA',
        category: 'Branding',
        year: '2024',
        description: 'Strategic branding initiative to elevate the UEFA Europa League across Europe.'
    },
    {
        id: 3,
        title: 'Ajax takes a stand against social hate',
        category: 'Campaign',
        year: '2023',
        description: 'A powerful social campaign addressing online hate in football culture.'
    }
];

export default function Work() {
    return (
        <main>
            <Header />
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1 className={styles.heading}>Selected Works</h1>
                        <p className={styles.subheading}>
                            Rockets for brands that dare to stand out.
                        </p>
                    </div>

                    <div className={styles.works}>
                        {works.map((work) => (
                            <Link
                                key={work.id}
                                href={`/work/${work.id}`}
                                className={styles.workCard}
                            >
                                <div className={styles.imageWrapper}>
                                    <div className={styles.imagePlaceholder}>
                                        {work.title}
                                    </div>
                                    <div className={styles.overlay}>
                                        <span className={styles.viewCase}>View case →</span>
                                    </div>
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.meta}>
                                        <span className={styles.year}>{work.year}</span>
                                        <span className={styles.category}>{work.category}</span>
                                    </div>
                                    <h2 className={styles.title}>{work.title}</h2>
                                    <p className={styles.description}>{work.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className={styles.cta}>
                        <Link href="/archive" className={styles.ctaBtn}>
                            View all projects in archive
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
