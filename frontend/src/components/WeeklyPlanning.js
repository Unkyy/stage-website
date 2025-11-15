import React from 'react';

const WeeklyPlanning = () => {
  // Sample weekly activity schedule
  const weeklySchedule = [
    {
      day: 'Lundi',
      date: '10 Nov',
      activities: [
        { time: '09:00 - 11:00', title: 'Ateliers Techniques', description: 'Techniques de base du trail running' },
        { time: '14:00 - 16:00', title: 'Randonnées Guides', description: 'Découverte du massif alpin' }
      ]
    },
    {
      day: 'Mardi',
      date: '11 Nov',
      activities: [
        { time: '10:00 - 12:00', title: 'Course de Trail', description: 'Course de 10 km en boucle' },
        { time: '15:00 - 17:00', title: 'Ateliers Techniques', description: 'Amélioration des techniques' }
      ]
    },
    {
      day: 'Mercredi',
      date: '12 Nov',
      activities: [
        { time: '09:00 - 11:00', title: 'Randonnées Guides', description: 'Pistes à travers les vallées' },
        { time: '14:00 - 16:00', title: 'Ateliers Techniques', description: 'Préparation physique' }
      ]
    },
    {
      day: 'Jeudi',
      date: '13 Nov',
      activities: [
        { time: '10:00 - 12:00', title: 'Course de Trail', description: 'Course de 10 km en boucle' },
        { time: '15:00 - 17:00', title: 'Randonnées Guides', description: 'Découverte des sommets' }
      ]
    },
    {
      day: 'Vendredi',
      date: '14 Nov',
      activities: [
        { time: '09:00 - 11:00', title: 'Ateliers Techniques', description: 'Préparation finale' },
        { time: '14:00 - 16:00', title: 'Randonnées Guides', description: 'Tour complet du massif' }
      ]
    },
    {
      day: 'Samedi',
      date: '15 Nov',
      activities: [
        { time: '08:00 - 10:00', title: 'Course de Trail', description: 'Course officielle' },
        { time: '15:00 - 17:00', title: 'Cérémonie de clôture', description: 'Remise des prix et récompenses' }
      ]
    },
    {
      day: 'Dimanche',
      date: '16 Nov',
      activities: [
        { time: '10:00 - 12:00', title: 'Randonnées Libres', description: 'Exploration libre du massif' }
      ]
    }
  ];

  return (
    <section id="planning" className="h-screen  flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-900 mb-2">Planning Hebdomadaire</h2>
          <p className="text-gray-600">Découvrez toutes les activités prévues pour la semaine de l'événement</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-6">
          {weeklySchedule.map((day, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="bg-green-800 text-white py-3 px-4 text-center">
                <h3 className="text-lg font-semibold">{day.day}</h3>
                <p className="text-sm opacity-90">{day.date}</p>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  {day.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="border-l-4 border-green-500 pl-3 py-2">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-gray-900">{activity.time}</span>
                      </div>
                      <h4 className="font-semibold text-green-700 mt-1">{activity.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
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
