import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import styles from '../styles/TodoContainer.module.css';
import Header from './Header';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos.filter((todo) => todo.id !== id)],
    }));
  };

  addNewTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.inner}>
          <Header />
          <InputTodo addNewTodoProps={this.addNewTodo} />
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            handleDeleteProps={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
