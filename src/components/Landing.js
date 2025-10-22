// ...existing code...
import React, { useState } from 'react';
import './landing.css';

export default function Landing({ logo }) {
  const [activeNode, setActiveNode] = useState(null); // 'about' | 'services' | 'solutions' | 'contact' | null

  const nodes = [
    { key: 'about', title: 'About', summary: 'Who we are — mission, values, team.' },
    { key: 'services', title: 'Services', summary: 'Consulting · Systems Integration · Cloud & Data Engineering' },
    { key: 'solutions', title: 'Solutions', summary: 'Mission systems · Enterprise platforms · AI & Automation' },
    { key: 'contact', title: 'Contact', summary: 'Get in touch — email, phone, or request a call.' },
  ];

  const toggleNode = (key) => {
    setActiveNode(prev => (prev === key ? null : key));
  };

  return (
    <div className="landing brain-page">
      <nav className="nav">
        <img src={logo} className="nav-logo" alt="Synapse" />
        <ul className="nav-links">
          <li><button onClick={() => setActiveNode('about')}>About</button></li>
          <li><button onClick={() => setActiveNode('services')}>Services</button></li>
          <li><button onClick={() => setActiveNode('solutions')}>Solutions</button></li>
          <li><button onClick={() => setActiveNode('contact')}>Contact</button></li>
        </ul>
      </nav>

      <section className="section hero brain-section" aria-label="Synaptic map">
        <div className="brain-wrap">
          <div className="brain-center" aria-hidden>
            <img src={logo} alt="Synapse logo / brain" />
          </div>

          <div className="nodes">
            {nodes.map((n, i) => (
              <button
                key={n.key}
                className={`node node--${n.key} ${activeNode === n.key ? 'expanded' : ''}`}
                onClick={() => toggleNode(n.key)}
                onKeyDown={(e) => { if (e.key === 'Enter') toggleNode(n.key); }}
                aria-pressed={activeNode === n.key}
                aria-expanded={activeNode === n.key}
                title={n.title}
              >
                <div className="node-dot" />
                <span className="node-label">{n.title}</span>

                <div className="node-panel" role="region" aria-hidden={activeNode !== n.key}>
                  <h4>{n.title}</h4>
                  <p>{n.summary}</p>
                  <div className="node-actions">
                    <button className="btn primary" onClick={(e) => e.stopPropagation()}>Learn More</button>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
// ...existing code...