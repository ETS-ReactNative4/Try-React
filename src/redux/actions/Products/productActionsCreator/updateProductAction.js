
import { UPDATE_PRODUCTS } from "../ProductsActionTypes/productsActionTypes";

export const updateProductAction = payload => {
    return {
        type: UPDATE_PRODUCTS,
        payload
    }
}