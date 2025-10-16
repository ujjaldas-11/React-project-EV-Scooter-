import Slider from "../Slider/Slider";


function Home() {
  return (
    <div>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white h-[100%]" id="features">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1F2937] mb-16">
            Why Choose Electric?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-[#1F2937] mb-3">Instant Power</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience immediate torque delivery with electric motors, providing smooth and powerful acceleration from a standstill.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-[#1F2937] mb-3">Zero Emissions</h3>
              <p className="text-gray-600 leading-relaxed">
                Drive with a clear conscience knowing your vehicle produces zero tailpipe emissions, reducing your carbon footprint.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="text-5xl mb-4">🔋</div>
              <h3 className="text-2xl font-bold text-[#1F2937] mb-3">Long Range</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced battery technology provides extended range on a single charge, perfect for daily commutes and weekend adventures.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-[#1F2937] mb-3">Lower Costs</h3>
              <p className="text-gray-600 leading-relaxed">
                Save money on fuel and maintenance with fewer moving parts and cheaper electricity compared to gasoline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-20 px-6 bg-[#1F2937]" id="specs">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Budget EV Scooter Specs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Spec Item 1 */}
            <div className="bg-gray-300 bg-opacity-10 backdrop-blur-sm p-8 rounded-xl text-center border border-gray-600 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-5xl font-bold text-[#1F2937] mb-2">65 km/h</div>
              <div className="text-gray-700 text-lg">Top Speed</div>
            </div>

            {/* Spec Item 2 */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl text-center border border-gray-600 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-5xl font-bold text-[#1F2937] mb-2">80 km</div>
              <div className="text-gray-700 text-lg">Range per Charge</div>
            </div>

            {/* Spec Item 3 */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl text-center border border-gray-600 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-5xl font-bold text-[#1F2937] mb-2">4 hrs</div>
              <div className="text-gray-700 text-lg">Charging Time</div>
            </div>

            {/* Spec Item 4 */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl text-center border border-gray-600 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-5xl font-bold text-[#1F2937] mb-2">2.5 kWh</div>
              <div className="text-gray-700 text-lg">Battery Capacity</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
            Ready to Go Electric?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join the revolution and experience the future of sustainable transportation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pages/details"
              className="inline-block bg-[#1F2937] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              View Details
            </a>
            <a 
              href="#contact"
              className="inline-block bg-white text-[#1F2937] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl border-2 border-[#1F2937]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;