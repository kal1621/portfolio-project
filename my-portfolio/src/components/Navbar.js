
import React, { useState } from 'react';
import { FiMenu, FiX, FiHome, FiBriefcase, FiUser, FiMail } from 'react-icons/fi';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 1, text: 'Home', icon: <FiHome />, link: '#home' },
    { id: 2, text: 'Portfolio', icon: <FiBriefcase />, link: '#portfolio' },
    { id: 3, text: 'About', icon: <FiUser />, link: '#about' },
    { id: 4, text: 'Contact', icon: <FiMail />, link: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo">
          Portfolio
        </a>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.id} className="navbar-item">
              <a href={item.link} className="navbar-link">
                <span className="navbar-icon">{item.icon}</span>
                {item.text}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Mobile Menu */}
        <ul className={`mobile-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id} className="mobile-item">
              <a 
                href={item.link} 
                className="mobile-link"
                onClick={() => setIsOpen(false)}
              >
                <span className="mobile-icon">{item.icon}</span>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;