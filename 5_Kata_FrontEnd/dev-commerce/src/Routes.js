import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './views/Home'
import Login from './views/Login'
import SignUp from './views/SignUp'
import Profile from './views/Profile'
import Navbar from './components/Navbar'
import Welcome from './views/Welcome'
// import Background from './components/Background'

export default function Routes() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/welcome' component={Welcome} />
            </Switch>



        </Router>)
}