import Consts from "../Consts";

const initialState = {
    productsCart: [],
    amountCart: 0,
    totalCart: 0.0,
}

const cartReducer = (state = initialState, action) => {
    const { type, payload, i } = action;

    switch (type) {
        case Consts.SEND_PRODUCTS_CART:
            const obj = state.productsCart.find(item => item.name === payload.name && item.sizeSelected === payload.sizeSelected && item.code_color === payload.code_color)
            if (obj !== undefined) {
                return {
                    ...state,
                    productsCart: state.productsCart.map((item) => {
                        if (item.name === payload.name && item.sizeSelected === payload.sizeSelected && item.code_color === payload.code_color) {
                            item.amount += 1;
                            item.totalWithAmount += item.formatPrice;
                        }
                        return item;
                    }),
                    totalCart: state.totalCart += Number.parseFloat(payload.totalWithAmount)
                }
            } else {
                return {
                    ...state,
                    productsCart: [...state.productsCart, payload],
                    totalCart: state.totalCart += Number.parseFloat(payload.totalWithAmount)
                }
            };
        case Consts.SUM_AMOUNT_CART:
            return {
                ...state,
                productsCart: state.productsCart.map((item, index) => {
                    if (index === i) {
                        item.amount += 1;
                        item.totalWithAmount += item.formatPrice;
                    }
                    return item;
                }),
                totalCart: state.totalCart += Number.parseFloat(payload.formatPrice)
            }
        case Consts.MINUS_AMOUNT_CART:
            return {
                ...state,
                productsCart: state.productsCart.map((item, index) => {
                    if (index === i) {
                        if (item.amount === 1) {
                            item.amount = 1
                        } else { item.amount -= 1; item.totalWithAmount -= item.formatPrice; }
                    }
                    return item;
                }),
                totalCart: state.totalCart -= Number.parseFloat(payload.formatPrice)
            }
        case Consts.DELETE_PRODUCT_CART:
            return {
                ...state,
                productsCart: state.productsCart.filter((_, index) => index !== i),
                amountCart: state.amountCart === 0 ? state.amountCart = 0 : state.amountCart - 1,
                totalCart: state.totalCart -= Number.parseFloat(payload.totalWithAmount)
            }

        case Consts.SUM_QUANTITY_CART:
            return {
                ...state,
                amountCart: state.productsCart.length
            }
        default:
            return state
    }
}
export default cartReducer;