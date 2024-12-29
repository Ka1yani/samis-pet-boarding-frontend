import React from 'react';
import { ServiceGrid } from './ServiceGrid';

export function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Pet Care Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Professional care services tailored to your pet's needs. Choose from our range of 
            premium boarding and grooming options.
          </p>
        </div>
        <ServiceGrid />
      </div>
    </section>
  );
}