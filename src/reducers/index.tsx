import Redux from "redux";
import { CartContents, CosyState } from "../state/cosy";
import * as Actions from "../actions/cosy";

const defaultState: CosyState = {
    cart: []
}

const reducer = (state: CosyState = defaultState, action: Actions.CosyAction) => {
    let cart: CartContents = state.cart;
    switch(action.type) {
        case Actions.ADD_TO_CART:
            cart = [...state.cart];
            if(action.item) {
                cart.push(action.item)
            }
            return {
                ...state,
                cart
            }
    }

    return {
        ...state
    };
}

export default reducer;
