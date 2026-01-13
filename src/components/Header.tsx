'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';
import SearchBar from './SearchBar';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for enhanced sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // News categories (Notícias)
  const newsCategories = [
    { name: 'Todas as Notícias', href: '/' },
    { name: 'Smartphones', href: '/categoria/smartphones' },
    { name: 'Wearables', href: '/categoria/wearables' },
    { name: 'Audio', href: '/categoria/audio' },
    { name: 'Computadores', href: '/categoria/computadores' },
    { name: 'Internet & Apps', href: '/categoria/internet-apps' },
    { name: 'Mobilidade', href: '/categoria/mobilidade' },
    { name: 'Ciência', href: '/categoria/ciencia' },
    { name: 'Gaming', href: '/categoria/gaming' },
    { name: 'AI & Futuro', href: '/categoria/ai-futuro' },
  ];

  // Comparador categories
  const comparadorCategories = [
    { name: 'Telemóveis', href: '/comparador/telemoveis' },
    { name: 'Headphones', href: '/comparador/headphones' },
    { name: 'TV', href: '/comparador/tv' },
    { name: 'Tablets', href: '/comparador/tablets' },
    { name: 'Smartwatches', href: '/comparador/smartwatches' },
    { name: 'Laptops', href: '/comparador/laptops' },
  ];

  // All links for mobile menu
  const allLinks: Array<{ name: string; href: string; disabled?: boolean }> = [
    { name: 'Home', href: '/' },
    ...newsCategories.slice(1), // Skip "Todas as Notícias" in mobile
    { name: '--- Comparador ---', href: '#', disabled: true },
    ...comparadorCategories,
  ];

  return (
    <>
      <header
        className={`bg-background/95 backdrop-blur-md sticky top-0 z-50 border-b transition-all duration-300 ${
          isScrolled ? 'border-border shadow-md' : 'border-transparent'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6" aria-label="Main navigation">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 focus:outline-none hover:opacity-80 transition-opacity duration-200"
              aria-label="PRISMATEK - Página Inicial"
            >
              <svg width="32" height="32" viewBox="0 0 100 100" className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 80 L50 20 L50 80 Z" fill="#06B6D4"/>
                <path d="M50 20 L80 80 L50 80 Z" className="fill-foreground"/>
              </svg>
              <span className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                PRISMATEK
              </span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
              {/* Home Link */}
              <li>
                <Link
                  href="/"
                  className="px-3 py-2 text-muted hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Home
                </Link>
              </li>

              {/* Notícias Dropdown */}
              <li className="relative group">
                <button
                  className="px-3 py-2 text-muted hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Notícias"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  📰 Notícias
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Notícias Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <ul className="py-2">
                    {newsCategories.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="block px-4 py-2 text-sm text-muted hover:text-primary hover:bg-primary/5 transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              {/* Comparador Dropdown */}
              <li className="relative group">
                <button
                  className="px-3 py-2 text-muted hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Comparador"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  🔍 Comparador
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Comparador Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <ul className="py-2">
                    {comparadorCategories.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="block px-4 py-2 text-sm text-muted hover:text-primary hover:bg-primary/5 transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            {/* Search, Dark Mode Toggle & Mobile Menu Button */}
            <div className="flex items-center gap-2">
              <SearchBar />
              <DarkModeToggle />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden p-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Abrir menu de navegação"
                aria-expanded={isMenuOpen}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Menu Panel */}
          <div
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-background z-50 lg:hidden shadow-2xl animate-slide-in-right"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
          >
            {/* Menu Header */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-border">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
                aria-label="PRISMATEK - Página Inicial"
              >
                <svg width="28" height="28" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 80 L50 20 L50 80 Z" fill="#06B6D4"/>
                  <path d="M50 20 L80 80 L50 80 Z" className="fill-foreground"/>
                </svg>
                <span className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                  PRISMATEK
                </span>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Fechar menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Links */}
            <nav className="overflow-y-auto h-[calc(100vh-5rem)] p-4 sm:p-6">
              <ul className="space-y-2">
                {allLinks.map((link) => {
                  // Handle separator
                  if (link.disabled) {
                    return (
                      <li key={link.name} className="pt-4 pb-2">
                        <div className="text-xs font-bold text-muted uppercase tracking-wide px-4">
                          {link.name.replace(/---/g, '').trim()}
                        </div>
                      </li>
                    );
                  }

                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-3 text-base font-semibold text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Mobile Menu Footer */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted text-center">
                  &copy; {new Date().getFullYear()} PRISMATEK
                </p>
              </div>
            </nav>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
