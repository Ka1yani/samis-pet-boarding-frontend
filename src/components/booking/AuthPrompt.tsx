import React from 'react';
import { PawPrint } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AuthPrompt() {
  return (
    <div className="bg-purple-50 rounded-2xl p-8 shadow-sm text-center">
      <div className="inline-flex p-3 bg-purple-100 rounded-full mb-6">
        <PawPrint className="h-8 w-8 text-purple-600" />
      </div>
      <h3 className="text-2xl font-semibold text-gray-900">
        Sign up or log in to book your pet's next adventure!
      </h3>
      <p className="mt-3 text-gray-600 mb-8">
        Create an account to manage bookings, track pet profiles, and more.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/signup"
          className="bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="border border-purple-600 text-purple-600 py-3 px-6 rounded-lg font-medium hover:bg-purple-50 transition-colors"
        >
          Log In
        </Link>
      </div>
    </div>
  );
}