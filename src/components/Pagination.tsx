'use client';

import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export default function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  const pageNumbers = generatePageNumbers(currentPage, totalPages);

  return (
    <nav className="flex justify-center items-center gap-2" aria-label="Paginação">
      {/* Previous Button */}
      <PaginationButton
        href={currentPage > 1 ? `${baseUrl}?page=${currentPage - 1}` : '#'}
        disabled={currentPage === 1}
        label="Página anterior"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </PaginationButton>

      {/* Page Numbers */}
      {pageNumbers.map((page, idx) => (
        page === '...' ? (
          <span key={`ellipsis-${idx}`} className="px-3 py-2 text-muted">
            ...
          </span>
        ) : (
          <PaginationButton
            key={page}
            href={`${baseUrl}?page=${page}`}
            active={page === currentPage}
            label={`Página ${page}`}
          >
            {page}
          </PaginationButton>
        )
      ))}

      {/* Next Button */}
      <PaginationButton
        href={currentPage < totalPages ? `${baseUrl}?page=${currentPage + 1}` : '#'}
        disabled={currentPage === totalPages}
        label="Próxima página"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </PaginationButton>
    </nav>
  );
}

interface PaginationButtonProps {
  href: string;
  disabled?: boolean;
  active?: boolean;
  label: string;
  children: React.ReactNode;
}

function PaginationButton({ href, disabled, active, label, children }: PaginationButtonProps) {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 dark:focus:ring-offset-dark-primary";

  const stateClasses = active
    ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/30"
    : disabled
    ? "bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed"
    : "bg-white dark:bg-dark-secondary border border-border dark:border-dark-border text-foreground dark:text-text-primary hover:border-purple-600 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20";

  if (disabled) {
    return (
      <span className={`${baseClasses} ${stateClasses}`} aria-label={label} aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseClasses} ${stateClasses}`}
      aria-label={label}
      aria-current={active ? 'page' : undefined}
      scroll={true}
    >
      {children}
    </Link>
  );
}

function generatePageNumbers(current: number, total: number): (number | string)[] {
  // Always show: first, last, current, ±1 of current
  // Example: [1, ..., 5, 6, 7, ..., 53]

  if (total <= 7) {
    // If total is small, show all pages
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | string)[] = [];

  // Always show first page
  pages.push(1);

  // Add ellipsis if current is far from start
  if (current > 3) {
    pages.push('...');
  }

  // Show current ± 1
  for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
    pages.push(i);
  }

  // Add ellipsis if current is far from end
  if (current < total - 2) {
    pages.push('...');
  }

  // Always show last page
  if (total > 1) {
    pages.push(total);
  }

  return pages;
}
