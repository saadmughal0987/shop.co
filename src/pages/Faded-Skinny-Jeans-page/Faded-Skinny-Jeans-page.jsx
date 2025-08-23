import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import FadedJeans from "../../components/Faded-Skinny-Jeans/Faded-Skinny-Jeans";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";
import Newsletter from "../../components/Newsletter/Newsletter";


function App() {
  return (
    <div>
      <Header />
      <FadedJeans />
      <SimilarProducts />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
