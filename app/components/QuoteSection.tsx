'use client';

import { useEffect, useState } from 'react';

const quotes = [
  {
    quote: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
  },
  {
    quote: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
];

export default function QuoteSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mt-12 bg-gradient-to-r from-purple-100 via-indigo-100 to-purple-50 py-10 px-4 rounded-xl shadow-md max-w-3xl mx-auto text-center">
      <blockquote className="text-xl italic text-gray-700 mb-4">
        “{quotes[index].quote}”
      </blockquote>
      <p className="text-sm font-semibold text-purple-700">— {quotes[index].author}</p>
    </section>
  );
}
