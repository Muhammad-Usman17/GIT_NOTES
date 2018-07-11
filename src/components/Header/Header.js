// lib
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// src
import './Header.css';
import history from '../../utils/history';

const Header = props => {
  const { user, authenticated, onClickSignout } = props;
  const { photo, name } = user;
  const classStyle = authenticated ? 'Header-root' : 'Header-root-hide';
  return (
    <div className={classStyle}>
      <AppBar position="static">
        <Toolbar>
          <div className="Header-flex">
            <Typography variant="title" color="inherit">
              GitNotes
            </Typography>
            <Button
              className="Header-Button"
              onClick={() => {
                history.replace('/dashboard');
              }}
            >
              Home
            </Button>
            <Button
              className="Header-Button"
              onClick={() => {
                history.replace('/Search');
              }}
            >
              Search
            </Button>
          </div>
          <Avatar alt="Remy Sharp" src={photo} />
          <p className="Header-Name">
            {name}
          </p>
          <div>
            <Button variant="contained" color="secondary" onClick={onClickSignout}>
              SignOut
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
