import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import PropTypes from 'prop-types';

function Routes({ shows }) {
    return (
        <>
            <Route exact path="/">
                <div className="container pt-4">
                    <Home shows={shows} />
                </div>
            </Route>
        </>

    )
}
Routes.propTypes = {
    shows: PropTypes.array.isRequired,
}
export default Routes;