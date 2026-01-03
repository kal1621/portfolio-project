
import React, { useState } from 'react';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';
import './Projects.css';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with cart and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      github: 'https://github.com',
      live: 'https://example.com',
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Productivity app with drag & drop functionality.',
      technologies: ['React', 'TypeScript', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      github: 'https://github.com',
      live: 'https://example.com',
      category: 'React'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather app with location-based forecasts.',
      technologies: ['JavaScript', 'API', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      github: 'https://github.com',
      live: 'https://example.com',
      category: 'Frontend'
    },
    {
      id: 4,
      title: 'Social Media API',
      description: 'RESTful API for social platform with authentication.',
      technologies: ['Node.js', 'Express', 'JWT', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      github: 'https://github.com',
      live: null,
      category: 'Backend'
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'Mobile app for tracking workouts and nutrition.',
      technologies: ['React Native', 'Redux', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      github: 'https://github.com',
      live: 'https://example.com',
      category: 'Mobile'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Responsive portfolio with modern design.',
      technologies: ['React', 'CSS', 'EmailJS'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      github: 'https://github.com',
      live: 'https://example.com',
      category: 'React'
    }
  ];

  const filters = ['All', 'React', 'Frontend', 'Backend', 'Full Stack', 'Mobile'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-container">
          <div className="filter-label">
            <FiFilter /> Filter by:
          </div>
          <div className="filter-buttons">
            {filters.map(filter => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="GitHub"
                    >
                      <FiGithub />
                    </a>
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
                <span className="project-category">{project.category}</span>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;