"use client";

import Image from "next/image";

export default function MDMessageSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 ring-1 ring-white/10 backdrop-blur">
              A message from leadership
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Hear What Our{" "}
              <span className="bg-linear-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
                Managing Director
              </span>{" "}
              Has to Say
            </h2>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:p-8 shadow-xl shadow-slate-950/40 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <svg
                    className="w-8 h-8 text-sky-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l1.017 2.193c-2.481.967-4.563 3.009-4.563 6.115v7.391h-5.436zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l1.017 2.193c-2.481.967-4.563 3.009-4.563 6.115v7.391h-5.454z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-base lg:text-lg text-slate-200 leading-relaxed italic">
                    "At our hospital, we believe mental health care begins with
                    compassion. Every individual who walks through our doors is
                    treated with dignity, understanding, and respect. Our commitment
                    is not just to heal minds, but to restore hope, purpose, and
                    quality of life."
                  </p>
                  <p className="mt-6 text-sm font-semibold text-slate-100">
                    — Md Fokrul Hossain, Managing Director, Brain And Life Hospital
                  </p>
                </div>
              </div>
            </div>
            <a
              href="/MD"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              Read More
            </a>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-full bg-linear-to-r from-blue-200/30 to-indigo-200/30 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative">
                <Image
                  src="/assets/md3.png"
                  alt="Managing Director"
                  width={500}
                  height={500}
                  className="relative w-full max-w-md h-auto rounded-full border-4 border-white/20 shadow-2xl object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
