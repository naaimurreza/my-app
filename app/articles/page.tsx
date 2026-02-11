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
        dateValue: "2026-01-15",
        author: "Brain And Life Hospital",
        category: t("articles.category.mentalHealth") || "Mental Health",
      },
      {
        slug: "understanding-schizophrenia",
        title: t("article.schizophrenia.title") || "Understanding Schizophrenia: Symptoms, Treatment, and Support",
        excerpt: t("article.schizophrenia.excerpt") || "Schizophrenia is a chronic mental health condition that affects more than 1 in 300 people worldwide. Learn about its symptoms, treatment options, and how early intervention can help manage this condition effectively.",
        date: formatDate(new Date("2026-02-10")),
        dateValue: "2026-01-28",
        author: "Taimoor, Brain And Life Hospital",
        category: t("articles.category.mentalHealth") || "Mental Health",
      },
      {
        slug: "drug-addiction",
        title: t("article.drugAddiction.title") || "Understanding Drug Addiction: Causes, Effects, and Recovery",
        excerpt: t("article.drugAddiction.excerpt") || "Drug addiction is a complex mental health condition that affects millions worldwide. Learn about the causes, effects, warning signs, and effective treatment options available for recovery.",
        date: formatDate(new Date("2026-02-11")),
        dateValue: "2026-02-05",
        author: "Brain And Life Hospital",
        category: t("articles.category.addiction") || "Addiction",
      },
      {
        slug: "early-signs-of-depression",
        title: t("article.earlyDepressionSigns.title") || "Early Signs of Depression Most People Ignore",
        excerpt: t("article.earlyDepressionSigns.excerpt") || "Depression often starts with subtle signs that are easy to dismiss. Learn about the early warning signs of depression that many people overlook, and discover when it's time to seek professional help.",
        date: formatDate(new Date("2026-02-11")),
        dateValue: "2026-02-10",
        author: "Brain And Life Hospital",
        category: t("articles.category.mentalHealth") || "Mental Health",
      },
      {
        slug: "exam-stress-student-anxiety",
        title: t("article.examStress.title") || "Exam Stress and Student Anxiety: Practical Coping Tips",
        excerpt: t("article.examStress.excerpt") || "Exam stress and anxiety affect millions of students worldwide. Learn practical strategies to manage test anxiety, improve focus, and maintain mental well-being during exam periods. Discover evidence-based coping techniques that can help you perform better and feel more confident.",
        date: formatDate(new Date("2026-02-15")),
        dateValue: "2026-02-15",
        author: "Brain And Life Hospital",
        category: t("articles.category.mentalHealth") || "Mental Health",
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
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl mb-6">
              {t("articles.heroTitle")}{" "}
              <span className="bg-linear-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
                {t("articles.heroTitleHighlight")}
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto">
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
                    className="group block rounded-2xl border border-white/30 dark:border-gray-700/30 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-8 shadow-xl shadow-gray-200/30 dark:shadow-gray-900/30 hover:-translate-y-1 hover:border-white/50 dark:hover:border-gray-600/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                        {article.category}
                      </span>
                      <time className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                        {article.date}
                      </time>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {t("articles.by")} {article.author}
                      </span>
                      <span className="text-sm font-medium text-sky-600 dark:text-sky-400 group-hover:text-sky-700 dark:group-hover:text-sky-300 flex items-center gap-1">
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
                <p className="text-gray-600 dark:text-gray-300">{t("articles.moreComingSoon")}</p>
              </div>
            )}
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
