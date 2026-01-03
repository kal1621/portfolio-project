
import React from 'react';
import { FiHeart, FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo and Description */}
          <div className="footer-brand">
            <h3 className="footer-logo">Portfolio</h3>
            <p className="footer-description">
              Creating beautiful and functional web experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FiMail />
                <span>kalkidanadeba5@gmail.com</span>
              </div>
              <div className="contact-item">
                <FiMail />
                <span>+251-993594635</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h4 className="footer-title">Follow Me</h4>
            <div className="social-icons">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FiTwitter />
              </a>
              <a href="mailto:john@example.com" aria-label="Email">
                <FiMail />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Kalkidan. All rights reserved.
          </p>
          <p className="made-with">
            Made with <FiHeart className="heart-icon" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;