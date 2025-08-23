import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import GraphicShirt from "../../components/Graphic-Shirt/Graphic-Shirt";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";
import Newsletter from "../../components/Newsletter/Newsletter";


function App() {
  return (
    <div>
      <Header />
      <GraphicShirt />
      <SimilarProducts />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
