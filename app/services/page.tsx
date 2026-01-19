import React from 'react'
import { Metadata } from 'next';

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
  const services = [
    {
      title: "Mental Health Treatment",
      description: "Comprehensive care for conditions including schizophrenia, depression, anxiety, bipolar disorder, and other mental health challenges.",
      icon: "🧠",
      features: ["Individual Therapy", "Group Counseling", "Medication Management", "Crisis Intervention"]
    },
    {
      title: "Drug Addiction Rehabilitation",
      description: "Specialized treatment programs for substance addictions including yaba, marijuana, phensedyl, heroin, and other dependencies.",
      icon: "💊",
      features: ["Detoxification", "Rehabilitation Programs", "Relapse Prevention", "Aftercare Support"]
    },
    {
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency psychiatric services for crisis situations, suicidal thoughts, and acute mental health episodes.",
      icon: "🚨",
      features: ["Crisis Hotline", "Emergency Admissions", "Immediate Assessment", "Rapid Response"]
    },
    {
      title: "Psychiatric Consultation",
      description: "Expert evaluation and diagnosis by nationally and internationally renowned psychiatric doctors.",
      icon: "👨‍⚕️",
      features: ["Initial Assessment", "Diagnostic Evaluation", "Treatment Planning", "Follow-up Care"]
    },
    {
      title: "Psychological Therapy",
      description: "Evidence-based therapeutic interventions delivered by skilled psychologists and mental health professionals.",
      icon: "💭",
      features: ["Cognitive Behavioral Therapy", "Psychotherapy", "Family Therapy", "Support Groups"]
    },
    {
      title: "Rehabilitation Support",
      description: "Comprehensive rehabilitation services to help individuals rebuild their lives and achieve long-term recovery.",
      icon: "🔄",
      features: ["Life Skills Training", "Vocational Support", "Social Integration", "Ongoing Monitoring"]
    }
  ]

  const conditions = [
    "Schizophrenia",
    "Suicidal Thoughts & Ideation",
    "Hallucinations & Delusions",
    "Depression & Anxiety Disorders",
    "Bipolar Disorder",
    "Substance Use Disorders"
  ]

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-blue-900 to-slate-900 text-white">
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_55%)]" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            {/* Text content */}
            <div>
              <p className="mb-4 inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-blue-200 ring-1 ring-white/10 backdrop-blur">
                Our Services
              </p>
              <h1 className="mb-6 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                Compassionate Mental Health &{" "}
                <span className="bg-linear-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
                  Addiction Care
                </span>
              </h1>
              <p className="text-base md:text-lg text-blue-100/90 leading-relaxed max-w-xl">
                At Brain and Life Hospital, we combine evidence-based treatment with a calming, therapeutic environment.
                Our multi-disciplinary team supports you 24/7—through crisis, recovery, and long-term wellness.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                >
                  Book a Confidential Consultation
                </a>
                <div className="flex items-center gap-4 text-sm text-blue-100/80">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-lg">
                    🕐
                  </div>
                  <div className="space-y-0.5">
                    <p className="font-medium text-white">24/7 Emergency Support</p>
                    <p className="text-xs text-blue-100/70">
                      Always-on care for mental health and addiction crises.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 max-w-md text-sm text-blue-100/90">
                <div className="border-l border-white/15 pl-4">
                  <p className="text-2xl font-semibold">24/7</p>
                  <p className="text-xs uppercase tracking-wide text-blue-200/80">Emergency Care</p>
                </div>
                <div className="border-l border-white/15 pl-4">
                  <p className="text-2xl font-semibold">360°</p>
                  <p className="text-xs uppercase tracking-wide text-blue-200/80">Holistic Support</p>
                </div>
                <div className="border-l border-white/15 pl-4">
                  <p className="text-2xl font-semibold">Safe</p>
                  <p className="text-xs uppercase tracking-wide text-blue-200/80">Calm Environment</p>
                </div>
              </div>
            </div>

            {/* Image collage */}
            <div className="relative">
              <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-sky-400/30 blur-3xl" />
              <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-emerald-400/25 blur-3xl" />

              <div className="relative grid grid-cols-2 gap-4 lg:gap-5">
                <div className="space-y-4 lg:space-y-5">
                  <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-sky-950/40 backdrop-blur">
                    <img
                      src="/assets/service.jpg"
                      alt="Calm, therapeutic mental health environment"
                      className="h-52 w-full object-cover sm:h-64 lg:h-72"
                    />
                  </div>
                  <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-sky-950/40 backdrop-blur">
                    <img
                      src="/assets/service5.jpg"
                      alt="One-on-one psychiatric consultation"
                      className="h-32 w-full object-cover sm:h-40 lg:h-44"
                    />
                  </div>
                </div>
                <div className="mt-8 space-y-4 lg:space-y-5">
                  <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-sky-950/40 backdrop-blur">
                    <img
                      src="/assets/service6.jpg"
                      alt="Supportive group therapy session"
                      className="h-40 w-full object-cover sm:h-52 lg:h-60"
                    />
                  </div>
                  <div className="overflow-hidden rounded-3xl border border-emerald-300/30 bg-emerald-400/5 shadow-[0_0_45px_rgba(45,212,191,0.35)] backdrop-blur">
                    <img
                      src="/assets/service4.jpg"
                      alt="Medical team monitoring patient wellbeing"
                      className="h-32 w-full object-cover sm:h-40 lg:h-44"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 translate-y-1/2 items-center gap-3 rounded-2xl bg-slate-950/80 px-4 py-3 text-xs text-blue-50 ring-1 ring-white/10 backdrop-blur">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                  ✓
                </span>
                <div className="space-y-0.5">
                  <p className="font-medium">Confidential, judgment-free care</p>
                  <p className="text-[11px] text-blue-100/75">Every journey is treated with dignity and respect.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative overflow-hidden bg-slate-950 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.12),transparent_55%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="mb-3 inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 ring-1 ring-white/10 backdrop-blur">
              Programs
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="bg-linear-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">Specialized Services</span>
            </h2>
            <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
              Comprehensive treatment programs tailored to each individual&apos;s needs—delivered with compassion, safety, and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 lg:p-8 shadow-2xl shadow-slate-950/40 backdrop-blur hover:-translate-y-1 hover:border-sky-200/40 hover:shadow-[0_30px_80px_rgba(8,47,73,0.45)] transition-all duration-300"
              >
                <div className="mb-4 text-5xl drop-shadow">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-sky-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-blue-100/90 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-blue-100/85">
                      <span className="mr-2 text-emerald-300">✓</span>
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
      <section className="relative overflow-hidden bg-slate-950 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="mb-3 inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 ring-1 ring-white/10 backdrop-blur">
                Expertise
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Conditions We <span className="bg-linear-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">Specialize In</span>
              </h2>
              <p className="text-lg text-blue-100/80">
                Compassionate care for a wide range of mental health conditions and substance use disorders.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 lg:p-10 shadow-2xl shadow-slate-950/40 backdrop-blur">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {conditions.map((condition, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 rounded-lg bg-slate-900/70 ring-1 ring-white/10 hover:ring-sky-300/40 transition-colors"
                  >
                    <div className="mr-3 h-2 w-2 rounded-full bg-sky-300"></div>
                    <span className="text-slate-100 font-medium">{condition}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Services Highlight */}
      <section className="relative overflow-hidden bg-slate-950 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_60%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-r from-slate-900 via-blue-900 to-slate-900 rounded-2xl shadow-2xl shadow-slate-950/50 p-8 lg:p-12 text-white ring-1 ring-white/10 backdrop-blur">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-6xl mb-6">🕐</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                24/7 Emergency & Support Services
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Mental health crises don&apos;t wait for business hours. Our dedicated team is available around the clock to provide immediate care, support, and intervention when you need it most.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
                  <div className="text-2xl font-bold mb-2">24/7</div>
                  <div className="text-blue-100">Crisis Hotline</div>
                </div>
                <div className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
                  <div className="text-2xl font-bold mb-2">Immediate</div>
                  <div className="text-blue-100">Emergency Response</div>
                </div>
                <div className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
                  <div className="text-2xl font-bold mb-2">Expert</div>
                  <div className="text-blue-100">Medical Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="relative overflow-hidden bg-slate-950 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_55%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="mb-3 inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 ring-1 ring-white/10 backdrop-blur">
                Team
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our <span className="bg-linear-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">Expert Team</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Nationally & Internationally Renowned Psychiatric Doctors",
                "Skilled Psychologists",
                "Full-time Physicians",
                "Experienced Nurses & Trained Health Workers"
              ].map((role, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-white/5 p-6 text-center shadow-xl shadow-slate-950/40 backdrop-blur hover:-translate-y-0.5 transition"
                >
                  <div className="text-3xl mb-3">👨‍⚕️</div>
                  <p className="text-slate-100 font-medium text-sm">{role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative overflow-hidden bg-slate-950 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_55%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 rounded-2xl border border-white/10 p-8 lg:p-12 text-center shadow-2xl shadow-slate-950/50 backdrop-blur">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Take the First Step?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Our compassionate team is here to help you or your loved one begin the journey toward recovery and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-3 text-base font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Contact Us Today
              </a>
              <a
                href="tel:+8801234567890"
                className="inline-flex items-center justify-center rounded-full bg-white/10 border border-sky-200/60 px-8 py-3 text-base font-medium text-sky-100 shadow-sm transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Call 24/7 Helpline
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
