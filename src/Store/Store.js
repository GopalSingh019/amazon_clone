import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userReducers';
import cartReducer from './cartReducer';
import productReducer from "./productReducer";
import checkoutReducer from "./checkoutReducer";

export default configureStore({
    reducer:{
        user:userReducer,
        Items:cartReducer,
        Products:productReducer,
        Checkout:checkoutReducer
    }
});