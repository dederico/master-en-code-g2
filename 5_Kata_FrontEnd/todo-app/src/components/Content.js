import React from 'react';
import { useState } from "react";

function Content(props) {
    const [nombre, setNombre] = useState('Federico Gonzalez');
    const [telefono, setTelefono] = useState('8181850026');
    return (

        <div>
            <input
                placeholder="Nombre"
                type="text"
                onChange={e => setNombre(e.target.value)} />
            <br />
            <input
                placeholder="Telefono"
                type="number"
                onChange={e => setTelefono(e.target.value)} />
            <h2>{nombre}</h2>
            <h2>{telefono}</h2>
        </div>


    );

}
export default Content