import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Learn more about our company and team.</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Get in touch with our customer support.</p>
        </div>
        <div className="footer-section">
          <h4>Terms and Conditions</h4>
          <p>Read our terms and conditions of service.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 E-Shopping Clothing</p>
      </div>
    </footer>
  );
};

export default Footer;
