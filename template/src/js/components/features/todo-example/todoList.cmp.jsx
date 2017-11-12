import React from 'react';
import TodoItem from './todoItem.cmp.jsx';

const TodoList = ({ todos, itemClick }) => {
	let todoItems = todos.map(t => (<TodoItem
		key={t.id}
		todo={t}
		itemClick={itemClick}
	/>));
	return <ul>
		{todoItems}
	</ul>;
};

export default TodoList;
