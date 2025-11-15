import React from 'react';
import "tailwindcss";
import "tw-animate-css";
 

const HomePage = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 py-5 font-sans">
      <header className="text-center mb-8 p-5 bg-blue-50 rounded-lg shadow-sm h-50 flex items-center justify-center">
        <h1 className="text-3xl text-blue-900 m-0">Trail Running Event</h1>
      </header>
      
      <section className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl text-blue-900 mt-0 pb-3 border-b-2 border-blue-500">Détails de l'événement</h2>
          <p>
            Venez participer à notre trail running annuel qui se déroule sur les plus belles pistes du massif alpin.
          </p>
          
          <div className="location-info">
            <h3 className="text-blue-700 mt-5">Lieu et Distance</h3>
            <p className="mt-2">
              <strong className="text-gray-700">Distance:</strong> 10 km (parcours en boucle)</p>
            <p className="mt-2">
              <strong className="text-gray-700">Lieu:</strong> Massif alpin de la Chartreuse</p>
            <p className="mt-2">
              <strong className="text-gray-700">Points de départ:</strong> Lac de la Chartreuse</p>
          </div>
          
          <div className="requirements">
            <h3 className="text-blue-700 mt-5">Exigences</h3>
            <ul className="mt-4 list-disc pl-5">
              <li className="mt-2">Carte d'identité ou passeport</li>
              <li className="mt-2">Assurance responsabilité civile</li>
              <li className="mt-2">Chaussures de trail running adaptées</li>
              <li className="mt-2">Vêtements de sport confortables</li>
              <li className="mt-2">Bouteille d'eau (minimum 500ml)</li>
              <li className="mt-2">Carte de participation (fournie lors de l'inscription)</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-5 justify-center">
          <div className="flex-1 min-w-[300px] text-center">
            <img src="/f9647.jpg" alt="Vue du massif alpin" className="w-full max-w-[400px] h-auto rounded-lg shadow-md" />
            <p className="mt-3 italic text-gray-600">Vue panoramique du massif alpin</p>
          </div>
          <div className="flex-1 min-w-[300px] text-center">
            <img src="./trail-running.webp" alt="Coureur en trail running" className="w-full max-w-[400px] h-auto rounded-lg shadow-md" />
            <p className="mt-3 italic text-gray-600">Coureur en pleine activité</p>
            <p className="mt-1 font-bold text-blue-900 text-lg">Trail Running Event</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
