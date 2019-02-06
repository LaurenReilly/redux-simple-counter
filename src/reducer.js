const initialState = {
    value: 0,
    color: "black"
}

const reducer = (state = initialState, action) => {
    let { type } = action;
    let { color } = action;
    let { value } = action;

    if (type === "INCREMENT") {
        return {
            value: state.value + 1,
            color: state.color
        }
    } else if (type === "DECREMENT") {
        return {
            value: state.value - 1,
            color: state.color
        }
    } else if (type === "ADD_FIVE") {
        return {
            value: state.value + 5,
            color: state.color
        }
    } else if (type === "SUB_FIVE") {
        return {
            value: state.value - 5,
            color: state.color
        }
    } else if (type === "COLOR") {
        return {
            value: state.value,
            color: color
        }
    } else if (type === "NUM") {
        return {
            value: value,
            color: state.color
        }
    }
    
    return state;
}