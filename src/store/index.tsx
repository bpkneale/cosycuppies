import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer, defaultState } from "../reducers";
import thunk from "redux-thunk";
import { useDispatch, useSelector, useStore } from "react-redux";
import { CosyState } from "../state/cosy";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    defaultState,
    composeEnhancers(applyMiddleware(thunk)),
);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;

export const useAppState: () => CosyState = () => useStore().getState()
