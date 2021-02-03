import React, { Component } from 'react';


class HolaMundo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            texto: 'Hola desde el componente!'
        }
    }
    componentWillMount() {
        console.log('Se va a montar el componente...');
        // for (let index = 0; index < 99000; index++) {
        //     console.log("UNO")
        // }
    }
    componentDidMount() {
        console.log('Se monto el componente.');
        // Simulemos una peticion a la BD 
        setTimeout(() => {
            this.setState(
                { texto: 'Se actualizo...' }
            )
        }, 3000)
    }

    render() {
        console.log('RENDER')
        return (
            <React.Fragment>
                <h1> Componente HolaMundo </h1>
                <h2>{this.state.texto} </h2>
                <p>

                </p>
            </React.Fragment>
        );
    }
}

export default HolaMundo;