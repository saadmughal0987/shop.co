import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import TShirt from "../../components/sleave-stripped-t-shirt/sleave-stripped-t-shirt";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";
import Newsletter from "../../components/Newsletter/Newsletter";


function App() {
  return (
    <div>
      <Header />
      <TShirt />
      <SimilarProducts />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
