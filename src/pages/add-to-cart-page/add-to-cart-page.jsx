import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import Cart from "../../components/add-to-cart/add-to-cart";
import Newsletter from "../../components/Newsletter/Newsletter";


function App() {
  return (
    <div>
      <Header />
      <Cart />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
