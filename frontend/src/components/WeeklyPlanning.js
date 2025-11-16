import React from 'react';

const WeeklyPlanning = () => {
  // Sample weekly activity schedule
  const weeklySchedule = [
    {
      day: 'Lundi',
      date: '9 Mars',
      activities: [
        { time: '09:00 - 11:00', title: 'Ateliers Techniques', description: 'Techniques de base du trail running' },
        { time: '14:00 - 16:00', title: 'Randonnées Guides', description: 'Découverte du massif alpin' }
      ]
    },
    {
      day: 'Mardi',
      date: '10 Mars',
      activities: [
        { time: '10:00 - 12:00', title: 'Course de Trail', description: 'Course de 10 km en boucle' },
        { time: '15:00 - 17:00', title: 'Ateliers Techniques', description: 'Amélioration des techniques' }
      ]
    },
    {
      day: 'Mercredi',
      date: '11 Mars',
      activities: [
        { time: '09:00 - 11:00', title: 'Randonnées Guides', description: 'Pistes à travers les vallées' },
        { time: '14:00 - 16:00', title: 'Ateliers Techniques', description: 'Préparation physique' }
      ]
    },
    {
      day: 'Jeudi',
      date: '12 Mars',
      activities: [
        { time: '10:00 - 12:00', title: 'Course de Trail', description: 'Course de 10 km en boucle' },
        { time: '15:00 - 17:00', title: 'Randonnées Guides', description: 'Découverte des sommets' }
      ]
    },
    {
      day: 'Vendredi',
      date: '13 Mars',
      activities: [
        { time: '09:00 - 11:00', title: 'Ateliers Techniques', description: 'Préparation finale' },
        { time: '14:00 - 16:00', title: 'Randonnées Guides', description: 'Tour complet du massif' }
      ]
    },
    {
      day: 'Samedi',
      date: '14 Nov',
      activities: [
        { time: '08:00 - 10:00', title: 'Course de Trail', description: 'Course officielle' },
        { time: '15:00 - 17:00', title: 'Cérémonie de clôture', description: 'Remise des prix et récompenses' }
      ]
    }
  ];

  return (
    <section id="planning" className="py-12 bg-gray-50">
      <div className="max-w-6xl w-full mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-2 sm:text-3xl">Planning Hebdomadaire</h2>
          <p className="text-gray-600 text-sm sm:text-base">Découvrez toutes les activités prévues pour la semaine de l'événement</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
          {weeklySchedule.map((day, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="bg-green-800 text-white py-3 px-4 text-center">
                <h3 className="text-lg font-semibold">{day.day}</h3>
                <p className="text-sm opacity-90">{day.date}</p>
              </div>
              <div className="p-3 sm:p-4">
                <ul className="space-y-2 sm:space-y-3">
                  {day.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="border-l-4 border-green-500 pl-2 sm:pl-3 py-2">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-gray-900 text-sm sm:text-base">{activity.time}</span>
                      </div>
                      <h4 className="font-semibold text-green-700 mt-1 text-base sm:text-lg">{activity.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">{activity.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeeklyPlanning;
