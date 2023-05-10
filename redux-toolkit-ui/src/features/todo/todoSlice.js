import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
    todos: []
}

export const TodoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        createTodo: (state, { payload }) => {
            const newTodo = {
                id: v4(),
                text: payload.text,
                completed: false
            }
            state.todos = [ ...state.todos, newTodo ]
        },
        changeCompleted: (state, { payload }) => {
            const todo = state.todos.find(({ id }) => id === payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, {payload}) => {
            state.todos = state.todos.filter(({id}) => id !== payload)
        }
    }
})

export const { createTodo, changeCompleted, deleteTodo } = TodoSlice.actions
export default TodoSlice.reducer