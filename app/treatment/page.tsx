"use client";

import React from "react";
import { useLanguage } from '../_contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const treatmentModalities = [
    {
      title: t("treatment.modality.individual.title"),
      description: t("treatment.modality.individual.description"),
      icon: "👤",
      benefits: [
        t("treatment.modality.individual.benefit1"),
        t("treatment.modality.individual.benefit2"),
        t("treatment.modality.individual.benefit3"),
        t("treatment.modality.individual.benefit4")
      ],
      duration: t("treatment.modality.individual.duration")
    },
    {
      title: t("treatment.modality.group.title"),
      description: t("treatment.modality.group.description"),
      icon: "👥",
      benefits: [
        t("treatment.modality.group.benefit1"),
        t("treatment.modality.group.benefit2"),
        t("treatment.modality.group.benefit3"),
        t("treatment.modality.group.benefit4")
      ],
      duration: t("treatment.modality.group.duration")
    },
    {
      title: t("treatment.modality.family.title"),
      description: t("treatment.modality.family.description"),
      icon: "👨‍👩‍👧‍👦",
      benefits: [
        t("treatment.modality.family.benefit1"),
        t("treatment.modality.family.benefit2"),
        t("treatment.modality.family.benefit3"),
        t("treatment.modality.family.benefit4")
      ],
      duration: t("treatment.modality.family.duration")
    },
    {
      title: t("treatment.modality.medication.title"),
      description: t("treatment.modality.medication.description"),
      icon: "💊",
      benefits: [
        t("treatment.modality.medication.benefit1"),
        t("treatment.modality.medication.benefit2"),
        t("treatment.modality.medication.benefit3"),
        t("treatment.modality.medication.benefit4")
      ],
      duration: t("treatment.modality.medication.duration")
    },
    {
      title: t("treatment.modality.cbt.title"),
      description: t("treatment.modality.cbt.description"),
      icon: "🧠",
      benefits: [
        t("treatment.modality.cbt.benefit1"),
        t("treatment.modality.cbt.benefit2"),
        t("treatment.modality.cbt.benefit3"),
        t("treatment.modality.cbt.benefit4")
      ],
      duration: t("treatment.modality.cbt.duration")
    },
    {
      title: t("treatment.modality.rehab.title"),
      description: t("treatment.modality.rehab.description"),
      icon: "🔄",
      benefits: [
        t("treatment.modality.rehab.benefit1"),
        t("treatment.modality.rehab.benefit2"),
        t("treatment.modality.rehab.benefit3"),
        t("treatment.modality.rehab.benefit4")
      ],
      duration: t("treatment.modality.rehab.duration")
    }
  ];

  const treatmentProcess = [
    {
      step: "01",
      title: t("treatment.process.step1.title"),
      description: t("treatment.process.step1.description")
    },
    {
      step: "02",
      title: t("treatment.process.step2.title"),
      description: t("treatment.process.step2.description")
    },
    {
      step: "03",
      title: t("treatment.process.step3.title"),
      description: t("treatment.process.step3.description")
    },
    {
      step: "04",
      title: t("treatment.process.step4.title"),
      description: t("treatment.process.step4.description")
    },
    {
      step: "05",
      title: t("treatment.process.step5.title"),
      description: t("treatment.process.step5.description")
    }
  ];

  const evidenceBasedApproaches = [
    t("treatment.evidence.cbt"),
    t("treatment.evidence.dbt"),
    t("treatment.evidence.ipt"),
    t("treatment.evidence.psychodynamic"),
    t("treatment.evidence.mindfulness"),
    t("treatment.evidence.motivational"),
    t("treatment.evidence.trauma"),
    t("treatment.evidence.solution")
  ];

  return (
    <main className="relative min-h-screen overflow-hidden pt-20">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="max-w-3xl">
              <p className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-700 ring-1 ring-sky-200">
                {t("treatment.badge")}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-[2.9rem]">
                {t("treatment.title")}{" "}
                <span className="bg-linear-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
                  {t("treatment.titleHighlight")}
                </span>
              </h1>
              <p className="mt-4 text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                {t("treatment.description")}
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs md:text-sm text-gray-700 dark:text-gray-900">
                <div className="flex items-center gap-2 rounded-full bg-gray-100 dark:bg-white px-3 py-1.5 ring-1 ring-sky-300">
                  <span className="text-base">🕐</span>
                  <span className="font-medium">{t("treatment.multidisciplinary")}</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-gray-100 dark:bg-white px-3 py-1.5 ring-1 ring-emerald-300">
                  <span className="text-base">🔐</span>
                  <span className="font-medium">{t("treatment.traumaCare")}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-sky-200/30 blur-3xl" />
              <div className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-emerald-200/25 blur-3xl" />
              <div className="overflow-hidden rounded-3xl border border-white/30 bg-white/20 backdrop-blur-sm shadow-[0_24px_80px_rgba(0,0,0,0.1)]">
                <img
                  src="/assets/treatment.jpg"
                  alt="Personalized treatment at Brain and Life Hospital"
                  className="h-56 w-full object-cover sm:h-64 lg:h-72"
                />
              </div>
              <div className="absolute -bottom-4 left-6 right-6 flex items-center gap-3 rounded-2xl bg-white/40 dark:bg-white/90 backdrop-blur-md px-4 py-3 text-xs text-gray-700 dark:text-gray-900 ring-1 ring-white/30 dark:ring-gray-300/30 shadow-lg">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-200 text-emerald-600 dark:text-emerald-800">
                  ✓
                </span>
                <div className="space-y-0.5">
                  <p className="font-medium text-gray-900 dark:text-gray-900">{t("treatment.traumaCare")}</p>
                  <p className="text-[11px] text-gray-600 dark:text-gray-700">{t("treatment.traumaDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Modalities */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="mb-3 inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 ring-1 ring-sky-200">
              {t("treatment.programs")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("treatment.modalities")} <span className="bg-linear-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">{t("treatment.modalitiesHighlight")}</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
              {t("treatment.modalitiesDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {treatmentModalities.map((treatment, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/30 dark:border-gray-700/30 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-6 lg:p-8 shadow-lg shadow-gray-200/30 dark:shadow-gray-900/30 hover:-translate-y-1 hover:border-white/50 dark:hover:border-gray-600/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{treatment.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {treatment.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {treatment.description}
                </p>
                <div className="mb-4">
                  <p className="text-xs font-medium text-sky-600 dark:text-sky-400 mb-3">{t("treatment.keyBenefits")}</p>
                  <ul className="space-y-2">
                    {treatment.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                        <span className="text-emerald-600 dark:text-emerald-400 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    <span className="font-medium text-gray-900 dark:text-white">{t("treatment.duration")}</span> {treatment.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="mb-3 inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 ring-1 ring-emerald-200">
              {t("treatment.journey")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("treatment.treatmentJourney")} <span className="bg-linear-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">{t("treatment.journeyHighlight")}</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
              {t("treatment.journeyDesc")}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {treatmentProcess.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-6 rounded-xl border border-white/30 dark:border-gray-700/30 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-6 lg:p-8 shadow-lg shadow-gray-200/30 dark:shadow-gray-900/30"
                >
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-sky-500 to-emerald-400 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-sky-500/30">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
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
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="mb-3 inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 ring-1 ring-sky-200">
                {t("treatment.evidence")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t("treatment.evidenceApproaches")} <span className="bg-linear-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">{t("treatment.evidenceHighlight")}</span>
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-200">
                {t("treatment.evidenceDesc")}
              </p>
            </div>

            <div className="rounded-2xl border border-white/30 dark:border-gray-700/30 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-8 lg:p-10 shadow-xl shadow-gray-200/30 dark:shadow-gray-900/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {evidenceBasedApproaches.map((approach, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 rounded-lg bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm ring-1 ring-white/30 dark:ring-gray-600/30 hover:ring-white/50 dark:hover:ring-gray-500/50 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-sky-500 mr-3 shrink-0"></div>
                    <span className="text-gray-900 dark:text-white font-medium">{approach}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Programs */}
      <section className="relative overflow-hidden py-16 lg:py-24">
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
            <div className="rounded-xl border border-white/30 bg-white/30 backdrop-blur-md p-8 shadow-lg shadow-gray-200/30 hover:-translate-y-0.5 transition">
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

            <div className="rounded-xl border border-white/30 bg-white/30 backdrop-blur-md p-8 shadow-lg shadow-gray-200/30 hover:-translate-y-0.5 transition">
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
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl shadow-2xl shadow-gray-200/50 p-8 lg:p-12 text-gray-900 text-center ring-1 ring-gray-200">
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
