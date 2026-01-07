import React from 'react';

import museuDali from '../assets/images/museu-dali.jpg';
import castellSantFerran from '../assets/images/castell-sant-ferran.jpg';
import esglesiaSantPere from '../assets/images/esglesia-sant-pere.jpg';
import ramblaFigueres from '../assets/images/rambla-figueres.jpg';
import parcBosc from '../assets/images/parc-bosc.jpg';
import fontLluminosa from '../assets/images/font-lluminosa.jpg';
import museuJoguina from '../assets/images/museu-joguina.jpg';
import teatreJardi from '../assets/images/teatre-jardi.jpg';
import iconLocation from '../assets/images/icon-location.png';

// Array of iconic places
const places = [
  { id: 1, name: 'Museu Dalí', image: museuDali },
  { id: 2, name: 'Castell de Sant Ferran', image: castellSantFerran },
  { id: 3, name: 'Església de Sant Pere', image: esglesiaSantPere },
  { id: 4, name: 'Rambla de Figueres', image: ramblaFigueres },
  { id: 5, name: 'Parc Bosc', image: parcBosc },
  { id: 6, name: 'Font Lluminosa', image: fontLluminosa },
  { id: 7, name: 'Museu del Joguet', image: museuJoguina },
  { id: 8, name: 'Teatre Jardí', image: teatreJardi },
];

function Gallery() {
  return (
    // Iconic places section
    <section className="gallery">
      <h2><img src={iconLocation} alt="location" className="icon" /> Iconic Places</h2>
      <div className="gallery-grid">
        {places.map(place => (
          <div key={place.id} className="gallery-item">
            <img src={place.image} alt={place.name} />
            <p>{place.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
