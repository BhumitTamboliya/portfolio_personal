import React, { useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Full Stack Web Developer Intern",
    company: "Unified Mentor",
    date: "Jan 2026 – Apr 2026",
    type: "Remote",
    description: [
      "Built and maintained full-stack web applications using React.js, Node.js, Express.js, and MongoDB for real-world client projects.",
      "Developed scalable REST APIs and integrated third-party services to deliver complete end-to-end solutions.",
      "Collaborated with cross-functional teams to ensure responsive UI, optimized backend logic, and smooth deployment workflows."
    ]
  },
  {
    role: "Data Annotator – AI Projects",
    company: "Outlier AI",
    date: "Jan 2025 – May 2025",
    type: "Remote",
    description: [
      "Contributed to AI model training by performing high-quality data annotation, labeling, and validation across multiple projects.",
      "Conducted quality assurance checks to maintain accuracy and consistency of annotated datasets used for AI model improvement.",
      "Demonstrated strong attention to detail while processing large volumes of data under tight deadlines."
    ]
  },
  {
    role: "Front-End Developer",
    company: "Inara Consultancy Services",
    date: "Jun 2024 – Jul 2024",
    type: "On-site",
    description: [
      "Converted Figma designs into fully responsive, accessible web pages using HTML5, CSS3, and JavaScript.",
      "Built high-performance UI components to support creation and validation of AI training datasets.",
      "Worked closely with design and backend teams to align technical implementation with product vision."
    ]
  }
];

const Experience = () => {
  const container = useRef();
  const lineRef = useRef();

  useGSAP(() => {
    // Animate the vertical line drawing down
    gsap.fromTo(lineRef.current, 
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
          end: "bottom 80%",
          scrub: true
        }
      }
    );

    // Animate each timeline item popping in
    const items = gsap.utils.toArray('.timeline-item');
    items.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: "back.out(1.5)"
      });
    });

  }, { scope: container });

  return (
    <section id="experience" className="section" ref={container}>
      <div className="container">
        <h2 className="section-title">Work <span>Experience</span></h2>
        
        <div className="timeline">
          <div className="timeline-line" ref={lineRef}></div>
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <Tilt 
                tiltMaxAngleX={5} 
                tiltMaxAngleY={5} 
                scale={1.02} 
                transitionSpeed={2000}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="var(--accent-blue)"
                glarePosition="all"
              >
                <div className="timeline-content glass-panel">
                  <div className="timeline-header">
                    <h3>{exp.role}</h3>
                    <span className="timeline-date">{exp.date}</span>
                  </div>
                  <h4 className="text-gradient">{exp.company} | {exp.type}</h4>
                  <ul>
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
