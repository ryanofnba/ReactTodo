import React, { Component } from 'react';
import Todo from 'Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);

  }
  render() {

    const { todos } = this.props;
    const renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing to do</p>
        )
      }
      return todos.map(todo => {
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
        );
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
}

export default TodoList;
