import React, { Component } from "react";
import styles from '../styles/InputTodo.module.css'

class InputTodo extends Component {
  state = {
    title: "",
  };

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNewTodoProps(this.state.title)
    this.setState({
        title: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.formContainer}>
        <input
        className={styles.inputTodo}
          name="title"
          type="text"
          placeholder="type todo..."
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button className={styles.submitTodo}>Submit</button>
      </form>
    );
  }
}

export default InputTodo;
