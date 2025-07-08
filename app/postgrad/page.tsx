// app/postgrad/page.tsx

'use client';

import { useState } from 'react';

export default function PostgradBuilder() {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [research, setResearch] = useState('');
  const [universities, setUniversities] = useState('');
  const [achievements, setAchievements] = useState('');

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-purple-200 font-postgrad">
        <h1 className="text-4xl font-bold text-center text-purple-900 mb-6">🎓 Postgrad Profile Builder</h1>

        <div className="grid gap-6">
          <div>
            <label className="block text-purple-700 font-semibold mb-1">Full Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Ravi Kumar"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-purple-700 font-semibold mb-1">Postgrad Goal</label>
            <input
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="e.g. MS in Computer Science, USA"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-purple-700 font-semibold mb-1">Research Interests</label>
            <textarea
              value={research}
              onChange={(e) => setResearch(e.target.value)}
              placeholder="e.g. Artificial Intelligence, Distributed Systems"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-purple-700 font-semibold mb-1">Target Universities</label>
            <textarea
              value={universities}
              onChange={(e) => setUniversities(e.target.value)}
              placeholder="e.g. Stanford, MIT, ETH Zurich"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-purple-700 font-semibold mb-1">Notable Achievements</label>
            <textarea
              value={achievements}
              onChange={(e) => setAchievements(e.target.value)}
              placeholder="e.g. GSoC Contributor, Published Research Paper"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>

        <div className="mt-10 bg-purple-50 p-6 rounded-lg border border-purple-300 shadow-inner">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">🔍 Profile Preview</h2>
          <div className="text-purple-900 space-y-4">
            <h3 className="text-xl font-bold">{name}</h3>
            <p><strong>🎯 Goal:</strong> {goal}</p>
            <p><strong>🔬 Research Interests:</strong> {research}</p>
            <p><strong>🏫 Target Universities:</strong> {universities}</p>
            <p><strong>🏆 Achievements:</strong> {achievements}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
