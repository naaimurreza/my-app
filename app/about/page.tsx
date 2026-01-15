import React from "react";
import { Metadata } from "next";

export const metadate: Metadata = {
  title: 'Brain And Life Hospital - Home',
  description: 'Welcome to Brain And Life Hospital, your trusted destination for comprehensive mental health care. Our dedicated team of professionals is committed to providing compassionate, evidence-based treatment in a safe and supportive environment. Discover a path to healing and resilience with us.',
  keywords: ['Mental Hospital, Mental Health', 'Psychiatric Care', 'Therapy', 'Counseling', 'Brain And Life Hospital', 'Mental Wellness', 'Behavioral Health', 'Psychologists', 'Psychiatrists', 'Supportive Care'],
  openGraph: {
    title: 'Brain And Life Hospital - Home',
    description: 'Welcome to Brain And Life Hospital, your trusted destination for comprehensive mental health care. Our dedicated team of professionals is committed to providing compassionate, evidence-based treatment in a safe and supportive environment. Discover a path to healing and resilience with us.',
    images: [
      {
        url: '/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Brain And Life Hospital',
      },
    ],
  },
  facebook: {
    appId: '1234567890',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      nosnippet: false,
    }
  }
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
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              About us
            </p>
            <h1 className="mt-3 text-3xl md:text-5xl font-semibold text-slate-900">
              Compassionate care for mental wellness
            </h1>
            <p className="mt-5 text-sm md:text-base text-slate-600 leading-relaxed">
              At Brain And Life Hospital, we provide respectful, evidence‑based mental health
              care in a calm, supportive environment. Our goal is to restore hope, strengthen
              resilience, and help people return to meaningful daily life.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Contact our team
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                View services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + values */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
              Our mission
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              To deliver safe, ethical, and effective psychiatric care—through a blend of
              clinical expertise, therapeutic support, and human connection.
            </p>

            <div className="mt-8 rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
              <p className="text-sm font-semibold text-slate-900 mb-2">
                What patients can expect
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span> Clear assessment & care plan
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span> Supportive, stigma‑free environment
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span> Follow‑ups and continuity of care
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <p className="text-sm font-semibold text-blue-600 mb-2">{v.title}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div
                key={s.value}
                className="rounded-2xl bg-slate-50 border border-slate-100 p-6 text-center"
              >
                <p className="text-xl md:text-2xl font-semibold text-slate-900">{s.label}</p>
                <p className="mt-1 text-sm text-slate-600">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 md:p-10 text-white shadow-xl">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Ready to talk to someone?
            </h2>
            <p className="mt-3 text-blue-100 leading-relaxed">
              If you’re seeking support for yourself or a loved one, our team can guide you to
              the right care pathway.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700"
              >
                Book an appointment
              </a>
              <a
                href="tel:+8801234567890"
                className="inline-flex items-center justify-center rounded-full bg-blue-500/20 px-7 py-3 text-sm font-medium text-white ring-1 ring-white/30 transition hover:bg-blue-500/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700"
              >
                Call 24/7 helpline
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}