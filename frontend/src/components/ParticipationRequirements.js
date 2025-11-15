import React from 'react';

const ParticipationRequirements = () => {
  const requirements = [
    "Avoir au moins 18 ans",
    "Être en bonne santé physique",
    "Posséder un équipement de sécurité adapté",
    "S'inscrire via notre plateforme en ligne",
    "Payer la cotisation annuelle",
    "Suivre les règles de comportement du club",
    "Participer aux réunions mensuelles"
  ];

  return (
    <section id="requirements" className="h-screen bg-white rounded-lg shadow-md p-6 my-8 h-screen max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Conditions pour Participer</h2>
      <p className="text-gray-600 mb-4">
        Pour participer à nos activités, vous devez remplir les conditions suivantes :
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {requirements.map((requirement, index) => (
          <li key={index}>{requirement}</li>
        ))}
      </ul>
      <div className="mt-6">
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          S'inscrire maintenant
        </button>
      </div>
    </section>
  );
};

export default ParticipationRequirements;
