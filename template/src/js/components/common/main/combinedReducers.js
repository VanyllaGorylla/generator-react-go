import { combineReducers } from 'redux';
import todos from '../../features/todo-example/todos.rdcr';
import posts from '../../features/posts/posts.rdcr';


export default combineReducers({
	todos,
	posts
});
