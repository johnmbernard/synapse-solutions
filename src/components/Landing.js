// ...existing code...
import React, { useEffect, useState } from 'react';
import './landing.css';

export default function Landing({ logo }) {
  const [active, setActive] = useState('home');
  const [expanded, setExpanded] = useState(null); // 'services' | 'solutions' | null
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

  const toggleExpand = (key) => {
    setExpanded((prev) => (prev === key ? null : key));
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

      {/* Combined cards section: two big cards (Services / Solutions) that expand on hover or click */}
      <section id="services" data-section className="section section-cards">
        <div
            className={`card ${expanded === 'services' ? 'expanded' : ''}`}
            onClick={() => toggleExpand('services')}
            onKeyDown={(e) => { if (e.key === 'Enter') toggleExpand('services'); }}
            role="button"
            tabIndex={0}
            aria-expanded={expanded === 'services'}
          >
            <div className="card-head">
              <h3>Services</h3>
            </div>

          <div className="card-content">
            <ul>
              <li>Architecture & design reviews</li>
              <li>Program & delivery advisory</li>
               <li>Cloud migrations and data pipelines</li>
               <li>Managed services and sustainment</li>
            </ul>
            <div className="card-actions">
              <button className="btn primary">Contact Sales</button>
            </div>
          </div>
        </div>

          <div
            className={`card ${expanded === 'solutions' ? 'expanded' : ''}`}
            onClick={() => toggleExpand('solutions')}
            onKeyDown={(e) => { if (e.key === 'Enter') toggleExpand('solutions'); }}
            role="button"
            tabIndex={0}
            aria-expanded={expanded === 'solutions'}
          >
            <div className="card-head">
              <h3>Solutions</h3>
            </div>

            <div className="card-content">
              <ul>
                <li>Mission-critical architectures</li>
                <li>Custom enterprise platforms</li>
                <li>AI/ML pipelines and automation</li>
                <li>Security & compliance engineering</li>
              </ul>
              <div className="card-actions">
                <button className="btn outline">Learn More</button>
              </div>
            </div>
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