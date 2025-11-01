import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BusinessPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Uber for Business
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Transform the way your company moves and feeds its people.
              </p>
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
                Get started
              </button>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
              Business solutions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="text-5xl mb-6">🚗</div>
                <h3 className="text-2xl font-bold mb-4">Rides and meals for your team</h3>
                <p className="text-gray-600 mb-6">
                  Keep your team productive with rides and meals. Manage everything from one dashboard.
                </p>
                <button className="text-black font-semibold hover:underline">
                  Learn more →
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <div className="text-5xl mb-6">✈️</div>
                <h3 className="text-2xl font-bold mb-4">Simplified travel and expenses</h3>
                <p className="text-gray-600 mb-6">
                  Streamline employee travel and expense management with automated reporting.
                </p>
                <button className="text-black font-semibold hover:underline">
                  Learn more →
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <div className="text-5xl mb-6">🏢</div>
                <h3 className="text-2xl font-bold mb-4">Workplace solutions</h3>
                <p className="text-gray-600 mb-6">
                  Help employees get to work safely and on time with commute programs.
                </p>
                <button className="text-black font-semibold hover:underline">
                  Learn more →
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <div className="text-5xl mb-6">📦</div>
                <h3 className="text-2xl font-bold mb-4">Package delivery</h3>
                <p className="text-gray-600 mb-6">
                  Send packages across town with same-day delivery powered by Uber&apos;s network.
                </p>
                <button className="text-black font-semibold hover:underline">
                  Learn more →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
              Why businesses choose Uber
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-3">Easy to manage</h3>
                <p className="text-gray-600">
                  Control spending, track usage, and manage your team from one central dashboard.
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-xl font-bold mb-3">Safe and reliable</h3>
                <p className="text-gray-600">
                  Keep your team safe with 24/7 support, insurance, and safety features.
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-3">Global reach</h3>
                <p className="text-gray-600">
                  Available in 10,000+ cities worldwide, wherever your business takes you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies using Uber for Business to move their teams forward.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Create an account
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
