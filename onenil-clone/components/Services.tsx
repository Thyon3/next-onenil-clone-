import { AiOutlineAim } from 'react-icons/ai';
import { IoImageOutline } from 'react-icons/io5';
import { BsBoxSeam, BsGrid } from 'react-icons/bs';

const services = [
    {
        title: 'Strategy',
        description: 'Strategic masterplans and business/concept strategy',
        icon: <AiOutlineAim />
    },
    {
        title: 'Concept',
        description: 'Award winning concepts and ideas',
        icon: <IoImageOutline />
    },
    {
        title: 'Campaign',
        description: 'High quality campaigns that offer an all-in solution',
        icon: <BsGrid />
    },
    {
        title: 'Production',
        description: 'Standard of own film production that delivers',
        icon: <BsBoxSeam />
    }
];

export default function Services() {
    return (
        <section className="bg-white text-black py-[120px] px-10">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="text-[clamp(32px,5vw,60px)] font-bold leading-none mb-24 max-w-[800px] uppercase font-heading tracking-tighter">
                    Offering a variety of <br /> high-end services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col gap-8 transition-transform hover:-translate-y-2 group">
                            <div className="text-5xl text-black/20 group-hover:text-black transition-colors duration-500">
                                {service.icon}
                            </div>
                            <div className="pt-8 border-t border-black/10">
                                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter font-heading">
                                    {service.title}
                                </h3>
                                <p className="text-sm leading-relaxed opacity-60 font-manrope max-w-[240px]">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
