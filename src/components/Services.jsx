import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaRobot } from 'react-icons/fa';
import './Services.css';

const servicesData = [
  {
    icon: <FaLaptopCode />,
    title: 'Web Development',
    description: 'Responsive, fast-loading websites for businesses, portfolios, and landing pages — built with modern React/Next.js workflows.'
  },
  {
    icon: <FaServer />,
    title: 'Full Stack Applications',
    description: 'End-to-end web apps with secure REST APIs, authentication, and database design using the MERN stack.'
  },
  {
    icon: <FaRobot />,
    title: 'AI Integration',
    description: 'Adding AI-powered features — smart search, automation, chat, and LLM-based tools — into existing or new products.'
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section section">
      <div className="container services-container">
        <motion.h4
          className="services-subtitle"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          WHAT I OFFER
        </motion.h4>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          Services <span>I Provide</span>
        </motion.h2>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div
              className="service-card glass-panel"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p>Have a project in mind? Let's build it together.</p>
          <a href="#contact" className="btn btn-primary">Start a Project</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
