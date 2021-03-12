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
                    </Link >
                    <Link style={{
                        'textDecoration': 'none',
                        'color': 'black'
                    }} id="navbar-brand-signIn" className="navbar-brand-signIn" to="/signup">Sing-Up</Link>
                    <Link style={{
                        'textDecoration': 'none',
                        'color': 'black'
                    }} id="navbar-brand-login" className="navbar-brand-login" to="/login">Login</Link>
                    <Link style={{
                        'textDecoration': 'none',
                        'color': 'black'
                    }} id="navbar-brand-profile" className="navbar-brand-profile" to="/profile">Profile</Link>
                    <Link style={{
                        'textDecoration': 'none',
                        'color': 'black'
                    }} id="navbar-brand-signOut" className="navbar-brand-signOut" to="/close">Sign-Out</Link>
                </div>
            </nav>
        </>
    )
}
export default Navbar