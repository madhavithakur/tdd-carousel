import React from 'react';
import PropType from 'prop-types'

const CarouselSlide = ({imgUrl, description, attribution, ...rest}) => (
    <figure {...rest}>
        <img src={imgUrl}/>
        <figcaption>
            <strong>
                {description}
            </strong> {attribution}
        </figcaption>
    </figure>
);

CarouselSlide.propTypes = {
    imgUrl: PropType.string,
    description: PropType.string,
    attribution: PropType.string,
}

export default CarouselSlide;