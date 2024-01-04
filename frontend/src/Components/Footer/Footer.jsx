import React, { useState } from "react";
import "./Footer.css";
import whatsapp from "../Assets/whatsapp_icon.png";
import facebook from "../Assets/facebook.svg";

const Footer = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const openAboutModal = () => {
    setShowAboutModal(true);
  };

  const openContactModal = () => {
    setShowContactModal(true);
  };

  const openTermsModal = () => {
    setShowTermsModal(true);
  };

  const closeAboutModal = () => {
    setShowAboutModal(false);
  };

  const closeContactModal = () => {
    setShowContactModal(false);
  };

  const closeTermsModal = () => {
    setShowTermsModal(false);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>
            <a onClick={openAboutModal}>About Us</a>
          </h4>
          <p>Learn more about our company and team.</p>
        </div>
        <div className="footer-section">
          <h4>
            <a onClick={openContactModal}>Contact Us</a>
          </h4>
          <p>Get in touch with our customer support.</p>
        </div>
        <div className="footer-section">
          <h4>
            <a onClick={openTermsModal}>Terms and Conditions</a>
          </h4>
          <p>Read our terms and conditions of service.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 E-Shopping Clothing</p>
      </div>

      {showAboutModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeAboutModal}>
              &times;
            </span>
            <h2>About Us</h2>
            <p>
              We are a clothing retailer located in Sri Lanka, specializing in
              providing high-quality and fashionable clothing for men, women,
              and kids. Our journey began on April 29, 2020, with a mission to
              offer a wide variety of clothing options to suit the diverse
              tastes and preferences of our customers.
            </p>
            <p>
              At our store, you'll find a range of stylish and trendy apparel,
              from casual wear to formal attire, ensuring that everyone in the
              family can find something they love. Our commitment to customer
              satisfaction and our passion for fashion drive us to continually
              expand our collection and provide an exceptional shopping
              experience for all.
            </p>
          </div>
        </div>
      )}

      {showContactModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeContactModal}>
              &times;
            </span>
            <h2>Contact Us</h2>
            <p>
              We are available to assist you with any inquiries or assistance
              you may need. You can reach us through the following channels:
            </p>
            <ul>
              <li>
                <a href="https://wa.me/94711663875">
                  <img src={whatsapp} alt="" />
                  <h6>: Chat with us on WhatsApp</h6>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/SithumJeevantha">
                  <img src={facebook} alt="Facebook" />
                  <h6>: Join on Facebook</h6>
                </a>
              </li>
              <li>
                <h5>Phone: +94711663875</h5>
              </li>
              <li>
                <h5>Email: eshopping@gmail.com</h5>
              </li>
            </ul>
          </div>
        </div>
      )}

      {showTermsModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeTermsModal}>
              &times;
            </span>
            <h2>Terms and Conditions</h2>
            <p>
              By using our website, you agree to comply with and be bound by the
              following terms and conditions of use. Please read these terms
              carefully before using our website.
            </p>
            <h3>1. Agreement</h3>
            <p>
              The use of this website is subject to the following terms of use:
              <ul>
                <li>
                  The content of the pages of this website is for your general
                  information and use only. It is subject to change without
                  notice.
                </li>
                <li>
                  This website uses cookies to monitor browsing preferences.
                </li>
                <li>
                  Your use of any information or materials on this website is
                  entirely at your own risk, for which we shall not be liable.
                </li>
              </ul>
            </p>
            <h3>2. Privacy Policy</h3>
            <p>
              Our privacy policy outlines how we use and protect any information
              that you provide when using our website. By using our website, you
              consent to the collection and use of your information as described
              in our privacy policy.
            </p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
