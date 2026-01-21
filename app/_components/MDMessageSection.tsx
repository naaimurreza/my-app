"use client";

import Image from "next/image";
import { useLanguage } from "../_contexts/LanguageContext";

export default function MDMessageSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gray-50 py-12 lg:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.05),transparent_60%)]" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 ring-1 ring-sky-200">
              {t("md.badge")}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              {t("md.title")}
            </h2>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8 shadow-lg shadow-gray-200/50">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <svg
                    className="w-8 h-8 text-sky-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l1.017 2.193c-2.481.967-4.563 3.009-4.563 6.115v7.391h-5.436zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l1.017 2.193c-2.481.967-4.563 3.009-4.563 6.115v7.391h-5.454z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed italic">
                    "{t("md.quote")}"
                  </p>
                  <p className="mt-6 text-sm font-semibold text-gray-900">
                    {t("md.author")}
                  </p>
                </div>
              </div>
            </div>
            <a
              href="/MD"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              {t("md.readMore")}
            </a>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-full bg-linear-to-r from-blue-200/30 to-indigo-200/30 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative">
                <Image
                  src="/assets/md3.png"
                  alt="Managing Director"
                  width={500}
                  height={500}
                  className="relative w-full max-w-md h-auto rounded-full border-4 border-gray-200"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
