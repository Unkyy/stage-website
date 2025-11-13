import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Trail Running Event</h1>
      </header>
      
      <section className="event-details">
        <div className="event-info">
          <h2>Détails de l'événement</h2>
          <p>
            Venez participer à notre trail running annuel qui se déroule sur les plus belles pistes du massif alpin.
          </p>
          
          <div className="location-info">
            <h3>Lieu et Distance</h3>
            <p>
              <strong>Distance:</strong> 10 km (parcours en boucle)</p>
            <p>
              <strong>Lieu:</strong> Massif alpin de la Chartreuse</p>
            <p>
              <strong>Points de départ:</strong> Lac de la Chartreuse</p>
          </div>
          
          <div className="requirements">
            <h3>Exigences</h3>
            <ul>
              <li>Carte d'identité ou passeport</li>
              <li>Assurance responsabilité civile</li>
              <li>Chaussures de trail running adaptées</li>
              <li>Vêtements de sport confortables</li>
              <li>Bouteille d'eau (minimum 500ml)</li>
              <li>Carte de participation (fournie lors de l'inscription)</li>
            </ul>
          </div>
        </div>
        
        <div className="event-images">
          <div className="image-container">
            <img src="/f9647.jpg" alt="Vue du massif alpin" className="event-image" />
            <p className="image-caption">Vue panoramique du massif alpin</p>
          </div>
          <div className="image-container">
            <img src="./trail-running.webp" alt="Coureur en trail running" className="event-image" />
            <p className="image-caption">Coureur en pleine activité</p>
            <p className="image-title">Trail Running Event</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
