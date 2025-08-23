import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";
import "./Footer.css"; // External CSS

const Footer = () => {
  return (
    <footer className="footer-section py-5 mt-5">
      <div className="container">
        <div className="row gy-4 justify-content-between">
          {/* Left Description + Social Icons */}
          <div className="col-md-6 col-lg-3">
            <h2 className="fw-bold">SHOP.CO</h2>
            <p className="mt-3 text-muted">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="#" className="social-icon">
                <FaXTwitter />
              </a>
              <a href="#" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          <div className="col-md-6 col-lg-2">
            <h5 className="fw-semibold">Company</h5>
            <ul className="list-unstyled mt-3">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features of SHOP.CO</a>
              </li>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-2">
            <h5 className="fw-semibold">Help</h5>
            <ul className="list-unstyled mt-3">
              <li>
                <a href="#">Customer Support</a>
              </li>
              <li>
                <a href="#">Delivery Details</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-2">
            <h5 className="fw-semibold">FAQ</h5>
            <ul className="list-unstyled mt-3">
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Manage Deliveries</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Payments</a>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-2">
            <h5 className="fw-semibold">Resources</h5>
            <ul className="list-unstyled mt-3">
              <li>
                <a href="#">Free eBooks</a>
              </li>
              <li>
                <a href="#">Development Tutorial</a>
              </li>
              <li>
                <a href="#">How to - Blog</a>
              </li>
              <li>
                <a href="#">Youtube Playlist</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        {/* Bottom Row */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="text-muted mb-2 mb-md-0">
            Shop.co © 2000-2024, All Rights Reserved
          </p>
          <div className="payment-logos">
            <img src="/assets/banking.svg" alt="Payment Methods" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
