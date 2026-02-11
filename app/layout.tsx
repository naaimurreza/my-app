import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { Footer } from "./_components/Footer";
import StructuredData from "./_components/StructuredData";
import { LanguageProvider } from "./_contexts/LanguageContext";
import { ThemeProvider } from "./_contexts/ThemeContext";
import LanguageWrapper from "./_components/LanguageWrapper";
import HreflangTags from "./_components/HreflangTags";
import BengaliSEO from "./_components/BengaliSEO";
import AnimatedGradientBackground from "./_components/AnimatedGradientBackground";
import LanguageToggle from "./_components/LanguageToggle";
import ThemeToggle from "./_components/ThemeToggle";
import { defaultMetadata } from "./metadata";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" itemScope itemType="https://schema.org/Hospital">
      <head>
        <link rel="icon" href="/assets/brainandlifelogo.png" />
        <link rel="apple-touch-icon" href="/assets/brainandlifelogo.png" />
        {/* Preload critical images for faster loading */}
        <link
          rel="preload"
          href="/assets/brainandlifelogo.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/assets/banner2.jpg"
          as="image"
          type="image/jpeg"
          fetchPriority="high"
        />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        <link rel="dns-prefetch" href="https://youtube.com" />
        {/* Preconnect to improve performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${poppins.variable} antialiased bg-white dark:bg-gray-900 transition-colors duration-300`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <LanguageWrapper>
              <HreflangTags />
              <BengaliSEO />
              <AnimatedGradientBackground />
              <StructuredData pathname="/" />
              <Header />
              {children}
              <Footer />
              <LanguageToggle />
              <ThemeToggle />
            </LanguageWrapper>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
