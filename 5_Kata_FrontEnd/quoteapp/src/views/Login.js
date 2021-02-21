import React from 'react';
import useForm from '../hooks/useForms'

export default function Login() {
    const {
        inputs,
        handleInputs,
    } = useForm({
        email: "mali",
        password: "perro123"
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container my-4">
                <div className="row">
                    <div className="col-7 mt-3">
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">@</span>
                            <input value={inputs.email} onChange={handleInputs} type="text" className="form-control" id="email" placeholder="Email" aria-label="email" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <div className="col-7 mt-3">
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">@</span>
                            <input value={inputs.password} onChange={handleInputs} type="password" className="form-control" id="password" placeholder="Contraseña" aria-label="password" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <div className="col-6 mt-4">
                        <button type="submit" class="btn btn-info">Iniciar sesión</button>
                    </div>
                </div>
            </div>
        </form>
    );
};