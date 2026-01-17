"use client";

import React from "react";
import Image from "next/image";

export const Staff = () => {
  const staff = [
    {
      image: "/assets/sujon.png",
      name: "Shujon Howlader",
      role: "Staff",
      description:
        "Leading our medical team with expertise in complex mental health disorders.",
    },
    {
      image: "/assets/manik.png",
      name: "Mahmudul Hasan (Manik)",
      role: "Digital Marketing",
      description:
        "Specializing in cognitive behavioral therapy and trauma treatment.",
    },
    {
      image: "/assets/main male doctor2.png",
      name: "Omor Faruk",
      role: "Staff",
      description: "Expert in mood disorders and anxiety treatments.",
    },
    {
      image: "/assets/main male doctor3.jpg",
      name: "Dr. David Thompson",
      role: "Mental Health Consultant",
      description:
        "Focused on integrative treatment approaches and medication management.",
    },
    {
      image: "/assets/main male doctor4.jpg",
      name: "Dr. Lisa Park",
      role: "Behavioral Health Specialist",
      description: "Dedicated to adolescent and family mental health care.",
    },
    {
      image: "/assets/main male doctor4.jpg",
      name: "Dr. Lisa Park",
      role: "Behavioral Health Specialist",
      description: "Dedicated to adolescent and family mental health care.",
    },
    {
      image: "/assets/main male doctor4.jpg",
      name: "Dr. Lisa Park",
      role: "Behavioral Health Specialist",
      description: "Dedicated to adolescent and family mental health care.",
    },
    {
      image: "/assets/main male doctor4.jpg",
      name: "Dr. Lisa Park",
      role: "Behavioral Health Specialist",
      description: "Dedicated to adolescent and family mental health care.",
    },
    {
      image: "/assets/main male doctor4.jpg",
      name: "Dr. Lisa Park",
      role: "Behavioral Health Specialist",
      description: "Dedicated to adolescent and family mental health care.",
    },
    {
      image: "/assets/main male doctor4.jpg",
      name: "Dr. Lisa Park",
      role: "Behavioral Health Specialist",
      description: "Dedicated to adolescent and family mental health care.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 mt-10 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose <span className="text-blue-600">Brain & Life</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Experience excellence in mental health care with our modern approach
            and dedicated professionals.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-8 lg:gap-12">
          {staff.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {feature.name}
                </h3>
                <p className="text-sm font-medium text-blue-600 mb-2">
                  {feature.role}
                </p>
              </div>

              {/* Decorative element */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {index + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
