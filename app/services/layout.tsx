import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Brain And Life Hospital | Mental Health & Addiction Treatment",
  description:
    "Comprehensive mental health services at Brain And Life Hospital: mental health treatment, drug addiction rehabilitation, 24/7 emergency care, and psychiatric consultation. Expert care for schizophrenia, depression, anxiety, bipolar disorder, and substance addictions in Bangladesh.",
  keywords: [
    "mental health services Bangladesh",
    "psychiatric services Dhaka",
    "mental health treatment",
    "drug addiction rehabilitation",
    "24/7 emergency psychiatric care",
    "psychiatric consultation",
    "schizophrenia treatment",
    "depression treatment",
    "anxiety therapy",
    "bipolar disorder treatment",
    "addiction treatment center",
    "substance abuse treatment",
    "yaba addiction treatment",
    "marijuana addiction",
    "phensedyl rehabilitation",
    "heroin addiction treatment",
    "crisis intervention",
    "detoxification services",
    // Bengali keywords
    "মানসিক স্বাস্থ্য সেবা বাংলাদেশ",
    "মনোরোগবিদ্যা সেবা ঢাকা",
    "মানসিক স্বাস্থ্য চিকিৎসা",
    "মাদকাসক্তি পুনর্বাসন",
    "২৪/৭ জরুরি মনোরোগবিদ্যা যত্ন",
    "মনোরোগ পরামর্শ",
    "স্কিজোফ্রেনিয়া চিকিৎসা",
    "বিষণ্নতা চিকিৎসা",
    "উদ্বেগ থেরাপি",
    "বাইপোলার ডিসঅর্ডার চিকিৎসা",
    "মাদকাসক্তি চিকিৎসা কেন্দ্র",
    "মাদক অপব্যবহার চিকিৎসা",
    "ইয়াবা আসক্তি চিকিৎসা",
    "মারিজুয়ানা আসক্তি",
    "ফেনসিডিল পুনর্বাসন",
    "হেরোইন আসক্তি চিকিৎসা",
    "সংকট হস্তক্ষেপ",
    "ডিটক্সিফিকেশন সেবা",
  ],
  openGraph: {
    title: "Services - Brain And Life Hospital | Mental Health & Addiction Treatment",
    description:
      "Comprehensive mental health services: mental health treatment, drug addiction rehabilitation, 24/7 emergency care, and psychiatric consultation in Bangladesh.",
    url: "https://brainandlifehospital.com/services",
    siteName: "Brain And Life Hospital",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brain And Life Hospital - Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Brain And Life Hospital",
    description:
      "Comprehensive mental health and addiction treatment services in Bangladesh.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://brainandlifehospital.com/services",
    languages: {
      en: "https://brainandlifehospital.com/services",
      bn: "https://brainandlifehospital.com/services",
      "x-default": "https://brainandlifehospital.com/services",
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

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
