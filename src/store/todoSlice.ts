import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todo',
    initialState: {todos: [],
                    todoText: ''},
    reducers: {
        addTodo(state, action){
            state.todos.push(action.payload)
        },
        removeTodo(state, action){
           state.todos = state.todos.slice(state.todos.indexOf(action.payload))
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer