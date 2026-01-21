import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Brain And Life Hospital - a leading mental health and addiction treatment center in Bangladesh. Our mission, values, and commitment to compassionate, evidence-based care for mental wellness.',
  keywords: [
    'about mental health hospital',
    'mental health mission',
    'psychiatric care values',
    'mental health team Bangladesh',
    'hospital history',
    'mental wellness commitment',
  ],
  openGraph: {
    title: 'About Us - Brain And Life Hospital',
    description: 'Learn about our mission to provide compassionate, evidence-based mental health care in Bangladesh.',
    url: 'https://brainandlifehospital.com/about',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About Brain And Life Hospital',
      },
    ],
  },
  alternates: {
    canonical: 'https://brainandlifehospital.com/about',
  },
}

export default function Page() {
  const values = [
    {
      title: "Compassion first",
      description:
        "We meet every person with dignity, empathy, and respect—because healing starts with feeling safe.",
    },
    {
      title: "Evidence-based care",
      description:
        "Our plans are guided by modern clinical practice and adjusted through ongoing assessment and outcomes.",
    },
    {
      title: "Whole-person approach",
      description:
        "We support mind, body, family, and daily life—helping patients build stability beyond symptoms.",
    },
  ]

  const stats = [
    { label: "24/7", value: "Emergency support" },
    { label: "Multi‑disciplinary", value: "Care teams" },
    { label: "Confidential", value: "Patient-first privacy" },
    { label: "Personalized", value: "Treatment plans" },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 pt-20">
      {/* Background accents similar to contact page */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.12),transparent_60%)]" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div>
              <p className="inline-flex items-center rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-300 ring-1 ring-sky-500/40">
                About us
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl lg:text-[2.7rem]">
                Compassionate care for{" "}
                <span className="bg-linear-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
                  mental wellness
                </span>
              </h1>
              <p className="mt-4 max-w-2xl text-sm md:text-base text-slate-200/80 leading-relaxed">
                At Brain And Life Hospital, we provide respectful, evidence‑based mental health care
                in a calm, supportive environment. Our goal is to restore hope, strengthen resilience,
                and help people return to meaningful daily life.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs md:text-sm text-slate-200/80">
                <div className="flex items-center gap-2 rounded-full bg-slate-900/60 px-3 py-1.5 ring-1 ring-sky-500/30">
                  <span className="text-base">🕐</span>
                  <span className="font-medium">24/7 support ready</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-slate-900/60 px-3 py-1.5 ring-1 ring-emerald-400/30">
                  <span className="text-base">🔐</span>
                  <span className="font-medium">Confidential, patient-first care</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  Contact our team
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full bg-white/10 px-7 py-3 text-sm font-medium text-slate-100 ring-1 ring-white/20 transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  View services
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-sky-400/30 blur-3xl" />
              <div className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-emerald-400/25 blur-3xl" />
              <div className="overflow-hidden rounded-3xl border border-sky-100/20 bg-slate-900/60 shadow-[0_24px_80px_rgba(15,23,42,0.9)] backdrop-blur">
                <img
                  src="/assets/about.png"
                  alt="Brain and Life Hospital team and facility"
                  className="h-56 w-full object-cover sm:h-64 lg:h-72"
                />
              </div>
              <div className="absolute -bottom-4 left-6 right-6 flex items-center gap-3 rounded-2xl bg-slate-900/80 px-4 py-3 text-xs text-slate-100 ring-1 ring-white/10 backdrop-blur">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                  ✓
                </span>
                <div className="space-y-0.5">
                  <p className="font-medium">Trauma‑informed, respectful care</p>
                  <p className="text-[11px] text-slate-300/80">Every story is heard with dignity and empathy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + values */}
      <section className="relative overflow-hidden bg-slate-950 py-14 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Our mission
              </h2>
              <p className="mt-4 text-slate-200/85 leading-relaxed">
                To deliver safe, ethical, and effective psychiatric care—through a blend of
                clinical expertise, therapeutic support, and human connection.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/40 backdrop-blur">
                <p className="text-sm font-semibold text-white mb-2">
                  What patients can expect
                </p>
                <ul className="space-y-2 text-sm text-slate-200/90">
                  <li className="flex gap-2">
                    <span className="text-emerald-300">✓</span> Clear assessment & care plan
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-300">✓</span> Supportive, stigma‑free environment
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-300">✓</span> Follow‑ups and continuity of care
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/40 backdrop-blur hover:-translate-y-0.5 transition"
                >
                  <p className="text-sm font-semibold text-sky-200 mb-2">{v.title}</p>
                  <p className="text-sm text-slate-100/90 leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-slate-950 border-y border-white/5">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.14),transparent_60%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div
                key={s.value}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-xl shadow-slate-950/40 backdrop-blur"
              >
                <p className="text-xl md:text-2xl font-semibold text-white">{s.label}</p>
                <p className="mt-1 text-sm text-slate-200/85">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-slate-950 py-14 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_55%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 p-8 md:p-10 text-white shadow-2xl shadow-slate-950/50 ring-1 ring-white/10 backdrop-blur">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Ready to talk to someone?
              </h2>
              <p className="mt-3 text-blue-100 leading-relaxed">
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
                  className="inline-flex items-center justify-center rounded-full bg-white/10 px-7 py-3 text-sm font-medium text-slate-100 ring-1 ring-white/30 transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950"
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