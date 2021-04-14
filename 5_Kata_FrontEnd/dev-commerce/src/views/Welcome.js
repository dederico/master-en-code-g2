import React from 'react'
import Background from '../components/Background'
import payload from '../utils/payload'
import Login from '../views/Login'

const Welcome = () => {
    const user = payload();
    return (
        <div>
            <Background />
            {alert("Bienvenido a casa")}
            {console.log(Login)}

        </div>
    )
}

export default Welcome
