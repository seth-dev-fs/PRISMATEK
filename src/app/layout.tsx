import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Import only Inter
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Configure font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'NEXORA News',
  description: 'Notícias e conteúdos de tecnologia para utilizadores portugueses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${inter.variable} font-sans bg-background text-foreground flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
