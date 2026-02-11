"use client";

import React, { useMemo } from "react";
import { useLanguage } from "../_contexts/LanguageContext";

export default function ArticlesPage() {
  const { t } = useLanguage();

  // Article data - language-aware
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const articles = useMemo(() => {
    const articlesList = [
      {
        slug: "understanding-mental-health",
        title: t("article.understandingMentalHealth.title") || "Understanding Mental Health: A Comprehensive Guide",
        excerpt: t("article.understandingMentalHealth.excerpt") || "Mental health is an essential part of our overall well-being. Learn about the importance of mental health, common conditions, and how to seek help when needed.",
        date: formatDate(new Date("2026-02-10")),
        dateValue: "2026-02-10",
        author: "Brain And Life Hospital",
        category: t("articles.category.mentalHealth") || "Mental Health",
      },
      {
        slug: "understanding-schizophrenia",
        title: t("article.schizophrenia.title") || "Understanding Schizophrenia: Symptoms, Treatment, and Support",
        excerpt: t("article.schizophrenia.excerpt") || "Schizophrenia is a chronic mental health condition that affects more than 1 in 300 people worldwide. Learn about its symptoms, treatment options, and how early intervention can help manage this condition effectively.",
        date: formatDate(new Date("2026-02-11")),
        dateValue: "2026-02-11",
        author: "Brain And Life Hospital",
        category: t("articles.category.mentalHealth") || "Mental Health",
      },
      {
        slug: "drug-addiction",
        title: t("article.drugAddiction.title") || "Understanding Drug Addiction: Causes, Effects, and Recovery",
        excerpt: t("article.drugAddiction.excerpt") || "Drug addiction is a complex mental health condition that affects millions worldwide. Learn about the causes, effects, warning signs, and effective treatment options available for recovery.",
        date: formatDate(new Date("2026-02-12")),
        dateValue: "2026-02-12",
        author: "Brain And Life Hospital",
        category: t("articles.category.addiction") || "Addiction",
      },
    ];
    
    // Sort by dateValue (latest first) - descending order
    return articlesList.sort((a, b) => {
      return b.dateValue.localeCompare(a.dateValue);
    });
  }, [t]);

  return (
    <main className="relative min-h-screen overflow-hidden pt-20">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.12),transparent_60%)]" />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-700 ring-1 ring-sky-200 mb-4">
              {t("nav.articles")}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-5xl mb-6">
              {t("articles.heroTitle")}{" "}
              <span className="bg-linear-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
                {t("articles.heroTitleHighlight")}
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              {t("articles.heroDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="relative overflow-hidden py-14 lg:py-20">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {articles && articles.length > 0 ? (
              <div className="grid gap-8">
                {articles.map((article) => (
                  <a
                    key={article.slug}
                    href={`./articles/${article.slug}`}
                    className="group block rounded-2xl border border-white/30 bg-white/30 backdrop-blur-md p-8 shadow-xl shadow-gray-200/30 hover:-translate-y-1 hover:border-white/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                        {article.category}
                      </span>
                      <time className="text-sm text-gray-500 whitespace-nowrap">
                        {article.date}
                      </time>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        {t("articles.by")} {article.author}
                      </span>
                      <span className="text-sm font-medium text-sky-600 group-hover:text-sky-700 flex items-center gap-1">
                        {t("articles.readMore")}
                        <svg
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">{t("articles.moreComingSoon")}</p>
              </div>
            )}
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
              {t("articles.needSupportDesc")}
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
