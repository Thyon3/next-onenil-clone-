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
                <div className={styles.header}>
                    <h2 className={styles.heading}>Selected Works</h2>
                    <div className={styles.links}>
                        <Link href="/work" className={styles.link}>
                            View all work
                        </Link>
                        <Link href="/archive" className={styles.link}>
                            Explore archive
                        </Link>
                    </div>
                </div>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <Link href={`/work/${project.id}`} key={project.id} className={`${styles.card} ${styles[`card-${index + 1}`]}`}>
                            <div className={styles.imageWrapper} style={{ '--overlay-color': project.color } as any}>
                                <img src={project.img} alt={project.title} className={styles.image} />
                                <div className={styles.overlay}></div>
                            </div>
                            <div className={styles.info}>
                                <span className={styles.client}>{project.client}</span>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
