import React, { useState } from 'react';
import './landing.css';

export default function Landing() {
  const [active, setActive] = useState(null); // 'about' | 'services' | 'solutions' | 'contact' | null
  const toggle = (key) => setActive((p) => (p === key ? null : key));

  return (
    <div className="brain-only">
      <div className="brain-wrap" role="img" aria-label="Interactive brain map">


        {/* panels are now the interactive elements (click / Enter toggles) */}
        <div
          className={`lobe-panel panel--about ${active === 'about' ? 'visible' : ''}`}
          role="button"
          tabIndex={0}
          onClick={() => toggle('about')}
          onKeyDown={(e) => { if (e.key === 'Enter') toggle('about'); }}
        >
          <h4>About — Frontal Lobe</h4>
          <p>Mission, values, leadership. Short intro copy that ties to the frontal lobe area.</p>
        </div>

        <div
          className={`lobe-panel panel--services ${active === 'services' ? 'visible' : ''}`}
          role="button"
          tabIndex={0}
          onClick={() => toggle('services')}
          onKeyDown={(e) => { if (e.key === 'Enter') toggle('services'); }}
        >
          <h4>Services — Parietal</h4>
          <p>Consulting · Systems Integration · Cloud & Data Engineering.</p>
        </div>

        <div
          className={`lobe-panel panel--solutions ${active === 'solutions' ? 'visible' : ''}`}
          role="button"
          tabIndex={0}
          onClick={() => toggle('solutions')}
          onKeyDown={(e) => { if (e.key === 'Enter') toggle('solutions'); }}
        >
          <h4>Solutions — Temporal</h4>
          <p>Enterprise platforms, AI & automation, mission systems.</p>
        </div>

        <div
          className={`lobe-panel panel--contact ${active === 'contact' ? 'visible' : ''}`}
          role="button"
          tabIndex={0}
          onClick={() => toggle('contact')}
          onKeyDown={(e) => { if (e.key === 'Enter') toggle('contact'); }}
        >
          <h4>Contact — Occipital</h4>
          <p>Get in touch — email, phone, or request a call.</p>
        </div>
      </div>
    </div>
  );
}