import Image from "next/image";
import Banner from "./_components/Banner";
import React from "react";
import { Hero } from "./_components/Hero";
import { SolutionStep } from "./_components/SolutionStep";
import { ConsultSolution } from "./_components/ConsultSolution";
import { Staff } from "./_components/Staff";

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
