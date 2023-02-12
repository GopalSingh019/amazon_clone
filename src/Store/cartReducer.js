import { createSlice } from "@reduxjs/toolkit";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../FireBase/FirebaseConfig";

const initialState = {
    container: []
}

const cartReducer = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartItems(state, action) {

            // let items=localStorage.getItem("cart") || '[]';

            state.container=action.payload;
        },
        
    }
});

export default cartReducer.reducer

export const { setCartItems } = cartReducer.actions;

// async actions to do api call

export const fetchCartItems=()=>async(dispatch)=>{
    try{
        
        const q = query(collection(db, "cart"), where("username", "==", auth.currentUser?.email));

        const querySnapshot = await getDocs(q);
        const data=querySnapshot.docs.map((item)=>{return {...item._document.data.value.mapValue.fields,ref:item.id}});
        dispatch(setCartItems(data));
        

    }catch(e){
        console.log(e);
    }
}