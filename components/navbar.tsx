'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function Navbar() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-serif font-bold text-white tracking-tight">
          MockIt
        </Link>
        <div className="flex items-center gap-8">
          <Link 
            href="/practice" 
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Practice
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-zinc-400" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
