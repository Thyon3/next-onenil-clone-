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
            subtitle="THE CREATIVE AGENCY IN SPORTS"
            dashboardImage="https://images.unsplash.com/photo-1523978591478-c753949ff840?q=80&w=2574&auto=format&fit=crop"
            ctaButtons={{
                primary: {
                    label: "Get in touch",
                    onClick: () => window.location.href = "/contact",
                },
                secondary: {
                    label: "Hold to Ignite",
                    onClick: () => console.log("Ignition started"),
                },
            }}
        />
    );
}
