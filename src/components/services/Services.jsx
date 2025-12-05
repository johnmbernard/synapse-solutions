import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import linkedinicon from '/linkedin_icon.png';
import phoneicon from '/phone_icon.png';
import emailicon from '/email_icon.png';
import synapseLogo from '/synapseLogo.png';

export default function Services() {
  const services = [
    {
      title: "Project & Program Management",
      desc: "Bringing clarity and precision to complex initiatives — from concept to delivery — with data-driven execution and adaptive frameworks.",
      icon: "🧭",
      id: "project-management"
    },
    {
      title: "Platform Engineering",
      desc: "Building resilient cloud platforms with Kubernetes, automation, and observability baked in — so your teams can move fast and confidently.",
      icon: "⚙️",
      id: "platform-engineering"
    },
    {
      title: "Artificial Intelligence",
      desc: "Leveraging ML and intelligent systems to turn noise into insight. From predictive analytics to AI-assisted operations.",
      icon: "🧠",
      id: "artificial-intelligence"
    },
  ];

  

  return (
    <div className="services-page">
      <a href="https://synapsesolves.com/" target="_blank" rel="noopener noreferrer" className="logo-link">
        <img src={synapseLogo} alt="Synapse Solutions Logo" className="site-logo" />
      </a>
      <section className="services-intro">
      <h1 className="services-title">Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
            <div key={index} className="service-card"
            onClick={() => {
                document.getElementById(service.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ cursor: 'pointer' }}>
              <div className="service-icon">{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
            </div>
        ))}
      </div>
      </section>
      <section className="services-details">
        <div id="project-management" className="services-detail-card">
          <h2>Project & Program Management</h2>
          <p>
            We believe in the right tools for the right jobs. Whether it's Agile, Waterfall, or hybrid, we have the expertise to tailor project management approaches that fit your organization's unique needs.
            Our immense experience across industries, projects, and tools allows us to build adaptive frameworks and automate processes that bring clarity to decision-makers in real time and give time back to delivery
            teams. <i>We don't just manage projects — we engineer confidence in delivery.</i>
          </p>
            <h3>Our Project & Program Management services include:</h3>
            <ul className="ul">
              <li>Project Planning & Roadmapping</li>
              <li>Risk Management & Mitigation</li>
              <li>Stakeholder Communication & Real-Time Reporting</li>
              <li>Agile Coaching & Transformation</li>
              <li>Enterprise Scaling</li>
              <li>Resource Allocation & Cost Optimization</li>
            </ul>
          <p>
            <i>You can see our Project Management philsophy in action with our Project Management Software, <a href="https://synapsesolves.com/solutions/" target="_blank" rel="noopener noreferrer">Pathways</a>.</i>
          </p>
        </div>  
        <div id="platform-engineering" className="services-detail-card">
          <h2>Platform Engineering</h2>
          <p>
            From Day 0 architecture to Day 2 operations, we build cloud-native platforms that empower engineering teams to innovate rapidly while ensuring reliability, scalability, and security.
            Our approach emphasizes automation, infrastructure as code, and observability to create self-healing systems that adapt to changing demands. <i>We don't just build platforms — we engineer agility at scale.</i>
          </p>
            <h3>Our Platform Engineering services include:</h3>
            <ul className="ul">
              <li>Cloud Architecture Design & Implementation</li>
              <li>Kubernetes & Containerization</li>
              <li>Infrastructure as Code (IaC)</li>
              <li>CI/CD Pipeline Development</li>
              <li>Monitoring & Observability Solutions</li>
              <li>Security & Compliance Automation</li>
            </ul>
        </div>  
        <div id="artificial-intelligence" className="services-detail-card">
          <h2>Artificial Intelligence</h2>
          <p>
            We help organizations harness the power of AI and machine learning to transform data into actionable insights.
            From predictive analytics to intelligent automation, we design and implement solutions that drive efficiency, enhance decision-making, and unlock new opportunities. <i>We don't just deploy AI — we engineer intelligence into operations.</i>
          </p>
            <h3>Our Artificial Intelligence services include:</h3>
            <ul className="ul">
              <li>Data Strategy & Architecture</li>
              <li>Machine Learning Model Development & Deployment</li>
              <li>Intelligent Process Automation (IPA)</li>
              <li>Natural Language Processing (NLP) Solutions</li>
              <li>AI-Driven Analytics & Visualization</li>
              <li>Ethical AI & Governance</li>
            </ul>
        </div>
      </section>

      <footer className="services-footer">
        <p>✨ Engineering intelligence. Shaping outcomes. ✨</p>
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
      </footer>
    </div>
  );
}
