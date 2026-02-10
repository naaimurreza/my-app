import { Metadata } from "next";

const baseUrl = "https://brainandlifehospital.com";

// Article metadata mapping
const articleMetadata: Record<string, {
  title: string;
  description: string;
  keywords: string[];
  publishedTime: string;
  modifiedTime: string;
}> = {
  "understanding-mental-health": {
    title: "Understanding Mental Health: A Comprehensive Guide | Brain And Life Hospital",
    description: "Learn about mental health, common conditions, and how to seek help. Expert insights from Brain And Life Hospital on mental wellness, treatment approaches, and recovery.",
    keywords: [
      "mental health guide",
      "understanding mental health",
      "mental wellness",
      "mental health conditions",
      "depression",
      "anxiety",
      "mental health treatment",
      "psychiatric care",
      "mental health Bangladesh",
      "মানসিক স্বাস্থ্য নির্দেশিকা",
      "মানসিক স্বাস্থ্য বোঝা",
      "মানসিক সুস্থতা",
      "মানসিক স্বাস্থ্য অবস্থা",
      "বিষণ্নতা",
      "উদ্বেগ",
    ],
    publishedTime: "2026-02-10T00:00:00+00:00",
    modifiedTime: "2026-02-10T00:00:00+00:00",
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articleMetadata[params.slug];
  
  if (!article) {
    return {
      title: "Article Not Found | Brain And Life Hospital",
      description: "The article you're looking for doesn't exist.",
    };
  }

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    authors: [{ name: "Brain And Life Hospital" }],
    creator: "Brain And Life Hospital",
    publisher: "Brain And Life Hospital",
    openGraph: {
      title: article.title,
      description: article.description,
      url: `${baseUrl}/articles/${params.slug}`,
      siteName: "Brain And Life Hospital",
      type: "article",
      publishedTime: article.publishedTime,
      modifiedTime: article.modifiedTime,
      authors: ["Brain And Life Hospital"],
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: "en_US",
      alternateLocale: ["bn_BD"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/articles/${params.slug}`,
      languages: {
        en: `${baseUrl}/articles/${params.slug}`,
        bn: `${baseUrl}/articles/${params.slug}`,
        "x-default": `${baseUrl}/articles/${params.slug}`,
      },
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
  };
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
