import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import Notifier from "./components/Notifier";
import { uiactions } from "./store/uislice";
function App() {
  const Selector=useSelector((state)=>(state.auth.IsLoggedin))
  console.log(Selector)
  const ItemsSelector=useSelector((state)=>(state.Cart.cartitems))
  console.log(ItemsSelector)
  const cart=useSelector((state)=>(state.Cart))
  const notify=useSelector((state)=>(state.ui.notification));
  const dispatch=useDispatch()

  useEffect(()=>{
    const sendreq= async()=>{
      dispatch(uiactions.shownotification({open:true,
        type:'warning',
        message:"Sending request"

      }))

      const res=await fetch("https://reduxcarthttp-default-rtdb.firebaseio.com/cartItems.json",{method:"PUT",body:JSON.stringify(cart) })
      const info=await res.json()
      dispatch(uiactions.shownotification({open:true,
        type:'success',
        message:"Request sent to databsase successfully"
      
      }))
   
    }
    sendreq().catch(err=>{
      dispatch(uiactions.shownotification({open:true,type:'error',message:"Got an error"
    }))
    });

  },[cart])  
  
  return (
    <div className="App">
      <Notifier severity={notify.type} message={notify.message}/>
      {!Selector&&<Auth />}
      {Selector&&<Layout /> }
    </div>
  );
}

export default App;
