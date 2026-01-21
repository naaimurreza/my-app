import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Brain And Life Hospital | 24/7 Mental Health Support",
  description:
    "Contact Brain And Life Hospital for mental health support in Bangladesh. 24/7 emergency helpline, confidential consultations, and compassionate care. Reach out to our expert team for psychiatric services, addiction treatment, and mental health support.",
  keywords: [
    "contact Brain And Life Hospital",
    "mental health helpline Bangladesh",
    "psychiatric consultation Dhaka",
    "24/7 mental health support",
    "emergency psychiatric care",
    "mental health contact",
    "psychiatrist consultation",
    "addiction treatment contact",
    "mental health emergency",
    "confidential mental health consultation",
    // Bengali keywords
    "ব্রেইন অ্যান্ড লাইফ হাসপাতাল যোগাযোগ",
    "মানসিক স্বাস্থ্য হেল্পলাইন বাংলাদেশ",
    "মনোরোগ পরামর্শ ঢাকা",
    "২৪/৭ মানসিক স্বাস্থ্য সহায়তা",
    "জরুরি মনোরোগবিদ্যা যত্ন",
    "মানসিক স্বাস্থ্য যোগাযোগ",
    "মনোরোগ বিশেষজ্ঞ পরামর্শ",
    "মাদকাসক্তি চিকিৎসা যোগাযোগ",
    "মানসিক স্বাস্থ্য জরুরি",
    "গোপনীয় মানসিক স্বাস্থ্য পরামর্শ",
  ],
  openGraph: {
    title: "Contact Us - Brain And Life Hospital | 24/7 Mental Health Support",
    description:
      "Contact Brain And Life Hospital for mental health support. 24/7 emergency helpline, confidential consultations, and compassionate care in Bangladesh.",
    url: "https://brainandlifehospital.com/contact",
    siteName: "Brain And Life Hospital",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brain And Life Hospital - Contact Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Brain And Life Hospital",
    description:
      "24/7 emergency helpline and confidential mental health consultations in Bangladesh.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://brainandlifehospital.com/contact",
    languages: {
      en: "https://brainandlifehospital.com/contact",
      bn: "https://brainandlifehospital.com/contact",
      "x-default": "https://brainandlifehospital.com/contact",
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
