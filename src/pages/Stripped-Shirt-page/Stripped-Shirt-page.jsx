import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import VerticalShirt from "../../components/Stripped-Shirt/Stripped-Shirt";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";
import Newsletter from "../../components/Newsletter/Newsletter";

function App() {
  return (
    <div>
      <Header />
      <VerticalShirt />
      <SimilarProducts />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
