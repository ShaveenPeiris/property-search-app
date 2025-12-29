import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/image/logo.jpeg" alt="Viresta Real Estate" className="navbar-logo-img" />
          <span className="navbar-logo-text">VIRESTA</span>
        </Link>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className={isActive("/")} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/search" className={isActive("/search")} onClick={closeMenu}>
              Search
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive("/about")} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className={isActive("/contact")} onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li className="mobile-sign-in">
            <button className="sign-in-btn" onClick={closeMenu}>Sign In</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}