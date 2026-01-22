"use client";

import Image from "next/image";
import { useLanguage } from "../_contexts/LanguageContext";

export default function Page() {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-4 max-w-md mx-auto">
                <Image
                  src="/assets/md2.png"
                  alt={t("mdPage.heroBadge")}
                  width={400}
                  height={533}
                  className="w-full h-auto object-cover rounded-xl"
                  priority
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-4">
                {t("mdPage.heroBadge")}
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight mb-6">
                {t("mdPage.heroTitle")}
              </h1>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                {t("mdPage.heroDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-slate max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                {t("mdPage.section1Title")}
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  {t("mdPage.section1Para1")}
                </p>
                <p>
                  {t("mdPage.section1Para2")}
                </p>
              </div>
            </div>

            {/* Treatment Approach */}
            <div className="mb-12 rounded-2xl bg-white border border-slate-200 shadow-sm p-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                {t("mdPage.section2Title")}
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  {t("mdPage.section2Para1")}
                </p>
                <p>
                  {t("mdPage.section2Para2")}
                </p>
              </div>
            </div>

            {/* Hospital Stay & Recovery */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                {t("mdPage.section3Title")}
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  {t("mdPage.section3Para1")}
                </p>
                <p>
                  {t("mdPage.section3Para2")}
                </p>
              </div>
            </div>

            {/* Recovery & Support */}
            <div className="rounded-2xl bg-linear-to-br from-blue-50 to-slate-50 border border-blue-100 p-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                {t("mdPage.section4Title")}
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  {t("mdPage.section4Para1")}
                </p>
                <p className="font-medium text-slate-900">
                  {t("mdPage.section4Para2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
              {t("mdPage.ctaTitle")}
            </h2>
            <p className="text-slate-600 mb-8">
              {t("mdPage.ctaDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {t("mdPage.contactUs")}
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {t("mdPage.viewServices")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

