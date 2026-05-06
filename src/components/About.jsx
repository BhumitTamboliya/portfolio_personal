import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import profileImg from '../assets/he.jpg';
import './About.css';

const About = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
      setTime(timeString);
    };
    updateClock();
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About <span>Me</span></h2>
          
          <div className="about-layout">
            <Tilt 
              tiltMaxAngleX={5} 
              tiltMaxAngleY={5} 
              scale={1.02} 
              transitionSpeed={2000}
              glareEnable={false}
              className="about-image-card"
            >
              <div className="about-image-container glass-panel">
                <img src={profileImg} alt="Bhumit Tamboliya" className="about-avatar" />
                <div className="about-image-overlay">
                  <h2 className="country-title">INDIA</h2>
                  <p className="live-time">{time}</p>
                  <p className="timezone">GMT+5:30</p>
                </div>
              </div>
            </Tilt>

            <Tilt
              tiltMaxAngleX={2}
              tiltMaxAngleY={2}
              scale={1.01}
              transitionSpeed={2500}
              glareEnable={true}
              glareMaxOpacity={0.05}
              glareColor="var(--accent-purple)"
              glarePosition="all"
              className="about-text-card"
            >
              <div className="about-text-container glass-panel">
                <h3 className="about-quote">
                  I don't just build software—I engineer systems that work fast, think smart, and scale cleanly.
                </h3>
                
                <p>
                  From crafting seamless mobile experiences to designing <span className="highlight-badge">AI-powered systems</span>, I focus on one thing: making technology feel effortless and powerful at the same time. Every line of code that I write is driven by clarity, performance, and real-world impact—not just functionality.
                </p>
                
                <p>
                  I've built full-stack platforms, optimized live systems, and developed intelligent <span className="highlight-badge">RAG-based solutions</span> that reduce noise and deliver precise, meaningful results. Whether it's cutting load times, improving accuracy, or designing clean architectures—I care about what actually moves the needle.
                </p>
                
                <p>
                  My research, accepted at <span className="highlight-badge">IndiaCom-2026</span>, reflects how I think: combining AI with structured, reliable systems that don't just generate answers—but deliver trustworthy ones.
                </p>
                
                <div className="quote-block">
                  <p>I'm not chasing trends.</p>
                  <p>I'm building the kind of systems that stay relevant.</p>
                </div>
              </div>
            </Tilt>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
