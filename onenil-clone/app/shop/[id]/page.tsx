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
        <main className="min-h-screen bg-black pt-32 pb-20 px-8">
            <div className="max-w-[1400px] mx-auto">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 uppercase tracking-widest text-sm font-bold"
                >
                    <FiArrowLeft /> Back
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative aspect-square rounded-3xl overflow-hidden bg-gray-950 border border-white/5"
                    >
                        <NextImage
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover p-12"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Info Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-3 py-1 bg-blue-600/10 border border-blue-500/20 rounded-full text-[0.7rem] uppercase tracking-widest text-blue-400 font-bold">
                                {product.category}
                            </span>
                            <span className="text-gray-500 text-xs font-bold uppercase tracking-widest italic">
                                Verified Tech
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-heading font-bold tracking-tighter text-white mb-6">
                            {product.name}
                        </h1>

                        <p className="text-2xl font-manrope font-bold text-white/90 mb-8">
                            ${product.price}.00
                        </p>

                        <p className="text-gray-400 text-lg font-manrope font-light leading-relaxed mb-10">
                            {product.description}
                        </p>

                        {/* Colors */}
                        <div className="mb-10">
                            <span className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-4">Select Color</span>
                            <div className="flex gap-4">
                                {product.colors.map((color, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedColor(index)}
                                        className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center ${selectedColor === index ? "border-blue-500 scale-110" : "border-transparent"
                                            }`}
                                        style={{ backgroundColor: color }}
                                    >
                                        {selectedColor === index && <FiCheck className={index === 0 ? "text-white" : "text-black"} />}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-6 mb-12">
                            {product.features.map((feature, index) => (
                                <div key={index} className="flex flex-col gap-2 p-4 bg-white/5 border border-white/5 rounded-2xl">
                                    <div className="text-blue-400 text-xl">
                                        {iconMap[feature] || <FiZap />}
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-white/80">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-6 mt-auto">
                            <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl overflow-hidden p-2">
                                <button
                                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                    className="p-4 text-white hover:bg-white/5 transition-colors"
                                >
                                    <FiMinus />
                                </button>
                                <span className="w-12 text-center text-white font-bold font-manrope">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(q => q + 1)}
                                    className="p-4 text-white hover:bg-white/5 transition-colors"
                                >
                                    <FiPlus />
                                </button>
                            </div>

                            <button
                                onClick={() => {
                                    for (let i = 0; i < quantity; i++) addToCart(product);
                                    router.push('/cart');
                                }}
                                className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center gap-3 py-5 rounded-2xl font-bold uppercase tracking-widest shadow-xl shadow-blue-600/20 hover:scale-[1.02] transition-transform active:scale-95"
                            >
                                <FiShoppingCart /> Add to Cart
                            </button>
                        </div>

                        {/* Specs Table */}
                        <div className="mt-16 border-t border-white/5 pt-10">
                            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-white/40 mb-6">Technical Specifications</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                                {product.specs.map((spec, index) => (
                                    <div key={index} className="flex justify-between py-3 border-b border-white/5">
                                        <span className="text-gray-500 text-xs uppercase font-bold tracking-widest">{spec.label}</span>
                                        <span className="text-white text-xs font-medium">{spec.value}</span>
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
