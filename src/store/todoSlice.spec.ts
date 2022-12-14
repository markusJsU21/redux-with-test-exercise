import reducer, {addTodo, filterToogle, removeTodo, setNewTodoText, sortTodos} from './todoSlice'
import type {Todo} from '../TodoList'
import { InitialState } from './todoSlice'

describe('todoReducer', () => {

    const mockStateData = {todos: [
        {id: 'hjksgdf', text: 'hejsan'},
        {id: 'sdgf', text: 'asdfg'}],
            todoText: '',
            filterDescending: true
        } as InitialState

    it("should return the initial state", () => {
        expect(reducer(undefined, { type: undefined })).toEqual({
            todos: [],
            todoText: '',
            filterDescending: true
        })
    })

    it('should add a todo to the state when it receives a todo', () => {
        const previousState = {todos: [{id: 'asdgfdhg', text: 'awsdgfh'}],
            todoText: '',
            filterDescending: true
        } as InitialState
        expect(reducer(previousState, addTodo({id: 'hjksgdf', text: 'hejsan'})))
        .toEqual({todos:[{id: 'asdgfdhg', text: 'awsdgfh'},{id: 'hjksgdf', text: 'hejsan'}],
        todoText: '',
        filterDescending: true})
    })

    it('should remove a todo from state', () => {

        expect(reducer(mockStateData, removeTodo('hjksgdf')))
        .toEqual({todos:[{ id: 'sdgf', text: 'asdfg'}],
        todoText: '',
        filterDescending: true})
    })
    it('should order the Todos alphabetically based on their text', () => {
        expect(reducer(mockStateData, sortTodos())).toEqual(
            {todos: [
                {id: 'sdgf', text: 'asdfg'},
                {id: 'hjksgdf', text: 'hejsan'}],
                    todoText: '',
                    filterDescending: true
            })
    })

    it('should update state.todoText when setNewTodoText is called', () => {
        expect(reducer(mockStateData, setNewTodoText('L'))).toEqual(
            {todos: [
                {id: 'hjksgdf', text: 'hejsan'},
                {id: 'sdgf', text: 'asdfg'}],
                    todoText: 'L',
                    filterDescending: true
                }
        )
    })

    it('should toggle filterDEscending when filterToogle is called', () => {
        expect(reducer(mockStateData, filterToogle())).toEqual(
            {todos: [
                {id: 'hjksgdf', text: 'hejsan'},
                {id: 'sdgf', text: 'asdfg'}],
                    todoText: '',
                    filterDescending: false
                }
        )
    })

})