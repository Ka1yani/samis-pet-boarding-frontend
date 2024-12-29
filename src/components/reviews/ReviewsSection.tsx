import React from 'react';
import { ReviewsCarousel } from './ReviewsCarousel';
import { ReviewsCTA } from './ReviewsCTA';

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Paws of Praise
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Hear what our happy customers have to say!
          </p>
        </div>
        <ReviewsCarousel />
        <ReviewsCTA />
      </div>
    </section>
  );
}