import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prof. Dr. Golam Rabbani - Chief Consultant Psychiatry | Brain And Life Hospital",
  description:
    "Meet Prof. Dr. Golam Rabbani, Chief Consultant in Psychiatry & Mental Health at Brain And Life Hospital. MBBS, FCPS qualified psychiatrist with decades of experience in psychiatric care, psychotherapy, and mental health research. Expert in clinical psychiatry, cognitive behavioral therapy, and evidence-based treatments.",
  keywords: [
    "Dr. Golam Rabbani",
    "Prof. Dr. Golam Rabbani",
    "psychiatrist Bangladesh",
    "psychiatrist Dhaka",
    "chief consultant psychiatry",
    "mental health specialist",
    "psychiatric care",
    "psychotherapy",
    "clinical psychiatry",
    "mental health research",
    "FCPS psychiatrist",
    "Rajshahi Medical College",
    "Brain And Life Hospital psychiatrist",
    "depression treatment",
    "anxiety treatment",
    "psychiatric consultation",
    // Bengali keywords
    "ড. গোলাম রব্বানী",
    "প্রফেসর ড. গোলাম রব্বানী",
    "মনোরোগ বিশেষজ্ঞ বাংলাদেশ",
    "মনোরোগ বিশেষজ্ঞ ঢাকা",
    "চিফ কনসালটেন্ট মনোরোগবিদ্যা",
    "মানসিক স্বাস্থ্য বিশেষজ্ঞ",
    "মনোরোগবিদ্যা সেবা",
    "সাইকোথেরাপি",
    "ক্লিনিকাল মনোরোগবিদ্যা",
    "মানসিক স্বাস্থ্য গবেষণা",
    "এফসিপিএস মনোরোগ বিশেষজ্ঞ",
    "রাজশাহী মেডিকেল কলেজ",
    "ব্রেইন অ্যান্ড লাইফ হাসপাতাল মনোরোগ বিশেষজ্ঞ",
    "বিষণ্নতা চিকিৎসা",
    "উদ্বেগ চিকিৎসা",
    "মনোরোগ পরামর্শ",
  ],
  openGraph: {
    title: "Prof. Dr. Golam Rabbani - Chief Consultant Psychiatry | Brain And Life Hospital",
    description:
      "Meet Prof. Dr. Golam Rabbani, Chief Consultant in Psychiatry & Mental Health. MBBS, FCPS qualified psychiatrist with decades of experience in psychiatric care and psychotherapy.",
    url: "https://brainandlifehospital.com/golamrabbani",
    siteName: "Brain And Life Hospital",
    images: [
      {
        url: "/assets/rabbani.png",
        width: 1200,
        height: 630,
        alt: "Prof. Dr. Golam Rabbani - Chief Consultant Psychiatry",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prof. Dr. Golam Rabbani - Chief Consultant Psychiatry",
    description:
      "MBBS, FCPS qualified psychiatrist with decades of experience in psychiatric care and psychotherapy at Brain And Life Hospital.",
    images: ["/assets/rabbani.png"],
  },
  alternates: {
    canonical: "https://brainandlifehospital.com/golamrabbani",
    languages: {
      en: "https://brainandlifehospital.com/golamrabbani",
      bn: "https://brainandlifehospital.com/golamrabbani",
      "x-default": "https://brainandlifehospital.com/golamrabbani",
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
