import React from 'react';
import {
  Router,
  IndexRoute,
  Route,
  hashHistory
} from 'react-router';
import TodoApp from 'TodoApp';
import Login from 'Login';
import firebase from 'app/firebase/';

const requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

const isLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/todos');
  }
  next();
};

export default (
  <Router hashHistory={hashHistory}>
    <Route path="/">
      <Route path="todos" component={TodoApp} onEnter={requireLogin} />
      <IndexRoute component={Login} onEnter={isLoggedIn}/>
    </Route>
  </Router>
);
