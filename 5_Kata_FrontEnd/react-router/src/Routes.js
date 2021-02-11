import { Route } from 'react-router-dom';
import Peticiones from './components/Peticiones'

function Routes() {
    return (
        <div className="container">
            <Route exact path="/">
                <h2>Inicio</h2>
            </Route>
            <Route exact path="/ejemplo">
                <h2>Ejemplo</h2>
            </Route>
            <Route exact path="/peticiones">
                <Peticiones />
            </Route>
        </div>
    )
}

export default Routes