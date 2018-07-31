let initialState = {
    islogin: false,
    valname: '',
    valpassword: ''


}

const Login = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return true;
        default:
            return state;
    }
}

const username = (state, action) => {
    switch (action.type) {
        case 'USERNAME':
            return action.payload
        default:
            return state;
    }
}

const password = (state, action) => {
    switch (action.type) {
        case 'PASSWORD':
            return action.payload
        default:
            return state;
    }
}


export default (state = initialState, action) => {
    return {
        islogin: Login(state.islogin, action),
        valname: username(state.valname, action),
        valpassword: password(state.valpassword, action)

    }
}