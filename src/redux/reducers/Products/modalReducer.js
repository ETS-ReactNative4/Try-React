import { TOGGLE_ADD_MODAL } from "../../actions/Products/ProductsActionTypes/productsActionTypes";
const modalReducer = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_ADD_MODAL:{
            return !state
        }
        default:return state
    }
}
export default modalReducer