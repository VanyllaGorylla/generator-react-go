import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import todos from '@/features/todo-example/todos.rdcr';
import posts from '@/features/posts/posts.rdcr';

export default combineReducers({
  todos,
  posts,
  form
});
