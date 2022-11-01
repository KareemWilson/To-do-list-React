import React, { Component } from 'react';
import Proptypes from 'prop-types';
import styles from '../styles/TodoItem.module.css';

class TodoItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { todo, handleChangeProps, handleDeleteProps } = this.props;
    const { id, completed, title } = todo;
    return (
      <>
        <li className={styles.item}>
          <input
            type="checkbox"
            checked={completed}
            className={styles.checkbox}
            onChange={() => handleChangeProps(id)}
          />
          <button type="button" onClick={() => handleDeleteProps(id)}>
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

TodoItem.defaultProps = {
  todo: {},
  handleChangeProps: null,
  handleDeleteProps: null,
};

TodoItem.propTypes = {
  todo: Proptypes.shape({
    id: Proptypes.string,
    title: Proptypes.string,
    completed: Proptypes.bool,
  }),
  handleChangeProps: Proptypes.func,
  handleDeleteProps: Proptypes.func,
};

export default TodoItem;
