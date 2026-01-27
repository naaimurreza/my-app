"use client";

import { useLanguage } from "../_contexts/LanguageContext";

export default function EasyStepsSection() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2785/2785482.png",
      title: t("steps.step1.title"),
      description: t("steps.step1.desc"),
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/10691/10691802.png",
      title: t("steps.step2.title"),
      description: t("steps.step2.desc"),
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/16090/16090543.png",
      title: t("steps.step3.title"),
      description: t("steps.step3.desc"),
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/9084/9084544.png",
      title: t("steps.step4.title"),
      description: t("steps.step4.desc"),
    },
  ];

  return (
    <section className="relative overflow-hidden py-12 lg:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_55%)]" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="mb-3 inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 ring-1 ring-emerald-200">
            {t("steps.badge")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("steps.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-200 bg-white p-6 lg:p-8 shadow-lg shadow-gray-200/50 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-xl bg-sky-100 border border-sky-200 group-hover:bg-sky-200 transition-colors">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              </div>
              <div className="text-3xl font-bold text-sky-200 mb-3 group-hover:text-sky-400 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
