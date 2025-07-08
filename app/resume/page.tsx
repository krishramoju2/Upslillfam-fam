// app/resume/page.tsx

'use client';

import { useState } from 'react';

export default function ResumeBuilder() {
  const [name, setName] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [projects, setProjects] = useState('');

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">📄 Resume Builder</h1>

        <div className="grid gap-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Alice Johnson"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Education</label>
            <textarea
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              placeholder="Your degree, college name, year..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Work Experience</label>
            <textarea
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Previous roles, companies, duration..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Skills</label>
            <input
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="React, Node.js, Python..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Projects</label>
            <textarea
              value={projects}
              onChange={(e) => setProjects(e.target.value)}
              placeholder="Mention your key projects and achievements..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-dashed border-gray-300 shadow-inner">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔍 Preview</h2>
          <div className="text-gray-800 space-y-4 font-resume">
            <h3 className="text-xl font-bold">{name}</h3>
            <p><strong>🎓 Education:</strong> {education}</p>
            <p><strong>💼 Experience:</strong> {experience}</p>
            <p><strong>🛠️ Skills:</strong> {skills}</p>
            <p><strong>🚀 Projects:</strong> {projects}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
