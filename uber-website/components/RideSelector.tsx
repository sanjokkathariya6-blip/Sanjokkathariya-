'use client';

import { useState } from 'react';

interface RideOption {
  name: string;
  description: string;
  time: string;
  price: string;
  capacity: string;
}

export default function RideSelector() {
  const [selectedRide, setSelectedRide] = useState(0);

  const rideOptions: RideOption[] = [
    {
      name: 'UberX',
      description: 'Affordable, everyday rides',
      time: '3 min',
      price: '$12.50',
      capacity: '4 seats',
    },
    {
      name: 'Comfort',
      description: 'Newer cars with extra legroom',
      time: '5 min',
      price: '$18.75',
      capacity: '4 seats',
    },
    {
      name: 'UberXL',
      description: 'Affordable rides for groups up to 6',
      time: '4 min',
      price: '$22.00',
      capacity: '6 seats',
    },
    {
      name: 'Black',
      description: 'Premium rides in luxury cars',
      time: '8 min',
      price: '$35.50',
      capacity: '4 seats',
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold mb-4">Choose a ride</h3>
      
      {rideOptions.map((ride, index) => (
        <div
          key={index}
          onClick={() => setSelectedRide(index)}
          className={`border rounded-lg p-4 cursor-pointer transition ${
            selectedRide === index
              ? 'border-black bg-gray-50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-bold text-lg">{ride.name}</h4>
                <span className="text-sm text-gray-600">{ride.time}</span>
              </div>
              <p className="text-sm text-gray-600 mb-1">{ride.description}</p>
              <p className="text-xs text-gray-500">{ride.capacity}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg">{ride.price}</p>
            </div>
          </div>
        </div>
      ))}

      <button className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition mt-6">
        Request {rideOptions[selectedRide].name}
      </button>
    </div>
  );
}
