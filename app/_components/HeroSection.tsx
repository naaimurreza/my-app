"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-black via-slate-950 to-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-400/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div>
            <p className="mb-4 inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-blue-200 ring-1 ring-white/10 backdrop-blur">
              The best mental health solution
            </p>
            <h1 className="mb-6 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl" itemProp="name">
              Brain And{" "}
              <span className="bg-linear-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
                Life
              </span>{" "}
              Hospital
            </h1>
            <p className="text-base md:text-lg text-blue-100/90 leading-relaxed max-w-xl">
              We provide compassionate, evidence-based mental health care in a safe, supportive environment—helping individuals restore balance, build resilience, and rediscover hope.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="/about"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                Learn More
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-7 py-3 text-sm font-medium text-slate-100 ring-1 ring-white/20 transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-sm font-medium text-blue-100/80">Follow us:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/share/1DWSRRzXA3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 rounded-full bg-white/5 border border-white/10 hover:border-sky-300/50 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                    className="transition-colors duration-300"
                  >
                    <path
                      fill="#1877F2"
                      d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                    />
                    <path
                      fill="#fff"
                      d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                    />
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@brainandlifehospital?si=c8_Ppxrgbkt2p_pS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 rounded-full bg-white/5 border border-white/10 hover:border-red-300/50 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                    className="transition-colors duration-300"
                  >
                    <path
                      fill="#FF0000"
                      d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                    />
                    <path fill="#FFF" d="M20 31L20 17 32 24z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@brain.and.life.hos?_r=1&_t=ZS-92z1ZnEbHzp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="text-slate-300"
                  >
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="relative mt-6 lg:mt-0">
            <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-sky-400/30 blur-3xl" />
            <div className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-emerald-400/25 blur-3xl" />
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-sky-950/40 backdrop-blur">
              <Image
                src="/assets/banner2.jpg"
                alt="Brain and Life Hospital"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            <div className="absolute -bottom-4 left-6 right-6 flex items-center gap-3 rounded-2xl bg-slate-950/80 px-4 py-3 text-xs text-slate-100 ring-1 ring-white/10 backdrop-blur">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                ✓
              </span>
              <div className="space-y-0.5">
                <p className="font-medium">Compassionate, evidence-based care</p>
                <p className="text-[11px] text-blue-100/75">Your journey to wellness starts here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
