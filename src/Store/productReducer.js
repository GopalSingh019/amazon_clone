import { createSlice } from "@reduxjs/toolkit";

const initialState={
    produts:[],
}

const productReducer=createSlice({
    name:'product',
    initialState,
    reducers:{
        fetchProducts:function(state,action){
            let products=state.Products;
            // if(products)
            // return {
            //     produts:[action.payload.payload.products]
            // }
            return {
                products:[action.payload.payload]
            }
        }
    }
});

export const fetchAllProducts=(url,product=[])=>{
    return async(dispatch)=>{
        try{
        let response=await fetch(url);
        let data=await response.json();
        console.log(data);
        if(product[0])
        product=product[0];
        dispatch(productReducer.actions.fetchProducts({payload:[...product,...data.products]}));
        }catch{
            dispatch(productReducer.actions.fetchProducts(null));
        }
    }
}

export default productReducer.reducer;