import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Prof. Dr. M A Mohit Kamal - Senior Chief Consultant Psychiatry | Brain And Life Hospital",
  description:
    "Meet Prof. Dr. M A Mohit Kamal, Senior Chief Consultant in Psychiatry & Psychotherapy at LABAID Cardiac Hospital. MBBS, M.Phil. (Psychiatry), FCPS qualified psychiatrist with extensive experience in mental health care, psychotherapy, and academic leadership. Former Director of National Institute of Mental Health, Dhaka.",
  keywords: [
    "Dr. Muhit Kamal",
    "Dr. M A Mohit Kamal",
    "Prof. Dr. Muhit Kamal",
    "psychiatrist Bangladesh",
    "psychiatrist Dhaka",
    "senior chief consultant psychiatry",
    "psychotherapy specialist",
    "mental health specialist",
    "psychiatric care",
    "psychotherapy",
    "M.Phil Psychiatry",
    "FCPS psychiatrist",
    "LABAID Cardiac Hospital psychiatrist",
    "National Institute of Mental Health",
    "academic leadership psychiatry",
    "depression treatment",
    "anxiety treatment",
    "psychiatric consultation",
    // Bengali keywords
    "ড. মুহিত কামাল",
    "ড. এম এ মহিত কামাল",
    "প্রফেসর ড. মুহিত কামাল",
    "মনোরোগ বিশেষজ্ঞ বাংলাদেশ",
    "মনোরোগ বিশেষজ্ঞ ঢাকা",
    "সিনিয়র চিফ কনসালটেন্ট মনোরোগবিদ্যা",
    "সাইকোথেরাপি বিশেষজ্ঞ",
    "মানসিক স্বাস্থ্য বিশেষজ্ঞ",
    "মনোরোগবিদ্যা সেবা",
    "সাইকোথেরাপি",
    "এম.ফিল মনোরোগবিদ্যা",
    "এফসিপিএস মনোরোগ বিশেষজ্ঞ",
    "ল্যাবএইড কার্ডিয়াক হাসপাতাল মনোরোগ বিশেষজ্ঞ",
    "জাতীয় মানসিক স্বাস্থ্য ইনস্টিটিউট",
    "একাডেমিক নেতৃত্ব মনোরোগবিদ্যা",
    "বিষণ্নতা চিকিৎসা",
    "উদ্বেগ চিকিৎসা",
    "মনোরোগ পরামর্শ",
  ],
  openGraph: {
    title: "Prof. Dr. M A Mohit Kamal - Senior Chief Consultant Psychiatry | Brain And Life Hospital",
    description:
      "Meet Prof. Dr. M A Mohit Kamal, Senior Chief Consultant in Psychiatry & Psychotherapy. MBBS, M.Phil. (Psychiatry), FCPS qualified psychiatrist with extensive experience in mental health care and psychotherapy.",
    url: "https://brainandlifehospital.com/muhitkamal",
    siteName: "Brain And Life Hospital",
    images: [
      {
        url: "/assets/kamal.png",
        width: 1200,
        height: 630,
        alt: "Prof. Dr. M A Mohit Kamal - Senior Chief Consultant Psychiatry",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prof. Dr. M A Mohit Kamal - Senior Chief Consultant Psychiatry",
    description:
      "MBBS, M.Phil. (Psychiatry), FCPS qualified psychiatrist with extensive experience in mental health care and psychotherapy.",
    images: ["/assets/kamal.png"],
  },
  alternates: {
    canonical: "https://brainandlifehospital.com/muhitkamal",
    languages: {
      en: "https://brainandlifehospital.com/muhitkamal",
      bn: "https://brainandlifehospital.com/muhitkamal",
      "x-default": "https://brainandlifehospital.com/muhitkamal",
    },
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
    },
  },
  authors: [{ name: "Brain And Life Hospital" }],
  creator: "Brain And Life Hospital",
  publisher: "Brain And Life Hospital",
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-sky-50 via-white to-emerald-50 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.05),transparent_55%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-6 bg-linear-to-br from-sky-200/30 via-blue-200/20 to-emerald-200/30 rounded-full blur-3xl"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 max-w-md mx-auto">
                  <Image
                    src="/assets/kamal.png"
                    alt="Prof. Dr. M A Mohit Kamal"
                    width={400}
                    height={480}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="space-y-8 order-1 lg:order-2">
                <div>
                  <p className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 ring-1 ring-sky-200 mb-4">
                    Senior Chief Consultant
                  </p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3">
                    Prof. Dr. M A Mohit{" "}
                    <span className="bg-linear-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
                      Kamal
                    </span>
                  </h1>
                  <p className="text-xl text-sky-600 font-semibold">
                    Senior Chief Consultant (Psychiatry & Psychotherapy)
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-200/50">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Qualifications
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      MBBS<br />
                      M.Phil. (Psychiatry)<br />
                      FCPS (Psychiatry)
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-200/50">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Current Position
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Professor of Psychotherapy<br />
                      Senior Chief Consultant (Psychiatry & Psychotherapy)<br />
                      LABAID Cardiac Hospital
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative overflow-hidden bg-gray-50 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.05),transparent_60%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border border-gray-200 bg-white shadow-xl shadow-gray-200/50">
              <CardHeader>
                <CardTitle className="text-3xl md:text-4xl font-semibold text-center text-gray-900">
                  About Dr. M A Mohit Kamal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6 lg:p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Prof. Dr. M A Mohit Kamal is a distinguished psychiatrist and
                  psychotherapist with extensive experience in mental health care.
                  As a Senior Chief Consultant at LABAID Cardiac Hospital, he
                  provides comprehensive psychiatric care and psychotherapy
                  services.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With his advanced qualifications including MBBS, M.Phil. in
                  Psychiatry, and FCPS in Psychiatry, Dr. Kamal brings a wealth of
                  knowledge and expertise to his practice. His commitment to
                  mental health extends beyond clinical practice to academic
                  leadership and institutional development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.05),transparent_60%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 ring-1 ring-emerald-200 mb-4">
                Experience
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Professional Experience
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-gray-200 bg-white shadow-xl shadow-gray-200/50 hover:border-sky-300 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">Current Roles</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                      Professor of Psychotherapy
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 shrink-0"></span>
                      Senior Chief Consultant (Psychiatry & Psychotherapy) at
                      LABAID Cardiac Hospital
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-white shadow-xl shadow-gray-200/50 hover:border-emerald-300 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">Previous Positions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 shrink-0"></span>
                      Former Head of Psychotherapy
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 shrink-0"></span>
                      Former Academic Course Director MD (Psychiatry)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 shrink-0"></span>
                      Former Director, National Institute of Mental Health, Dhaka
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="relative overflow-hidden bg-gray-50 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05),transparent_60%)]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 ring-1 ring-sky-200 mb-4">
              Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Areas of Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-gray-200 bg-white shadow-lg shadow-gray-200/50 hover:shadow-xl hover:border-sky-300 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-7 h-7 text-sky-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Psychiatry
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Comprehensive psychiatric diagnosis and treatment
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-white shadow-lg shadow-gray-200/50 hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-7 h-7 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Psychotherapy
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Evidence-based therapeutic interventions
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 bg-white shadow-lg shadow-gray-200/50 hover:shadow-xl hover:border-sky-300 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-7 h-7 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Academic Leadership
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Medical education and training
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
