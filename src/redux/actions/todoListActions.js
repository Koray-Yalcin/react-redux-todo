import ActionTypes from "../actionTypes"

const addTodo = (todo) => {
    return {type: ActionTypes.todo.ADD_TODO, payload: todo};
}

const todoActions = {
    addTodo
}

export default todoActions;