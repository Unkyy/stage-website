import React from 'react';

const HeroBanner = () => {
  return (
    <section className="relative bg-gray-900 h-screen flex items-center justify-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/trail-running.webp')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Discover the Great Outdoors</span>
            <span className="block text-green-400 mt-2">With Our Trail Adventures</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-300 sm:max-w-3xl">
            Join our community of outdoor enthusiasts and explore breathtaking trails with expert-guided adventures.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 md:py-4 md:text-lg md:px-10 transition duration-300">
              Get Started
            </button>
            <button className="px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-green-700 md:py-4 md:text-lg md:px-10 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
