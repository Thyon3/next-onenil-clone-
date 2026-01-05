import styles from './Services.module.css';

const services = [
    {
        title: 'Strategy',
        description: 'Strategic masterplans and business/concept strategy'
    },
    {
        title: 'Concept',
        description: 'Award winning concepts and ideas'
    },
    {
        title: 'Campaign',
        description: 'High quality campaigns that offer an all-in solution'
    },
    {
        title: 'Production',
        description: 'Standard of own film production that delivers'
    }
];

export default function Services() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>
                    Offering a variety of high-end services
                </h2>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.serviceDescription}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
