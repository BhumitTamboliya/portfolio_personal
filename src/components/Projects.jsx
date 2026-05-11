import React, { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Woman Safety Emergency Web App",
    date: "March 2026",
    description: "Production-ready full-stack women safety platform with real-time SOS alert functionality and live GPS location sharing. Features bidirectional communication between users, volunteers, and admin.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Leaflet Maps"],
    github: "https://github.com/BhumitTamboliya/woman-safety",
    live: "https://woman-safety-six.vercel.app",
    image: "/woman_safety_app.png"
  },
  {
    title: "CodeSense AI",
    date: "April 2026",
    description: "Full-stack AI-powered code review platform that detects bugs, security vulnerabilities, and quality issues using Groq AI (Llama 3.3 70B). Includes side-by-side file comparison and code quality scoring.",
    tech: ["React.js", "Node.js", "MongoDB", "Groq AI", "JWT", "REST API"],
    github: "https://github.com/BhumitTamboliya",
    live: "#",
    image: "/codesense_ai_app.png"
  }
];

const Projects = () => {
  const container = useRef();

  useGSAP(() => {
    const cards = gsap.utils.toArray('.project-card-wrapper');

    // Stagger reveal
    gsap.from(cards, {
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Parallax effect on cards
    cards.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        },
        y: index % 2 === 0 ? -30 : 30, // Offset scroll based on odd/even
        ease: "none"
      });
    });

  }, { scope: container });

  return (
    <section id="projects" className="section" ref={container}>
      <div className="container projects-container">
        <h2 className="section-title">Featured <span>Projects</span></h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              className="project-card-wrapper"
              key={index}
            >
              <div className="project-card-hover">
                {/* Image layer - always visible, only image shown */}
                <div className="project-image-layer">
                  <img src={project.image} alt={project.title} />
                </div>

                {/* Details overlay - visible on hover */}
                <div className="project-details-overlay">
                  <div className="overlay-content">
                    <div className="overlay-top">
                      <h3 className="overlay-project-title">{project.title}</h3>
                      <div className="overlay-project-links">
                        <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                          <FaGithub />
                        </a>
                        <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live Demo">
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                    </div>
                    <span className="overlay-date text-gradient">{project.date}</span>
                    <p className="overlay-description">{project.description}</p>
                    <ul className="overlay-tech">
                      {project.tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
