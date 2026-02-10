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
  const getArticle = (articleSlug: string) => {
    if (articleSlug === "understanding-mental-health") {
      return {
        title: t("article.understandingMentalHealth.title"),
        excerpt: t("article.understandingMentalHealth.excerpt"),
        date: "February 10, 2026",
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
    return null;
  };

  const article = getArticle(slug);

  // Article schema for SEO
  const articleSchema = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `${baseUrl}/og-image.jpg`,
    datePublished: "2026-02-10T00:00:00+00:00",
    dateModified: "2026-02-10T00:00:00+00:00",
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
    keywords: "mental health, psychiatric care, mental wellness, Bangladesh",
  } : null;

  if (!article) {
    return (
      <main className="relative min-h-screen overflow-hidden pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">{t("articles.articleNotFound")}</h1>
            <p className="text-gray-600 mb-8">{t("articles.articleNotFoundDesc")}</p>
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
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-sky-600 transition-colors mb-6"
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

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight" itemProp="headline">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200" itemScope itemType="https://schema.org/Person">
              <div className="flex items-center gap-2">
                <span className="font-medium">{t("articles.by")} <span itemProp="name">{article.author}</span></span>
              </div>
              <div className="flex items-center gap-2">
                <time dateTime="2026-02-10" itemProp="datePublished">{article.date}</time>
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
              <div className="rounded-2xl border border-white/30 bg-white/30 backdrop-blur-md p-8 md:p-12 shadow-xl shadow-gray-200/30" itemProp="articleBody">
                {article.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-14 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_55%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-linear-to-br from-sky-50 via-blue-50 to-emerald-50 p-8 md:p-10 text-gray-900 shadow-2xl shadow-gray-200/50 ring-1 ring-gray-200 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              {t("articles.needSupport")}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
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
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-gray-700 ring-1 ring-gray-300 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2"
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
