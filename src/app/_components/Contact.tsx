"use client";
import React from "react";
import Image from "next/image";

const Contact = () => (
  // <section id="contact" className="py-24 text-center px-6">
  //   <h2 className="text-5xl font-bold text-green-400 opacity-0 animate-fadeIn">Contact</h2>
  //   <p className="mt-6 text-gray-400 text-xl opacity-0 animate-fadeIn delay-200">Feel free to reach out through any of the following options:</p>

  //   <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  //     {/* Email Card */}
  //     <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:opacity-70 transition-opacity duration-300">
  //       <h3 className="text-2xl font-semibold text-white mb-4">Email</h3>
  //       <p className="text-gray-400 text-xl">
  //         <a href="mailto:quimbelto@gmail.com" className="text-green-400 font-semibold underline hover:opacity-70 transition-opacity duration-300">
  //           quimbelto@gmail.com
  //         </a>
  //       </p>
  //     </div>

  //     {/* Phone Card */}
  //     <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:opacity-70 transition-opacity duration-300">
  //       <h3 className="text-2xl font-semibold text-white mb-4">Phone</h3>
  //       <p className="text-gray-400 text-xl">
  //         <a href="tel:+6591687703" className="text-green-400 font-semibold underline hover:opacity-70 transition-opacity duration-300">
  //           +65 9168 7703
  //         </a>
  //       </p>
  //     </div>

  //     {/* LinkedIn Card */}
  //     <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:opacity-70 transition-opacity duration-300">
  //       <h3 className="text-2xl font-semibold text-white mb-4">LinkedIn</h3>
  //       <p className="text-gray-400 text-xl">
  //         <a href="https://www.linkedin.com/in/celeste-tan-67a742166/" target="_blank" className="text-green-400 font-semibold underline hover:opacity-70 transition-opacity duration-300">
  //           View Profile
  //         </a>
  //       </p>
  //     </div>

  //     {/* GitHub Card */}
  //     <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:opacity-70 transition-opacity duration-300">
  //       <h3 className="text-2xl font-semibold text-white mb-4">GitHub</h3>
  //       <p className="text-gray-400 text-xl">
  //         <a href="https://github.com/xelisce" target="_blank" className="text-green-400 font-semibold underline hover:opacity-70 transition-opacity duration-300">
  //           Visit GitHub
  //         </a>
  //       </p>
  //     </div>
  //   </div>
  //   {/* Download Resume Button */}
  //   <div className="mt-8">
  //     <a
  //       href="/Resume_2025.pdf"  // Place the path to your resume file here
  //       download="Celeste_Tan_Resume.pdf"
  //       className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:opacity-70 transition-opacity duration-300"
  //     >
  //       Download Resume
  //     </a>
  //   </div>

  // </section>

  <section id="contact" className="py-6 px-3 bg-gray-800 text-center">
    <h2 className="text-3xl font-bold text-green-400 mb-3">Get in Touch</h2>
    <div className="max-w-4xl mx-auto flex justify-center space-x-6">
      <a
        href="mailto:contact@example.com"
        className="flex flex-col items-center text-white hover:text-green-400 transition"
      >
        <Image src="/email-icon.png" width={30} height={30} alt="Email Icon" />
        <span className="text-sm mt-1">contact@example.com</span>
      </a>
      <a
        href="tel:+1234567890"
        className="flex flex-col items-center text-white hover:text-green-400 transition"
      >
        <Image src="/phone-icon.png" width={30} height={30} alt="Phone Icon" />
        <span className="text-sm mt-1">+123 456 7890</span>
      </a>
      <a
        href="https://goo.gl/maps/example"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-white hover:text-green-400 transition"
      >
        <Image
          src="/address-icon.png"
          width={30}
          height={30}
          alt="Address Icon"
        />
        <span className="text-sm mt-1">123 Example Street, City, Country</span>
      </a>
    </div>
  </section>
);

export default Contact;
