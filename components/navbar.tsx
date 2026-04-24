'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 bg-black/80 border-zinc-800 light:bg-white/80 light:border-zinc-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-serif font-bold tracking-tight text-white light:text-zinc-900 transition-colors">
          MockIt
        </Link>
        <div className="flex items-center gap-4">
          <Link 
            href="/practice" 
            className="text-sm font-medium transition-colors text-zinc-400 hover:text-white light:text-zinc-600 light:hover:text-zinc-900"
          >
            Practice
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
