import PropTypes from 'prop-types';
function TacoComponent({ taco, author }) {
    return (

        <>
            <p>
                {`${taco.base_layer.name} 
                with ${taco.mixin.name}
                garnished with ${taco.condiment.name}
                topped off with ${taco.seasoning.name}
                and wrapped in a delicious ${taco.shell.name}
                ${author}`}

            </p>
        </>
    )

}

TacoComponent.defaultProps = {
    author: 'Stranger'
};

TacoComponent.propTypes = {
    taco: PropTypes.object.isRequired,
    author: PropTypes.string.isRequired
}

export default TacoComponent