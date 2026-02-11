import { Metadata } from "next";

// Article-specific metadata
const articleMetadata: Record<string, {
  title: string;
  description: string;
  keywords: string[];
  publishedTime: string;
  modifiedTime: string;
}> = {
  "understanding-mental-health": {
    title: "Understanding Mental Health: A Comprehensive Guide | Brain And Life Hospital",
    description: "Learn about mental health, common conditions, and how to seek help. Comprehensive guide to mental wellness, depression, anxiety, and professional mental health care in Bangladesh.",
    keywords: [
      // Primary keywords
      "mental health guide",
      "mental health awareness",
      "mental wellness",
      "mental health conditions",
      "mental health care Bangladesh",
      // Condition-specific
      "depression symptoms",
      "anxiety disorders",
      "bipolar disorder",
      "mental health treatment",
      "psychiatric care",
      // Location-based
      "mental health services Bangladesh",
      "mental health Dhaka",
      "psychiatric services Bangladesh",
      // Long-tail keywords
      "how to improve mental health",
      "mental health support",
      "mental health professional",
      "mental health resources",
      "signs of mental health issues",
      // Bengali keywords
      "মানসিক স্বাস্থ্য নির্দেশিকা",
      "মানসিক স্বাস্থ্য সচেতনতা",
      "মানসিক সুস্থতা",
      "মানসিক স্বাস্থ্য অবস্থা",
      "মানসিক স্বাস্থ্য যত্ন বাংলাদেশ",
      "বিষণ্নতা লক্ষণ",
      "উদ্বেগজনিত ব্যাধি",
      "মানসিক স্বাস্থ্য চিকিৎসা",
      "মনোরোগবিদ্যা যত্ন",
    ],
    publishedTime: "2026-02-10T00:00:00+00:00",
    modifiedTime: "2026-02-10T00:00:00+00:00",
  },
  "understanding-schizophrenia": {
    title: "Understanding Schizophrenia: Symptoms, Treatment, and Support | Brain And Life Hospital",
    description: "Comprehensive guide to schizophrenia: symptoms, causes, treatment options, and support. Learn about hallucinations, delusions, and effective schizophrenia management in Bangladesh.",
    keywords: [
      // Primary keywords
      "schizophrenia",
      "schizophrenia symptoms",
      "schizophrenia treatment",
      "schizophrenia causes",
      "schizophrenia diagnosis",
      // Symptom-specific
      "hallucinations",
      "delusions",
      "schizophrenia signs",
      "schizophrenia early symptoms",
      "paranoid schizophrenia",
      // Treatment-related
      "schizophrenia medication",
      "schizophrenia therapy",
      "schizophrenia support",
      "schizophrenia recovery",
      "schizophrenia management",
      // Location-based
      "schizophrenia treatment Bangladesh",
      "schizophrenia doctor Dhaka",
      "psychiatric care schizophrenia",
      // Long-tail keywords
      "what is schizophrenia",
      "how to help someone with schizophrenia",
      "schizophrenia family support",
      "schizophrenia early intervention",
      // Bengali keywords
      "স্কিজোফ্রেনিয়া",
      "স্কিজোফ্রেনিয়া লক্ষণ",
      "স্কিজোফ্রেনিয়া চিকিৎসা",
      "স্কিজোফ্রেনিয়া কারণ",
      "স্কিজোফ্রেনিয়া নির্ণয়",
      "হ্যালুসিনেশন",
      "ভ্রান্ত ধারণা",
      "স্কিজোফ্রেনিয়া চিকিৎসা বাংলাদেশ",
      "স্কিজোফ্রেনিয়া ডাক্তার ঢাকা",
    ],
    publishedTime: "2026-02-11T00:00:00+00:00",
    modifiedTime: "2026-02-11T00:00:00+00:00",
  },
  "drug-addiction": {
    title: "Understanding Drug Addiction: Causes, Effects, and Recovery | Brain And Life Hospital",
    description: "Comprehensive guide to drug addiction: causes, warning signs, effects, and treatment options. Learn about substance abuse recovery, detoxification, and addiction rehabilitation in Bangladesh.",
    keywords: [
      // Primary keywords
      "drug addiction",
      "substance abuse",
      "drug addiction treatment",
      "addiction recovery",
      "drug rehabilitation",
      // Substance-specific
      "heroin addiction",
      "yaba addiction",
      "marijuana addiction",
      "phensedyl addiction",
      "opioid addiction",
      "cocaine addiction",
      // Treatment-related
      "addiction treatment center",
      "drug detox",
      "addiction therapy",
      "substance abuse treatment",
      "addiction counseling",
      // Location-based
      "drug addiction treatment Bangladesh",
      "addiction rehabilitation Dhaka",
      "drug rehab Bangladesh",
      "substance abuse treatment Bangladesh",
      // Long-tail keywords
      "signs of drug addiction",
      "drug addiction symptoms",
      "how to overcome drug addiction",
      "drug addiction help",
      "addiction recovery program",
      "drug addiction support",
      // Bengali keywords
      "মাদকাসক্তি",
      "মাদক অপব্যবহার",
      "মাদকাসক্তি চিকিৎসা",
      "মাদকাসক্তি পুনরুদ্ধার",
      "মাদক পুনর্বাসন",
      "হেরোইন আসক্তি",
      "ইয়াবা আসক্তি",
      "মারিজুয়ানা আসক্তি",
      "ফেনসিডিল আসক্তি",
      "মাদকাসক্তি চিকিৎসা কেন্দ্র",
      "মাদক ডিটক্স",
      "মাদকাসক্তি থেরাপি",
      "মাদকাসক্তি চিকিৎসা বাংলাদেশ",
      "মাদকাসক্তি পুনর্বাসন ঢাকা",
      "মাদকাসক্তির লক্ষণ",
      "মাদকাসক্তি থেকে মুক্তি",
    ],
    publishedTime: "2026-02-12T00:00:00+00:00",
    modifiedTime: "2026-02-12T00:00:00+00:00",
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const metadata = articleMetadata[slug] || articleMetadata["understanding-mental-health"];
  const baseUrl = "https://brainandlifehospital.com";
  const articleUrl = `${baseUrl}/articles/${slug}`;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    authors: [{ name: "Brain And Life Hospital" }],
    creator: "Brain And Life Hospital",
    publisher: "Brain And Life Hospital",
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: articleUrl,
      siteName: "Brain And Life Hospital",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: metadata.publishedTime,
      modifiedTime: metadata.modifiedTime,
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [`${baseUrl}/og-image.jpg`],
    },
    alternates: {
      canonical: articleUrl,
      languages: {
        en: articleUrl,
        bn: `${articleUrl}?lang=bn`,
        "x-default": articleUrl,
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
  };
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
