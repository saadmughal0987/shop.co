import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";   // 👈 Import Link
import "./header.css";

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    const offcanvasEl = document.getElementById("mobileOffcanvas");
    if (offcanvasEl) {
      const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasEl);
      if (bsOffcanvas) bsOffcanvas.hide();
    }

    if (targetId) {
      const section = document.querySelector(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
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
          <i className="fas fa-shopping-cart fa-lg cart-icon"></i>
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
              <button
                className="nav-link btn border-0 bg-transparent"
                onClick={(e) => handleNavClick(e, "")}
              >
                Shop
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn border-0 bg-transparent"
                onClick={(e) => handleNavClick(e, "#New-Arrivals")}
              >
                New Arrivals
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn border-0 bg-transparent"
                onClick={(e) => handleNavClick(e, "#top-selling")}
              >
                Top Selling
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn border-0 bg-transparent"
                onClick={(e) => handleNavClick(e, "#on-sale")}
              >
                On Sale
              </button>
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
            <Link to="/add-to-cart-page" className="d-none d-lg-flex align-items-center">
              <i className="fas fa-shopping-cart fa-lg cart-icon me-4"></i>
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
              <button
                className="nav-link btn border-0 bg-transparent"
                onClick={(e) => handleNavClick(e, "")}
              >
                Shop
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn border-0 bg-transparent"
                onClick={(e) => handleNavClick(e, "#New-Arrivals")}
              >
                New Arrivals
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn border-0 bg-transparent"
                onClick={(e) => handleNavClick(e, "#top-selling")}
              >
                Top Selling
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn border-0 bg-transparent"
                onClick={(e) => handleNavClick(e, "#on-sale")}
              >
                On Sale
              </button>
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
