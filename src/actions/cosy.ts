import { CakeOrder, CartItem, CupcakeOrder } from "../state/cosy"

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const CLEAR_TOAST = 'CLEAR_TOAST'

export type CosyAction = {
    type: string;
    item?: CartItem;
    index?: number;
}

export const addToCart = (item: CartItem) => ({
    type: ADD_TO_CART,
    item
})

export const removeCartItem = (index: number) => ({
    type: REMOVE_FROM_CART,
    index
})

export const clearToast = () => ({
    type: CLEAR_TOAST
})
