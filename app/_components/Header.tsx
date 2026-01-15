"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center p-6 lg:px-8 relative"
      >
        <div className="flex align-items-center">
          <a
            href="./"
            className="-m-1.5 p-1.5 container flex items-center gap-3"
          >
            <span className="sr-only">Brain and Life</span>
            <Image
              src="/assets/brainandlifelogo.png"
              alt="Brain and Life Logo"
              width={70}
              height={50}
            />
            <div className="flex flex-col">
              <p className="text-xl font-bold text-gray-100 whitespace-nowrap text-center">
                Brain And Life Hospital
              </p>
              <p className="text-xs text-gray-100 text-center">
                মানসিক রোগ ও মাদকাসক্তি চিকিৎসা কেন্দ্র
              </p>
            </div>
          </a>
        </div>

        <div className="flex lg:hidden ml-auto">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 absolute left-1/2 -translate-x-1/2">
          <a href="./" className="text-lg/6 font-semibold text-gray-100">
            Home
          </a>
          <a href="./about" className="text-lg/6 font-semibold text-gray-100">
            About Us
          </a>
          <a href="/services" className="text-lg/6 font-semibold text-gray-100">
            Services
          </a>
          <a
            href="/treatment"
            className="text-lg/6 font-semibold text-gray-100"
          >
            Treatment
          </a>
          <a href="/contact" className="text-lg/6 font-semibold text-gray-100">
            Contact
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex ml-auto text-gray-100">
          <a href="https://www.google.com/maps/place/BRAIN+AND+LIFE+HOSPITAL/@23.7530079,90.3853329,17z/data=!3m1!4b1!4m6!3m5!1s0x3755b8a492bd6b6b:0x4a64940b5bd018b3!8m2!3d23.753003!4d90.3879078!16s%2Fg%2F11byflh016?coh=277535&entry=tts&g_ep=EgoyMDI2MDExMS4wIPu8ASoKLDEwMDc5MjA3M0gBUAM%3D&skid=25f21306-4bdd-4a07-b733-d090c9bf79a8">
            <p className="text-sm w-50 text-center">
              Crescent Plaza, 145/1 Green Road, Dhaka-1205, Bangladesh.
            </p>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/assetts/brainandlifelogo.png"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                <a
                  href="./"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  Home
                </a>
                <a
                  href="./about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  About
                </a>
                <a
                  href="./services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  Services
                </a>
                <a
                  href="./treatment"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  Treatment
                </a>
                <a
                  href="./contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
