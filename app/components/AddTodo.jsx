import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  onInputChange(event) {
    this.setState({
      todoText: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const todoText = ReactDOM.findDOMNode(this.refs.todoTextInput).value;

    if (todoText.length > 0) {
      this.setState({
        todoText: ''
      });

      ReactDOM.findDOMNode(this.refs.todoTextInput).value = '';

      this.props.onAddTodo(todoText);
    }
    else {
      ReactDOM.findDOMNode(this.refs.todoTextInput).focus();
    }

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="What do you need to do?"
            ref="todoTextInput"
            value={this.state.todoText}
            onChange={this.onInputChange}
          />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
}

export default AddTodo;
