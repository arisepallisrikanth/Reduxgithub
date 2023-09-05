import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartactions } from "../store/CartSlice";
import { actions } from "../store/authSlice";
const Cart = () => {
  const quantity = useSelector((state)=>(state.Cart.itemQuantity));
  const dispatch=useDispatch()
  const showcart=()=>{
    console.log('jrwv')
    dispatch(cartactions.ShowCart())
  }
  const logoutfun=()=>{
    console.log('logout')
    dispatch(actions.loggedout())
  }
  return (
    <div className="cartIcon">
      <h3 onClick={showcart}>Cart: {quantity} Items</h3>
      <button className="logout" onClick={logoutfun}>logout</button>
    </div>
  );
};

export default Cart;
