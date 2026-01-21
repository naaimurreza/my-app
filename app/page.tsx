import { Metadata } from "next";
import HeroSection from "./_components/HeroSection";
import MDMessageSection from "./_components/MDMessageSection";
import SpecialistPsychiatristsSection from "./_components/SpecialistPsychiatristsSection";
import EasyStepsSection from "./_components/EasyStepsSection";
import DoctorsCarouselSection from "./_components/DoctorsCarouselSection";
import StaffSection from "./_components/StaffSection";
import CallToActionSection from "./_components/CallToActionSection";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Brain And Life Hospital, your trusted destination for comprehensive mental health care in Bangladesh. Expert psychiatrists, 24/7 emergency support, addiction treatment, and compassionate care for mental wellness.",
  keywords: [
    "mental health hospital Bangladesh",
    "psychiatric care Dhaka",
    "addiction treatment center",
    "mental health services",
    "psychiatrist consultation",
    "depression treatment",
    "anxiety therapy",
    "drug rehabilitation",
    "24/7 mental health support",
    "emergency psychiatric care",
  ],
  openGraph: {
    title: "Brain And Life Hospital - Mental Health & Addiction Treatment",
    description:
      "Comprehensive mental health care and addiction treatment in Bangladesh. Expert psychiatrists, 24/7 emergency support, and compassionate care.",
    url: "https://brainandlifehospital.com",
    siteName: "Brain And Life Hospital",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brain And Life Hospital - Mental Health Care",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brain And Life Hospital - Mental Health & Addiction Treatment",
    description:
      "Comprehensive mental health care and addiction treatment in Bangladesh.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://brainandlifehospital.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      <HeroSection />
      <MDMessageSection />
      <SpecialistPsychiatristsSection />
      <EasyStepsSection />
      <DoctorsCarouselSection />
      <StaffSection />
      <CallToActionSection />
    </main>
  );
}
