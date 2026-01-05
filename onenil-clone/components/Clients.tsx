import styles from './Clients.module.css';

const clients = [
    'HEINEKEN', 'UEFA', 'AJAX', 'ADIDAS', 'KNVB',
    'TOTO', 'ZIGGO SPORT', 'NIKE', 'PUMA', 'EREDIVISIE'
];

export default function Clients() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Trusted by leading brands</h2>
                <div className={styles.grid}>
                    {clients.map((client, index) => (
                        <div key={index} className={styles.client}>
                            <span className={styles.clientName}>{client}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
