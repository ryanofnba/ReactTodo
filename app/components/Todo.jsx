import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
const actions = require('actions');

export class Todo extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { id, text, completed, createdAt, completedAt, dispatch } = this.props;
    const todoClassName = completed ? 'todo todo-completed' : 'todo';

    const renderDate = () => {
      var message = 'Created ';
      var timeStamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timeStamp = completedAt;
      }

      return message + moment.unix(timeStamp).format('MMM Do YYYY @ h:mm a');
    }
    return (
      <div className={todoClassName} onClick={() => {
          // this.props.onToggle(id);
          dispatch(actions.startToggleTodo(id, !completed));
        }}>
        <div>
          <input type="checkbox" checked={completed} />
        </div>
        <div>
          <p>{text}</p>
          <o className="todo-subtext">{renderDate()}</o>
        </div>
      </div>
    );
  }
}

export default connect()(Todo);
