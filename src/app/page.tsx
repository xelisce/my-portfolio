'use client';
import React, { useEffect } from "react";
import Hero from "@/app/_components/Hero";
import Banner from "@/app/_components/Banner";
import About from "@/app/_components/About";
import Navigation from "@/app/_components/Navigation";
// import Awards from "@/app/_components/Awards";
import Projects from "@/app/_components/Projects";
// import Education from "@/app/_components/Education";
import Contact from "@/app/_components/Contact";
import Education from "./_components/Education";
import Skills from "./_components/Skills";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Banner />
      <Hero />
      <Navigation />
      <About />
      <Education />
      <Projects />
      {/* <Awards /> */}
      <Skills />

      <Contact />
    </div>
  );
}
