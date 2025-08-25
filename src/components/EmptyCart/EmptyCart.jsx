import React, { useEffect, useState } from "react";
import "./EmptyCart.css";

const EmptyCart = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="container-fluid emptycart-container d-flex align-items-center py-5">
      <div className="row w-100 align-items-center flex-column flex-md-row">
        <div className="col-12 col-md-7 text-center order-1 order-md-2">
          <img
            src="/assets/cart.png"
            alt="Empty Cart"
            className="emptycart-img"
          />
        </div>

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
