"use client";

const steps = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2785/2785482.png",
    title: "Share what you're going through",
    description:
      "Call us or send a message with a few details about your mood, thoughts, or behaviour so our team can understand how to best support you.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/10691/10691802.png",
    title: "Meet with a specialist",
    description:
      "You'll have a confidential consultation with one of our psychiatrists or psychologists to discuss your history, concerns, and goals.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/16090/16090543.png",
    title: "Get your treatment plan",
    description:
      "Together we create a personalized plan that can include therapy, medication, rehabilitation, or a combination of approaches that fit your life.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/9084/9084544.png",
    title: "Start care with ongoing support",
    description:
      "Begin your treatment with regular follow‑ups, family guidance, and 24/7 support so you never feel alone in your recovery journey.",
  },
];

export default function EasyStepsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.12),transparent_55%)]" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="mb-3 inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 ring-1 ring-white/10 backdrop-blur">
            Fastest solution
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-linear-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
              4 Easy Steps
            </span>{" "}
            And Get Your Solution
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 lg:p-8 shadow-xl shadow-slate-950/40 backdrop-blur hover:-translate-y-1 hover:border-sky-200/40 hover:shadow-[0_30px_80px_rgba(8,47,73,0.45)] transition-all duration-300"
            >
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-xl bg-sky-500/10 border border-sky-500/20 group-hover:bg-sky-500/20 transition-colors">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                />
              </div>
              <div className="text-3xl font-bold text-sky-300/30 mb-3 group-hover:text-sky-300/50 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-sky-200 transition-colors">
                {step.title}
              </h3>
              <p className="text-blue-100/90 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
