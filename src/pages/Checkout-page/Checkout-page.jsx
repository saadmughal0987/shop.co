import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import Checkout from "../../components/Checkout/Checkout";
import Newsletter from "../../components/Newsletter/Newsletter";


function App() {
  return (
    <div>
      <Header />
      <Checkout />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
