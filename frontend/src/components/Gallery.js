import React from 'react';

const Gallery = () => {
  // Sample gallery images data - in a real app this could come from props or an API
  const galleryImages = [
    { id: 1, src: '/trail-running.webp', alt: 'Beautiful trail landscape' },
    { id: 2, src: '/trail-running.webp', alt: 'Mountain trail adventure' },
    { id: 3, src: '/trail-running.webp', alt: 'Forest trail path' },
    { id: 4, src: '/trail-running.webp', alt: 'Scenic viewpoint' },
    { id: 5, src: '/trail-running.webp', alt: 'Trail runner in action' },
    { id: 6, src: '/trail-running.webp', alt: 'Nature trail discovery' },
    { id: 7, src: '/trail-running.webp', alt: 'Nature trail discovery' },
  ];

  return (
    <section className="py-12 bg-gray-50" id="gallery" >
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-green-900 sm:text-3xl md:text-4xl">
            Galerie d'Images
          </h2>
          <p className="mt-3 max-w-md mx-auto text-base sm:text-lg text-gray-600">
            Découvrez les moments inoubliables de nos événements trail running
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                <p className="text-white text-xs sm:text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
