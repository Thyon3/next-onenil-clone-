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
        <section className="bg-white text-black py-[120px] px-10">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="text-[clamp(36px,5vw,60px)] font-bold leading-snug mb-20 max-w-[800px] uppercase font-heading">
                    Offering a variety of high-end services
                </h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-16">
                    {services.map((service, index) => (
                        <div key={index} className="py-10 border-t-2 border-black transition-transform hover:-translate-y-[5px]">
                            <h3 className="text-2xl font-bold mb-5 uppercase tracking-wide">
                                {service.title}
                            </h3>
                            <p className="text-base leading-7 opacity-70 m-0">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
