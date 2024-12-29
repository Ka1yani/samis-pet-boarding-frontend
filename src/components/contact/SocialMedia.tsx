import React from 'react';
import { Instagram } from 'lucide-react';

export function SocialMedia() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Follow Us</h3>
      
      <a
        href="https://instagram.com/SamisPetBoarding"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-4 group"
      >
        <div className="bg-purple-100 p-2 rounded-full">
          <Instagram className="h-6 w-6 text-purple-600" />
        </div>
        <div>
          <p className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
            @SamisPetBoarding
          </p>
          <p className="text-sm text-gray-500">
            Follow us for pet updates and promotions!
          </p>
        </div>
      </a>
    </div>
  );
}