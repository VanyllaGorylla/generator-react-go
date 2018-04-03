import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actions from './todoExample.actions';

class TodoItem extends Component {
  toggleTodo = () => {
    this.props.toggleTodo(this.props.todo);
  };

  onClickHandler = e => e.stopPropagation();

  render() {
    const { todo } = this.props;
    return (
      <li onClick={this.toggleTodo}>
        <input
          type="checkbox"
          id={`li-checkbox-${todo.id}`}
          onChange={() => {}}
          defaultChecked={todo.completed}
          // need to stop event propagation, in other case, itemClick will be called twice
          onClick={this.onClickHandler}
        />
        <label
          htmlFor={`li-checkbox-${todo.id}`}
          style={{ textDecoration: todo.completed ? 'line-through' : '' }}
          className={!todo.completed ? 'label-color' : ''}
        >
          {todo.title}
        </label>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  toggleTodo: todo => {
    dispatch({ type: actions.TOGGLE_TODO, payload: todo });
  }
});

export { TodoItem };
export default connect(null, mapDispatchToProps)(TodoItem);
