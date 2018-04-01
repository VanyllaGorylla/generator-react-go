import actions from './todoExample.actions';

let todoId = 0;
function todos(state = [], action) {
  let result;

  switch (action.type) {
    case actions.ADD_TODO:
      result = [
        ...state,
        {
          title: action.payload.title,
          id: todoId++,
          completed: false
        }
      ];
      break;
    case actions.TOGGLE_TODO:
      result = state.map(t => {
        if (t.id === action.payload.id) {
          return { ...t, completed: !t.completed };
        }
        return t;
      });
      break;
    default:
      result = state;
  }

  return result;
}

export default todos;
