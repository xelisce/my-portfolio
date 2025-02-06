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
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-6xl font-extrabold text-blue-400 mb-4 opacity-0 animate-fadeIn">Celeste Tan</h1>
        <p className="text-2xl text-gray-400 mb-6 opacity-0 animate-fadeIn delay-200">Computer Engineer & Software Engineer</p>
        <div className="flex gap-6">
          <a href="#projects" className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:opacity-70 transition-opacity duration-300">View Projects</a>
          <a href="#contact" className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg text-lg font-semibold hover:bg-blue-500 hover:text-white hover:opacity-70 transition-all duration-300">Contact Me</a>
        </div>
      </section>

      {/* Navigation */}
      <header className="sticky top-0 bg-gray-900 py-4 border-b border-gray-700 flex justify-center">
        <nav>
          <ul className="flex gap-12 text-lg">
            <li><Link href="#about" className="hover:text-blue-400 transition-opacity duration-300 hover:opacity-70">About</Link></li>
            <li><Link href="#projects" className="hover:text-blue-400 transition-opacity duration-300 hover:opacity-70">Projects</Link></li>
            <li><Link href="#blog" className="hover:text-blue-400 transition-opacity duration-300 hover:opacity-70">Blog</Link></li>
            <li><Link href="#contact" className="hover:text-blue-400 transition-opacity duration-300 hover:opacity-70">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 text-center px-6">
        <h2 className="text-5xl font-bold text-blue-400 opacity-0 animate-fadeIn">About Me</h2>
        <p className="mt-6 text-gray-400 text-xl max-w-3xl mx-auto opacity-0 animate-fadeIn delay-200">I am a passionate full-stack developer specializing in modern web technologies, crafting elegant user interfaces and powerful backend solutions.</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <h2 className="text-5xl font-bold text-blue-400 text-center mb-12 opacity-0 animate-fadeIn">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg transition-opacity duration-300 hover:opacity-70">
            <Image src="/project1.jpg" width={400} height={300} className="rounded-lg" alt="Project 1" />
            <h3 className="text-2xl font-semibold text-white mt-4">Project 1</h3>
            <p className="text-gray-400">A brief description of the project.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg transition-opacity duration-300 hover:opacity-70">
            <Image src="/project2.jpg" width={400} height={300} className="rounded-lg" alt="Project 2" />
            <h3 className="text-2xl font-semibold text-white mt-4">Project 2</h3>
            <p className="text-gray-400">A brief description of the project.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="py-24 text-center px-6">
        <h2 className="text-5xl font-bold text-blue-400 opacity-0 animate-fadeIn">Contact</h2>
        <p className="mt-6 text-gray-400 text-xl opacity-0 animate-fadeIn delay-200">Feel free to reach out via email.</p>
        <a href="mailto:quimbelto@gmail.com" className="text-blue-400 text-xl font-semibold underline hover:opacity-70 transition-opacity duration-300">quimbelto@gmail.com</a>
      </section> */}

      <section id="contact" className="py-24 text-center px-6">
        <h2 className="text-5xl font-bold text-blue-400 opacity-0 animate-fadeIn">Contact</h2>
        <p className="mt-6 text-gray-400 text-xl opacity-0 animate-fadeIn delay-200">Feel free to reach out through any of the following options:</p>
        
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Email Card */}
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:opacity-70 transition-opacity duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">Email</h3>
            <p className="text-gray-400 text-xl">
              <a href="mailto:quimbelto@gmail.com" className="text-blue-400 font-semibold underline hover:opacity-70 transition-opacity duration-300">
                quimbelto@gmail.com
              </a>
            </p>
          </div>

          {/* Phone Card */}
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:opacity-70 transition-opacity duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">Phone</h3>
            <p className="text-gray-400 text-xl">
              <a href="tel:+6591687703" className="text-blue-400 font-semibold underline hover:opacity-70 transition-opacity duration-300">
                +65 9168 7703
              </a>
            </p>
          </div>

          {/* LinkedIn Card */}
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:opacity-70 transition-opacity duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">LinkedIn</h3>
            <p className="text-gray-400 text-xl">
              <a href="https://www.linkedin.com/in/celeste-tan-67a742166/" target="_blank" className="text-blue-400 font-semibold underline hover:opacity-70 transition-opacity duration-300">
                View Profile
              </a>
            </p>
          </div>

          {/* GitHub Card */}
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:opacity-70 transition-opacity duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">GitHub</h3>
            <p className="text-gray-400 text-xl">
              <a href="https://github.com/xelisce" target="_blank" className="text-blue-400 font-semibold underline hover:opacity-70 transition-opacity duration-300">
                Visit GitHub
              </a>
            </p>
          </div>
        </div>
      </section>


    </div>
  );
}
