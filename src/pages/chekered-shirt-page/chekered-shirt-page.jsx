import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import Shirt from "../../components/chekered-shirt/chekered-shirt";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";
import Newsletter from "../../components/Newsletter/Newsletter";


function App() {
  return (
    <div>
      <Header />
      <Shirt />
      <SimilarProducts />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
