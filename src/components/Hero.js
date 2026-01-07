import React from 'react';
import heroImg from '../assets/images/hero-figueres-edited.jpg';

function Hero() {
  return (
    // Hero section with edited image
    <section className="hero">
      <img src={heroImg} alt="Figueres" className="hero-img" />
    </section>
  );
}

export default Hero;
