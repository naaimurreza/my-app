import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Message from MD Fokrul Hossain - Brain And Life Hospital",
  description:
    "Read the message from the Managing Director of Brain And Life Hospital. Learn about our mission to provide compassionate mental health care, comprehensive addiction treatment, and family-centered recovery support in Bangladesh.",
  keywords: [
    "managing director message",
    "Brain And Life Hospital director",
    "mental health mission",
    "compassionate mental health care",
    "addiction treatment approach",
    "family-centered recovery",
    "mental health hospital Bangladesh",
    "inpatient mental health care",
    "recovery support",
    "mental wellness mission",
    // Bengali keywords
    "ব্যবস্থাপনা পরিচালকের বার্তা",
    "ব্রেইন অ্যান্ড লাইফ হাসপাতাল পরিচালক",
    "মানসিক স্বাস্থ্য মিশন",
    "সহানুভূতিশীল মানসিক স্বাস্থ্য যত্ন",
    "মাদকাসক্তি চিকিৎসা পদ্ধতি",
    "পারিবারিক-কেন্দ্রিক পুনরুদ্ধার",
    "মানসিক স্বাস্থ্য হাসপাতাল বাংলাদেশ",
    "ইনপেশেন্ট মানসিক স্বাস্থ্য যত্ন",
    "পুনরুদ্ধার সহায়তা",
    "মানসিক সুস্থতা মিশন",
  ],
  openGraph: {
    title: "Message from Managing Director - Brain And Life Hospital",
    description:
      "Read the message from the Managing Director about our mission to provide compassionate mental health care and comprehensive addiction treatment in Bangladesh.",
    url: "https://brainandlifehospital.com/MD",
    siteName: "Brain And Life Hospital",
    images: [
      {
        url: "/assets/md2.png",
        width: 1200,
        height: 630,
        alt: "Brain And Life Hospital - Managing Director Message",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Message from Managing Director - Brain And Life Hospital",
    description:
      "Compassionate mental health care and comprehensive addiction treatment mission.",
    images: ["/assets/md2.png"],
  },
  alternates: {
    canonical: "https://brainandlifehospital.com/MD",
    languages: {
      en: "https://brainandlifehospital.com/MD",
      bn: "https://brainandlifehospital.com/MD",
      "x-default": "https://brainandlifehospital.com/MD",
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
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-4 max-w-md mx-auto">
                <Image
                  src="/assets/md2.png"
                  alt="Medical Director"
                  width={400}
                  height={533}
                  className="w-full h-auto object-cover rounded-xl"
                  priority
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-4">
                Message from Managing Director
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight mb-6">
                Compassionate Care for Mental Wellness
              </h1>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                At Brain and Life Hospital, we understand that mental health challenges affect not just individuals,
                but entire families. Our mission is to provide comprehensive, compassionate care that supports
                recovery and healing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-slate max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                Understanding Mental Health Challenges
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  The pressures of work, family problems, relationship matters, and memories of the past can
                  become overwhelming—especially when you have children to care for. When these challenges
                  become too much to bear, they can lead to mental health issues that require professional
                  support and treatment.
                </p>
                <p>
                  Substance use disorders are a serious concern in our society. When addiction enters a family,
                  it affects everyone—not just the individual struggling with addiction. Families often find
                  themselves in turmoil, facing difficult decisions about how to help their loved ones.
                </p>
              </div>
            </div>

            {/* Treatment Approach */}
            <div className="mb-12 rounded-2xl bg-white border border-slate-200 shadow-sm p-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                Our Treatment Approach
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  At Brain and Life Hospital, we recognize that each patient requires individualized care.
                  Our treatment plans vary according to different modes of counseling and care needs. We
                  understand that addiction is a disease that requires medical intervention, psychological
                  support, and family involvement.
                </p>
                <p>
                  Unfortunately, many families reach a point where they feel treatment is no longer necessary
                  or effective. Some may give up hope due to repeated relapses. Family members sometimes
                  distance themselves from the person struggling with addiction, which can lead to feelings
                  of neglect and isolation—further complicating the recovery process.
                </p>
              </div>
            </div>

            {/* Hospital Stay & Recovery */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                Comprehensive Inpatient Care
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  For patients requiring intensive treatment, our hospital provides a safe, supportive
                  environment. Typically, patients stay with us for 15-30 days, during which time they
                  receive comprehensive care including medical treatment, therapy, and family counseling.
                </p>
                <p>
                  We believe that recovery involves the whole family. Our approach emphasizes rebuilding
                  family connections and ensuring that both the patient and their family members receive
                  the support they need. Regular medication management and ongoing therapy are essential
                  components of treatment, as they help prevent relapse and support long-term recovery.
                </p>
              </div>
            </div>

            {/* Recovery & Support */}
            <div className="rounded-2xl bg-linear-to-br from-blue-50 to-slate-50 border border-blue-100 p-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                Long-term Recovery Support
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Recovery is an ongoing journey that extends beyond the hospital stay. After discharge,
                  patients need continued support to maintain their progress. This includes staying away
                  from old friends and environments that may trigger relapse, and building new, healthy
                  relationships and routines.
                </p>
                <p className="font-medium text-slate-900">
                  At Brain and Life Hospital, we are committed to providing the support and care needed
                  for lasting recovery. Our team works tirelessly to help patients and their families
                  navigate the path to healing and wellness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
              Need Support?
            </h2>
            <p className="text-slate-600 mb-8">
              If you or a loved one needs help, our compassionate team is here to guide you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Contact Us
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

