'use client';
import Link from "next/link";
import React, { useState } from "react";

const projectCategories = [
  { label: "Robotics", href: "/#projects-robotics-projects" },
  { label: "Electrical", href: "/#projects-electrical-engineering-projects" },
  { label: "Software", href: "/#projects-software-engineering-projects" },
];

const Navigation = () => {
  const [projectOpen, setProjectOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-gray-900 py-4 border-b border-gray-700 flex justify-center z-20">
      <nav>
        <ul className="flex gap-12 text-lg">
          <li>
            <Link
              href="#about"
              className="hover:text-green-400 transition-opacity duration-300 hover:opacity-70"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#education"
              className="hover:text-green-400 transition-opacity duration-300 hover:opacity-70"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              href="#education"
              className="hover:text-green-400 transition-opacity duration-300 hover:opacity-70"
            >
              Awards
            </Link>
          </li>
          <li className="relative">
            <button
              className="hover:text-green-400 transition-opacity duration-300 hover:opacity-70"
              onClick={() => setProjectOpen((v) => !v)}
              onBlur={() => setTimeout(() => setProjectOpen(false), 150)}
            >
              Projects
            </button>
            {projectOpen && (
              <ul className="absolute left-0 mt-2 bg-gray-800 rounded shadow-lg min-w-[160px] z-50">
                {projectCategories.map((cat) => (
                  <li key={cat.label}>
                    <Link
                      href={cat.href}
                      className="block px-4 py-2 text-white hover:bg-green-700 hover:text-white transition"
                      onClick={() => setProjectOpen(false)}
                    >
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {/* <li>
            <Link
              href="#awards"
              className="hover:text-green-400 transition-opacity duration-300 hover:opacity-70"
            >
              Awards
            </Link>
          </li> */}

          <li>
            <Link
              href="#skills"
              className="hover:text-green-400 transition-opacity duration-300 hover:opacity-70"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-green-400 transition-opacity duration-300 hover:opacity-70"
            >
              Contact
            </Link>
          </li>
          {/* <li><Link href="#experiences" className="hover:text-green-400 transition-opacity duration-300 hover:opacity-70">Work Experiences</Link></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;