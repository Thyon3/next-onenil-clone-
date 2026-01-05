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
        <section className="bg-black text-white border-t border-white/10 py-[120px] px-10">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="text-center text-xs font-bold uppercase tracking-[0.2em] mb-16 opacity-50">
                    Trusted by leading brands
                </h2>
                <div className="flex flex-wrap justify-center gap-y-16 gap-x-20 items-center">
                    {clients.map((client, index) => (
                        <div key={index} className="flex items-center justify-center opacity-60 hover:opacity-100 transition">
                            <span className="text-2xl font-heading font-bold uppercase tracking-wide">
                                {client}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
