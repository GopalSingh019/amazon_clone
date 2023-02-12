import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userReducers';
import cartReducer from './cartReducer';
import productReducer from "./productReducer";
import checkoutReducer from "./checkoutReducer";
import addressReducer from "./addressReducer";

export default configureStore({
    reducer:{
        user:userReducer,
        Items:cartReducer,
        Products:productReducer,
        Checkout:checkoutReducer,
        Address:addressReducer
    }
});