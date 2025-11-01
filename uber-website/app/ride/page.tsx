'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RideSelector from '@/components/RideSelector';
import { useState } from 'react';

export default function RidePage() {
  const [pickupLocation, setPickupLocation] = useState('Current location');
  const [dropoffLocation, setDropoffLocation] = useState('Enter destination');

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left side - Map placeholder */}
            <div className="order-2 lg:order-1">
              <div className="bg-gray-200 rounded-lg h-[600px] flex items-center justify-center sticky top-24">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-gray-600 font-medium">Map View</p>
                  <p className="text-sm text-gray-500 mt-2">Interactive map would appear here</p>
                </div>
              </div>
            </div>

            {/* Right side - Ride booking */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold mb-6">Request a ride</h1>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pickup location
                    </label>
                    <input
                      type="text"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dropoff location
                    </label>
                    <input
                      type="text"
                      value={dropoffLocation}
                      onChange={(e) => setDropoffLocation(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <RideSelector />
              </div>

              <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-bold text-lg mb-4">Payment method</h3>
                <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                  <span className="font-medium">💳 Credit Card</span>
                  <span className="text-sm text-gray-600">•••• 4242</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
