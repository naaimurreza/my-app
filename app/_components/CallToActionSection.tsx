"use client";

export default function CallToActionSection() {
  return (
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
              href="tel:+8801713031449"
              className="inline-flex items-center justify-center rounded-full bg-white/10 border border-sky-200/60 px-8 py-3 text-base font-medium text-sky-100 shadow-sm transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Call 24/7 Helpline
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
