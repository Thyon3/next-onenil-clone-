export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    features: string[];
    specs: {
        label: string;
        value: string;
    }[];
    colors: string[];
}

export const products: Product[] = [
    {
        id: "quantum-weave-elite",
        name: "QuantumWeave Elite",
        description: "The ultimate compression shirt featuring biometric feedback and adaptive temperature control.",
        price: 189.00,
        image: "/images/products/quantumweave-elite.png",
        category: "Upper Body",
        features: [
            "Biometric AI Integration",
            "Dynamic Compression zones",
            "Moisture-wicking Nano-tech",
            "UV protection UPF 50+"
        ],
        specs: [
            { label: "Material", value: "88% Recycled Polyester, 12% Elastane" },
            { label: "Weight", value: "145g" },
            { label: "Fit", value: "Compression" }
        ],
        colors: ["#0a0a0a", "#1a365d", "#2d3748"]
    },
    {
        id: "aeroflow-pro-shorts",
        name: "AeroFlow Pro Shorts",
        description: "Engineered for maximum velocity with wind-tunnel tested material and 4D motion support.",
        price: 125.00,
        image: "/images/products/quantumweave-elite.png", // Using same image for now due to limit
        category: "Lower Body",
        features: [
            "4D Motion Support",
            "Hex-mesh ventilation",
            "Zero-friction seams",
            "Integrated pocket system"
        ],
        specs: [
            { label: "Material", value: "92% Nylon, 8% Spandex" },
            { label: "Weight", value: "95g" },
            { label: "Lining", value: "Anti-microbial mesh" }
        ],
        colors: ["#171717", "#0f172a", "#1e293b"]
    },
    {
        id: "recovery-plus-sleeves",
        name: "Recovery+ Sleeves",
        description: "Infrared technology embedded sleeves for accelerated muscle recovery and reduced fatigue.",
        price: 65.00,
        image: "/images/products/quantumweave-elite.png", // Using same image for now due to limit
        category: "Accessories",
        features: [
            "Infrared Tech",
            "Graduated compression",
            "Breathable weave",
            "Anti-slip silicone grip"
        ],
        specs: [
            { label: "Material", value: "80% Polyamide, 20% Elastane" },
            { label: "Compression", value: "20-30 mmHg" },
            { label: "Pair", value: "Yes" }
        ],
        colors: ["#000000", "#312e81"]
    },
    {
        id: "bioshield-arctic-vest",
        name: "BioShield Arctic Vest",
        description: "Ultra-lightweight thermal protection for extreme conditions, using phase-change materials.",
        price: 245.00,
        image: "/images/products/quantumweave-elite.png", // Using same image for now due to limit
        category: "Outerwear",
        features: [
            "Phase-change insulation",
            "Waterproof shell",
            "Ultra-lightweight",
            "Packable design"
        ],
        specs: [
            { label: "Material", value: "Gore-Tex Infinium" },
            { label: "Insulation", value: "AeroGel" },
            { label: "Weight", value: "210g" }
        ],
        colors: ["#f8fafc", "#0f172a"]
    }
];
