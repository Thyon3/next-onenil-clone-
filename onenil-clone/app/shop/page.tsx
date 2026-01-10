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
        <main className="min-h-screen bg-background pt-40 pb-32 px-8 transition-colors duration-300">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-[1800px] mx-auto">
                {/* Header Section */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col lg:flex-row lg:items-end justify-between gap-12"
                    >
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-0.5 w-12 bg-blue-600 rounded-full" />
                                <span className="text-[0.7rem] font-black tracking-[0.5em] uppercase text-blue-600">
                                    Equipment
                                </span>
                            </div>
                            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-foreground uppercase leading-[0.8] italic">
                                Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 drop-shadow-sm">Lab Gear</span>
                            </h1>
                        </div>

                        <div className="flex flex-col items-end gap-6">
                            <div className="flex bg-card border border-border rounded-2xl p-2 gap-2 shadow-sm">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-8 py-3 rounded-xl text-[0.6rem] font-black uppercase tracking-widest transition-all duration-500 ${selectedCategory === cat
                                            ? "bg-foreground text-background shadow-2xl shadow-foreground/10"
                                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
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
                <div className="flex flex-col md:flex-row gap-8 mb-20 items-center justify-between">
                    <div className="relative w-full md:w-[32rem] group">
                        <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-blue-600 transition-colors text-xl" />
                        <input
                            type="text"
                            placeholder="SEARCH EQUIPMENT CATALOGUE..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-card border border-border rounded-2xl py-6 pl-16 pr-8 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-blue-500/50 transition-all font-black text-[0.7rem] tracking-[0.1em] shadow-sm uppercase"
                        />
                    </div>

                    <div className="flex items-center gap-8 text-[0.65rem] font-black uppercase tracking-[0.2em] text-muted-foreground">
                        <span className="text-foreground">Found {filteredProducts.length} Specimens</span>
                        <div className="h-6 w-px bg-border" />
                        <div className="flex gap-4">
                            <button className="w-12 h-12 flex items-center justify-center bg-foreground text-background rounded-xl shadow-xl shadow-foreground/10">
                                <FiGrid className="text-xl" />
                            </button>
                            <button className="w-12 h-12 flex items-center justify-center bg-card border border-border text-muted-foreground rounded-xl hover:text-foreground transition-all">
                                <FiList className="text-xl" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12"
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
                        className="py-64 text-center"
                    >
                        <h2 className="text-4xl font-black text-muted-foreground/30 mb-8 uppercase tracking-tighter italic">Catalogue Entry Not Found</h2>
                        <button
                            onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                            className="px-10 py-5 bg-foreground text-background rounded-2xl font-black uppercase tracking-widest text-[0.7rem] hover:scale-105 transition-all shadow-2xl shadow-foreground/20"
                        >
                            Reset Parameters
                        </button>
                    </motion.div>
                )}
            </div>
        </main>
    );
}
