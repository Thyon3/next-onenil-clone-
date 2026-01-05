import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from './archive.module.css';

const projects = [
    { id: 1, title: 'Heineken F1 Confetti', year: '2024', category: 'Campaign' },
    { id: 2, title: 'UEFA Europa League', year: '2024', category: 'Branding' },
    { id: 3, title: 'Ajax Social Hate', year: '2023', category: 'Campaign' },
    { id: 4, title: 'Adidas Football', year: '2023', category: 'Strategy' },
    { id: 5, title: 'KNVB Future Goals', year: '2023', category: 'Digital' },
    { id: 6, title: 'Ziggo Sport Rebrand', year: '2022', category: 'Branding' },
    { id: 7, title: 'Nike Training', year: '2022', category: 'Production' },
    { id: 8, title: 'Eredivisie Campaign', year: '2022', category: 'Campaign' },
    { id: 9, title: 'TOTO Sports', year: '2021', category: 'Strategy' },
    { id: 10, title: 'Puma Launch', year: '2021', category: 'Digital' },
];

export default function Archive() {
    return (
        <main>
            <Header />
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1 className={styles.heading}>Archive</h1>
                        <p className={styles.subheading}>
                            Explore our infinite archive, full of inspiration.
                        </p>
                    </div>

                    <div className={styles.grid}>
                        {projects.map((project) => (
                            <Link
                                key={project.id}
                                href={`/work/${project.id}`}
                                className={styles.card}
                            >
                                <div className={styles.imageWrapper}>
                                    <div className={styles.imagePlaceholder}>
                                        {project.title}
                                    </div>
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.meta}>
                                        <span className={styles.year}>{project.year}</span>
                                        <span className={styles.category}>{project.category}</span>
                                    </div>
                                    <h3 className={styles.title}>{project.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
