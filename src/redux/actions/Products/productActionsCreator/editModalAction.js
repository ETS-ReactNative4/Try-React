import { TOGGLE_UPDATE_MODAL} from "../ProductsActionTypes/productsActionTypes"

export const editModalToggler = payload => {

    return {
        type: TOGGLE_UPDATE_MODAL,
        payload
    }
}
