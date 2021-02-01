/*
MUST'S EN COMPONENTES
1. El componente inicia con mayuscula.
2. Siempre debermos importar REACT
3. El componente y el archivo se llaman igual
*/


import React from 'react';
import './Counter.css'
// Un class-based component debe heredar de React.Component
class Counter extends React.Component {
    // Ya que heredamos de una clase, tenemos un constructor
    constructor(props) { //{init:"0"} si el valor viene
        // pasado entre comillas, sera de tipo cadena
        // El constructor recibe como argumentos los props
        // Propiedades en el componente.
        // Atributos que asignamos cuando lo estamos llamando en un componente padre
        super(props);
        this.state = {
            count: props.init,

        }
    }

    render() {
        return (<>
            <h2>{this.props.title}</h2>
            <h4>{this.state.count}</h4>
            <div className="counter-container">
                <button className="boton-sumar" onClick={() => {
                    this.setState({
                        count: parseInt(this.state.count) + 1
                    })


                }} >Sumar</button>

                <button className="boton-restar" onClick={() => {
                    this.setState({
                        count: parseInt(this.state.count) - 1
                    })


                }} >Restar</button>
            </div>
        </>)
    }
}
export default Counter;