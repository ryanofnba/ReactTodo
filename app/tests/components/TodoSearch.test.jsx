import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import { TodoSearch } from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    const searchText = 'Dog';
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    };
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

    ReactDOM.findDOMNode(todoSearch.refs.searchText).value = searchText;
    TestUtils.Simulate.change(ReactDOM.findDOMNode(todoSearch.refs.searchText));

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
    const showCompleted = true;
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

    ReactDOM.findDOMNode(todoSearch.refs.showCompleted).checked = true;
    TestUtils.Simulate.change(ReactDOM.findDOMNode(todoSearch.refs.showCompleted));

    expect(spy).toHaveBeenCalledWith(action);
  });
});
