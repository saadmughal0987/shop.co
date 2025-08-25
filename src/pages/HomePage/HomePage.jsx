import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../../components/header/header";
import HeroSection from "../../components/hero/HeroSection";
import BrandStrip from "../../components/BrandStrip/BrandStrip";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import TopSelling from "../../components/TopSelling/TopSelling";
import OnSale from "../../components/OnSale/OnSale";
import Testimonials from "../../components/Testimonials/Testimonials";
import NewsLetter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
      <Header />
      <HeroSection />
      <BrandStrip />

      <div id="New-Arrivals">
        <NewArrivals />
      </div>

      <div id="top-selling">
        <TopSelling />
      </div>

      <div id="on-sale">
        <OnSale />
      </div>

      <Testimonials />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default HomePage;
