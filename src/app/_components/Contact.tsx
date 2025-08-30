"use client";
import React from "react";
import Image from "next/image";

const Contact = () => (
  <section id="contact" className="py-6 px-3 bg-gray-800 text-center">
    <h2 className="text-3xl font-bold text-green-400 mb-8">Get in Touch</h2>
    <div className="max-w-4xl mx-auto flex justify-center gap-12 flex-wrap">
      {/* Email */}
      <a
        href="mailto:quimbelto@gmail.com"
        className="flex flex-col items-center text-white hover:text-green-400 transition mb-4"
      >
        <Image src="/icons/mail_icon.png" width={30} height={30} alt="Email Icon" />
        <span className="text-sm mt-1">quimbelto@gmail.com</span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/6591687703"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-white hover:text-green-400 transition mb-4"
      >
        <Image src="/icons/whatsapp_icon.svg" width={30} height={30} alt="WhatsApp Icon" />
        <span className="text-sm mt-1">+65 9168 7703</span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/celeste-tan-67a742166/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-white hover:text-green-400 transition mb-4"
      >
        <Image src="/icons/linkedin_icon.svg" width={30} height={30} alt="LinkedIn Icon" />
        <span className="text-sm mt-1">LinkedIn</span>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/xelisce"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-white hover:text-green-400 transition mb-4"
      >
        <Image src="/icons/github_icon.svg" width={30} height={30} alt="GitHub Icon" />
        <span className="text-sm mt-1">GitHub</span>
      </a>
    </div>
    {/* Download Resume Button */}
    <div className="mt-8">
      <a
        href="/Resume_2025.pdf"
        download="Celeste_Tan_Resume.pdf"
        className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:opacity-70 transition-opacity duration-300"
      >
        Download Resume
      </a>
    </div>
  </section>
);

export default Contact;
