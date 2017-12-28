import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoList from './todoList.cmp.jsx';
import actions from './todoExample.actions';

class TodoExample extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inputVal: ''
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.props.addTodo(this.state.inputVal);
		this.setState({ inputVal: '' });
	}

	handleInputChange(e) {
		this.setState({ inputVal: e.target.value });
	}

	render() {
		return (
			<div className="todo-example">
				<h3>Todo Example</h3>
				<div className="row">
					<div className="col col-6">
						<input
							type="text"
							value={this.state.inputVal}
							placeholder="Put todo name here"
							onChange={this.handleInputChange} />
						<button
							className="btn"
							onClick={this.handleClick}
						>Add todo</button>
					</div>
				</div>
				<div className="row">
					<div className="col col-12">
						<TodoList
							todos={this.props.todos}
							itemClick={this.props.toggleTodo} />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	todos: state.todos
});

const mapDispatchToProps = dispatch => ({
	addTodo: title => { dispatch({ type: actions.ADD_TODO, payload: { title } }); },
	toggleTodo: todo => { dispatch({ type: actions.TOGGLE_TODO, payload: todo }); },
});

export { TodoExample };
export default connect(mapStateToProps, mapDispatchToProps)(TodoExample);

