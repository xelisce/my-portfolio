"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => (
  <section id="about" className="py-24 px-6">
    <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
      {/* Text Section */}
      <div className="mb-6 md:mr-12">
        <h2 className="text-5xl font-bold text-green-400 opacity-0 animate-fadeIn">
          About Me
        </h2>
        <p className="mt-6 text-gray-400 text-xl max-w-3xl mx-auto opacity-0 animate-fadeIn delay-200">
          Hello! I&apos;m Celeste, a Year 3 Computer Engineering student at the
          National University of Singapore (NUS), graduating in 2027 with a
          B.Eng and continuing on to a Master&apos;s in 2028.
          <br />
          <br />I started coding and tinkering with robotics from a young age,
          from early robotics projects, to robotics clubs, and eventually
          representing Singapore at international competitions. Over time, I’ve
          developed a passion for building reliable systems that bridge{" "}
          <b>software, hardware, and real-world applications</b>. Click{" "}
          <Link href={"#education"} className="text-green-600/80">
            <span className="hover:underline hover:text-green-500">here</span>
          </Link>{" "}
          for more information.
          <br />
          <br />
          At NUS, I have worked extensively on autonomous robotic systems across
          underwater and aerial platforms. I contributed to the development of
          an autonomous MiniAUV that competed at RoboSub 2025, and I am
          currently working on an undergraduate research project to build a{" "}
          <b>fully autonomous drone</b> for SAFMC 2026.
          <br />
          <br />
          Beyond system integration, I enjoy working close to the hardware. I
          designed and built a <b>custom Electronic Speed Controller (ESC)</b>,
          handling power electronics design, PCB layout, motor control logic,
          and embedded firmware development. From low-level motor commutation to
          high-level autonomy, I enjoy engineering systems end-to-end —
          especially where{" "}
          <b>
            control theory, embedded systems, and intelligent software intersect
          </b>
          .
          <br />
          <br />I am looking to work in fast-paced, collaborative environments
          and enjoy tackling problems that{" "}
          <b>challenge me to design and build across every layer of a system</b>
          .
        </p>
      </div>

      {/* Profile Picture Section */}
      <div className="relative">
        <div className="w-48 h-48 rounded-full border-8 border-green-400 shadow-lg transform -translate-z-2">
          <Image
            src="/about_pic.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-green-500 to-green-700 rounded-full opacity-40"></div>
      </div>
    </div>
  </section>
);

export default About;