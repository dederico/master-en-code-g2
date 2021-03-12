import React from 'react'
// import SignUpComponent from '../components/SignUpComponent.js'
// import Background from '../components/Background'

function SignUp() {
    return (
        <form className="container-signup" style={{
            'display': 'flex',
            'justify-content': 'center',
            'flex-direction': 'column',
            'align-items': 'center'
        }}>
            <h1> Sign Up Form</h1>
            <div className="col-5" style={{ 'margin-top': '20px' }}>
                <label for="first-name" className="form-label-first-name">First Name</label>
                <input placeholder="Federico" type="text" className="container form-control-first-name" id="first-name" aria-label="nameHelp" />

            </div>
            <div className="col-5" style={{ 'margin-top': '20px' }}>
                <label for="last-name" className="form-label-first-name">Last Name</label>
                <input type="text" placeholder="Gonzalez" className="container form-control-last-name" id="last-name" aria-label="lastnameHelp" />

            </div>
            <div className="col-5" style={{ 'margin-top': '20px' }}>
                <label for="exampleInputEmail1" className="form-label-email">Email address</label>
                <input type="email" placeholder="dederico@gmail.com" className="container form-control-email" id="exampleInputEmail1" aria-label="emailHelp" />
                <div id="emailHelp" className="form-text-email">We'll never share your email with anyone else.</div>
            </div>

            <div className="col-5">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" aria-label="confrimPassword" />
            </div>

            <div className="col-5">
                <label for="confirmPassword" className="form-label">Confirm your Password</label>
                <input type="password" className="form-control" id="confirmPassword" aria-label="confirmPassword" />
            </div>

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


export default SignUp