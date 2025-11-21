'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Smartphones', href: '/categoria/smartphones' },
    { name: 'Wearables', href: '/categoria/wearables' },
    { name: 'Audio', href: '/categoria/audio' },
    { name: 'Computadores', href: '/categoria/computadores' },
    { name: 'Internet & Apps', href: '/categoria/internet-apps' },
    { name: 'Mobilidade', href: '/categoria/mobilidade' },
    { name: 'Ciência', href: '/categoria/ciencia' },
    { name: 'Entretenimento / Gaming', href: '/categoria/entretenimento-gaming' },
    { name: 'AI / Futuro', href: '/categoria/ai-futuro' },
  ];

  return (
    <>
      <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <Link href="/" className="text-[1.5rem] font-extrabold text-foreground text-center">
            NEXORA News
          </Link>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-primary transition-colors duration-200">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} className="text-foreground focus:outline-none">
              <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
              <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
              <div className="w-6 h-0.5 bg-foreground"></div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 flex flex-col p-4">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="text-[1.5rem] font-extrabold text-foreground text-center">
              NEXORA News
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="text-foreground text-3xl font-bold focus:outline-none">
              &times;
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center flex-grow space-y-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-2xl font-bold text-muted hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
