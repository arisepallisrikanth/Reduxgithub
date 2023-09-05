import {createSlice} from "@reduxjs/toolkit";
const Slice=createSlice({name:'auth',initialState:{IsLoggedin:false},reducers:{
    
        loggedin(state,action){
            state.IsLoggedin=true

        },
        loggedout(state,action){
            state.IsLoggedin=false
        }
    
}})
export const actions = Slice.actions;   
export default Slice;