'use client'
import React, { useState } from "react";
import educationData from "@/app/_data/education";
import Link from "next/link";

const Education = () => (
  <section id="education" className="py-24 px-6">
    <h2 className="text-5xl font-bold text-green-400 text-center mb-12 opacity-0 animate-fadeIn">
      Education
    </h2>
    <div className="relative max-w-4xl mx-auto grid grid-cols-2 gap-6">
      {educationData.map((item, index) => (
        <React.Fragment key={index}>
          {/* Awards List */}
          <div className="text-right pr-6 border-r border-green-500">
            <div className="text-xl text-green-400 font-semibold">
              {item.year}
            </div>
            <ul className="text-gray-400">
              {item.awards.length > 0 ? (
                item.awards.map((award, idx) => (
                  <li key={`${item.year}-${award.name}-${idx}`}>
                    {"projectSlug" in award && award.projectSlug ? (
                      <Link
                        href={`/projects/${award.projectSlug}`}
                        className="text-green-400 hover:underline"
                      >
                        {award.name}
                      </Link>
                    ) : (
                      <span>{award.name}</span>
                    )}
                  </li>
                ))
              ) : (
                <li>No awards</li>
              )}
            </ul>
          </div>
          {/* Education Details */}
          <div className="pl-6">
            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
            {item.description.split("\n").map((line, i) => (
              <p key={`${item.year}-desc-${i}`} className="text-gray-400">
                {line}
              </p>
            ))}
            {/* Relevant Coursework for NUS */}
            {item.title
              .toLowerCase()
              .includes("national university of singapore") && (
              <CollapsibleCoursework />
            )}
            {/* Less Relevant Coursework NUS */}
            {item.title
              .toLowerCase()
              .includes("national university of singapore") && (
              <CollapsibleLessRelevantCoursework />
            )}
            {/* Experiences for NUS */}
            {item.title
              .toLowerCase()
              .includes("national university of singapore") && (
              <CollapsibleExperiences />
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  </section>
);

// Collapsible Coursework Component
const CollapsibleCoursework = () => {
  const [open, setOpen] = useState(true); // Default open

  return (
    <div className="mt-4">
      <button
        className="text-green-400 text-sm font-semibold mb-2 flex items-center focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="coursework-list"
      >
        <span>Relevant Coursework</span>
        <svg
          className={`ml-2 w-4 h-4 transition-transform ${
            open ? "rotate-90" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {open && (
        <div id="coursework-list" className="space-y-2">
          {/* Hardware & Systems Section */}
          <div>
            <h5 className="text-green-300 text-xs font-bold mb-1">
              Hardware, Systems & Signals
            </h5>
            <ul className="list-disc list-inside text-gray-300 text-xs grid grid-cols-1 gap-y-0">
              <li className="mb-0">
                CG1111A Engineering Principles & Practices I
              </li>
              <li className="mb-0">
                CG2111A Engineering Principles & Practices II
              </li>
              <li className="mb-0">EE2026 Digital Design</li>
              <li className="mb-0">CG2271 Real-Time Operating Systems</li>
              <li className="mb-0">CG2027 Transistor-level Digital Circuits</li>
              <li className="mb-0">CG2028 Computer Organisation</li>
              <li className="mb-0">CG3207 Computer Architecture</li>
              <li className="mb-0">CG2023 Signals & Systems</li>
            </ul>
          </div>
          {/* Software & Intelligence Section */}
          <div>
            <h5 className="text-green-300 text-xs font-bold mb-1">
              Software, Algorithms & Intelligence
            </h5>
            <ul className="list-disc list-inside text-gray-300 text-xs grid grid-cols-1 gap-y-0">
              <li className="mb-0">CS2040C Data Structures and Algorithms</li>
              <li className="mb-0">EE2211 Introduction to Machine Learning</li>
              <li className="mb-0">MA1508E Linear Algebra for Engineering</li>
              <li className="mb-0">CS2113 Software Engineering & Object-Oriented Programming</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};


// Collapsible Experiences Component
const CollapsibleExperiences = () => {
  const [open, setOpen] = useState(false); // Default open

  return (
    <div className="mt-4">
      <button
        className="text-green-400 text-sm font-semibold mb-2 flex items-center focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="experiences-list"
      >
        <span>Relevant Experiences</span>
        <svg
          className={`ml-2 w-4 h-4 transition-transform ${
            open ? "rotate-90" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {open && (
        <div id="experiences-list" className="space-y-2">
          <div>
            <ul className="list-disc list-inside text-gray-300 text-xs grid grid-cols-1 gap-y-0">
              <li className="mb-0">
                Exchange to Korea University (Winter 2024)
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};


// Collapsible Less Relevant Coursework Component
const CollapsibleLessRelevantCoursework = () => {
  const [open, setOpen] = useState(false); // Default open

  return (
    <div className="mt-4">
      <button
        className="text-green-400 text-sm font-semibold mb-2 flex items-center focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="less-relevant-coursework-list"
      >
        <span>Other Coursework</span>
        <svg
          className={`ml-2 w-4 h-4 transition-transform ${
            open ? "rotate-90" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {open && (
        <div id="less-relevant-coursework-list" className="space-y-2">
          <div>
            <h5 className="text-green-300 text-xs font-bold mb-1">
              Mathematics & Computer Science
            </h5>
            <ul className="list-disc list-inside text-gray-300 text-xs grid grid-cols-1 gap-y-0">
              <li className="mb-0">CS1231 Discrete Structures</li>
              <li className="mb-0">CS1010 Programming Methodology</li>
              <li className="mb-0">MA1512 Differential Equations for Engineering</li>
              <li className="mb-0">EE2012 Analytical Methods in Electrical and Computer Engineering</li>
              <li className="mb-0">GEA1000 Quantitative Reasoning with Data</li>
            </ul>
          </div>
          <div>
            <h5 className="text-green-300 text-xs font-bold mb-1">
              Design
            </h5>
            <ul className="list-disc list-inside text-gray-300 text-xs grid grid-cols-1 gap-y-0">
              <li className="mb-0">EG1311 Design & Make</li>
              <li className="mb-0">DTK1234 Design Thinking</li>
            </ul>
          </div>
          <div>
            <h5 className="text-green-300 text-xs font-bold mb-1">
              Business
            </h5>
            <ul className="list-disc list-inside text-gray-300 text-xs grid grid-cols-1 gap-y-0">
              <li className="mb-0">PF1101 Fundamentals of Project Management</li>
              <li className="mb-0">BSP1702X Legal Environment of Business</li>
              <li className="mb-0">MKT1705X Principles of Marketing</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;