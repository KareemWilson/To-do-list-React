import { e } from "github-spray/alphabet";
import React, { Component } from "react";

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
      <form onSubmit={this.handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="type todo..."
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default InputTodo;
