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
          from early robotics projects, to robotics clubs, and then eventually
          to representing Singapore at international competitions. Over time,
          I’ve developed a passion for building reliable systems that bridge{" "}
          {"  "}
          <b>software, hardware, and real-world applications</b>. Click{" "}
          <Link href={"#education"} className="text-green-600/80">
            <span className="hover:underline hover:text-green-500">here</span>
          </Link>{" "}
          for more information.
          <br />
          <br />
          At NUS, I’ve been involved with{" "}
          <b>
            <Link href={"https://bumblebee.sg/"} className="text-green-600/80">
              <span className="hover:underline hover:text-green-500">
                Team Bumblebee
              </span>
            </Link>
          </b>
          , first as Software Subteam Lead for HornetX and later contributing to
          the <b>MiniAUV</b>, which went on to compete at <b>RoboSub 2025</b>. I
          am currently working on an undergraduate research project to build a
          <b>fully autonomous drone</b> for <b>SAFMC 2026</b>, further
          developing my expertise in robotics, embedded systems, and intelligent
          control.
          <br />
          <br />
          Across these projects — underwater, land, and aerial — the common
          thread has been <b>autonomy</b>, building robots capable of sensing,
          decision-making, and autonomous action. I also enjoy the electronics
          that power these systems, from creating and working with{" "}
          <b>ICs and PCBs to FPGA-based designs</b>, and the challenge of
          integrating hardware with intelligent software. I am looking to work
          in fast-paced, collaborative environments and enjoy tackling problems
          that{" "}
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