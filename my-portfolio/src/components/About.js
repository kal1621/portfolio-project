
import React from 'react';
import { FiCode, FiLayout, FiServer, FiSmartphone } from 'react-icons/fi';
import './About.css';

function About() {
  const services = [
    {
      icon: <FiCode />,
      title: 'Frontend Development',
      description: 'Building responsive UIs with React, Vue, or Angular'
    },
    {
      icon: <FiLayout />,
      title: 'UI/UX Design',
      description: 'Creating user-centered designs with Figma'
    },
    {
      icon: <FiServer />,
      title: 'Backend Development',
      description: 'Developing APIs with Node.js and Python'
    },
    {
      icon: <FiSmartphone />,
      title: 'Mobile Apps',
      description: 'Building cross-platform apps with React Native'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Hello! I'm a passionate developer</h3>
            <p>
              With 1+ years of experience in web development, I specialize 
              in creating modern, responsive websites and applications. 
              I love turning complex problems into simple, beautiful designs.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or learning new skills.
            </p>
            
            <div className="about-info">
              <div className="info-item">
                <strong>Name:</strong>
                <span>Kalkidan Adeba</span>
              </div>
              <div className="info-item">
                <strong>Email:</strong>
                <span>kalkidanadeba5@gmail</span>
              </div>
              <div className="info-item">
                <strong>Location:</strong>
                <span>Addis Ababa,Ethiopia </span>
              </div>
              <div className="info-item">
                <strong>Availability:</strong>
                <span>Open to Opportunities</span>
              </div>
            </div>
          </div>

          <div className="about-services">
            <h4>What I Do</h4>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;