"use client";

import React from "react";
import { useLanguage } from "../../_contexts/LanguageContext";
import { useParams } from "next/navigation";

export default function ArticlePage() {
  const { t } = useLanguage();
  const params = useParams();
  const slug = params?.slug as string;
  const baseUrl = "https://brainandlifehospital.com";

  // Article data - language-aware, in a real app, this would come from a CMS or database
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getArticle = (articleSlug: string) => {
    if (articleSlug === "understanding-mental-health") {
      return {
        title: t("article.understandingMentalHealth.title"),
        excerpt: t("article.understandingMentalHealth.excerpt"),
        date: formatDate("2026-02-10"),
        dateValue: "2026-02-10",
        author: "Brain And Life Hospital",
        category: t("articles.category.mentalHealth"),
        content: [
          t("article.understandingMentalHealth.content1"),
          t("article.understandingMentalHealth.content2"),
          t("article.understandingMentalHealth.content3"),
          t("article.understandingMentalHealth.content4"),
          t("article.understandingMentalHealth.content5"),
          t("article.understandingMentalHealth.content6"),
          t("article.understandingMentalHealth.content7"),
          t("article.understandingMentalHealth.content8"),
        ]
      };
    }
    if (articleSlug === "understanding-schizophrenia") {
      return {
        title: t("article.schizophrenia.title"),
        excerpt: t("article.schizophrenia.excerpt"),
        date: formatDate("2026-02-11"),
        dateValue: "2026-02-11",
        author: "Brain And Life Hospital",
        category: t("articles.category.mentalHealth"),
        content: [
          t("article.schizophrenia.content1"),
          t("article.schizophrenia.content2"),
          t("article.schizophrenia.content3"),
          t("article.schizophrenia.content4"),
          t("article.schizophrenia.content5"),
          t("article.schizophrenia.content6"),
          t("article.schizophrenia.content7"),
          t("article.schizophrenia.content8"),
          t("article.schizophrenia.content9"),
        ]
      };
    }
    if (articleSlug === "drug-addiction") {
      return {
        title: t("article.drugAddiction.title"),
        excerpt: t("article.drugAddiction.excerpt"),
        date: formatDate("2026-02-12"),
        dateValue: "2026-02-12",
        author: "Brain And Life Hospital",
        category: t("articles.category.addiction"),
        content: [
          t("article.drugAddiction.content1"),
          t("article.drugAddiction.content2"),
          t("article.drugAddiction.content3"),
          t("article.drugAddiction.content4"),
          t("article.drugAddiction.content5"),
          t("article.drugAddiction.content6"),
          t("article.drugAddiction.content7"),
          t("article.drugAddiction.content8"),
          t("article.drugAddiction.content9"),
        ]
      };
    }
    if (articleSlug === "early-signs-of-depression") {
      return {
        title: t("article.earlyDepressionSigns.title"),
        excerpt: t("article.earlyDepressionSigns.excerpt"),
        date: formatDate("2026-02-13"),
        dateValue: "2026-02-13",
        author: "Brain And Life Hospital",
        category: t("articles.category.mentalHealth"),
        content: [
          t("article.earlyDepressionSigns.content1"),
          t("article.earlyDepressionSigns.content2"),
          t("article.earlyDepressionSigns.content3"),
          t("article.earlyDepressionSigns.content4"),
          t("article.earlyDepressionSigns.content5"),
          t("article.earlyDepressionSigns.content6"),
          t("article.earlyDepressionSigns.content7"),
          t("article.earlyDepressionSigns.content8"),
          t("article.earlyDepressionSigns.content9"),
          t("article.earlyDepressionSigns.content10"),
        ]
      };
    }
    return null;
  };

  const article = getArticle(slug);

  // Article schema for SEO
  const getPublishedDate = (articleSlug: string) => {
    if (articleSlug === "understanding-mental-health") return "2026-02-10T00:00:00+00:00";
    if (articleSlug === "understanding-schizophrenia") return "2026-02-11T00:00:00+00:00";
    if (articleSlug === "drug-addiction") return "2026-02-12T00:00:00+00:00";
    if (articleSlug === "early-signs-of-depression") return "2026-02-13T00:00:00+00:00";
    return "2026-02-10T00:00:00+00:00";
  };

  // Article-specific keywords for schema
  const getArticleKeywords = (articleSlug: string) => {
    if (articleSlug === "understanding-mental-health") {
      return "mental health, mental wellness, mental health conditions, depression, anxiety, bipolar disorder, psychiatric care, mental health services Bangladesh";
    }
    if (articleSlug === "understanding-schizophrenia") {
      return "schizophrenia, schizophrenia symptoms, schizophrenia treatment, hallucinations, delusions, schizophrenia management, psychiatric care Bangladesh";
    }
    if (articleSlug === "drug-addiction") {
      return "drug addiction, substance abuse, addiction treatment, drug rehabilitation, addiction recovery, detoxification, addiction therapy, drug addiction treatment Bangladesh";
    }
    if (articleSlug === "early-signs-of-depression") {
      return "depression signs, early depression symptoms, depression warning signs, depression symptoms, depression treatment, depression help, mental health Bangladesh";
    }
    return "mental health, psychiatric care, mental wellness, Bangladesh";
  };

  const articleSchema = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `${baseUrl}/og-image.jpg`,
    datePublished: getPublishedDate(slug),
    dateModified: getPublishedDate(slug),
    author: {
      "@type": "Organization",
      name: article.author,
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Brain And Life Hospital",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/assets/brainandlifelogo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/articles/${slug}`,
    },
    articleSection: article.category,
    keywords: getArticleKeywords(slug),
  } : null;

  if (!article) {
    return (
      <main className="relative min-h-screen overflow-hidden pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">{t("articles.articleNotFound")}</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">{t("articles.articleNotFoundDesc")}</p>
            <a
              href="./articles"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
            >
              {t("articles.backToArticles")}
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden pt-20">
      {/* Article Schema for SEO */}
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.12),transparent_60%)]" />

      {/* Article Header */}
      <section className="relative overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <a
              href="./articles"
              className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors mb-6"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              {t("articles.backToArticles")}
            </a>

            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                {article.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white mb-6 leading-tight" itemProp="headline">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700" itemScope itemType="https://schema.org/Person">
              <div className="flex items-center gap-2">
                <span className="font-medium">{t("articles.by")} <span itemProp="name">{article.author}</span></span>
              </div>
              <div className="flex items-center gap-2">
                <time dateTime={article.dateValue} itemProp="datePublished">{article.date}</time>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="relative overflow-hidden py-8">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg prose-slate max-w-none" itemScope itemType="https://schema.org/Article">
              <div className="rounded-2xl border border-white/30 dark:border-gray-700/30 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-8 md:p-12 shadow-xl shadow-gray-200/30 dark:shadow-gray-900/30" itemProp="articleBody">
                {article.content.map((paragraph, index) => {
                  // Format note section with special styling
                  if (paragraph.includes("Note:") || paragraph.includes("দ্রষ্টব্য:")) {
                    return (
                      <div key={index} className="mb-6 p-4 rounded-lg bg-amber-50/80 dark:bg-amber-900/20 border border-amber-200/50 dark:border-amber-800/50">
                        <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-base md:text-lg font-medium">
                          {paragraph}
                        </p>
                      </div>
                    );
                  }
                  
                  // Format treatment section with emphasis
                  if (paragraph.startsWith("Treatment:") || paragraph.startsWith("চিকিৎসা:")) {
                    return (
                      <div key={index} className="mb-6 p-4 rounded-lg bg-sky-50/80 dark:bg-sky-900/20 border border-sky-200/50 dark:border-sky-800/50">
                        <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-base md:text-lg">
                          <span className="font-semibold text-sky-900 dark:text-sky-300">{paragraph.split(":")[0]}:</span>
                          {paragraph.split(":").slice(1).join(":")}
                        </p>
                      </div>
                    );
                  }
                  
                  // Regular paragraph formatting
                  return (
                    <p
                      key={index}
                      className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-base md:text-lg"
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-14 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_55%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-linear-to-br from-sky-50 dark:from-gray-800 via-blue-50 dark:via-gray-800 to-emerald-50 dark:to-gray-800 p-8 md:p-10 text-gray-900 dark:text-white shadow-2xl shadow-gray-200/50 dark:shadow-gray-900/50 ring-1 ring-gray-200 dark:ring-gray-700 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              {t("articles.needSupport")}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {t("articles.needSupportDescDetail")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2"
              >
                {t("articles.contactUs")}
              </a>
              <a
                href="tel:+88058150414"
                className="inline-flex items-center justify-center rounded-full bg-white dark:bg-gray-700 px-7 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 ring-1 ring-gray-300 dark:ring-gray-600 transition hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2"
              >
                {t("articles.callNow")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
