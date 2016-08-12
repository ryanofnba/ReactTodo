import React, { Component } from 'react';
import moment from 'moment';
class Todo extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { id, text, completed, createdAt, completedAt } = this.props;
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
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed} />
        <p>{text}</p>
        <o>{renderDate()}</o>
      </div>
    );
  }
}

export default Todo;
