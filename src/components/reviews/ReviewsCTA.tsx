import React from 'react';
import { MessageSquare } from 'lucide-react';

export function ReviewsCTA() {
  return (
    <div className="mt-12 text-center">
      <h3 className="text-xl font-semibold text-gray-900">
        Loved our service?
      </h3>
      <p className="mt-2 text-gray-600">
        Share your experience and help other pet parents find their perfect boarding solution!
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <a
          href="https://g.page/review/SamisPetBoarding"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
        >
          <MessageSquare className="h-5 w-5 mr-2" />
          Write a Review
        </a>
      </div>
    </div>
  );
}