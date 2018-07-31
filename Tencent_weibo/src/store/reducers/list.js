let initialState = {
    list: []
}

const updata = (state, action) => {
    switch (action.type) {
        case 'DATA':
            return action.payload;
        default:
            return state
    }
}

export default (state = initialState, action) => {
    return {
        list: updata(state.list, action)
    }
}