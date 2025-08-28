import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap", // Optimize font loading
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mudashir-rhoy.vercel.app"),
  
  title: {
    template: "%s | Mudashir Roheemoh - Frontend Developer",
    default: "Mudashir Roheemoh - Frontend Developer | React & Next.js Expert",
  },
  
  description: "Frontend Developer specializing in React.js, Next.js, and React Native. Building responsive web applications and mobile apps with modern JavaScript frameworks. Available for freelance projects.",
  
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer Lagos",
    "Mobile App Developer",
    "Mudashir Roheemoh",
    "Portfolio",
    "Freelance Developer Nigeria",
    "SaaS Development",
    "E-commerce Development",
    "Fintech Development"
  ],
  
  authors: [
    { 
      name: "Mudashir Roheemoh",
      url: "https://mudashir-rhoy.vercel.app"
    }
  ],
  
  creator: "Mudashir Roheemoh",
  publisher: "Mudashir Roheemoh",
  
  verification: {
    google: "K5Ps2Gi-DdTPMs4js_p7qNkIgDR9OHAV7-TnHMpV7RU",
  },
  
  alternates: {
    canonical: "https://mudashir-rhoy.vercel.app",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mudashir-rhoy.vercel.app",
    siteName: "Mudashir Roheemoh Portfolio",
    title: "Mudashir Roheemoh - Frontend Developer | React & Next.js Expert",
    description: "Frontend Developer specializing in React.js, Next.js, and React Native. Building responsive web applications and mobile apps with modern JavaScript frameworks.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mudashir Roheemoh - Frontend Developer Portfolio",
        type: "image/jpeg",
      }
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Mudashir Roheemoh - Frontend Developer",
    description: "Frontend Developer specializing in React.js, Next.js, and React Native. Building responsive web applications and mobile apps.",
    images: ["/opengraph-image.jpg"],
    creator: "@theroheemoh",
  },


  
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/space-grotesk-variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color */}
        <meta name="msapplication-TileColor" content="#8b5cf6" />
        
        {/* Additional performance hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}