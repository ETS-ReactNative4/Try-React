import { SUBS_CAL} from "../ProductsActionTypes/productsActionTypes"

export const subsCal = (payload) => {
    return {
        type: SUBS_CAL,
        payload
    }
}