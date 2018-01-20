import React from 'react';

const TodoItem = ({ todo, itemClick }) => (
	<li
		onClick={() => { itemClick(todo); }}
	>
		<input
			type="checkbox"
			id={`li-checkbox-${todo.id}`}
			onChange={() => { }}
			defaultChecked={todo.completed}
			// need to stop event propagation, in other case, itemClick will be called twice
			onClick={e => e.stopPropagation()}
		/>
		<label
			htmlFor={`li-checkbox-${todo.id}`}
			style={{ textDecoration: todo.completed ? 'line-through' : '' }}
			className={!todo.completed ? "label-color" : ""}
		>{todo.title}</label>
	</li>
);

export default TodoItem;
