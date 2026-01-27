"use client";

import React from "react";
import { useLanguage } from '../_contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const treatmentModalities = [
    {
      title: "Individual Therapy",
      description: "One-on-one sessions with licensed therapists tailored to your specific needs and goals.",
      icon: "👤",
      benefits: [
        "Personalized treatment plans",
        "Confidential environment",
        "Flexible scheduling",
        "Focused attention"
      ],
      duration: "45-60 minutes per session"
    },
    {
      title: "Group Therapy",
      description: "Therapeutic sessions in a supportive group setting to share experiences and learn from others.",
      icon: "👥",
      benefits: [
        "Peer support and connection",
        "Shared experiences",
        "Social skills development",
        "Reduced isolation"
      ],
      duration: "60-90 minutes per session"
    },
    {
      title: "Family Therapy",
      description: "Involves family members in the treatment process to improve communication and relationships.",
      icon: "👨‍👩‍👧‍👦",
      benefits: [
        "Improved family dynamics",
        "Better communication",
        "Understanding and support",
        "Healing together"
      ],
      duration: "60-90 minutes per session"
    },
    {
      title: "Medication Management",
      description: "Careful monitoring and adjustment of psychiatric medications by expert psychiatrists.",
      icon: "💊",
      benefits: [
        "Expert medical supervision",
        "Regular monitoring",
        "Dosage optimization",
        "Side effect management"
      ],
      duration: "Ongoing with regular check-ins"
    },
    {
      title: "Cognitive Behavioral Therapy (CBT)",
      description: "Evidence-based therapy focusing on changing negative thought patterns and behaviors.",
      icon: "🧠",
      benefits: [
        "Proven effectiveness",
        "Practical coping skills",
        "Long-term results",
        "Self-empowerment"
      ],
      duration: "12-20 sessions typically"
    },
    {
      title: "Rehabilitation Programs",
      description: "Comprehensive programs for substance use disorders and mental health recovery.",
      icon: "🔄",
      benefits: [
        "Structured recovery plan",
        "Life skills training",
        "Relapse prevention",
        "Aftercare support"
      ],
      duration: "30-90 days intensive program"
    }
  ];

  const treatmentProcess = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "Comprehensive evaluation including medical history, psychological assessment, and needs analysis."
    },
    {
      step: "02",
      title: "Treatment Planning",
      description: "Customized treatment plan developed by our multidisciplinary team based on your unique situation."
    },
    {
      step: "03",
      title: "Treatment Implementation",
      description: "Begin your personalized treatment program with regular sessions and continuous monitoring."
    },
    {
      step: "04",
      title: "Progress Monitoring",
      description: "Regular assessments to track progress and adjust treatment as needed for optimal outcomes."
    },
    {
      step: "05",
      title: "Aftercare & Support",
      description: "Ongoing support and resources to maintain progress and prevent relapse after treatment completion."
    }
  ];

  const evidenceBasedApproaches = [
    "Cognitive Behavioral Therapy (CBT)",
    "Dialectical Behavior Therapy (DBT)",
    "Interpersonal Therapy (IPT)",
    "Psychodynamic Therapy",
    "Mindfulness-Based Interventions",
    "Motivational Interviewing",
    "Trauma-Informed Care",
    "Solution-Focused Brief Therapy"
  ];

  return (
    <main className="relative min-h-screen overflow-hidden pt-20">
      {/* Background accents to mirror contact page */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.1),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.06),transparent_60%)]" />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="max-w-3xl">
              <p className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-700 ring-1 ring-sky-200">
                {t("treatment.badge")}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl lg:text-[2.9rem]">
                {t("treatment.title")}{" "}
                <span className="bg-linear-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
                  {t("treatment.titleHighlight")}
                </span>
              </h1>
              <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
                {t("treatment.description")}
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs md:text-sm text-gray-700">
                <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 ring-1 ring-sky-300">
                  <span className="text-base">🕐</span>
                  <span className="font-medium">{t("treatment.multidisciplinary")}</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 ring-1 ring-emerald-300">
                  <span className="text-base">🔐</span>
                  <span className="font-medium">{t("treatment.traumaCare")}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-sky-200/30 blur-3xl" />
              <div className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-emerald-200/25 blur-3xl" />
              <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.1)]">
                <img
                  src="/assets/treatment.jpg"
                  alt="Personalized treatment at Brain and Life Hospital"
                  className="h-56 w-full object-cover sm:h-64 lg:h-72"
                />
              </div>
              <div className="absolute -bottom-4 left-6 right-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-xs text-gray-700 ring-1 ring-gray-200 shadow-lg">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  ✓
                </span>
                <div className="space-y-0.5">
                  <p className="font-medium text-gray-900">{t("treatment.traumaCare")}</p>
                  <p className="text-[11px] text-gray-600">{t("treatment.traumaDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Modalities */}
      <section className="relative overflow-hidden bg-gray-50 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.05),transparent_60%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="mb-3 inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 ring-1 ring-sky-200">
              {t("treatment.programs")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("treatment.modalities")} <span className="bg-linear-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">{t("treatment.modalitiesHighlight")}</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {t("treatment.modalitiesDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {treatmentModalities.map((treatment, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 bg-white p-6 lg:p-8 shadow-lg shadow-gray-200/50 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{treatment.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
                  {treatment.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {treatment.description}
                </p>
                <div className="mb-4">
                  <p className="text-xs font-medium text-sky-600 mb-3">KEY BENEFITS:</p>
                  <ul className="space-y-2">
                    {treatment.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <span className="text-emerald-600 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-600">
                    <span className="font-medium text-gray-900">Duration:</span> {treatment.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_60%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="mb-3 inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 ring-1 ring-emerald-200">
              {t("treatment.journey")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("treatment.treatmentJourney")} <span className="bg-linear-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">{t("treatment.journeyHighlight")}</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {t("treatment.journeyDesc")}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {treatmentProcess.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-6 rounded-xl border border-gray-200 bg-white p-6 lg:p-8 shadow-lg shadow-gray-200/50"
                >
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-sky-500 to-emerald-400 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-sky-500/30">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Evidence-Based Approaches */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.05),transparent_60%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="mb-3 inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 ring-1 ring-sky-200">
                {t("treatment.evidence")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t("treatment.evidenceApproaches")} <span className="bg-linear-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">{t("treatment.evidenceHighlight")}</span>
              </h2>
              <p className="text-lg text-gray-700">
                {t("treatment.evidenceDesc")}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8 lg:p-10 shadow-xl shadow-gray-200/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {evidenceBasedApproaches.map((approach, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 rounded-lg bg-gray-50 ring-1 ring-gray-200 hover:ring-sky-300 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-sky-500 mr-3 shrink-0"></div>
                    <span className="text-gray-900 font-medium">{approach}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Programs */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_55%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="mb-3 inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 ring-1 ring-emerald-200">
              {t("treatment.specializedPrograms")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("treatment.specializedPrograms")} <span className="bg-linear-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">{t("treatment.programsHighlight")}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg shadow-gray-200/50 hover:-translate-y-0.5 transition">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("treatment.inpatient")}
              </h3>
              <p className="text-gray-700 mb-4">
                {t("treatment.inpatientDesc")}
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  {t("treatment.roundClock")}
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  {t("treatment.structured")}
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  {t("treatment.safeEnvironment")}
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg shadow-gray-200/50 hover:-translate-y-0.5 transition">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("treatment.outpatient")}
              </h3>
              <p className="text-gray-700 mb-4">
                {t("treatment.outpatientDesc")}
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  {t("treatment.flexible")}
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  {t("treatment.maintainRoutines")}
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  {t("treatment.familySupport")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_55%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-br from-sky-50 via-blue-50 to-emerald-50 rounded-2xl shadow-2xl shadow-gray-200/50 p-8 lg:p-12 text-gray-900 text-center ring-1 ring-gray-200">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("treatment.beginJourney")}
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {t("treatment.beginDesc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-3 text-base font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-white"
                >
                  {t("treatment.scheduleConsultation")}
                </a>
                <a
                  href="tel:+88058150414"
                  className="inline-flex items-center justify-center rounded-full bg-white border border-sky-300 px-8 py-3 text-base font-medium text-sky-600 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-white"
                >
                  {t("treatment.callNow")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
