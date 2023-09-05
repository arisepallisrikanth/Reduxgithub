import { createSlice } from "@reduxjs/toolkit";

const uislice=createSlice({name:'ui',initialState:{ notification:null },reducers:{
    shownotification(state,action){
        state.notification={
            open:action.payload.open,
            type:action.payload.type,
            message:action.payload.message
        }
    }
}})
export const uiactions=uislice.actions
export default uislice;