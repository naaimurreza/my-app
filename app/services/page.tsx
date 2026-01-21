"use client";

import React from 'react'
import { useLanguage } from '../_contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const services = [
    {
      title: t("services.service1.title") || "Mental Health Treatment",
      description: t("services.service1.description") || "Comprehensive care for conditions including schizophrenia, depression, anxiety, bipolar disorder, and other mental health challenges.",
      icon: "🧠",
      features: [
        t("services.service1.feature1") || "Individual Therapy",
        t("services.service1.feature2") || "Group Counseling",
        t("services.service1.feature3") || "Medication Management",
        t("services.service1.feature4") || "Crisis Intervention"
      ]
    },
    {
      title: t("services.service2.title") || "Drug Addiction Rehabilitation",
      description: t("services.service2.description") || "Specialized treatment programs for substance addictions including yaba, marijuana, phensedyl, heroin, and other dependencies.",
      icon: "💊",
      features: [
        t("services.service2.feature1") || "Detoxification",
        t("services.service2.feature2") || "Rehabilitation Programs",
        t("services.service2.feature3") || "Relapse Prevention",
        t("services.service2.feature4") || "Aftercare Support"
      ]
    },
    {
      title: t("services.service3.title") || "24/7 Emergency Care",
      description: t("services.service3.description") || "Round-the-clock emergency psychiatric services for crisis situations, suicidal thoughts, and acute mental health episodes.",
      icon: "🚨",
      features: [
        t("services.service3.feature1") || "Crisis Hotline",
        t("services.service3.feature2") || "Emergency Admissions",
        t("services.service3.feature3") || "Immediate Assessment",
        t("services.service3.feature4") || "Rapid Response"
      ]
    },
    {
      title: t("services.service4.title") || "Psychiatric Consultation",
      description: t("services.service4.description") || "Expert evaluation and diagnosis by nationally and internationally renowned psychiatric doctors.",
      icon: "👨‍⚕️",
      features: [
        t("services.service4.feature1") || "Initial Assessment",
        t("services.service4.feature2") || "Diagnostic Evaluation",
        t("services.service4.feature3") || "Treatment Planning",
        t("services.service4.feature4") || "Follow-up Care"
      ]
    },
    {
      title: t("services.service5.title") || "Psychological Therapy",
      description: t("services.service5.description") || "Evidence-based therapeutic interventions delivered by skilled psychologists and mental health professionals.",
      icon: "💭",
      features: [
        t("services.service5.feature1") || "Cognitive Behavioral Therapy",
        t("services.service5.feature2") || "Psychotherapy",
        t("services.service5.feature3") || "Family Therapy",
        t("services.service5.feature4") || "Support Groups"
      ]
    },
    {
      title: t("services.service6.title") || "Rehabilitation Support",
      description: t("services.service6.description") || "Comprehensive rehabilitation services to help individuals rebuild their lives and achieve long-term recovery.",
      icon: "🔄",
      features: [
        t("services.service6.feature1") || "Life Skills Training",
        t("services.service6.feature2") || "Vocational Support",
        t("services.service6.feature3") || "Social Integration",
        t("services.service6.feature4") || "Ongoing Monitoring"
      ]
    }
  ]

  const conditions = [
    t("services.condition1") || "Schizophrenia",
    t("services.condition2") || "Suicidal Thoughts & Ideation",
    t("services.condition3") || "Hallucinations & Delusions",
    t("services.condition4") || "Depression & Anxiety Disorders",
    t("services.condition5") || "Bipolar Disorder",
    t("services.condition6") || "Substance Use Disorders"
  ]

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-sky-50 via-white to-emerald-50">
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-200/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.05),transparent_55%)]" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-28 lg:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            {/* Text content */}
            <div>
              <p className="mb-4 inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-sky-700 ring-1 ring-sky-200">
                {t("services.badge")}
              </p>
              <h1 className="mb-6 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl text-gray-900">
                {t("services.title")}{" "}
                <span className="bg-linear-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
                  {t("services.titleHighlight")}
                </span>
              </h1>
              <p className="text-base md:text-lg text-gray-700">
                {t("services.description")}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                >
                  {t("services.bookConsultation")}
                </a>
                <div className="flex items-center gap-4 text-sm text-blue-100/80">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-lg">
                    🕐
                  </div>
                  <div className="space-y-0.5">
                    <p className="font-medium text-gray-900">{t("services.emergencySupport")}</p>
                    <p className="text-xs text-gray-600">
                      {t("services.emergencySupportDesc")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 max-w-md text-sm text-gray-700">
                <div className="border-l border-gray-300 pl-4">
                  <p className="text-2xl font-semibold text-gray-900">24/7</p>
                  <p className="text-xs uppercase tracking-wide text-gray-600">{t("services.emergencyCare")}</p>
                </div>
                <div className="border-l border-gray-300 pl-4">
                  <p className="text-2xl font-semibold text-gray-900">360°</p>
                  <p className="text-xs uppercase tracking-wide text-gray-600">{t("services.holisticSupport")}</p>
                </div>
                <div className="border-l border-gray-300 pl-4">
                  <p className="text-2xl font-semibold text-gray-900">{t("services.safe") || "Safe"}</p>
                  <p className="text-xs uppercase tracking-wide text-gray-600">{t("services.safeEnvironment")}</p>
                </div>
              </div>
            </div>

            {/* Image collage */}
            <div className="relative">
              <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-sky-400/30 blur-3xl" />
              <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-emerald-400/25 blur-3xl" />

              <div className="relative grid grid-cols-2 gap-4 lg:gap-5">
                <div className="space-y-4 lg:space-y-5">
                  <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/50">
                    <img
                      src="/assets/service.jpg"
                      alt="Calm, therapeutic mental health environment"
                      className="h-52 w-full object-cover sm:h-64 lg:h-72"
                    />
                  </div>
                  <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-200/50">
                    <img
                      src="/assets/service5.jpg"
                      alt="One-on-one psychiatric consultation"
                      className="h-32 w-full object-cover sm:h-40 lg:h-44"
                    />
                  </div>
                </div>
                <div className="mt-8 space-y-4 lg:space-y-5">
                  <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-200/50">
                    <img
                      src="/assets/service6.jpg"
                      alt="Supportive group therapy session"
                      className="h-40 w-full object-cover sm:h-52 lg:h-60"
                    />
                  </div>
                  <div className="overflow-hidden rounded-3xl border border-emerald-300 bg-emerald-50 shadow-[0_0_45px_rgba(16,185,129,0.15)]">
                    <img
                      src="/assets/service4.jpg"
                      alt="Medical team monitoring patient wellbeing"
                      className="h-32 w-full object-cover sm:h-40 lg:h-44"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 translate-y-1/2 items-center gap-3 rounded-2xl bg-white px-4 py-3 text-xs text-gray-700 ring-1 ring-gray-200 shadow-lg">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  ✓
                </span>
                <div className="space-y-0.5">
                  <p className="font-medium text-gray-900">{t("services.confidentialCare")}</p>
                  <p className="text-[11px] text-gray-600">{t("services.confidentialDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative overflow-hidden bg-gray-50 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.08),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.06),transparent_55%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="mb-3 inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 ring-1 ring-sky-200">
              {t("services.programs")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("services.our") || "Our"} <span className="bg-linear-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">{t("services.specializedServices")}</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {t("services.specializedDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 bg-white p-6 lg:p-8 shadow-lg shadow-gray-200/50 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4 text-5xl drop-shadow">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="mr-2 text-emerald-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.05),transparent_60%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="mb-3 inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 ring-1 ring-sky-200">
                {t("services.expertise")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t("services.conditionsWeTreat")} <span className="bg-linear-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">{t("services.conditionsHighlight")}</span>
              </h2>
              <p className="text-lg text-gray-700">
                {t("services.conditionsDesc")}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 lg:p-10 shadow-xl shadow-gray-200/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {conditions.map((condition, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 rounded-lg bg-white ring-1 ring-gray-200 hover:ring-sky-300 transition-colors"
                  >
                    <div className="mr-3 h-2 w-2 rounded-full bg-sky-500"></div>
                    <span className="text-gray-900 font-medium">{condition}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Services Highlight */}
      <section className="relative overflow-hidden bg-gray-50 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_60%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-r from-sky-100 via-blue-50 to-emerald-100 rounded-2xl shadow-2xl shadow-gray-200/50 p-8 lg:p-12 text-gray-900 ring-1 ring-gray-200">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-6xl mb-6">🕐</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("services.emergencyServices")}
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {t("services.emergencyDesc")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="rounded-xl bg-white p-6 ring-1 ring-gray-200 shadow-sm">
                  <div className="text-2xl font-bold mb-2 text-gray-900">24/7</div>
                  <div className="text-gray-700">{t("services.crisisHotline")}</div>
                </div>
                <div className="rounded-xl bg-white p-6 ring-1 ring-gray-200 shadow-sm">
                  <div className="text-2xl font-bold mb-2 text-gray-900">{t("services.immediate") || "Immediate"}</div>
                  <div className="text-gray-700">{t("services.immediateResponse")}</div>
                </div>
                <div className="rounded-xl bg-white p-6 ring-1 ring-gray-200 shadow-sm">
                  <div className="text-2xl font-bold mb-2 text-gray-900">{t("services.expert") || "Expert"}</div>
                  <div className="text-gray-700">{t("services.expertTeam")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_55%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="mb-3 inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 ring-1 ring-emerald-200">
                {t("services.team")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t("services.our") || "Our"} <span className="bg-linear-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">{t("services.expertTeam")}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                t("services.team1") || "Nationally & Internationally Renowned Psychiatric Doctors",
                t("services.team2") || "Skilled Psychologists",
                t("services.team3") || "Full-time Physicians",
                t("services.team4") || "Experienced Nurses & Trained Health Workers"
              ].map((role, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-lg shadow-gray-200/50 hover:-translate-y-0.5 transition"
                >
                  <div className="text-3xl mb-3">👨‍⚕️</div>
                  <p className="text-gray-900 font-medium text-sm">{role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative overflow-hidden bg-gray-50 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_55%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-br from-sky-50 via-blue-50 to-emerald-50 rounded-2xl border border-gray-200 p-8 lg:p-12 text-center shadow-2xl shadow-gray-200/50">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-3 text-base font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-white"
              >
                {t("cta.contact")}
              </a>
              <a
                href="tel:+8801234567890"
                className="inline-flex items-center justify-center rounded-full bg-white border border-sky-300 px-8 py-3 text-base font-medium text-sky-600 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-white"
              >
                {t("cta.call")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
