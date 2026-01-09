import type { Metadata } from "next";
import { Manrope, Syncopate } from "next/font/google"; // Using Syncopate as a close alternative for the wide headings
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const syncopate = Syncopate({
  variable: "--font-heading",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OneNil - The Creative Agency in Sports",
  description: "OneNil is a creative agency in sports.",
};

import { CartProvider } from "@/lib/cart-context";
import { ThemeProvider } from "@/lib/theme-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${syncopate.variable}`}>
        <ThemeProvider>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
