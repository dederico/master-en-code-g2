import React from 'react';
import useForm from '../hooks/useForm';
import axios from 'axios';

export default function Signup() {
    const sendForm = (inputs) => {
        console.log('Funciona');
        console.log(inputs.email)
        axios.post('https://ecomerce-master.herokuapp.com/api/v1/signup', {
            email: inputs.email,
            first_name: inputs.name,
            last_name: inputs.lastName,
            password: inputs.password,
        }).then(res => console.log(res)).catch(err => console.log(err))
    }
    const {
        inputs,
        handleInputs,
        handleSubmit
    } = useForm(sendForm, {
        email: "",
        password: "",
        name: "",
        lastName: "",
        password_conf: ""

    })


    return (
        <form onSubmit={handleSubmit}>
            <div className="container my-4">
                <div className="row">
                    <div className="col-7 mt-3">
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">@</span>
                            <input value={inputs.email} onChange={handleInputs} type="email" className="form-control" id="email" placeholder="Email" aria-label="email" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <div className="col-7 mt-3">
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">@</span>
                            <input value={inputs.name} onChange={handleInputs} type="text" className="form-control" id="name" placeholder="Primer Nombre" aria-label="name" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <div className="col-7 mt-3">
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">@</span>
                            <input value={inputs.lastName} onChange={handleInputs} type="text" className="form-control" id="lastName" placeholder="Apellido" aria-label="lastName" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <div className="col-7 mt-3">
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">@</span>
                            <input value={inputs.password} onChange={handleInputs} type="password" className="form-control" id="password" placeholder="Contraseña" aria-label="password" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <div className="col-7 mt-3">
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">@</span>
                            <input value={inputs.password_conf} onChange={handleInputs} type="text" className="form-control" id="password_conf" placeholder="Confirmación de contraseña" aria-label="password-confirmation" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <div className="col-6 mt-4">
                        <button type="submit" className="btn btn-info">Crear Cuenta</button>
                    </div>
                </div>
            </div>
        </form>
    );
};