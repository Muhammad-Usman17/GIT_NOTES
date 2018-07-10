// libs
import React from 'react';
import Button from '@material-ui/core/Button';

// src
import logo from '../../images/github.png';
import history from '../../utils/history';
import './SignInInner.css';

const SignInInner = ({ onClickSignIn }) =>
  <div className="SignIn">
    <header className="SignIn-header">
      <img src={logo} className="SignIn-logo" alt="logo" />
      <h1 className="SignIn-title">Welcome to GitNotes</h1>
    </header>
    <Button color="primary" onClick={onClickSignIn}>
      SignIn with Github
    </Button>
    <Button
      color="secondary"
      onClick={() => {
        history.push('/search');
      }}
    >
      Search NoteBook
    </Button>
  </div>;

export default SignInInner;
