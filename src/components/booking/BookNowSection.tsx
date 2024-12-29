import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { BookingCard } from './BookingCard';
import { AuthPrompt } from './AuthPrompt';

export function BookNowSection() {
  const { isAuthenticated, user } = useAuth();

  return (
    <section id="booking" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {isAuthenticated ? (
            <BookingCard userName={user?.name} />
          ) : (
            <AuthPrompt />
          )}
        </div>
      </div>
    </section>
  );
}