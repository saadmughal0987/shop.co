import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import Tshirt from "../../components/Black-Stripped-Shirt/Black-Stripped-Shirt";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";
import Newsletter from "../../components/Newsletter/Newsletter";


function App() {
  return (
    <div>
      <Header />
      <Tshirt />
      <SimilarProducts />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
