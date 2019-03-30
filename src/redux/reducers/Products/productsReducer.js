import uuidv2 from "uuid"

import {
    ADD_PRODUCTS,
    DELETE_PRODUCTS,
    UPDATE_PRODUCTS,
    ADD_FAV_PRODUCT,
    SEARCH_PRODUCT,
    SORT_NAME,
    ADD_CART_PRODUCT,
    LOAD_PRODUCTS
} from "../../actions/Products/ProductsActionTypes/productsActionTypes";
const initState = {
    Products: [ //
        {
            name: "Samsug",
            id: uuidv2(),
            model: "p7",
            showName: "Samsung p7",
            type: "Smartphone",
            barnd: "Samsung",
            price: 499,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate ipsum cumque fugiat esse, eveniet commodi nostrum architecto aperiam molestiae. Consequuntur, eveniet deserunt!",
            isFav: false,
            isSelected: true,
            img: require("../../../images/1.jpg")
        },
        {
            name: "Apple Iphone",
            showName: "Apple Iphone 8",
            id: uuidv2(),
            model: " 8",
            type: "Smartphone",
            barnd: "Apple",
            price: 799,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate ipsum cumque fugiat esse, eveniet commodi nostrum architecto aperiam molestiae. Consequuntur, eveniet deserunt!",
            isFav: false,
            isSelected: false,
            img: require("../../../images/2.jpg")
        },
        {
            name: "Huwaei",
            id: uuidv2(),
            showName: "Huwaei idea",
            model: "ms3",
            barnd: "Huwaei",
            type: "Smartphone",
            price: 195,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate ipsum cumque fugiat esse, eveniet commodi nostrum architecto aperiam molestiae. Consequuntur, eveniet deserunt!",
            isFav: false,
            isSelected: false,
            img: "https://3.imimg.com/data3/IC/JO/MY-9839190/organic-lemon.jpg"
        },
        {
            name: "Walton Fridge",
            showName: "walton wd4e8",
            id: uuidv2(),
            model: "WDD7",
            type: "Fridge",
            barnd: "Walton",
            price: 99,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate ipsum cumque fugiat esse, eveniet commodi nostrum architecto aperiam molestiae. Consequuntur, eveniet deserunt!",
            isFav: false,
            isSelected: false,
            img: "http://images.all-free-download.com/images/graphicthumb/vector_illustration_of_ripe_bananas_567893.jpg" 
        },
        {
            name: "Mycell Phone",
            showName: "Apple Iphone 8",
            id: uuidv2(),
            model: "h34",
            type: "SmartPhone",
            barnd: "Mycell",
            price: 682,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate ipsum cumque fugiat esse, eveniet commodi nostrum architecto aperiam molestiae. Consequuntur, eveniet deserunt!",
            isFav: false,
            isSelected: false,
            img: "http://www.azspagirls.com/files/2010/09/orange.jpg"
        },
        {
            name: "Samsug",
            id: uuidv2(),
            model: "p7",
            showName: "Samsung p7",
            type: "Smartphone",
            barnd: "Samsung",
            price: 1215,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate ipsum cumque fugiat esse, eveniet commodi nostrum architecto aperiam molestiae. Consequuntur, eveniet deserunt!",
            isFav: false,
            isSelected: false,
            img: "http://cdn.homedit.com/wp-content/uploads/2013/03/spline-swivel-armchair.jpg"
        },
        {
            name: "Apple Iphone",
            showName: "Apple Iphone 8",
            id: uuidv2(),
            model: " 8",
            type: "Smartphone",
            barnd: "Apple",
            price: 982,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate ipsum cumque fugiat esse, eveniet commodi nostrum architecto aperiam molestiae. Consequuntur, eveniet deserunt!",
            isFav: false,
            isSelected: false,
            img: "http://3.design-milk.com/images/2013/07/Karim-Rashid-1-ChateauDAx_nook_chair.jpg"
        },
        {
            name: "Huwaei",
            id: uuidv2(),
            showName: "Huwaei idea",
            model: "ms3",
            barnd: "Huwaei",
            type: "Smartphone",
            price: 625,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate ipsum cumque fugiat esse, eveniet commodi nostrum architecto aperiam molestiae. Consequuntur, eveniet deserunt!",
            isFav: false,
            isSelected: false,
            img:"https://s-media-cache-ak0.pinimg.com/originals/a3/da/27/a3da27667845ce82f52bd684619ee88f.jpg"
        },
        {
            name: "Walton Fridge",
            showName: "walton wd4e8",
            id: uuidv2(),
            model: "WDD7",
            type: "Fridge",
            barnd: "Walton",
            price: 425,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate ipsum cumque fugiat esse, eveniet commodi nostrum architecto aperiam molestiae. Consequuntur, eveniet deserunt!",
            isFav: false,
            isSelected: false,
            img: "https://s-media-cache-ak0.pinimg.com/originals/a5/47/26/a547269acf071763233c1a1d0743905c.jpg"
        },
        {
            name: "Mycell Phone",
            showName: "Apple Iphone 8",
            id: uuidv2(),
            model: "h34",
            type: "SmartPhone",
            barnd: "Mycell",
            price: 1899,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate ipsum cumque fugiat esse, eveniet commodi nostrum architecto aperiam molestiae. Consequuntur, eveniet deserunt!",
            isFav: false,
            isSelected: false,
            img: "http://static2.bonluxat.com/cmsense/data/uploads/orig/karim-rashid-pal-chair_8wr8.jpg"
        },
        {
            name: "Samsug",
            id: uuidv2(),
            model: "p7",
            showName: "Samsung p7",
            type: "Smartphone",
            barnd: "Samsung",
            price: 785,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate ipsum cumque fugiat esse, eveniet commodi nostrum architecto aperiam molestiae. Consequuntur, eveniet deserunt!",
            isFav: false,
            isSelected: false,
            img: "http://3.design-milk.com/images/2013/07/Karim-Rashid-1-ChateauDAx_nook_chair.jpg"
        },
        {
            name: "Apple Iphone",
            showName: "Apple Iphone 8",
            id: uuidv2(),
            model: " 8",
            type: "Smartphone",
            barnd: "Apple",
            price: 226,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate ipsum cumque fugiat esse, eveniet commodi nostrum architecto aperiam molestiae. Consequuntur, eveniet deserunt!",
            isFav: false,
            isSelected: false,
            img: require("../../../images/2.jpg")
        },
        {
            name: "Huwaei",
            id: uuidv2(),
            showName: "Huwaei idea",
            model: "ms3",
            barnd: "Huwaei",
            type: "Smartphone",
            price: 299,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate ipsum cumque fugiat esse, eveniet commodi nostrum architecto aperiam molestiae. Consequuntur, eveniet deserunt!",
            isFav: false,
            isSelected: false,
            img: require("../../../images/3.jpg")
        },
        {
            name: "Walton Fridge",
            showName: "walton wd4e8",
            id: uuidv2(),
            model: "WDD7",
            type: "Fridge",
            barnd: "Walton",
            price: 455,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate ipsum cumque fugiat esse, eveniet commodi nostrum architecto aperiam molestiae. Consequuntur, eveniet deserunt!",
            isFav: false,
            isSelected: false,
            img: require("../../../images/4.jpg")
        },
        {
            name: "Mycell Phone",
            showName: "Apple Iphone 8",
            id: uuidv2(),
            model: "h34",
            type: "SmartPhone",
            barnd: "Mycell",
            price: 999,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate ipsum cumque fugiat esse, eveniet commodi nostrum architecto aperiam molestiae. Consequuntur, eveniet deserunt!",
            isFav: false,
            isSelected: false,
            img: require("../../../images/6.jpg")
        },
        {
            name: "Samsug",
            id: uuidv2(),
            model: "p7",
            showName: "Samsung p7",
            type: "Smartphone",
            barnd: "Samsung",
            price: 1999,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate ipsum cumque fugiat esse, eveniet commodi nostrum architecto aperiam molestiae. Consequuntur, eveniet deserunt!",
            isFav: false,
            isSelected: false,
            img: require("../../../images/1.jpg")
        },
        {
            name: "Apple Iphone",
            showName: "Apple Iphone 8",
            id: uuidv2(),
            model: " 8",
            type: "Smartphone",
            barnd: "Apple",
            price: 1295,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate ipsum cumque fugiat esse, eveniet commodi nostrum architecto aperiam molestiae. Consequuntur, eveniet deserunt!",
            isFav: false,
            isSelected: false,
            img: require("../../../images/2.jpg")
        },
        {
            name: "Huwaei",
            id: uuidv2(),
            showName: "Huwaei idea",
            model: "ms3",
            barnd: "Huwaei",
            type: "Smartphone",
            price: 1458,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate ipsum cumque fugiat esse, eveniet commodi nostrum architecto aperiam molestiae. Consequuntur, eveniet deserunt!",
            isFav: false,
            isSelected: false,
            img: require("../../../images/3.jpg")
        },
        {
            name: "Walton Fridge",
            showName: "walton wd4e8",
            id: uuidv2(),
            model: "WDD7",
            type: "Fridge",
            barnd: "Walton",
            price: 785,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate ipsum cumque fugiat esse, eveniet commodi nostrum architecto aperiam molestiae. Consequuntur, eveniet deserunt!",
            isFav: false,
            isSelected: false,
            img: require("../../../images/4.jpg")
        },
        {
            name: "Mycell Phone",
            showName: "Apple Iphone 8",
            id: uuidv2(),
            model: "h34",
            type: "SmartPhone",
            barnd: "Mycell",
            price: 478,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptate ipsum cumque fugiat esse, eveniet commodi nostrum architecto aperiam molestiae. Consequuntur, eveniet deserunt!",
            isFav: false,
            isSelected: false,
            img: require("../../../images/6.jpg")
        }
    ],
    SearchData: "",
    id: undefined,
    favs: 0
}
export const productReducer = (state = initState, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            {
                let Products = state.Products.concat(action.payload)
                //localStorage.setItem("Products",state)
                return {
                    ...state,
                    Products: Products
                }
            }
        case ADD_PRODUCTS:
            {
                let Products = state.Products.concat(action.payload)
                //localStorage.setItem("Products",state)
                return {
                    ...state,
                    Products: Products
                }
            }
        case UPDATE_PRODUCTS:
            {
                let index = state.Products.findIndex(product => product.id === action.payload.id)
                let updatedProduct = state.Products[index] = action.payload
                return {
                    ...state,
                    Products: [...updatedProduct, ...state.Products]
                }
            }
        case DELETE_PRODUCTS:
            {
                let Products = state.Products.filter(u => u.id !== action.payload)
                return {
                    ...state,
                    Products: [...Products]
                }
            }

        case ADD_FAV_PRODUCT:
            {
                let newState = state.Products.map(product => {
                    if (product.id === action.payload) {
                        let products = product
                        product.isFav = !products.isFav
                    }
                    return product
                })
                var favs = state.Products.filter(product => product.isFav)
                state.favs = favs.length
                state.id = action.payload
                return {
                    ...state,
                    Products: newState
                }
            }
        case ADD_CART_PRODUCT:
            {
                let selectedProduct = state.Products.map(product => {
                    if (product.id === action.payload) {
                        let products = product
                        product.isSelected = !products.isSelected
                    }
                    return product
                })

            }
        case SORT_NAME:
            {
                let sortedData = state.Products.sort((a, b) => {
                    if (action.payload === "brand") {
                        if (a.brand < b.brand)
                            return -1;
                        if (a.brand > b.brand)
                            return 1;
                        return 0;
                    } else if (action.payload === "price") {
                        return a.price - b.price
                    }
                })

                return {
                    ...state,
                    Products: [
                        ...sortedData
                    ]
                }
            }
        case SEARCH_PRODUCT:
            {

                return {
                    ...state,
                    SearchData: action.payload
                }
            }
        default:
            return state
    }
}