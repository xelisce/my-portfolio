"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => (
    <section id="about" className="py-24 px-6">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
          {/* Text Section */}
          <div className="mb-6 md:mr-12">
            <h2 className="text-5xl font-bold text-green-400 opacity-0 animate-fadeIn">About Me</h2>
            <p className="mt-6 text-gray-400 text-xl max-w-3xl mx-auto opacity-0 animate-fadeIn delay-200">
              Hello! I am a Year 1 Computer Engineering student studying in NUS, graduating in 2027. 
              I&apos;m currently doing a 3 year B.Eng followed by a 1 year Masters in 2027-2028.
              <br/><br />
              From the age of 6, I&apos;ve been doing some form of coding. 
              From building Lego Mindstorms robots in kindergarten and drones in primary school, 
              to becoming part of Infocomm Club Exco in secondary school, 
              and finally to robotics club in JC, I have a wide range of experiences. 
              Click <Link href={"#education"} className="text-green-600/80">
                <span className="hover:underline hover:text-green-500">here</span>
              </Link> for more information.
              <br /><br />
              I&apos;m always excited to learn more, and I am able to pick up new skills fast. 
              Currently, 
            </p>
          </div>

          {/* Profile Picture Section */}
          <div className="relative">
            <div className="w-48 h-48 rounded-full border-8 border-green-400 shadow-lg transform -translate-z-2">
              <Image src="/hero_pic.jpg" alt="Profile Picture" width={200} height={200} className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-green-500 to-green-700 rounded-full opacity-40"></div>
          </div>
        </div>
      </section>
);

export default About;