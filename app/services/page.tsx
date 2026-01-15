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
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200 mb-4">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive Mental Health & Addiction Care
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Brain and Life Hospital offers specialized, compassionate care for individuals struggling with mental health issues and drug addiction. Our expert team provides 24/7 support in a safe, supportive environment.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our <span className="text-blue-600">Specialized Services</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We provide comprehensive treatment programs tailored to each individual's unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-sm border border-slate-100 p-6 lg:p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-600">
                    <span className="text-blue-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="bg-gradient-to-b from-white to-blue-50/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Conditions We <span className="text-blue-600">Specialize In</span>
              </h2>
              <p className="text-lg text-slate-600">
                Our expert team provides compassionate care for a wide range of mental health conditions and substance use disorders
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 lg:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {conditions.map((condition, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 rounded-lg bg-blue-50/50 hover:bg-blue-100 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
                    <span className="text-slate-700 font-medium">{condition}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Services Highlight */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 lg:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">🕐</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              24/7 Emergency & Support Services
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Mental health crises don't wait for business hours. Our dedicated team is available around the clock to provide immediate care, support, and intervention when you need it most.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-2xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Crisis Hotline</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-2xl font-bold mb-2">Immediate</div>
                <div className="text-blue-100">Emergency Response</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-2xl font-bold mb-2">Expert</div>
                <div className="text-blue-100">Medical Team</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our <span className="text-blue-600">Expert Team</span>
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
                  className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 text-center hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-3">👨‍⚕️</div>
                  <p className="text-slate-700 font-medium text-sm">{role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl border border-blue-100 p-8 lg:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Our compassionate team is here to help you or your loved one begin the journey toward recovery and wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-base font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Contact Us Today
            </a>
            <a
              href="tel:+8801234567890"
              className="inline-flex items-center justify-center rounded-full bg-white border-2 border-blue-600 px-8 py-3 text-base font-medium text-blue-600 shadow-sm transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Call 24/7 Helpline
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
