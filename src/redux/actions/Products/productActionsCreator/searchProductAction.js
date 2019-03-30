import {SEARCH_PRODUCT} from "../ProductsActionTypes/productsActionTypes";
export const searchProductAction = payload=>{
    return {
        type:SEARCH_PRODUCT,
        payload
    }
}