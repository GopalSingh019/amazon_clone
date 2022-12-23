import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const cartReducer = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartItems(state, action) {
            localStorage.getItem("cart");
            return {
                items:JSON.parse(localStorage.getItem("cart"))
            }
        },
        updateCartItems: function (state, action) {
            // let itemsCopy={...state.items};
            // console.log([...itemsCopy]);
            // itemsCopy(action.payload.payload);
            // return{
            //     itemsCopy
            // }

        }
    }
});

export default cartReducer.reducer

export const { setCartItems, updateCartItems } = cartReducer.actions;