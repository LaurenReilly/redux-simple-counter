const initialState = {
    value: 0,
    color: "grey"
}

const reducer = (state = initialState, action) => {
    let { type } = action;
    if (type === "INCREMENT") {
        return {
            value: state.value + 1
        }
    } else if (type === "DECREMENT") {
        return {
            value: state.value - 1
        }
    } else if (type === "ADD_FIVE") {
        return {
            value: state.value + 5
        }
    } else if (type === "SUB_FIVE") {
        return {
            value: state.value - 5
        }
    } else if (type === "COLOR") {
        return {
            value: state.color
        }
    }
    
    return state;
}