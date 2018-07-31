let initialState = {
    isLogin: false,
    username: '',
    password: ''
};

const Login = (state = { ishow: null }, action) => {
    switch (action.type) {
        case 'LOGIN':
            return true;
        case 'LOGOUT':
            return false;
        default:
            //console.log(state)
            return state;

    }
}

const changeUsername = (state, action) => {
    switch (action.type) {
        case 'CHANGE_USERNAME':
            return action.payload;
        default:
            return state;
    }
}
const changePassword = (state, action) => {
    switch (action.type) {
        case 'CHANGE_PASSWORD':
            return action.payload;
        default:
            return state;
    }
}

export default (state = initialState, action) => {
    return {
        isLogin: Login(state.isLogin, action),
        username: changeUsername(state.username, action),
        password: changePassword(state.password, action)
    }
}