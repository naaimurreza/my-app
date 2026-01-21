import { Metadata } from "next";

const baseUrl = "https://brainandlifehospital.com";
const siteName = "Brain And Life Hospital";
const defaultDescription = "Brain And Life Hospital - Comprehensive mental health care and addiction treatment in Bangladesh. Expert psychiatrists, 24/7 emergency support, and compassionate care for mental wellness. Brain And Life provides world-class psychiatric services.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteName} - Mental Health & Addiction Treatment Center`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "Brain And Life",
    "Brain And Life Hospital",
    "brain and life",
    "brain and life hospital",
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
    // Bengali keywords
    "মানসিক স্বাস্থ্য হাসপাতাল",
    "মনোরোগবিদ্যা সেবা",
    "মাদকাসক্তি চিকিৎসা",
    "মানসিক স্বাস্থ্য বাংলাদেশ",
    "মনোরোগ বিশেষজ্ঞ ঢাকা",
    "মানসিক সুস্থতা",
    "বিষণ্নতা চিকিৎসা",
    "উদ্বেগ চিকিৎসা",
    "স্কিজোফ্রেনিয়া চিকিৎসা",
    "মাদক পুনর্বাসন",
    "মানসিক রোগ চিকিৎসা",
    "সাইকোথেরাপি",
    "কাউন্সেলিং সেবা",
    "২৪/৭ মানসিক স্বাস্থ্য সহায়তা",
    "জরুরি মনোরোগবিদ্যা যত্ন",
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
    alternateLocale: ["bn_BD"],
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
    languages: {
      en: baseUrl,
      "bn": baseUrl,
      "x-default": baseUrl,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};
