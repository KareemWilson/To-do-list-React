import React, { Component } from 'react';
import Proptypes from 'prop-types';
import styles from '../styles/TodoItem.module.css';

class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      editing: false,
    };
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  }

  render() {
    const {
      todo, handleChangeProps, handleDeleteProps, setUpdateProps,
    } = this.props;
    const { id, completed, title } = todo;
    const { editing } = this.state;
    const viewMode = {};
    const editMode = {};
    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    return (
      <>
        <li className={styles.item}>
          <div onDoubleClick={this.handleEditing} style={viewMode}>
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
          </div>
          <input
            type="text"
            style={editMode}
            className={styles.textInput}
            value={title}
            onChange={(e) => {
              setUpdateProps(e.target.value, id);
            }}
            onKeyDown={this.handleUpdatedDone}
          />
        </li>
      </>
    );
  }
}

TodoItem.defaultProps = {
  todo: {},
  handleChangeProps: null,
  handleDeleteProps: null,
  setUpdateProps: null,
};

TodoItem.propTypes = {
  todo: Proptypes.shape({
    id: Proptypes.string,
    title: Proptypes.string,
    completed: Proptypes.bool,
  }),
  handleChangeProps: Proptypes.func,
  handleDeleteProps: Proptypes.func,
  setUpdateProps: Proptypes.func,
};

export default TodoItem;
