'use client';

import React, { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setIsSubmitting(true);

    // Simulate API call
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Obrigado por subscrever a nossa newsletter!');
        setEmail('');
      } else {
        setMessage(data.message || 'Ocorreu um erro ao subscrever. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Newsletter signup fetch error:', error);
      setMessage('Ocorreu um erro ao subscrever. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card p-6 rounded-lg shadow-lg text-center my-8">
      <h2 className="text-3xl font-bold text-foreground mb-4">Mantenha-se Atualizado!</h2>
      <p className="text-muted mb-6">
        Subscreva a nossa newsletter para receber as últimas notícias, tutoriais e reviews diretamente na sua caixa de entrada.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="O seu endereço de email"
          className="flex-grow p-3 rounded-md bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-primary text-white font-semibold py-3 px-6 rounded-md hover:bg-primary-dark transition-colors duration-200 disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'A Subscrever...' : 'Subscrever'}
        </button>
      </form>
      {message && (
        <p className={`mt-4 text-sm ${message.includes('Obrigado') ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </p>
      )}
    </div>
  );
}
