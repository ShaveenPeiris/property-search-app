import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/HomePage.css";

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Navbar with absolute positioning */}
      <Navbar />
      
      {/* Hero Section - Full 100vh */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">FIND YOUR DREAM HOME</h1>
          <p className="hero-subtitle">Discover the perfect property that matches your lifestyle</p>
          <div className="hero-actions">
            <Link to="/search" className="hero-btn primary">Start Searching</Link>
            <Link to="/results" className="hero-btn secondary">View Properties</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <h2>Why Choose Viresta</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>Premium Properties</h3>
              <p>Curated selection of high-quality homes in prime locations</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Advanced Search</h3>
              <p>Filter by type, price, bedrooms, and location to find exactly what you need</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">❤️</div>
              <h3>Save Favorites</h3>
              <p>Keep track of properties you love with our favorites feature</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Easy to Use</h3>
              <p>Intuitive interface designed for seamless property browsing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3>1000+</h3>
            <p>Properties Listed</p>
          </div>
          <div className="stat-item">
            <h3>500+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Expert Agents</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}