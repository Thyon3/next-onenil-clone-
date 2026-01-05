import styles from './SelectedWorks.module.css';

const projects = [
    { id: 1, title: 'AFC AJAX', category: 'Campaign', img: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'UEFA', category: 'Branding', img: 'https://images.unsplash.com/photo-1522778119026-d647f0565c71?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'Adidas', category: 'Strategy', img: 'https://images.unsplash.com/photo-1518002171953-a080ee322818?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'Future Goals', category: 'Digital', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800' },
];

export default function SelectedWorks() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.heading}>Selected Works</h2>
                <span className={styles.counter}>({projects.length})</span>
            </div>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={project.img} alt={project.title} className={styles.image} />
                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectCategory}>{project.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
