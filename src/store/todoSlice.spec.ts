import reducer, {addTodo, removeTodo, sortTodos} from './todoSlice'
import type {Todo} from '../TodoList'
import { InitialState } from './todoSlice'

describe('todoReducer', () => {

    it("should return the initial state", () => {
        expect(reducer(undefined, { type: undefined })).toEqual({
            todos: [],
            todoText: ''
        })
    })

    it('should add a todo to the state when it receives a todo', () => {
        const previousState = {todos: [],
            todoText: ''
        } as InitialState
        expect(reducer(previousState, addTodo({id: 'hjksgdf', text: 'hejsan'})))
        .toEqual({todos:[{id: 'hjksgdf', text: 'hejsan'}],
        todoText: ''})
    })

    it('should remove a todo from state', () => {
        const mockStateData = {todos: [
          {
            id: 'hjksgdf', text: 'hejsan'
        }
        ],
            todoText: ''
        } as InitialState
        expect(reducer(mockStateData, removeTodo('hjksgdf')))
        .toEqual({todos:[],
        todoText: ''})
    })
})