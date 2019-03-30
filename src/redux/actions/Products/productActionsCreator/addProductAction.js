
import {ADD_PRODUCTS} from "../ProductsActionTypes/productsActionTypes";

export const addProductAction = (payload)=>{
 return {
    type: ADD_PRODUCTS,
    payload
 }  
}