import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import {countReducer} from "./module/count"

const store = createStore(combineReducers({counter: countReducer}), applyMiddleware(logger, thunk));

export default store;
