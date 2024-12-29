import React from 'react';
import { Hero } from '../components/home/Hero';
import { ServicesSection } from '../components/services/ServicesSection';
import { BookNowSection } from '../components/booking/BookNowSection';
import { ReviewsSection } from '../components/reviews/ReviewsSection';
import { ContactSection } from '../components/contact/ContactSection';

export function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <ReviewsSection />
      <BookNowSection />
      <ContactSection />
    </main>
  );
}