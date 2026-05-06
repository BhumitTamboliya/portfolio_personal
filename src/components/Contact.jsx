import React, { useRef, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const SERVICE_ID = 'service_fkm6ted';
const TEMPLATE_1 = 'template_b3k4eqi'; // tujhe notification
const TEMPLATE_2 = 'template_eyd301m'; // sender ko auto-reply
const PUBLIC_KEY = 'FAt8x6573-6WJ_tM_';

const Contact = () => {
  const container = useRef();
  const titleRef = useRef();
  const infoColRef = useRef();
  const formColRef = useRef();

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: container.current, start: 'top 75%' },
    });
    tl.from(titleRef.current, { y: -30, opacity: 0, duration: 0.8, ease: 'power3.out' })
      .from(infoColRef.current, { x: -100, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
      .from(formColRef.current, { x: 100, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6');
  }, { scope: container });

  const handleChange = (e) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_1, templateParams, PUBLIC_KEY);
      await emailjs.send(SERVICE_ID, TEMPLATE_2, templateParams, PUBLIC_KEY);

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="section contact-section" ref={container}>
      <div className="container">

        <h2 className="section-title" ref={titleRef}>
          Get In <span>Touch</span>
        </h2>

        <div className="contact-card glass-panel">

          <div className="contact-info-col" ref={infoColRef}>
            <h3 className="connect-title">
              Let's <span className="text-cyan">Connect</span>
            </h3>
            <p className="connect-desc">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to you!
            </p>

            <ul className="contact-list">
              <li>
                <a href="mailto:Tamboliyabhumit@gmail.com" className="contact-list-item">
                  <span className="cli-icon"><FaEnvelope /></span>
                  <span>Tamboliyabhumit@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+919875185951" className="contact-list-item">
                  <span className="cli-icon"><FaPhone /></span>
                  <span>+91 98751-85951</span>
                </a>
              </li>
              <li>
                <div className="contact-list-item no-link">
                  <span className="cli-icon"><FaMapMarkerAlt /></span>
                  <span>Gujarat, India</span>
                </div>
              </li>
            </ul>

            <div className="social-row">
              <a href="https://linkedin.com/in/bhumit-tamboliya"
                target="_blank" rel="noreferrer" aria-label="LinkedIn"
                className="social-icon-btn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/BhumitTamboliya"
                target="_blank" rel="noreferrer" aria-label="GitHub"
                className="social-icon-btn">
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="contact-form-col" ref={formColRef}>
            <p className="form-col-label">SEND A MESSAGE</p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="c-name">NAME</label>
                <input
                  id="c-name" type="text" name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                />
              </div>
              <div className="form-group">
                <label htmlFor="c-email">EMAIL</label>
                <input
                  id="c-email" type="email" name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                />
              </div>
              <div className="form-group">
                <label htmlFor="c-msg">MESSAGE</label>
                <textarea
                  id="c-msg" name="message" rows="5"
                  placeholder="Tell me about your project or just say hi..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                />
              </div>

              {status === 'success' && (
                <div className="form-status success">
                  ✅ Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="form-status error">
                  ❌ Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.2"
                      strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Bhumit Tamboliya. Built with React &amp; Three.js</p>
          <div className="footer-links">
            <a href="https://linkedin.com/in/bhumit-tamboliya" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/BhumitTamboliya" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;