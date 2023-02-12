import { createSlice} from "@reduxjs/toolkit";
import { collection,  getDoc, query } from "firebase/firestore";
import { auth, db } from "../FireBase/FirebaseConfig";

const addressSlice=createSlice({
    name:"address",
    initialState:{container:null},
    reducers:{
        setAddress:(state,action)=>{
            state.container=action.payload;
        }
    }
})

export const fetchAddress=()=>async (dispatch)=>{
    try{
        const addressQuery= query(collection(db, "address"), where("username", "==", auth.currentUser?.email));
        const data=await getDoc(addressQuery);
        dispatch(setAddress(data));
    }catch(e){

    }
}

export default addressSlice.reducer;