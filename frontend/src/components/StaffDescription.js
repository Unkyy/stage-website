import React from 'react';

const StaffDescription = () => {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4 py-8" id="staff">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">Notre Équipe</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Team Member 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 sm:p-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Marie Dubois</h2>
            <p className="text-green-600 font-medium mb-3">Directrice Artistique</p>
            <p className="text-gray-600">
              Passionnée de création depuis plus de 10 ans, Marie guide notre équipe dans l'élaboration de projets innovants et esthétiques.
            </p>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 sm:p-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Jean Martin</h2>
            <p className="text-green-600 font-medium mb-3">Chef de Projet</p>
            <p className="text-gray-600">
              Avec son expertise en gestion de projet, Jean assure la réussite de nos initiatives tout en maintenant des relations clientes exceptionnelles.
            </p>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 sm:p-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Sophie Laurent</h2>
            <p className="text-green-600 font-medium mb-3">Développeuse Senior</p>
            <p className="text-gray-600">
              Sophie apporte son savoir-faire technique pour créer des solutions numériques robustes et performantes qui répondent aux besoins de nos clients.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">Notre Philosophie</h2>
        <p className="text-gray-600 mb-4">
          Notre équipe est composée de professionnels passionnés par leur travail et dédiés à l'excellence. Nous croyons fermement en la collaboration, l'innovation constante et le respect des valeurs qui nous guident dans chaque projet.
        </p>
        <p className="text-gray-600">
          Chaque membre de notre équipe apporte une expertise unique qui contribue à la réussite collective de nos projets. Nous sommes fiers de notre équipe diverse et talentueuse qui fait la force de notre entreprise.
        </p>
      </div>
    </section>
  );
};

export default StaffDescription;
