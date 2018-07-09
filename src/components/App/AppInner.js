import React from 'react'
import { Redirect,Route, Switch } from "react-router";
import { sessionService } from 'redux-react-session';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";






// src
import './App.css';
import Home from '../Home';
import Note from '../Note';
import { Button } from '@material-ui/core';


const AppInnner = ({token,onClickSignout , user, authenticated, props }) => (
  
  <div >
    <div className=".App-root">
        <AppBar position="static" >
          <Toolbar >
      
            <Typography
              variant="title"
              color="inherit"
              className="App-flex"
            >
              GitNotes
            </Typography>
 


            <Avatar alt="Remy Sharp" src={user.photo} />
            <p  className="App-Name">{user.name}</p>
            
           

            
            
            <div>
              <Button variant="contained" color="secondary" onClick={onClickSignout} >
                SignOut
            </Button>
            </div>
          </Toolbar>
        </AppBar>
        </div>
    <div >
    <Switch>
    <Route token={token} path={props.match.path} exact RouteonEnter={sessionService.checkAuth} component={Home} />
    <Route token={token} path={`${props.match.path}/notebook/:id`} exact  RouteonEnter={sessionService.checkAuth} component={Note} />
    <Redirect to="/dashboard" />
    </Switch>
    </div>
   </div>


  );
  
export default (AppInnner)