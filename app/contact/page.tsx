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
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero + content */}
      <section className="relative overflow-hidden">
        {/* Soft background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(56,189,248,0.12),transparent_60%)]" />

        <div className="relative container mx-auto px-4 py-10 md:py-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
            {/* Text + form side heading */}
            <div>
              <p className="inline-flex items-center rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-300 ring-1 ring-sky-500/40">
                Contact us
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl lg:text-[2.7rem]">
                We&apos;re here to{" "}
                <span className="bg-linear-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
                  listen, support & guide
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-sm md:text-base text-slate-200/80">
                Reach out anytime if you or a loved one needs help. Our mental health team is
                available 24/7 for crisis care, admissions, and follow‑up queries — in a safe,
                confidential environment.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs md:text-sm text-slate-200/80">
                <div className="flex items-center gap-2 rounded-full bg-slate-900/60 px-3 py-1.5 ring-1 ring-sky-500/30">
                  <span className="text-base">🕐</span>
                  <span className="font-medium">24/7 emergency helpline</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-slate-900/60 px-3 py-1.5 ring-1 ring-emerald-400/30">
                  <span className="text-base">🔐</span>
                  <span className="font-medium">Strictly confidential conversations</span>
                </div>
              </div>
            </div>

            {/* Banner image */}
            <div className="relative mt-6 lg:mt-0">
              <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-sky-400/30 blur-3xl" />
              <div className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-emerald-400/25 blur-3xl" />
              <div className="overflow-hidden rounded-3xl border border-sky-100/20 bg-slate-900/60 shadow-[0_24px_80px_rgba(15,23,42,0.9)] backdrop-blur">
                <img
                  src="/assets/banner.png"
                  alt="Brain and Life Hospital contact and support"
                  className="h-52 w-full object-cover sm:h-64 lg:h-72"
                />
              </div>
              <div className="absolute -bottom-4 left-6 right-6 flex items-center gap-3 rounded-2xl bg-slate-900/80 px-4 py-3 text-xs text-slate-100 ring-1 ring-white/10 backdrop-blur">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                  ✓
                </span>
                <div className="space-y-0.5">
                  <p className="font-medium">Kind, trauma‑informed staff</p>
                  <p className="text-[11px] text-slate-300/80">
                    Every message is read by a trained mental health professional.
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
              <div className="rounded-2xl bg-slate-950/80 shadow-xl shadow-slate-950/40 border border-slate-800 p-6 backdrop-blur">
                <h2 className="text-lg font-semibold text-slate-50 mb-4">
                  Emergency & 24/7 support
                </h2>
                <p className="text-sm text-slate-300 mb-4">
                  If you are in immediate danger or experiencing a life‑threatening emergency,
                  please contact your local emergency services right away.
                </p>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-slate-400">24/7 Helpline</p>
                    <a href="tel:+8801713031449">
                      <p className="hover:underline font-semibold text-slate-50">+880 1713031449</p>
                    </a>
                    <a href="tel:+8801742544000">
                      <p className="hover:underline font-semibold text-slate-50">+880 1742544000</p>
                    </a>

                  </div>
                  <div>
                    <p className="text-slate-400">Crisis Email</p>
                    <p className="font-semibold text-slate-50">brainandlifehospital@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-950/80 shadow-xl shadow-slate-950/40 border border-slate-800 p-6 space-y-4 backdrop-blur">
                <h2 className="text-lg font-semibold text-slate-50">
                  Hospital location
                </h2>
                <p className="text-sm text-slate-300">
                  Brain And Life Hospital<br />
                  Crescent Plaza, 145/1 Green Road, Dhaka-1205, Bangladesh
                </p>
                <p className="text-sm text-slate-300">
                  Visiting hours: <span className="font-semibold">9:00 AM – 8:00 PM</span><br />
                  OPD: <span className="font-semibold">Sat – Thu</span>
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-slate-950/80 shadow-xl shadow-slate-950/40 border border-slate-800 p-6 md:p-8 backdrop-blur">
                <h2 className="text-lg font-semibold text-slate-50 mb-2">
                  Send us a message
                </h2>
                <p className="text-sm text-slate-300 mb-6">
                  Share a few details and our team will contact you within one business day.
                  Please avoid sharing very sensitive information in this form.
                </p>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-slate-100">
                        Full name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2.5 text-sm shadow-sm outline-none text-slate-50 placeholder:text-slate-500 focus:border-sky-500 focus:bg-slate-900 focus:ring-2 focus:ring-sky-500/30"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-slate-100">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        placeholder="+880..."
                        className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2.5 text-sm shadow-sm outline-none text-slate-50 placeholder:text-slate-500 focus:border-sky-500 focus:bg-slate-900 focus:ring-2 focus:ring-sky-500/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-slate-100">
                        Email address
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2.5 text-sm shadow-sm outline-none text-slate-50 placeholder:text-slate-500 focus:border-sky-500 focus:bg-slate-900 focus:ring-2 focus:ring-sky-500/30"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-slate-100">
                        Reason for contact
                      </label>
                      <select
                        className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2.5 text-sm shadow-sm outline-none text-slate-50 focus:border-sky-500 focus:bg-slate-900 focus:ring-2 focus:ring-sky-500/30"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option>Appointment / OPD booking</option>
                        <option>In‑patient admission</option>
                        <option>Emergency follow‑up</option>
                        <option>General enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-slate-100">
                      How can we help?
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe what you or your loved one is going through..."
                      className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2.5 text-sm shadow-sm outline-none text-slate-50 placeholder:text-slate-500 focus:border-sky-500 focus:bg-slate-900 focus:ring-2 focus:ring-sky-500/30"
                    />
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-2">
                    <div className="flex items-start gap-2">
                      <input
                        id="consent"
                        type="checkbox"
                        className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-900 text-sky-500 focus:ring-sky-500"
                      />
                      <label htmlFor="consent" className="text-xs text-slate-300">
                        I understand this form is not for emergencies and consent to being contacted
                        by Brain And Life Hospital regarding my enquiry.
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-medium text-white shadow-sm shadow-sky-500/40 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                    >
                      Submit message
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