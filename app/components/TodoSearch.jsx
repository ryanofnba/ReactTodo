import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
const actions = require('actions');

export class TodoSearch extends Component {
  constructor(props) {
    super(props);

  }



  render() {
    const { dispatch, showCompleted, searchText } = this.props;

    return (
      <div className="container__header">
        <div>
          <input
            type="search"
            ref="searchText"
            placeholder="Search todos"
            value={searchText}
            onChange={() => {
              const searchText = this.refs.searchText.value;
              dispatch(actions.setSearchText(searchText));
            }} />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              ref="showCompleted"
              checked={showCompleted}
              onChange={() => {
                dispatch(actions.toggleShowCompleted());
              }} />
            Show Completed Todos
          </label>
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return {
    showCompleted: state.showCompleted,
    searchText: state.searchText
  }
})(TodoSearch);
