import { ADD_CAL} from "../ProductsActionTypes/productsActionTypes"

export const addCal = (payload) => {
    return {
        type: ADD_CAL,
        payload
    }
}