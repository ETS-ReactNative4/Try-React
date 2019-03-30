import { DEFULT_CAL} from "../ProductsActionTypes/productsActionTypes"

export const defaultCal = (payload) => {
    return {
        type: DEFULT_CAL,
        payload
    }
}