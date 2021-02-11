import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Link
} from "react-router-dom";
import './App.scss';
import Routes from './Routes'

export default function App() {
    return (
        <Router>
            <nav className="navbar">
                <Link className="navbar_link" to="/">Home</Link>
                <Link className="navbar_link" to="/ejemplo">Ejemplo</Link>
                <Link className="navbar_link" to="/peticiones">Peticiones</Link>
            </nav>
            <Switch>
                <Routes />
            </Switch>
        </Router>
    )
}