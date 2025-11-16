import React from 'react';

const TrailActivities = () => {
  return (
    <section className="py-16 bg-gray-100" id="activities">
      <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
        <div className="bg-white p-6 rounded-lg shadow-sm p">
          <h2 className="text-2xl text-green-900 mt-0 pb-3 border-b-2 border-green-500">Stage Trail</h2>
          <div 
            className="relative bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-banner.jpg')" }}
          ></div>
          <p className="mb-6">
            Je suis très heureux de t'annoncer ce stage trail dans un endroit qui m'est cher, un lieu propice au calme, à la respiration et au plaisir de courir en pleine nature.
            L'idée : vivre une semaine simple, active et ressourçante, entre partage, progression et contemplation.
            On y court, on apprend, on récupère... et on se laisse porter par le charme du Verdon.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Course de Trail</h3>
              <p className="text-gray-700">
                3, 1 sortie trail par jour
              </p>
              <p className="text-gray-700">
                Entre 7 et 24 km, avec du dénivelé.
              </p>
              <p className="text-gray-700">
                Objectif semaine : +60 km (adaptable selon ton niveau).
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Nutrition</h3>
              <p className="text-gray-700">
                Comprendre l'énergie, l'hydratation, la récup, et comment adapter pour toi.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Séances de mobilité / Yoga</h3>
              <p className="text-gray-700">
                Pour se mettre en mouvement et absorber le travail de la veille.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrailActivities;
