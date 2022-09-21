import ActionTypes from "../actionTypes"

const increaseCount = (val) => {
    return {type: ActionTypes.count.INCREASE_COUNTER, payload: val};
}

const decreaseCount = (val) => {
    return {type: ActionTypes.count.DECREASE_COUNTER, payload: val};
}

const counterActions = {
    increaseCount,
    decreaseCount
}

export default counterActions;