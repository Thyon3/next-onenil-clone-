"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import { FiFilter, FiSearch, FiGrid, FiList } from 'react-icons/fi';

const categories = ["All", "Upper Body", "Lower Body", "Accessories", "Outerwear"];

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="min-h-screen bg-black pt-32 pb-20 px-8">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
            </div>

            <div className="max-w-[1800px] mx-auto">
                {/* Header Section */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-8"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-0.5 w-8 bg-blue-500" />
                                <span className="text-sm font-bold tracking-[0.4em] uppercase text-blue-400">
                                    Performance Store
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter text-white">
                                ELITE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">GEAR</span>
                            </h1>
                        </div>

                        <div className="flex flex-col items-end gap-4">
                            <div className="flex bg-white/5 border border-white/10 rounded-full p-2 gap-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${selectedCategory === cat
                                                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                                : "text-gray-400 hover:text-white hover:bg-white/5"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Toolbar */}
                <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
                    <div className="relative w-full md:w-96">
                        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search gear..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors font-manrope"
                        />
                    </div>

                    <div className="flex items-center gap-4 text-gray-400 text-sm font-manrope">
                        <span>Showing {filteredProducts.length} Results</span>
                        <div className="h-4 w-px bg-white/10 mx-2" />
                        <div className="flex gap-2">
                            <button className="p-2 bg-white/5 rounded-md hover:text-white transition-colors">
                                <FiGrid />
                            </button>
                            <button className="p-2 hover:text-white transition-colors">
                                <FiList />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-40 text-center"
                    >
                        <h2 className="text-2xl font-heading text-white/50 mb-4">No gear found matching your criteria</h2>
                        <button
                            onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                            className="text-blue-400 font-bold uppercase tracking-widest text-sm hover:underline"
                        >
                            Reset Filters
                        </button>
                    </motion.div>
                )}
            </div>
        </main>
    );
}
