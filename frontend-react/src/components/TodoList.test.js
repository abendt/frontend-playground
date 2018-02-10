import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './TodoList';

it('renders without crashing', () => {

  const wrapper = shallow(<TodoList todos={[]} />);

  expect(wrapper.find(TodoList)).toBeTruthy();
});