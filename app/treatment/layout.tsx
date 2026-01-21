import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treatment Modalities - Brain And Life Hospital | Therapy & Mental Health Care",
  description:
    "Explore our comprehensive treatment modalities at Brain And Life Hospital: individual therapy, group therapy, family therapy, medication management, and cognitive behavioral therapy. Personalized mental health treatment plans tailored to your needs in Bangladesh.",
  keywords: [
    "mental health treatment modalities",
    "individual therapy Bangladesh",
    "group therapy Dhaka",
    "family therapy",
    "medication management",
    "cognitive behavioral therapy",
    "CBT therapy",
    "psychiatric therapy",
    "mental health counseling",
    "therapy sessions",
    "personalized treatment plans",
    "mental health treatment options",
    "psychotherapy services",
    // Bengali keywords
    "মানসিক স্বাস্থ্য চিকিৎসা পদ্ধতি",
    "ব্যক্তিগত থেরাপি বাংলাদেশ",
    "গ্রুপ থেরাপি ঢাকা",
    "পারিবারিক থেরাপি",
    "ওষুধ ব্যবস্থাপনা",
    "কগনিটিভ বিহেভিওরাল থেরাপি",
    "সিবিটি থেরাপি",
    "মনোরোগ থেরাপি",
    "মানসিক স্বাস্থ্য কাউন্সেলিং",
    "থেরাপি সেশন",
    "ব্যক্তিগতকৃত চিকিৎসা পরিকল্পনা",
    "মানসিক স্বাস্থ্য চিকিৎসা বিকল্প",
    "সাইকোথেরাপি সেবা",
  ],
  openGraph: {
    title: "Treatment Modalities - Brain And Life Hospital | Therapy & Mental Health Care",
    description:
      "Comprehensive treatment modalities: individual therapy, group therapy, family therapy, medication management, and CBT. Personalized mental health care in Bangladesh.",
    url: "https://brainandlifehospital.com/treatment",
    siteName: "Brain And Life Hospital",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brain And Life Hospital - Treatment Modalities",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Treatment Modalities - Brain And Life Hospital",
    description:
      "Comprehensive therapy and mental health treatment modalities in Bangladesh.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://brainandlifehospital.com/treatment",
    languages: {
      en: "https://brainandlifehospital.com/treatment",
      bn: "https://brainandlifehospital.com/treatment",
      "x-default": "https://brainandlifehospital.com/treatment",
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

export default function TreatmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
