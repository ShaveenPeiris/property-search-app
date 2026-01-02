import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/ContactPage.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="page-wrapper">
      <Navbar />
      
      <div className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="contact-hero-overlay"></div>
          <div className="contact-hero-content">
            <h1>Get In Touch</h1>
            <p>We're here to help you find your perfect property</p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="contact-content">
          <div className="section-container">
            <div className="contact-grid">
              {/* Contact Form */}
              <div className="contact-form-wrapper">
                <h2>Send Us a Message</h2>
                <p className="form-intro">
                  Have a question? Fill out the form below and we'll get back to you as soon as possible.
                </p>

                {submitted && (
                  <div className="success-message">
                    ✓ Thank you! Your message has been sent successfully.
                  </div>
                )}

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 123 456 7890"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="property">Property Inquiry</option>
                      <option value="viewing">Schedule a Viewing</option>
                      <option value="selling">Selling a Property</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="contact-info-wrapper">
                <h2>Contact Information</h2>
                <p className="info-intro">
                  Reach out to us directly through any of the following channels.
                </p>

                <div className="contact-info-cards">
                  <div className="info-card">
                    <div className="info-icon">📍</div>
                    <h3>Visit Us</h3>
                    <p>123 Real Estate Avenue<br />London, UK<br />SW1A 1AA</p>
                  </div>

                  <div className="info-card">
                    <div className="info-icon">📧</div>
                    <h3>Email Us</h3>
                    <p>
                      <a href="mailto:info@viresta.com">info@viresta.com</a><br />
                      <a href="mailto:support@viresta.com">support@viresta.com</a>
                    </p>
                  </div>

                  <div className="info-card">
                    <div className="info-icon">📞</div>
                    <h3>Call Us</h3>
                    <p>
                      <a href="tel:+441234567890">+44 (123) 456-7890</a><br />
                      <a href="tel:+441234567891">+44 (123) 456-7891</a>
                    </p>
                  </div>

                  <div className="info-card">
                    <div className="info-icon">🕐</div>
                    <h3>Working Hours</h3>
                    <p>
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="social-section">
                  <h3>Follow Us</h3>
                  <div className="social-links">
                    <a href="#facebook" className="social-link">Facebook</a>
                    <a href="#twitter" className="social-link">Twitter</a>
                    <a href="#instagram" className="social-link">Instagram</a>
                    <a href="#linkedin" className="social-link">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <div className="map-container">
            <iframe
              title="Viresta Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540264396418!2d-0.1427683!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slondon!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}