import { AnalyticEvent, CartItem } from "../state/cosy"

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const CLEAR_TOAST = 'CLEAR_TOAST'
export const ADD_ANALYTIC = 'ADD_ANALYTIC'
export const CLEAR_ANALYTICS = 'CLEAR_ANALYTICS'

export type CosyAction = {
    type: string;
    item?: CartItem;
    index?: number;
    event?: AnalyticEvent;
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

export const addAnalytic = (event: AnalyticEvent) => ({
    type: ADD_ANALYTIC,
    event
})

export const clearAnalytics = () => ({
    type: CLEAR_ANALYTICS
})
