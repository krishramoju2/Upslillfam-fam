'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Community Forum', path: '/forum' },
    { name: 'Resume Builder', path: '/resume' },
    { name: 'Postgrad Builder', path: '/postgrad' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Login/Register', path: '/login' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isScrolled ? 'bg-white/80 shadow-md backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-700 hover:scale-105 transition">
          🚀 UpSkillFam
        </Link>
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`text-sm font-semibold ${
                  pathname === link.path ? 'text-purple-700 underline' : 'text-gray-700'
                } hover:text-purple-500 transition`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
