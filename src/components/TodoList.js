import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Actions from '../redux/actions';

const todo = {
    name: 'Koray'
}
export const TodoList = () => {
    const todos = useSelector((value) => value.todos);
    const dispatch = useDispatch();

    return (
    <div>
        <button onClick={() => dispatch(Actions.todoActions.addTodo(todo))}>Add Todo</button>
        <ul>
            {
                todos && todos.map((todo) => <li>{todo.name}</li>)
            }
        </ul>
    </div>
  )
}
