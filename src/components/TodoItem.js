import React, { Component } from "react";
import styles from '../styles/TodoItem.module.css'
class TodoItem extends Component {
  render() {
    return (
      <>
        <li className={styles.item}>
          <input
            type="checkbox"
            checked={this.props.todo.completed}
            className={styles.checkbox}
            onChange={() => this.props.handleChangeProps(this.props.todo.id)}
          />
          <button
          onClick={() => this.props.handleDeleteProps(this.props.todo.id)}
        >
          Delete
        </button>
        <span className={this.props.todo.completed ? styles.completedStyle : null}>
          {this.props.todo.title}
        </span>
        </li>
        
      </>
    );
  }
}

export default TodoItem;
