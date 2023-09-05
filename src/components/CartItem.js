import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartactions } from "../store/CartSlice";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  console.log(id)
  const removeHandler = () => {
    dispatch(cartactions.removeCart(id));
  };
  const addHandler = () => {
    console.log()
    dispatch(
      cartactions.addtocart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={removeHandler}>
        -
      </button>
      <button className="cart-actions" onClick={addHandler}>
        +
      </button>
    </div>
  );
};

export default CartItem;
