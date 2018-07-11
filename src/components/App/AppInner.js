// lib
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { sessionService } from 'redux-react-session';

// src
import './App.css';
import Home from '../Home';
import Note from '../Note';
import history from '../../utils/history';
import Header from '../Header';

const AppInner = ({ onClickSignout, user, authenticated, path }) =>
  <div>
    <Header onClickSignout={onClickSignout} user={user} authenticated={authenticated} />
    <Switch>
      <Route path={path} exact RouteonEnter={sessionService.checkAuth} component={Home} />
      <Route
        path={`${path}/notebook/:id`}
        exact
        RouteonEnter={sessionService.checkAuth}
        component={Note}
      />
      <Redirect to="/dashboard" />
    </Switch>
  </div>;

export default AppInner;
