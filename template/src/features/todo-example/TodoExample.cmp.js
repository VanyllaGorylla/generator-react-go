import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, Container } from 'react-materialize';
import PropTypes from 'prop-types';

import TodoList from './TodoList.cmp';
import actions from './todoExample.actions';

import TodoForm from './TodoForm.cmp';

class TodoExample extends Component {
  render() {
    return (
      <Container className="todo-example">
        <Card title="Todo Example">
          <Row>
            <Col>
              <TodoForm handleSubmit={this.props.addTodo} />
            </Col>
          </Row>
          <Row>
            <Col>
              <TodoList todos={this.props.todos} />
            </Col>
          </Row>
        </Card>
      </Container>
    );
  }
}

TodoExample.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  addTodo: title => {
    dispatch({ type: actions.ADD_TODO, payload: { title } });
  }
});

export { TodoExample };
export default connect(mapStateToProps, mapDispatchToProps)(TodoExample);
