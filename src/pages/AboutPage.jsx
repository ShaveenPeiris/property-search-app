import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/AboutPage.css";

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <Navbar />
      
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-overlay"></div>
          <div className="about-hero-content">
            <h1>About Viresta Real Estate</h1>
            <p>Your Trusted Partner in Finding the Perfect Home</p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="about-section mission-section">
          <div className="section-container">
            <h2>Our Mission</h2>
            <p className="lead-text">
              At Viresta Real Estate, we believe that finding your dream home should be an exciting and 
              seamless experience. Our mission is to revolutionize the property search process by combining 
              cutting-edge technology with personalized service.
            </p>
            <p>
              We're committed to helping families, first-time buyers, and seasoned investors discover 
              properties that perfectly match their lifestyle and aspirations. With a curated selection 
              of premium properties and advanced search tools, we make your property journey effortless.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-section values-section">
          <div className="section-container">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h3>Transparency</h3>
                <p>Honest communication and clear information at every step of your property journey.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Trust</h3>
                <p>Building lasting relationships through reliability and professional integrity.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">⭐</div>
                <h3>Excellence</h3>
                <p>Delivering exceptional service and exceeding expectations in everything we do.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">💡</div>
                <h3>Innovation</h3>
                <p>Leveraging the latest technology to enhance your property search experience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="about-section team-section">
          <div className="section-container">
            <h2>Meet Our Team</h2>
            <p className="section-subtitle">
              Dedicated professionals committed to helping you find your perfect property
            </p>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-photo">👨‍💼</div>
                <h3>John Anderson</h3>
                <p className="member-role">Chief Executive Officer</p>
                <p className="member-bio">20+ years of real estate expertise</p>
              </div>
              <div className="team-member">
                <div className="member-photo">👩‍💼</div>
                <h3>Sarah Mitchell</h3>
                <p className="member-role">Head of Property Sales</p>
                <p className="member-bio">Expert in luxury residential properties</p>
              </div>
              <div className="team-member">
                <div className="member-photo">👨‍💻</div>
                <h3>David Chen</h3>
                <p className="member-role">Technology Director</p>
                <p className="member-bio">Innovating the property search experience</p>
              </div>
              <div className="team-member">
                <div className="member-photo">👩‍💼</div>
                <h3>Emma Thompson</h3>
                <p className="member-role">Customer Relations Manager</p>
                <p className="member-bio">Ensuring exceptional client experiences</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="about-stats">
          <div className="section-container">
            <div className="stats-grid">
              <div className="stat-item">
                <h3>10+</h3>
                <p>Years of Excellence</p>
              </div>
              <div className="stat-item">
                <h3>1000+</h3>
                <p>Properties Listed</p>
              </div>
              <div className="stat-item">
                <h3>500+</h3>
                <p>Happy Families</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Expert Agents</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="section-container">
            <h2>Ready to Find Your Dream Home?</h2>
            <p>Let our team of experts guide you through your property journey</p>
            <div className="cta-buttons">
              <a href="/search" className="cta-btn primary">Start Searching</a>
              <a href="/contact" className="cta-btn secondary">Contact Us</a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}