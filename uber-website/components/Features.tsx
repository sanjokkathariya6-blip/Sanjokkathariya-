'use client';

import Link from 'next/link';

export default function Features() {
  const features = [
    {
      title: 'Ride',
      description: 'Go anywhere with Uber. Request a ride, hop in, and go.',
      link: '/ride',
    },
    {
      title: 'Drive',
      description: 'Make money on your schedule with deliveries or rides—or both.',
      link: '/drive',
    },
    {
      title: 'Business',
      description: 'Transform the way your company moves and feeds its people.',
      link: '/business',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Focused on safety, wherever you go
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.link}
              className="group cursor-pointer block"
            >
              <div className="bg-gray-100 rounded-lg p-8 h-64 flex items-center justify-center mb-4 group-hover:bg-gray-200 transition">
                <div className="text-6xl font-bold text-gray-300">
                  {feature.title[0]}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <span className="text-black font-medium group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            It&apos;s easier in the apps
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Download the Uber app today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Download on the App Store
            </button>
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get it on Google Play
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
