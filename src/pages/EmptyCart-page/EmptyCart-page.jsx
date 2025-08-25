import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import Cart from "../../components/EmptyCart/EmptyCart";
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
