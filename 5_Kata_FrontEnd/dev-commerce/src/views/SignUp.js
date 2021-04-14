import React from 'react'
// import SignUpComponent from '../components/SignUpComponent.js'
// import Background from '../components/Background'
import ImageUpload from 'react-images-upload'
import axios from 'axios'
import { useHistory } from 'react-router';
import useForm from '../hooks/useForm';

export default function SignUp() {
    const history = useHistory();

    const sendForm = (inputs) => {
        console.log('Ejecute sendForm', inputs);
        if (inputs.password === inputs.confirmPassword) {
            delete inputs.confirmPassword;
            axios.post('https://ecomerce-master.herokuapp.com/api/v1/signup', inputs)
                .then(({ data, status }) => {
                    console.log(data, status);
                    history.push('/');
                })
                .catch(error => { console.error(error.response.data); })
        } else {
            alert('Password needs to match');
        }
    };
    const {
        inputs,
        handleInputs,
        handleSubmit,
    } = useForm(sendForm, {});

    return (
        <form onSubmit={handleSubmit}
            className="container-signup"
            style={{
                'display': 'flex',
                'justify-content': 'center',
                'flex-direction': 'column',
                'align-items': 'center'
            }}>
            <h1> Sign Up Form</h1>
            <div className="col-5" style={{ 'margin-top': '20px' }}>
                <label for="first_name" className="form-label-first-name">First Name</label>
                <input required value={inputs.first_name} onChange={handleInputs} placeholder="Federico" type="text" className="container form-control-first-name" id="first_name" aria-label="first_name" />

            </div>
            <div className="col-5" style={{ 'margin-top': '20px' }}>
                <label for="last_name" className="form-label-last-name">Last Name</label>
                <input required value={inputs.last_name} onChange={handleInputs} type="text" placeholder="Gonzalez" className="container form-control-last-name" id="last_name" aria-label="last_name" />

            </div>
            <div className="col-5" style={{ 'margin-top': '20px' }}>
                <label for="InputEmail" className="form-label-email">Email address</label>
                <input value={inputs.email} onChange={handleInputs} type="email" placeholder="dederico@gmail.com" className="container form-control-email" id="email" aria-label="email" />
                <div className="form-text-email">We'll never share your email with anyone else.</div>
            </div>

            <div className="col-5">
                <label for="InputPassword" className="form-label">Password</label>
                <input required value={inputs.password} onChange={handleInputs} type="password" className="form-control" id="password" aria-label="password" />
            </div>

            <div className="col-5">
                <label for="confirmPassword" className="form-label">Confirm your Password</label>
                <input value={inputs.confirmPassword} onChange={handleInputs} type="password" className="form-control" id="confirmPassword" aria-label="confirmPassword" />
            </div>
            <ImageUpload />
            {/* value={inputs.image}
                onChange={handleInputs}
            /> */}

            <button type="submit" className="btn btn-primary" style={{
                'display': 'flex',
                'alignItems': 'center',
                'alignContent': 'center',
                'margin-top': '20px',
                'max-width': '200px',
            }}>Submit</button>
        </form >

    )
}
