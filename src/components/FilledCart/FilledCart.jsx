import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";   
import "./FilledCart.css";

const FilledCart = () => {
  const { items, removeFromCart, updateQty } = useContext(CartContext);

  const subtotal = items.reduce((sum, it) => sum + it.price * it.quantity, 0);
  const discount = 0;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="container py-5">
      {/* Breadcrumb */}
      <p className="text-muted breadcrumb-text mb-3">
        <Link to="/" className="text-decoration-none text-muted">Home</Link> 
        <span className="mx-2">{">"}</span> Cart
      </p>

      {/* Heading */}
      <h2 className="cart-heading mb-4">YOUR CART</h2>

      <div className="row">
        {/* Left: Cart Items */}
        <div className="col-lg-8">
          <div className="cart-box p-3 rounded">
            {items.length === 0 ? (
              <p className="text-muted">Your cart is empty.</p>
            ) : (
              items.map((item, index) => (
                <div
                  key={index}
                  className="cart-item d-flex justify-content-between align-items-center border-bottom py-3"
                >
                  {/* Product Details */}
                  <div className="d-flex align-items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-img me-3"
                    />
                    <div>
                      <h5 className="cart-item-name">{item.name}</h5>
                      <p className="text-muted mb-1">
                        Size: {item.selectedSize || "Any"}, Color: {item.selectedColor || "Any"}
                      </p>
                      <p className="cart-price mb-0">${item.price}</p>
                    </div>
                  </div>

                  {/* Quantity + Trash */}
                  <div className="d-flex align-items-center">
                    <button
                      className="qty-btn qty"
                      onClick={() => updateQty(index, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>
                    <span className="mx-3">{item.quantity}</span>
                    <button
                      className="qty-btn qty"
                      onClick={() => updateQty(index, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      className="delete-btn ms-3"
                      onClick={() => removeFromCart(index)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="col-lg-4 mt-4 mt-lg-0">
          <div className="summary-box p-4 rounded">
            <h5 className="summary-heading mb-4">Order Summary</h5>
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-2 text-danger">
              <span>Discount (0%)</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold mb-3 total-row">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            {/* Promo Code */}
            <div className="input-group mb-3">
              <input type="text" className="form-control promo-input" placeholder="Add promo code" />
              <button className="btn btn-dark apply-btn">Apply</button>
            </div>
            <p className="text-muted small">
              Use promo code <b>Moemen</b> for 20% discount
            </p>

            {/* Checkout Button */}
            <button className="btn btn-dark w-100 checkout-btn">Go to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilledCart;
