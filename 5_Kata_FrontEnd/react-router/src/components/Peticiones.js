import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';
import TacoComponent from './TacoComponent'

export default function Peticiones() {
    const [taco, setTaco] = useState({});
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

    const tacoAPI = 'http://taco-randomizer.herokuapp.com/random/';

    async function getTaco() {
        try {
            const response = await axios.get(tacoAPI);
            setTaco(response.data);
        } catch (error) {
            alert("ocurrio un error");
        }
    }

    useEffect(() => {
        setTimeout(getTaco, 1500);
    }, []);


    // useEffect(
    //     () => {
    //         console.log("Hola desde el useEffect!!!")
    //     }, [])
    return (
        < div className="container" >
            <h1>Peticiones</h1>
            <h2>useEffect</h2>
            <h3>- Taco Fancy API -</h3>

            {
                taco.condiment
                    ? <TacoComponent taco={taco} />
                    : <span>Estamos eligiendo el taco ideal para ti </span>
            }

        </div>
    )
}