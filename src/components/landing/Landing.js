import React from "react";
import "./landing.css";
import linkedinicon from "./linkedin_icon.png";
import phoneicon from "./phone_icon.png";
import emailicon from "./email_icon.png";

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
        <div id="contact" className="contact-methods">
          <a href="https://www.linkedin.com/company/synapsesolutionsllc" target="_blank" rel="noopener noreferrer">
            <img src={linkedinicon} alt="LinkedIn" style={{ width: "40px", height: "40px"}}/>
          </a>
          <a href="tel:+3015584771">
            <img src={phoneicon} alt="Phone" style={{ width: "40px", height: "40px"}}/>
          </a>
          <a href="mailto:info@example.com">
            <img src={emailicon} alt="Email" style={{ width: "40px", height: "40px"}}/>
          </a>
        </div>
      </section>
    </div>
  );
}
