import Link from 'next/link';
import styles from './SelectedWorks.module.css';

const projects = [
    {
        id: 'f1-confetti',
        client: 'Heineken',
        title: 'Heineken celebrates F1 fans at Mexican GP',
        category: 'Campaign',
        img: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1200&auto=format&fit=crop',
        color: '#009900' // Heineken Green
    },
    {
        id: 'uefa-europa-league',
        client: 'UEFA',
        title: 'Boosting the European leagues with UEFA',
        category: 'Branding',
        img: 'https://images.unsplash.com/photo-1521417531300-0a2429f13a3f?q=80&w=1200&auto=format&fit=crop',
        color: '#002F6C' // UEFA Blue
    },
    {
        id: 'ajax-takes-a-stand-against-social-hate',
        client: 'AFC Ajax',
        title: 'Ajax takes a stand against social hate',
        category: 'Campaign',
        img: 'https://images.unsplash.com/photo-1519323651260-8d3b1c3e9f60?q=80&w=1200&auto=format&fit=crop',
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
