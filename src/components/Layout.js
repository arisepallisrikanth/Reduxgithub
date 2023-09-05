import React from "react";
import Header from "./Header";
import Products from "./Products";
import CartItems from "./CartItems";
import "./Layout.css";
import { useSelector } from "react-redux";
const Layout = () => {
  let total = 0;
  const CartShowing=useSelector((state)=>state.Cart.showcart)
  const totalitems=useSelector((state)=>state.Cart.cartitems)
  totalitems.map((item)=>{
    total+=item.totalprice
  })
  
  
  console.log(typeof(totalitems))


  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
      {CartShowing&&<CartItems/>}
    </React.Fragment>
  );
};

export default Layout;
