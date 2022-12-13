import reducer, {addTodo, removeTodo, sortTodos} from './todoSlice'
import type {Todo} from '../TodoList'
import { InitialState } from './todoSlice'

describe('addTodo', () => {
    const previousState = {todos: [],
        todoText: ''
    } as InitialState

    it('should add a todo to the state when it receives a todo', () => {
        expect(reducer(previousState, addTodo({id: 'hjksgdf', text: 'hejsan'})))
        .toEqual({todos:[{id: 'hjksgdf', text: 'hejsan'}],
        todoText: ''})
    })
})