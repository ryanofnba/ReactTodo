import React, { Component } from 'react';
import Todo from 'Todo';
import { connect } from 'react-redux';
const TodoAPI = require('TodoAPI');

export class TodoList extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    const { todos, showCompleted, searchText } = this.props;
    const renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing to do</p>
        )
      }
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map(todo => {
        return (
          <Todo key={todo.id} {...todo} />
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

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(TodoList);
