import { createSlice } from "@reduxjs/toolkit";

const initialState={
    item:null
}

const checkoutReducer=createSlice({
    name:"checkout",
    initialState,
    reducers:{
        setCheckoutItems:(state,action)=>{
            return {
                item:action.payload.payload
            }
        }
    }
});

export const {setCheckoutItems}=checkoutReducer.actions;

export default checkoutReducer.reducer;