import { configureStore } from "@reduxjs/toolkit";
import Slice from "./authSlice";
import CartSlice from "./CartSlice";
import uislice from "./uislice";
const store=configureStore({reducer:{auth:Slice.reducer,Cart:CartSlice.reducer,ui:uislice.reducer}})
export default store