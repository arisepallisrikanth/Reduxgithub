import React, { useEffect } from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import {cartactions} from "../store/CartSlice.js";

const Product = ({ name, id, imgURL, price }) => {
  const dispatch=useDispatch()
  const cart=useSelector((state)=>(state.Cart))

  function handleCart(){
    dispatch(cartactions.addtocart({id,price,name}))
    
  
   
  }
   
    
  return (
    <div className="card" >
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={handleCart}>Add to cart</button>
    </div>
  );
};

export default Product;
