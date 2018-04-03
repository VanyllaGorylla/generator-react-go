import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import moxios from 'moxios';

import WrappedTodoExample, {
  TodoExample
} from '@/features/todo-example/TodoExample.cmp';

describe('TodoExample test', function() {
  let store;

  beforeEach(() => {
    moxios.install();
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
    });
  });

  it('should render proper html', function() {
    let addTodo = jest.fn();

    const todos = [
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
    ];

    const tree = renderer
      .create(
        <Provider store={store}>
          <WrappedTodoExample />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(function() {
    moxios.uninstall();
  });
});
