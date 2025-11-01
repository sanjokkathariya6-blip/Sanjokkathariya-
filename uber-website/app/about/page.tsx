import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-black text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About Uber
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                We reimagine the way the world moves for the better
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8">Our mission</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                We started in 2010 to solve a simple problem: how do you get access to a ride at the touch of a button? More than 32 billion trips later, we&apos;re building products to get people closer to where they want to be.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                By changing how people, food, and things move through cities, Uber is a platform that opens up the world to new possibilities.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">32B+</div>
                <p className="text-gray-600">Trips completed</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">10K+</div>
                <p className="text-gray-600">Cities worldwide</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">150M+</div>
                <p className="text-gray-600">Users globally</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">6M+</div>
                <p className="text-gray-600">Drivers and couriers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Our values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold mb-4">We do the right thing</h3>
                <p className="text-gray-700">
                  We act with integrity, standing up for what&apos;s right, especially when it&apos;s hard. We hold ourselves accountable for our actions and their consequences.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">We act like owners</h3>
                <p className="text-gray-700">
                  We seek out problems and we solve them. We help each other and those who matter to us. We have a bias for action and accountability.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">We persevere</h3>
                <p className="text-gray-700">
                  We believe in the power of grit. We don&apos;t seek the easy path. We look for the toughest challenges and we push. We don&apos;t give up.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">We value ideas over hierarchy</h3>
                <p className="text-gray-700">
                  We believe that the best ideas can come from anywhere. We listen to each other and we promote an environment where everyone can contribute.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">We celebrate differences</h3>
                <p className="text-gray-700">
                  We stand apart from the average. We ensure people of diverse backgrounds feel welcome and valued. We champion our differences.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">We are customer obsessed</h3>
                <p className="text-gray-700">
                  We work tirelessly to earn our customers&apos; trust and business by solving their problems and delighting them at every turn.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Committed to your safety
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              With Uber, you can request a ride 24/7. Our technology is built with safety in mind, and we&apos;re committed to raising the bar for safety in every city we serve.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Learn about safety
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
