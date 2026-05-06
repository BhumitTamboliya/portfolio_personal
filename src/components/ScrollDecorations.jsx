import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ScrollDecorations.css';

const ScrollDecorations = () => {
  const { scrollYProgress } = useScroll();
  
  // The progress bar scales from 0 to 1 across the X axis
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Parallax Y translations for floating abstract orbs
  const yOrb1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const yOrb2 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const yOrb3 = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <>
      {/* Fixed top progress indicator */}
      <motion.div 
        className="scroll-progress-bar"
        style={{ scaleX }}
      />
      
      {/* Background Orbs moving dynamically during scroll */}
      <div className="scroll-decorations-container">
        <motion.div className="floating-orb orb-1" style={{ y: yOrb1 }} />
        <motion.div className="floating-orb orb-2" style={{ y: yOrb2 }} />
        <motion.div className="floating-orb orb-3" style={{ y: yOrb3 }} />
      </div>
    </>
  );
};

export default ScrollDecorations;
