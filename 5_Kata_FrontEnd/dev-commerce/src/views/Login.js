import React from 'react'

function Login() {
    return (
        <form className="container-signup" style={{
            'display': 'flex',
            'justify-content': 'center',
            'flex-direction': 'column',
            'align-items': 'center'
        }}>
            <h1>Auth Form</h1>
            <div className="mb-3 container" style={{ 'margin-top': '20px' }}>
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3 container">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>

            <button type="submit" className="btn btn-primary" style={{
                'max-width': '200px',
                'margin-left': '45px'
            }}>Submit</button>
        </form>

    )
}


export default Login
