import { createSlice } from "@reduxjs/toolkit";
import {  collection,  getDocs } from "firebase/firestore";
import { db } from "../FireBase/FirebaseConfig";


const countrySlice=createSlice({
    name:'country',
    initialState:{
        container:null
    },
    reducers:{
        setContry:(state,action)=>{
            state.container=action.payload;
        }
    }
})

export const fetchCountry=()=>async (dispatch)=>{
    const querySnapShot=await getDocs(collection(db,'country'));
    let conData;
    querySnapShot.forEach(doc=>conData=doc.data());
    console.log(conData.data);
    dispatch(setContry(conData))
};

export const {setContry}=countrySlice.actions;

export default countrySlice.reducer;