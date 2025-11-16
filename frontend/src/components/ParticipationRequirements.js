import React from 'react';
import { Link } from 'react-router-dom';

const ParticipationRequirements = () => {
  const requirements = [
    "Tu cours 30 à 40 km / semaine en moyenne",
    "Tu as déjà vécu l'effort trail sur des sorties > 2h",
    "Tu es à l'aise avec du D+ et du D-",
    "Tu as envie de progresser... mais aussi de respirer",
    "Pas besoin d'être rapide.",
    "Ce qui compte, c'est d'aimer la nature, les chemins, et l'effort partagé.",
  ];

  return (
    <section id="requirements" className="py-16 bg-white rounded-lg shadow-md p-6 my-8 max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Conditions pour Participer</h2>
      <p className="text-gray-600 mb-4">
        Pour participer à nos activités, vous devez remplir les conditions suivantes :
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {requirements.map((requirement, index) => (
          <li key={index} className="py-1">{requirement}</li>
        ))}
      </ul>
      <div className="mt-6">
        <Link to="/payment">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded transition duration-300">
            S'inscrire maintenant
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ParticipationRequirements;
