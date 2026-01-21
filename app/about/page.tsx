"use client";

import React from "react";
import { useLanguage } from '../_contexts/LanguageContext';

export default function Page() {
  const { t } = useLanguage();
  const values = [
    {
      title: t("about.compassionFirst") || "Compassion first",
      description: t("about.compassionDesc") || "We meet every person with dignity, empathy, and respect—because healing starts with feeling safe.",
    },
    {
      title: t("about.evidenceCare") || "Evidence-based care",
      description: t("about.evidenceDesc") || "Our plans are guided by modern clinical practice and adjusted through ongoing assessment and outcomes.",
    },
    {
      title: t("about.wholePerson") || "Whole-person approach",
      description: t("about.wholePersonDesc") || "We support mind, body, family, and daily life—helping patients build stability beyond symptoms.",
    },
  ]

  const stats = [
    { label: "24/7", value: t("about.emergencySupport") || "Emergency support" },
    { label: t("about.multidisciplinary") || "Multi‑disciplinary", value: t("about.careTeams") || "Care teams" },
    { label: t("about.confidential") || "Confidential", value: t("about.patientPrivacy") || "Patient-first privacy" },
    { label: t("about.personalized") || "Personalized", value: t("about.treatmentPlans") || "Treatment plans" },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-white pt-20">
      {/* Background accents similar to contact page */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.12),transparent_60%)]" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div>
              <p className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-700 ring-1 ring-sky-200">
                {t("about.badge")}
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-[2.7rem]">
                {t("about.title")}{" "}
                <span className="bg-linear-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
                  {t("about.titleHighlight")}
                </span>
              </h1>
              <p className="mt-4 max-w-2xl text-sm md:text-base text-gray-700 leading-relaxed">
                {t("about.description")}
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs md:text-sm text-gray-700">
                <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 ring-1 ring-sky-300">
                  <span className="text-base">🕐</span>
                  <span className="font-medium">{t("about.supportReady")}</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 ring-1 ring-emerald-300">
                  <span className="text-base">🔐</span>
                  <span className="font-medium">{t("about.confidentialCare")}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-white"
                >
                  {t("about.contactTeam")}
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full bg-gray-100 px-7 py-3 text-sm font-medium text-gray-700 ring-1 ring-gray-300 transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-white"
                >
                  {t("about.viewServices")}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-sky-200/30 blur-3xl" />
              <div className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-emerald-200/25 blur-3xl" />
              <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.1)]">
                <img
                  src="/assets/about.png"
                  alt="Brain and Life Hospital team and facility"
                  className="h-56 w-full object-cover sm:h-64 lg:h-72"
                />
              </div>
              <div className="absolute -bottom-4 left-6 right-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-xs text-gray-700 ring-1 ring-gray-200 shadow-lg">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  ✓
                </span>
                <div className="space-y-0.5">
                  <p className="font-medium text-gray-900">{t("about.traumaCare")}</p>
                  <p className="text-[11px] text-gray-600">{t("about.traumaDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + values */}
      <section className="relative overflow-hidden bg-gray-50 py-14 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.08),transparent_60%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                {t("about.mission")}
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                {t("about.missionDesc")}
              </p>

              <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-200/50">
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  {t("about.expect")}
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-emerald-600">✓</span> {t("about.clearAssessment")}
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600">✓</span> {t("about.stigmaFree")}
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600">✓</span> {t("about.followups")}
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-200/50 hover:-translate-y-0.5 hover:border-sky-300 transition"
                >
                  <p className="text-sm font-semibold text-sky-600 mb-2">{v.title}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-white border-y border-gray-200">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_60%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div
                key={s.value}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-xl shadow-gray-200/50"
              >
                <p className="text-xl md:text-2xl font-semibold text-gray-900">{s.label}</p>
                <p className="mt-1 text-sm text-gray-700">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gray-50 py-14 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_55%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-linear-to-br from-sky-50 via-blue-50 to-emerald-50 p-8 md:p-10 text-gray-900 shadow-2xl shadow-gray-200/50 ring-1 ring-gray-200">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Ready to talk to someone?
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                If you’re seeking support for yourself or a loved one, our team can guide you to the right care pathway.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  Book an appointment
                </a>
                <a
                  href="tel:+8801234567890"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-gray-700 ring-1 ring-gray-300 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-white"
                >
                  Call 24/7 helpline
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}