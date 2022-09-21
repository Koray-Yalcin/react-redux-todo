import ActionTypes from "../actionTypes";

const initialState = 0;

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.count.INCREASE_COUNTER:
            return state + action.payload;
        case ActionTypes.count.DECREASE_COUNTER:
            return state - action.payload;
        default:
            return state;
    }
}

export default countReducer;