import React from 'react';
import { Cat, Dog, PawPrint, ShowerHead, Footprints } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ServiceCard
        title="Cat Boarding"
        description="Luxury accommodations for feline friends with climbing spaces and private areas."
        icon={Cat}
        imageUrl="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"
        price="From $35/night"
        href="/services/cat-boarding"
      />
      <ServiceCard
        title="Dog Boarding"
        description="Spacious kennels and play areas for your canine companion."
        icon={Dog}
        imageUrl="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
        price="From $45/night"
        href="/services/dog-boarding"
      />
      <ServiceCard
        title="Bathing Services"
        description="Premium grooming and bathing with high-quality products."
        icon={ShowerHead}
        imageUrl="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7"
        price="From $30"
        href="/services/bathing"
      />
      <ServiceCard
        title="Walking Services"
        description="Professional dog walking with GPS tracking and trained handlers."
        icon={Footprints}
        imageUrl="https://images.unsplash.com/photo-1601758228041-f3b2795255f1"
        price="From $20/walk"
        href="/services/walking"
      />
    </div>
  );
}