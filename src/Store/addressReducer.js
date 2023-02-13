import { createSlice} from "@reduxjs/toolkit";
import { collection,   doc,   getDoc,   getDocs, query, where } from "firebase/firestore";
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

export const {setAddress}=addressSlice.actions;

export const fetchAddress=()=>async (dispatch)=>{
    try{
        const q= query(collection(db, "address"), where("username", "==", auth.currentUser?.email));
        const querySnapshot = await getDoc(doc(db,"address",auth.currentUser.email));
        let data=querySnapshot.data() ;
        console.log(data);
        dispatch(setAddress(data));
    }catch(e){
        console.log(e);
    }
}

export default addressSlice.reducer;