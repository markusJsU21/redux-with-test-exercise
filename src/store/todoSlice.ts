import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Todo } from '../TodoList'

export interface InitialState {
    todos: Todo[],
    todoText: string
}

const initialState = {
    todos: [],
    todoText: ''
    } as InitialState

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload)
        },
        removeTodo(state, action: PayloadAction<string>){
           state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        sortTodos(state, action: PayloadAction<boolean>){
            const desc = action.payload
            state.todos.sort((a, b) => (desc ? 1 : -1) * a.text.localeCompare(b.text));
        }
    }
})

export const {addTodo, removeTodo, sortTodos} = todoSlice.actions
export default todoSlice.reducer