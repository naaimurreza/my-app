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
    <main className="min-h-screen bg-slate-50">
      <section className="container mx-auto px-4">
        <div className='align-center flex justify-center mt-8 mb-12'>
          <img className='w-200' src="./assets/banner.png" alt="Brain and life banner" />
        </div>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Contact us
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">
            We&apos;re here to listen and help
          </h1>
          <p className="mt-4 text-sm md:text-base text-slate-600">
            Reach out anytime if you or a loved one needs support. Our mental health team
            is available 24/7 for crisis care, admissions, and follow‑up queries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start mb-10">
          {/* Contact details / emergency info */}
          <div className="space-y-8 lg:col-span-1">
            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                Emergency & 24/7 support
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                If you are in immediate danger or experiencing a life‑threatening emergency,
                please contact your local emergency services right away.
              </p>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-slate-500">24/7 Helpline</p>
                  <p className="font-semibold text-slate-900">+880 58150414</p>
                </div>
                <div>
                  <p className="text-slate-500">Crisis Email</p>
                  <p className="font-semibold text-slate-900">brainandlifehospital@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 space-y-4">
              <h2 className="text-lg font-semibold text-slate-900">
                Hospital location
              </h2>
              <p className="text-sm text-slate-600">
                Brain And Life Hospital<br />
                Crescent Plaza, 145/1 Green Road, Dhaka-1205, Bangladesh
              </p>
              <p className="text-sm text-slate-600">
                Visiting hours: <span className="font-semibold">9:00 AM – 8:00 PM</span><br />
                OPD: <span className="font-semibold">Sat – Thu</span>
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6 md:p-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                Send us a message
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                Share a few details and our team will contact you within one business day.
                Please avoid sharing very sensitive information in this form.
              </p>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-slate-700">
                      Full name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm shadow-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-slate-700">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      placeholder="+880..."
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm shadow-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-slate-700">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm shadow-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-slate-700">
                      Reason for contact
                    </label>
                    <select
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm shadow-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
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
                  <label className="block text-sm font-medium text-slate-700">
                    How can we help?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe what you or your loved one is going through..."
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm shadow-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-2">
                  <div className="flex items-start gap-2">
                    <input
                      id="consent"
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="consent" className="text-xs text-slate-600">
                      I understand this form is not for emergencies and consent to being contacted
                      by Brain And Life Hospital regarding my enquiry.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Submit message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}