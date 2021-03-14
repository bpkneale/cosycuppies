import { AnalyticEvent, CartContents, CosyState } from "../state/cosy";
import * as Actions from "../actions/cosy";

export const defaultState: CosyState = {
    cart: [],
    toast: undefined,
    analytics: []
}

export const rootReducer = (state: CosyState = defaultState, action: Actions.CosyAction) => {
    let cart: CartContents = state.cart;
    let toast: string | undefined = undefined;
    let analytics = state.analytics;
    switch(action.type) {
        case Actions.ADD_TO_CART:
            cart = [...state.cart];
            if(action.item) {
                cart.push(action.item)
                toast = `Item added to cart`;
                const event: AnalyticEvent = {
                    action: "cart-add",
                    data: {
                        ...action.item
                    }
                }
                analytics = [...analytics]
                analytics.push(event);
            }
            return {
                ...state,
                toast,
                analytics,
                cart
            }

        case Actions.REMOVE_FROM_CART:
            cart = [...state.cart];
            if(action.index !== undefined) {
                cart.splice(action.index, 1);
                toast = `Item remvoed from cart`;
            }
            return {
                ...state,
                cart
            }

        case Actions.CLEAR_TOAST:
            return {
                ...state,
                toast: undefined
            }

        case Actions.ADD_ANALYTIC:
            if(action.event) {
                analytics = [...analytics];
                analytics.push(action.event);
            }
            return {
                ...state,
                analytics
            }

        case Actions.CLEAR_ANALYTICS:
            return {
                ...state,
                analytics: []
            }
    }

    return {
        ...state
    };
}
