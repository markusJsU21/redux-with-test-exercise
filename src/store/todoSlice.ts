import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Todo } from '../TodoList'

export interface InitialState {
    todos: Todo[],
    todoText: string,
    filterDescending: boolean
}

const initialState = {
    todos: [],
    todoText: '',
    filterDescending: true
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
        sortTodos(state){
            const desc = state.filterDescending
            state.todos.sort((a, b) => (desc ? 1 : -1) * a.text.localeCompare(b.text));
        },
        setNewTodoText(state, action: PayloadAction<string>){
            state.todoText = action.payload
        },
        filterDescending(state){
            state.filterDescending = !state.filterDescending
        }
    }
})

export const {addTodo, removeTodo, sortTodos, setNewTodoText, filterDescending} = todoSlice.actions
export default todoSlice.reducer