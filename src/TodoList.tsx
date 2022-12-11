import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

type Todo = {
    id: string,
    text: string
}

const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodoText, setNewTodoText] = useState<string>("");
    const [filterDescending, setFilterDescending] = useState<boolean>(false);

    const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTodos([...todos, { id: uuidv4(), text: newTodoText }]);
        setNewTodoText("");
    }

    const removeTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const sortTodos = (desc: boolean) => {
        setTodos(todos.sort((a, b) => (desc ? 1 : -1) * a.text.localeCompare(b.text)));
    }

    return (
        <>
            <form onSubmit={(addTodo)}>
                <input placeholder="Skriv en todo..." onChange={(event) => setNewTodoText(event.target.value)} value={newTodoText}></input>
                <button type="submit" disabled={newTodoText.length === 0}>Lägg till</button>
            </form>
            <h2>Todo<button onClick={() => { setFilterDescending(!filterDescending); sortTodos(filterDescending) }}>{filterDescending ? <FaArrowUp /> : <FaArrowDown />}</button></h2>

            <ul>
                {todos.map(todo => <li key={todo.id}>{todo.text} <button onClick={() => removeTodo(todo.id)}>Ta bort</button></li>)}
            </ul>
        </>
    )
}

export default TodoList;