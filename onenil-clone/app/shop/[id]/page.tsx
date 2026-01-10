"use client";

import React, { useState } from 'react';
import NextImage from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { products } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import { FiArrowLeft, FiPlus, FiMinus, FiShoppingCart, FiCheck, FiZap, FiActivity, FiShield } from 'react-icons/fi';

const iconMap: any = {
    "Biometric AI Integration": <FiActivity />,
    "Dynamic Compression zones": <FiZap />,
    "Moisture-wicking Nano-tech": <FiActivity />,
    "UV protection UPF 50+": <FiShield />,
}

export default function ProductDetailPage() {
    const params = useParams();
    const id = params?.id as string;
    const router = useRouter();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(0);

    const product = products.find(p => p.id === id);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black">
                <div className="text-center">
                    <h1 className="text-4xl font-heading text-white mb-4">Gear Not Found</h1>
                    <button onClick={() => router.push('/shop')} className="text-blue-400 font-bold uppercase tracking-widest">
                        Back to Shop
                    </button>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-background pt-32 pb-20 px-8 transition-colors duration-300">
            <div className="max-w-[1400px] mx-auto">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 uppercase tracking-widest text-sm font-black"
                >
                    <FiArrowLeft /> Back
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-card border border-border shadow-sm group"
                    >
                        <NextImage
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover p-12 transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Info Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[0.65rem] uppercase tracking-widest text-blue-600 font-black">
                                {product.category}
                            </span>
                            <div className="h-1 w-1 bg-border rounded-full" />
                            <span className="text-muted-foreground text-[0.65rem] font-black uppercase tracking-widest italic">
                                Verified Tech
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tighter text-foreground mb-4 uppercase leading-[0.9]">
                            {product.name}
                        </h1>

                        <p className="text-3xl font-heading font-black text-blue-600 mb-8 tracking-tight">
                            ${product.price}.00
                        </p>

                        <p className="text-muted-foreground text-lg font-light leading-relaxed mb-10 max-w-xl">
                            {product.description}
                        </p>

                        {/* Colors */}
                        <div className="mb-10">
                            <span className="block text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground font-black mb-4">Select Configuration</span>
                            <div className="flex gap-4">
                                {product.colors.map((color, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedColor(index)}
                                        className={`w-12 h-12 rounded-full border-2 transition-all flex items-center justify-center shadow-sm ${selectedColor === index ? "border-blue-600 scale-110 shadow-lg shadow-blue-500/20" : "border-border hover:border-muted-foreground"
                                            }`}
                                        style={{ backgroundColor: color }}
                                    >
                                        {selectedColor === index && <FiCheck className={index === 0 ? "text-white" : "text-background"} />}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-12">
                            {product.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-4 p-5 bg-card border border-border rounded-2xl shadow-sm hover:border-blue-500/30 transition-colors">
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 text-xl shrink-0">
                                        {iconMap[feature] || <FiZap />}
                                    </div>
                                    <span className="text-[0.65rem] font-black uppercase tracking-widest text-foreground leading-tight">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                            <div className="flex items-center bg-muted border border-border rounded-2xl overflow-hidden p-1">
                                <button
                                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                    className="p-4 text-foreground hover:bg-background transition-colors rounded-xl"
                                >
                                    <FiMinus />
                                </button>
                                <span className="w-12 text-center text-foreground font-black">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(q => q + 1)}
                                    className="p-4 text-foreground hover:bg-background transition-colors rounded-xl"
                                >
                                    <FiPlus />
                                </button>
                            </div>

                            <button
                                onClick={() => {
                                    for (let i = 0; i < quantity; i++) addToCart(product);
                                    router.push('/cart');
                                }}
                                className="flex-1 bg-blue-600 text-white flex items-center justify-center gap-3 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-xl shadow-blue-600/20 hover:scale-[1.02] transition-transform active:scale-95"
                            >
                                <FiShoppingCart /> Add to Bag
                            </button>
                        </div>

                        {/* Specs Table */}
                        <div className="mt-16 border-t border-border pt-10">
                            <h3 className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-muted-foreground mb-8">Technical Specifications</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                                {product.specs.map((spec, index) => (
                                    <div key={index} className="flex justify-between py-4 border-b border-border">
                                        <span className="text-muted-foreground text-[0.65rem] uppercase font-bold tracking-widest">{spec.label}</span>
                                        <span className="text-foreground text-[0.65rem] font-black uppercase tracking-tight">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
