import React from "react";
import "./landing.css";

export default function Landing() {
  return (
    <div className="page">
      <section id="about" className="panel">
        <h1>About</h1>
        <p>Learn more about us.</p>
      </section>

      <section id="services" className="panel">
        <h1>Services</h1>
        <p>Project Management | Platform | AI | Consulting</p>
      </section>

      <section id="solutions" className="panel">
        <h1>Solutions</h1>
        <p>Custom Software | Data Analytics | Machine Learning</p>
      </section>

      <section id="contact" className="panel">
        <h1>Contact</h1>
        <p>Get in touch with us.</p>
      </section>
    </div>
  );
}
