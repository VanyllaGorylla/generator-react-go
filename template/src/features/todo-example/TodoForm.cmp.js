import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: ''
    };
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.inputVal);
    this.setState({ inputVal: '' });
  };

  handleInputChange = e => {
    this.setState({ inputVal: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          value={this.state.inputVal}
          placeholder="Put todo name here"
          onChange={this.handleInputChange}
        />
        <button className="btn" type="submit">
          Add todo
        </button>
      </form>
    );
  }
}

TodoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default TodoForm;
