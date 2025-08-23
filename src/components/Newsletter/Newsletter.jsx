import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-text">
          <h2>Stay Up To Date About Our Latest Offers</h2>
        </div>

        <form className="newsletter-form">
          <div className="newsletter-input-group">
            <FaEnvelope className="newsletter-icon" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter-input"
              required
            />
          </div>
          <button type="submit" className="newsletter-button">
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
