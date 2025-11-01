'use client';

import { useState } from 'react';

export default function Hero() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');

  const handleGetRide = () => {
    if (pickupLocation && dropoffLocation) {
      window.location.href = '/ride';
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Go anywhere with Uber
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Request a ride, hop in, and go.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-2xl p-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="pickup" className="block text-sm font-medium text-gray-700 mb-2">
                Pickup location
              </label>
              <input
                id="pickup"
                type="text"
                placeholder="Enter pickup location"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="dropoff" className="block text-sm font-medium text-gray-700 mb-2">
                Dropoff location
              </label>
              <input
                id="dropoff"
                type="text"
                placeholder="Enter destination"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
              />
            </div>

            <button
              onClick={handleGetRide}
              className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={!pickupLocation || !dropoffLocation}
            >
              See prices
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <button className="text-black font-medium hover:underline">
              Schedule for later
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
