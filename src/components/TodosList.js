import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodosList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      todos, handleChangeProps, handleDeleteProps, setUpdateProps,
    } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            handleDeleteProps={handleDeleteProps}
            setUpdateProps={setUpdateProps}
          />
        ))}
      </ul>
    );
  }
}

TodosList.defaultProps = {
  todos: [],
  handleChangeProps: null,
  handleDeleteProps: null,
  setUpdateProps: null,
};

TodosList.propTypes = {
  todos: PropTypes.arrayOf(Object),
  handleChangeProps: PropTypes.func,
  handleDeleteProps: PropTypes.func,
  setUpdateProps: PropTypes.func,
};

export default TodosList;
