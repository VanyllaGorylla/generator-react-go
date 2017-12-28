import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import configureStore from 'redux-mock-store'

import Adapter from 'enzyme-adapter-react-16';

import TodoItem from '../../../../../src/js/components/features/todo-example/TodoItem.cmp.jsx';

configure({ adapter: new Adapter() });

describe(`TodoItem test`, function () {
	it('should trigger on click', function () {
		const todo = { id: 2, title: 'Wash your dishes', completed: false };
		const itemClick = jest.fn();
		const wrapper = shallow(<TodoItem todo={todo} itemClick={itemClick} />);
		wrapper.simulate('click');
		expect(itemClick).toBeCalledWith(todo);
	});
});