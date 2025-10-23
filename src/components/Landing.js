import React, { useState } from 'react';
import './landing.css';

export default function Landing() {
  const [active, setActive] = useState(null);
  const toggle = (key) => setActive((p) => (p === key ? null : key));

  return (
    <div className="brain-only">
      <div className="brain-wrap" role="img" aria-label="Interactive brain map">

        <div
          className={`lobe-panel panel--about ${active === 'about' ? 'visible' : ''}`}
          onClick={() => toggle('about')}
        >
          <h4>About</h4>
          <p>Mission, values, leadership tied to the frontal lobe area.</p>
        </div>

        <div
          className={`lobe-panel panel--services ${active === 'services' ? 'visible' : ''}`}
          onClick={() => toggle('services')}
        >
          <h4>Services</h4>
          <p>Consulting · Systems Integration · Cloud & Data Engineering.</p>
        </div>

        <div
          className={`lobe-panel panel--solutions ${active === 'solutions' ? 'visible' : ''}`}
          onClick={() => toggle('solutions')}
        >
          <h4>Solutions</h4>
          <p>Enterprise platforms, AI & automation, mission systems.</p>
        </div>

        <div
          className={`lobe-panel panel--contact ${active === 'contact' ? 'visible' : ''}`}
          onClick={() => toggle('contact')}
        >
          <h4>Contact</h4>
          <p>Get in touch — email, phone, or request a call.</p>
        </div>

      </div>
    </div>
  );
}
