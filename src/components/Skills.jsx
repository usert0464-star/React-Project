import "./Skills.css";

const skills = [
  { name: "HTML5", level: 95, color: "#e34f26" },
  { name: "CSS3", level: 90, color: "#1572b6" },
  { name: "JavaScript", level: 88, color: "#f7df1e" },
  { name: "React", level: 85, color: "#61dafb" },
  { name: "Node.js", level: 78, color: "#339933" },
  { name: "TypeScript", level: 72, color: "#3178c6" },
  { name: "MongoDB", level: 70, color: "#47a248" },
  { name: "Git", level: 85, color: "#f05032" },
];

const techBadges = [
  "React", "Node.js", "Express", "MongoDB", "PostgreSQL",
  "TypeScript", "Tailwind CSS", "Git", "REST API", "Figma",
  "Docker", "AWS",
];

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="section-header">
        <p className="section-tag">What I work with</p>
        <h2 className="section-title">My <span>Skills</span></h2>
      </div>

      <div className="skills-layout">
        <div className="skills-bars">
          <h3>Technical Proficiency</h3>
          {skills.map((skill) => (
            <div className="skill-bar-wrap" key={skill.name}>
              <div className="skill-bar-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar-track">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%`, background: skill.color }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="skills-right">
          <h3>Technologies & Tools</h3>
          <div className="tech-badges">
            {techBadges.map((tech) => (
              <span className="tech-badge" key={tech}>{tech}</span>
            ))}
          </div>

          <div className="skills-cards">
            <div className="skill-card">
              <div className="skill-card-icon frontend">⚡</div>
              <h4>Frontend</h4>
              <p>Building pixel-perfect, responsive UIs with React and modern CSS.</p>
            </div>
            <div className="skill-card">
              <div className="skill-card-icon backend">🛠</div>
              <h4>Backend</h4>
              <p>Designing scalable APIs and server logic with Node.js and Express.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
