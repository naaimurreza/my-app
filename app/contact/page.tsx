"use client";

import React, { useState } from 'react'
import Image from 'next/image';
import { useLanguage } from '../_contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    reason: '',
    message: '',
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  return (
    <main className="min-h-screen pt-20">
      {/* Hero + content */}
      <section className="relative overflow-hidden">
        {/* Soft background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.1),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(14,165,233,0.06),transparent_60%)]" />

        <div className="relative container mx-auto px-4 py-10 md:py-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
            {/* Text + form side heading */}
            <div>
              <p className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-700 ring-1 ring-sky-200">
                {t("contact.badge")}
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-[2.7rem]">
                {t("contact.title")}{" "}
                <span className="bg-linear-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
                  {t("contact.titleHighlight")}
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-sm md:text-base text-gray-700">
                {t("contact.description")}
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs md:text-sm text-gray-700">
                <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 ring-1 ring-sky-300">
                  <span className="text-base">🕐</span>
                  <span className="font-medium">{t("contact.emergencyHelpline")}</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 ring-1 ring-emerald-300">
                  <span className="text-base">🔐</span>
                  <span className="font-medium">{t("contact.confidential")}</span>
                </div>
              </div>
            </div>

            {/* Banner image */}
            <div className="relative mt-6 lg:mt-0">
              <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-sky-200/30 blur-3xl" />
              <div className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-emerald-200/25 blur-3xl" />
              <div className="overflow-hidden rounded-3xl border border-white/30 bg-white/20 backdrop-blur-sm shadow-[0_24px_80px_rgba(0,0,0,0.1)]">
                <Image
                  src="/assets/banner.png"
                  alt="Brain and Life Hospital contact and support"
                  width={800}
                  height={400}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 800px"
                />
              </div>
              <div className="absolute -bottom-4 left-6 right-6 flex items-center gap-3 rounded-2xl bg-white/40 backdrop-blur-md px-4 py-3 text-xs text-gray-700 ring-1 ring-white/30 shadow-lg">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  ✓
                </span>
                <div className="space-y-0.5">
                  <p className="font-medium text-gray-900">{t("contact.kindStaff")}</p>
                  <p className="text-[11px] text-gray-600">
                    {t("contact.kindStaffDesc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative container mx-auto px-4 pb-12 md:pb-16">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
            {/* Contact details / emergency info */}
            <div className="space-y-8 lg:col-span-1">
              <div className="rounded-2xl bg-white/30 backdrop-blur-md shadow-xl shadow-gray-200/30 border border-white/30 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  {t("contact.emergencySupport")}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {t("contact.emergencyDesc")}
                </p>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-500">{t("contact.helpline")}</p>
                    <a href="tel:+8801713031449">
                      <p className="hover:underline font-semibold text-gray-900">+880 1713031449</p>
                    </a>
                    <a href="tel:+8801742544000">
                      <p className="hover:underline font-semibold text-gray-900">+880 1742544000</p>
                    </a>

                  </div>
                  <div>
                    <p className="text-gray-500">{t("contact.crisisEmail")}</p>
                    <p className="font-semibold text-gray-900">brainandlifehospital@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white/30 backdrop-blur-md shadow-xl shadow-gray-200/30 border border-white/30 p-6 space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  {t("contact.hospitalLocation")}
                </h2>
                <p className="text-sm text-gray-600">
                  Brain And Life Hospital<br />
                  Crescent Plaza, 145/1 Green Road, Dhaka-1205, Bangladesh
                </p>
                <p className="text-sm text-gray-600">
                  {t("contact.visitingHours")} <span className="font-semibold">9:00 AM – 8:00 PM</span><br />
                  {t("contact.opd")} <span className="font-semibold">Sat – Thu</span>
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-white/30 backdrop-blur-md shadow-xl shadow-gray-200/30 border border-white/30 p-6 md:p-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {t("contact.sendMessage")}
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  {t("contact.messageDesc")}
                </p>

                <form 
                  className="space-y-5"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    setSubmitStatus({ type: null, message: '' });

                    try {
                      const response = await fetch('/api/contact', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formData),
                      });

                      const data = await response.json();

                      if (response.ok) {
                        setSubmitStatus({
                          type: 'success',
                          message: data.message || 'Your message has been sent successfully!',
                        });
                        // Reset form
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          reason: '',
                          message: '',
                          consent: false,
                        });
                        // Clear success message after 5 seconds
                        setTimeout(() => {
                          setSubmitStatus({ type: null, message: '' });
                        }, 5000);
                      } else {
                        setSubmitStatus({
                          type: 'error',
                          message: data.error || 'Failed to send message. Please try again.',
                        });
                      }
                    } catch (error) {
                      setSubmitStatus({
                        type: 'error',
                        message: 'An error occurred. Please try again later.',
                      });
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                >
                  {/* Success/Error Messages */}
                  {submitStatus.type && (
                    <div
                      className={`rounded-lg p-4 ${
                        submitStatus.type === 'success'
                          ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                          : 'bg-red-50 border border-red-200 text-red-800'
                      }`}
                    >
                      <p className="text-sm font-medium">{submitStatus.message}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-gray-900">
                        {t("contact.fullName")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t("contact.namePlaceholder")}
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm shadow-sm outline-none text-gray-900 placeholder:text-gray-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-gray-900">
                        {t("contact.phone")}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t("contact.phonePlaceholder")}
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm shadow-sm outline-none text-gray-900 placeholder:text-gray-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-gray-900">
                        {t("contact.email")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t("contact.emailPlaceholder")}
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm shadow-sm outline-none text-gray-900 placeholder:text-gray-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-gray-900">
                        {t("contact.reason")}
                      </label>
                      <select
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm shadow-sm outline-none text-gray-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
                      >
                        <option value="">
                          {t("contact.selectOption")}
                        </option>
                        <option value={t("contact.appointment")}>{t("contact.appointment")}</option>
                        <option value={t("contact.inpatient")}>{t("contact.inpatient")}</option>
                        <option value={t("contact.emergencyFollowup")}>{t("contact.emergencyFollowup")}</option>
                        <option value={t("contact.generalEnquiry")}>{t("contact.generalEnquiry")}</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-gray-900">
                      {t("contact.howCanWeHelp")} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t("contact.messagePlaceholder")}
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm shadow-sm outline-none text-gray-900 placeholder:text-gray-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
                    />
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-2">
                    <div className="flex items-start gap-2">
                      <input
                        id="consent"
                        type="checkbox"
                        required
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1 h-4 w-4 rounded border-gray-300 bg-white text-sky-500 focus:ring-sky-500"
                      />
                      <label htmlFor="consent" className="text-xs text-gray-600">
                        {t("contact.consent")} <span className="text-red-500">*</span>
                      </label>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-medium text-white shadow-sm shadow-sky-500/40 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        t("contact.submit")
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}