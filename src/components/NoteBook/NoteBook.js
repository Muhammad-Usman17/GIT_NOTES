// libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getOr from 'lodash/fp/getOr'
import { sessionService } from 'redux-react-session';

// src
import NoteBookInner from './NoteBookInner'
import { logout,createGist } from '../../redux/actions';
import { access } from 'fs';

class NoteBook extends Component {
 constructor()
 {super();
  this.state = {
    token: ''
  }
  
 }

 

  handleClickSignOut = () => {
    const {
      dispatch
    } = this.props
    dispatch(logout());
    
  }
  handleCreateGist = () => {
    const {
      dispatch
    } = this.props
    const token=this.state.token;
    
    dispatch(createGist({name:'sadain.txt',description:'i m chacha',token:token}));
  }

  newMethod() {
    return this;
  }

  render() {
    return <NoteBookInner onClickSignout = { this.handleClickSignOut  } onClickGist= { this.handleCreateGist  }  user={this.props.user}  authenticated={this.props.authenticated} 
    />
  }
}



function mapStateToProps(state, ownProps) {
 
  
  const user = getOr('', 'session.user')(state)
  const authenticated = getOr('', 'session.authenticated')(state)
  
  return {
    user,
    authenticated
  };
}


export default connect(mapStateToProps)(NoteBook);