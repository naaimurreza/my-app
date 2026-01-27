"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../_contexts/LanguageContext";
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md border-b border-gray-200/30 shadow-sm">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 lg:py-4"
      >
        <div className="flex items-center">
          <a
            href="./"
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <span className="sr-only">Brain and Life</span>
            <Image
              src="/assets/brainandlifelogo.png"
              alt="Brain and Life Logo"
              width={60}
              height={45}
              className="h-auto"
              priority
              fetchPriority="high"
              quality={90}
              sizes="60px"
            />
            <div className="flex flex-col">
              <p className="text-lg font-bold text-gray-900 whitespace-nowrap leading-tight">
                Brain And Life Hospital
              </p>
              <p className="text-[10px] text-gray-600 leading-tight">
                মানসিক রোগ ও মাদকাসক্তি চিকিৎসা কেন্দ্র
              </p>
            </div>
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6 text-gray-700" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-1 absolute left-1/2 -translate-x-1/2">
          <a
            href="./"
            className="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-sky-600 hover:bg-gray-50 transition-all duration-200"
          >
            {t("nav.home")}
          </a>
          <a
            href="./about"
            className="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-sky-600 hover:bg-gray-50 transition-all duration-200"
          >
            {t("nav.about")}
          </a>
          <a
            href="/services"
            className="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-sky-600 hover:bg-gray-50 transition-all duration-200"
          >
            {t("nav.services")}
          </a>
          <a
            href="/treatment"
            className="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-sky-600 hover:bg-gray-50 transition-all duration-200"
          >
            {t("nav.treatment")}
          </a>
          <a
            href="/contact"
            className="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-sky-600 hover:bg-gray-50 transition-all duration-200"
          >
            {t("nav.contact")}
          </a>
        </PopoverGroup>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://www.google.com/maps/place/BRAIN+AND+LIFE+HOSPITAL/@23.7530079,90.3853329,17z/data=!3m1!4b1!4m6!3m5!1s0x3755b8a492bd6b6b:0x4a64940b5bd018b3!8m2!3d23.753003!4d90.3879078!16s%2Fg%2F11byflh016?coh=277535&entry=tts&g_ep=EgoyMDI2MDExMS4wIPu8ASoKLDEwMDc5MjA3M0gBUAM%3D&skid=25f21306-4bdd-4a07-b733-d090c9bf79a8"
            className="px-4 py-2 text-xs text-slate-700 hover:text-sky-600 transition-colors max-w-[200px] text-right"
          >
            Crescent Plaza, 145/1 Green Road, Dhaka-1205
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            {t("nav.getHelp")}
          </a>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/40 backdrop-blur-md p-6 sm:max-w-sm border-l border-gray-200/50 shadow-xl">
          <div className="flex items-center justify-between mb-8">
            <a href="./" className="flex items-center gap-2">
              <span className="sr-only">Brain and Life</span>
              <Image
                src="/assets/brainandlifelogo.png"
                alt="Brain and Life Logo"
                width={50}
                height={40}
                className="h-auto"
                priority
                fetchPriority="high"
                quality={90}
                sizes="50px"
              />
              <div className="flex flex-col">
                <p className="text-sm font-bold text-gray-900 leading-tight">
                  Brain And Life
                </p>
                <p className="text-[9px] text-gray-600 leading-tight">
                  Hospital
                </p>
              </div>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="space-y-1">
            <a
              href="./"
              className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-sky-600 transition-colors"
            >
              {t("nav.home")}
            </a>
            <a
              href="./about"
              className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-sky-600 transition-colors"
            >
              {t("nav.about")}
            </a>
            <a
              href="./services"
              className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-sky-600 transition-colors"
            >
              {t("nav.services")}
            </a>
            <a
              href="./treatment"
              className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-sky-600 transition-colors"
            >
              {t("nav.treatment")}
            </a>
            <a
              href="./contact"
              className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-sky-600 transition-colors"
            >
              {t("nav.contact")}
            </a>
            <div className="pt-4 mt-4 border-t border-gray-200">
              <a
                href="https://www.google.com/maps/place/BRAIN+AND+LIFE+HOSPITAL/@23.7530079,90.3853329,17z/data=!3m1!4b1!4m6!3m5!1s0x3755b8a492bd6b6b:0x4a64940b5bd018b3!8m2!3d23.753003!4d90.3879078!16s%2Fg%2F11byflh016?coh=277535&entry=tts&g_ep=EgoyMDI2MDExMS4wIPu8ASoKLDEwMDc5MjA3M0gBUAM%3D&skid=25f21306-4bdd-4a07-b733-d090c9bf79a8"
                className="block rounded-lg px-4 py-3 text-sm text-gray-700 hover:text-sky-600 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-start gap-2">
                  <span className="text-base">📍</span>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Hospital Location</p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Crescent Plaza, 145/1 Green Road, Dhaka-1205, Bangladesh
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="/contact"
                className="block w-full text-center rounded-full bg-sky-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 mt-4"
              >
                {t("nav.getHelp")}
              </a>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
