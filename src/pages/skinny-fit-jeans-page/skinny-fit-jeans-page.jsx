import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import Jeans from "../../components/Skinny-Fit-Jeans/Skinny-Fit-Jeans";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";
import Newsletter from "../../components/Newsletter/Newsletter";


function App() {
  return (
    <div>
      <Header />
      <Jeans />
      <SimilarProducts />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
