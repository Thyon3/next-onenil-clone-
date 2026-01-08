"use client";

import { FoxyHero } from "@/components/ui/foxy-hero";

export default function Hero() {
    return (
        <FoxyHero
            backgroundColor="#020205"
            hideHeader={true}
            logo={{
                text: "ATHLON",
            }}
            navigation={[]}
            title="DEFINING THE FUTURE OF ELITE ATHLETICISM"
            subtitle="Engineered for the Unstoppable. Modern high-performance wear designed to push the boundaries of sports culture and textile innovation."
            leftImage="/images/player-left.png"
            rightImage="/images/player-right.png"
            ctaButtons={{
                primary: {
                    label: "Shop Elite",
                    onClick: () => {
                        const works = document.getElementById('work');
                        if (works) works.scrollIntoView({ behavior: 'smooth' });
                    },
                },
                secondary: {
                    label: "The Collection",
                    onClick: () => console.log("Technology details"),
                },
            }}
        />
    );
}
