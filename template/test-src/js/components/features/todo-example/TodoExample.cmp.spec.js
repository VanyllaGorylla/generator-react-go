import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import configureStore from 'redux-mock-store'

import Adapter from 'enzyme-adapter-react-16';

import WrapperTodoExample, { TodoExample } from 'TodoExampleModule/TodoExample.cmp.jsx';

configure({ adapter: new Adapter() });


describe('TodoExample test', function () {
	let store, wrapper;

	beforeEach(() => {
		store = configureStore()({
			todos: [
				{
					id: 1,
					title: 'Do Laundry',
					completed: false
				},
				{
					id: 2,
					title: 'Wash your dishes',
					completed: true
				},
				{
					id: 3,
					title: 'Wash the floor',
					completed: false
				}
			]
		})
	});

	it('should show me html', function () {
		const wrapper = render(
			<WrapperTodoExample store={store} />
		);
		let ulLi = wrapper.find('ul li');
		expect(ulLi.length).toEqual(3);
	});

	it('should start addTodo method', function () {
		let wrapper, instance, input;
		let ulLi;
		let todos = [];
		const addTodo = jest.fn();

		// const spyHandleClick = spyOn(TodoExample.prototype, 'handleClick');
		wrapper = mount(
			<TodoExample todos={todos} addTodo={addTodo} />
		);

		wrapper.find('input').simulate('change', { target: { value: 'Arczik!' } })
		wrapper.find('button').simulate('click');
		expect(addTodo).toBeCalledWith('Arczik!');
	});
}); 