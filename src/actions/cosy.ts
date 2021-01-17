
export const ADD_TO_CART = 'ADD_TO_CART'

export type CosyAction = {
    type: string,
    item?: {}
}

export const addToCart = (item: {}) => ({
    type: ADD_TO_CART,
    item
})
