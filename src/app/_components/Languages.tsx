"use client";

const Languages = () => (
  <section id="languages" className="py-20 px-6">
    <h2 className="text-4xl font-bold text-green-400 text-center mb-10">
      Languages
    </h2>

    <div className="max-w-3xl mx-auto flex flex-wrap gap-4 justify-center">
      <div className="flex items-center bg-gray-900 border border-green-500/30 rounded-full px-6 py-3 shadow-sm">
        <span className="text-white">English</span>
        <span className="mx-4 h-5 w-px bg-gray-700"></span>
        <span className="text-green-400">Advanced</span>
      </div>

      <div className="flex items-center bg-gray-900 border border-green-500/30 rounded-full px-6 py-3 shadow-sm">
        <span className="text-white">Chinese</span>
        <span className="mx-4 h-5 w-px bg-gray-700"></span>
        <span className="text-green-400">Proficient</span>
      </div>
    </div>
  </section>
);

export default Languages;
