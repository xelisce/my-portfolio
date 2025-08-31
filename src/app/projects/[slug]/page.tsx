import React from "react";
import projectsData from "@/app/_data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Block } from "@/app/_components/Block";
import Link from "next/link";

export async function generateStaticParams() {
  return Object.values(projectsData)
    .flat()
    .map((project) => ({ slug: project.slug }));
}

const findProjectBySlug = (slug: string) => {
  for (const category of Object.values(projectsData)) {
    const project = category.find((p) => p.slug === slug);
    if (project) return project;
  }
  return null;
};

export default async function ProjectSlugPage(
{ params }: 
{ 
  params: Promise<{ slug: string }>
}) {
  const project = findProjectBySlug((await params).slug);

  if (!project) return notFound();

  return (
    <div className="bg-gray-800 min-h-screen py-8">
      <section className="max-w-3xl mx-auto bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        {/* Banner Image with Back Button overlay */}
        <div className="relative w-full h-80">
          {/* Back Button */}
          <div className="absolute top-4 left-4 z-10">
            <Link
              href="/#projects"
              className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-semibold transition bg-gray-900/70 px-3 py-1 rounded"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Projects
            </Link>
          </div>
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <h1 className="absolute bottom-4 left-6 text-4xl font-bold text-white drop-shadow-lg">
            {project.title}
          </h1>
          <span className="absolute top-4 right-6 text-xs text-gray-300 bg-gray-800/70 px-3 py-1 rounded">
            {project.start ?? ""} – {project.end ?? ""}
          </span>
        </div>
        {/* Content Blocks */}
        <div className="p-8 space-y-6">
          {(project.blocks as Block[])?.map((block: Block, idx: number) => {
            if (block.type === "image") {
              return (
                <div key={idx} className="w-full flex flex-col items-center">
                  <Image
                    src={block.src}
                    alt={block.alt || ""}
                    width={600}
                    height={350}
                    className="rounded-lg shadow-md object-contain max-h-80"
                  />
                  {block.caption && (
                    <span className="text-xs text-gray-400 mt-2">
                      {block.caption}
                    </span>
                  )}
                </div>
              );
            }
            if (block.type === "video") {
              return (
                <div key={idx} className="w-full flex flex-col items-center">
                  <video
                    controls
                    className="rounded-lg shadow-md max-h-80 w-full"
                    style={{ maxWidth: 600 }}
                  >
                    <source src={block.src} />
                    Your browser does not support the video tag.
                  </video>
                  {block.caption && (
                    <span className="text-xs text-gray-400 mt-2">
                      {block.caption}
                    </span>
                  )}
                </div>
              );
            }
            if (block.type === "paragraph") {
              return (
                <p
                  key={idx}
                  className="text-gray-200 text-base leading-relaxed"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {block.text}
                </p>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote
                  key={idx}
                  className="border-l-4 border-green-400 pl-4 italic text-gray-400 my-4"
                >
                  “{block.text}”
                  {block.author && (
                    <footer className="text-xs text-gray-500 mt-2">
                      — {block.author}
                    </footer>
                  )}
                </blockquote>
              );
            }
            if (block.type === "list") {
              return (
                <ul
                  key={idx}
                  className="list-disc list-inside text-gray-200 text-base leading-relaxed space-y-2 pl-4"
                >
                  {block.items.map((item, i) => (
                    <li key={i} style={{ whiteSpace: "pre-line" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.type === "header1") {
              return (
                <h1
                  key={idx}
                  className="text-4xl font-bold text-green-400 mt-8 mb-4"
                >
                  {block.text}
                </h1>
              );
            }
            if (block.type === "header2") {
              return (
                <h2
                  key={idx}
                  className="text-3xl font-semibold text-green-300 mt-6 mb-3"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "header3") {
              return (
                <h3
                  key={idx}
                  className="text-2xl font-semibold text-green-200 mt-4 mb-2"
                >
                  {block.text}
                </h3>
              );
            }
            if (block.type === "link") {
              return (
                <a
                  key={idx}
                  href={block.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 underline hover:text-green-300 text-base"
                >
                  {block.text}
                </a>
              );
            }
            if (block.type === "files") {
              return (
                <div key={idx} className="flex flex-col gap-2">
                  {block.files.map((file, i) => (
                    <a
                      key={i}
                      href={file.href}
                      download
                      className="inline-block bg-gray-800 text-green-300 px-3 py-1 rounded hover:bg-green-900 transition text-sm"
                    >
                      {file.name}
                    </a>
                  ))}
                </div>
              );
            }
            if (block.type === "embedLink") {
              return (
                <a
                  key={idx}
                  href={block.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gray-800 hover:bg-gray-700 transition rounded-lg border border-gray-700 p-4 flex items-center gap-4 shadow-md"
                  style={{ textDecoration: "none" }}
                >
                  {block.image && (
                    <img
                      src={block.image}
                      alt={block.text}
                      className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                    />
                  )}
                  {block.icon && !block.image && (
                    <img
                      src={block.icon}
                      alt="icon"
                      className="w-10 h-10 object-contain rounded flex-shrink-0"
                    />
                  )}
                  <div className="flex-1">
                    <div className="text-lg font-semibold text-green-300">
                      {block.text}
                    </div>
                    {block.description && (
                      <div className="text-gray-400 text-sm mt-1">
                        {block.description}
                      </div>
                    )}
                    <div className="text-xs text-gray-500 mt-2">
                      {block.href}
                    </div>
                  </div>
                </a>
              );
            }
            return null;
          })}
        </div>
      </section>
    </div>
  );
}