import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Accordion from './Accordion';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

describe(`Accordion Component`, () => {
    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordion />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    it('renders the no sections by default', () => {
        const wrapper = shallow(<Accordion />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('opens any clicked section', () => {
        const wrapper = shallow(<Accordion />)
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('only opens one section at a time', () => {
        const wrapper = shallow(<Accordion />)
        wrapper.find('button').at(1).simulate('click')
        wrapper.find('button').at(2).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})