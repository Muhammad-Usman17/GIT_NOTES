// libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getOr from 'lodash/fp/getOr'
import { sessionService } from 'redux-react-session';

// src
import HomeInner from './HomeInner'
import { logout,createGist } from '../../redux/actions';
import history from '../../utils/history'
import { access } from 'fs';

class Home extends Component {
 constructor()
 {super();
  this.state = {
    token: ''
  }
  
 }
//  componentWillMount()
//  {
//   const authenticated= this.props
//   if (!authenticated)
//   {
//     history.replace('/signIn');
//   }
//  }
 componentDidMount(){
  sessionService.loadSession().then((result) => {
     return result.tok;
  })
  .then((response) => {
     this.setState({ token:response});
  });
}
 
handleChangeName = event => {
  this.setState({ name: event.target.value });
};
handleChangeDescription = event => {
  this.setState({ description: event.target.value });
};
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
    
    dispatch(createGist({name:this.state.name,description:this.state.description,token:token}));
  }



  render() {
    return <HomeInner handleChangeName = { this.handleChangeName  } handleChangeDescription ={this.handleChangeDescription} onClickSignout = { this.handleClickSignOut  } onClickGist= { this.handleCreateGist  }  user={this.props.user}  authenticated={this.props.authenticated} 
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


export default connect(mapStateToProps)(Home);