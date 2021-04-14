import React from 'react';

function SignUpComponent() {
    return (
        <form>
            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="email" />
                <div id="email" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="checkbox" />
                <label className="form-check-label" for="checkbox1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default SignUpComponent