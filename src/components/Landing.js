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
          <p>Engineering the pathways that power innovation.</p>
          <div className="cta">
            <button className="btn primary" onClick={() => scrollTo('services')}>Get Started</button>
            <button className="btn outline" onClick={() => scrollTo('about')}>Learn More</button>
          </div>
        </div>
      </section>

      {/* Services section updated to show cards under the hero */}
      <section id="services" data-section className="section section-cards">
        <div className="container">
          <h2>Services</h2>
          <div className="card-grid">
            <article className="card">
              <h3>Consulting</h3>
              <p>Strategy, architecture reviews, and program guidance to accelerate delivery.</p>
            </article>
            <article className="card">
              <h3>Systems Integration</h3>
              <p>End-to-end integration across legacy and modern platforms for seamless operations.</p>
            </article>
            <article className="card">
              <h3>Cloud & Data Engineering</h3>
              <p>Scalable cloud builds, data pipelines, and analytics that unlock insights.</p>
            </article>
          </div>
        </div>
        <div className="container">
          <h2>Solutions</h2>
          <div className="card-grid">
            <article className="card">
              <h3>Mission Systems</h3>
              <p>Robust, secure systems designed for mission-critical environments.</p>
            </article>
            <article className="card">
              <h3>Enterprise Platforms</h3>
              <p>Custom platforms that scale with business and technical demands.</p>
            </article>
            <article className="card">
              <h3>AI & Automation</h3>
              <p>Practical AI and automation that reduce cost and improve outcomes.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Solutions section updated to show cards as well */}

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