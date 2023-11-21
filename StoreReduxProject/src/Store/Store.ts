import { applyMiddleware, combineReducers, createStore } from "redux";
import { UserReducer } from "./Reducers/UserReducer";
import thunk from 'redux-thunk';
import { OrderReducer } from "./Reducers/OrderReducer";

const reducers = combineReducers({
    User: UserReducer,
    Order: OrderReducer
})

export const store = createStore(reducers, {}, applyMiddleware(thunk));

export type reducerType = ReturnType<typeof reducers>;