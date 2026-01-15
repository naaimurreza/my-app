import React from "react";

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
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200 mb-4">
              Our Treatment Approach
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Personalized, Evidence-Based Mental Health Treatment
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              We provide comprehensive, individualized treatment plans combining the latest evidence-based therapies with compassionate care to help you achieve lasting recovery and wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Modalities */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Treatment <span className="text-blue-600">Modalities</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We offer a comprehensive range of therapeutic approaches tailored to meet your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {treatmentModalities.map((treatment, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-sm border border-slate-100 p-6 lg:p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{treatment.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {treatment.title}
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                {treatment.description}
              </p>
              <div className="mb-4">
                <p className="text-xs font-medium text-blue-600 mb-3">KEY BENEFITS:</p>
                <ul className="space-y-2">
                  {treatment.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-600">
                      <span className="text-blue-600 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-500">
                  <span className="font-medium">Duration:</span> {treatment.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Treatment Process */}
      <section className="bg-gradient-to-b from-white to-blue-50/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Your Treatment <span className="text-blue-600">Journey</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A structured, step-by-step approach to your recovery and wellness
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {treatmentProcess.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-6 bg-white rounded-xl shadow-sm border border-slate-100 p-6 lg:p-8 hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
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
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Evidence-Based <span className="text-blue-600">Approaches</span>
            </h2>
            <p className="text-lg text-slate-600">
              Our treatments are grounded in scientific research and proven therapeutic methods
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 lg:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {evidenceBasedApproaches.map((approach, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 rounded-lg bg-gradient-to-r from-blue-50 to-slate-50 hover:from-blue-100 hover:to-blue-50 transition-colors border border-blue-100"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-700 font-medium">{approach}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Programs */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Specialized <span className="text-blue-600">Treatment Programs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Inpatient Treatment
              </h3>
              <p className="text-slate-600 mb-4">
                Intensive 24/7 care in a safe, structured environment for individuals requiring constant medical supervision and support.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Round-the-clock medical care
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Structured daily programs
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Safe, supportive environment
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Outpatient Treatment
              </h3>
              <p className="text-slate-600 mb-4">
                Flexible treatment options that allow you to continue with daily life while receiving comprehensive care and support.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Flexible scheduling
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Maintain daily routines
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Family and work support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 lg:p-12 text-white text-center">
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
                className="inline-flex items-center justify-center rounded-full bg-white text-blue-600 px-8 py-3 text-base font-medium shadow-sm transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:+8801234567890"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 border-2 border-white px-8 py-3 text-base font-medium text-white shadow-sm transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                Call Now: 24/7 Helpline
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
