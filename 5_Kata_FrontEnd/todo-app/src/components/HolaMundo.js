import React from 'react';
import { useState } from 'react';


function HolaMundo(props) {
    //Para manejar el estado en una funcion, utilizamos el HOOK useState
    const [texto, setTexto] = useState('Hola desde el componente!')
    const [edad, setEdad] = useState(0);
    console.log('🤟🏻', props)
    return (
        <>
            <h1>Componente HolaMundo funcional</h1>
            <h2>{texto}</h2>
            <h3>{edad}</h3>
            <input
                placeholder="Cambia el texto"
                type="text"
                onChange={e => setTexto(e.target.value)}

            />
            <input
                placeholder="Cambia la edad"
                type="number"
                onChange={e => setEdad(e.target.value)}
            />
        </>
    )
}

export default HolaMundo;