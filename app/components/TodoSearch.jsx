import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class TodoSearch extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    const showCompleted = ReactDOM.findDOMNode(this.refs.showCompleted).checked;
    const searchText = ReactDOM.findDOMNode(this.refs.searchText).value;

    this.props.onSearch(showCompleted, searchText);
  }

  render() {
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch} />
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
            Show Completed Todos
          </label>
        </div>
      </div>
    );
  }
}

export default TodoSearch;
