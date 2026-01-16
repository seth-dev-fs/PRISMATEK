'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
// DarkModeToggle removed - site is dark mode only
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

  // Comparador categories (VISÃO 100% - Top 3 System)
  const comparadorCategories = [
    { name: 'Smartphones', href: '/comparador/smartphones' },
    { name: 'Laptops', href: '/comparador/laptops' },
    { name: 'Wearables', href: '/comparador/wearables' },
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
      {/* === PREMIUM HEADER === */}
      <header
        className={`
          sticky top-0 z-fixed
          bg-white/80 dark:bg-dark-primary/80 backdrop-blur-xl
          border-b transition-all duration-400 ease-apple
          ${isScrolled
            ? 'border-border dark:border-dark-border shadow-elevation-3 dark:shadow-dark-elevation-3 backdrop-blur-2xl'
            : 'border-transparent backdrop-blur-xl'
          }
        `}
      >
        <nav className="container mx-auto px-4 sm:px-6" aria-label="Main navigation">
          <div className="flex justify-between items-center h-16 sm:h-20">

            {/* === LOGO (Purple + Gold Gradient) === */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="PRISMATEK - Página Inicial"
            >
              {/* Animated Prisma Logo */}
              <div className="relative">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 100 100"
                  className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Left face - Purple with gradient */}
                  <defs>
                    <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#B8941F" />
                    </linearGradient>
                  </defs>

                  {/* Purple face (left) */}
                  <path
                    d="M20 80 L50 20 L50 80 Z"
                    fill="url(#purpleGradient)"
                    className="drop-shadow-glow-purple-sm"
                  />

                  {/* Gold face (right) */}
                  <path
                    d="M50 20 L80 80 L50 80 Z"
                    fill="url(#goldGradient)"
                    className="drop-shadow-glow-gold-sm"
                  />
                </svg>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-purple opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-full" />
              </div>

              {/* Brand name */}
              <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-gold-400 bg-clip-text text-transparent tracking-tight">
                PRISMATEK
              </span>
            </Link>

            {/* === DESKTOP NAVIGATION === */}
            <ul className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">

              {/* Home Link */}
              <li>
                <Link
                  href="/"
                  className="
                    px-3 py-2 rounded-lg
                    text-foreground hover:text-purple-600 dark:text-text-secondary dark:hover:text-purple-400
                    hover:bg-purple-600/10
                    transition-all duration-250 ease-smooth
                    focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-primary
                    relative group
                  "
                >
                  Home
                  <span className="absolute inset-0 rounded-lg bg-gradient-purple opacity-0 group-hover:opacity-5 transition-opacity duration-250" />
                </Link>
              </li>

              {/* === NOTÍCIAS DROPDOWN === */}
              <li className="relative group">
                <button
                  className="
                    px-3 py-2 rounded-lg flex items-center gap-1
                    text-foreground group-hover:text-purple-600 dark:text-text-secondary dark:group-hover:text-purple-400
                    hover:bg-purple-600/10
                    transition-all duration-250 ease-smooth
                    focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-primary
                    relative
                  "
                  aria-label="Notícias"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="relative z-10">Notícias</span>
                  <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-250" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>

                  {/* Hover gradient */}
                  <span className="absolute inset-0 rounded-lg bg-gradient-purple opacity-0 group-hover:opacity-5 transition-opacity duration-250" />
                </button>

                {/* Dropdown Menu - PREMIUM */}
                <div className="
                  absolute top-full left-0 mt-2 w-64
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-all duration-250 ease-smooth
                  transform group-hover:translate-y-0 translate-y-2
                ">
                  {/* Glass card with elevation */}
                  <div className="
                    bg-white/95 dark:bg-dark-secondary/95 backdrop-blur-xl
                    border border-border dark:border-dark-border
                    rounded-xl
                    shadow-elevation-4 dark:shadow-dark-elevation-4 shadow-glow-purple-sm
                    overflow-hidden
                  ">
                    <ul className="py-2">
                      {newsCategories.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="
                              block px-4 py-2.5
                              text-sm text-text-secondary hover:text-text-primary
                              hover:bg-purple-600/10
                              transition-all duration-200
                              relative group/item
                            "
                          >
                            <span className="relative z-10">{link.name}</span>
                            {/* Hover effect */}
                            <span className="absolute left-0 top-0 h-full w-1 bg-gradient-purple scale-y-0 group-hover/item:scale-y-100 transition-transform duration-200 origin-top" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>

              {/* === COMPARADOR DROPDOWN === */}
              <li className="relative group">
                <button
                  className="
                    px-3 py-2 rounded-lg flex items-center gap-1
                    text-foreground group-hover:text-gold-600 dark:text-text-secondary dark:group-hover:text-gold-400
                    hover:bg-gold-600/10
                    transition-all duration-250 ease-smooth
                    focus:outline-none focus:ring-2 focus:ring-gold-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-primary
                    relative
                  "
                  aria-label="Comparador"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="relative z-10">Comparador</span>
                  <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-250" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>

                  {/* Hover gradient - Gold */}
                  <span className="absolute inset-0 rounded-lg bg-gradient-gold opacity-0 group-hover:opacity-5 transition-opacity duration-250" />
                </button>

                {/* Dropdown Menu - PREMIUM (Gold accent) */}
                <div className="
                  absolute top-full left-0 mt-2 w-64
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-all duration-250 ease-smooth
                  transform group-hover:translate-y-0 translate-y-2
                ">
                  {/* Glass card with gold glow */}
                  <div className="
                    bg-white/95 dark:bg-dark-secondary/95 backdrop-blur-xl
                    border border-border dark:border-dark-border
                    rounded-xl
                    shadow-elevation-4 dark:shadow-dark-elevation-4 shadow-glow-gold-sm
                    overflow-hidden
                  ">
                    <ul className="py-2">
                      {comparadorCategories.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="
                              block px-4 py-2.5
                              text-sm text-text-secondary hover:text-text-primary
                              hover:bg-gold-600/10
                              transition-all duration-200
                              relative group/item
                            "
                          >
                            <span className="relative z-10">{link.name}</span>
                            {/* Hover effect - Gold */}
                            <span className="absolute left-0 top-0 h-full w-1 bg-gradient-gold scale-y-0 group-hover/item:scale-y-100 transition-transform duration-200 origin-top" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            </ul>

            {/* === ACTIONS (Search, Mobile Menu) === */}
            <div className="flex items-center gap-2">
              <SearchBar />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="
                  lg:hidden p-2 rounded-lg
                  text-foreground hover:text-purple-600 dark:text-text-secondary dark:hover:text-purple-400
                  hover:bg-purple-600/10
                  transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-primary
                  relative group
                "
                aria-label="Abrir menu de navegação"
                aria-expanded={isMenuOpen}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="absolute inset-0 rounded-lg bg-gradient-purple opacity-0 group-hover:opacity-5 transition-opacity duration-200" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* === MOBILE MENU === */}
      {isMenuOpen && (
        <>
          {/* Backdrop - CLARO em light, ESCURO em dark */}
          <div
            className="fixed inset-0 bg-gray-200/60 dark:bg-black/60 backdrop-blur-sm z-modal-backdrop lg:hidden animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Menu Panel - GLASS EFFECT EM AMBOS OS MODOS */}
          <div
            className="
              fixed inset-y-0 right-0 w-full max-w-sm
              bg-white/98 dark:bg-dark-secondary/98 backdrop-blur-2xl
              border-l border-border dark:border-dark-border
              z-modal lg:hidden
              shadow-elevation-5 dark:shadow-dark-elevation-5
              animate-slide-left
            "
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
          >
            {/* Menu Header */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-border dark:border-dark-border bg-gradient-purple-gold/5">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
                aria-label="PRISMATEK - Página Inicial"
              >
                <svg width="28" height="28" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="purpleGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                    <linearGradient id="goldGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#B8941F" />
                    </linearGradient>
                  </defs>
                  <path d="M20 80 L50 20 L50 80 Z" fill="url(#purpleGradientMobile)" />
                  <path d="M50 20 L80 80 L50 80 Z" fill="url(#goldGradientMobile)" />
                </svg>
                <span className="text-xl font-extrabold bg-gradient-to-r from-purple-400 to-gold-400 bg-clip-text text-transparent">
                  PRISMATEK
                </span>
              </Link>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="
                  p-2 rounded-lg
                  text-foreground hover:text-purple-600 dark:text-text-secondary dark:hover:text-purple-400
                  hover:bg-purple-600/10
                  transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-purple-600
                "
                aria-label="Fechar menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Links */}
            <nav className="overflow-y-auto h-[calc(100vh-5rem)] p-4 sm:p-6">
              <ul className="space-y-1">
                {allLinks.map((link) => {
                  // Handle separator
                  if (link.disabled) {
                    return (
                      <li key={link.name} className="pt-6 pb-2">
                        <div className="flex items-center gap-2">
                          <div className="h-px flex-1 bg-gradient-gold" />
                          <span className="text-xs font-bold text-gold-600 dark:text-gold-400 uppercase tracking-wider px-2">
                            {link.name.replace(/---/g, '').trim()}
                          </span>
                          <div className="h-px flex-1 bg-gradient-gold" />
                        </div>
                      </li>
                    );
                  }

                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="
                          block px-4 py-3 rounded-lg
                          text-base font-semibold text-foreground hover:text-purple-600 dark:text-text-secondary dark:hover:text-purple-400
                          hover:bg-purple-600/10
                          transition-all duration-200
                          focus:outline-none focus:ring-2 focus:ring-purple-600
                          relative group
                        "
                      >
                        <span className="relative z-10">{link.name}</span>
                        {/* Subtle gradient on hover */}
                        <span className="absolute inset-0 rounded-lg bg-gradient-purple opacity-0 group-hover:opacity-5 transition-opacity duration-200" />
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Mobile Menu Footer */}
              <div className="mt-8 pt-8 border-t border-border dark:border-dark-border">
                <p className="text-sm text-muted dark:text-text-muted text-center">
                  &copy; {new Date().getFullYear()} PRISMATEK
                </p>
                <p className="text-xs text-muted dark:text-text-muted text-center mt-1">
                  Múltiplas Perspectivas sobre Tecnologia
                </p>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
