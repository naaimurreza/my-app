import { Metadata } from "next";

const baseUrl = "https://brainandlifehospital.com";
const siteName = "Brain And Life Hospital";
const defaultDescription = "Comprehensive mental health care and addiction treatment in Bangladesh. Expert psychiatrists, 24/7 emergency support, and compassionate care for mental wellness.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteName} - Mental Health & Addiction Treatment Center`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "mental health hospital",
    "psychiatric care",
    "addiction treatment",
    "mental health Bangladesh",
    "psychiatrist Dhaka",
    "mental wellness",
    "depression treatment",
    "anxiety treatment",
    "schizophrenia treatment",
    "drug rehabilitation",
    "substance abuse treatment",
    "psychotherapy",
    "counseling services",
    "24/7 mental health support",
    "emergency psychiatric care",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: siteName,
    title: `${siteName} - Mental Health & Addiction Treatment Center`,
    description: defaultDescription,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} - Mental Health & Addiction Treatment Center`,
    description: defaultDescription,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};
