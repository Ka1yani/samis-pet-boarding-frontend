import React from 'react';
import { ContactInfo } from './ContactInfo';
import { SocialMedia } from './SocialMedia';
import { LocationMap } from './LocationMap';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-xl text-gray-600">
            We'd love to hear from you! Reach out through any of the following channels.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <ContactInfo />
            <SocialMedia />
          </div>
          <LocationMap />
        </div>
      </div>
    </section>
  );
}