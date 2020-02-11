import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import {countReducer} from "./module/count"
import {user} from "./module/user"

const store = createStore(combineReducers({counter: countReducer, user}), applyMiddleware(logger, thunk));

export default store;
