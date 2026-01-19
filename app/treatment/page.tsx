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

export default function Home() {
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
    <main className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* Background accents to mirror contact page */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.12),transparent_60%)]" />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="max-w-3xl">
              <p className="inline-flex items-center rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-300 ring-1 ring-sky-500/40">
                Our Treatment Approach
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl lg:text-[2.9rem]">
                Personalized, evidence-based{" "}
                <span className="bg-linear-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
                  mental health treatment
                </span>
              </h1>
              <p className="mt-4 text-base md:text-lg text-slate-200/85 leading-relaxed">
                Comprehensive, individualized plans combining proven therapies with compassionate care
                to help you achieve lasting recovery and wellness.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs md:text-sm text-slate-200/80">
                <div className="flex items-center gap-2 rounded-full bg-slate-900/60 px-3 py-1.5 ring-1 ring-sky-500/30">
                  <span className="text-base">🕐</span>
                  <span className="font-medium">24/7 multidisciplinary team</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-slate-900/60 px-3 py-1.5 ring-1 ring-emerald-400/30">
                  <span className="text-base">🔐</span>
                  <span className="font-medium">Confidential, patient-first care</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-sky-400/30 blur-3xl" />
              <div className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-emerald-400/25 blur-3xl" />
              <div className="overflow-hidden rounded-3xl border border-sky-100/20 bg-slate-900/60 shadow-[0_24px_80px_rgba(15,23,42,0.9)] backdrop-blur">
                <img
                  src="/assets/treatment.jpg"
                  alt="Personalized treatment at Brain and Life Hospital"
                  className="h-56 w-full object-cover sm:h-64 lg:h-72"
                />
              </div>
              <div className="absolute -bottom-4 left-6 right-6 flex items-center gap-3 rounded-2xl bg-slate-900/80 px-4 py-3 text-xs text-slate-100 ring-1 ring-white/10 backdrop-blur">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                  ✓
                </span>
                <div className="space-y-0.5">
                  <p className="font-medium">Trauma‑informed, respectful care</p>
                  <p className="text-[11px] text-slate-300/80">Every plan honors dignity and safety.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Modalities */}
      <section className="relative overflow-hidden bg-slate-950 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="mb-3 inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 ring-1 ring-white/10 backdrop-blur">
              Programs
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Treatment <span className="bg-linear-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">Modalities</span>
            </h2>
            <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
              A comprehensive range of therapeutic approaches tailored to your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {treatmentModalities.map((treatment, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 lg:p-8 shadow-2xl shadow-slate-950/40 backdrop-blur hover:-translate-y-1 hover:border-sky-200/40 hover:shadow-[0_30px_80px_rgba(8,47,73,0.45)] transition-all duration-300"
              >
                <div className="text-5xl mb-4">{treatment.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-sky-200 transition-colors">
                  {treatment.title}
                </h3>
                <p className="text-blue-100/90 mb-4 leading-relaxed">
                  {treatment.description}
                </p>
                <div className="mb-4">
                  <p className="text-xs font-medium text-sky-200 mb-3">KEY BENEFITS:</p>
                  <ul className="space-y-2">
                    {treatment.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm text-blue-100/85">
                        <span className="text-emerald-300 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-slate-200/80">
                    <span className="font-medium text-white">Duration:</span> {treatment.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="relative overflow-hidden bg-slate-950 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.14),transparent_60%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="mb-3 inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 ring-1 ring-white/10 backdrop-blur">
              Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Treatment <span className="bg-linear-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
              A structured, step-by-step approach to recovery and wellness.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {treatmentProcess.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-6 rounded-xl border border-white/10 bg-white/5 p-6 lg:p-8 shadow-xl shadow-slate-950/40 backdrop-blur"
                >
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-sky-500 to-emerald-400 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-sky-500/30">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-200/85 leading-relaxed">
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
      <section className="relative overflow-hidden bg-slate-950 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_60%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="mb-3 inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 ring-1 ring-white/10 backdrop-blur">
                Evidence
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Evidence-Based <span className="bg-linear-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">Approaches</span>
              </h2>
              <p className="text-lg text-blue-100/80">
                Grounded in scientific research and proven therapeutic methods.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 lg:p-10 shadow-2xl shadow-slate-950/40 backdrop-blur">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {evidenceBasedApproaches.map((approach, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 rounded-lg bg-slate-900/70 ring-1 ring-white/10 hover:ring-sky-300/40 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-sky-300 mr-3 shrink-0"></div>
                    <span className="text-slate-100 font-medium">{approach}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Programs */}
      <section className="relative overflow-hidden bg-slate-950 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_55%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="mb-3 inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 ring-1 ring-white/10 backdrop-blur">
              Programs
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Specialized <span className="bg-linear-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">Treatment Programs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/40 backdrop-blur hover:-translate-y-0.5 transition">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Inpatient Treatment
              </h3>
              <p className="text-slate-200/85 mb-4">
                Intensive 24/7 care in a safe, structured environment for individuals requiring constant medical supervision and support.
              </p>
              <ul className="space-y-2 text-sm text-slate-200/85">
                <li className="flex items-start">
                  <span className="text-emerald-300 mr-2">•</span>
                  Round-the-clock medical care
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-300 mr-2">•</span>
                  Structured daily programs
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-300 mr-2">•</span>
                  Safe, supportive environment
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/40 backdrop-blur hover:-translate-y-0.5 transition">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Outpatient Treatment
              </h3>
              <p className="text-slate-200/85 mb-4">
                Flexible treatment options that allow you to continue daily life while receiving comprehensive care and support.
              </p>
              <ul className="space-y-2 text-sm text-slate-200/85">
                <li className="flex items-start">
                  <span className="text-emerald-300 mr-2">•</span>
                  Flexible scheduling
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-300 mr-2">•</span>
                  Maintain daily routines
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-300 mr-2">•</span>
                  Family and work support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative overflow-hidden bg-slate-950 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_55%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 rounded-2xl shadow-2xl shadow-slate-950/50 p-8 lg:p-12 text-white text-center ring-1 ring-white/10 backdrop-blur">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Begin Your Journey to Recovery
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Take the first step toward better mental health. Our compassionate team is ready to create a personalized treatment plan tailored to your unique needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-3 text-base font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  Schedule Consultation
                </a>
                <a
                  href="tel:+88058150414"
                  className="inline-flex items-center justify-center rounded-full bg-white/10 border border-sky-200/60 px-8 py-3 text-base font-medium text-sky-100 shadow-sm transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  Call Now: 24/7 Helpline
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
