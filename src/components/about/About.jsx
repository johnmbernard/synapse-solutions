import React from 'react';
import './About.css';
import { Link } from "react-router-dom";
import linkedinicon from '/linkedin_icon.png';
import phoneicon from '/phone_icon.png';
import emailicon from '/email_icon.png';

export default function About() {
  return (
    <div className="about-page">
      <Link to="/" className="back-link">← Home</Link>
      <section id="about" className="about-panel panel">
        <div className="values">
          <div>Precision
            <p className="value-description">
                Delivering solutions with meticulous attention to detail and unwavering quality.
            </p>
          </div>
          <div>Adaptability
            <p className="value-description">
                Embracing change and evolving with the needs of our clients and the market.
            </p>
          </div>
          <div>Collaboration
            <p className="value-description">
                Fostering partnerships and teamwork to drive innovation and success.
            </p>
          </div>
          <div>Impact
            <p className="value-description">
                Committed to making a meaningful difference for our clients and their customers.
            </p>
          </div>
        </div>
        <div className="about-content">
          <h1>About</h1>
          <p className="tagline">Engineering intelligence. Shaping outcomes.</p>
          <p className="description">
          Synapse Solutions is a technology consulting and systems integration studio
          specializing in cloud, data, and mission-critical engineering. We partner with
          enterprise organizations to deliver scalable platforms and automation that power
          the next generation of operations.
        </p>
        <p className="description">
          Our approach blends engineering discipline with creative thought, enabling
          organizations to transform data into actionable intelligence, modernize systems,
          and optimize performance.
        </p>
        <p className="description">
          Rooted in insights, grounded in execution. We believe true innovation requires
          clarity of purpose, collaboration, and relentless focus on impact.
        </p>
      </div>
    </section>
    <section className="mission-panel ">
        <div className="mission-card">
            <h3>Our Purpose</h3>
            <p>To engineer clarity in complex systems — helping teams build, automate, and scale with confidence.</p>
        </div>
        <div className="focus-areas">
          <div className="focus-item">Cloud Engineering</div>
          <div className="focus-item">Observability & Data</div>
          <div className="focus-item">Automation & AI</div>
          <div className="focus-item">Project Management</div>
        </div>
    </section>
    <footer className="about-footer">
        <div id="contact" className="contact-methods">
            <a href="https://www.linkedin.com/company/synapsesolutionsllc" target="_blank" rel="noopener noreferrer">
                <img src={linkedinicon} alt="LinkedIn" style={{ width: "40px", height: "40px"}}/>
            </a>
            <a href="tel:+13015584771">
                <img src={phoneicon} alt="Phone" style={{ width: "40px", height: "40px"}}/>
            </a>
            <a href="mailto:jmbernard@synapsesolves.com">
                <img src={emailicon} alt="Email" style={{ width: "40px", height: "40px"}}/>
            </a>
        </div>
      <p>© 2024 Synapse Solutions LLC. All rights reserved.</p>
    </footer>
    </div>
  );
}
