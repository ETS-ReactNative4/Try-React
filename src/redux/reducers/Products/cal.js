import {ADD_CAL,SUBS_CAL,DEFULT_CAL} from "../../actions/Products/ProductsActionTypes/productsActionTypes"
const total = 0
export const calReducer = (init=total,action)=>{
switch (action.type) {
    case ADD_CAL:{
       return init+=action.payload
    }
    case SUBS_CAL:{
        return init -=action.payload
    }
    case DEFULT_CAL:{
        return init+=action.payload
    }
    default: return init;
    
}
}