"use client";

import React, { useState } from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/lib/cart-context';
import { FiArrowLeft, FiLock, FiCheckCircle, FiShield, FiTruck, FiCreditCard } from 'react-icons/fi';

export default function CheckoutPage() {
    const { cartTotal, cart, clearCart } = useCart();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zip: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        if (step < 3) setStep(step + 1);
        if (step === 3) {
            // Simulate order completion
            setStep(4);
            clearCart();
        }
    };

    if (step === 4) {
        return (
            <main className="min-h-screen bg-black flex items-center justify-center px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-xl w-full text-center p-12 bg-gray-950 border border-white/5 rounded-[3rem] shadow-2xl"
                >
                    <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-600/40">
                        <FiCheckCircle className="text-5xl text-white" />
                    </div>
                    <h1 className="text-4xl font-heading font-bold text-white mb-6 uppercase tracking-tighter">Mission Accomplished</h1>
                    <p className="text-gray-400 font-manrope text-lg mb-12">
                        Your order has been confirmed and is being processed by our performance team. Expect delivery within 2-4 business days.
                    </p>
                    <div className="flex flex-col gap-4">
                        <Link
                            href="/"
                            className="bg-white text-black py-5 rounded-2xl font-bold uppercase tracking-widest hover:scale-105 transition-all"
                        >
                            Return Home
                        </Link>
                        <p className="text-gray-600 text-xs uppercase tracking-widest font-bold mt-4">Order ID: ATH-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                    </div>
                </motion.div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background pt-32 pb-20 px-8 transition-colors duration-300">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                    {/* Checkout Form */}
                    <div>
                        <Link
                            href="/cart"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 uppercase tracking-widest text-xs font-bold"
                        >
                            <FiArrowLeft /> Back to bag
                        </Link>

                        {/* Stepper */}
                        <div className="flex items-center gap-4 mb-16">
                            {[1, 2, 3].map((s) => (
                                <React.Fragment key={s}>
                                    <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm ${step >= s ? "bg-blue-600 text-white" : "bg-muted text-muted-foreground"
                                        }`}>
                                        {step > s ? <FiCheckCircle /> : s}
                                    </div>
                                    {s < 3 && <div className={`h-px flex-1 ${step > s ? "bg-blue-600" : "bg-muted"}`} />}
                                </React.Fragment>
                            ))}
                        </div>

                        <form onSubmit={handleNext}>
                            <AnimatePresence mode='wait'>
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        className="space-y-8"
                                    >
                                        <div>
                                            <h2 className="text-3xl font-heading font-black text-foreground mb-8 uppercase tracking-tight">Contact Information</h2>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full bg-background border border-border rounded-xl py-5 px-6 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500/50 transition-colors shadow-sm"
                                            />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-heading font-black text-foreground mb-8 uppercase tracking-tight">Shipping Address</h2>
                                            <div className="grid grid-cols-2 gap-6">
                                                <input
                                                    required
                                                    type="text"
                                                    name="firstName"
                                                    placeholder="First Name"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-background border border-border rounded-xl py-5 px-6 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500/50 transition-colors shadow-sm"
                                                />
                                                <input
                                                    required
                                                    type="text"
                                                    name="lastName"
                                                    placeholder="Last Name"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-background border border-border rounded-xl py-5 px-6 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500/50 transition-colors shadow-sm"
                                                />
                                            </div>
                                            <input
                                                required
                                                type="text"
                                                name="address"
                                                placeholder="Address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                className="w-full bg-background border border-border rounded-xl py-5 px-6 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500/50 mt-6 transition-colors shadow-sm"
                                            />
                                            <div className="grid grid-cols-2 gap-6 mt-6">
                                                <input
                                                    required
                                                    type="text"
                                                    name="city"
                                                    placeholder="City"
                                                    value={formData.city}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-background border border-border rounded-xl py-5 px-6 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500/50 transition-colors shadow-sm"
                                                />
                                                <input
                                                    required
                                                    type="text"
                                                    name="zip"
                                                    placeholder="ZIP Code"
                                                    value={formData.zip}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-background border border-border rounded-xl py-5 px-6 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500/50 transition-colors shadow-sm"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        className="space-y-8"
                                    >
                                        <h2 className="text-3xl font-heading font-black text-foreground mb-8 uppercase tracking-tight">Shipping Method</h2>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl">
                                                <div className="flex items-center gap-4">
                                                    <FiTruck className="text-2xl text-blue-500" />
                                                    <div>
                                                        <p className="text-foreground font-black uppercase tracking-widest text-sm">Express Shipping</p>
                                                        <p className="text-muted-foreground text-xs font-bold">2-4 business days</p>
                                                    </div>
                                                </div>
                                                <span className="text-blue-600 font-bold uppercase text-xs">Free</span>
                                            </div>
                                            <div className="flex items-center justify-between p-6 bg-muted/50 border border-border rounded-2xl opacity-50">
                                                <div className="flex items-center gap-4">
                                                    <FiTruck className="text-2xl text-muted-foreground" />
                                                    <div>
                                                        <p className="text-foreground font-black uppercase tracking-widest text-sm">Standard Shipping</p>
                                                        <p className="text-muted-foreground text-xs font-bold">5-8 business days</p>
                                                    </div>
                                                </div>
                                                <span className="text-muted-foreground font-bold uppercase text-xs">N/A</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        className="space-y-8"
                                    >
                                        <h2 className="text-3xl font-heading font-black text-foreground mb-8 uppercase tracking-tight">Payment Method</h2>
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-2 p-4 bg-muted border border-border rounded-xl mb-8">
                                                <FiLock className="text-green-500" />
                                                <span className="text-[0.6rem] uppercase tracking-[0.2em] font-bold text-muted-foreground">Secure encrypted transaction</span>
                                            </div>
                                            <input
                                                required
                                                type="text"
                                                name="cardNumber"
                                                placeholder="Card Number"
                                                className="w-full bg-background border border-border rounded-xl py-5 px-6 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500/50 transition-colors font-manrope shadow-sm"
                                            />
                                            <div className="grid grid-cols-2 gap-6">
                                                <input
                                                    required
                                                    type="text"
                                                    name="expiry"
                                                    placeholder="MM / YY"
                                                    className="w-full bg-background border border-border rounded-xl py-5 px-6 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500/50 transition-colors font-manrope shadow-sm"
                                                />
                                                <input
                                                    required
                                                    type="text"
                                                    name="cvv"
                                                    placeholder="CVV"
                                                    className="w-full bg-background border border-border rounded-xl py-5 px-6 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500/50 transition-colors font-manrope shadow-sm"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button
                                type="submit"
                                className="w-full mt-12 bg-blue-600 text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl shadow-blue-600/20 hover:scale-[1.02] transition-transform active:scale-95"
                            >
                                {step === 3 ? "Complete Purchase" : "Continue to Next Step"}
                            </button>
                        </form>
                    </div>

                    {/* Order Summary Sidebar */}
                    <div>
                        <div className="bg-card border border-border rounded-[2.5rem] p-10 lg:sticky lg:top-32 backdrop-blur-md shadow-sm">
                            <h3 className="text-xl font-heading font-black text-foreground mb-10 uppercase tracking-tight">Your Order</h3>

                            <div className="space-y-6 mb-10 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-background shrink-0 border border-border">
                                            <NextImage
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover p-2"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-foreground font-black text-sm uppercase line-clamp-1">{item.name}</p>
                                            <p className="text-muted-foreground text-xs font-bold uppercase mt-1">Qty: {item.quantity}</p>
                                            <p className="text-blue-600 font-black text-sm mt-2">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4 pt-8 border-t border-border">
                                <div className="flex justify-between items-center font-bold">
                                    <span className="text-muted-foreground text-[0.65rem] uppercase tracking-widest">Subtotal</span>
                                    <span className="text-foreground text-sm">${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center font-bold">
                                    <span className="text-muted-foreground text-[0.65rem] uppercase tracking-widest">Express Shipping</span>
                                    <span className="text-green-600 text-[0.65rem] uppercase tracking-widest">Calculated</span>
                                </div>
                                <div className="h-px bg-border my-6" />
                                <div className="flex justify-between items-center">
                                    <span className="text-foreground font-heading font-black uppercase text-lg">Total</span>
                                    <span className="text-4xl font-heading font-black text-foreground tracking-tighter">${cartTotal.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="mt-12 space-y-4">
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <FiShield className="text-blue-500" />
                                    <span className="text-[0.6rem] uppercase tracking-widest font-black">Lifetime Performance Warranty</span>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <FiCreditCard className="text-blue-500" />
                                    <span className="text-[0.6rem] uppercase tracking-widest font-black">Interest-free installments available</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
