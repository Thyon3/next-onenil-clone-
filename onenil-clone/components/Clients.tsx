import styles from './Clients.module.css';

const clients = [
    'AJAX',
    'EA SPORTS',
    'HEINEKEN',
    'TOTO',
    'UEFA',
    'KNVB',
    'EREDIVISIE',
    'NIKE',
    'PUMA',
    'ZIGGO SPORT'
];

export default function Clients() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Trusted by leading brands</h2>
                <div className={styles.grid}>
                    {clients.map((client, index) => (
                        <div key={index} className={styles.client}>
                            {/* In a real production app, these would be SVG components or <img /> tags */}
                            <span className={styles.clientLogo}>{client}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
