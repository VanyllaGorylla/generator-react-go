import React from 'react';
import { shallow } from 'enzyme';

import TodoItem from '@/features/todo-example/TodoItem.cmp';

describe(`TodoItem test`, function() {
  it('should trigger on click', function() {
    const todo = { id: 2, title: 'Wash your dishes', completed: false };
    const itemClick = jest.fn();
    const wrapper = shallow(<TodoItem todo={todo} itemClick={itemClick} />);
    wrapper.simulate('click');
    expect(itemClick).toBeCalledWith(todo);
  });
});
