import { applyMiddleware, combineReducers, createStore } from "redux";

import thunkMiddleware from "redux-thunk"
import searchReducer from "./search-reducer"


let reducers = combineReducers({
    search: searchReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;