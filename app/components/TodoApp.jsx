import React, { Component } from 'react';
import uuid from 'node-uuid';
import moment from 'moment';
import * as Redux from 'react-redux';
import * as actions from 'actions';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.onLogout = this.onLogout.bind(this);
  }

  onLogout(event) {
    event.preventDefault();

    const { dispatch } = this.props;

    dispatch(actions.startLogout());
  }

  render() {
    return (
      <div>
        <div className="page-actions">
          <a onClick={this.onLogout} href="#">Logout</a>
        </div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch />
              <TodoList />
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Redux.connect()(TodoApp);
