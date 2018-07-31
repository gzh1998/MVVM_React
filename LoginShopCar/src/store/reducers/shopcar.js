let initialState = {
    list: [],
    price: 0,
    checkall: false
}
const updatalist = (state, action) => {
    switch (action.type) {
        case 'AA':
            return action.payload;
        case "CHECKED_S":
            let num = [...state];
            num.forEach((item, index) => {
                console.log(item)
                if (index == action.payload) {
                    item.isSell = !item.isSell;
                }
            })
            return num;
        case 'NUM_PRICE':
            num = [...state];
            num.forEach((item, index) => {
                console.log(action)
                if (index == action.payload.index) {
                    if (action.payload.type === '+') {
                        item.num++;
                    } else {
                        item.num--;
                        if (item.num <= 0) {
                            item.num = 0;
                        }
                    }
                }
            })
            return num;
        case 'SELECT_ALL_ITEM':
            num = [...state];
            num.forEach((item, index) => {
                item.isSell = action.payload;
            });
            return num;
        default:
            return state;
    }
}

const contprice = (state, action) => {
    switch (action.type) {
        case "CONT_PRICE":
            let price = 0;
            console.log(state.list)
            state.list.forEach(item => {
                console.log(item)
                if (item.isSell) {
                    price += item.num * item.price
                }
            })
            return price;
        default:
            return state.price;
    }
}

const checkalls = (state, action) => {
    switch (action.type) {
        case 'CHECK_ALL':
            return !state;
        default:
            return state;
    }
}

export default (state = initialState, action) => {
    return {
        list: updatalist(state.list, action),
        price: contprice(state, action),
        isselect: checkalls(state.isselect, action)
    }
}