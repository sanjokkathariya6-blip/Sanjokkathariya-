import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/offerings" className="text-gray-400 hover:text-white transition">
                  Our offerings
                </Link>
              </li>
              <li>
                <Link href="/newsroom" className="text-gray-400 hover:text-white transition">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-gray-400 hover:text-white transition">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ride" className="text-gray-400 hover:text-white transition">
                  Ride
                </Link>
              </li>
              <li>
                <Link href="/drive" className="text-gray-400 hover:text-white transition">
                  Drive
                </Link>
              </li>
              <li>
                <Link href="/eat" className="text-gray-400 hover:text-white transition">
                  Eat
                </Link>
              </li>
              <li>
                <Link href="/business" className="text-gray-400 hover:text-white transition">
                  Uber for Business
                </Link>
              </li>
              <li>
                <Link href="/freight" className="text-gray-400 hover:text-white transition">
                  Uber Freight
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Global citizenship</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/safety" className="text-gray-400 hover:text-white transition">
                  Safety
                </Link>
              </li>
              <li>
                <Link href="/diversity" className="text-gray-400 hover:text-white transition">
                  Diversity and Inclusion
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-400 hover:text-white transition">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Travel</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/reserve" className="text-gray-400 hover:text-white transition">
                  Reserve
                </Link>
              </li>
              <li>
                <Link href="/airports" className="text-gray-400 hover:text-white transition">
                  Airports
                </Link>
              </li>
              <li>
                <Link href="/cities" className="text-gray-400 hover:text-white transition">
                  Cities
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition text-sm">
                Privacy
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-white transition text-sm">
                Accessibility
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition text-sm">
                Terms
              </Link>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Uber Technologies Inc.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
