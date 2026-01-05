import type { Metadata } from "next";
import { Manrope, Syncopate } from "next/font/google"; // Using Syncopate as a close alternative for the wide headings
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const syncopate = Syncopate({
  variable: "--font-syncopate",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OneNil - The Creative Agency in Sports",
  description: "OneNil is a creative agency in sports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${syncopate.variable}`}>
        {children}
      </body>
    </html>
  );
}
