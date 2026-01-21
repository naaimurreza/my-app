"use client";

import Image from "next/image";

const staff = [
  {
    image: "/assets/sujon.png",
    name: "Shujon Howlader",
    role: "Office Employee",
  },
  {
    image: "/assets/manik.png",
    name: "Mahmudul Hasan (Manik)",
    role: "Digital Marketing Officer",
  },
  {
    image: "/assets/faruk.jpg",
    name: "Omar Faruk",
    role: "Office Employee",
  },
  {
    image: "/assets/ayesha.png",
    name: "Ayesha Siddiqua",
    role: "Administrative Officer",
  },
  {
    image: "/assets/nijhum.jpg",
    name: "Nijhum",
    role: "Senior Staff Nurse",
  },
];

export default function StaffSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_55%)]" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="mb-3 inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 ring-1 ring-white/10 backdrop-blur">
            Our Team
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose{" "}
            <span className="bg-linear-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
              Brain & Life
            </span>
          </h2>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            Experience excellence in mental health care with our modern approach
            and dedicated professionals.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {staff.map((member, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-xl shadow-slate-950/40 backdrop-blur hover:-translate-y-1 hover:border-sky-200/40 transition-all duration-300"
            >
              <div className="relative h-48 md:h-56 overflow-hidden bg-linear-to-br from-slate-900 to-slate-800">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-sky-200 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-sky-300">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
