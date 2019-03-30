import { ADD_FAV_PRODUCT } from "../ProductsActionTypes/productsActionTypes";

export const favProductAction = payload => {
    return {
        type: ADD_FAV_PRODUCT,
        payload
    }
}