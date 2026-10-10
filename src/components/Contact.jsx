import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your email service (EmailJS, Formspree, etc.)
    console.log("Form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "pradeepsah@techgropse.com",
      href: "mailto:pradeepsah@techgropse.com",
    },
    {
      icon: "📍",
      label: "Location",
      value: "New Delhi",
      href: null,
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/alexjohnson",
      href: "https://linkedin.com",
    },
  ];

  return (
    <section id="contact" className="contact section">
      <div className="section-header">
        <p className="section-tag">Get in touch</p>
        <h2 className="section-title">Contact <span>Me</span></h2>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <h3>Let's work together</h3>
          <p>
            I'm currently available for freelance work and full-time
            positions. If you have a project in mind or just want to say hi,
            my inbox is always open.
          </p>

          <div className="contact-items">
            {contactInfo.map((item) => (
              <div className="contact-item" key={item.label}>
                <div className="contact-item-icon">{item.icon}</div>
                <div>
                  <span className="contact-item-label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="contact-item-value">
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact-item-value">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="contact-socials">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3A2 2 0 0121 5V19A2 2 0 0119 21H5A2 2 0 013 19V5A2 2 0 015 3H19M18.5 18.5V13.2A3.26 3.26 0 0015.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0115.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 008.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 005.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
              </svg>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {sent && (
            <div className="form-success" role="alert">
              ✅ Message sent! I'll get back to you soon.
            </div>
          )}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary submit-btn">
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
