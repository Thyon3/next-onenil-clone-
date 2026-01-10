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
        <main className="min-h-screen bg-background pt-32 pb-20 px-8 transition-colors duration-300">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-0.5 w-8 bg-blue-500" />
                    <span className="text-sm font-bold tracking-[0.4em] uppercase text-blue-500">
                        Your Performance Kit
                    </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter text-foreground mb-16 uppercase">
                    SHOPPING <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">BAG</span>
                </h1>

                {cart.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-40 text-center bg-card border border-border rounded-3xl backdrop-blur-sm shadow-sm"
                    >
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-muted mb-8">
                            <FiShoppingBag className="text-4xl text-muted-foreground" />
                        </div>
                        <h2 className="text-3xl font-heading text-foreground mb-6 uppercase tracking-tighter font-bold">Your bag is empty</h2>
                        <p className="text-muted-foreground font-manrope mb-12 max-w-md mx-auto">
                            Upgrade your performance with our elite collection of engineered wearables.
                        </p>
                        <Link
                            href="/shop"
                            className="inline-flex items-center gap-3 bg-foreground text-background px-10 py-5 rounded-2xl font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-foreground/10"
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
                                        className="flex flex-col sm:flex-row items-center gap-8 p-6 bg-card border border-border rounded-3xl backdrop-blur-sm group hover:border-blue-500/20 transition-all shadow-sm"
                                    >
                                        <div className="relative w-40 h-40 rounded-2xl overflow-hidden bg-background shrink-0 border border-border">
                                            <NextImage
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover p-4 group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>

                                        <div className="flex-1 text-center sm:text-left">
                                            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                                                <span className="text-[0.6rem] uppercase tracking-widest text-blue-600 font-bold border border-blue-500/30 px-2 rounded">
                                                    {item.category}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold font-heading tracking-tight text-foreground mb-2 uppercase">{item.name}</h3>
                                            <p className="text-muted-foreground text-sm font-manrope line-clamp-1 mb-6">
                                                Engineered Performance Series
                                            </p>

                                            <div className="flex items-center justify-center sm:justify-start gap-8">
                                                <div className="flex items-center bg-background border border-border rounded-xl p-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                                                    >
                                                        <FiMinus />
                                                    </button>
                                                    <span className="w-8 text-center text-sm font-bold text-foreground">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                                                    >
                                                        <FiPlus />
                                                    </button>
                                                </div>

                                                <span className="text-lg font-bold text-foreground font-manrope">
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
                            <div className="bg-card border border-border rounded-3xl p-8 sticky top-32 shadow-sm">
                                <h3 className="text-xl font-heading font-bold text-foreground mb-8 uppercase tracking-tight">Order Summary</h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-muted-foreground text-sm uppercase tracking-widest font-bold">Subtotal</span>
                                        <span className="text-foreground font-bold">${cartTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-muted-foreground text-sm uppercase tracking-widest font-bold">Shipping</span>
                                        <span className="text-blue-500 font-bold uppercase text-[0.7rem] tracking-widest">Calculated at checkout</span>
                                    </div>
                                    <div className="h-px bg-border my-4" />
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-foreground text-lg font-heading font-bold uppercase">Total</span>
                                        <span className="text-3xl font-heading font-bold text-foreground tracking-tighter">${cartTotal.toFixed(2)}</span>
                                    </div>
                                </div>

                                <Link
                                    href="/checkout"
                                    className="w-full flex items-center justify-center gap-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-6 rounded-2xl font-bold uppercase tracking-[0.2em] shadow-xl shadow-blue-600/20 hover:scale-[1.02] transition-transform active:scale-95 mb-6"
                                >
                                    <FiCreditCard className="text-xl" /> Secure Checkout
                                </Link>

                                <p className="text-center text-[0.65rem] text-muted-foreground uppercase tracking-widest font-bold">
                                    Free Express Shipping on orders over $500
                                </p>

                                <div className="mt-12 pt-12 border-t border-border">
                                    <div className="flex flex-wrap gap-4 justify-center items-center opacity-30 grayscale contrast-200">
                                        <div className="w-12 h-8 bg-muted rounded" />
                                        <div className="w-12 h-8 bg-muted rounded" />
                                        <div className="w-12 h-8 bg-muted rounded" />
                                        <div className="w-12 h-8 bg-muted rounded" />
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
