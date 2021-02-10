import { Route } from 'react-router-dom';
import Peticiones from './components/Peticiones'

function Routes() {
    return (
        <>
            <Route exact path="/">
                <h2>Inicio</h2>
            </Route>
            <Route exact path="/ejemplo">
                <h2>Ejemplo</h2>
            </Route>
            <Route exact path="/peticiones">
                <Peticiones />
            </Route>
        </>
    )
}

export default Routes