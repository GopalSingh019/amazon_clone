import { createSlice } from "@reduxjs/toolkit";

const initialState={
    produts:[],
}

const productReducer=createSlice({
    name:'product',
    initialState,
    reducers:{
        fetchProducts:function(state,action){
            let products=state.products;
            if(products)
            return {
                produts:[action.payload.payload.products]
            }
            return {
                products:[action.payload.payload.products]
            }
        }
    }
});

export const fetchAllProducts=(url)=>{
    return async(dispatch)=>{
        try{
        let response=await fetch(url);
        let data=await response.json();
        console.log(data);
        dispatch(productReducer.actions.fetchProducts({payload:data}));
        }catch{
            dispatch(productReducer.actions.fetchProducts(null));
        }
    }
}

export default productReducer.reducer;