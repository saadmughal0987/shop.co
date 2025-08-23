import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import CourageShirt from "../../components/Courage-Graphic-T-Shirt/Courage-Graphic-T-Shirt";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";
import Newsletter from "../../components/Newsletter/Newsletter";


function App() {
  return (
    <div>
      <Header />
      <CourageShirt />
      <SimilarProducts />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
