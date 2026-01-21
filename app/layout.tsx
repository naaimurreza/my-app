import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { Footer } from "./_components/Footer";
import StructuredData from "./_components/StructuredData";
import { defaultMetadata } from "./metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
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
        <StructuredData pathname="/" />
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
