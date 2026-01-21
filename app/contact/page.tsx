"use client";

import React from 'react'
import Image from 'next/image';
import { useLanguage } from '../_contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero + content */}
      <section className="relative overflow-hidden">
        {/* Soft background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.1),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(14,165,233,0.06),transparent_60%)]" />

        <div className="relative container mx-auto px-4 py-10 md:py-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
            {/* Text + form side heading */}
            <div>
              <p className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-700 ring-1 ring-sky-200">
                {t("contact.badge")}
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-[2.7rem]">
                {t("contact.title")}{" "}
                <span className="bg-linear-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
                  {t("contact.titleHighlight")}
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-sm md:text-base text-gray-700">
                {t("contact.description")}
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs md:text-sm text-gray-700">
                <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 ring-1 ring-sky-300">
                  <span className="text-base">🕐</span>
                  <span className="font-medium">{t("contact.emergencyHelpline")}</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 ring-1 ring-emerald-300">
                  <span className="text-base">🔐</span>
                  <span className="font-medium">{t("contact.confidential")}</span>
                </div>
              </div>
            </div>

            {/* Banner image */}
            <div className="relative mt-6 lg:mt-0">
              <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-sky-200/30 blur-3xl" />
              <div className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-emerald-200/25 blur-3xl" />
              <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.1)]">
                <Image
                  src="/assets/banner.png"
                  alt="Brain and Life Hospital contact and support"
                  width={800}
                  height={400}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 800px"
                />
              </div>
              <div className="absolute -bottom-4 left-6 right-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-xs text-gray-700 ring-1 ring-gray-200 shadow-lg">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  ✓
                </span>
                <div className="space-y-0.5">
                  <p className="font-medium text-gray-900">{t("contact.kindStaff")}</p>
                  <p className="text-[11px] text-gray-600">
                    {t("contact.kindStaffDesc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative container mx-auto px-4 pb-12 md:pb-16">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
            {/* Contact details / emergency info */}
            <div className="space-y-8 lg:col-span-1">
              <div className="rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  {t("contact.emergencySupport")}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {t("contact.emergencyDesc")}
                </p>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-500">{t("contact.helpline")}</p>
                    <a href="tel:+8801713031449">
                      <p className="hover:underline font-semibold text-gray-900">+880 1713031449</p>
                    </a>
                    <a href="tel:+8801742544000">
                      <p className="hover:underline font-semibold text-gray-900">+880 1742544000</p>
                    </a>

                  </div>
                  <div>
                    <p className="text-gray-500">{t("contact.crisisEmail")}</p>
                    <p className="font-semibold text-gray-900">brainandlifehospital@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-gray-200 p-6 space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  {t("contact.hospitalLocation")}
                </h2>
                <p className="text-sm text-gray-600">
                  Brain And Life Hospital<br />
                  Crescent Plaza, 145/1 Green Road, Dhaka-1205, Bangladesh
                </p>
                <p className="text-sm text-gray-600">
                  {t("contact.visitingHours")} <span className="font-semibold">9:00 AM – 8:00 PM</span><br />
                  {t("contact.opd")} <span className="font-semibold">Sat – Thu</span>
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-gray-200 p-6 md:p-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("contact.sendMessage")}
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  {t("contact.messageDesc")}
                </p>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-gray-900">
                        {t("contact.fullName")}
                      </label>
                      <input
                        type="text"
                        placeholder={t("contact.namePlaceholder")}
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm shadow-sm outline-none text-gray-900 placeholder:text-gray-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-gray-900">
                        {t("contact.phone")}
                      </label>
                      <input
                        type="tel"
                        placeholder={t("contact.phonePlaceholder")}
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm shadow-sm outline-none text-gray-900 placeholder:text-gray-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-gray-900">
                        {t("contact.email")}
                      </label>
                      <input
                        type="email"
                        placeholder={t("contact.emailPlaceholder")}
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm shadow-sm outline-none text-gray-900 placeholder:text-gray-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-gray-900">
                        {t("contact.reason")}
                      </label>
                      <select
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm shadow-sm outline-none text-gray-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          {t("contact.selectOption")}
                        </option>
                        <option>{t("contact.appointment")}</option>
                        <option>{t("contact.inpatient")}</option>
                        <option>{t("contact.emergencyFollowup")}</option>
                        <option>{t("contact.generalEnquiry")}</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-gray-900">
                      {t("contact.howCanWeHelp")}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={t("contact.messagePlaceholder")}
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm shadow-sm outline-none text-gray-900 placeholder:text-gray-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
                    />
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-2">
                    <div className="flex items-start gap-2">
                      <input
                        id="consent"
                        type="checkbox"
                        className="mt-1 h-4 w-4 rounded border-gray-300 bg-white text-sky-500 focus:ring-sky-500"
                      />
                      <label htmlFor="consent" className="text-xs text-gray-600">
                        {t("contact.consent")}
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-medium text-white shadow-sm shadow-sky-500/40 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-white"
                    >
                      {t("contact.submit")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}