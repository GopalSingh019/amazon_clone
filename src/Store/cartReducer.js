import { createSlice } from "@reduxjs/toolkit";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../FireBase/FirebaseConfig";

const initialState = {
    items: []
}

const cartReducer = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartItems(state, action) {

            let items=localStorage.getItem("cart") || '[]';

            return {
                items:JSON.parse(localStorage.getItem("cart") || '[]')
            }
        },
        updateCartItems: function (state, action) {
            
            return{
                ...action.payload.payload
            }

        }
    }
});

export default cartReducer.reducer

export const { setCartItems, updateCartItems } = cartReducer.actions;

// async actions to do api call

export const fetchCartItems=()=>async(dispatch)=>{
    try{
        const q = query(collection(db, "cart"), where("username", "==", auth?.currentUser?.email));

        const querySnapshot = await getDocs(q);
        console.log(querySnapshot.docs[0]._document.data.value.mapValue.fields);

    }catch(e){
        console.log(e);
    }
}