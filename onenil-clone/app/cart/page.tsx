"use client";

import React from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/lib/cart-context';
import { FiTrash2, FiMinus, FiPlus, FiArrowRight, FiShoppingBag, FiCreditCard } from 'react-icons/fi';

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

    return (
        <main className="min-h-screen bg-black pt-32 pb-20 px-8">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-0.5 w-8 bg-blue-500" />
                    <span className="text-sm font-bold tracking-[0.4em] uppercase text-blue-400">
                        Your Performance Kit
                    </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter text-white mb-16">
                    SHOPPING <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">BAG</span>
                </h1>

                {cart.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-40 text-center bg-gray-950/50 border border-white/5 rounded-3xl backdrop-blur-sm"
                    >
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 mb-8">
                            <FiShoppingBag className="text-4xl text-gray-500" />
                        </div>
                        <h2 className="text-3xl font-heading text-white mb-6 uppercase tracking-tighter">Your bag is empty</h2>
                        <p className="text-gray-500 font-manrope mb-12 max-w-md mx-auto">
                            Upgrade your performance with our elite collection of engineered wearables.
                        </p>
                        <Link
                            href="/shop"
                            className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/5"
                        >
                            Start Shopping <FiArrowRight />
                        </Link>
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-6">
                            <AnimatePresence mode='popLayout'>
                                {cart.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        className="flex flex-col sm:flex-row items-center gap-8 p-6 bg-gray-950/50 border border-white/5 rounded-3xl backdrop-blur-sm group hover:border-blue-500/20 transition-all"
                                    >
                                        <div className="relative w-40 h-40 rounded-2xl overflow-hidden bg-black shrink-0 border border-white/5">
                                            <NextImage
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover p-4 group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>

                                        <div className="flex-1 text-center sm:text-left">
                                            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                                                <span className="text-[0.6rem] uppercase tracking-widest text-blue-400 font-bold border border-blue-500/30 px-2 rounded">
                                                    {item.category}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold font-heading tracking-tight text-white mb-2">{item.name}</h3>
                                            <p className="text-gray-500 text-sm font-manrope line-clamp-1 mb-6">
                                                Engineered Performance Series
                                            </p>

                                            <div className="flex items-center justify-center sm:justify-start gap-8">
                                                <div className="flex items-center bg-black border border-white/10 rounded-xl p-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-2 text-gray-400 hover:text-white transition-colors"
                                                    >
                                                        <FiMinus />
                                                    </button>
                                                    <span className="w-8 text-center text-sm font-bold text-white">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-2 text-gray-400 hover:text-white transition-colors"
                                                    >
                                                        <FiPlus />
                                                    </button>
                                                </div>

                                                <span className="text-lg font-bold text-white font-manrope">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="p-4 rounded-xl bg-red-500/5 text-red-500 hover:bg-red-500 hover:text-white transition-all self-center sm:self-auto"
                                        >
                                            <FiTrash2 />
                                        </button>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-gray-950 border border-white/5 rounded-3xl p-8 sticky top-32">
                                <h3 className="text-xl font-heading font-bold text-white mb-8 uppercase tracking-tight">Order Summary</h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-gray-500 text-sm uppercase tracking-widest font-bold">Subtotal</span>
                                        <span className="text-white font-bold">${cartTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-gray-500 text-sm uppercase tracking-widest font-bold">Shipping</span>
                                        <span className="text-blue-400 font-bold uppercase text-[0.7rem] tracking-widest">Calculated at checkout</span>
                                    </div>
                                    <div className="h-px bg-white/5 my-4" />
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-white text-lg font-heading font-bold uppercase">Total</span>
                                        <span className="text-3xl font-heading font-bold text-white tracking-tighter">${cartTotal.toFixed(2)}</span>
                                    </div>
                                </div>

                                <Link
                                    href="/checkout"
                                    className="w-full flex items-center justify-center gap-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-6 rounded-2xl font-bold uppercase tracking-[0.2em] shadow-xl shadow-blue-600/20 hover:scale-[1.02] transition-transform active:scale-95 mb-6"
                                >
                                    <FiCreditCard className="text-xl" /> Secure Checkout
                                </Link>

                                <p className="text-center text-[0.65rem] text-gray-600 uppercase tracking-widest font-bold">
                                    Free Express Shipping on orders over $500
                                </p>

                                <div className="mt-12 pt-12 border-t border-white/5">
                                    <div className="flex flex-wrap gap-4 justify-center items-center opacity-30 grayscale contrast-200">
                                        <div className="w-12 h-8 bg-white/20 rounded" />
                                        <div className="w-12 h-8 bg-white/20 rounded" />
                                        <div className="w-12 h-8 bg-white/20 rounded" />
                                        <div className="w-12 h-8 bg-white/20 rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
