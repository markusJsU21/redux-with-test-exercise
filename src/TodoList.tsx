import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo, sortTodos } from './store/todoSlice'

export type Todo = {
    id: string,
    text: string
}

const TodoList = () => {
    // const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodoText, setNewTodoText] = useState<string>("");
    const [filterDescending, setFilterDescending] = useState<boolean>(false);
    const dispatch = useDispatch()
    const todos = useSelector((state:any)=> state.todo.todos)

    const registerTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const todo: Todo = {
            id: uuidv4(),
            text: newTodoText
        }
        dispatch(addTodo(todo))
        setNewTodoText("");
    }

    const deleteTodo = (id: string) => {
        dispatch(removeTodo(id))
    }

    return (
        <>
            <form onSubmit={(registerTodo)}>
                <input placeholder="Skriv en todo..." onChange={(event) => setNewTodoText(event.target.value)} value={newTodoText}></input>
                <button type="submit" disabled={newTodoText.length === 0}>Lägg till</button>
            </form>
            <h2>Todo<button onClick={() => { setFilterDescending(!filterDescending); dispatch(sortTodos(filterDescending)) }}>{filterDescending ? <FaArrowUp /> : <FaArrowDown />}</button></h2>

            {todos.length ?
                <ul>
                    {todos.map((todo:Todo) => <li key={todo.id}>{todo.text} <button onClick={() => deleteTodo(todo.id)}>Ta bort</button></li>)}
                </ul> : <p>Du har inga todos</p>}
        </>
    )
}

export default TodoList;