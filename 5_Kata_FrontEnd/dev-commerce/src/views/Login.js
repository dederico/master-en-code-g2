import React from 'react'
import useForm from '../hooks/useForm';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import Navbar from '../components/Navbar'

export default function Login() {
    // const history = useHistory();
    const sendForm = (inputs) => {
        console.log('Ejecute sendForm');
        console.log(inputs.email)
        axios.post('https://ecomerce-master.herokuapp.com/api/v1/login', {
            email: inputs.email,
            password: inputs.password
        })
            .then(res => {
                console.log(res.data);
                console.log(res.status);

                if (res.status === 200) {
                    alert(`${inputs.email} Success`)
                }
                const token = res.token;
                window.localStorage.setItem('token', token);
                // history.push('/welcome');
                console.log(token)
                console.log(res.role)
            })
            .catch(error => {
                console.error(error.response.data);
            })

    };
    const {
        inputs,
        handleInputs,
        handleSubmit,
    } = useForm(sendForm, {
        email: "",
        password: ""
    });





    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="col-5-signup"
                style={{
                    'display': 'flex',
                    'justify-content': 'center',
                    'flex-direction': 'column',
                    'align-items': 'center'
                }}>
                <h1>Auth Form</h1>
                <div className="mb-3 col-5" style={{ 'margin-top': '20px' }}>
                    <label for="email1" className="form-label">Email address</label>
                    <input value={inputs.email} required onChange={handleInputs} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="email" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3 col-5">
                    <label for="password" className="form-label">Password</label>
                    <input value={inputs.password} required onChange={handleInputs} type="password" className="form-control" id="password" />
                </div>

                <button type="submit" className="btn btn-primary" style={{
                    'max-width': '200px',
                    'margin-left': '45px'
                }}>Submit</button>
            </form>
        </>
    )
}