import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const itemsCarted=useSelector((state)=>(state.Cart.cartitems))
  console.log(itemsCarted)
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        <li>
          {itemsCarted.map(item=>(<CartItem key={item.id} id={item.id} name={item.name} price={item.price} quantity={item.quantity} total={item.totalprice}/>))}
        </li>
      </ul>
    </div>
  );
};

export default CartItems;
