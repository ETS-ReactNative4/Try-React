import { ADD_CART_PRODUCT} from "../ProductsActionTypes/productsActionTypes"

export const addCartAction = (payload) => {
    return {
        type: ADD_CART_PRODUCT,
        payload
    }
}