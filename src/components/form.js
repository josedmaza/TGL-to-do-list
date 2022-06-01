import React, {useState} from "react";
import '../style/taskform.css'
import {v4 as uuidv4} from 'uuid'

export default function TaskForm(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {

        setInput(e.target.value);
       
    }

    const manejarEnvio = e => {
        e.preventDefault();

        const newtask = {
            id: uuidv4(),
            text: input,
            done: false
        }

        props.onSubmit(newtask);
    }
    return(
        <form className="task-form"
        onSubmit={manejarEnvio}>
        <input
        className="task-input"
        type='text'
        placeholder="write a task"
        name= 'texto'
        onChange={manejarCambio}
        />
        <button className="task-button">
            Insert 
            </button>
        </form>
    )
}