'use client'
import React from "react"
import educationData from "@/app/_data/education";

const Awards = () => (
  <section id="awards" className="py-8 px-4 bg-gray-800">
    <h2 className="text-4xl font-bold text-green-400 text-center mb-4">Awards</h2>
    <div className="max-w-4xl mx-auto text-left text-lg text-gray-300">
      <ul className="list-disc pl-5 space-y-2">
        {educationData.flatMap((item) => item.awards.map((award) => (
          <li key={`${item.year}-${award}`} id={`award-${award.replace(/\s+/g, '-').toLowerCase()}`} className="hover:text-green-400 transition">
            <a href="#education" className="text-white hover:underline">{award} ({item.year})</a>
          </li>
        )))}
      </ul>
    </div>
  </section>
);

export default Awards;