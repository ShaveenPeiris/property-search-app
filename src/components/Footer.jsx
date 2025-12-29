import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3>VIRESTA</h3>
            <p>
              Your trusted partner in finding the perfect property. We make real estate 
              simple, accessible, and enjoyable.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/search">Search</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:info@viresta.com">info@viresta.com</a>
              </li>
              <li>
                <a href="tel:+441234567890">+1 (234) 567-890</a>
              </li>
              <li>123 Real Estate Ave</li>
              <li>London, UK</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2024 Viresta Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}