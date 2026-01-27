"use client";

import Image from "next/image";
import { useLanguage } from "../_contexts/LanguageContext";

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
    image: "/assets/nijhum.png",
    name: "Nijhum",
    role: "Senior Staff Nurse",
  },
];

export default function StaffSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-12 lg:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_55%)]" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="mb-3 inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 ring-1 ring-emerald-200">
            {t("staff.badge")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("staff.title")}
          </h2>
          <p className="text-lg text-gray-700">
            {t("staff.description")}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {staff.map((member, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-lg shadow-gray-200/50 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-sky-600">
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
