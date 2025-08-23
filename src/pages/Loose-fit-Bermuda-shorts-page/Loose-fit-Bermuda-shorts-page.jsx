import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import Shorts from "../../components/Loose-fit-Bermuda-shorts/Loose-fit-Bermuda-shorts";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";
import Newsletter from "../../components/Newsletter/Newsletter";


function App() {
  return (
    <div>
      <Header />
      <Shorts />
      <SimilarProducts />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
