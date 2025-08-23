import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import PoloShirt from "../../components/Polo-T-Shirt/Polo-T-Shirt";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";
import Newsletter from "../../components/Newsletter/Newsletter";


function App() {
  return (
    <div>
      <Header />
      <PoloShirt />
      <SimilarProducts />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
