import React from 'react';
import { shallow } from 'enzyme';
import MemoizedCarousel from '../src/Carousel';

describe('Carousel', ()=>{
    let wrapper;

    beforeEach(()=>{
        const slides = [
            {
              imgUrl: 'https://example.com/slide1.png',
              description: 'Slide 1',
              attribution: 'Uno Pizzeria',
            },
            {
              imgUrl: 'https://example.com/slide2.png',
              description: 'Slide 2',
              attribution: 'Dos Equis',
            },
            {
              imgUrl: 'https://example.com/slide3.png',
              description: 'Slide 3',
              attribution: 'Three Amigos',
            },
          ];
        wrapper = shallow(<MemoizedCarousel slides={slides}/>)
    });

    it('renders a <div>', ()=>{
        expect(wrapper.type()).toBe('div');
    });

    // it('has an initial `slideIndex` of 0', () => {
    //     expect(wrapper.state('slideIndex')).toBe(0);
    // });
});