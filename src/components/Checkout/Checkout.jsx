import React from "react";
import { Link } from "react-router-dom"; 
import "./Checkout.css";

const ThankYou = () => {
  return (
    <div className="thankyou-wrapper">
      
      <div className="thankyou-left">
        <h1 className="thankyou-title">
          THANK YOU FOR <br /> YOUR PURCHASE
        </h1>
        <p className="thankyou-subtext">
          Must add items on the card before you proceed to checkout
        </p>
        <Link to="/" className="thankyou-btn">
          Go to Shop
        </Link>
      </div>

      <div className="thankyou-right">
        <img
          src="/assets/confirmation.png"
          alt="Order Confirmed"
          className="thankyou-image"
        />
      </div>

    </div>
  );
};

export default ThankYou;
