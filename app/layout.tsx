import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { Footer } from "./_components/Footer";
import StructuredData from "./_components/StructuredData";
import { LanguageProvider } from "./_contexts/LanguageContext";
import LanguageWrapper from "./_components/LanguageWrapper";
import HreflangTags from "./_components/HreflangTags";
import BengaliSEO from "./_components/BengaliSEO";
import AnimatedGradientBackground from "./_components/AnimatedGradientBackground";
import LanguageToggle from "./_components/LanguageToggle";
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
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
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
          </LanguageWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
