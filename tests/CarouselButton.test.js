import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import  CarouselButton from '../src/CarouselButton';

configure({adapter: new Adapter() });

describe('Carousel Button', () => {
    it('renders a <button>', () => {
        const wrapper = shallow(<CarouselButton />);
        expect(wrapper.type()).toBe('button');
    });
});