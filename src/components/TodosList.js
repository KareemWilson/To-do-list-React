import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodosList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            handleDeleteProps={this.props.handleDeleteProps}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;
