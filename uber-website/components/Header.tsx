'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black text-white z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Uber
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/ride" className="hover:text-gray-300 transition">
              Ride
            </Link>
            <Link href="/drive" className="hover:text-gray-300 transition">
              Drive
            </Link>
            <Link href="/business" className="hover:text-gray-300 transition">
              Business
            </Link>
            <Link href="/about" className="hover:text-gray-300 transition">
              About
            </Link>
            <Link
              href="/login"
              className="hover:text-gray-300 transition"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition font-medium"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href="/ride"
              className="block hover:text-gray-300 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Ride
            </Link>
            <Link
              href="/drive"
              className="block hover:text-gray-300 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Drive
            </Link>
            <Link
              href="/business"
              className="block hover:text-gray-300 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Business
            </Link>
            <Link
              href="/about"
              className="block hover:text-gray-300 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/login"
              className="block hover:text-gray-300 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="block bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign up
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
