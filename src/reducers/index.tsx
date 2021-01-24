import Redux from "redux";
import { CartContents, CartItem, CosyState } from "../state/cosy";
import * as Actions from "../actions/cosy";

const defaultState: CosyState = {
    cart: [],
    toast: undefined
}

const reducer = (state: CosyState = defaultState, action: Actions.CosyAction) => {
    let cart: CartContents = state.cart;
    let toast: string | undefined = undefined;
    switch(action.type) {
        case Actions.ADD_TO_CART:
            cart = [...state.cart];
            if(action.item) {
                cart.push(action.item)
                toast = `Item added to cart`;
            }
            return {
                ...state,
                toast,
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
    }

    return {
        ...state
    };
}

export default reducer;
