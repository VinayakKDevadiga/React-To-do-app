import { useState, useRef, useEffect } from 'react'
import './css/Todo.css'
import Todoitems from './Todoitems';
let count = 0;
const Todo = () => {

    const [todos, setTodos] = useState([])
    const inputRef = useRef(null)

    const add = () => {

        setTodos([...todos, { no: count++, text: inputRef.current.value, display: '' }])
        inputRef.current.value = ""
        localStorage.setItem("todos_count", count)

    }
    useEffect(() => {
        const loadDataFromLocalStorage = () => {
            setTodos(JSON.parse(localStorage.getItem("todos")) || []);
            count = localStorage.getItem("todos_count")
        };
        loadDataFromLocalStorage();
    }, [])

    useEffect(() => {
        setTimeout(() => {
            console.log(todos)
            localStorage.setItem("todos", JSON.stringify(todos))
        }, 0)// even though delay is 0 this timeout call back function will take some time nearly 4 millisecond. so the 4 milli second delay is there
    }, [todos])

    return (
        <div className='todo'>
            <div className="todo-header">To-Do List</div>
            <div className="todo-add">
                <input type="text" ref={inputRef} placeholder='Add your Task' className='todo-input' />
                <div className="todo-add-button" onClick={() => { add() }}>ADD</div>
            </div>

            <div className="todo-list">
                {todos.map((item, index) => { return <Todoitems key={index} fnsetTodos={setTodos} no={item.no} display={item.display} text={item.text} ></Todoitems> })}
            </div>

        </div>

    )
}

export default Todo
