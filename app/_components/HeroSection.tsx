"use client";

import Image from "next/image";
import { useLanguage } from "../_contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-sky-50 via-white to-emerald-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-200/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.05),transparent_55%)]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div>
            <p className="mb-4 inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-sky-700 ring-1 ring-sky-200">
              {t("hero.tagline")}
            </p>
            <h1 className="mb-6 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl text-gray-900">
              {t("hero.title")}
            </h1>
            <p className="text-base md:text-lg text-gray-700">
              {t("hero.description")}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="/about"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                {t("hero.learnMore")}
              </a>
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-gray-700 border-2 border-gray-200 shadow-md shadow-gray-200/50 transition-all duration-300 hover:bg-gray-50 hover:border-sky-300 hover:text-sky-600 hover:shadow-lg hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2"
              >
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>{t("hero.contactUs")}</span>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-sm font-medium text-gray-600">{t("hero.followUs")}</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/share/1DWSRRzXA3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 rounded-full bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                    className="transition-colors duration-300"
                  >
                    <path
                      fill="#1877F2"
                      d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                    />
                    <path
                      fill="#fff"
                      d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                    />
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@brainandlifehospital?si=c8_Ppxrgbkt2p_pS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 rounded-full bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                    className="transition-colors duration-300"
                  >
                    <path
                      fill="#FF0000"
                      d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                    />
                    <path fill="#FFF" d="M20 31L20 17 32 24z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@brain.and.life.hos?_r=1&_t=ZS-92z1ZnEbHzp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 rounded-full bg-gray-100 border border-gray-300 hover:border-gray-400 hover:bg-gray-200 transition-all duration-300 hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="text-gray-600"
                  >
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="relative mt-6 lg:mt-0">
            <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-sky-400/30 blur-3xl" />
            <div className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-emerald-400/25 blur-3xl" />
            <div className="overflow-hidden rounded-3xl border border-gray-200">
              <Image
                src="/assets/banner2.jpg"
                alt="Brain and Life Hospital"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            <div className="absolute -bottom-4 left-6 right-6 flex items-center gap-3 rounded-2xl bg-white">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100">
                ✓
              </span>
              <div className="space-y-0.5">
                <p className="font-medium text-gray-900">{t("hero.banner")}</p>
                <p className="text-[11px] text-gray-600">{t("hero.bannerSub")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
