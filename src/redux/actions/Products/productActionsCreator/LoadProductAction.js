
import {LOAD_PRODUCTS} from "../ProductsActionTypes/productsActionTypes";

export const loadData = payload=>{
   return {
      type:LOAD_PRODUCTS,
      payload
   }
}