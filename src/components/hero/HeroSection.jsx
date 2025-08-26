import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-grid-container" id="Hero">
      <div className="hero-text">
        <h1 className="hero-heading">
          FIND CLOTHES <br />
          THAT MATCHES <br />
          YOUR STYLE
        </h1>

        <p className="HeroText">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of style.
        </p>

        <a href="/#New-Arrivals" className="hero-button">
          Shop Now
        </a>

        <div className="hero-stats">
          <div>
            <h4 className="fw-bold">200+</h4>
            <p>International Brands</p>
          </div>
          <div>
            <h4 className="fw-bold">2,000+</h4>
            <p>High-Quality Products</p>
          </div>
          <div>
            <h4 className="fw-bold">30,000+</h4>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <img src="/assets/hero.svg" alt="Hero Model" className="hero-img" />
        <img src="/assets/star.png" alt="Star" className="star-top-right" />
        <img src="/assets/star.png" alt="Star" className="star-bottom-left" />
      </div>
    </div>
  );
};

export default HeroSection;