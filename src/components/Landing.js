// ...existing code...
import React, { useEffect, useState } from 'react';
import './landing.css';

export default function Landing({ logo }) {
  const [active, setActive] = useState('home');
  const year = new Date().getFullYear();

  useEffect(() => {
    const sections = document.querySelectorAll('section[data-section]');
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing">
      <nav className="nav">
        <img src={logo} className="nav-logo" alt="Synapse" />
        <ul className="nav-links">
          <li className={active === 'home' ? 'active' : ''}><button onClick={() => scrollTo('home')}>Home</button></li>
          <li className={active === 'services' ? 'active' : ''}><button onClick={() => scrollTo('services')}>Services</button></li>
          <li className={active === 'solutions' ? 'active' : ''}><button onClick={() => scrollTo('solutions')}>Solutions</button></li>
          <li className={active === 'about' ? 'active' : ''}><button onClick={() => scrollTo('about')}>About</button></li>
          <li className={active === 'contact' ? 'active' : ''}><button onClick={() => scrollTo('contact')}>Contact</button></li>
        </ul>
      </nav>

      <section id="home" data-section className="section hero">
        <div className="hero-inner">
          <h1>Synapse Solutions</h1>
          <p>Engineering modern solutions for complex problems.</p>
          <div className="cta">
            <button className="btn primary" onClick={() => scrollTo('services')}>Get Started</button>
            <button className="btn outline" onClick={() => scrollTo('about')}>Learn More</button>
          </div>
        </div>
      </section>

      <section id="services" data-section className="section">
        <div className="container">
          <h2>Services</h2>
          <p>Consulting · Systems Integration · Cloud & Data Engineering</p>
        </div>
      </section>

      <section id="solutions" data-section className="section alt">
        <div className="container">
          <h2>Solutions</h2>
          <p>Custom solutions tailored to mission and enterprise needs.</p>
        </div>
      </section>

      <section id="about" data-section className="section">
        <div className="container">
          <h2>About</h2>
          <p>Small description about the company, values, and team.</p>
        </div>
      </section>

      <section id="contact" data-section className="section alt">
        <div className="container">
          <h2>Contact</h2>
          <p>Contact form, email, phone, or call-to-action.</p>
        </div>
      </section>

      <footer className="footer">© {year} Synapse Solutions</footer>
    </div>
  );
}
// ...existing code...