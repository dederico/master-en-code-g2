import React from 'react';
import useForm from '../hooks/useForm';
import axios from 'axios';

export default function Signup() {
    const sendForm = (inputs) => {
        console.log('Funciona');
        console.log(inputs.email)
        axios.post('https://ecomerce-master.herokuapp.com/api/v1/login', {
            email: inputs.email,
            password: inputs.password
        }).then(res => {
            console.log(res.data);
            console.log(res.status);
            console.log(res.headers);
            if (res.status === 200) {
                alert(`${inputs.email}  You have logged in correctly`);


            }
        })
            .catch(err => console.log(err)
            )

    }

    const {
        inputs,
        handleInputs,
        handleSubmit
    } = useForm(sendForm, {
        email: "",
        password: ""

    })


    return (
        <form onSubmit={handleSubmit}>
            <div className="container my-4">
                <div className="row">
                    <div className="col-7 mt-3">
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">E-mail</span>
                            <input value={inputs.email} onChange={handleInputs} type="email" className="form-control" id="email" placeholder="Email" aria-label="email" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <div className="col-7 mt-3">
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">Contrasena</span>
                            <input value={inputs.password} onChange={handleInputs} type="text" className="form-control" id="password" placeholder="Contraseña" aria-label="password" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <div className="col-6 mt-4">
                        <button type="submit" className="btn btn-info">Inicia Sesion</button>
                    </div>
                </div>
            </div>
        </form>
    );
};