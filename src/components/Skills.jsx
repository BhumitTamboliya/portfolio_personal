import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, OrbitControls } from '@react-three/drei';
import {
  FaReact, FaNodeJs, FaHtml5, FaAngular, FaBootstrap, FaGithub, FaTools,
  FaPuzzlePiece, FaBrain, FaHandshake, FaDumbbell
} from 'react-icons/fa';
import { 
  SiJavascript, SiExpress, SiMongodb, SiPostman, SiRender,
  SiC, SiCplusplus, SiPython, SiTailwindcss, SiMysql,
  SiTypescript, SiNextdotjs, SiThreedotjs
} from 'react-icons/si';
import './Skills.css';

// 3D Animated Glossy Flower (Torus Knot)
const AnimatedKnot = () => {
  const knotRef = useRef();

  useFrame((state, delta) => {
    // Spin like a wheel (circle)
    knotRef.current.rotation.z -= delta * 0.6;
  });

  return (
    <Float speed={2} rotationIntensity={0} floatIntensity={1.5}>
      <mesh ref={knotRef} scale={0.95}>
        <torusKnotGeometry args={[1.2, 0.28, 256, 64, 2, 5]} />
        <meshPhysicalMaterial
          color="#0a0a0a"
          metalness={1}
          roughness={0.05}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={2}
        />
      </mesh>
    </Float>
  );
};

// User's Technical Skills
const skillsData = [
  { name: 'C', icon: <SiC color="#A8B9CC" /> },
  { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
  { name: 'Python', icon: <SiPython color="#3776AB" /> },
  { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
  { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
  { name: 'HTML/CSS', icon: <FaHtml5 color="#E34F26" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
  { name: 'Express.js', icon: <SiExpress color="#ffffff" /> },
  { name: 'React', icon: <FaReact color="#61DAFB" /> },
  { name: 'Next.js', icon: <SiNextdotjs color="#ffffff" /> },
  { name: 'Three.js', icon: <SiThreedotjs color="#ffffff" /> },
  { name: 'Angular', icon: <FaAngular color="#DD0031" /> },
  { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" /> },
  { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
  { name: 'REST APIs', icon: <FaTools color="#ff6b6b" /> },
  { name: 'Git & GitHub', icon: <FaGithub color="#ffffff" /> },
  { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
  { name: 'Render', icon: <SiRender color="#ffffff" /> },
  { name: 'Problem-Solving', icon: <FaPuzzlePiece color="#FFD700" /> },
  { name: 'Learning Agility', icon: <FaBrain color="#FF69B4" /> },
  { name: 'Team Collaboration', icon: <FaHandshake color="#FFA500" /> },
  { name: 'Persistence', icon: <FaDumbbell color="#FF4500" /> }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section section">
      <div className="container skills-container">

        {/* 3D Animated Flower / Knot Area */}
        <div className="skills-3d-canvas">
          <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
            <ambientLight intensity={0.2} />
            {/* Cyberpunk Colored Lights for beautiful reflections */}
            <directionalLight position={[5, 5, 5]} intensity={3} color="#00f0ff" />
            <directionalLight position={[-5, -5, 5]} intensity={3} color="#ff0055" />
            <directionalLight position={[0, 5, -5]} intensity={2} color="#8a2be2" />

            <AnimatedKnot />
            {/* Environment map for realistic glossy reflections */}
            <Environment preset="city" />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>

        {/* Text Area */}
        <div className="skills-header">
          <motion.h4
            className="skills-subtitle"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            MY SKILLSET
          </motion.h4>
          <motion.h2
            className="skills-title"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            The Magic <span className="text-italic-gradient">Behind</span>
          </motion.h2>
        </div>

        {/* Skills Pills Area */}
        <motion.div
          className="skills-pills-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-pill"
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <span className="skill-pill-icon">{skill.icon}</span>
              <span className="skill-pill-text">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
