import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <span>&lt;</span>Portfolio<span>/&gt;</span>
        </div>
        <p className="footer-copy">
          © {year} Alex Johnson. Built with React & Vite.
        </p>
        <button
          className="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          ↑ Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
