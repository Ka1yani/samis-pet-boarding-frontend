import React from "react";
import { Calendar, Heart, Shield } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="py-16">
      <div className="relative bg-purple-50 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                Your Pet's
                <span className="block text-purple-600">
                  Home Away From Home
                </span>
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-lg">
                Professional pet boarding services with 24/7 care. We treat your
                pets like family, ensuring they're happy, healthy, and loved
                while you're away.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Now
                </button>
                <button className="inline-flex items-center px-6 py-3 border border-purple-600 text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50">
                  View Services
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
                alt="Happy dogs playing"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    <img
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
                      alt="Pet 1"
                    />
                    <img
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"
                      alt="Pet 2"
                    />
                    <img
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src="https://images.unsplash.com/photo-1543852786-1cf6624b9987"
                      alt="Pet 3"
                    />
                  </div>
                  <span className="ml-4 text-sm font-medium text-gray-900">
                    Join 2000+ happy pets
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative  max-w-4xl mx-auto px-4 sm:px-6 lg:px-7 mt-8 mb-8">
        <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-3 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <Calendar className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold">Easy Booking</h3>
            <p className="text-gray-600 text-center mt-2">
              Simple online booking system for your convenience
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <Heart className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold">Loving Care</h3>
            <p className="text-gray-600 text-center mt-2">
              Your pets receive attention and care they deserve
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <Shield className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold">Safe Environment</h3>
            <p className="text-gray-600 text-center mt-2">
              24/7 supervision in a secure facility
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
