import React from "react";
import Header from "../../components/header/header";
import HeroSection from "../../components/hero/HeroSection";
import BrandStrip from "../../components/BrandStrip/BrandStrip";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import TopSelling from "../../components/TopSelling/TopSelling";
import OnSale from "../../components/OnSale/OnSale";
import Testimonials from "../../components/Testimonials/Testimonials";
import NewsLetter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <BrandStrip />
      <NewArrivals />
      <TopSelling />
      <OnSale />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
