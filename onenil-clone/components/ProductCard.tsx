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
            className="group relative bg-gray-950/50 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-blue-500/30"
        >
            {/* Product Image */}
            <div className="relative aspect-[4/5] overflow-hidden">
                <NextImage
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[0.7rem] uppercase tracking-widest text-blue-400 font-bold">
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
                    className="absolute bottom-4 right-4 h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-500 shadow-lg shadow-blue-600/20"
                >
                    <FiPlus className="text-xl" />
                </button>
            </div>

            {/* Product Info */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-heading font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                        {product.name}
                    </h3>
                    <span className="text-lg font-manrope font-bold text-white/90">
                        ${product.price}
                    </span>
                </div>

                <p className="text-gray-400 text-sm line-clamp-2 mb-6 font-manrope font-light leading-relaxed">
                    {product.description}
                </p>

                <Link
                    href={`/shop/${product.id}`}
                    className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-bold text-white/50 group-hover:text-white transition-colors"
                >
                    View Details
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/10 group-hover:via-blue-600/5 group-hover:to-cyan-600/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10" />
        </motion.div>
    );
}
