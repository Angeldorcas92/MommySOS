import React from "react";
import { Link } from "react-router-dom";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h3 className="footer-heading">We're Here for You</h3>
        <p className="footer-text">
          At MommySOS, we understand the transformative journey of motherhood.
          We're dedicated to providing compassionate and personalized after-birth care
          to support you in this beautiful chapter of your life. Our team of
          experts is here to ensure your well-being and nurture your growth as a mother.
          Together, let's embrace the joys, navigate the challenges, and celebrate the
          incredible strength that comes with being a mom.
        </p>
        <div className="footer-social-icons">
          <Link to="https://web.facebook.com/profile.php?id=100093488914515" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-bottom-text">
          MommySOS &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
