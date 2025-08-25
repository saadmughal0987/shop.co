import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import FiiledCart from "../../components/FilledCart/FilledCart";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";
import Newsletter from "../../components/Newsletter/Newsletter";


function App() {
  return (
    <div>
      <Header />
      <FiiledCart />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
