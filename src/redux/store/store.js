import {
    createStore,
    applyMiddleware,
    compose
} from "redux"
import mainReducer from '../reducers/Products/mainReducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default createStore(mainReducer, composeEnhancer(applyMiddleware()))