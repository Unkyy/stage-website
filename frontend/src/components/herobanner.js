import React from 'react';

const HeroBanner = () => {
  return (
    <section className="relative bg-gray-900 h-screen flex items-center justify-center" id="hero">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:py-24">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block">Discover the Great Outdoors</span>
            <span className="block text-green-400 mt-2">With Our Trail Adventures</span>
          </h1>
          <p className="mt-4 max-w-md mx-auto text-base text-gray-300 sm:max-w-lg sm:text-lg md:text-xl">
            Join our community of outdoor enthusiasts and explore breathtaking trails with expert-guided adventures.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 sm:py-3 sm:text-base sm:px-8 transition duration-300">
              Get Started
            </button>
            <button className="px-6 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-green-700 sm:py-3 sm:text-base sm:px-8 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
