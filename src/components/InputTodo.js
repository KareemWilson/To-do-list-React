import React, { Component } from 'react';
import Proptypes from 'prop-types';
import styles from '../styles/InputTodo.module.css';

class InputTodo extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { addNewTodoProps } = this.props;
    const { title } = this.state;

    e.preventDefault();
    addNewTodoProps(title);
    this.setState({
      title: '',
    });
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.formContainer}>
        <input
          className={styles.inputTodo}
          name="title"
          type="text"
          placeholder="type todo..."
          value={title}
          onChange={this.handleChange}
        />
        <button type="button" className={styles.submitTodo}>
          Submit
        </button>
      </form>
    );
  }
}

InputTodo.defaultProps = {
  addNewTodoProps: null,
};

InputTodo.propTypes = {
  addNewTodoProps: Proptypes.func,
};

export default InputTodo;
