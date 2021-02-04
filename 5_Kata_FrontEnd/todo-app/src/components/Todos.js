import { useState } from 'react';
import React from 'react';
import Todo from './Todo'

function Todos() {
    const [todos, setTodos] = useState([
        {
            text: 'Compras chiles poblanos',
            isCompleted: false,
        },
        {
            text: 'Banarme',
            isCompleted: false,
        },
        {
            text: 'Hacer la tarea del devf',
            isCompleted: true,
        },
    ]);

    const setCompleted = () => {
        console.log("Hola desde el padre!!")
        //Debes utilizar para modificar el estado de "setTodos"

    }

    return (
        <>
            <h1>TO-DO App</h1>
            <h3>Crear T0-DO</h3>
            {/*Crear un componente con un input que permita insertar todos*/}
            <h3>Lista de TO-DO's</h3>
            {
                todos.map((todo, index) => {
                    return <Todo
                        key={index}
                        index={index}
                        text={todo.text}
                        isCompleted={todo.isCompleted}
                        setCompleted={setCompleted} />
                })
            }
        </>
    )
}
export default Todos