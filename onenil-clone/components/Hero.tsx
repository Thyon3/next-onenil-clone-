"use client";

import { FoxyHero } from "@/components/ui/foxy-hero";

export default function Hero() {
    return (
        <FoxyHero
            backgroundColor="#000000"
            hideHeader={true}
            logo={{
                text: "ONE : NIL",
            }}
            navigation={[]}
            title="Champions of Culture"
            subtitle="The Creative Agency in Sports"
            ctaButtons={{
                primary: {
                    label: "Get in touch",
                    onClick: () => {
                        const contact = document.getElementById('contact');
                        if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                        else window.location.href = "/contact";
                    },
                },
                secondary: {
                    label: "Hold to Ignite",
                    onClick: () => console.log("Ignition started"),
                },
            }}
        />
    );
}
