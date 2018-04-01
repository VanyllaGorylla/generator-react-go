import ACTIONS from '@/features/todo-example/todoExample.actions';
import todos from '@/features/todo-example/todos.rdcr';

describe('todos reducer tests', function() {
  it('should add new todo item', function() {
    const state = [];
    let newState = todos(state, {
      type: ACTIONS.ADD_TODO,
      payload: { title: 'Clean your room' }
    });

    let expectedState = [{ id: 0, title: 'Clean your room', completed: false }];

    expect(newState).toEqual(expectedState);
  });

  it('should toggle completed prop', function() {
    const state = [
      { id: 0, title: 'Clean your room', completed: false },
      { id: 1, title: 'Clean bathroom', completed: true }
    ];

    const expectedState1 = [
      { id: 0, title: 'Clean your room', completed: true },
      { id: 1, title: 'Clean bathroom', completed: true }
    ];

    let resultState1 = todos(state, {
      type: ACTIONS.TOGGLE_TODO,
      payload: { id: 0 }
    });

    const expectedState2 = [
      { id: 0, title: 'Clean your room', completed: false },
      { id: 1, title: 'Clean bathroom', completed: false }
    ];

    let resultState2 = todos(state, {
      type: ACTIONS.TOGGLE_TODO,
      payload: { id: 1 }
    });

    expect(resultState1).toEqual(expectedState1);
    expect(resultState2).toEqual(expectedState2);
  });
});
