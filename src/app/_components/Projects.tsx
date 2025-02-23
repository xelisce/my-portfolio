'use client';
import React from "react";
import projectsData from "@/app/_data/projects";
import Image from "next/image";

const Projects = () => (
  <section id="projects" className="py-24 px-6">
    <h2 className="text-5xl font-bold text-green-400 text-center mb-12 opacity-0 animate-fadeIn">Projects</h2>
    
    {Object.entries(projectsData).map(([category, projects], index) => (
      <div key={index} className="mb-16">
        <h3 className="text-4xl font-semibold text-green-400 text-center mb-8 opacity-0 animate-fadeIn">{category}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="p-6 bg-gray-800 rounded-xl shadow-lg hover:opacity-70 transition-opacity duration-300">
              <Image src={project.src} width={400} height={300} className="rounded-lg" alt={project.title} />
              <h4 className="text-2xl font-semibold text-white mt-4">{project.title}</h4>
              <p className="text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default Projects;