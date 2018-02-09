import React from 'react';
import { shallow } from 'enzyme';
import {TodoList} from './TodoList';
import Immutable from 'immutable';

it('renders without crashing', () => {
  const wrapper = shallow(<TodoList todos={Immutable.Map()} />);

  expect(wrapper.find(TodoList)).toBeTruthy();
});