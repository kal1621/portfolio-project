
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">  { }
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Kalkidan </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            I build amazing web applications with modern technologies
          </p>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;