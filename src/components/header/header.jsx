import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./header.css";
import { CartContext } from "../../Context/CartContext";

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  const { totalQty } = useContext(CartContext);

  const handleSearch = (e) => e.preventDefault();

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  useEffect(() => {
    if (darkMode) document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
  }, [darkMode]);

  const handleNavClick = () => {
    const offcanvas = document.getElementById("mobileOffcanvas");
    if (offcanvas && window.bootstrap) {
      const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvas);
      if (bsOffcanvas) bsOffcanvas.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-3">
      <div className="container-fluid">
        <Link className="navbar-brand fs-4" to="/">
          SHOP.CO
        </Link>

        <Link
          to="/add-to-cart-page"
          className="d-lg-none d-flex align-items-center ms-auto me-2"
        >
          <div className="cart-icon-wrapper">
            <i className="fas fa-shopping-cart fa-lg cart-icon"></i>
            {totalQty > 0 && (
              <span className="cart-badge">{totalQty}</span>
            )}
          </div>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileOffcanvas"
          aria-controls="mobileOffcanvas"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
           
            <li className="nav-item">
              <HashLink smooth to="/#New-Arrivals" className="nav-link">
                New Arrivals
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink smooth to="/#top-selling" className="nav-link">
                Top Selling
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink smooth to="/#on-sale" className="nav-link">
                On Sale
              </HashLink>
            </li>
          </ul>

          <form
            className="d-flex align-items-center me-3"
            onSubmit={handleSearch}
          >
            <div className="input-group custom-search-bar">
              <span className="input-group-text bg-white border-end-0">
                <i className="fas fa-search search-icon"></i>
              </span>
              <input
                className="form-control border-start-0"
                type="search"
                placeholder="Search for products..."
                aria-label="Search"
              />
            </div>
          </form>

          <div className="d-flex align-items-center">
            <Link
              to="/add-to-cart-page"
              className="d-none d-lg-flex align-items-center"
            >
              <div className="cart-icon-wrapper me-4">
                <i className="fas fa-shopping-cart fa-lg cart-icon"></i>
                {totalQty > 0 && (
                  <span className="cart-badge">{totalQty}</span>
                )}
              </div>
            </Link>
            <button
              onClick={toggleDarkMode}
              className="btn toggle-dark-btn"
              title="Toggle Dark Mode"
            >
              <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
            </button>
          </div>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-end d-lg-none"
        tabIndex="-1"
        id="mobileOffcanvas"
        aria-labelledby="mobileOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileOffcanvasLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body d-flex flex-column justify-content-between">
          <ul className="navbar-nav">
            <li className="nav-item">
              <HashLink
                smooth
                to="/#shop"
                className="nav-link"
                onClick={handleNavClick}
              >
                Shop
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#New-Arrivals"
                className="nav-link"
                onClick={handleNavClick}
              >
                New Arrivals
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#top-selling"
                className="nav-link"
                onClick={handleNavClick}
              >
                Top Selling
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#on-sale"
                className="nav-link"
                onClick={handleNavClick}
              >
                On Sale
              </HashLink>
            </li>

            <li className="nav-item mt-2">
              <form onSubmit={handleSearch}>
                <div className="input-group custom-search-bar-mobile">
                  <span className="input-group-text bg-white border-end-0">
                    <i className="fas fa-search search-icon"></i>
                  </span>
                  <input
                    className="form-control border-start-0"
                    type="search"
                    placeholder="Search for products..."
                    aria-label="Search"
                  />
                </div>
              </form>
            </li>

            <li className="nav-item mt-3">
              <button
                onClick={toggleDarkMode}
                className="btn w-100 toggle-dark-btn"
                title="Toggle Dark Mode"
                style={{ color: "white" }}
              >
                <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}></i>{" "}
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
