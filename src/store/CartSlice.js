import { createSlice } from "@reduxjs/toolkit";
const CartSlice=createSlice({name:"Cart",initialState:{itemQuantity:0,cartitems:[],showcart:false},reducers:{
    addtocart(state,action){

        const newitem=action.payload
        console.log(newitem.id)
        const existingitem=state.cartitems.find((item)=>(item.id===newitem.id))
        if(existingitem){
            existingitem.quantity+=1
            existingitem.totalprice+=newitem.price
            console.log({...existingitem})
        }else{
            state.cartitems.push({id:newitem.id,name:newitem.name,price:newitem.price,quantity:1,totalprice:newitem.price})
            console.log({...state.cartitems})
            state.itemQuantity++
        }

    },
    removeCart(state,action){
        const CurrentitemId=action.payload
        console.log(CurrentitemId)
        const existing=state.cartitems.find((item)=>(item.id===CurrentitemId))
        if(existing.quantity>1){
            existing.quantity--
            existing.totalprice-=existing.price
        }else if(existing.quantity===1){
            console.log('keep')
            state.cartitems=state.cartitems.filter((item)=>item.id!==CurrentitemId)
            state.itemQuantity--
            // console.log(state.cartitems)
        }

    },
    ShowCart(state,action){
        console.log('locj')
        state.showcart=!state.showcart

    }
}})
export const cartactions = CartSlice.actions;
export default CartSlice;
