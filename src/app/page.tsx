'use client';
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">

      <div className="bg-green-600 text-white text-center py-4">
        <p className="text-lg font-semibold">I am currently looking for a Summer vacation internship opportunity from May &apos;25 to July &apos;25!</p>
      </div>

      {/* Hero Section with Parallax Background */}
      <section
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: "url('/hero_pic.jpg')",
          backgroundAttachment: 'fixed',  // This creates the parallax effect
          backgroundPosition: 'center',
          backgroundSize: 'cover',
         }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text readability */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 h-full">
          <h1 className="text-6xl font-extrabold text-green-500 mb-4 opacity-0 animate-fadeIn">Celeste Tan</h1>
          <p className="text-2xl text-gray-400 mb-6 opacity-0 animate-fadeIn delay-200">Computer Engineering</p>
          <div className="flex gap-6">
            <a href="#projects" className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:opacity-70 transition-opacity duration-300">View Projects</a>
            <a href="#contact" className="px-6 py-3 border border-green-500 text-green-500 rounded-lg text-lg font-semibold hover:bg-green-500 hover:text-white hover:opacity-70 transition-all duration-300">Contact Me</a>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <header className="sticky top-0 bg-gray-900 py-4 border-b border-gray-700 flex justify-center z-20">
        <nav>
          <ul className="flex gap-12 text-lg">
            <li><Link href="#about" className="hover:text-green-400 transition-opacity duration-300 hover:opacity-70">About</Link></li>
            <li><Link href="#projects" className="hover:text-green-400 transition-opacity duration-300 hover:opacity-70">Projects</Link></li>
            <li><Link href="#experiences" className="hover:text-green-400 transition-opacity duration-300 hover:opacity-70">Work Experiences</Link></li>
            <li><Link href="#awards" className="hover:text-green-400 transition-opacity duration-300 hover:opacity-70">Awards</Link></li>
            <li><Link href="#contact" className="hover:text-green-400 transition-opacity duration-300 hover:opacity-70">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* About Section */}
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

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <h2 className="text-5xl font-bold text-green-400 text-center mb-12 opacity-0 animate-fadeIn">Projects</h2>

        {/* Computer Engineering Projects Section */}
        <div className="mb-16">
          <h3 className="text-4xl font-semibold text-green-400 text-center mb-8 opacity-0 animate-fadeIn">Computer Engineering Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:opacity-70 transition-opacity duration-300">
              <Image src="/project3.jpg" width={400} height={300} className="rounded-lg" alt="Computer Project 1" />
              <h4 className="text-2xl font-semibold text-white mt-4">Project 1</h4>
              <p className="text-gray-400">A description of the computer engineering project.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:opacity-70 transition-opacity duration-300">
              <Image src="/project4.jpg" width={400} height={300} className="rounded-lg" alt="Computer Project 2" />
              <h4 className="text-2xl font-semibold text-white mt-4">Project 2</h4>
              <p className="text-gray-400">A description of the computer engineering project.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:opacity-70 transition-opacity duration-300">
              <Image src="/project4.jpg" width={400} height={300} className="rounded-lg" alt="Computer Project 2" />
              <h4 className="text-2xl font-semibold text-white mt-4">Project 2</h4>
              <p className="text-gray-400">A description of the computer engineering project.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:opacity-70 transition-opacity duration-300">
              <Image src="/project4.jpg" width={400} height={300} className="rounded-lg" alt="Computer Project 2" />
              <h4 className="text-2xl font-semibold text-white mt-4">Project 2</h4>
              <p className="text-gray-400">A description of the computer engineering project.</p>
            </div>
            {/* Add more Computer Engineering Projects here */}
          </div>
        </div>

        {/* Software Engineering Projects Section */}
        <div>
          <h3 className="text-4xl font-semibold text-green-400 text-center mb-8 opacity-0 animate-fadeIn">Software Engineering Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:opacity-70 transition-opacity duration-300">
              <Image src="/project1.jpg" width={400} height={300} className="rounded-lg" alt="Software Project 1" />
              <h4 className="text-2xl font-semibold text-white mt-4">VIAWiki</h4>
              <p className="text-gray-400">A centralised database of Singapore student-led service projects</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:opacity-70 transition-opacity duration-300">
              <Image src="/project2.jpg" width={400} height={300} className="rounded-lg" alt="Software Project 2" />
              <h4 className="text-2xl font-semibold text-white mt-4">Project 2</h4>
              <p className="text-gray-400">A description of the software engineering project.</p>
            </div>
            {/* Add more Software Engineering Projects here */}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-24 text-center px-6">
        <h2 className="text-5xl font-bold text-green-400 opacity-0 animate-fadeIn">Contact</h2>
        <p className="mt-6 text-gray-400 text-xl opacity-0 animate-fadeIn delay-200">Feel free to reach out through any of the following options:</p>
        
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Email Card */}
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:opacity-70 transition-opacity duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">Email</h3>
            <p className="text-gray-400 text-xl">
              <a href="mailto:quimbelto@gmail.com" className="text-green-400 font-semibold underline hover:opacity-70 transition-opacity duration-300">
                quimbelto@gmail.com
              </a>
            </p>
          </div>

          {/* Phone Card */}
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:opacity-70 transition-opacity duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">Phone</h3>
            <p className="text-gray-400 text-xl">
              <a href="tel:+6591687703" className="text-green-400 font-semibold underline hover:opacity-70 transition-opacity duration-300">
                +65 9168 7703
              </a>
            </p>
          </div>

          {/* LinkedIn Card */}
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:opacity-70 transition-opacity duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">LinkedIn</h3>
            <p className="text-gray-400 text-xl">
              <a href="https://www.linkedin.com/in/celeste-tan-67a742166/" target="_blank" className="text-green-400 font-semibold underline hover:opacity-70 transition-opacity duration-300">
                View Profile
              </a>
            </p>
          </div>

          {/* GitHub Card */}
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:opacity-70 transition-opacity duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">GitHub</h3>
            <p className="text-gray-400 text-xl">
              <a href="https://github.com/xelisce" target="_blank" className="text-green-400 font-semibold underline hover:opacity-70 transition-opacity duration-300">
                Visit GitHub
              </a>
            </p>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="mt-8">
          <a
            href="/Resume_2025.pdf"  // Place the path to your resume file here
            download="Celeste_Tan_Resume.pdf"
            className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:opacity-70 transition-opacity duration-300"
          >
            Download Resume
          </a>
        </div>
      </section>


    </div>
  );
}
