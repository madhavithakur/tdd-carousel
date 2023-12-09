import React from 'react';
import CarouselButton from './CarouselButton';
import PropTypes from 'prop-types';
import CarouselSlide from './CarouselSlide';

const Carousel = ({slides}) => {
    const [slideIndex, setSlideIndex] = React.useState(0);
    const handlePrevClick = () => {
        setSlideIndex((slideIndex+slides.length-1)%slides.length);
    }
    const handleNextClick = () => {
        setSlideIndex((slideIndex+slides.length+1)%slides.length);
    }
    return (
        <div>
            <CarouselSlide {...slides[slideIndex]} />
            <CarouselButton data-action="prev" onClick={handlePrevClick}>
                Prev
            </CarouselButton>
            <CarouselButton data-action="next" onClick={handleNextClick}>
                Next
            </CarouselButton>
        </div>)
}

Carousel.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.shape(CarouselSlide.propTypes)),
}

const MemoizedCarousel = React.memo(Carousel);

export default MemoizedCarousel;