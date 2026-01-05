import Link from 'next/link';
import styles from './SelectedWorks.module.css';

const projects = [
    {
        id: 'f1-confetti',
        client: 'Heineken',
        title: 'Heineken celebrates F1 fans at Mexican GP',
        category: 'Campaign',
        img: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800',
        color: '#009900' // Heineken Green
    },
    {
        id: 'uefa-europa-league',
        client: 'UEFA',
        title: 'Boosting the European leagues with UEFA',
        category: 'Branding',
        img: 'https://images.unsplash.com/photo-1522778119026-d647f0565c71?auto=format&fit=crop&q=80&w=800',
        color: '#002F6C' // UEFA Blue
    },
    {
        id: 'ajax-takes-a-stand-against-social-hate',
        client: 'AFC Ajax',
        title: 'Ajax takes a stand against social hate',
        category: 'Campaign',
        img: 'https://images.unsplash.com/photo-1518002171953-a080ee322818?auto=format&fit=crop&q=80&w=800',
        color: '#D2122E' // Ajax Red
    },
];

export default function SelectedWorks() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <h2 className={styles.title}>Works</h2>
                    <Link href="/archive" className={styles.explore}>
                        Explore archive
                    </Link>
                </div>
                <div className={styles.grid}>
                    {projects.map((project) => (
                        <Link href={`/work/${project.id}`} key={project.id} className={styles.card}>
                            <div className={styles.cardInner}>
                                <div className={styles.media}>
                                    <img src={project.img} alt={project.title} className={styles.image} />
                                    <div className={styles.mediaOverlay}></div>
                                </div>
                                <div className={styles.caption}>
                                    <div className={styles.client}>{project.client}</div>
                                    <div className={styles.projectTitle}>{project.title}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
