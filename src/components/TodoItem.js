import React, { Component } from "react";
import styles from '../styles/TodoItem.module.css'
class TodoItem extends Component {
  render() {
    const { id, completed, title } = this.props.todo
    return (
      <>
        <li className={styles.item}>
          <input
            type="checkbox"
            checked={completed}
            className={styles.checkbox}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button
          onClick={() => this.props.handleDeleteProps(id)}
        >
          Delete
        </button>
        <span className={completed ? styles.completedStyle : null}>
          {title}
        </span>
        </li>
        
      </>
    );
  }
}

export default TodoItem;
