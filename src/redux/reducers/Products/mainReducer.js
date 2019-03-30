import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import UpdateModalReducer from "./updateModalReducer"
import {productReducer} from "./productsReducer";
import {calReducer} from "./cal";
//import {product} from "./product"

export default combineReducers({
    Products:productReducer,
    modalReducer,
    Data:UpdateModalReducer,
    Totall:calReducer
    //sample:product
})
