import React from "react";

import "./Auth.css";
import { useDispatch } from "react-redux";
import { actions } from "../store/authSlice";

const Auth = () => {
  const dispatch=useDispatch()
  function handlerLog(event){
    event.preventDefault()     
    dispatch(actions.loggedin())

    
  }
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handlerLog}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
