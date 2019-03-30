import { TOGGLE_UPDATE_MODAL } from "../../actions/Products/ProductsActionTypes/productsActionTypes";
let initState = {
    updateData : {
        name: "",
        age: "",
        id: "",
        email:"",
        about:""
        },
    mode:false
}

const UpdateModalReducer = (state = initState, action) => {
    switch (action.type) {
        case TOGGLE_UPDATE_MODAL:{
           //fn()
            let changeMode = !state.mode
            let newState = {
                updateData: {
                    name: action.payload.name ,
                    age: action.payload.age ,
                    id: action.payload.id ,
                    email:action.payload.email,
                    about:action.payload.about
                    },
                mode:changeMode
            }
            return newState
        }
        default:return state
    }
}
export default UpdateModalReducer