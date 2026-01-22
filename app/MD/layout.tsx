import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Message from MD Fokrul Hossain - Brain And Life Hospital",
  description:
    "Read the message from the Managing Director of Brain And Life Hospital. Learn about our mission to provide compassionate mental health care, comprehensive addiction treatment, and family-centered recovery support in Bangladesh.",
  keywords: [
    "managing director message",
    "Brain And Life Hospital director",
    "mental health mission",
    "compassionate mental health care",
    "addiction treatment approach",
    "family-centered recovery",
    "mental health hospital Bangladesh",
    "inpatient mental health care",
    "recovery support",
    "mental wellness mission",
    // Bengali keywords
    "ব্যবস্থাপনা পরিচালকের বার্তা",
    "ব্রেইন অ্যান্ড লাইফ হাসপাতাল পরিচালক",
    "মানসিক স্বাস্থ্য মিশন",
    "সহানুভূতিশীল মানসিক স্বাস্থ্য যত্ন",
    "মাদকাসক্তি চিকিৎসা পদ্ধতি",
    "পারিবারিক-কেন্দ্রিক পুনরুদ্ধার",
    "মানসিক স্বাস্থ্য হাসপাতাল বাংলাদেশ",
    "ইনপেশেন্ট মানসিক স্বাস্থ্য যত্ন",
    "পুনরুদ্ধার সহায়তা",
    "মানসিক সুস্থতা মিশন",
  ],
  openGraph: {
    title: "Message from Managing Director - Brain And Life Hospital",
    description:
      "Read the message from the Managing Director about our mission to provide compassionate mental health care and comprehensive addiction treatment in Bangladesh.",
    url: "https://brainandlifehospital.com/MD",
    siteName: "Brain And Life Hospital",
    images: [
      {
        url: "/assets/md2.png",
        width: 1200,
        height: 630,
        alt: "Brain And Life Hospital - Managing Director Message",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Message from Managing Director - Brain And Life Hospital",
    description:
      "Compassionate mental health care and comprehensive addiction treatment mission.",
    images: ["/assets/md2.png"],
  },
  alternates: {
    canonical: "https://brainandlifehospital.com/MD",
    languages: {
      en: "https://brainandlifehospital.com/MD",
      bn: "https://brainandlifehospital.com/MD",
      "x-default": "https://brainandlifehospital.com/MD",
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
