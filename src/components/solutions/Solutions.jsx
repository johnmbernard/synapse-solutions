import React from 'react';
import './Solutions.css';
import { Link } from 'react-router-dom';
import synapseLogo from '/synapseLogo.png';

export default function Solutions() {
  return (
    <div className="solutions-page">
      <a href="https://synapsesolves.com/" target="_blank" rel="noopener noreferrer" className="logo-link">
        <img src={synapseLogo} alt="Synapse Solutions Logo" className="site-logo" />
      </a>

      {/* Hero Section */}
      <section className="solutions-intro">
        <div className="solutions-hero">
          <h1>Pathways</h1>
          <p className="tagline">Automating product management tasks so teams focus on outcomes.</p>
          <span className="coming-soon">Coming Soon</span>
        </div>
      </section>

      {/* Features Section */}
      <section className="solutions-features">
        <h2>What Pathways Will Automate</h2>
        <ul className="feature-list">
          <li>
            <strong>Capacity Management</strong>
            <span>Model and allocate resource capacity automatically.</span>
          </li>
          <li>
            <strong>Schedule Forecasting</strong>
            <span>Predict delivery dates based on historical throughput.</span>
          </li>
          <li>
            <strong>Dependency Management</strong>
            <span>Detect and surface cross-team blockers and risks.</span>
          </li>
          <li>
            <strong>Integrated Reporting</strong>
            <span>Roll up metrics for stakeholders without manual work.</span>
          </li>
        </ul>
      </section>

      {/* Values Section */}
      <section className="solutions-values">
        <h2>Core Values</h2>
        <div className="values">
          <div>
            <div className="value">Clarity</div>
            <div className="value-description">
              We present insights and forecasts that are simple to act on — no opaque models.
            </div>
          </div>
          <div>
            <div className="value">Velocity</div>
            <div className="value-description">
              Automate repeatable PM work so teams can move faster without sacrificing quality.
            </div>
          </div>
          <div>
            <div className="value">Reliability</div>
            <div className="value-description">
              Predictable scheduling and dependency handling you can trust for planning.
            </div>
          </div>
          <div>
            <div className="value">Collaboration</div>
            <div className="value-description">
              Cross-team visibility and signals so stakeholders stay aligned.
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="solutions-cta">
        <div className="cta">
          <p>Want early access to Pathways?</p>
          <a className="panel-link" href="mailto:hello@synapsesolves.com">Request Access</a>
        </div>
      </section>

      <footer className="solutions-footer">
        Building the future of intelligent project management.
      </footer>
    </div>
  );
}