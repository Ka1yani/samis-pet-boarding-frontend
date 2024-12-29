import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BookingCardProps {
  userName?: string;
}

export function BookingCard({ userName }: BookingCardProps) {
  return (
    <div className="bg-purple-50 rounded-2xl p-8 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900">
            {userName ? `Welcome back, ${userName}!` : 'Ready to Book?'}
          </h3>
          <p className="mt-2 text-gray-600">
            Schedule your pet's next stay with us
          </p>
        </div>
        <span className="bg-purple-100 p-3 rounded-full">
          <Calendar className="h-6 w-6 text-purple-600" />
        </span>
      </div>
      <Link
        to="/booking"
        className="mt-6 block w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors text-center"
      >
        Book Now
      </Link>
    </div>
  );
}