import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import  CarouselButton from '../src/CarouselButton';

configure({adapter: new Adapter() });

describe('Carousel Button', () => {

    const text = 'Button Text';
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<CarouselButton>{text}</CarouselButton>);
    });

    it('renders a <button>', () => {
        expect(wrapper.type()).toBe('button');
    });
    it('passes `children` through to the <button>', () => {
        expect(wrapper.prop('children')).toBe(text);
    });
    it('passes other props through to the <button>', ()=>{
        const onClick= () => {};
        const className = 'my-carousel-button';
        const dataAction = 'prev';
        wrapper.setProps({onClick, className, 'data-action': dataAction});
        expect(wrapper.prop('onClick')).toBe(onClick);
        expect(wrapper.prop('className')).toBe(className);
        expect(wrapper.prop('data-action')).toBe(dataAction);
    });
});