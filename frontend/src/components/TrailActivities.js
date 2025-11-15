import React from 'react';

const TrailActivities = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-6xl mx-auto px-5 py-5 font-sans w-full">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl text-blue-900 mt-0 pb-3 border-b-2 border-blue-500">Activités du Trail</h2>
          <p className="mb-6">
            Découvrez les différentes activités que vous pourrez pratiquer lors de notre événement trail running annuel.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Course de Trail</h3>
              <p className="text-gray-700">
                Une course de 10 km en boucle sur les plus belles pistes du massif alpin avec des points de ravitaillement.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Randonnées Guides</h3>
              <p className="text-gray-700">
                Des randonnées guidées par des experts pour découvrir les paysages les plus magnifiques du massif.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Ateliers Techniques</h3>
              <p className="text-gray-700">
                Des ateliers pour améliorer vos techniques de trail running avec nos coachs professionnels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailActivities;
