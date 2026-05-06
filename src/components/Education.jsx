import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Education.css';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    id: 1,
    date: "Aug 2023 - Present",
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Lovely Professional University",
    details: "Phagwara, Punjab. Current CGPA: 6.43",
    image: "https://careermantra.org/front_assets/images/lovely_professional_university2.jpg", // Placeholder URL
    colorClass: "edu-blue"
  },
  {
    id: 2,
    date: "Apr 2022 - Mar 2023",
    degree: "Higher Secondary School (12th)",
    institution: "Bharad Vishwavidyapith",
    details: "Rajkot, Gujarat. Completed March 2023",
    image: "https://bharadschools.org/wp-content/uploads/2023/04/banner-02.jpg", // Placeholder URL
    colorClass: "edu-purple"
  }
];

const EduCard = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <div
      className="edu-timeline-row"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="edu-timeline-dot"></div>

      {/* Left Side Content */}
      <div className="edu-side left-side">
        {isLeft ? (
          <div className="edu-card-wrapper glass-panel">
            <div className={`edu-date-badge ${item.colorClass}`}>
              {item.date}
            </div>
            <h3>{item.degree}</h3>
            <h4 className="edu-institution">{item.institution}</h4>
            <p className="edu-details">{item.details}</p>
          </div>
        ) : (
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="edu-image-wrapper glass-panel"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                style={{ width: '100%', height: '100%' }}
              >
                <img src={item.image} alt={item.institution} />
                <div className="edu-image-overlay">
                  <h4>{item.institution}</h4>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>

      {/* Right Side Content */}
      <div className="edu-side right-side">
        {!isLeft ? (
          <div className="edu-card-wrapper glass-panel">
            <div className={`edu-date-badge ${item.colorClass}`}>
              {item.date}
            </div>
            <h3>{item.degree}</h3>
            <h4 className="edu-institution">{item.institution}</h4>
            <p className="edu-details">{item.details}</p>
          </div>
        ) : (
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="edu-image-wrapper glass-panel"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                style={{ width: '100%', height: '100%' }}
              >
                <img src={item.image} alt={item.institution} />
                <div className="edu-image-overlay">
                  <h4>{item.institution}</h4>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

const Education = () => {
  const container = useRef();
  const lineRef = useRef();

  useGSAP(() => {
    // 1. Header stagger
    gsap.from(".edu-header", {
      scrollTrigger: {
        trigger: ".edu-header",
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    // 2. Timeline line draw
    gsap.fromTo(lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".edu-timeline",
          start: "top 70%",
          end: "bottom 80%",
          scrub: true
        }
      }
    );

    // 3. Stagger timeline rows
    const rows = gsap.utils.toArray('.edu-timeline-row');
    rows.forEach((row) => {
      gsap.from(row, {
        scrollTrigger: {
          trigger: row,
          start: "top 85%",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "back.out(1.5)"
      });
    });

  }, { scope: container });

  return (
    <section id="education" className="section" ref={container}>
      <div className="edu-container">
        <div className="edu-header">
          <span className="edu-subtitle">BACKGROUND</span>
          <h2 className="edu-title">Education</h2>
        </div>

        <div className="edu-timeline">
          <div className="edu-timeline-line" ref={lineRef}></div>
          {educationData.map((item, index) => (
            <EduCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
