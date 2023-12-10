import React from 'react';
import PropType from 'prop-types';
//import styled from 'styled-components';

// const Img = styled.img`
//     object-fit: cover;
//     width: 100%;
//     height: 500px;
// `;

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