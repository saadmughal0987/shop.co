import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import EmptyCart from "../EmptyCart-page/EmptyCart-page";
import FilledCart from "../FilledCart-page/FilledCart-page";

const CartPage = () => {
  const { items } = useContext(CartContext);

  return items.length === 0 ? <EmptyCart /> : <FilledCart />;
};

export default CartPage;
