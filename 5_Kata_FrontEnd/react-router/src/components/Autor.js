import React from 'react';
import { useParams } from 'react-router-dom';


function Autor() {
    const { idAutor } = useParams();
    // const params = useParams();

    console.log("🤯", idAutor)


    return (
        <>
            <h1>Autor</h1>
            <h2>Estoy en una URL dinamica</h2>
            <h3>Mostrando el autor {idAutor} </h3>
        </>
    )

}

export default Autor;

