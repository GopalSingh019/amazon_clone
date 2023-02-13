import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../FireBase/FirebaseConfig";

const initialState={
    container:null
}

const userReducer=createSlice({
    name:'users',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.container=action.payload;
        }
    }
})

export const userCheck = ()=>async (dispatch)=>{
    try{
        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(setUser(user));
                // setUser(user);
                // setUserName(user.email);
                // setSign('Sign Out');
                // dispatch(setUser({user}));
            }else{
                dispatch(setUser());
            }
        })
    }catch(e){
        dispatch(setUser());
    }
}

export default userReducer.reducer;

export const {setUser}=userReducer.actions;