import axios from 'axios'
import { useState, useEffect } from 'react';


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

    useEffect(() => {
        // Hacer la peticion a la API
        axios.get(tacoAPI)
            .then((response) => {
                setTaco(response.data)
            })

            .catch((err) => console.log(err));
        // Con la respuesta, modificar el estado de mi componente 
    }, [])


    // useEffect(
    //     () => {
    //         console.log("Hola desde el useEffect!!!")
    //     }, [])
    return (
        <div className="container">
            <h1>Peticiones</h1>
            <h2>useEffect</h2>
            <h3>- Taco Fancy API -</h3>
            {/* <input
                type="texto"
                onChange={(e) => setTexto(e.target.value)}></input>
            <br />
            <span>{texto}</span> */}
            <p>{

                taco.condiment
                    ? taco.condiment.name
                    : 'Estamos eligiendo tu taco'

            }</p>
        </div>
    )
}