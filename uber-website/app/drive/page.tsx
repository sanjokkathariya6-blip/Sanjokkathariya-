import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DrivePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-black text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Drive when you want, make what you need
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.
              </p>
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
                Get started
              </button>
            </div>
          </div>
        </section>

        {/* Why Drive Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
              Why drive with Uber?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">📅</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Set your own hours</h3>
                <p className="text-gray-600">
                  You decide when you work. Drive during the hours that work for you.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Get paid fast</h3>
                <p className="text-gray-600">
                  Cash out up to 5 times a day with Instant Pay.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Get support</h3>
                <p className="text-gray-600">
                  Access support 24/7 through the app or online.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-12">Requirements</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Driver requirements</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-3">✓</span>
                      <span>Meet the minimum age to drive in your city</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">✓</span>
                      <span>Have at least one year of licensed driving experience in the US (3 years if you are under 25 years old)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">✓</span>
                      <span>Use an eligible 4-door vehicle</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Required documents</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-3">✓</span>
                      <span>Valid US driver&apos;s license</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">✓</span>
                      <span>Proof of residency in your city, state, or province</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">✓</span>
                      <span>Proof of vehicle insurance</span>
                    </li>
                  </ul>
                </div>
              </div>

              <button className="mt-12 bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition">
                Sign up to drive
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
