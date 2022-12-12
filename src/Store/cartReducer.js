import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:null
}

const cartReducer=createSlice({
    name:"cart",
    initialState,
    reducers:{
        setCartItems(state,action){
            return {
                ...state,
                items:action.payload
            }
        },
    }
});

export default cartReducer.reducer

export const {setCartItems}=cartReducer.actions;