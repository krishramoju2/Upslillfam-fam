// app/forum/page.tsx

'use client';

import { useEffect, useState } from 'react';

export default function ForumPage() {
  const [text, setText] = useState('');
  const [thoughts, setThoughts] = useState([]);
  const [font, setFont] = useState('--font-dancing');

  const fetchThoughts = async () => {
    const res = await fetch('/api/forum');
    const data = await res.json();
    setThoughts(data);
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    await fetch('/api/forum', {
      method: 'POST',
      body: JSON.stringify({ text, font }),
    });
    setText('');
    fetchThoughts();
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl border border-gray-200">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-6">💬 UpSkillFam Community Forum</h1>

        <form onSubmit={handleSubmit} className="space-y-4 mb-10">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share your thoughts on becoming a great SDE..."
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <select
            value={font}
            onChange={(e) => setFont(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            <option value="--font-dancing">Dancing Script</option>
            <option value="--font-lobster">Lobster</option>
            <option value="--font-pacifico">Pacifico</option>
          </select>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
          >
            Share Thought
          </button>
        </form>

        <div className="space-y-6">
          {thoughts.length === 0 ? (
            <p className="text-gray-500 text-center">No posts yet. Be the first to share!</p>
          ) : (
            thoughts.map((t: any, i: number) => (
              <div
                key={i}
                className="p-4 bg-purple-50 border border-purple-200 rounded-xl shadow-sm"
                style={{ fontFamily: `var(${t.font})` }}
              >
                {t.text}
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
