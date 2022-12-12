import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userReducers';
import cartReducer from './cartReducer';

export default configureStore({
    reducer:{
        user:userReducer,
        Items:cartReducer
    }
});