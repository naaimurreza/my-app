"use client"

import React from 'react'
import Image from 'next/image'
import { useLanguage } from '../_contexts/LanguageContext'

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <>
            {/* Top Banner */}
            <div className='relative bg-linear-to-r from-sky-100/40 via-blue-50/40 to-emerald-100/40 backdrop-blur-sm border-y border-gray-200/30'>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_60%)]" />
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                    <p className='text-xl md:text-3xl text-gray-800 text-center'>
                        {t("footer.tagline")}
                    </p>
                </div>
            </div>

            {/* Footer */}
            <footer className="relative bg-gray-50/30 backdrop-blur-md">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.03),transparent_55%)]" />
                <div className="relative mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                        {/* Logo and Description */}
                        <div className="lg:col-span-1">
                            <a
                                href="./"
                                className="flex flex-col sm:flex-row items-center md:items-start gap-3 mb-6 transition-opacity hover:opacity-80"
                            >
                                <Image
                                    src="/assets/brainandlifelogo.png"
                                    className="h-12 w-auto"
                                    width={70}
                                    height={50}
                                    alt="Brain and Life Hospital logo"
                                    loading="lazy"
                                    quality={85}
                                    sizes="70px"
                                />
                                <div className="text-center md:text-left">
                                    <span className="text-xl font-bold text-gray-900 block">
                                        Brain And Life Hospital
                                    </span>
                                    <span className="text-xs text-gray-600 mt-1 block">
                                        মানসিক রোগ ও মাদকাসক্তি চিকিৎসা কেন্দ্র
                                    </span>
                                </div>
                            </a>
                            <p className="text-sm text-gray-600 leading-relaxed text-center md:text-left">
                                {t("footer.description")}
                            </p>
                        </div>

                        {/* Navigation Links */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900">{t("footer.navigation")}</h2>
                            <ul className="space-y-3">
                                <li>
                                    <a href="./" className="text-gray-600">
                                        {t("nav.home")}
                                    </a>
                                </li>
                                <li>
                                    <a href="./about" className="text-gray-600">
                                        {t("nav.about")}
                                    </a>
                                </li>
                                <li>
                                    <a href="./services" className="text-gray-600">
                                        {t("nav.services")}
                                    </a>
                                </li>
                                <li>
                                    <a href="./treatment" className="text-gray-600">
                                        {t("nav.treatment")}
                                    </a>
                                </li>
                                <li>
                                    <a href="./contact" className="text-gray-600">
                                        {t("nav.contact")}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase tracking-wider">{t("footer.contact")}</h2>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="https://www.google.com/maps/place/BRAIN+AND+LIFE+HOSPITAL/@23.7530079,90.3853329,17z/data=!3m1!4b1!4m6!3m5!1s0x3755b8a492bd6b6b:0x4a64940b5bd018b3!8m2!3d23.753003!4d90.3879078!16s%2Fg%2F11byflh016?coh=277535&entry=tts&g_ep=EgoyMDI2MDExMS4wIPu8ASoKLDEwMDc5MjA3M0gBUAM%3D&skid=25f21306-4bdd-4a07-b733-d090c9bf79a8"
                                        target='_blank'
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-sky-600 transition-colors text-sm flex items-start gap-2"
                                    >
                                        <span className="mt-0.5">📍</span>
                                        <span>Crescent Plaza, 145/1 Green Road, Dhaka-1205, Bangladesh</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+88058150414" className="text-gray-600 hover:text-sky-600 transition-colors text-sm flex items-center gap-2">
                                        <span>📞</span>
                                        <span>+880 58150414</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+88029130270" className="text-gray-600 hover:text-sky-600 transition-colors text-sm flex items-center gap-2">
                                        <span>📞</span>
                                        <span>+880 29130270</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+88029130269" className="text-gray-600 hover:text-sky-600 transition-colors text-sm flex items-center gap-2">
                                        <span>📞</span>
                                        <span>+880 29130269</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900">{t("footer.followUs")}</h2>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-gray-600">
                                    {t("footer.socialDesc")}
                                </p>
                                <div className="flex items-center gap-3">
                                    <a
                                        href="https://www.facebook.com/share/1DWSRRzXA3/"
                                        target='_blank'
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-gray-100 border border-gray-300 hover:border-sky-400 hover:bg-gray-200 transition-all duration-300 hover:scale-110"
                                    >
                                        <svg className="w-5 h-5 text-gray-600 hover:text-sky-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
                                        </svg>
                                        <span className="sr-only">Facebook page</span>
                                    </a>
                                    <a
                                        href="https://youtube.com/@brainandlifehospital?si=c8_Ppxrgbkt2p_pS"
                                        target='_blank'
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-gray-100"
                                    >
                                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                        </svg>
                                        <span className="sr-only">YouTube channel</span>
                                    </a>
                                    <a
                                        href="https://www.tiktok.com/@brain.and.life.hos?_r=1&_t=ZS-92z1ZnEbHzp"
                                        target='_blank'
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-gray-100 border border-gray-300 hover:border-gray-400 hover:bg-gray-200 transition-all duration-300 hover:scale-110"
                                    >
                                        <svg className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                                        </svg>
                                        <span className="sr-only">TikTok account</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-gray-200">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <span className="text-sm text-gray-600">
                                © {new Date().getFullYear()} <a href="./" className="text-sky-600">Brain And Life Hospital</a>. {t("footer.copyright")}
                            </span>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span>Made with</span>
                                <span className="text-red-500">❤️</span>
                                <span>by</span>
                                <a
                                    href="https://naaimur.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-blue-600 transition-colors"
                                >
                                    Naaimur Reza
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
