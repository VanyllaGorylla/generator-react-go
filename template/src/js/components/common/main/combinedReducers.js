import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import todos from 'TodoExampleModule/todos.rdcr';
import posts from 'PostsModule/posts.rdcr';

export default combineReducers({
	todos,
	posts,
	form
});
