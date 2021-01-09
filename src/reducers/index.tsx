import Redux from "redux";
import { CosyState } from "../state/cosy";

const defaultState: CosyState = {}

const reducer = (state: CosyState = defaultState, action: Redux.AnyAction) => {
    return {
        ...state
    };
}

export default reducer;
