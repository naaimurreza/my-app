import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Brain And Life Hospital | Mental Health Care in Bangladesh",
  description:
    "Learn about Brain And Life Hospital, your trusted mental health care provider in Bangladesh. Compassionate, evidence-based treatment with 24/7 emergency support, multidisciplinary care teams, and personalized treatment plans for mental wellness.",
  keywords: [
    "about Brain And Life Hospital",
    "mental health hospital Bangladesh",
    "psychiatric care Dhaka",
    "mental health services",
    "compassionate mental health care",
    "evidence-based treatment",
    "24/7 mental health support",
    "multidisciplinary care teams",
    "patient privacy",
    "personalized treatment plans",
    "mental wellness Bangladesh",
    // Bengali keywords
    "ব্রেইন অ্যান্ড লাইফ হাসপাতাল সম্পর্কে",
    "মানসিক স্বাস্থ্য হাসপাতাল বাংলাদেশ",
    "মনোরোগবিদ্যা সেবা ঢাকা",
    "মানসিক স্বাস্থ্য সেবা",
    "সহানুভূতিশীল মানসিক স্বাস্থ্য যত্ন",
    "প্রমাণ-ভিত্তিক চিকিৎসা",
    "২৪/৭ মানসিক স্বাস্থ্য সহায়তা",
    "বহু-শৃঙ্খল যত্ন দল",
    "রোগীর গোপনীয়তা",
    "ব্যক্তিগতকৃত চিকিৎসা পরিকল্পনা",
    "মানসিক সুস্থতা বাংলাদেশ",
  ],
  openGraph: {
    title: "About Us - Brain And Life Hospital | Mental Health Care in Bangladesh",
    description:
      "Learn about Brain And Life Hospital, your trusted mental health care provider. Compassionate, evidence-based treatment with 24/7 emergency support and personalized care.",
    url: "https://brainandlifehospital.com/about",
    siteName: "Brain And Life Hospital",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brain And Life Hospital - About Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Brain And Life Hospital",
    description:
      "Compassionate, evidence-based mental health care with 24/7 emergency support in Bangladesh.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://brainandlifehospital.com/about",
    languages: {
      en: "https://brainandlifehospital.com/about",
      bn: "https://brainandlifehospital.com/about",
      "x-default": "https://brainandlifehospital.com/about",
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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
