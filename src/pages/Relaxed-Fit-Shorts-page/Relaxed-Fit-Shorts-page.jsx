import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import RelaxedShorts from "../../components/Relaxed-Fit-Shorts/Relaxed-Fit-Shorts";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";
import Newsletter from "../../components/Newsletter/Newsletter";


function App() {
  return (
    <div>
      <Header />
      <RelaxedShorts />
      <SimilarProducts />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
