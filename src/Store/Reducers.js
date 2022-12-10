import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:null
}

const userReducer=createSlice({
    name:'users',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            console.log(action);
            console.log(state);
            if(action.payload){
                return {
                    ...state,
                    user: action.payload
                  }
            }
        }
    }
})

export default userReducer.reducer;

export const {setUser}=userReducer.actions;