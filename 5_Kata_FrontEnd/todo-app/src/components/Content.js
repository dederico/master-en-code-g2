import React from 'react';
import { useState } from "react-dom";

function Content(props) {
    const [nombre, setNombre] = useState('Federico Gonzalez')
    return (

        <div>
            <input
                placeholder="Nombre"
                type="text"
                onChange={e => setNombre(e.target.value)} />
            <h2>{nombre}</h2>
        </div>


    )

}
export default Content