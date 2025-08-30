'use client';
import skillsData from "@/app/_data/skills";

const Skills = () => (
  <section id="skills" className="py-24 px-6">
    <h2 className="text-5xl font-bold text-green-400 text-center mb-12">Skills</h2>
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Technical Skills */}
      <div>
        <h3 className="text-2xl font-semibold text-green-300 mb-4">Technical Skills</h3>
        <ul className="list-disc list-inside text-gray-200 text-lg space-y-2">
          {skillsData.technical.map((skill: string, idx: number) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>
      {/* Familiar Platforms */}
      <div>
        <h3 className="text-2xl font-semibold text-green-300 mb-4">Familiar Platforms</h3>
        <ul className="list-disc list-inside text-gray-200 text-lg space-y-2">
          {skillsData.platforms.map((platform: string, idx: number) => (
            <li key={idx}>{platform}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;