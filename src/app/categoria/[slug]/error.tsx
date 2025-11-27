'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function CategoryError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to monitoring service
    console.error('[CategoryError]', {
      message: error.message,
      digest: error.digest,
      stack: error.stack,
      timestamp: new Date().toISOString(),
    });
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-16 text-center max-w-2xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-4">Erro ao Carregar Categoria</h1>
        <p className="text-lg text-muted mb-6">
          Ocorreu um problema ao carregar os artigos desta categoria. Por favor, tente novamente.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={reset}
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          Tentar Novamente
        </button>
        <Link
          href="/"
          className="px-6 py-3 bg-card text-foreground border border-border rounded-lg hover:bg-card/80 transition-colors"
        >
          Voltar à Homepage
        </Link>
      </div>

      {process.env.NODE_ENV === 'development' && (
        <details className="mt-8 text-left bg-red-50 dark:bg-red-900/10 p-4 rounded-lg">
          <summary className="cursor-pointer font-semibold text-red-600 dark:text-red-400">
            Debug Info (Dev Only)
          </summary>
          <pre className="mt-2 text-xs overflow-auto whitespace-pre-wrap">
            {error.stack}
          </pre>
        </details>
      )}
    </div>
  );
}
