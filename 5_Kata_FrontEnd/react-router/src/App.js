import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    // Link
} from "react-router-dom";
import './App.scss';
import Routes from './Routes'
import NavbarComponent from "./components/NavbarComponent";



export default function App() {
    // const id = 7;
    return (
        <Router>
            <NavbarComponent />
            {/* <nav className="navbar">
                <Link className="navbar_link" to={"/"}>Home</Link>
                <Link className="navbar_link" to="/ejemplo">Ejemplo</Link>
                <Link className="navbar_link" to={`/autor/${id}`}>Autor</Link>
                <Link className="navbar_link" to="/peticiones">Peticiones</Link>
            </nav> */}

            <Switch>
                <Routes />
            </Switch>
        </Router >
    )
}