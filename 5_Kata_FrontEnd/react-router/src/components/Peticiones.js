import { useState, useEffect } from 'react';


export default function Peticiones() {
    const [texto, setTexto] = useState("");
    /*
    useEffect (escrito asi) se ejecuta siempre
    despues de renderizar (retornar) nuestro componente
    */
    // useEffect(() => {
    //     setTimeout(() => {
    //         setTexto("Pasaron 3 segundos!!!");
    //     }, 3000)
    // })
    /*
    useEffect (escrito usando DEPENDENCIAS []) 
    se ejecuta UNA SOLA VEZ al cargar el componente
    esto es el equivalente a 
    componentDidMount
    */
    useEffect(
        () => {
            console.log("Hola desde el useEffect!!!")
        }, [])
    return (
        <>
            <h1>Peticiones</h1>
            <h2>useEffect</h2>
            <input
                type="texto"
                onChange={(e) => setTexto(e.target.value)}></input>
            <br />
            <span>{texto}</span>
        </>
    )
}