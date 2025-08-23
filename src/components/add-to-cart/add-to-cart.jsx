import React from "react";
import "./add-to-cart.css";

const EmptyCart = () => {
  return (
    <div className="container-fluid d-flex align-items-center py-5">
      <div className="row w-100 align-items-center flex-column flex-md-row">
        {/* Right Side - Image (60%) */}
        <div className="col-12 col-md-7 text-center order-1 order-md-2">
          <img
            src="/assets/ccart.svg"
            alt="Empty Cart"
            className="emptycart-img"
          />
        </div>

        {/* Left Side - Text (40%) */}
        <div className="col-12 col-md-5 d-flex flex-column justify-content-center align-items-center text-center order-2 order-md-1">
          <h1 className="emptycart-title">
            YOUR CART IS <br /> EMPTY
          </h1>
          <p className="emptycart-text">
            Must add items on the cart before you proceed to checkout
          </p>
          <a href="/shop" className="emptycart-btn">
            Go to Shop
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
