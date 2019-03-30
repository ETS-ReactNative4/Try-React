import { SORT_NAME } from "../ProductsActionTypes/productsActionTypes";

export const nameSortAciton = payload => {
    return {
        type: SORT_NAME,
        payload
    }
}