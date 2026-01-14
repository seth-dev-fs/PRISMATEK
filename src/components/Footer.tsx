import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    institucional: [
      { name: 'Sobre Nós', href: '/sobre' },
      { name: 'Contacto', href: '/contacto' },
      { name: 'Equipa', href: '/equipa' },
    ],
    legal: [
      { name: 'Política de Privacidade', href: '/privacidade' },
      { name: 'Termos de Uso', href: '/termos' },
      { name: 'Cookies', href: '/cookies' },
    ],
    categorias: [
      { name: 'Smartphones', href: '/categoria/smartphones' },
      { name: 'Wearables', href: '/categoria/wearables' },
      { name: 'Audio', href: '/categoria/audio' },
      { name: 'Gaming', href: '/categoria/gaming' },
    ],
  };

  return (
    <footer className="relative bg-white/60 dark:bg-dark-secondary/60 backdrop-blur-xl border-t border-border dark:border-dark-border/50 mt-20 overflow-hidden">
      {/* Premium Top Border - Purple + Gold Gradient */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 via-gold-500 to-purple-600 shadow-glow-purple" />

      {/* Decorative Background Mesh */}
      <div className="absolute inset-0 bg-mesh-purple opacity-5 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-gold-400 bg-clip-text text-transparent mb-4 hover:from-purple-300 hover:to-gold-300 transition-all duration-300">
              PRISMATEK
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              O seu portal de tecnologia. Notícias, reviews e análises sobre smartphones, wearables, gaming e muito mais.
            </p>

            {/* Social Links with Purple Glow Effects */}
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com/prismatek"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gray-100 dark:bg-dark-tertiary border border-border dark:border-dark-border hover:border-purple-600/50 text-text-muted hover:text-purple-400 hover:shadow-glow-purple-sm transform hover:scale-110 transition-all duration-250 ease-bounce-soft focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-primary group"
                aria-label="Seguir no Twitter"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-250" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://facebook.com/prismatek"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gray-100 dark:bg-dark-tertiary border border-border dark:border-dark-border hover:border-purple-600/50 text-text-muted hover:text-purple-400 hover:shadow-glow-purple-sm transform hover:scale-110 transition-all duration-250 ease-bounce-soft focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-primary group"
                aria-label="Seguir no Facebook"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-250" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/prismatek"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gray-100 dark:bg-dark-tertiary border border-border dark:border-dark-border hover:border-purple-600/50 text-text-muted hover:text-purple-400 hover:shadow-glow-purple-sm transform hover:scale-110 transition-all duration-250 ease-bounce-soft focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-primary group"
                aria-label="Subscrever no YouTube"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-250" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/prismatek"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gray-100 dark:bg-dark-tertiary border border-border dark:border-dark-border hover:border-purple-600/50 text-text-muted hover:text-purple-400 hover:shadow-glow-purple-sm transform hover:scale-110 transition-all duration-250 ease-bounce-soft focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-primary group"
                aria-label="Seguir no LinkedIn"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-250" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Institucional Links */}
          <div>
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-purple rounded-full" />
              Institucional
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.institucional.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-purple-400 transition-colors duration-250 focus:outline-none focus:underline group inline-flex items-center gap-1.5"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-250">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-purple rounded-full" />
              Legal
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-purple-400 transition-colors duration-250 focus:outline-none focus:underline group inline-flex items-center gap-1.5"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-250">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categorias Populares */}
          <div>
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-gold rounded-full" />
              Categorias Populares
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.categorias.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-gold-400 transition-colors duration-250 focus:outline-none focus:underline group inline-flex items-center gap-1.5"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-250">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* AI Transparency Section - Premium Design */}
        <div className="mt-12 pt-8 border-t border-border dark:border-dark-border/50">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-gradient-purple text-white rounded-full mb-5 shadow-glow-purple-sm border border-purple-500/20 transform hover:scale-105 hover:shadow-glow-purple transition-all duration-250 ease-bounce-soft">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-bold uppercase tracking-wide">Transparência IA</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              PRISMATEK é o primeiro site de notícias tech 100% gerado por IA em português.
              Todos os artigos são escritos por <span className="font-bold text-purple-400">Gemini 2.5 Flash</span>,
              curados e adaptados para o mercado português e europeu.
            </p>
            <p className="text-xs text-text-muted mt-3">
              <Link href="/sobre" className="hover:text-purple-400 transition-colors duration-250 underline decoration-purple-600/30 hover:decoration-purple-400">
                Saber mais sobre o nosso processo
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-border dark:border-dark-border/30">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-text-muted">
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gradient-purple rounded-full animate-pulse-soft" />
              &copy; {currentYear} PRISMATEK. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-1.5">
              Feito com
              <svg className="w-4 h-4 text-red-500 animate-pulse-soft" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              em Portugal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
