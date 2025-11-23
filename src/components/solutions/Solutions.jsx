import React from 'react';
import './Solutions.css';
import { Link } from 'react-router-dom';

export default function Solutions() {
  return (
    <div className="solutions-page">
      <Link to="/" className="back-link">← Home</Link>

      <header className="solutions-hero">
        <h1>Pathways</h1>
        <p className="tagline">Automating product management tasks so teams focus on outcomes.</p>
        <span className="coming-soon">Coming soon</span>
      </header>

      <section className="features" aria-labelledby="features-heading">
        <h2 id="features-heading">What Pathways will automate</h2>

        <ul className="feature-list">
          <li>
            <strong>Capacity management</strong>
            <span> — model and allocate resource capacity automatically.</span>
          </li>
          <li>
            <strong>Schedule forecasting</strong>
            <span> — predict delivery dates based on historical throughput.</span>
          </li>
          <li>
            <strong>Dependency management</strong>
            <span> — detect and surface cross-team blockers and risks.</span>
          </li>
          <li>
            <strong>Integrated reporting</strong>
            <span> — roll up metrics for stakeholders without manual work.</span>
          </li>
        </ul>
      </section>

      <section className="cta">
        <p>Want early access? <a className="panel-link" href="mailto:hello@example.com">Request access</a></p>
      </section>
    </div>
  );
}