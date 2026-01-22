import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prof. Dr. M A Mohit Kamal - Senior Chief Consultant Psychiatry | Brain And Life Hospital",
  description:
    "Meet Prof. Dr. M A Mohit Kamal, Senior Chief Consultant in Psychiatry & Psychotherapy at LABAID Cardiac Hospital. MBBS, M.Phil. (Psychiatry), FCPS qualified psychiatrist with extensive experience in mental health care, psychotherapy, and academic leadership. Former Director of National Institute of Mental Health, Dhaka.",
  keywords: [
    "Dr. Muhit Kamal",
    "Dr. M A Mohit Kamal",
    "Prof. Dr. Muhit Kamal",
    "psychiatrist Bangladesh",
    "psychiatrist Dhaka",
    "senior chief consultant psychiatry",
    "psychotherapy specialist",
    "mental health specialist",
    "psychiatric care",
    "psychotherapy",
    "M.Phil Psychiatry",
    "FCPS psychiatrist",
    "LABAID Cardiac Hospital psychiatrist",
    "National Institute of Mental Health",
    "academic leadership psychiatry",
    "depression treatment",
    "anxiety treatment",
    "psychiatric consultation",
    // Bengali keywords
    "ড. মুহিত কামাল",
    "ড. এম এ মহিত কামাল",
    "প্রফেসর ড. মুহিত কামাল",
    "মনোরোগ বিশেষজ্ঞ বাংলাদেশ",
    "মনোরোগ বিশেষজ্ঞ ঢাকা",
    "সিনিয়র চিফ কনসালটেন্ট মনোরোগবিদ্যা",
    "সাইকোথেরাপি বিশেষজ্ঞ",
    "মানসিক স্বাস্থ্য বিশেষজ্ঞ",
    "মনোরোগবিদ্যা সেবা",
    "সাইকোথেরাপি",
    "এম.ফিল মনোরোগবিদ্যা",
    "এফসিপিএস মনোরোগ বিশেষজ্ঞ",
    "ল্যাবএইড কার্ডিয়াক হাসপাতাল মনোরোগ বিশেষজ্ঞ",
    "জাতীয় মানসিক স্বাস্থ্য ইনস্টিটিউট",
    "একাডেমিক নেতৃত্ব মনোরোগবিদ্যা",
    "বিষণ্নতা চিকিৎসা",
    "উদ্বেগ চিকিৎসা",
    "মনোরোগ পরামর্শ",
  ],
  openGraph: {
    title: "Prof. Dr. M A Mohit Kamal - Senior Chief Consultant Psychiatry | Brain And Life Hospital",
    description:
      "Meet Prof. Dr. M A Mohit Kamal, Senior Chief Consultant in Psychiatry & Psychotherapy. MBBS, M.Phil. (Psychiatry), FCPS qualified psychiatrist with extensive experience in mental health care and psychotherapy.",
    url: "https://brainandlifehospital.com/muhitkamal",
    siteName: "Brain And Life Hospital",
    images: [
      {
        url: "/assets/kamal.png",
        width: 1200,
        height: 630,
        alt: "Prof. Dr. M A Mohit Kamal - Senior Chief Consultant Psychiatry",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prof. Dr. M A Mohit Kamal - Senior Chief Consultant Psychiatry",
    description:
      "MBBS, M.Phil. (Psychiatry), FCPS qualified psychiatrist with extensive experience in mental health care and psychotherapy.",
    images: ["/assets/kamal.png"],
  },
  alternates: {
    canonical: "https://brainandlifehospital.com/muhitkamal",
    languages: {
      en: "https://brainandlifehospital.com/muhitkamal",
      bn: "https://brainandlifehospital.com/muhitkamal",
      "x-default": "https://brainandlifehospital.com/muhitkamal",
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
