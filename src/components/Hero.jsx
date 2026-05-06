import React, { useRef } from 'react';
import Typewriter from 'typewriter-effect';
import LottieLib from 'lottie-react';
const Lottie = LottieLib.default || LottieLib;
import animationData from '../assets/developer.json';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const container = useRef();
  const textRef = useRef();
  const lottieRef = useRef();

  useGSAP(() => {
    // 1. Advanced Entry Animation Timeline
    const tl = gsap.timeline();
    
    // Animate the children of the text container
    tl.from(textRef.current.children, { 
      y: 50, 
      opacity: 0, 
      duration: 1, 
      stagger: 0.15, 
      ease: "power3.out",
      delay: 0.2
    })
    .from(lottieRef.current, { 
      x: 100, 
      opacity: 0, 
      scale: 0.8, 
      duration: 1.2, 
      ease: "elastic.out(1, 0.75)" 
    }, "-=0.8");

    // 2. Parallax Scroll Effect
    // Text moves up slightly faster
    gsap.to(textRef.current, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Lottie moves down to create depth
    gsap.to(lottieRef.current, {
      yPercent: 40,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

  }, { scope: container });

  return (
    <section id="home" className="hero-section section" ref={container}>
      <div className="container hero-container">
        
        {/* Left Side: Text */}
        <div className="hero-text-content" ref={textRef}>
          <h2 className="greeting">Hello, I am</h2>
          <h1 className="name">
            <span className="text-gradient">Bhumit Tamboliya</span>
          </h1>
          <div className="typewriter-container">
            <Typewriter
              options={{
                strings: ['Full Stack Web Developer', 'MERN Stack Expert', 'Tech Enthusiast'],
                autoStart: true,
                loop: true,
                wrapperClassName: 'typewriter-text',
                cursorClassName: 'typewriter-cursor'
              }}
            />
          </div>
          <p className="hero-description">
            Results-driven Full Stack Web Developer with hands-on experience building and deploying production-ready web applications. Passionate about clean code and user-focused digital solutions.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View Work</a>
            <a href="#contact" className="btn btn-outline" style={{marginLeft: '1rem'}}>Contact Me</a>
          </div>
        </div>

        {/* Right Side: Animated Character (Lottie) */}
        <div className="hero-image-wrapper" ref={lottieRef}>
          <div className="lottie-container">
            <Lottie 
              animationData={animationData} 
              loop={true} 
              style={{ width: '100%', height: '100%', maxWidth: '750px', transform: 'scale(1.15)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
