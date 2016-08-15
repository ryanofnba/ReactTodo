import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import { Todo } from 'Todo';

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should dispatch TOGGLE_TODO action on click', () => {
    const todoData = {
      id: 199,
      text: 'Write todo.test.jsx test',
      completed: true
    };

    const spy = expect.createSpy();
    const todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />);
    const $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: todoData.id
    });
  })
});
