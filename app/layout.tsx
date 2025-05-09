import type React from "react";
import type { Metadata } from "next";
import {Inter, Space_Grotesk } from "next/font/google";
import "../styles/globals.css";

const inter = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio | Designer & Developer",
  description: "Crafting purpose driven experiences that inspire & engage",
    generator: 'v0.dev'
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} } font-sans`}>
        {children}
      </body>
    </html>
  );
}

