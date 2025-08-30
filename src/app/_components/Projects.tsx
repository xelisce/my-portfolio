'use client';
import React from "react";
import projectsData from "@/app/_data/projects";
import Image from "next/image";
import Link from "next/link";

// Utility to create anchor-friendly IDs
const toAnchorId = (category: string) =>
  "projects-" +
  category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const Projects = () => (
  <section id="projects" className="py-24 px-6">
    <h2 className="text-5xl font-bold text-green-400 text-center mb-12 opacity-0 animate-fadeIn">Projects</h2>
    
    {Object.entries(projectsData).map(([category, projects], index) => {
      const anchorId = toAnchorId(category);
      return (
        <div key={index} className="mb-16">
          {/* Anchor for category */}
          <span id={anchorId} className="block -mt-24 pt-24" aria-hidden="true"></span>
          <h3 className="text-4xl font-semibold text-green-400 text-center mb-8 opacity-0 animate-fadeIn">
            {category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <Link
                key={i}
                href={`/projects/${project.slug}`}
                className="p-6 bg-gray-800 rounded-xl shadow-lg hover:opacity-70 transition-opacity duration-300 flex flex-col"
              >
                <Image src={project.src} width={400} height={300} className="rounded-lg" alt={project.title} />
                <h4 className="text-2xl font-semibold text-white mt-4">{project.title}</h4>
                <p className="text-gray-400">{project.description}</p>
                
                {/* Skills tags */}
                {project.skills && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.skills.map((skill: string, idx: number) => (
                      <span
                        key={idx}
                        className="bg-green-900 text-green-300 text-xs px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Tech stack tags */}
                {project.techStack && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="bg-purple-900 text-purple-300 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      );
    })}
  </section>
);

export default Projects;