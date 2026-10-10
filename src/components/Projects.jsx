import { useState } from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce app with product management, cart, checkout, and Stripe payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "fullstack",
    github: "https://github.com",
    live: "https://example.com",
    color: "#7c3aed",
  },
  {
    id: 2,
    title: "Task Manager App",
    description:
      "A drag-and-drop task management app with boards, labels, due dates, and team collaboration features.",
    tags: ["React", "TypeScript", "Redux"],
    category: "frontend",
    github: "https://github.com",
    live: "https://example.com",
    color: "#4f46e5",
  },
  {
    id: 3,
    title: "REST API Service",
    description:
      "A production-ready RESTful API with JWT authentication, rate limiting, and full CRUD operations.",
    tags: ["Node.js", "Express", "PostgreSQL"],
    category: "backend",
    github: "https://github.com",
    live: "https://example.com",
    color: "#0ea5e9",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A modern developer portfolio with animations, dark theme, and fully responsive layout.",
    tags: ["React", "CSS", "Vite"],
    category: "frontend",
    github: "https://github.com",
    live: "https://example.com",
    color: "#ec4899",
  },
  {
    id: 5,
    title: "Blog CMS",
    description:
      "A headless CMS-powered blog with markdown support, tagging, search, and an admin dashboard.",
    tags: ["Next.js", "MongoDB", "Tailwind"],
    category: "fullstack",
    github: "https://github.com",
    live: "https://example.com",
    color: "#f59e0b",
  },
  {
    id: 6,
    title: "Chat Application",
    description:
      "Real-time chat app with WebSocket support, rooms, private messages, and online presence tracking.",
    tags: ["React", "Socket.io", "Node.js"],
    category: "fullstack",
    github: "https://github.com",
    live: "https://example.com",
    color: "#10b981",
  },
];

const filters = ["all", "frontend", "backend", "fullstack"];

const Projects = () => {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="projects section">
      <div className="section-header">
        <p className="section-tag">What I've built</p>
        <h2 className="section-title">My <span>Projects</span></h2>
      </div>

      <div className="project-filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-btn ${active === f ? "active" : ""}`}
            onClick={() => setActive(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((project) => (
          <div className="project-card" key={project.id}>
            <div
              className="project-header"
              style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}11)` }}
            >
              <div className="project-icon" style={{ background: project.color }}>
                {project.title.charAt(0)}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
                  </svg>
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live demo">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zm-2 16H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h9a2 2 0 002-2v-7h-2v7z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
