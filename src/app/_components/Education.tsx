'use client'
import React from "react";
import educationData from "@/app/_data/education";

const Education = () => (
  <section id="education" className="py-24 px-6">
    <h2 className="text-5xl font-bold text-green-400 text-center mb-12 opacity-0 animate-fadeIn">Education</h2>
    <div className="relative max-w-4xl mx-auto grid grid-cols-2 gap-6">
      {educationData.map((item, index) => (
        <React.Fragment key={index}>
          {/* Awards List */}
          <div className="text-right pr-6 border-r border-green-500">
            <div className="text-xl text-green-400 font-semibold">{item.year}</div>
            <ul className="text-gray-400">
              {item.awards.length > 0 ? item.awards.map((award) => (
                <li key={`${item.year}-${award}`}>
                  <a href={`#award-${award.replace(/\s+/g, '-').toLowerCase()}`} className="text-green-400 hover:underline">{award}</a>
                </li>
              )) : <li>No awards</li>}
            </ul>
          </div>
          {/* Education Details */}
          <div className="pl-6">
            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
            {item.description.split('\n').map((line, i) => (
              <p key={`${item.year}-desc-${i}`} className="text-gray-400">{line}</p>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  </section>
);

export default Education;