import React from 'react';
import {
    CardGroup,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,

} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Styles
import './ShowCard.scss'
const ShowCard = ({ id, image, summary, name }) => {
    return (
        <div>
            <CardGroup
                id="card-group" className="sm-4">
                <Card sm="6" style={{
                    width: '300px'
                }}>
                    <CardImg top width="100%" src={image} alt="Show Image" />
                    <CardBody>
                        < Link to={`shows/${id}`} style={{ textDecoration: 'none' }}>
                            <CardTitle tag="h5">{name}</CardTitle>
                        </Link>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{id}</CardSubtitle>
                        <CardText>{summary}</CardText>
                    </CardBody>
                </Card>
            </CardGroup>

        </div>
    );
};
ShowCard.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
export default ShowCard;