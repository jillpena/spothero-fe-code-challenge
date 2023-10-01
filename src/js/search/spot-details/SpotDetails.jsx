import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatPrice } from '../../utils/common';

const SpotDetails = ({selectedSpot}) => {
    const handleFormatPrice = (price) => {
        const priceString = price.toString();
        const trimmedString = priceString.slice(0, -2);
        const priceFloat = parseFloat(trimmedString);
        return formatPrice(priceFloat);
    };

    return (
        <div className="SpotDetails">
            <h2>{selectedSpot.title}</h2>
            <p>{selectedSpot.description}</p>
            <Link to="/checkout" className="Button Spot-details-button">
                {handleFormatPrice(selectedSpot.price)} | Book it!
            </Link>
        </div>
    );
};

SpotDetails.propTypes = {
    selectedSpot: PropTypes.object,
};

export default SpotDetails;
