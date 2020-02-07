import { createStore } from "redux";

const countReducer = (state = 0, action) => {
    switch (action.type) {
        case 'add': return state + 1;
        case 'minus': return state - 1;
        default: return state;
    }
};

const store = createStore(countReducer);

export default store;
