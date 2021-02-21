import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ shows }) => {
    console.log('En Home:', shows);
    // shows.show
    // show.name
    // show.image.medium
    // show.summary
    const showResults = () => {
        return shows.map(showObject => {
            return (<h3>{showObject.show.name}</h3>)
        });



    }
    return (
        <>
            {
                shows.length > 0
                    ?
                    showResults()
                    : <h1>Home</h1>

            }
            <card>

            </card>

        </>
    )
}

Home.propTypes = {
    shows: PropTypes.array.isRequired,
}
export default Home;