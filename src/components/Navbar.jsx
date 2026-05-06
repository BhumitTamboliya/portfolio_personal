import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiHome, HiUser, HiAcademicCap, HiLightningBolt, HiCode, HiMail, HiBriefcase } from 'react-icons/hi';
import './Navbar.css';

const navLinks = [
  { name: 'Home', href: '#home', icon: HiHome },
  { name: 'About', href: '#about', icon: HiUser },
  { name: 'Skills', href: '#skills', icon: HiLightningBolt },
  { name: 'Education', href: '#education', icon: HiAcademicCap },
  { name: 'Work Experience', href: '#experience', icon: HiBriefcase },
  { name: 'Projects', href: '#projects', icon: HiCode },
  { name: 'Contact', href: '#contact', icon: HiMail }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.name.toLowerCase());
      let currentSection = 'Home';
      let found = false;

      // Reverse array to find the deepest visible section
      [...sections].reverse().forEach(section => {
        if (found) return;
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold based on when you want the nav to switch
          if (rect.top <= window.innerHeight * 0.4) {
            currentSection = section.charAt(0).toUpperCase() + section.slice(1);
            found = true;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Call once to set initial active state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="nav-logo">
        <a href="#home">
          <span className="text-gradient">BT.</span>
        </a>
      </div>

      <div className="floating-nav-wrapper">
      <nav className="floating-nav glass-panel">
        <ul className="floating-nav-list">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.name;
            return (
              <li key={link.name} className="floating-nav-item">
                <a 
                  href={link.href} 
                  className={`floating-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveSection(link.name)}
                >
                  <span className="nav-icon"><Icon /></span>
                  <span className="nav-text">{link.name}</span>
                  
                  {isActive && (
                    <motion.div 
                      layoutId="active-pill" 
                      className="active-pill"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {isActive && (
                    <motion.div 
                      layoutId="active-underline" 
                      className="active-underline"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
    </>
  );
};

export default Navbar;
