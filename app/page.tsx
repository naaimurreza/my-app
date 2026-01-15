import Image from "next/image";
import Banner from "./_components/Banner";
import React from "react";
import { Hero } from "./_components/Hero";
import { SolutionStep } from "./_components/SolutionStep";
import { ConsultSolution } from "./_components/ConsultSolution";
import { Staff } from "./_components/Staff";
import { Metadata } from "next";

export const metadate: Metadata = {
  title: 'Brain And Life Hospital - Home',
  description: 'Welcome to Brain And Life Hospital, your trusted destination for comprehensive mental health care. Our dedicated team of professionals is committed to providing compassionate, evidence-based treatment in a safe and supportive environment. Discover a path to healing and resilience with us.',
  keywords: ['Mental Hospital, Mental Health', 'Psychiatric Care', 'Therapy', 'Counseling', 'Brain And Life Hospital', 'Mental Wellness', 'Behavioral Health', 'Psychologists', 'Psychiatrists', 'Supportive Care'],
  openGraph: {
    title: 'Brain And Life Hospital - Home',
    description: 'Welcome to Brain And Life Hospital, your trusted destination for comprehensive mental health care. Our dedicated team of professionals is committed to providing compassionate, evidence-based treatment in a safe and supportive environment. Discover a path to healing and resilience with us.',
    images: [
      {
        url: '/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Brain And Life Hospital',
      },
    ],
  },
  facebook: {
    appId: '1234567890',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      nosnippet: false,
    }
  },
  alternates: {
    canonical: 'https://brainandlifehospital.com/',
  }
}

export default function Home() {
  return (
    <>
    <div className="container mx-auto p-6 lg:px-8">
      <Hero />
      <Banner />
      <SolutionStep />
      <ConsultSolution/>
      <Staff/>

    </div>
    </>
  );
}
