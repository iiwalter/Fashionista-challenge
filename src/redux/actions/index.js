import Consts from '../Consts'

export const getProducts = (payload) => {
    return {
        type: Consts.GET_PRODUCTS,
        payload: payload
    }
}

export const setSearch = (openorclose) => {
    return {
        type: Consts.SET_TOGGLE_MENU_SEARCH,
        payload: openorclose
    }
}

export const setCart = (openorclose) => {
    return {
        type: Consts.SET_TOGGLE_MENU_CART,
        payload: openorclose
    }
}

export const sendProductToCart = (product) => {
    return {
        type: Consts.SEND_PRODUCTS_CART,
        payload: product
    }
}


export const sumAmountCart = (index, product) => {
    return {
        type: Consts.SUM_AMOUNT_CART,
        payload: product,
        i: index
    }
}

export const minusAmountCart = (index, product) => {
    return {
        type: Consts.MINUS_AMOUNT_CART,
        payload: product,
        i: index
    }
}
export const deleteProductOfCart = (index, product) => {
    return {
        type: Consts.DELETE_PRODUCT_CART,
        payload: product,
        i: index
    }
}

export const countTotalProducts = () => {
    return {
        type: Consts.SUM_QUANTITY_CART
    }
}