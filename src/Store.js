import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from "redux-thunk";

const countReducer = (state = 0, action) => {
    switch (action.type) {
        case 'add': return state + 1;
        case 'minus': return state - 1;
        default: return state;
    }
};

const store = createStore(countReducer, applyMiddleware(logger, thunk));

export default store;
