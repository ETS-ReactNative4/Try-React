import {DELETE_PRODUCTS} from "../ProductsActionTypes/productsActionTypes";
export const deleteProductAction = payload=>{
    return {
        type:DELETE_PRODUCTS,
        payload
    }
}