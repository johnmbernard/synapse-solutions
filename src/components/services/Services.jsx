import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Project & Program Management",
      desc: "Bringing clarity and precision to complex initiatives — from concept to delivery — with data-driven execution and adaptive frameworks.",
      icon: "🧭",
    },
    {
      title: "Platform Engineering",
      desc: "Building resilient cloud platforms with Kubernetes, automation, and observability baked in — so your teams can move fast and confidently.",
      icon: "⚙️",
    },
    {
      title: "Artificial Intelligence & Automation",
      desc: "Leveraging ML and intelligent systems to turn noise into insight. From predictive analytics to AI-assisted operations.",
      icon: "🧠",
    },
  ];

  return (
    <div className="services-page">
      <Link to="/" className="back-link">← Home</Link>
      <h1 className="services-title">Our Services</h1>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>

      <footer className="services-footer">
        <p>✨ Engineering intelligence. Shaping outcomes. ✨</p>
      </footer>
    </div>
  );
}
