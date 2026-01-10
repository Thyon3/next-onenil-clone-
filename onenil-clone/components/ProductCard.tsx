"use client";

import React from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Product } from '@/lib/products';
import { useCart } from '@/lib/cart-context';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            className="group relative bg-card border border-border rounded-[2.5rem] overflow-hidden backdrop-blur-sm transition-all duration-700 hover:border-blue-600/30 shadow-sm"
        >
            {/* Product Image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <NextImage
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                    <span className="px-5 py-2 bg-card/60 backdrop-blur-xl border border-border rounded-2xl text-[0.6rem] uppercase tracking-[0.3em] text-foreground font-black">
                        {product.category}
                    </span>
                </div>

                {/* Quick Add Button */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToCart(product);
                    }}
                    className="absolute bottom-6 right-6 h-16 w-16 bg-foreground text-background rounded-full flex items-center justify-center opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:scale-110 shadow-2xl hover:bg-blue-600 hover:text-white"
                >
                    <FiPlus className="text-2xl" />
                </button>
            </div>

            {/* Product Info */}
            <div className="p-10">
                <div className="flex flex-col gap-4 mb-8">
                    <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-black uppercase tracking-tighter italic text-foreground group-hover:text-blue-600 transition-colors leading-[0.9]">
                            {product.name}
                        </h3>
                        <div className="text-xl font-black text-foreground drop-shadow-sm">
                            ${product.price}
                        </div>
                    </div>
                </div>

                <p className="text-muted-foreground text-lg font-light leading-relaxed mb-10 line-clamp-2">
                    {product.description}
                </p>

                <Link
                    href={`/shop/${product.id}`}
                    className="flex items-center gap-4 text-[0.7rem] font-black uppercase tracking-[0.3em] text-muted-foreground group-hover:text-foreground transition-all"
                >
                    <span>View Product</span>
                    <div className="h-0.5 w-0 group-hover:w-12 bg-blue-600 transition-all duration-500 rounded-full" />
                    <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
}
