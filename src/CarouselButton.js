import React from 'react';
import PropTypes from 'prop-types';

const CarouselButton = props => <button {...props} />;

CarouselButton.propTypes = {
    props: PropTypes.node.isRequired,
}

export default CarouselButton;