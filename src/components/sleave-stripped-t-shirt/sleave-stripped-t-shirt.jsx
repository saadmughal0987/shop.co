import React, { useState, useContext } from "react";
import "../Black-Stripped-Shirt/Black-Stripped-Shirt.css";
import { CartContext } from "../../Context/CartContext";

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const colors = [
    "#8B4513",  
    "#000000",  
    "#006400",  
    "#8B0000",  
    "#FFD700",  
    "#FF4500",  
    "#00CED1",  
    "#1E90FF", 
  ];

  const sizes = ["Small", "Medium", "Large", "X-Large"];

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAdd = () => {
    addToCart({
      id: 4, 
      name: "Sleeve Stripped T-Shirt",
      price: 120,
      image: "/assets/Stripped-t-shirt.svg",
      selectedColor,
      selectedSize,
      quantity,
    });
  };

  return (
    <div className="container py-5 product-container">
      <nav className="breadcrumb">
        <a href="/" className="breadcrumb-item text-decoration-none nav-links">
          Home
        </a>
        <a href="/#New-Arrivals" className="breadcrumb-item text-decoration-none nav-links">
          Shop
        </a>
        <span className="breadcrumb-item active nav">Sleeve Stripped T-Shirt</span>
      </nav>

      <div className="row g-5">
        <div className="col-lg-6 text-center">
          <div className="product-image-wrapper">
            <img
              src="/assets/Stripped-t-shirt.svg"
              alt="Sleeve Stripped T-Shirt"
              className="img-fluid rounded"
            />
          </div>
        </div>

        <div className="col-lg-6">
          <h2 className="fw-bold heading">SLEEVE STRIPPED T-SHIRT</h2>
          <p className="mb-1">
            <span className="text-warning">★★★★☆</span> 4.5/5
          </p>
          <h4 className="fw-bold mb-4 price">$120</h4>
          <hr />

          <h6 className="mb-2">Select Colors</h6>
          <div className="d-flex flex-wrap mb-4">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`color-circle me-2 mb-2 ${selectedColor === color ? "selected" : ""}`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              >
                {selectedColor === color && <span className="tick"> ✓ </span>}
              </div>
            ))}
          </div>
          <hr />

          <h6 className="mb-2">Choose Size</h6>
          <div className="mb-4 ">
            {sizes.map((size, index) => (
              <button
                key={index}
                className={`btn me-2 mb-2 sizes ${selectedSize === size ? "active" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <hr />

          <div className="d-flex align-items-center mb-4">
            <div
              className="input-group quantity-group me-3 qty-selection"
              style={{ width: "130px", height: "55px" }}
            >
              <button className="btn qty-btn decrease" onClick={decreaseQty}>
                −
              </button>
              <input
                type="text"
                className="form-control text-center"
                value={quantity}
                readOnly
              />
              <button className="btn increase" onClick={increaseQty}>
                +
              </button>
            </div>
            <button
              className="btn btn-dark px-4 flex-grow-1 add-to-cart"
              onClick={handleAdd}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
