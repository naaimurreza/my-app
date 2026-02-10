import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles - Brain And Life Hospital | Mental Health Resources",
  description:
    "Read informative articles about mental health, treatment approaches, and wellness tips from Brain And Life Hospital. Expert insights on mental health care and recovery.",
  keywords: [
    "mental health articles",
    "psychiatric care articles",
    "mental wellness resources",
    "mental health information",
    "treatment articles",
    "mental health tips",
    "psychiatry articles Bangladesh",
    // Bengali keywords
    "মানসিক স্বাস্থ্য নিবন্ধ",
    "মনোরোগবিদ্যা নিবন্ধ",
    "মানসিক সুস্থতা সম্পদ",
    "মানসিক স্বাস্থ্য তথ্য",
    "চিকিৎসা নিবন্ধ",
    "মানসিক স্বাস্থ্য টিপস",
  ],
  openGraph: {
    title: "Articles - Brain And Life Hospital | Mental Health Resources",
    description:
      "Read informative articles about mental health, treatment approaches, and wellness tips from our expert team.",
    url: "https://brainandlifehospital.com/articles",
    siteName: "Brain And Life Hospital",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brain And Life Hospital - Articles",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles - Brain And Life Hospital",
    description:
      "Expert insights on mental health care and recovery from Brain And Life Hospital.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://brainandlifehospital.com/articles",
    languages: {
      en: "https://brainandlifehospital.com/articles",
      bn: "https://brainandlifehospital.com/articles",
      "x-default": "https://brainandlifehospital.com/articles",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      nosnippet: false,
    },
  },
  authors: [{ name: "Brain And Life Hospital" }],
  creator: "Brain And Life Hospital",
  publisher: "Brain And Life Hospital",
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
