const initial = {
    logging: false,
    isLogin: false
};

export const user = (state = initial, action) => {
    switch (action.type) {
        case 'request_login':
            return {
                logging: true,
                isLogin: false
            };
        case 'login':
            return {
                logging: false,
                isLogin: true
            };
        default:
            return state;
    }
};

export const login = () => dispatch => {
    dispatch({type: 'request_login'});
    setTimeout(() => {
        dispatch({type: 'login'});
    }, 2000)
};
