import Consts from "../Consts";


const initialState = {
    products: '',
    searchMenu: false,
    cartMenu: false,
    loading: true
}

const productReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case Consts.GET_PRODUCTS:
            return {
                ...state,
                products: payload,
                loading: false
            }

        case Consts.SET_TOGGLE_MENU_SEARCH:
            return {
                ...state,
                searchMenu: payload
            }

        case Consts.SET_TOGGLE_MENU_CART:
            return {
                ...state,
                cartMenu: payload
            }

        default:
            return state
    }
}
export default productReducer;