import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import TodoSearch from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered input text', () => {
    const searchText = 'Dog';
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

    ReactDOM.findDOMNode(todoSearch.refs.searchText).value = searchText;
    TestUtils.Simulate.change(ReactDOM.findDOMNode(todoSearch.refs.searchText));

    expect(spy).toHaveBeenCalledWith(false, 'Dog');
  });

  it('should call onSearch with proper checked value', () => {
    const showCompleted = true;
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

    ReactDOM.findDOMNode(todoSearch.refs.showCompleted).checked = true;
    TestUtils.Simulate.change(ReactDOM.findDOMNode(todoSearch.refs.showCompleted));

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
