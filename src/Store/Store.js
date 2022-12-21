import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userReducers';
import cartReducer from './cartReducer';
import productReducer from "./productReducer";

export default configureStore({
    reducer:{
        user:userReducer,
        Items:cartReducer,
        Products:productReducer
    }
});