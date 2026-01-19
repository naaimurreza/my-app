"use client";

import React from "react";

export const SolutionStep = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 lg:pt-30 md:pt-20 sm:pt-3">
      <div className="w-full">
        <div className="text-center max-w-3xl mx-auto mb-5">
          <h2 className="text-xl sm:text-2xl font-medium mb-3">
            - Fastest solution
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold px-4">
            <span className="text-blue-600">4 Easy Steps</span> And Get Your
            Solution
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        <div className="py-6 bg-gray-50 rounded-md shadow-lg cursor-pointer hover:scale-105 duration-300 hover:shadow-xl p-4 hover:bg-blue-600 hover:text-white transition-all">
          <img
            className="w-16 rounded-full shadow-lg mb-3"
            src="https://cdn-icons-png.flaticon.com/512/2785/2785482.png"
            alt="doctor icon"
          />
          <h1 className="font-semibold py-2 text-base sm:text-lg">
            Share what you&apos;re going through
          </h1>
          <p className="py-3 text-sm sm:text-base">
            Call us or send a message with a few details about your mood,
            thoughts, or behaviour so our team can understand how to best
            support you.
          </p>
        </div>
        <div className="py-6 bg-gray-50 rounded-md shadow-lg cursor-pointer hover:scale-105 duration-300 hover:shadow-xl p-4 hover:bg-blue-600 hover:text-white transition-all">
          <img
            className="w-16 shadow-lg mb-3"
            src="https://cdn-icons-png.flaticon.com/512/10691/10691802.png"
            alt="doctor icon"
          />
          <h1 className="font-semibold py-2 text-base sm:text-lg">
            Meet with a specialist
          </h1>
          <p className="py-3 text-sm sm:text-base">
            You&apos;ll have a confidential consultation with one of our
            psychiatrists or psychologists to discuss your history, concerns,
            and goals.
          </p>
        </div>
        <div className="py-6 bg-gray-50 rounded-md shadow-lg cursor-pointer hover:scale-105 duration-300 hover:shadow-xl p-4 hover:bg-blue-600 hover:text-white transition-all">
          <img
            className="w-16 shadow-lg mb-3"
            src="https://cdn-icons-png.flaticon.com/512/16090/16090543.png"
            alt="doctor icon"
          />
          <h1 className="font-semibold py-2 text-base sm:text-lg">
            Get your treatment plan
          </h1>
          <p className="py-3 text-sm sm:text-base">
            Together we create a personalized plan that can include therapy,
            medication, rehabilitation, or a combination of approaches that fit
            your life.
          </p>
        </div>
        <div className="py-6 bg-gray-50 rounded-md shadow-lg cursor-pointer hover:scale-105 duration-300 hover:shadow-xl p-4 hover:bg-blue-600 hover:text-white transition-all">
          <img
            className="w-16 shadow-lg mb-3"
            src="https://cdn-icons-png.flaticon.com/512/9084/9084544.png"
            alt="doctor icon"
          />
          <h1 className="font-semibold py-2 text-base sm:text-lg">
            Start care with ongoing support
          </h1>
          <p className="py-3 text-sm sm:text-base">
            Begin your treatment with regular follow‑ups, family guidance, and
            24/7 support so you never feel alone in your recovery journey.
          </p>
        </div>
      </div>
    </div>
  );
};
