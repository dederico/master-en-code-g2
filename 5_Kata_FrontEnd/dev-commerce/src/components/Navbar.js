import React from 'react';
import logo from '../utils/logo.svg'
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" width="90" className="d-inline-block align-top" />
                    </Link>

                    <Link className="navbar-brand" to="/login">Login</Link>
                    <Link className="navbar-brand" to="/signup">Sing-Up</Link>
                    <Link className="navbar-brand" to="/profile">Profile</Link>

                </div>
            </nav>
        </>
    )
}
export default Navbar