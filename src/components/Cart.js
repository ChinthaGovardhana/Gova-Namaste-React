import React from "react";
import ItemsList from "./ItemsList";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <ItemsList items={cartItem} />
      </div>
    </div>
  );
};

export default Cart;
