import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render LoginPage coorectly', () => {
  const wrapper = shallow(<LoginPage startLogin={() => {  }} />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
  const startLoginSpy = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLoginSpy} />);
  wrapper.find('button').simulate('click');
  expect(startLoginSpy).toHaveBeenCalled();
});