import "./About.css";

const About = () => {
  const stats = [
    { number: "1,5+", label: "Years Experience" },
    { number: "15+", label: "Projects Done" },
    { number: "10+", label: "Happy Clients" },
    { number: "5+", label: "Technologies" },
  ];

  return (
    <section id="about" className="about section">
      <div className="section-header">
        <p className="section-tag">Get to know me</p>
        <h2 className="section-title">About <span>Me</span></h2>
      </div>

      <div className="about-content">
        <div className="about-image-wrap">
          <div className="about-image">
            <span>PS</span>
          </div>
          <div className="about-badge">
            <span>Available for Work</span>
          </div>
        </div>

        <div className="about-text">
          <h3>Full Stack Developer based in New York</h3>
          <p>
            I'm a passionate developer with a love for building beautiful and
            functional web applications. I specialize in React, Node.js, and
            modern web technologies that help businesses grow online.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies,
            contributing to open source, or sharing knowledge through blog
            posts and community talks.
          </p>

          <div className="about-info">
            <div className="info-item">
              <span className="info-label">Name</span>
              <span className="info-value">Pradeep Sah</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email</span>
              <span className="info-value">pradeepsah@techgropse.com</span>
            </div>
            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">New Delhi</span>
            </div>
            <div className="info-item">
              <span className="info-label">Availability</span>
              <span className="info-value available">Open to work</span>
            </div>
          </div>

          <a href="#contact" className="btn btn-primary" onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}>
            Download CV
          </a>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((s) => (
          <div className="stat-card" key={s.label}>
            <h3>{s.number}</h3>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
